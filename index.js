// index.js (RAIDIOAPP backend) - ES Modules ("type":"module")
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import Anthropic from "@anthropic-ai/sdk";

import { POIS } from "./pois_db.js";
import { generateKidsStoryImmersive } from "./kidsStoryImmersive.js";

dotenv.config();
process.env.PLAYWRIGHT_BROWSERS_PATH =
  process.env.PLAYWRIGHT_BROWSERS_PATH || "0";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const app = express();
const PORT = process.env.PORT || 3000;

// ================== CONFIG ==================
const ANTHROPIC_MODEL_FAST = "claude-haiku-4-5-20251001";
const ANTHROPIC_MODEL_SMART = "claude-sonnet-4-6";
const DEFAULT_TIMEZONE = "Europe/Madrid";
const SPAIN_INFO_AGENDA_URL = "https://www.spain.info/es/agenda/";

// Cache simple en memoria
const memoryCache = new Map();
const CACHE_TTL_MS = {
  reverse: 1000 * 60 * 60 * 6, // 6 h
  spainInfoSearch: 1000 * 60 * 20, // 20 min
};

process.on("SIGTERM", () => process.exit(0));
process.on("SIGINT", () => process.exit(0));

// ================== MIDDLEWARES ==================
app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});

// ================== ENDPOINT CUENTOS INMERSIVOS ==================
app.post("/kids-story-immersive", generateKidsStoryImmersive);

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

