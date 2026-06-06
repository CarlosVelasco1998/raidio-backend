// index.js — Backend SANCHO
// ES Modules ("type": "module" en package.json)
// Lee SANCHO_BACKEND.md antes de modificar este archivo.

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import * as cheerio from "cheerio";
import Anthropic from "@anthropic-ai/sdk";

import { POIS } from "./pois_db.js";
import { generateKidsStoryImmersive } from "./kidsStoryImmersive.js";

dotenv.config();

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const app = express();
const PORT = process.env.PORT || 3000;

// ─── MODELOS ─────────────────────────────────────────────────────────────────
const MODEL_FAST  = "claude-haiku-4-5-20251001"; // narración, live events
const MODEL_SMART = "claude-sonnet-4-6";          // assistant, bienvenida provincia

// ─── CONFIGURACIÓN ───────────────────────────────────────────────────────────
const TIMEZONE          = "Europe/Madrid";
const SPAIN_INFO_URL    = "https://www.spain.info/es/agenda/";
const DEFAULT_VOICE_ID  = process.env.ELEVEN_VOICE_ID;

// max_tokens por nivel de narración (poco/normal/mucho)
// max_tokens alto para que el modelo nunca se corte — truncarPorFrases() controla la longitud real
const MAX_TOKENS_BY_NIVEL = { poco: 1000, normal: 1000, mucho: 1000 };

// Voice settings de ElevenLabs por tipo de narración
// stability bajo = más expresivo | style alto = más emoción
const VOICE_SETTINGS_BY_MOOD = {
  batalla:    { stability: 0.30, similarity_boost: 0.85, style: 0.75, use_speaker_boost: true },
  historia:   { stability: 0.40, similarity_boost: 0.82, style: 0.55, use_speaker_boost: true },
  naturaleza: { stability: 0.50, similarity_boost: 0.80, style: 0.35, use_speaker_boost: true },
  practico:   { stability: 0.60, similarity_boost: 0.78, style: 0.15, use_speaker_boost: true },
  normal:     { stability: 0.55, similarity_boost: 0.80, style: 0.20, use_speaker_boost: true },
};

// Cache TTL
const TTL = {
  reverse:     1000 * 60 * 60 * 6,  // 6h geocodificación
  events:      1000 * 60 * 20,       // 20min eventos
  bienvenida:  1000 * 60 * 60 * 24,  // 24h bienvenida provincia
};

// ─── MIDDLEWARE ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: "2mb" }));
process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT",  () => process.exit(0));

// ─── CACHE EN MEMORIA ────────────────────────────────────────────────────────
const cache = new Map();

function getCache(key, ttlMs) {
  const item = cache.get(key);
  if (!item) return null;
  if (Date.now() - item.ts > ttlMs) { cache.delete(key); return null; }
  return item.value;
}

function setCache(key, value) {
  cache.set(key, { ts: Date.now(), value });
}

// ─── UTILIDADES GENERALES ────────────────────────────────────────────────────
function asBool(v) {
  return v === true || v === "true" || v === 1 || v === "1";
}

function limpiar(v) {
  return typeof v === "string" ? v.trim() : "";
}

