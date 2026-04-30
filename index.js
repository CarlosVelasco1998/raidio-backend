// index.js (RAIDIOAPP backend) - ES Modules ("type":"module")
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { chromium } from "playwright";

import { POIS } from "./pois_db.js";
import { generateKidsStoryImmersive } from "./kidsStoryImmersive.js";

dotenv.config();
process.env.PLAYWRIGHT_BROWSERS_PATH =
  process.env.PLAYWRIGHT_BROWSERS_PATH || "0";

const app = express();
const PORT = process.env.PORT || 3000;

// ================== CONFIG ==================
const OPENAI_MODEL_DEFAULT = process.env.OPENAI_MODEL || "gpt-4o-mini";
const DEFAULT_TIMEZONE = "Europe/Madrid";
const SPAIN_INFO_AGENDA_URL = "https://www.spain.info/es/agenda/";

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

async function tryAcceptCookies(page) {
  const candidates = [
    'button:has-text("Aceptar")',
    'button:has-text("ACEPTAR")',
    'button:has-text("Aceptar todas")',
    'button:has-text("Aceptar todo")',
    'button:has-text("Accept")',
    "#onetrust-accept-btn-handler",
    'button[aria-label*="Aceptar"]',
  ];

  for (const sel of candidates) {
    try {
      const locator = page.locator(sel).first();
      if (await locator.isVisible({ timeout: 1200 }).catch(() => false)) {
        await locator.click({ timeout: 1200 }).catch(() => {});
        await page.waitForTimeout(500);
        return true;
      }
    } catch (_) {}
  }
  return false;
}