function daysBetween(a, b) {
  return Math.round((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
}

function getMonthSlugEs(dateInput) {
  const date = new Date(dateInput);
  const formatter = new Intl.DateTimeFormat("es-ES", {
    timeZone: DEFAULT_TIMEZONE,
    month: "long",
    year: "numeric",
  });
  const parts = formatter.formatToParts(date);
  const month = parts.find((p) => p.type === "month")?.value || "";
  const year = parts.find((p) => p.type === "year")?.value || "";
  return `${month.toLowerCase()}-${year}`;
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
    Alicante: "Alicante-Alacant",
    Castellón: "Castellón-Castelló",
    Valencia: "Valencia-València",
    Álava: "Araba-Álava",
    "La Coruña": "A Coruña",
  };

  return map[p] || p;
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
  const matches =
    text.match(/\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+\s+\d{4}/g) || [];
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

  if (
    provinceNorm &&
    (titleNorm.includes(provinceNorm) || summaryNorm.includes(provinceNorm))
  ) {
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
    if (
      titleNorm.includes(slugifyText(kw)) ||
      summaryNorm.includes(slugifyText(kw))
    ) {
      score += 10;
    }
  }

  return score;
}

async function fetchSpainInfoAgendaWithCheerio({ province, nowDate }) {
  const monthSlug = getMonthSlugEs(nowDate);
  const url = `${SPAIN_INFO_AGENDA_URL}?provincia=${encodeURIComponent(province)}&mes=${encodeURIComponent(monthSlug)}`;

  const resp = await axios.get(url, {
    headers: {
      "User-Agent": "RAIDIOAPP/1.0 (contact: app.raidio@gmail.com)",
      "Accept-Language": "es-ES,es;q=0.9",
    },
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

  return { url, finalUrl: url, monthSlug, items, bodyText };
}

async function fillAgendaFilters_UNUSED(page, province, monthSlug) {
  const normalizedProvince = normalizeProvinceForSpainInfo(province);

  await tryAcceptCookies(page);

  const result = await page.evaluate(
    ({ provinceValue, monthValue }) => {
      function clean(v) {
        return (v || "").replace(/\s+/g, " ").trim();
      }

      const selects = Array.from(document.querySelectorAll("select"));

      function optionsText(select) {
        return Array.from(select.options).map((o) =>
          clean(o.textContent || o.value || "")
        );
      }

      const thematicSelect = selects.find((s) => {
        const opts = optionsText(s).map((x) => x.toLowerCase());
        return (
          opts.includes("deportes") &&
          opts.includes("festival") &&
          opts.includes("fiestas")
        );
      });

      const monthSelect = selects.find((s) => {
        const opts = optionsText(s).map((x) => x.toLowerCase());
        return (
          opts.some((x) => x.includes("marzo-")) &&
          opts.some((x) => x.includes("abril-"))
        );
      });

      const provinceSelect = selects.find((s) => {
        const opts = optionsText(s);
        return (
          opts.includes("Granada") &&
          opts.includes("Toledo") &&
          opts.includes("Madrid")
        );
      });

      if (!thematicSelect || !monthSelect || !provinceSelect) {
        return {
          ok: false,
          reason: "selects_not_found",
          selectCount: selects.length,
          sampleOptions: selects.map((s) => optionsText(s).slice(0, 10)),
        };
      }

      function pickOption(select, desiredText) {
        const opts = Array.from(select.options);

        const exact = opts.find((o) => clean(o.textContent || "") === desiredText);
        const loose = opts.find(
          (o) => clean(o.textContent || "").toLowerCase() === desiredText.toLowerCase()
        );
        const chosen = exact || loose;

        if (!chosen) {
          return {
            ok: false,
            options: opts.map((o) => clean(o.textContent || "")).slice(0, 100),
          };
        }

        select.value = chosen.value;
        select.dispatchEvent(new Event("input", { bubbles: true }));
        select.dispatchEvent(new Event("change", { bubbles: true }));

        return {
          ok: true,
          value: chosen.value,
          text: clean(chosen.textContent || ""),
        };
      }

      const thematicPick = pickOption(thematicSelect, "Fiestas");
      const monthPick = pickOption(monthSelect, monthValue);
      const provincePick = pickOption(provinceSelect, provinceValue);

      if (!(thematicPick.ok && monthPick.ok && provincePick.ok)) {
        return {
          ok: false,
          thematicPick,
          monthPick,
          provincePick,
          reason: "pick_failed",
        };
      }

      const form =
        thematicSelect.form ||
        monthSelect.form ||
        provinceSelect.form ||
        thematicSelect.closest("form") ||
        monthSelect.closest("form") ||
        provinceSelect.closest("form");

      let submitted = false;

      if (form) {
        try {
          if (typeof form.requestSubmit === "function") {
            form.requestSubmit();
          } else {
            form.submit();
          }
          submitted = true;
        } catch (_) {}
      }

      if (!submitted) {
        const candidates = Array.from(
          document.querySelectorAll('button, input[type="submit"], a')
        );

        const searchControl = candidates.find((el) => {
          const txt = clean(el.textContent || el.value || "");
          return /buscar/i.test(txt);
        });

        if (searchControl) {
          try {
            searchControl.click();
            submitted = true;
          } catch (_) {}
        }
      }

      return {
        ok: true,
        thematicPick,
        monthPick,
        provincePick,
        submitted,
      };
    },
    { provinceValue: normalizedProvince, monthValue: monthSlug }
  );

  await page.waitForTimeout(1200);

  return result;
}


async function searchSpainInfoAgenda({ province, nowDate }) {
  const cacheKey = `spaininfo-search|${province}|${getMonthSlugEs(nowDate)}`;
  const cached = getCache(cacheKey, CACHE_TTL_MS.spainInfoSearch);
  if (cached) return cached;

  try {
    const { finalUrl, items, bodyText } = await fetchSpainInfoAgendaWithCheerio({
      province,
      nowDate,
    });

    const events = [];

    for (const item of items) {
      const href = limpiarTexto(item.href);
      const title = limpiarTexto(item.title);
      const cardText = limpiarTexto(item.cardText);

      if (!href || !title || !cardText) continue;

      const { start, end, rawMatches } = extractDateRangeFromText(cardText);
      if (!rawMatches.length) continue;

      let summary = cardText;
      summary = summary.replace(title, " ");

      for (const d of rawMatches) {
        summary = summary.replace(d, " ");
      }

      summary = summary.replace(
        /AGENDA\s*\|\s*[A-ZÁÉÍÓÚÜÑa-záéíóúüñ\s\-]+/i,
        " "
      );
      summary = summary.replace(/\s*-\s*/g, " ").replace(/\s+/g, " ").trim();

      const startDate = start;
      const endDate = end;
      const isOngoing =
        startDate && endDate ? nowDate >= startDate && nowDate <= endDate : false;

      events.push({
        title,
        summary,
        startDate,
        endDate,
        url: href,
        isOngoing,
        sourceUrl: finalUrl,
      });
    }

    if (!events.length) {
      const regex =
        /AGENDA\s*\|\s*([A-ZÁÉÍÓÚÜÑa-záéíóúüñ\s\-]+)\s+([^\n]+?)\s+(\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+\s+\d{4})(?:\s*-\s*(\d{1,2}\s+[A-Za-záéíóúÁÉÍÓÚüÜñÑ]+\s+\d{4}))?/gi;

      let match;
      while ((match = regex.exec(bodyText)) !== null) {
        const title = limpiarTexto(match[2]);
        const startDate = parseSpanishDateText(match[3]);
        const endDate = match[4] ? parseSpanishDateText(match[4]) : startDate;

        if (!title || !startDate) continue;

        const isOngoing =
          startDate && endDate ? nowDate >= startDate && nowDate <= endDate : false;

        events.push({
          title,
          summary: "",
          startDate,
          endDate,
          url: finalUrl,
          isOngoing,
          sourceUrl: finalUrl,
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
      `- Fechas del evento: del ${formatDateEs(
        event.startDate.toISOString()
      )} al ${formatDateEs(event.endDate.toISOString())}`
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
  const lang = limpiarTexto(language) || "es";

  const place = await reverseGeocode(lat, lng, lang);
  const zona = [place.city, place.province].filter(Boolean).join(", ");
  if (!zona) return "";

  const mes = nowDate.toLocaleString("es-ES", { month: "long", timeZone: "Europe/Madrid" });
  const año = nowDate.getFullYear();
  const poi = limpiarTexto(poiNombre);

  try {
    const cacheKey = `live-events|${zona}|${mes}|${año}`;
    const cached = getCache(cacheKey, CACHE_TTL_MS.spainInfoSearch);
    if (cached) return cached;

    const r = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      system: "Eres un experto en cultura y tradiciones locales de España. Responde SOLO si conoces eventos reales y concretos. Si no estás seguro, responde con: NINGUNO.",
      messages: [{
        role: "user",
        content: `¿Qué eventos importantes suelen ocurrir en ${zona} durante ${mes}? Incluye ferias, fiestas patronales, mercados, festivales de música, conciertos recurrentes o cualquier evento cultural destacado de la zona. ${poi ? `El viajero está cerca de: ${poi}.` : ""} Menciona solo eventos reales y conocidos, en 1-2 frases máximo.`,
      }],
    });

    const text = r.content?.[0]?.text?.trim() ?? "";
    if (!text || text.toUpperCase().includes("NINGUNO")) {
      setCache(cacheKey, "");
      return "";
    }

    const context = `Contexto de eventos locales en ${zona} (${mes} ${año}): ${text}`;
    setCache(cacheKey, context);
    return context;
  } catch (e) {
    console.error("ERROR getLiveEventsContext:", e.message);
    return "";
  }
}

function buildPromptWithLiveContext({
  prompt,
  liveEvents = false,
  liveContext = "",
}) {
  if (!liveEvents) return prompt;

  if (liveContext && liveContext.trim()) {
    return `${prompt}

CONTEXTO LOCAL (eventos y ferias de la zona):
${liveContext}

INSTRUCCIONES:
- Menciona este evento o feria de forma breve y natural dentro de la narración.
- No inventes detalles concretos que no estén en el contexto.
- Máximo 1 frase sobre el evento.`;
  }

  return prompt;
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

    const raw = province
      ? await fetchSpainInfoAgendaWithCheerio({ province, nowDate: date })
      : { url: "", finalUrl: "", items: [], bodyText: "", filterDebug: {} };

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
      agendaUrl: SPAIN_INFO_AGENDA_URL,
      finalUrl: raw.finalUrl,
      monthSlug: raw.monthSlug,
      filterDebug: raw.filterDebug,
      rawItemsFound: raw.items.length,
      rawItemsSample: raw.items.slice(0, 5),
      bodyPreview: raw.bodyText.slice(0, 1500),
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

// GET /pois-all
app.get("/pois-all", (req, res) => {
  try {
    res.json({ count: POIS.length, pois: POIS });
  } catch (e) {
    console.error("ERROR /pois-all:", e);
    res.status(500).json({ error: "backend error" });
  }
});

// ================== ENDPOINT IA (ANTHROPIC) ==================
app.post("/ai/generate", async (req, res) => {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({ error: "Falta ANTHROPIC_API_KEY en env" });
    }

    const {
      prompt,
      temas,
      liveEvents = false,
      latitude = null,
      longitude = null,
      timestamp = null,
      poiNombre = "",
      language = "es",
      nivel = "normal",
    } = req.body || {};

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "prompt requerido (string)" });
    }

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

    const systemPrompt = [
      "Eres RAIDIOAPP, un copiloto que explica lugares mientras se viaja. Responde en español, claro y útil.",
      temasTxt ? `Temas seleccionados: ${temasTxt}` : "",
    ].filter(Boolean).join("\n");

    const maxTokensByNivel = { poco: 300, normal: 600, mucho: 1200 };
    const maxTokens = maxTokensByNivel[nivel] ?? 600;

    const r = await anthropic.messages.create({
      model: ANTHROPIC_MODEL_FAST,
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: finalPrompt }],
    });

    const text = r.content?.[0]?.text ?? "";

    res.json({
      text,
      model_used: r.model,
      usage: r.usage,
      live_events_enabled: asBool(liveEvents),
      live_context_used: Boolean(liveContext && liveContext.trim()),
    });
  } catch (e) {
    console.error("ERROR /ai/generate:", e.message);
    res.status(500).json({ error: "ai_generate_failed", detail: e.message });
  }
});

