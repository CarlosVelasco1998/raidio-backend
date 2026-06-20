// analytics.js — Sistema de analytics de Sancho
// SQLite (better-sqlite3) en disco persistente + ingesta + dashboard web.
// Se monta sobre la app Express con mountAnalytics(app).
//
// Endpoints:
//   POST /analytics/event     -> ingesta (1 evento o array/batch). Pública, con whitelist + cap.
//   GET  /analytics/summary   -> ?key=SECRET&days=30  agregados JSON para el dashboard
//   GET  /dashboard           -> ?key=SECRET  HTML único con branding Sancho + Chart.js

import Database from "better-sqlite3";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const DB_PATH = process.env.ANALYTICS_DB_PATH
  || (process.env.RENDER ? "/data/analytics.db" : "./analytics.db");

const DASHBOARD_KEY = process.env.DASHBOARD_KEY || "sancho-dev";

// Panel de consumo de IA.
//   CLAUDE_CREDIT_USD          -> saldo prepago de la API de Claude (USD) que quedaba
//                                 en el momento del deploy. El "restante" = crédito - gasto acumulado.
//   ELEVEN_MONTHLY_CHAR_BUDGET -> caracteres de ElevenLabs/mes (fallback si falla su API).
// Si no se configuran, el dashboard muestra solo lo consumido (sin "restante").
const CLAUDE_CREDIT_USD  = Number(process.env.CLAUDE_CREDIT_USD)          || null;
const ELEVEN_CHAR_BUDGET = Number(process.env.ELEVEN_MONTHLY_CHAR_BUDGET) || null;

// Precios de Claude en USD por millón de tokens (entrada/salida). Si cambian las
// tarifas de Anthropic, actualiza esta tabla. Fuente: precios oficiales Anthropic.
const CLAUDE_PRICES = {
  haiku:  { in: 1.00, out: 5.00 },   // claude-haiku-4-5
  sonnet: { in: 3.00, out: 15.00 },  // claude-sonnet-4-6
  opus:   { in: 5.00, out: 25.00 },  // claude-opus-4-x
};
function claudeCost(model, tokensIn, tokensOut) {
  const m = String(model || "").toLowerCase();
  const p = m.includes("haiku")  ? CLAUDE_PRICES.haiku
          : m.includes("sonnet") ? CLAUDE_PRICES.sonnet
          : m.includes("opus")   ? CLAUDE_PRICES.opus
          : CLAUDE_PRICES.haiku;   // por defecto, el más barato
  return ((tokensIn || 0) / 1e6) * p.in + ((tokensOut || 0) / 1e6) * p.out;
}
const round4 = (n) => Math.round(n * 10000) / 10000;

// Tope de eventos por petición (anti-spam) y de longitud de campos de texto.
const MAX_BATCH = 500;
const MAX_TEXT  = 300;

// Solo se guardan eventos con un nombre conocido (anti-spam / anti-basura).
const ALLOWED_EVENTS = new Set([
  "app_open", "raidio_app_open",
  "trip_started", "trip_ended",
  "learn_enabled",
  "poi_narration_started", "poi_narration_completed", "poi_narration_replayed",
  "sponsor_injected", "sponsor_navigation_opened",
  "game_started", "game_finished",
  "province_welcome",
  "language_changed",
]);

// Columnas "calientes" que se extraen del evento para consultas rápidas.
// Todo lo demás (y también esto) se guarda íntegro en la columna params (JSON).
const HOT_COLS = [
  "user_id", "trip_id", "platform", "lang",
  "poi_id", "poi_nombre", "poi_perfil", "provincia",
  "game", "sponsor_name",
];
const NUM_COLS = ["duration_seconds", "audio_seconds", "value"];

// ─── DB ──────────────────────────────────────────────────────────────────────
let db;
let insertStmt;