async function fillAgendaFilters(page, province, monthSlug) {
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

async function fetchSpainInfoAgendaWithPlaywright({ province, nowDate }) {
  const browser = await getBrowser();

  const context = await browser.newContext({
    locale: "es-ES",
    userAgent: "RAIDIOAPP/1.0 (contact: raidioapp@gmail.com)",
  });

  const page = await context.newPage();

  try {
    const monthSlug = getMonthSlugEs(nowDate);

    await page.goto(SPAIN_INFO_AGENDA_URL, {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });

    await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(2000);

    const beforeUrl = page.url();
    const filterDebug = await fillAgendaFilters(page, province, monthSlug);

    await page.waitForLoadState("domcontentloaded", { timeout: 10000 }).catch(() => {});
    await page.waitForLoadState("networkidle", { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(4000);

    const finalUrl = page.url();

    const items = await page.evaluate(() => {
      function clean(v) {
        return (v || "").replace(/\s+/g, " ").trim();
      }

      const anchors = Array.from(document.querySelectorAll('a[href*="/agenda/"]'));

      return anchors.map((a) => {
        const href = a.href || a.getAttribute("href") || "";
        const title = clean(a.innerText || a.textContent || "");

        let node = a;
        let container = null;

        for (let i = 0; i < 8 && node; i++) {
          const txt = clean(node.innerText || node.textContent || "");
          if (
            /\d{1,2}\s+[A-Za-zÁÉÍÓÚáéíóúüÜñÑ]+\s+\d{4}/.test(txt) ||
            /AGENDA\s*\|/i.test(txt)
          ) {
            container = node;
            break;
          }
          node = node.parentElement;
        }

        const baseNode = container || a.parentElement || a;
        const cardText = clean(baseNode.innerText || baseNode.textContent || "");

        return { href, title, cardText };
      });
    });

    const bodyText = await page.locator("body").innerText().catch(() => "");

    return {
      url: SPAIN_INFO_AGENDA_URL,
      beforeUrl,
      finalUrl,
      monthSlug,
      filterDebug,
      items,
      bodyText,
    };
  } finally {
    await context.close().catch(() => {});
  }
}

async function searchSpainInfoAgenda({ province, nowDate }) {
  const cacheKey = `spaininfo-search|${province}|${getMonthSlugEs(nowDate)}`;
  const cached = getCache(cacheKey, CACHE_TTL_MS.spainInfoSearch);
  if (cached) return cached;

  try {
    const { finalUrl, items, bodyText } = await fetchSpainInfoAgendaWithPlaywright({
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

    const raw = province
      ? await fetchSpainInfoAgendaWithPlaywright({ province, nowDate: date })
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

// ================== ENDPOINT IA (OPENAI) ==================
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

// ================== VOICE ASSISTANT ==================
app.post("/assistant", async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "Falta OPENAI_API_KEY" });

    const { messages = [], screen = "home", context: ctx = {} } = req.body || {};
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

    const systemPrompt = `Eres el asistente de voz de RAIDIO, app de copiloto para viajes en coche por España. El usuario conduce — sé conciso, máximo 2 frases.
Pantalla actual: "${screenLabels[screen] || screen}".
Contexto: ${JSON.stringify(ctx)}.

Responde SOLO con JSON válido:
{ "speech": "texto en voz alta, sin emojis, en español", "action": "nombre_acción o null", "params": {} }

ACCIONES DISPONIBLES:
- navigate_home / navigate_games / navigate_kids_stories / navigate_guess_song / navigate_quiz / navigate_map / navigate_learn
- enable_learn / disable_learn / stop_audio / trigger_poi
- set_learn_topics → params: { dondeParar, historia, datosCuriosos, naturaleza, eventosEnVivo } (booleans)
- set_guess_song_category → params: { key: "indie"|"pop"|"rock"|"disney"|"Pop España 2026"|"Clásicos de siempre España" }
- set_guess_song_players → params: { players: ["nombre1","nombre2",...] }
- start_guess_song → params: { difficulty: "easy"|"normal"|"hard" } — establece dificultad Y lanza el juego
- set_quiz_players → params: { players: ["nombre1","nombre2",...] }
- start_quiz → params: { topic: "cultura_general"|"historia_espana"|"cine_series"|"ciencia_naturaleza"|"mezcla" } — establece tema Y lanza el quiz
- close_assistant → el usuario dice gracias/adiós/ya está/cancelar

FLUJOS MULTI-PASO (mantén el hilo con el historial):
ADIVINA LA CANCIÓN:
  1. navigate_guess_song → di: "¿Qué categoría? Indie, pop, rock, Disney, clásicos o Pop España"
  2. Respuesta → set_guess_song_category → di: "¿Cómo se llaman los jugadores?"
  3. Respuesta → set_guess_song_players → di: "¿Fácil, normal o difícil?"
  4. Respuesta → start_guess_song con { difficulty: "easy"|"normal"|"hard" }

QUIZ SHOW (concurso en ruta):
  1. navigate_quiz → di: "¿Cómo se llaman los jugadores?"
  2. Respuesta → set_quiz_players → di: "¿Qué tema? Cultura general, historia de España, cine y series, ciencia o mezcla"
  3. Respuesta → start_quiz con { topic: "..." }

APRENDER:
  1. navigate_learn → di: "¿Qué temas quieres? Historia, curiosidades, naturaleza, dónde parar o eventos"
  2. Respuesta → set_learn_topics con los booleans

REGLAS DE NAVEGACIÓN:
- "cuentos"/"cuentos para niños" → navigate_kids_stories
- "canción"/"adivinar"/"adivina" → navigate_guess_song + inicia flujo
- "quiz"/"preguntas"/"concurso"/"concurso en ruta"/"quiz show" → navigate_quiz + inicia flujo
- "mapa" → navigate_map
- "aprender"/"aprende"/"puntos de interés" → navigate_learn + inicia flujo
- "para"/"silencio"/"stop"/"cállate" → stop_audio
- "qué hay cerca"/"cuéntame algo"/"dato curioso" → trigger_poi
- "activa raidio"/"pon raidio"/"activa la narración" → enable_learn
- Si no entiendes → pide aclaración, action: null`;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        response_format: { type: "json_object" },
        max_tokens: 200,
        temperature: 0.4,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        timeout: 12000,
      }
    );

    const parsed = JSON.parse(response.data.choices[0].message.content);
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

// ================== START SERVER ==================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 RAIDIOAPP backend ON en puerto ${PORT}`);
});