// ================== VOICE ASSISTANT ==================
app.post("/assistant", async (req, res) => {
  try {
    const { messages = [], screen = "home", context: ctx = {}, step = null } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "messages requerido" });
    }

    const screenLabels = {
      home: "menú principal de RAIDIO",
      games: "menú de juegos (Adivina la Canción, Quiz Show, Cuentos para Niños)",
      guess_song: "configuración del juego Adivina la Canción",
      guess_song_round: "jugando a Adivina la Canción",
      kids_stories: "configuración de Cuentos para Niños",
      kids_story_playing: "escuchando un cuento para niños",
      quiz: "configuración del Quiz Show",
      quiz_playing: "jugando al Quiz Show",
      map: "mapa de ruta con puntos de interés",
      learn: "configuración de RAIDIO Aprende (narración automática de POIs)",
    };

    const systemPrompt = `Eres el asistente de voz de RAIDIO, una app de copiloto para viajes en coche. El usuario conduce — sé muy conciso, máximo 2 frases.
Pantalla: "${screenLabels[screen] || screen}" | Paso: "${step || "ninguno"}" | Contexto: ${JSON.stringify(ctx)}

Responde SIEMPRE con JSON válido (sin texto fuera del JSON):
{ "speech": "lo que dices en voz alta, sin emojis", "action": "nombre_accion o null", "params": {} }

━━━ CÓMO FUNCIONAN LOS PASOS ━━━
Cuando "paso" NO es "ninguno": el usuario acaba de responder a la pregunta de ese paso.
→ Extrae la información de su mensaje y llama la acción indicada.
→ Incluye en "speech" la SIGUIENTE pregunta del flujo.
→ Si el usuario dijo algo irrelevante (no dio la info esperada), repite la pregunta brevemente.

Cuando "paso" es "ninguno": modo navegación / general.

⛔ NUNCA narres cuentos, canciones ni preguntas de quiz. Tu trabajo en configuración es solo preguntar y llamar acciones.

━━━ NAVEGACIÓN ━━━
Palabras clave → acción:
"aprender" / "aprende" / "pantalla aprender" → navigate_learn, speech incluye "¿Qué temas quieres? Historia, curiosidades, naturaleza, eventos o dónde parar."
"canción" / "adivinar" / "música" → navigate_guess_song, speech incluye "¿Qué género? Indie, pop, rock, Disney, clásicos o Pop España."
"cuentos" / "cuento" / "niños" → navigate_kids_stories, speech incluye "¿Cómo se llaman los protagonistas y si son niño o niña?"
"concurso" / "quiz" / "preguntas" → navigate_quiz, speech incluye "¿Cómo se llaman los concursantes?"
"mapa" → navigate_map
"para" / "stop" / "cállate" → stop_audio
"qué hay cerca" / "cuéntame" → trigger_poi
"gracias" / "adiós" / "ya está" / "cancelar" → close_assistant
Pantalla home → navigate_home; juegos → navigate_games

━━━ ADIVINA LA CANCIÓN ━━━
paso=song_category → Usuario da el género. Extrae: indie→"indie", pop→"pop", rock→"rock", disney→"disney", clásicos→"Clásicos de siempre España", pop españa→"Pop España 2026".
  Llama: set_guess_song_category { key: "..." }  speech: "¡Perfecto! ¿Cómo se llaman los jugadores?"

paso=song_players → Usuario da nombres de jugadores. Extrae lista de nombres.
  Llama: set_guess_song_players { players: ["nombre1","nombre2",...] }  speech: "¿Dificultad: fácil, normal o difícil?"

paso=song_difficulty → Usuario da la dificultad. Mapea: fácil→"easy", normal→"normal", difícil→"hard".
  Llama: note_song_difficulty { difficulty: "easy"|"normal"|"hard" }  speech: "¡Listo! ¿Empezamos?"

paso=song_confirm → Usuario dice sí/dale/empezamos/venga. Lee difficulty de ctx.difficulty.
  Llama: start_guess_song { difficulty: "${ctx.difficulty || 'normal'}" }  speech: "¡Hecho! ¡Suerte a todos y que gane el mejor!"

Durante la partida (screen=guess_song_round):
  "revela"/"muéstrala" → reveal_song
  "sí"/"acertado"/"correcto" → answer_correct
  "no"/"fallado"/"incorrecto" → answer_wrong
  "siguiente"/"otra" → next_round

━━━ CUENTACUENTOS ━━━
paso=story_protagonists → Usuario da nombres. Extrae: name (string) y gender ("boy" si niño/chico, "girl" si niña/chica).
  Llama: set_story_protagonists { kids: [{name:"...",gender:"boy"|"girl"},...] }  speech: "¡Genial! ¿De qué trata el cuento?"

paso=story_idea → Usuario da el tema del cuento. Extrae la idea.
  Llama: set_story_idea { idea: "..." }  speech: "¿Cuántos minutos? Entre 1 y 5."

paso=story_duration → Usuario da la duración en minutos (1-5).
  Llama: note_story_duration { minutes: N }  speech: "¡Perfecto! ¿Empezamos el cuento?"

paso=story_confirm → Usuario dice sí. Lee minutes de ctx.minutes.
  Llama: start_story { minutes: ${ctx.minutes || 3} }  speech: "¡Hecho! ¡Que disfruten del cuento!"

━━━ CONCURSO EN RUTA ━━━
paso=quiz_players → Usuario da nombres de concursantes. Extrae lista.
  Llama: set_quiz_players { players: [...] }  speech: "¿Tema? Cultura general, historia de España, cine, ciencia o mezcla."

paso=quiz_topic → Usuario da el tema. Mapea: cultura→"cultura_general", historia→"historia_espana", cine/series→"cine_series", ciencia/naturaleza→"ciencia_naturaleza", mezcla→"mezcla".
  Llama: note_quiz_topic { topic: "..." }  speech: "¿Cuántas preguntas por jugador? Entre 3 y 5."

paso=quiz_questions → Usuario da un número entre 3 y 5.
  Llama: note_quiz_questions { questions: N }  speech: "¡Perfecto! ¿Empezamos?"

paso=quiz_confirm → Usuario dice sí. Lee topic de ctx.topic y questions de ctx.questions.
  Llama: start_quiz { topic: "${ctx.topic || 'cultura_general'}", questions: ${ctx.questions || 3} }  speech: "¡Hecho! ¡Que empiece el concurso, suerte a todos!"

━━━ APRENDER ━━━
paso=learn_topics → Usuario indica los temas. Mapea a booleans.
  Llama: set_learn_topics { dondeParar: bool, historia: bool, datosCuriosos: bool, naturaleza: bool, eventosEnVivo: bool, ingenieria: bool }`;

    const response = await anthropic.messages.create({
      model: ANTHROPIC_MODEL_SMART,
      max_tokens: 200,
      system: systemPrompt + "\n\nResponde SIEMPRE con JSON válido, sin texto fuera del JSON.",
      messages,
    });

    let parsed;
    try {
      parsed = JSON.parse(response.content[0].text);
    } catch {
      const match = response.content[0].text.match(/\{[\s\S]*\}/);
      parsed = match ? JSON.parse(match[0]) : {};
    }
    if (!parsed.speech) parsed.speech = "Entendido.";
    if (parsed.action === undefined) parsed.action = null;
    if (!parsed.params) parsed.params = {};

    res.json(parsed);
  } catch (e) {
    console.error("Assistant error:", e.message);
    res.status(200).json({
      speech: "Lo siento, ha habido un error. Inténtalo de nuevo.",
      action: null,
      params: {},
    });
  }
});