function initDb() {
  db = new Database(DB_PATH);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id               INTEGER PRIMARY KEY AUTOINCREMENT,
      event_name       TEXT    NOT NULL,
      ts               INTEGER NOT NULL,
      client_ts        INTEGER,
      day              TEXT    NOT NULL,
      user_id          TEXT,
      trip_id          TEXT,
      platform         TEXT,
      lang             TEXT,
      poi_id           TEXT,
      poi_nombre       TEXT,
      poi_perfil       TEXT,
      provincia        TEXT,
      game             TEXT,
      sponsor_name     TEXT,
      duration_seconds INTEGER,
      audio_seconds    INTEGER,
      value            REAL,
      tokens_in        INTEGER,
      tokens_out       INTEGER,
      chars            INTEGER,
      model            TEXT,
      params           TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_events_name      ON events(event_name);
    CREATE INDEX IF NOT EXISTS idx_events_day       ON events(day);
    CREATE INDEX IF NOT EXISTS idx_events_poi       ON events(poi_id);
    CREATE INDEX IF NOT EXISTS idx_events_provincia ON events(provincia);
    CREATE INDEX IF NOT EXISTS idx_events_game      ON events(game);
    CREATE INDEX IF NOT EXISTS idx_events_ts        ON events(ts);
  `);

  // Migración aditiva: añade las columnas de consumo si la tabla ya existía sin ellas.
  // (ALTER TABLE ADD COLUMN falla si la columna ya existe → se ignora el error.)
  for (const col of ["tokens_in INTEGER", "tokens_out INTEGER", "chars INTEGER", "model TEXT"]) {
    try { db.exec(`ALTER TABLE events ADD COLUMN ${col}`); } catch { /* ya existe */ }
  }

  insertStmt = db.prepare(`
    INSERT INTO events (
      event_name, ts, client_ts, day,
      user_id, trip_id, platform, lang,
      poi_id, poi_nombre, poi_perfil, provincia,
      game, sponsor_name,
      duration_seconds, audio_seconds, value,
      tokens_in, tokens_out, chars, model, params
    ) VALUES (
      @event_name, @ts, @client_ts, @day,
      @user_id, @trip_id, @platform, @lang,
      @poi_id, @poi_nombre, @poi_perfil, @provincia,
      @game, @sponsor_name,
      @duration_seconds, @audio_seconds, @value,
      @tokens_in, @tokens_out, @chars, @model, @params
    )
  `);

  console.log(`✅ Analytics DB lista — ${DB_PATH}`);
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const dayFmt = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Madrid", year: "numeric", month: "2-digit", day: "2-digit",
});
function dayMadrid(ms) { return dayFmt.format(new Date(ms)); } // 'YYYY-MM-DD'

function str(v) {
  if (v === null || v === undefined) return null;
  const s = String(v);
  return s.length > MAX_TEXT ? s.slice(0, MAX_TEXT) : s;
}
function num(v) {
  if (v === null || v === undefined || v === "") return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

// Normaliza un evento entrante (objeto plano de params) a una fila de la tabla.
function toRow(ev) {
  if (!ev || typeof ev !== "object") return null;
  const name = String(ev.event_name || ev.name || "").trim();
  if (!ALLOWED_EVENTS.has(name)) return null;

  const ts = Date.now();                              // recepción servidor
  const clientTs = num(ev.client_ts) ?? num(ev.ts) ?? null;
  const effTs = clientTs ?? ts;                        // hora real del evento

  // La app renombra user_id -> raidio_uid; aceptamos ambos.
  const userId = ev.user_id ?? ev.raidio_uid ?? null;

  const row = {
    event_name: name,
    ts,
    client_ts: clientTs,
    day: dayMadrid(effTs),
    user_id: str(userId),
    // Columnas de consumo de IA: solo se rellenan en eventos server-side (recordUsage).
    tokens_in: null, tokens_out: null, chars: null, model: null,
    params: null,
  };
  for (const c of HOT_COLS) {
    if (c === "user_id") continue;
    row[c] = str(ev[c]);
  }
  for (const c of NUM_COLS) row[c] = num(ev[c]);
  // value genérico: usa value, o score si no hay value.
  if (row.value === null) row.value = num(ev.score);

  // Guardamos el evento completo en params (sin event_name redundante).
  const { event_name, name: _n, ...rest } = ev;
  try { row.params = JSON.stringify(rest).slice(0, 4000); } catch { row.params = null; }

  return row;
}

// ─── REGISTRO DE CONSUMO DE IA (server-side) ─────────────────────────────────
// Se llama desde el backend tras cada llamada real a una API de pago.
// NO pasa por la whitelist pública: nadie puede falsear consumo desde la app.
//   recordUsage({ provider:'claude', model, tokensIn, tokensOut, context, lang })
//   recordUsage({ provider:'eleven', model, chars, context, lang })
export function recordUsage(u) {
  if (!db || !insertStmt || !u) return;
  try {
    const provider = u.provider === "eleven" ? "eleven" : "claude";
    const ts = Date.now();
    insertStmt.run({
      event_name: provider === "eleven" ? "tts_chars" : "ai_tokens",
      ts,
      client_ts: null,
      day: dayMadrid(ts),
      user_id: null,
      trip_id: null,
      platform: "server",
      lang: str(u.lang),
      poi_id: null,
      poi_nombre: null,
      poi_perfil: null,
      provincia: null,
      game: str(u.context),       // reutilizamos 'game' como etiqueta de origen (narracion, quiz, cuento…)
      sponsor_name: null,
      duration_seconds: null,
      audio_seconds: null,
      value: null,
      tokens_in: provider === "claude" ? (num(u.tokensIn) ?? 0) : null,
      tokens_out: provider === "claude" ? (num(u.tokensOut) ?? 0) : null,
      chars: provider === "eleven" ? (num(u.chars) ?? 0) : null,
      model: str(u.model),
      params: null,
    });
  } catch (e) {
    console.error("ERROR recordUsage:", e.message);
  }
}

// ─── AGREGACIONES (summary) ──────────────────────────────────────────────────
// Listas para los desplegables de filtro (POIs y sponsors disponibles en el rango).
function buildFilters(W, p) {
  const pois = db.prepare(
    `SELECT poi_id id, MAX(poi_nombre) label, COUNT(*) c FROM events
     WHERE event_name='poi_narration_completed' AND poi_id IS NOT NULL AND poi_id<>'' ${W}
     GROUP BY poi_id ORDER BY c DESC`).all(p);
  const sponsors = db.prepare(
    `SELECT sponsor_name label, COUNT(*) c FROM events
     WHERE event_name='sponsor_injected' AND sponsor_name IS NOT NULL AND sponsor_name<>'' ${W}
     GROUP BY sponsor_name ORDER BY c DESC`).all(p);
  return { pois, sponsors };
}

// Detalle de un POI concreto (filtrado por poi_id).
function buildPoiDetail(poi, W, p) {
  const pp = { ...p, poi };
  const one = (sql) => db.prepare(sql).get(pp) || {};
  const all = (sql) => db.prepare(sql).all(pp) || [];
  const F = "AND poi_id=@poi";

  const iniciadas = one(
    `SELECT COUNT(*) c FROM events WHERE event_name='poi_narration_started' ${F} ${W}`).c || 0;
  const narraciones = one(
    `SELECT COUNT(*) c FROM events WHERE event_name='poi_narration_completed' ${F} ${W}`).c || 0;

  return {
    label: one(`SELECT MAX(poi_nombre) l FROM events WHERE poi_id=@poi ${W}`).l || poi,
    kpis: {
      narraciones,
      minutos_audio: Math.round((one(
        `SELECT COALESCE(SUM(audio_seconds),0) s FROM events WHERE event_name='poi_narration_completed' ${F} ${W}`).s || 0) / 60),
      viajes: one(
        `SELECT COUNT(DISTINCT trip_id) c FROM events WHERE trip_id IS NOT NULL AND trip_id<>'no_trip' ${F} ${W}`).c || 0,
      tasa_finalizacion: iniciadas ? Math.round(narraciones / iniciadas * 100) : 0,
    },
    timeseries: all(
      `SELECT day, COUNT(*) c FROM events WHERE event_name='poi_narration_completed' ${F} ${W}
       GROUP BY day ORDER BY day ASC`),
    idioma: all(
      `SELECT COALESCE(lang,'?') label, COUNT(*) c FROM events
       WHERE event_name='poi_narration_completed' AND lang IS NOT NULL AND lang<>'' ${F} ${W}
       GROUP BY lang ORDER BY c DESC`),
    provincia: all(
      `SELECT provincia label, COUNT(*) c FROM events
       WHERE event_name='poi_narration_completed' AND provincia IS NOT NULL AND provincia<>'' ${F} ${W}
       GROUP BY provincia ORDER BY c DESC LIMIT 10`),
    sponsors: all(
      `SELECT COALESCE(sponsor_name,'¿?') label, COUNT(*) c FROM events
       WHERE event_name='sponsor_injected' AND sponsor_name IS NOT NULL ${F} ${W}
       GROUP BY sponsor_name ORDER BY c DESC LIMIT 10`),
  };
}

// Detalle de un sponsor concreto (filtrado por sponsor_name).
function buildSponsorDetail(sponsor, W, p) {
  const sp = { ...p, sponsor };
  const one = (sql) => db.prepare(sql).get(sp) || {};
  const all = (sql) => db.prepare(sql).all(sp) || [];
  const F = "AND sponsor_name=@sponsor";

  const impresiones = one(
    `SELECT COUNT(*) c FROM events WHERE event_name='sponsor_injected' ${F} ${W}`).c || 0;
  const navegaciones = one(
    `SELECT COUNT(*) c FROM events WHERE event_name='sponsor_navigation_opened' ${F} ${W}`).c || 0;

  return {
    label: sponsor,
    kpis: {
      impresiones,
      navegaciones,
      ctr: impresiones ? Math.round(navegaciones / impresiones * 100) : 0,
      viajes: one(
        `SELECT COUNT(DISTINCT trip_id) c FROM events
         WHERE event_name IN ('sponsor_injected','sponsor_navigation_opened')
         AND trip_id IS NOT NULL AND trip_id<>'no_trip' ${F} ${W}`).c || 0,
    },
    timeseries: all(
      `SELECT day, COUNT(*) c FROM events WHERE event_name='sponsor_injected' ${F} ${W}
       GROUP BY day ORDER BY day ASC`),
    idioma: all(
      `SELECT COALESCE(lang,'?') label, COUNT(*) c FROM events
       WHERE event_name='sponsor_injected' AND lang IS NOT NULL AND lang<>'' ${F} ${W}
       GROUP BY lang ORDER BY c DESC`),
    topPois: all(
      `SELECT COALESCE(poi_nombre, poi_id, '¿?') label, COUNT(*) c FROM events
       WHERE event_name='sponsor_injected' ${F} ${W}
       GROUP BY label ORDER BY c DESC LIMIT 10`),
    provincia: all(
      `SELECT provincia label, COUNT(*) c FROM events
       WHERE event_name='sponsor_injected' AND provincia IS NOT NULL AND provincia<>'' ${F} ${W}
       GROUP BY provincia ORDER BY c DESC LIMIT 10`),
  };
}

// Consumo de IA para el panel.
// Claude: gasto en USD (saldo prepago que se agota) — acumulado + mes en curso,
//   con desglose de coste por modelo. ElevenLabs: caracteres del mes (plan mensual).
function buildUsage() {
  const month = dayMadrid(Date.now()).slice(0, 7); // 'YYYY-MM'

  // Tokens de Claude por modelo: acumulado (toda la vida) y del mes en curso.
  // El coste depende del modelo, así que se calcula en JS sobre estas sumas.
  const rowsAll = db.prepare(
    `SELECT COALESCE(model,'¿?') model, COALESCE(SUM(tokens_in),0) ti,
            COALESCE(SUM(tokens_out),0) to_, COUNT(*) c
     FROM events WHERE event_name='ai_tokens' GROUP BY model`).all();
  const rowsMonth = db.prepare(
    `SELECT COALESCE(model,'¿?') model, COALESCE(SUM(tokens_in),0) ti, COALESCE(SUM(tokens_out),0) to_
     FROM events WHERE event_name='ai_tokens' AND substr(day,1,7)=? GROUP BY model`).all(month);

  const porModelo = rowsAll.map((r) => ({
    model: r.model,
    tokensIn: r.ti, tokensOut: r.to_, llamadas: r.c,
    coste: round4(claudeCost(r.model, r.ti, r.to_)),
  })).sort((a, b) => b.coste - a.coste);

  const costeTotal = round4(rowsAll.reduce((s, r) => s + claudeCost(r.model, r.ti, r.to_), 0));
  const costeMes   = round4(rowsMonth.reduce((s, r) => s + claudeCost(r.model, r.ti, r.to_), 0));
  const llamadas   = rowsAll.reduce((s, r) => s + r.c, 0);

  // ElevenLabs: caracteres del mes en curso (se enriquece con la suscripción real en la ruta).
  const ev = db.prepare(
    `SELECT COALESCE(SUM(chars),0) chars, COUNT(*) c
     FROM events WHERE event_name='tts_chars' AND substr(day,1,7)=?`).get(month) || {};
  const elevenChars = ev.chars || 0;

  return {
    month,
    claude: {
      costeTotal, costeMes, llamadas,
      credito: CLAUDE_CREDIT_USD,
      restante: CLAUDE_CREDIT_USD != null ? Math.max(0, round4(CLAUDE_CREDIT_USD - costeTotal)) : null,
      porModelo,
    },
    eleven: {
      chars: elevenChars,
      llamadas: ev.c || 0,
      budget: ELEVEN_CHAR_BUDGET,
      restante: ELEVEN_CHAR_BUDGET ? Math.max(0, ELEVEN_CHAR_BUDGET - elevenChars) : null,
      // 'real' se rellena en la ruta /analytics/summary con la suscripción de ElevenLabs.
      real: null,
    },
  };
}

function buildSummary(days, opts = {}) {
  // Filtro temporal por ts (epoch ms). days<=0 => todo el histórico.
  const hasRange = Number.isFinite(days) && days > 0;
  const since = hasRange ? Date.now() - days * 86400000 : 0;
  const W = hasRange ? "AND COALESCE(client_ts, ts) >= @since" : "";
  const p = { since };

  const one = (sql) => db.prepare(sql).get(p) || {};
  const all = (sql) => db.prepare(sql).all(p) || [];

  const filters = buildFilters(W, p);
  const meta = { generatedAt: new Date().toISOString(), days: hasRange ? days : null, filters };

  if (opts.poi)     return { mode: "poi",     ...meta, detail: buildPoiDetail(opts.poi, W, p) };
  if (opts.sponsor) return { mode: "sponsor", ...meta, detail: buildSponsorDetail(opts.sponsor, W, p) };

  const kpis = {
    narraciones: one(
      `SELECT COUNT(*) c FROM events WHERE event_name='poi_narration_completed' ${W}`).c || 0,
    minutos_audio: Math.round((one(
      `SELECT COALESCE(SUM(audio_seconds),0) s FROM events WHERE event_name='poi_narration_completed' ${W}`).s || 0) / 60),
    sesiones: one(
      `SELECT COUNT(*) c FROM events WHERE event_name='trip_started' ${W}`).c || 0,
    partidas: one(
      `SELECT COUNT(*) c FROM events WHERE event_name='game_started' ${W}`).c || 0,
    reescuchas: one(
      `SELECT COUNT(*) c FROM events WHERE event_name='poi_narration_replayed' ${W}`).c || 0,
  };

  const timeseries = all(
    `SELECT day, COUNT(*) c FROM events
     WHERE event_name='poi_narration_completed' ${W}
     GROUP BY day ORDER BY day ASC`);

  const topPois = all(
    `SELECT COALESCE(poi_nombre, poi_id, '¿?') label, COUNT(*) c FROM events
     WHERE event_name='poi_narration_completed' ${W}
     GROUP BY label ORDER BY c DESC LIMIT 10`);

  const porProvincia = all(
    `SELECT provincia label, COUNT(*) c FROM events
     WHERE event_name='poi_narration_completed' AND provincia IS NOT NULL AND provincia<>'' ${W}
     GROUP BY provincia ORDER BY c DESC LIMIT 15`);

  const juegos = all(
    `SELECT COALESCE(game,'¿?') label, COUNT(*) c FROM events
     WHERE event_name='game_started' ${W}
     GROUP BY game ORDER BY c DESC`);

  const sponsors = {
    impresiones: one(
      `SELECT COUNT(*) c FROM events WHERE event_name='sponsor_injected' ${W}`).c || 0,
    navegaciones: one(
      `SELECT COUNT(*) c FROM events WHERE event_name='sponsor_navigation_opened' ${W}`).c || 0,
    top: all(
      `SELECT COALESCE(sponsor_name,'¿?') label, COUNT(*) c FROM events
       WHERE event_name='sponsor_injected' AND sponsor_name IS NOT NULL ${W}
       GROUP BY sponsor_name ORDER BY c DESC LIMIT 10`),
  };

  const idioma = all(
    `SELECT COALESCE(lang,'?') label, COUNT(*) c FROM events
     WHERE lang IS NOT NULL AND lang<>'' ${W}
     GROUP BY lang ORDER BY c DESC`);

  const bienvenidas = all(
    `SELECT COALESCE(provincia,'¿?') label, COUNT(*) c FROM events
     WHERE event_name='province_welcome' AND provincia IS NOT NULL ${W}
     GROUP BY provincia ORDER BY c DESC LIMIT 15`);

  const totalEventos = one(`SELECT COUNT(*) c FROM events ${hasRange ? "WHERE COALESCE(client_ts, ts) >= @since" : ""}`).c || 0;

  return {
    mode: "global",
    ...meta,
    totalEventos,
    kpis, timeseries, topPois, porProvincia,
    juegos, sponsors, idioma, bienvenidas,
    uso: buildUsage(),
  };
}

// Suscripción real de ElevenLabs (consumo/limite del ciclo de facturación).
// Cacheada 60s. Devuelve null si no hay API key o falla la llamada.
let _elevenCache = { at: 0, data: null };
async function fetchElevenSubscription() {
  const key = process.env.ELEVEN_API_KEY;
  if (!key) return null;
  if (Date.now() - _elevenCache.at < 60000) return _elevenCache.data;
  try {
    const r = await fetch("https://api.elevenlabs.io/v1/user/subscription", {
      headers: { "xi-api-key": key },
    });
    if (!r.ok) throw new Error("HTTP " + r.status);
    const s = await r.json();
    const data = {
      used: s.character_count ?? null,
      limit: s.character_limit ?? null,
      restante: (s.character_limit != null && s.character_count != null)
        ? Math.max(0, s.character_limit - s.character_count) : null,
      nextReset: s.next_character_count_reset_unix
        ? s.next_character_count_reset_unix * 1000 : null,
      tier: s.tier ?? null,
    };
    _elevenCache = { at: Date.now(), data };
    return data;
  } catch (e) {
    console.error("ERROR fetchElevenSubscription:", e.message);
    _elevenCache = { at: Date.now(), data: null };
    return null;
  }
}

// ─── RUTAS ───────────────────────────────────────────────────────────────────
export function mountAnalytics(app) {
  initDb();

  // Ingesta — pública, fire-and-forget desde la app.
  app.post("/analytics/event", (req, res) => {
    try {
      const body = req.body;
      let list = [];
      if (Array.isArray(body)) list = body;
      else if (Array.isArray(body?.events)) list = body.events;
      else if (body && typeof body === "object") list = [body];

      if (list.length === 0) return res.status(400).json({ error: "sin eventos" });
      if (list.length > MAX_BATCH) list = list.slice(0, MAX_BATCH);

      const rows = list.map(toRow).filter(Boolean);
      if (rows.length === 0) return res.json({ ok: true, stored: 0, ignored: list.length });

      const tx = db.transaction((items) => { for (const r of items) insertStmt.run(r); });
      tx(rows);

      res.json({ ok: true, stored: rows.length, ignored: list.length - rows.length });
    } catch (e) {
      console.error("ERROR /analytics/event:", e.message);
      res.status(500).json({ error: "analytics_failed" });
    }
  });

  // Resumen JSON — protegido por key.
  app.get("/analytics/summary", async (req, res) => {
    if (req.query.key !== DASHBOARD_KEY) return res.status(401).json({ error: "no autorizado" });
    try {
      const days = req.query.days === "all" ? 0 : parseInt(req.query.days || "30", 10);
      const poi = (req.query.poi || "").toString().trim() || null;
      const sponsor = (req.query.sponsor || "").toString().trim() || null;
      const summary = buildSummary(days, { poi, sponsor });
      // Enriquecer consumo de ElevenLabs con su suscripción real (solo vista global).
      if (summary.mode === "global" && summary.uso) {
        summary.uso.eleven.real = await fetchElevenSubscription();
      }
      res.json(summary);
    } catch (e) {
      console.error("ERROR /analytics/summary:", e.message);
      res.status(500).json({ error: "summary_failed" });
    }
  });

  // Dashboard HTML — protegido por key.
  app.get("/dashboard", (req, res) => {
    if (req.query.key !== DASHBOARD_KEY) {
      return res.status(401).send("<h1>401 — no autorizado</h1><p>Falta ?key=</p>");
    }
    res.type("html").send(DASHBOARD_HTML);
  });

  console.log("✅ Analytics montado — /analytics/event, /analytics/summary, /dashboard");
}

// ─── DASHBOARD (HTML único, inline CSS+JS, Chart.js CDN) ─────────────────────
const DASHBOARD_HTML = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Sancho · Analytics</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
<style>
  :root{
    --burdeos:#4A1029; --burdeos2:#5e1535; --dorado:#D6A847; --crema:#F5ECD0;
    --crema-dim:rgba(245,236,208,.62); --line:rgba(214,168,71,.22);
    --glass:rgba(245,236,208,.06);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  body{
    font-family:'Outfit',system-ui,sans-serif; color:var(--crema);
    background:radial-gradient(1200px 700px at 80% -10%, #6a1840 0%, var(--burdeos) 55%, #350a1d 100%);
    min-height:100vh; padding:28px clamp(16px,4vw,48px) 64px;
  }
  header{display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; margin-bottom:18px}
  .brand{display:flex; align-items:baseline; gap:14px}
  .brand h1{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(28px,4vw,42px); letter-spacing:.5px}
  .brand .dot{color:var(--dorado)}
  .brand span.sub{color:var(--crema-dim); font-size:14px; letter-spacing:3px; text-transform:uppercase}
  .ranges{display:flex; gap:8px; background:var(--glass); border:1px solid var(--line); padding:6px; border-radius:14px}
  .ranges button{
    font-family:'Outfit'; font-size:13px; font-weight:600; color:var(--crema-dim);
    background:transparent; border:0; padding:8px 14px; border-radius:10px; cursor:pointer; transition:.15s;
  }
  .ranges button:hover{color:var(--crema)}
  .ranges button.active{background:var(--dorado); color:var(--burdeos)}

  .toolbar{display:flex; align-items:center; gap:12px; flex-wrap:wrap; margin-bottom:24px}
  .toolbar .lbl{color:var(--crema-dim); font-size:12px; letter-spacing:1.5px; text-transform:uppercase; margin-right:2px}
  .sel{
    position:relative; background:var(--glass); border:1px solid var(--line); border-radius:12px;
  }
  .sel select{
    appearance:none; -webkit-appearance:none; background:transparent; border:0; outline:0;
    color:var(--crema); font-family:'Outfit'; font-size:14px; font-weight:500;
    padding:10px 38px 10px 14px; border-radius:12px; cursor:pointer; max-width:280px;
  }
  .sel::after{content:'▾'; position:absolute; right:14px; top:50%; transform:translateY(-50%); color:var(--dorado); pointer-events:none}
  .sel select option{background:#3a0c20; color:var(--crema)}
  .sel select:focus{outline:1px solid var(--dorado)}
  .chip-clear{
    display:none; align-items:center; gap:8px; font-family:'Outfit'; font-size:13px; font-weight:600;
    color:var(--burdeos); background:var(--dorado); border:0; padding:9px 14px; border-radius:12px; cursor:pointer;
  }
  .chip-clear.show{display:inline-flex}

  .kpis{display:grid; grid-template-columns:repeat(auto-fit,minmax(190px,1fr)); gap:16px; margin-bottom:26px}
  .card{
    background:var(--glass); border:1px solid var(--line); border-radius:20px; padding:22px;
    backdrop-filter:blur(8px); position:relative; overflow:hidden;
  }
  .card::after{content:''; position:absolute; inset:0 0 auto 0; height:3px; background:linear-gradient(90deg,var(--dorado),transparent)}
  .kpi .label{color:var(--crema-dim); font-size:13px; font-weight:500; letter-spacing:.5px; text-transform:uppercase}
  .kpi .num{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(34px,5vw,50px); line-height:1.05; margin-top:8px}
  .kpi .icon{position:absolute; top:18px; right:20px; font-size:26px; opacity:.85}
  .grid{display:grid; grid-template-columns:repeat(12,1fr); gap:16px}
  .panel{display:flex; flex-direction:column}
  .panel h2{font-family:'Fraunces',serif; font-weight:500; font-size:19px; margin-bottom:4px}
  .panel .hint{color:var(--crema-dim); font-size:12px; margin-bottom:14px}
  .span12{grid-column:span 12}.span8{grid-column:span 8}.span6{grid-column:span 6}.span4{grid-column:span 4}
  @media(max-width:900px){.span8,.span6,.span4{grid-column:span 12}}
  .chart-wrap{position:relative; flex:1; min-height:240px}
  .spons{display:flex; gap:26px; flex-wrap:wrap; margin-top:6px}
  .spons .big{font-family:'Fraunces',serif; font-size:38px; color:var(--dorado)}
  .spons .lbl{font-size:12px; color:var(--crema-dim); text-transform:uppercase; letter-spacing:.5px}
  .detail-head{display:flex; align-items:baseline; gap:14px; margin-bottom:18px}
  .detail-head .tag{font-size:12px; letter-spacing:2px; text-transform:uppercase; color:var(--dorado)}
  .detail-head h2{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(22px,3vw,32px)}
  .sec-title{grid-column:span 12; display:flex; align-items:baseline; gap:12px; margin-top:14px}
  .sec-title h2{font-family:'Fraunces',serif; font-weight:500; font-size:21px}
  .sec-title .mon{color:var(--crema-dim); font-size:13px; letter-spacing:1px}
  .usage-head{display:flex; gap:34px; margin:8px 0 14px}
  .usage-head .big{font-family:'Fraunces',serif; font-size:clamp(30px,4vw,40px); color:var(--dorado); line-height:1.05}
  .usage-head .lbl{font-size:11px; color:var(--crema-dim); text-transform:uppercase; letter-spacing:.6px; margin-top:2px}
  .bar{height:10px; border-radius:6px; background:rgba(245,236,208,.10); overflow:hidden}
  .bar span{display:block; height:100%; width:0; border-radius:6px; background:linear-gradient(90deg,var(--dorado),#E8C57A); transition:width .45s ease}
  .bar span.warn{background:linear-gradient(90deg,#C98A3A,#B07A8A)}
  .bar span.over{background:linear-gradient(90deg,#A83246,#8A4060)}
  .usage-sub{color:var(--crema-dim); font-size:12px; margin-top:10px; line-height:1.6}
  .usage-sub b{color:var(--crema); font-weight:600}
  .hidden{display:none}
  footer{margin-top:34px; text-align:center; color:var(--crema-dim); font-size:12px}
</style>
</head>
<body>
  <header>
    <div class="brand">
      <h1>Sancho<span class="dot">.</span></h1>
      <span class="sub">Analytics</span>
    </div>
    <div class="ranges" id="ranges">
      <button data-d="7">7 días</button>
      <button data-d="30" class="active">30 días</button>
      <button data-d="90">90 días</button>
      <button data-d="all">Todo</button>
    </div>
  </header>

  <div class="toolbar">
    <span class="lbl">Filtrar</span>
    <div class="sel"><select id="fPoi"><option value="">Todos los POIs</option></select></div>
    <div class="sel"><select id="fSpon"><option value="">Todos los sponsors</option></select></div>
    <button class="chip-clear" id="fClear">✕ Volver al resumen</button>
  </div>

  <!-- ░░ VISTA GLOBAL ░░ -->
  <section id="globalView">
    <section class="kpis">
      <div class="card kpi"><div class="icon">🎙️</div><div class="label">Narraciones</div><div class="num" id="k_narr">—</div></div>
      <div class="card kpi"><div class="icon">⏱️</div><div class="label">Minutos de audio</div><div class="num" id="k_min">—</div></div>
      <div class="card kpi"><div class="icon">🚗</div><div class="label">Sesiones de viaje</div><div class="num" id="k_ses">—</div></div>
      <div class="card kpi"><div class="icon">🎮</div><div class="label">Partidas jugadas</div><div class="num" id="k_par">—</div></div>
      <div class="card kpi"><div class="icon">🔁</div><div class="label">Reescuchas</div><div class="num" id="k_rep">—</div></div>
    </section>

    <section class="grid">
      <div class="card panel span8"><h2>Actividad</h2><div class="hint">Narraciones por día</div><div class="chart-wrap"><canvas id="c_time"></canvas></div></div>
      <div class="card panel span4"><h2>Idioma</h2><div class="hint">Reparto ES / EN</div><div class="chart-wrap"><canvas id="c_lang"></canvas></div></div>
      <div class="card panel span6"><h2>Top POIs</h2><div class="hint">Los 10 más escuchados</div><div class="chart-wrap"><canvas id="c_pois"></canvas></div></div>
      <div class="card panel span6"><h2>POIs por provincia</h2><div class="hint">Distribución geográfica</div><div class="chart-wrap"><canvas id="c_prov"></canvas></div></div>
      <div class="card panel span4"><h2>Juegos</h2><div class="hint">Partidas por juego</div><div class="chart-wrap"><canvas id="c_games"></canvas></div></div>
      <div class="card panel span4"><h2>Sponsors</h2><div class="hint">Impresiones y navegaciones</div>
        <div class="spons">
          <div><div class="big" id="s_imp">—</div><div class="lbl">Impresiones</div></div>
          <div><div class="big" id="s_nav">—</div><div class="lbl">Navegaciones</div></div>
          <div><div class="big" id="s_ctr">—</div><div class="lbl">Click-through</div></div>
        </div>
        <div class="chart-wrap" style="min-height:170px;margin-top:10px"><canvas id="c_spons"></canvas></div>
      </div>
      <div class="card panel span4"><h2>Bienvenidas</h2><div class="hint">Provincias más visitadas</div><div class="chart-wrap"><canvas id="c_bien"></canvas></div></div>
    </section>

    <!-- ░░ CONSUMO DE IA (mes en curso) ░░ -->
    <section class="grid">
      <div class="sec-title"><h2>Consumo de IA</h2><span class="mon" id="u_month"></span></div>

      <div class="card panel span6">
        <h2>Claude · gasto (USD)</h2><div class="hint" id="u_claude_hint">Crédito prepago · gasto acumulado</div>
        <div class="usage-head">
          <div><div class="big" id="u_claude_used">—</div><div class="lbl">Gastado</div></div>
          <div><div class="big" id="u_claude_left">—</div><div class="lbl">Restante</div></div>
        </div>
        <div class="bar"><span id="u_claude_bar"></span></div>
        <div class="usage-sub" id="u_claude_sub"></div>
        <div class="chart-wrap" style="min-height:150px;margin-top:14px"><canvas id="c_usemodel"></canvas></div>
      </div>

      <div class="card panel span6">
        <h2>ElevenLabs · caracteres</h2><div class="hint" id="u_eleven_hint">Consumo del mes</div>
        <div class="usage-head">
          <div><div class="big" id="u_eleven_used">—</div><div class="lbl">Consumidos</div></div>
          <div><div class="big" id="u_eleven_left">—</div><div class="lbl">Restantes</div></div>
        </div>
        <div class="bar"><span id="u_eleven_bar"></span></div>
        <div class="usage-sub" id="u_eleven_sub"></div>
      </div>
    </section>
  </section>

  <!-- ░░ VISTA DETALLE (POI o Sponsor) ░░ -->
  <section id="detailView" class="hidden">
    <div class="detail-head"><span class="tag" id="d_tag">Detalle</span><h2 id="d_title">—</h2></div>
    <section class="kpis">
      <div class="card kpi"><div class="icon" id="dic1"></div><div class="label" id="dl1">—</div><div class="num" id="dk1">—</div></div>
      <div class="card kpi"><div class="icon" id="dic2"></div><div class="label" id="dl2">—</div><div class="num" id="dk2">—</div></div>
      <div class="card kpi"><div class="icon" id="dic3"></div><div class="label" id="dl3">—</div><div class="num" id="dk3">—</div></div>
      <div class="card kpi"><div class="icon" id="dic4"></div><div class="label" id="dl4">—</div><div class="num" id="dk4">—</div></div>
    </section>
    <section class="grid">
      <div class="card panel span8"><h2 id="dh_time">Actividad</h2><div class="hint" id="dhint_time"></div><div class="chart-wrap"><canvas id="d_time"></canvas></div></div>
      <div class="card panel span4"><h2>Idioma</h2><div class="hint">Reparto ES / EN</div><div class="chart-wrap"><canvas id="d_lang"></canvas></div></div>
      <div class="card panel span6"><h2 id="dh_a">—</h2><div class="hint" id="dhint_a"></div><div class="chart-wrap"><canvas id="d_a"></canvas></div></div>
      <div class="card panel span6"><h2 id="dh_b">—</h2><div class="hint" id="dhint_b"></div><div class="chart-wrap"><canvas id="d_b"></canvas></div></div>
    </section>
  </section>

  <footer>Sancho · copiloto de carretera con IA · panel generado en tiempo real</footer>

<script>
const GOLD='#D6A847', CREMA='#F5ECD0', DIM='rgba(245,236,208,.55)';
const PALETTE=['#D6A847','#E8C57A','#B07A8A','#8A4060','#C98A3A','#6E2A48','#E0B85F','#9C5A72'];
const KEY=new URLSearchParams(location.search).get('key')||'';
const cur={days:'30', poi:'', sponsor:''};
let charts={};
Chart.defaults.color=DIM; Chart.defaults.font.family="Outfit, sans-serif";
Chart.defaults.borderColor='rgba(214,168,71,.12)';
const nf=new Intl.NumberFormat('es-ES');
const langMap={es:'Español',en:'English'};
const gameMap={quiz:'Quiz en Ruta',adivina:'Adivina la Canción',cuentos:'Cuentos'};
const $=id=>document.getElementById(id);
function prettyModel(m){ if(!m) return '¿?'; const s=String(m).toLowerCase();
  if(s.includes('haiku')) return 'Haiku'; if(s.includes('sonnet')) return 'Sonnet';
  if(s.includes('opus')) return 'Opus'; return m; }
function pct(used,total){ return total>0 ? Math.min(100, Math.round(used/total*100)) : 0; }
function setBar(id,used,total){ const el=$(id); const p=pct(used,total);
  el.style.width=(total>0?p:0)+'%'; el.className=''; if(p>=100) el.classList.add('over'); else if(p>=80) el.classList.add('warn'); }

function destroy(id){ if(charts[id]){charts[id].destroy(); delete charts[id];} }
function lineChart(id,labels,data){
  destroy(id); const ctx=$(id);
  const g=ctx.getContext('2d').createLinearGradient(0,0,0,260);
  g.addColorStop(0,'rgba(214,168,71,.45)'); g.addColorStop(1,'rgba(214,168,71,0)');
  charts[id]=new Chart(ctx,{type:'line',data:{labels,datasets:[{data,fill:true,backgroundColor:g,
    borderColor:GOLD,borderWidth:2,tension:.35,pointRadius:2,pointBackgroundColor:GOLD}]},
    options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,grid:{color:'rgba(214,168,71,.1)'}},x:{grid:{display:false}}},maintainAspectRatio:false}});
}
function barChart(id,labels,data,horizontal){
  destroy(id);
  charts[id]=new Chart($(id),{type:'bar',data:{labels,datasets:[{data,backgroundColor:GOLD,borderRadius:6,maxBarThickness:30}]},
    options:{indexAxis:horizontal?'y':'x',plugins:{legend:{display:false}},
    scales:{x:{grid:{display:false}},y:{beginAtZero:true,grid:{color:'rgba(214,168,71,.1)'}}},maintainAspectRatio:false}});
}
function doughnut(id,labels,data){
  destroy(id);
  charts[id]=new Chart($(id),{type:'doughnut',data:{labels,datasets:[{data,backgroundColor:PALETTE,borderColor:'rgba(74,16,41,.6)',borderWidth:2}]},
    options:{cutout:'62%',plugins:{legend:{position:'bottom',labels:{padding:14,usePointStyle:true}}},maintainAspectRatio:false}});
}
function empty(id,msg){ destroy(id); const c=$(id); const ctx=c.getContext('2d');
  ctx.clearRect(0,0,c.width,c.height); ctx.fillStyle=DIM; ctx.font="14px Outfit"; ctx.textAlign="center";
  ctx.fillText(msg||'Sin datos todavía', c.width/2, c.height/2); }

function fillSelect(sel, items, value, makeLabel, makeVal){
  const keep=document.activeElement===sel;
  if(keep) return; // no romper si el usuario lo tiene abierto
  const first=sel.options[0];
  sel.innerHTML='';
  sel.appendChild(first);
  let found=false;
  for(const it of items){
    const o=document.createElement('option');
    o.value=makeVal(it); o.textContent=makeLabel(it);
    if(o.value===value) found=true;
    sel.appendChild(o);
  }
  if(value && !found){ const o=document.createElement('option'); o.value=value; o.textContent=value; sel.appendChild(o); }
  sel.value=value||'';
}

function setKpi(i,icon,label,val){ $('dic'+i).textContent=icon; $('dl'+i).textContent=label; $('dk'+i).textContent=val; }

function renderGlobal(d){
  $('globalView').classList.remove('hidden');
  $('detailView').classList.add('hidden');
  $('k_narr').textContent=nf.format(d.kpis.narraciones);
  $('k_min').textContent=nf.format(d.kpis.minutos_audio);
  $('k_ses').textContent=nf.format(d.kpis.sesiones);
  $('k_par').textContent=nf.format(d.kpis.partidas);
  $('k_rep').textContent=nf.format(d.kpis.reescuchas||0);
  d.timeseries.length ? lineChart('c_time',d.timeseries.map(x=>x.day),d.timeseries.map(x=>x.c)) : empty('c_time');
  d.idioma.length ? doughnut('c_lang',d.idioma.map(x=>langMap[x.label]||x.label),d.idioma.map(x=>x.c)) : empty('c_lang');
  d.topPois.length ? barChart('c_pois',d.topPois.map(x=>x.label),d.topPois.map(x=>x.c),true) : empty('c_pois');
  d.porProvincia.length ? barChart('c_prov',d.porProvincia.map(x=>x.label),d.porProvincia.map(x=>x.c),true) : empty('c_prov');
  d.juegos.length ? doughnut('c_games',d.juegos.map(x=>gameMap[x.label]||x.label),d.juegos.map(x=>x.c)) : empty('c_games');
  const imp=d.sponsors.impresiones, nav=d.sponsors.navegaciones;
  $('s_imp').textContent=nf.format(imp); $('s_nav').textContent=nf.format(nav);
  $('s_ctr').textContent=imp? Math.round(nav/imp*100)+'%':'—';
  d.sponsors.top.length ? barChart('c_spons',d.sponsors.top.map(x=>x.label),d.sponsors.top.map(x=>x.c),true) : empty('c_spons');
  d.bienvenidas.length ? barChart('c_bien',d.bienvenidas.map(x=>x.label),d.bienvenidas.map(x=>x.c),true) : empty('c_bien');
  renderUsage(d.uso);
}

function renderUsage(u){
  if(!u) return;
  $('u_month').textContent='· '+u.month;

  // ── Claude (gasto USD, saldo prepago acumulado) ──
  const c=u.claude;
  const usd = v => (v==null ? '—' : '$'+Number(v).toFixed(2));
  $('u_claude_used').textContent = usd(c.costeTotal);
  $('u_claude_left').textContent = c.credito!=null ? usd(c.restante) : '—';
  setBar('u_claude_bar', c.costeTotal, c.credito||0);
  $('u_claude_sub').innerHTML =
    'Este mes <b>'+usd(c.costeMes)+'</b> · '+nf.format(c.llamadas)+' llamadas'
    + (c.credito!=null ? ' · Crédito '+usd(c.credito) : ' · <i>configura CLAUDE_CREDIT_USD</i>');
  c.porModelo.length
    ? barChart('c_usemodel', c.porModelo.map(x=>prettyModel(x.model)), c.porModelo.map(x=>x.coste), true)
    : empty('c_usemodel','Sin consumo todavía');

  // ── ElevenLabs (caracteres) — prioriza la suscripción real si está disponible ──
  const e=u.eleven, real=e.real;
  const used  = real ? real.used  : e.chars;
  const limit = real ? real.limit : e.budget;
  const left  = real ? real.restante : e.restante;
  $('u_eleven_used').textContent = used!=null ? nf.format(used) : '—';
  $('u_eleven_left').textContent = left!=null ? nf.format(left) : '—';
  setBar('u_eleven_bar', used||0, limit||0);
  if(real){
    $('u_eleven_hint').textContent='Datos reales de ElevenLabs · ciclo de facturación';
    let s='Plan <b>'+(real.tier||'?')+'</b> · Límite '+nf.format(real.limit)
        + ' · '+nf.format(e.llamadas)+' llamadas propias registradas';
    if(real.nextReset) s+=' · Reinicia '+new Date(real.nextReset).toLocaleDateString('es-ES');
    $('u_eleven_sub').innerHTML=s;
  } else {
    $('u_eleven_hint').textContent='Consumo del mes (registrado por el backend)';
    $('u_eleven_sub').innerHTML = nf.format(e.llamadas)+' llamadas'
      + (e.budget ? ' · Cuota '+nf.format(e.budget) : ' · <i>sin cuota configurada</i>');
  }
}

function renderDetailCommon(tag, title, idioma, ts, tsHint){
  $('globalView').classList.add('hidden');
  $('detailView').classList.remove('hidden');
  $('d_tag').textContent=tag; $('d_title').textContent=title;
  $('dhint_time').textContent=tsHint;
  ts.length ? lineChart('d_time',ts.map(x=>x.day),ts.map(x=>x.c)) : empty('d_time');
  idioma.length ? doughnut('d_lang',idioma.map(x=>langMap[x.label]||x.label),idioma.map(x=>x.c)) : empty('d_lang');
}

function renderPoi(det){
  renderDetailCommon('POI', det.label, det.idioma, det.timeseries, 'Narraciones por día');
  setKpi(1,'🎙️','Narraciones', nf.format(det.kpis.narraciones));
  setKpi(2,'⏱️','Minutos de audio', nf.format(det.kpis.minutos_audio));
  setKpi(3,'🚗','Viajes (alcance)', nf.format(det.kpis.viajes));
  setKpi(4,'✅','Tasa finalización', det.kpis.tasa_finalizacion+'%');
  $('dh_a').textContent='Provincia'; $('dhint_a').textContent='Dónde se escucha';
  det.provincia.length ? barChart('d_a',det.provincia.map(x=>x.label),det.provincia.map(x=>x.c),true) : empty('d_a');
  $('dh_b').textContent='Sponsors asociados'; $('dhint_b').textContent='Impresiones de sponsor en este POI';
  det.sponsors.length ? barChart('d_b',det.sponsors.map(x=>x.label),det.sponsors.map(x=>x.c),true) : empty('d_b','Sin sponsors en este POI');
}

function renderSponsor(det){
  renderDetailCommon('Sponsor', det.label, det.idioma, det.timeseries, 'Impresiones por día');
  setKpi(1,'📢','Impresiones', nf.format(det.kpis.impresiones));
  setKpi(2,'🧭','Navegaciones', nf.format(det.kpis.navegaciones));
  setKpi(3,'🎯','Click-through', det.kpis.ctr+'%');
  setKpi(4,'🚗','Viajes (alcance)', nf.format(det.kpis.viajes));
  $('dh_a').textContent='POIs donde aparece'; $('dhint_a').textContent='Top 10 POIs';
  det.topPois.length ? barChart('d_a',det.topPois.map(x=>x.label),det.topPois.map(x=>x.c),true) : empty('d_a');
  $('dh_b').textContent='Provincia'; $('dhint_b').textContent='Dónde se muestra';
  det.provincia.length ? barChart('d_b',det.provincia.map(x=>x.label),det.provincia.map(x=>x.c),true) : empty('d_b');
}

async function load(){
  const qs=new URLSearchParams({key:KEY, days:cur.days});
  if(cur.poi) qs.set('poi',cur.poi);
  else if(cur.sponsor) qs.set('sponsor',cur.sponsor);
  let d;
  try{
    const r=await fetch('/analytics/summary?'+qs.toString());
    if(!r.ok){ alert('Error '+r.status+' al cargar datos'); return; }
    d=await r.json();
  }catch(e){ return; }

  // Poblar desplegables (siempre con el catálogo completo del rango)
  fillSelect($('fPoi'), d.filters.pois, cur.poi, it=>it.label||it.id, it=>it.id);
  fillSelect($('fSpon'), d.filters.sponsors, cur.sponsor, it=>it.label, it=>it.label);
  $('fClear').classList.toggle('show', !!(cur.poi||cur.sponsor));

  if(d.mode==='poi') renderPoi(d.detail);
  else if(d.mode==='sponsor') renderSponsor(d.detail);
  else renderGlobal(d);
}

$('ranges').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b) return;
  document.querySelectorAll('#ranges button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active'); cur.days=b.dataset.d; load();
});
$('fPoi').addEventListener('change',e=>{ cur.poi=e.target.value; cur.sponsor=''; $('fSpon').value=''; load(); });
$('fSpon').addEventListener('change',e=>{ cur.sponsor=e.target.value; cur.poi=''; $('fPoi').value=''; load(); });
$('fClear').addEventListener('click',()=>{ cur.poi=''; cur.sponsor=''; $('fPoi').value=''; $('fSpon').value=''; load(); });

load();
</script>
</body>
</html>`;