function asNum(v) {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim()) {
    const n = Number(v.replace(",", "."));
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function sinAcentos(s = "") {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function slug(s = "") {
  return sinAcentos(limpiar(s)).toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function parseFecha(v) {
  if (typeof v === "string" && v.trim()) {
    const d = new Date(v);
    if (!isNaN(d.getTime())) return d;
  }
  return new Date();
}

function fechaEs(iso) {
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return new Intl.DateTimeFormat("es-ES", { timeZone: TIMEZONE, day: "numeric", month: "long", year: "numeric" }).format(d);
  } catch (_) { return iso; }
}

function diasEntre(a, b) {
  return Math.round((a.getTime() - b.getTime()) / 86400000);
}

function mesSlugEs(date) {
  const d = new Date(date);
  const fmt = new Intl.DateTimeFormat("es-ES", { timeZone: TIMEZONE, month: "long", year: "numeric" });
  const parts = fmt.formatToParts(d);
  const mes  = parts.find(p => p.type === "month")?.value || "";
  const año  = parts.find(p => p.type === "year")?.value  || "";
  return `${mes.toLowerCase()}-${año}`;
}

// ─── GEOCODIFICACIÓN INVERSA (Nominatim) ─────────────────────────────────────
async function geocodeInverso(lat, lng, lang = "es") {
  const key = `geo|${lat.toFixed(3)}|${lng.toFixed(3)}|${lang}`;
  const cached = getCache(key, TTL.reverse);
  if (cached) return cached;

  try {
    const r = await axios.get("https://nominatim.openstreetmap.org/reverse", {
      params: { format: "jsonv2", lat, lon: lng, zoom: 10, addressdetails: 1, "accept-language": lang },
      headers: { "User-Agent": "SanchoApp/1.0 (contact: app.raidio@gmail.com)" },
      timeout: 15000,
    });
    const addr = r.data?.address || {};
    const result = {
      city:        limpiar(addr.city || addr.town || addr.village || addr.municipality || addr.hamlet || ""),
      province:    limpiar(addr.state_district || addr.province || addr.state || ""),
      country:     limpiar(addr.country || ""),
      countryCode: limpiar((addr.country_code || "").toUpperCase()),
      raw:         r.data || null,
    };
    setCache(key, result);
    return result;
  } catch (e) {
    console.error("ERROR geocodeInverso:", e.message);
    return { city: "", province: "", country: "", countryCode: "", raw: null };
  }
}

// ─── HAVERSINE ───────────────────────────────────────────────────────────────
function distMetros(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = v => (v * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ─── SPAIN.INFO — EVENTOS ────────────────────────────────────────────────────
function parseFechaEs(txt = "") {
  const meses = { enero:0,febrero:1,marzo:2,abril:3,mayo:4,junio:5,julio:6,agosto:7,septiembre:8,setiembre:8,octubre:9,noviembre:10,diciembre:11 };
  const m = limpiar(txt).toLowerCase().match(/(\d{1,2})\s+([a-záéíóú]+)\s+(\d{4})/i);
  if (!m) return null;
  const mes = meses[sinAcentos(m[2])];
  if (mes === undefined) return null;
  return new Date(Number(m[3]), mes, Number(m[1]), 12, 0, 0);
}

function extraerRangoFechas(txt = "") {
  const matches = txt.match(/\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+\s+\d{4}/g) || [];
  return { start: matches[0] ? parseFechaEs(matches[0]) : null, end: matches[1] ? parseFechaEs(matches[1]) : (matches[0] ? parseFechaEs(matches[0]) : null), rawMatches: matches };
}

function puntuarEvento(ev, now, place) {
  let score = 0;
  const cn = slug(place.city || "");
  const pn = slug(place.province || "");
  const tn = slug(ev.title || "");
  const sn = slug(ev.summary || "");
  if (cn && (tn.includes(cn) || sn.includes(cn))) score += 30;
  if (pn && (tn.includes(pn) || sn.includes(pn))) score += 20;
  const d = ev.startDate ? diasEntre(ev.startDate, now) : 999;
  if (d === 0) score += 40;
  else if (d <= 2) score += 30;
  else if (d <= 7) score += 20;
  else if (d <= 14) score += 10;
  if (ev.isOngoing) score += 35;
  for (const kw of ["semana santa","fallas","feria","fiesta","festival","romería","romeria","procesión","procesion","mascleta","mascletà"]) {
    if (tn.includes(slug(kw)) || sn.includes(slug(kw))) score += 10;
  }
  return score;
}

async function scrapSpainInfo({ province, nowDate }) {
  const monthSlug = mesSlugEs(nowDate);
  const url = `${SPAIN_INFO_URL}?provincia=${encodeURIComponent(province)}&mes=${encodeURIComponent(monthSlug)}`;

  const resp = await axios.get(url, {
    headers: { "User-Agent": "SanchoApp/1.0 (contact: app.raidio@gmail.com)", "Accept-Language": "es-ES,es;q=0.9" },
    timeout: 15000,
  });

  const $ = cheerio.load(resp.data);
  const items = [];
  $('a[href*="/agenda/"]').each((_, el) => {
    const href = $(el).attr("href") || "";
    const title = $(el).text().replace(/\s+/g, " ").trim();
    const cardText = $(el).closest("article, .card, .item, li, div").text().replace(/\s+/g, " ").trim();
    if (href && title) items.push({ href, title, cardText: cardText || title });
  });
  const bodyText = $("body").text().replace(/\s+/g, " ").trim();
  return { url, monthSlug, items, bodyText };
}

async function buscarEventos({ province, nowDate }) {
  const key = `events|${province}|${mesSlugEs(nowDate)}`;
  const cached = getCache(key, TTL.events);
  if (cached) return cached;

  try {
    const { url, items, bodyText } = await scrapSpainInfo({ province, nowDate });
    const eventos = [];

    for (const item of items) {
      const title = limpiar(item.title);
      const cardText = limpiar(item.cardText);
      if (!title || !cardText) continue;
      const { start, end, rawMatches } = extraerRangoFechas(cardText);
      if (!rawMatches.length) continue;
      let summary = cardText.replace(title, " ");
      for (const d of rawMatches) summary = summary.replace(d, " ");
      summary = summary.replace(/AGENDA\s*\|\s*[A-ZÁÉÍÓÚÜÑa-záéíóúüñ\s-]+/i, " ").replace(/\s*-\s*/g, " ").replace(/\s+/g, " ").trim();
      eventos.push({ title, summary, startDate: start, endDate: end, url: item.href, isOngoing: start && end ? nowDate >= start && nowDate <= end : false });
    }

    // Fallback: regex sobre bodyText si no se encontraron eventos estructurados
    if (!eventos.length) {
      const regex = /AGENDA\s*\|\s*([A-ZÁÉÍÓÚÜÑa-záéíóúüñ\s-]+)\s+([^\n]+?)\s+(\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+\s+\d{4})(?:\s*-\s*(\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+\s+\d{4}))?/gi;
      let m;
      while ((m = regex.exec(bodyText)) !== null) {
        const title = limpiar(m[2]);
        const start = parseFechaEs(m[3]);
        const end   = m[4] ? parseFechaEs(m[4]) : start;
        if (!title || !start) continue;
        eventos.push({ title, summary: "", startDate: start, endDate: end, url, isOngoing: start && end ? nowDate >= start && nowDate <= end : false });
      }
    }

    // Deduplicar
    const vistos = new Set();
    const unique = eventos.filter(ev => {
      const k = `${ev.title}|${ev.startDate?.toISOString() || ""}`;
      if (vistos.has(k)) return false;
      vistos.add(k);
      return true;
    });

    setCache(key, unique);
    return unique;
  } catch (e) {
    console.error("ERROR buscarEventos:", e.message);
    return [];
  }
}

// ─── CONTEXTO DE EVENTOS EN VIVO ─────────────────────────────────────────────
// Estrategia: 1) Spain.info (fechas reales) → 2) Claude con fechas explícitas
async function getLiveEventsContext({ liveEvents, latitude, longitude, timestamp, poiNombre, language = "es" }) {
  if (!asBool(liveEvents)) return "";
  const lat = asNum(latitude);
  const lng = asNum(longitude);
  if (lat === null || lng === null) return "";

  const now   = parseFecha(timestamp);
  const place = await geocodeInverso(lat, lng, limpiar(language) || "es");
  const zona  = [place.city, place.province].filter(Boolean).join(", ");
  if (!zona) return "";

  const mes = now.toLocaleString("es-ES", { month: "long", timeZone: TIMEZONE });
  const año = now.getFullYear();
  const poi = limpiar(poiNombre);
  const key = `live|${zona}|${mes}|${año}`;
  const cached = getCache(key, TTL.events);
  if (cached !== null) return cached;

  try {
    // 1) Intentar Spain.info para fechas reales
    const province = place.province;
    if (province) {
      const eventos = await buscarEventos({ province, nowDate: now });
      if (eventos.length > 0) {
        // Ordenar por puntuación y tomar los 2 mejores
        const ranked = eventos
          .map(ev => ({ ...ev, score: puntuarEvento(ev, now, place) }))
          .sort((a, b) => b.score - a.score)
          .slice(0, 2);

        const lines = ranked.map(ev => {
          const inicio = ev.startDate ? fechaEs(ev.startDate.toISOString()) : null;
          const fin    = ev.endDate && ev.endDate.getTime() !== ev.startDate?.getTime()
            ? fechaEs(ev.endDate.toISOString()) : null;
          const fechaTxt = inicio
            ? (fin ? `del ${inicio} al ${fin}` : `el ${inicio}`)
            : "";
          return `- ${ev.title}${fechaTxt ? ` (${fechaTxt})` : ""}${ev.isOngoing ? " — en curso ahora mismo" : ""}`;
        }).join("\n");

        const context = `Eventos reales en ${zona} (fuente: Spain.info):\n${lines}`;
        setCache(key, context);
        return context;
      }
    }

    // 2) Fallback: Claude con instrucción de incluir fechas concretas
    const r = await anthropic.messages.create({
      model: MODEL_FAST,
      max_tokens: 250,
      system: "Eres un experto en eventos y fiestas locales de España. Responde SOLO con eventos reales y concretos que conozcas con seguridad. Si no conoces eventos con fechas concretas, responde únicamente: NINGUNO.",
      messages: [{ role: "user", content: `¿Qué eventos, ferias o fiestas se celebran en ${zona} en ${mes} de ${año}? ${poi ? `El viajero está cerca de: ${poi}.` : ""} Incluye las fechas concretas si las conoces (día y mes). Solo eventos reales, máximo 2-3 frases.` }],
    });

    const text = r.content?.[0]?.text?.trim() ?? "";
    if (!text || text.toUpperCase().includes("NINGUNO")) { setCache(key, ""); return ""; }
    const context = `Eventos en ${zona} (${mes} ${año}):\n${text}`;
    setCache(key, context);
    return context;
  } catch (e) {
    console.error("ERROR getLiveEventsContext:", e.message);
    return "";
  }
}

function construirPromptConEventos({ prompt, liveEvents, liveContext }) {
  if (!asBool(liveEvents) || !liveContext?.trim()) return prompt;
  return `${prompt}

INFORMACIÓN EN VIVO — EVENTOS CERCANOS:
${liveContext}

INSTRUCCIONES PARA LA NARRACIÓN:
- Menciona el evento de forma natural dentro de la narración.
- Si tienes fechas concretas, inclúyelas en el texto (escríbelas con palabras, nunca con números).
- No inventes detalles que no estén en el contexto anterior.
- Máximo 1-2 frases sobre el evento.`;
}

// ─── TRUNCAR POR FRASES COMPLETAS ────────────────────────────────────────────
// Recorta el texto al número máximo de palabras, siempre terminando en frase completa.
function truncarPorFrases(text, maxWords) {
  if (!text) return text;
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text.trim();

  // Buscar el último punto/signo de cierre dentro del límite
  const chunk = words.slice(0, maxWords).join(" ");
  const lastSentenceEnd = Math.max(
    chunk.lastIndexOf(". "),
    chunk.lastIndexOf("! "),
    chunk.lastIndexOf("? "),
    chunk.lastIndexOf(".\n"),
    chunk.lastIndexOf("!\n"),
    chunk.lastIndexOf("?\n"),
  );

  if (lastSentenceEnd > 0) {
    return chunk.slice(0, lastSentenceEnd + 1).trim();
  }

  // Si no hay frase completa dentro del límite, devolver el chunk tal cual
  return chunk.trim();
}

const MAX_WORDS_BY_NIVEL = { poco: 130, normal: 200, mucho: 270 };

// ─── DEEZER ──────────────────────────────────────────────────────────────────
function deezerQuery(genre) {
  const g = (genre || "").toLowerCase();
  if (g === "rock")                    return 'genre:"Rock"';
  if (g === "pop")                     return 'genre:"Pop"';
  if (g === "reggaeton")               return 'genre:"Reggaeton" OR genre:"Latin"';
  if (g === "indie")                   return 'genre:"Indie" OR genre:"Alternative"';
  if (g === "rap" || g === "hiphop" || g === "hip-hop") return 'genre:"Hip Hop" OR genre:"Rap"';
  if (g === "electronic" || g === "electronica") return 'genre:"Electronic" OR genre:"Dance"';
  return 'genre:"Pop" OR genre:"Rock" OR genre:"Dance"';
}

// ═══════════════════════════════════════════════════════════════════════════════
// ENDPOINTS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── SALUD ───────────────────────────────────────────────────────────────────
app.get("/healthz", (_req, res) => res.status(200).send("ok"));
app.get("/",        (_req, res) => res.send("Backend Sancho funcionando ✔️"));

// ─── CUENTOS INMERSIVOS ───────────────────────────────────────────────────────
app.post("/kids-story-immersive", generateKidsStoryImmersive);

// ─── POIS CERCANOS ────────────────────────────────────────────────────────────
app.get("/pois-nearby", (req, res) => {
  try {
    const lat      = parseFloat(req.query.lat);
    const lng      = parseFloat(req.query.lng);
    const maxNivel = parseInt(req.query.maxNivel || "3", 10);
    const radius   = parseInt(req.query.radius   || "15000", 10);

    if (isNaN(lat) || isNaN(lng)) return res.status(400).json({ error: "lat/lng inválidos" });

    const encontrados = [];
    for (const poi of POIS) {
      if (!poi) continue;
      const pLat = Number(poi.lat);
      const pLng = Number(poi.lng);
      if (isNaN(pLat) || isNaN(pLng)) continue;
      if ((poi.nivel ?? 3) > maxNivel) continue;
      const d = distMetros(lat, lng, pLat, pLng);
      if (d > radius) continue;
      encontrados.push({ ...poi, distanceMeters: d });
    }
    encontrados.sort((a, b) => a.distanceMeters - b.distanceMeters);
    res.json({ count: encontrados.length, pois: encontrados });
  } catch (e) {
    console.error("ERROR /pois-nearby:", e.message);
    res.status(500).json({ error: "backend error" });
  }
});

// ─── TODOS LOS POIS ──────────────────────────────────────────────────────────
app.get("/pois-all", (_req, res) => {
  try {
    res.json({ count: POIS.length, pois: POIS });
  } catch (e) {
    console.error("ERROR /pois-all:", e.message);
    res.status(500).json({ error: "backend error" });
  }
});

// ─── GENERACIÓN IA ───────────────────────────────────────────────────────────
app.post("/ai/generate", async (req, res) => {
  try {
    if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ error: "Falta ANTHROPIC_API_KEY" });

    const { prompt, temas, liveEvents = false, latitude = null, longitude = null, timestamp = null, poiNombre = "", language = "es", nivel = "normal" } = req.body || {};

    if (!prompt || typeof prompt !== "string") return res.status(400).json({ error: "prompt requerido (string)" });

    const maxTokens   = MAX_TOKENS_BY_NIVEL[nivel] ?? MAX_TOKENS_BY_NIVEL.normal;
    const temasTxt    = Array.isArray(temas) ? temas.filter(Boolean).join(", ") : "";
    const liveContext = await getLiveEventsContext({ liveEvents, latitude, longitude, timestamp, poiNombre, language });
    const finalPrompt = construirPromptConEventos({ prompt, liveEvents, liveContext });

    const systemPrompt = [
      "Eres SANCHO, el copiloto de viaje. Hablas como ese amigo que sabe mucho de por donde pasas y te lo cuenta de forma amena, sin rollos académicos. Responde en español, sin listas, sin emojis, sin títulos. Solo texto natural pensado para sonar bien en voz alta mientras se conduce.",
      temasTxt ? `Temas activados: ${temasTxt}` : "",
    ].filter(Boolean).join("\n");

    const r = await anthropic.messages.create({
      model: MODEL_FAST,
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: finalPrompt }],
    });

    const rawText  = r.content?.[0]?.text ?? "";
    const maxWords = MAX_WORDS_BY_NIVEL[nivel] ?? MAX_WORDS_BY_NIVEL.normal;
    const text     = truncarPorFrases(rawText, maxWords);

    res.json({ text, model_used: r.model, usage: r.usage, live_events_enabled: asBool(liveEvents), live_context_used: Boolean(liveContext?.trim()) });
  } catch (e) {
    console.error("ERROR /ai/generate:", e.message);
    res.status(500).json({ error: "ai_generate_failed", detail: e.message });
  }
});

