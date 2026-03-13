
// index.js (RAIDIOAPP backend) - ES Modules ("type":"module")
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { chromium } from "playwright";

import { POIS } from "./pois_db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ================== CONFIG ==================
const OPENAI_MODEL_DEFAULT = process.env.OPENAI_MODEL || "gpt-4o-mini";
const DEFAULT_TIMEZONE = "Europe/Madrid";

// Cache simple en memoria
const memoryCache = new Map();
const CACHE_TTL_MS = {
  reverse: 1000 * 60 * 60 * 6, // 6 h
  spainInfoSearch: 1000 * 60 * 20, // 20 min
};

// Browser singleton
let browserPromise = null;

async function getBrowser() {
  if (!browserPromise) {
    browserPromise = chromium.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
  return browserPromise;
}

async function closeBrowserSafe() {
  if (!browserPromise) return;
  try {
    const browser = await browserPromise;
    await browser.close();
  } catch (_) {}
  browserPromise = null;
}

process.on("SIGTERM", () => {
  closeBrowserSafe().finally(() => process.exit(0));
});

process.on("SIGINT", () => {
  closeBrowserSafe().finally(() => process.exit(0));
});

// ================== MIDDLEWARES ==================
app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

// ================== LOG CARGA POIS ==================
console.log("POIS cargados:", POIS.length);
if (POIS.length > 0) console.log("Primer POI:", POIS[0]);

// ================== UTIL: CACHE ==================
function getCache(key, ttlMs) {
  const item = memoryCache.get(key);
  if (!item) return null;
  if (Date.now() - item.ts > ttlMs) {
    memoryCache.delete(key);
    return null;
  }
  return item.value;
}

function setCache(key, value) {
  memoryCache.set(key, { ts: Date.now(), value });
}

// ================== UTIL: DISTANCIA HAVERSINE ==================
function distanciaMetros(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = (v) => (v * Math.PI) / 180;

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// ================== UTIL: NORMALIZACIÓN ==================
function normalizarNumero(v) {
  if (typeof v === "number" && Number.isFinite(v)) return v;

  if (typeof v === "string" && v.trim() !== "") {
    const n = Number(v.replace(",", "."));
    return Number.isFinite(n) ? n : null;
  }

  return null;
}

function limpiarTexto(v) {
  return typeof v === "string" ? v.trim() : "";
}

function asBool(v) {
  return v === true || v === "true" || v === 1 || v === "1";
}

function quitarAcentos(s = "") {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function slugifyText(s = "") {
  return quitarAcentos(limpiarTexto(s))
    .toLowerCase()
    .replace(/[^a-z0-9\s\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ================== UTIL: FECHAS ==================
function parseSafeDate(v) {
  if (typeof v === "string" && v.trim()) {
    const d = new Date(v);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return new Date();
}

function formatDdMmYyyy(date) {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

function formatDateEs(isoString) {
  try {
    const d = new Date(isoString);
    if (Number.isNaN(d.getTime())) return isoString;
    return new Intl.DateTimeFormat("es-ES", {
      timeZone: DEFAULT_TIMEZONE,
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
  } catch (_) {
    return isoString;
  }
}

function getMonthRange(dateInput) {
  const date = new Date(dateInput);
  const start = new Date(date.getFullYear(), date.getMonth(), 1, 12, 0, 0);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0, 12, 0, 0);
  return { start, end };
}

function daysBetween(a, b) {
  return Math.round((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
}

// ================== UTIL: REVERSE GEOCODING ==================
async function reverseGeocode(lat, lng, language = "es") {
  const cacheKey = `reverse|${lat.toFixed(3)}|${lng.toFixed(3)}|${language}`;
  const cached = getCache(cacheKey, CACHE_TTL_MS.reverse);
  if (cached) return cached;

  try {
    const r = await axios.get("https://nominatim.openstreetmap.org/reverse", {
      params: {
        format: "jsonv2",
        lat,
        lon: lng,
        zoom: 10,
        addressdetails: 1,
        "accept-language": language || "es",
      },
      headers: {
        "User-Agent": "RAIDIOAPP/1.0 (contact: raidioapp@gmail.com)",
      },
      timeout: 15000,
    });

    const address = r.data?.address || {};

    const city =
      address.city ||
      address.town ||
      address.village ||
      address.municipality ||
      address.hamlet ||
      "";

    const province =
      address.state_district ||
      address.province ||
      address.state ||
      "";

    const country = address.country || "";
    const countryCode = (address.country_code || "").toUpperCase();

    const result = {
      city: limpiarTexto(city),
      province: limpiarTexto(province),
      country: limpiarTexto(country),
      countryCode: limpiarTexto(countryCode),
      raw: r.data || null,
    };

    setCache(cacheKey, result);
    return result;
  } catch (e) {
    console.error("ERROR reverseGeocode:", e.response?.data || e.message);
    return {
      city: "",
      province: "",
      country: "",
      countryCode: "",
      raw: null,
    };
  }
}

// ================== UTIL: SPAIN.INFO ==================
function normalizeProvinceForSpainInfo(province = "") {
  const p = limpiarTexto(province);

  const map = {
    "Alicante": "Alicante-Alacant",
    "Castellón": "Castellón-Castelló",
    "Valencia": "Valencia-València",
    "Álava": "Araba-Álava",
    "La Coruña": "A Coruña",
  };

  return map[p] || p;
}

function buildSpainInfoAgendaUrl({ province, date }) {
  const { start, end } = getMonthRange(date);
  const provinceValue = encodeURIComponent(normalizeProvinceForSpainInfo(province));

  return `https://www.spain.info/es/resultados-busqueda/index.html?lq=&reloaded=&tab=i&sh=agenda&dateTo=${formatDdMmYyyy(
    end
  )}&dateFrom=${formatDdMmYyyy(start)}&facet_SEGITUR_LOCATION_PROVINCE_es_mvs=${provinceValue}&q=`;
}

function parseSpanishDateText(dateText = "") {
  const months = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    setiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11,
  };

  const clean = limpiarTexto(dateText).toLowerCase();
  const m = clean.match(/(\d{1,2})\s+([a-záéíóú]+)\s+(\d{4})/i);
  if (!m) return null;

  const day = Number(m[1]);
  const monthName = quitarAcentos(m[2]);
  const year = Number(m[3]);
  const month = months[monthName];

  if (month === undefined) return null;

  return new Date(year, month, day, 12, 0, 0);
}

function extractDateRangeFromText(text = "") {
  const matches = text.match(/\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚ]+\s+\d{4}/g) || [];
  const start = matches[0] ? parseSpanishDateText(matches[0]) : null;
  const end = matches[1] ? parseSpanishDateText(matches[1]) : start;
  return { start, end, rawMatches: matches };
}

function scoreAgendaEvent(event, nowDate, place) {
  let score = 0;

  const cityNorm = slugifyText(place.city || "");
  const provinceNorm = slugifyText(place.province || "");
  const titleNorm = slugifyText(event.title || "");
  const summaryNorm = slugifyText(event.summary || "");

  if (cityNorm && (titleNorm.includes(cityNorm) || summaryNorm.includes(cityNorm))) {
    score += 30;
  }

  if (provinceNorm && (titleNorm.includes(provinceNorm) || summaryNorm.includes(provinceNorm))) {
    score += 20;
  }

  const daysToStart = event.startDate ? daysBetween(event.startDate, nowDate) : 999;

  if (daysToStart === 0) score += 40;
  else if (daysToStart >= 1 && daysToStart <= 2) score += 30;
  else if (daysToStart >= 3 && daysToStart <= 7) score += 20;
  else if (daysToStart >= 8 && daysToStart <= 14) score += 10;

  if (event.isOngoing) score += 35;

  const keywords = [
    "semana santa",
    "fallas",
    "feria",
    "fiesta",
    "fiestas",
    "romeria",
    "romería",
    "procesion",
    "procesión",
    "festival",
    "magdalena",
    "san fermin",
    "san fermín",
    "mascleta",
    "mascletà",
  ];

  for (const kw of keywords) {
    if (titleNorm.includes(slugifyText(kw)) || summaryNorm.includes(slugifyText(kw))) {
      score += 10;
    }
  }

  return score;
}

async function fetchSpainInfoAgendaWithPlaywright({ province, nowDate }) {
  const url = buildSpainInfoAgendaUrl({ province, date: nowDate });
  const browser = await getBrowser();
  const context = await browser.newContext({
    locale: "es-ES",
    userAgent: "RAIDIOAPP/1.0 (contact: raidioapp@gmail.com)",
  });

  const page = await context.newPage();

  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(2500);

    // Algunos sitios terminan de hidratar contenido tras la red.
    // Extraemos anchors y body final renderizado.
    const anchors = await page.$$eval('a[href*="/agenda/"]', (els) =>
      els.map((el) => ({
        href: el.href || el.getAttribute("href") || "",
        text: (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim(),
      }))
    );

    const bodyText = await page.locator("body").innerText().catch(() => "");

    return { url, anchors, bodyText };
  } finally {
    await context.close().catch(() => {});
  }
}

async function searchSpainInfoAgenda({ province, nowDate }) {
  const cacheKey = `spaininfo-search|${province}|${formatDdMmYyyy(nowDate)}`;
  const cached = getCache(cacheKey, CACHE_TTL_MS.spainInfoSearch);
  if (cached) return cached;

  try {
    const { url, anchors, bodyText } = await fetchSpainInfoAgendaWithPlaywright({
      province,
      nowDate,
    });

    const events = [];

    // Método principal: links a fichas de agenda ya renderizadas por JS
    for (const item of anchors) {
      const href = limpiarTexto(item.href);
      const text = limpiarTexto(item.text);

      if (!href || !text) continue;
      if (!/agenda\s*\|/i.test(text)) continue;

      const cleanText = text.replace(/^Agenda\s*\|\s*/i, "").trim();
      const { start, end, rawMatches } = extractDateRangeFromText(cleanText);

      if (!rawMatches.length) continue;

      const firstDateText = rawMatches[0];
      const idx = cleanText.indexOf(firstDateText);
      if (idx <= 0) continue;

      const beforeDate = cleanText.slice(0, idx).trim();
      const afterDates = cleanText
        .slice(idx)
        .replace(/^.*?\d{4}/, "")
        .replace(/^\s*-\s*\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚ]+\s+\d{4}/, "")
        .trim();

      const startDate = start;
      const endDate = end;
      const isOngoing = startDate && endDate ? nowDate >= startDate && nowDate <= endDate : false;

      events.push({
        title: beforeDate,
        summary: afterDates,
        startDate,
        endDate,
        url: href,
        isOngoing,
      });
    }

    // Fallback: regex sobre el texto final del body renderizado
    if (!events.length) {
      const regex =
        /Agenda\s*\|\s*([^\n]+?)\s+(\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚ]+\s+\d{4})(?:\s*-\s*(\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚ]+\s+\d{4}))?/gi;

      let match;
      while ((match = regex.exec(bodyText)) !== null) {
        const title = limpiarTexto(match[1]);
        const startDate = parseSpanishDateText(match[2]);
        const endDate = match[3] ? parseSpanishDateText(match[3]) : startDate;
        if (!title || !startDate) continue;

        const isOngoing = startDate && endDate ? nowDate >= startDate && nowDate <= endDate : false;

        events.push({
          title,
          summary: "",
          startDate,
          endDate,
          url,
          isOngoing,
        });
      }
    }

    const unique = [];
    const seen = new Set();

    for (const ev of events) {
      const key = `${ev.title}|${ev.startDate?.toISOString() || ""}`;
      if (seen.has(key)) continue;
      seen.add(key);
      unique.push(ev);
    }

    setCache(cacheKey, unique);
    return unique;
  } catch (e) {
    console.error("ERROR searchSpainInfoAgenda:", e.response?.data || e.message);
    return [];
  }
}

function buildLiveContextFromSpainInfoEvent({ event, place, nowDate, poiNombre }) {
  const zona = [place.city, place.province, place.country]
    .filter(Boolean)
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .join(", ");

  const lines = [];
  lines.push("Contexto actual fiable del sistema:");
  lines.push(`- Fecha actual: ${formatDateEs(nowDate.toISOString())}`);
  if (zona) lines.push(`- Zona detectada: ${zona}`);
  if (poiNombre) lines.push(`- POI de referencia: ${poiNombre}`);
  lines.push(`- Evento detectado en agenda oficial: ${event.title}`);

  if (event.startDate && event.endDate) {
    lines.push(
      `- Fechas del evento: del ${formatDateEs(event.startDate.toISOString())} al ${formatDateEs(
        event.endDate.toISOString()
      )}`
    );
  } else if (event.startDate) {
    lines.push(`- Fecha del evento: ${formatDateEs(event.startDate.toISOString())}`);
  }

  if (event.summary) {
    lines.push(`- Resumen oficial: ${event.summary}`);
  }

  if (event.url) {
    lines.push(`- Fuente: ${event.url}`);
  }

  lines.push("- Usa esto solo si encaja de forma natural con la narración.");
  lines.push("- No inventes horarios, calles, recorridos ni detalles no presentes arriba.");
  lines.push("- Si el evento es próximo o ya está en curso, puedes mencionarlo brevemente.");
  return lines.join("\n");
}

async function getLiveEventsContext({
  liveEvents = false,
  latitude = null,
  longitude = null,
  timestamp = null,
  poiNombre = "",
  language = "es",
}) {
  if (!liveEvents) return "";

  const lat = normalizarNumero(latitude);
  const lng = normalizarNumero(longitude);
  if (lat === null || lng === null) return "";

  const nowDate = parseSafeDate(timestamp);
  const poi = limpiarTexto(poiNombre);
  const lang = limpiarTexto(language) || "es";

  const place = await reverseGeocode(lat, lng, lang);
  if (!place.province) return "";

  const events = await searchSpainInfoAgenda({
    province: place.province,
    nowDate,
  });

  if (!events.length) return "";

  const filtered = events.filter((ev) => {
    if (!ev.startDate && !ev.endDate) return false;

    const start = ev.startDate || ev.endDate;
    const end = ev.endDate || ev.startDate;

    if (!start || !end) return false;

    const daysToStart = daysBetween(start, nowDate);
    const isSoon = daysToStart >= -2 && daysToStart <= 14;
    const isOngoing = ev.isOngoing;

    return isSoon || isOngoing;
  });

  if (!filtered.length) return "";

  const ranked = filtered
    .map((ev) => ({
      ...ev,
      _score: scoreAgendaEvent(ev, nowDate, place),
    }))
    .sort((a, b) => b._score - a._score);

  const best = ranked[0];
  if (!best) return "";

  return buildLiveContextFromSpainInfoEvent({
    event: best,
    place,
    nowDate,
    poiNombre: poi,
  });
}

function buildPromptWithLiveContext({
  prompt,
  liveEvents = false,
  liveContext = "",
}) {
  if (!liveEvents) return prompt;

  if (liveContext && liveContext.trim()) {
    return `${prompt}

LIVE_CONTEXT (agenda oficial):
${liveContext}

INSTRUCCIONES IMPORTANTES SOBRE EN VIVO:
- Si LIVE_CONTEXT contiene un evento actual o próximo, intégralo de forma breve, natural y útil.
- Prioriza fiestas, celebraciones y eventos relevantes de la zona.
- No inventes horarios, recorridos, calles, actos concretos ni detalles no incluidos en LIVE_CONTEXT.
- No conviertas la respuesta en una agenda larga.`;
  }

  return `${prompt}

INSTRUCCIONES IMPORTANTES SOBRE EN VIVO:
- El usuario ha activado "En vivo", pero NO se ha encontrado contexto actual fiable y relevante.
- No menciones eventos actuales, celebraciones del día, conciertos, ferias ni agenda en vivo.
- No inventes nada relacionado con actualidad.`;
}

// ================== DEBUG SPAIN.INFO ==================
app.get("/debug/spaininfo-test", async (req, res) => {
  try {
    const lat = normalizarNumero(req.query.lat);
    const lng = normalizarNumero(req.query.lng);
    const date = parseSafeDate(req.query.date);

    if (lat === null || lng === null) {
      return res.status(400).json({ error: "lat/lng inválidos" });
    }

    const place = await reverseGeocode(lat, lng, "es");
    const province = place.province || "";
    const spainInfoUrl = province
      ? buildSpainInfoAgendaUrl({ province, date })
      : "";

    const events = province
      ? await searchSpainInfoAgenda({ province, nowDate: date })
      : [];

    const ranked = events
      .map((ev) => ({
        title: ev.title,
        summary: ev.summary,
        startDate: ev.startDate ? ev.startDate.toISOString() : null,
        endDate: ev.endDate ? ev.endDate.toISOString() : null,
        isOngoing: ev.isOngoing,
        url: ev.url,
        score: scoreAgendaEvent(ev, date, place),
      }))
      .sort((a, b) => b.score - a.score);

    return res.json({
      input: {
        lat,
        lng,
        date: date.toISOString(),
      },
      place,
      provinceNormalized: normalizeProvinceForSpainInfo(province),
      spainInfoUrl,
      eventsFound: ranked.length,
      topEvents: ranked.slice(0, 10),
    });
  } catch (e) {
    console.error("ERROR /debug/spaininfo-test:", e.response?.data || e.message);
    return res.status(500).json({
      error: "debug_spaininfo_failed",
      detail: e.response?.data || e.message,
    });
  }
});

// ================== ENDPOINT SALUD ==================
app.get("/", (req, res) => {
  res.send("Backend RAIDIOAPP funcionando ✔️");
});

// ================== ENDPOINT POIS CERCANOS ==================
// GET /pois-nearby?lat=...&lng=...&maxNivel=3&radius=50000
app.get("/pois-nearby", (req, res) => {
  try {
    const lat = parseFloat(req.query.lat);
    const lng = parseFloat(req.query.lng);
    const maxNivel = parseInt(req.query.maxNivel || "3", 10);
    const radius = parseInt(req.query.radius || "15000", 10);

    if (Number.isNaN(lat) || Number.isNaN(lng)) {
      return res.status(400).json({ error: "lat/lng inválidos" });
    }

    const encontrados = [];

    for (const poi of POIS) {
      if (!poi) continue;

      const poiLat = Number(poi.lat);
      const poiLng = Number(poi.lng);
      if (Number.isNaN(poiLat) || Number.isNaN(poiLng)) continue;

      if ((poi.nivel ?? 3) > maxNivel) continue;

      const d = distanciaMetros(lat, lng, poiLat, poiLng);
      if (d > radius) continue;

      encontrados.push({ ...poi, distanceMeters: d });
    }

    encontrados.sort((a, b) => a.distanceMeters - b.distanceMeters);

    res.json({ count: encontrados.length, pois: encontrados });
  } catch (e) {
    console.error("ERROR /pois-nearby:", e);
    res.status(500).json({ error: "backend error" });
  }
});

// GET /pois-all  (útil para modo dev en Flutter)
app.get("/pois-all", (req, res) => {
  try {
    res.json({ count: POIS.length, pois: POIS });
  } catch (e) {
    console.error("ERROR /pois-all:", e);
    res.status(500).json({ error: "backend error" });
  }
});

// ================== ENDPOINT IA (OPENAI) ==================
// POST /ai/generate
app.post("/ai/generate", async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Falta OPENAI_API_KEY en env" });
    }

    const {
      prompt,
      temas,
      model,
      liveEvents = false,
      latitude = null,
      longitude = null,
      timestamp = null,
      poiNombre = "",
      language = "es",
    } = req.body || {};

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "prompt requerido (string)" });
    }

    const usedModel = model || OPENAI_MODEL_DEFAULT;
    const temasTxt = Array.isArray(temas) ? temas.filter(Boolean).join(", ") : "";

    const liveContext = await getLiveEventsContext({
      liveEvents: asBool(liveEvents),
      latitude,
      longitude,
      timestamp,
      poiNombre,
      language,
    });

    const finalPrompt = buildPromptWithLiveContext({
      prompt,
      liveEvents: asBool(liveEvents),
      liveContext,
    });

    const body = {
      model: usedModel,
      messages: [
        {
          role: "system",
          content:
            "Eres RAIDIOAPP, un copiloto que explica lugares mientras se viaja. Responde en español, claro y útil.",
        },
        ...(temasTxt
          ? [{ role: "system", content: `Temas seleccionados: ${temasTxt}` }]
          : []),
        { role: "user", content: finalPrompt },
      ],
      max_tokens: 800,
      temperature: 0.7,
    };

    const r = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      body,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        timeout: 30000,
      }
    );

    const text = r.data?.choices?.[0]?.message?.content ?? "";

    res.json({
      text,
      model_used: r.data?.model ?? usedModel,
      usage: r.data?.usage,
      live_events_enabled: asBool(liveEvents),
      live_context_used: Boolean(liveContext && liveContext.trim()),
    });
  } catch (e) {
    const status = e.response?.status;
    const detail = e.response?.data || e.message;
    console.error("ERROR /ai/generate:", status, detail);
    res.status(status || 500).json({
      error: "ai_generate_failed",
      status: status || 500,
      detail,
    });
  }
});