// ================== ENDPOINT LISTAR VOCES (DEBUG) ==================
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
      console.error(
        "⚠️ Flash failed:",
        eFlash.response?.status,
        eFlash.response?.data || eFlash.message
      );

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

// ================== PROVINCIA ACTUAL ==================
app.get("/provincia", async (req, res) => {
  try {
    const lat = normalizarNumero(req.query.lat);
    const lng = normalizarNumero(req.query.lng);
    if (lat === null || lng === null) return res.status(400).json({ error: "lat/lng inválidos" });

    const place = await reverseGeocode(lat, lng, "es");
    res.json({
      provincia: place.province || "",
      comunidad: place.raw?.address?.state || "",
      ciudad: place.city || "",
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ================== BIENVENIDA PROVINCIA ==================
app.post("/narrate/bienvenida-provincia", async (req, res) => {
  try {
    if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ error: "Falta ANTHROPIC_API_KEY" });

    const { provincia, comunidad, timestamp } = req.body || {};
    if (!provincia) return res.status(400).json({ error: "provincia requerida" });

    const cacheKey = `bienvenida|${provincia}`;
    const cached = getCache(cacheKey, 1000 * 60 * 60 * 24); // 24h cache
    if (cached) return res.json({ text: cached });

    const nowDate = parseSafeDate(timestamp);
    const mes = nowDate.toLocaleString("es-ES", { month: "long", timeZone: "Europe/Madrid" });
    const estacion = (() => {
      const m = nowDate.getMonth() + 1;
      if (m >= 3 && m <= 5) return "primavera";
      if (m >= 6 && m <= 8) return "verano";
      if (m >= 9 && m <= 11) return "otoño";
      return "invierno";
    })();

    const r = await anthropic.messages.create({
      model: ANTHROPIC_MODEL_SMART,
      max_tokens: 600,
      system: "Eres el copiloto de carretera de RAIDIO. Narras con calidez, como un amigo que conoce bien España. Sin listas, sin emojis, sin títulos. Solo texto natural pensado para sonar bien en voz alta.",
      messages: [{
        role: "user",
        content: `El viajero acaba de cruzar la frontera y entrar en la provincia de ${provincia}${comunidad ? `, comunidad de ${comunidad}` : ""}. Es ${mes}, ${estacion}.

Dale la bienvenida en 3 a 5 párrafos con esta estructura natural:

1. Una bienvenida con carácter — algo visual o sensorial que el viajero puede percibir nada más entrar: el paisaje que cambia, el terreno, la luz, los colores.

2. La identidad de ${provincia} — qué la define de verdad. Su historia, su carácter, su posición en España, lo que la hace única. Una sola idea fuerte, bien contada.

3. Dos o tres cosas que el viajero va a encontrar, contadas con anticipación y entusiasmo. Al menos una debe ser sorprendente o poco conocida fuera de la provincia.

4. Un cierre con gancho — una frase que invite a estar atento durante el trayecto por ${provincia}.

Tono cercano, cálido, con personalidad. Que el viajero sienta que acaba de entrar en un sitio con alma.`,
      }],
    });

    const text = r.content?.[0]?.text?.trim() ?? "";
    setCache(cacheKey, text);
    res.json({ text, provincia, comunidad });
  } catch (e) {
    console.error("ERROR /narrate/bienvenida-provincia:", e.message);
    res.status(500).json({ error: e.message });
  }
});

// ================== START SERVER ==================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 RAIDIOAPP backend ON en puerto ${PORT}`);
});