// ─── TTS (ELEVENLABS) ────────────────────────────────────────────────────────
app.post("/tts", async (req, res) => {
  const apiKey = process.env.ELEVEN_API_KEY;
  const { text, voiceId, mood = "normal" } = req.body || {};

  try {
    if (!text?.trim())               return res.status(400).json({ error: "text requerido" });
    if (!apiKey || !DEFAULT_VOICE_ID) return res.status(500).json({ error: "Falta ELEVEN_API_KEY o ELEVEN_VOICE_ID en env" });

    const usedVoiceId    = voiceId || DEFAULT_VOICE_ID;
    const voiceSettings  = VOICE_SETTINGS_BY_MOOD[mood] ?? VOICE_SETTINGS_BY_MOOD.normal;
    const url            = `https://api.elevenlabs.io/v1/text-to-speech/${usedVoiceId}`;
    const headers        = { "xi-api-key": apiKey, "Content-Type": "application/json", "Accept": "audio/mpeg" };

    const payloadFlash    = { text, model_id: "eleven_flash_v2_5",      voice_settings: voiceSettings };
    const payloadFallback = { text, model_id: "eleven_multilingual_v2", voice_settings: { stability: voiceSettings.stability, similarity_boost: voiceSettings.similarity_boost } };

    let elevenResp;
    try {
      elevenResp = await axios.post(url, payloadFlash, { headers, responseType: "arraybuffer", timeout: 30000 });
    } catch (eFlash) {
      console.warn("⚠️ ElevenLabs Flash failed, trying multilingual:", eFlash.response?.status, eFlash.message);
      elevenResp = await axios.post(url, payloadFallback, { headers, responseType: "arraybuffer", timeout: 30000 });
    }

    res.set("Content-Type", "audio/mpeg");
    res.send(elevenResp.data);
  } catch (e) {
    const status = e.response?.status;
    let body = e.response?.data;
    try { if (body && Buffer.isBuffer(body)) body = body.toString("utf8"); } catch (_) {}
    console.error("❌ ElevenLabs error:", status, body || e.message);
    res.status(500).json({ error: "tts failed", status, body: body || e.message });
  }
});