// ================== ENDPOINT LISTAR VOCES (DEBUG) ==================
// GET /voices
app.get("/voices", async (req, res) => {
  try {
    const apiKey = process.env.ELEVEN_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "No ELEVEN_API_KEY" });

    const r = await axios.get("https://api.elevenlabs.io/v1/voices", {
      headers: { "xi-api-key": apiKey },
      timeout: 20000,
    });

    res.json(r.data);
  } catch (e) {
    console.error("❌ voices error:", e.response?.data || e.message);
    res.status(500).json({ error: "voices failed" });
  }
});

// ================== ENDPOINT TTS ELEVENLABS ==================
// POST /tts { text, voiceId? } -> audio/mpeg
const DEFAULT_VOICE_ID = process.env.ELEVEN_VOICE_ID;

app.post("/tts", async (req, res) => {
  const apiKey = process.env.ELEVEN_API_KEY;
  const { text, voiceId } = req.body;

  try {
    if (!text || !text.trim()) {
      return res.status(400).json({ error: "text required" });
    }
    if (!apiKey || !DEFAULT_VOICE_ID) {
      return res.status(500).json({
        error: "Falta ELEVEN_API_KEY o ELEVEN_VOICE_ID en env",
      });
    }

    const usedVoiceId = voiceId || DEFAULT_VOICE_ID;

    const url = `https://api.elevenlabs.io/v1/text-to-speech/${usedVoiceId}`;

    const payloadFlash = {
      text,
      model_id: "eleven_flash_v2_5",
      voice_settings: {
        stability: 0.55,
        similarity_boost: 0.8,
        style: 0.2,
        use_speaker_boost: true,
      },
    };

    const payloadFallback = {
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.55,
        similarity_boost: 0.8,
      },
    };

    let elevenResp;

    try {
      elevenResp = await axios.post(url, payloadFlash, {
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        responseType: "arraybuffer",
        timeout: 30000,
      });
    } catch (eFlash) {
      console.error("⚠️ Flash failed:", eFlash.response?.status, eFlash.response?.data || eFlash.message);

      elevenResp = await axios.post(url, payloadFallback, {
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        responseType: "arraybuffer",
        timeout: 30000,
      });
    }

    res.set("Content-Type", "audio/mpeg");
    res.send(elevenResp.data);
  } catch (e) {
    const status = e.response?.status;
    const raw = e.response?.data;

    let decoded = raw;
    try {
      if (raw && Buffer.isBuffer(raw)) decoded = raw.toString("utf8");
      else if (raw instanceof ArrayBuffer) decoded = Buffer.from(raw).toString("utf8");
    } catch (_) {}

    console.error("❌ ElevenLabs status:", status);
    console.error("❌ ElevenLabs body:", decoded || e.message);

    res.status(500).json({
      error: "tts failed",
      status,
      body: decoded || e.message,
    });
  }
});

// ================== ENDPOINT DEEZER RANDOM TRACK ==================
// GET /deezer-random-track?genre=rock
function mapGenreToDeezerQuery(genre) {
  switch ((genre || "").toLowerCase()) {
    case "rock":
      return 'genre:"Rock"';
    case "pop":
      return 'genre:"Pop"';
    case "reggaeton":
      return 'genre:"Reggaeton" OR genre:"Latin"';
    case "indie":
      return 'genre:"Indie" OR genre:"Alternative"';
    case "rap":
    case "hiphop":
    case "hip-hop":
      return 'genre:"Hip Hop" OR genre:"Rap"';
    case "electronic":
    case "electronica":
      return 'genre:"Electronic" OR genre:"Dance"';
    case "any":
    default:
      return 'genre:"Pop" OR genre:"Rock" OR genre:"Dance"';
  }
}

app.get("/deezer-random-track", async (req, res) => {
  try {
    const genre = (req.query.genre || "any").toString();
    const q = mapGenreToDeezerQuery(genre);

    const url = "https://api.deezer.com/search";

    const r = await axios.get(url, {
      params: { q, limit: 100 },
      timeout: 15000,
    });

    const data = r.data?.data || [];
    const conPreview = data.filter(
      (t) => t?.preview && typeof t.preview === "string" && t.preview.length > 10
    );

    if (!conPreview.length) {
      return res.status(404).json({
        error: "No se han encontrado previews en Deezer para ese género.",
      });
    }

    const elegido = conPreview[Math.floor(Math.random() * conPreview.length)];

    return res.json({
      title: elegido.title,
      artist: elegido.artist?.name || "Unknown",
      preview_url: elegido.preview,
      deezer_id: elegido.id,
      link: elegido.link,
    });
  } catch (e) {
    console.error("❌ ERROR /deezer-random-track:", e.response?.data || e.message);
    return res.status(500).json({
      error: "deezer random track failed",
      body: e.response?.data || e.message,
    });
  }
});

// ================== START SERVER ==================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 RAIDIOAPP backend ON en puerto ${PORT}`);
});