// ─── VOCES ELEVENLABS (DEBUG) ────────────────────────────────────────────────
app.get("/voices", async (_req, res) => {
  try {
    const apiKey = process.env.ELEVEN_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "No ELEVEN_API_KEY" });
    const r = await axios.get("https://api.elevenlabs.io/v1/voices", { headers: { "xi-api-key": apiKey }, timeout: 20000 });
    res.json(r.data);
  } catch (e) {
    console.error("❌ /voices error:", e.response?.data || e.message);
    res.status(500).json({ error: "voices failed" });
  }
});

// ─── ASISTENTE DE VOZ ────────────────────────────────────────────────────────
app.post("/assistant", async (req, res) => {
  try {
    const { messages = [], screen = "home", context: ctx = {}, step = null } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) return res.status(400).json({ error: "messages requerido" });

    const screenLabels = {
      home:                "menú principal de SANCHO",
      games:               "menú de juegos (Adivina la Canción, Quiz Show, Cuentos para Niños)",
      guess_song:          "configuración del juego Adivina la Canción",
      guess_song_round:    "jugando a Adivina la Canción",
      kids_stories:        "configuración de Cuentos para Niños",
      kids_story_playing:  "escuchando un cuento para niños",
      quiz:                "configuración del Quiz Show",
      quiz_playing:        "jugando al Quiz Show",
      map:                 "mapa de ruta con puntos de interés",
      learn:               "configuración de SANCHO Aprende (narración automática de POIs)",
    };

    const systemPrompt = `Eres el asistente de voz de SANCHO, una app de copiloto para viajes en coche. El usuario conduce — sé muy conciso, máximo 2 frases.
Pantalla: "${screenLabels[screen] || screen}" | Paso: "${step || "ninguno"}" | Contexto: ${JSON.stringify(ctx)}

Responde SIEMPRE con JSON válido (sin texto fuera del JSON):
{ "speech": "lo que dices en voz alta, sin emojis", "action": "nombre_accion o null", "params": {} }

━━━ CÓMO FUNCIONAN LOS PASOS ━━━
Cuando "paso" NO es "ninguno": el usuario acaba de responder a la pregunta de ese paso.
→ Extrae la información de su mensaje y llama la acción indicada.
→ Incluye en "speech" la SIGUIENTE pregunta del flujo.
→ Si el usuario dijo algo irrelevante, repite la pregunta brevemente.

⛔ NUNCA narres cuentos, canciones ni preguntas de quiz.

━━━ NAVEGACIÓN ━━━
"aprender" / "aprende" → navigate_learn, speech incluye "¿Qué temas quieres? Historia, curiosidades, naturaleza, eventos o dónde parar."
"canción" / "adivinar" / "música" → navigate_guess_song, speech incluye "¿Qué género? Indie, pop, rock, Disney, clásicos o Pop España."
"cuentos" / "cuento" / "niños" → navigate_kids_stories, speech incluye "¿Cómo se llaman los protagonistas y si son niño o niña?"
"concurso" / "quiz" / "preguntas" → navigate_quiz, speech incluye "¿Cómo se llaman los concursantes?"
"mapa" → navigate_map
"para" / "stop" / "cállate" → stop_audio
"qué hay cerca" / "cuéntame" → trigger_poi
"gracias" / "adiós" / "ya está" / "cancelar" → close_assistant
Pantalla home → navigate_home; juegos → navigate_games

━━━ ADIVINA LA CANCIÓN ━━━
paso=song_category → Extrae género. indie→"indie", pop→"pop", rock→"rock", disney→"disney", clásicos→"Clásicos de siempre España", pop españa→"Pop España 2026".
  Llama: set_guess_song_category { key: "..." }  speech: "¡Perfecto! ¿Cómo se llaman los jugadores?"
paso=song_players → Extrae nombres.
  Llama: set_guess_song_players { players: ["nombre1","nombre2",...] }  speech: "¿Dificultad: fácil, normal o difícil?"
paso=song_difficulty → fácil→"easy", normal→"normal", difícil→"hard".
  Llama: note_song_difficulty { difficulty: "easy"|"normal"|"hard" }  speech: "¡Listo! ¿Empezamos?"
paso=song_confirm → Llama: start_guess_song { difficulty: "${ctx.difficulty || 'normal'}" }  speech: "¡Hecho! ¡Suerte a todos!"
Durante partida (screen=guess_song_round): "revela" → reveal_song | "sí"/"acertado" → answer_correct | "no"/"fallado" → answer_wrong | "siguiente" → next_round

━━━ CUENTACUENTOS ━━━
paso=story_protagonists → Extrae nombre y género (boy/girl).
  Llama: set_story_protagonists { kids: [{name:"...",gender:"boy"|"girl"},...] }  speech: "¡Genial! ¿De qué trata el cuento?"
paso=story_idea → Extrae idea.
  Llama: set_story_idea { idea: "..." }  speech: "¿Cuántos minutos? Entre 1 y 5."
paso=story_duration → Extrae minutos.
  Llama: note_story_duration { minutes: N }  speech: "¡Perfecto! ¿Empezamos el cuento?"
paso=story_confirm → Llama: start_story { minutes: ${ctx.minutes || 3} }  speech: "¡Hecho! ¡Que disfruten!"

━━━ QUIZ ━━━
paso=quiz_players → Extrae nombres.
  Llama: set_quiz_players { players: [...] }  speech: "¿Tema? Cultura general, historia de España, cine, ciencia o mezcla."
paso=quiz_topic → cultura→"cultura_general", historia→"historia_espana", cine→"cine_series", ciencia→"ciencia_naturaleza", mezcla→"mezcla".
  Llama: note_quiz_topic { topic: "..." }  speech: "¿Cuántas preguntas por jugador? Entre 3 y 5."
paso=quiz_questions → Extrae número.
  Llama: note_quiz_questions { questions: N }  speech: "¡Perfecto! ¿Empezamos?"
paso=quiz_confirm → Llama: start_quiz { topic: "${ctx.topic || 'cultura_general'}", questions: ${ctx.questions || 3} }  speech: "¡Hecho! ¡Que empiece el concurso!"

━━━ APRENDER ━━━
paso=learn_topics → Mapea a booleans.
  Llama: set_learn_topics { dondeParar: bool, historia: bool, datosCuriosos: bool, naturaleza: bool, eventosEnVivo: bool, ingenieria: bool }`;

    const response = await anthropic.messages.create({
      model: MODEL_SMART,
      max_tokens: 200,
      system: systemPrompt + "\n\nResponde SIEMPRE con JSON válido, sin texto fuera del JSON.",
      messages,
    });

    let parsed = {};
    try {
      parsed = JSON.parse(response.content[0].text);
    } catch {
      const match = response.content[0].text.match(/\{[\s\S]*\}/);
      if (match) try { parsed = JSON.parse(match[0]); } catch (_) {}
    }
    if (!parsed.speech) parsed.speech = "Entendido.";
    if (parsed.action === undefined) parsed.action = null;
    if (!parsed.params) parsed.params = {};

    res.json(parsed);
  } catch (e) {
    console.error("ERROR /assistant:", e.message);
    res.status(200).json({ speech: "Lo siento, ha habido un error. Inténtalo de nuevo.", action: null, params: {} });
  }
});

// ─── DEEZER RANDOM TRACK ─────────────────────────────────────────────────────
app.get("/deezer-random-track", async (req, res) => {
  try {
    const genre = (req.query.genre || "any").toString();
    const r = await axios.get("https://api.deezer.com/search", { params: { q: deezerQuery(genre), limit: 100 }, timeout: 15000 });
    const conPreview = (r.data?.data || []).filter(t => t?.preview && t.preview.length > 10);
    if (!conPreview.length) return res.status(404).json({ error: "No se encontraron previews en Deezer para ese género." });
    const t = conPreview[Math.floor(Math.random() * conPreview.length)];
    res.json({ title: t.title, artist: t.artist?.name || "Unknown", preview_url: t.preview, deezer_id: t.id, link: t.link });
  } catch (e) {
    console.error("ERROR /deezer-random-track:", e.message);
    res.status(500).json({ error: "deezer failed", detail: e.message });
  }
});

// ─── PROVINCIA ───────────────────────────────────────────────────────────────
app.get("/provincia", async (req, res) => {
  try {
    const lat = asNum(req.query.lat);
    const lng = asNum(req.query.lng);
    if (lat === null || lng === null) return res.status(400).json({ error: "lat/lng inválidos" });
    const place = await geocodeInverso(lat, lng, "es");
    res.json({ provincia: place.province || "", comunidad: place.raw?.address?.state || "", ciudad: place.city || "" });
  } catch (e) {
    console.error("ERROR /provincia:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ─── BIENVENIDA PROVINCIA ────────────────────────────────────────────────────
app.post("/narrate/bienvenida-provincia", async (req, res) => {
  try {
    if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ error: "Falta ANTHROPIC_API_KEY" });

    const { provincia, comunidad, timestamp } = req.body || {};
    if (!provincia) return res.status(400).json({ error: "provincia requerida" });

    const key = `bienvenida|${provincia}`;
    const cached = getCache(key, TTL.bienvenida);
    if (cached) return res.json({ text: cached });

    const now      = parseFecha(timestamp);
    const mes      = now.toLocaleString("es-ES", { month: "long", timeZone: TIMEZONE });
    const m        = now.getMonth() + 1;
    const estacion = m >= 3 && m <= 5 ? "primavera" : m >= 6 && m <= 8 ? "verano" : m >= 9 && m <= 11 ? "otoño" : "invierno";

    const r = await anthropic.messages.create({
      model: MODEL_SMART,
      max_tokens: 600,
      system: "Eres el copiloto de carretera SANCHO. Narras con calidez, como un amigo que conoce bien España. Sin listas, sin emojis, sin títulos. Solo texto natural pensado para sonar bien en voz alta.",
      messages: [{ role: "user", content: `El viajero acaba de entrar en la provincia de ${provincia}${comunidad ? `, comunidad de ${comunidad}` : ""}. Es ${mes}, ${estacion}.\n\nDale la bienvenida en 3-5 párrafos:\n1. Algo visual o sensorial que el viajero percibe al entrar.\n2. La identidad de ${provincia} — qué la hace única.\n3. Dos o tres cosas que va a encontrar, al menos una sorprendente.\n4. Un cierre con gancho que invite a estar atento.\n\nTono cercano, cálido, con personalidad.` }],
    });

    const text = r.content?.[0]?.text?.trim() ?? "";
    setCache(key, text);
    res.json({ text, provincia, comunidad });
  } catch (e) {
    console.error("ERROR /narrate/bienvenida-provincia:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ─── DEBUG SPAIN.INFO ────────────────────────────────────────────────────────
app.get("/debug/spaininfo-test", async (req, res) => {
  try {
    const lat  = asNum(req.query.lat);
    const lng  = asNum(req.query.lng);
    const date = parseFecha(req.query.date);
    if (lat === null || lng === null) return res.status(400).json({ error: "lat/lng inválidos" });

    const place    = await geocodeInverso(lat, lng, "es");
    const province = place.province || "";
    const raw      = province ? await scrapSpainInfo({ province, nowDate: date }) : { url: "", items: [], bodyText: "" };
    const events   = province ? await buscarEventos({ province, nowDate: date }) : [];
    const ranked   = events.map(ev => ({ ...ev, startDate: ev.startDate?.toISOString() || null, endDate: ev.endDate?.toISOString() || null, score: puntuarEvento(ev, date, place) })).sort((a, b) => b.score - a.score);

    res.json({ input: { lat, lng, date: date.toISOString() }, place, province, agendaUrl: raw.url, rawItemsFound: raw.items.length, rawItemsSample: raw.items.slice(0, 5), bodyPreview: raw.bodyText.slice(0, 1500), eventsFound: ranked.length, topEvents: ranked.slice(0, 10) });
  } catch (e) {
    console.error("ERROR /debug/spaininfo-test:", e.message);
    res.status(500).json({ error: "debug_failed", detail: e.message });
  }
});

// ─── ARRANQUE ────────────────────────────────────────────────────────────────
console.log(`POIS cargados: ${POIS.length}`);
app.listen(PORT, "0.0.0.0", () => console.log(`🚀 Sancho backend ON — puerto ${PORT}`));
