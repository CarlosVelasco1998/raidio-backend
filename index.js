// index.js — Backend SANCHO
// ES Modules ("type": "module" en package.json)
// Lee SANCHO_BACKEND.md antes de modificar este archivo.

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import * as cheerio from "cheerio";
import Anthropic from "@anthropic-ai/sdk";
import { createHash } from "crypto";
import { promises as fs } from "fs";
import path from "path";

import { POIS } from "./pois_db.js";
import { generateKidsStoryImmersive, renderImmersiveSegments } from "./kidsStoryImmersive.js";
import { mountAnalytics, recordUsage, claudeCost } from "./analytics.js";

dotenv.config();

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const app = express();
const PORT = process.env.PORT || 3000;

// ─── MODELOS ─────────────────────────────────────────────────────────────────
const MODEL_FAST  = "claude-haiku-4-5-20251001"; // narración, live events
const MODEL_SMART = "claude-sonnet-4-6";          // assistant, bienvenida provincia

// Registra el consumo de tokens de una respuesta de Claude en analytics (no bloqueante).
function logClaude(r, context, lang = null) {
  try {
    recordUsage({
      provider: "claude",
      model: r?.model,
      tokensIn: r?.usage?.input_tokens,
      tokensOut: r?.usage?.output_tokens,
      context, lang,
    });
  } catch (_) {}
  addClaudeSpend(r); // suma al tope de gasto diario (circuit breaker)
}

// ─── CONFIGURACIÓN ───────────────────────────────────────────────────────────
const TIMEZONE          = "Europe/Madrid";
const SPAIN_INFO_URL    = "https://www.spain.info/es/agenda/";
const DEFAULT_VOICE_ID  = process.env.ELEVEN_VOICE_ID;

// max_tokens por nivel de narración (poco/normal/mucho)
// max_tokens alto para que el modelo nunca se corte — truncarPorFrases() controla la longitud real
const MAX_TOKENS_BY_NIVEL = { poco: 1000, normal: 1000, mucho: 1000 };

// ─── PROTECCIÓN DE ENDPOINTS CAROS ───────────────────────────────────────────
// 3 capas: (A) secreto compartido app↔backend, (B) rate-limit por IP/dispositivo,
// (C) tope de gasto diario (circuit breaker). Todo configurable por entorno.
const APP_SHARED_SECRET     = process.env.APP_SHARED_SECRET || "";      // vacío = capa A desactivada
const RL_IP_PER_MIN         = Number(process.env.RL_IP_PER_MIN         || 60);
const RL_IP_PER_DAY         = Number(process.env.RL_IP_PER_DAY         || 1500);
const RL_DEV_PER_MIN        = Number(process.env.RL_DEV_PER_MIN        || 40);
const RL_DEV_PER_DAY        = Number(process.env.RL_DEV_PER_DAY        || 800);
let CLAUDE_DAILY_USD_CAP  = Number(process.env.CLAUDE_DAILY_USD_CAP  || 5);       // $/día (editable desde el panel)
let ELEVEN_DAILY_CHAR_CAP = Number(process.env.ELEVEN_DAILY_CHAR_CAP || 200000); // caracteres/día (editable desde el panel)

// Contadores de gasto del día (memoria; se reinician al cambiar de día en Madrid).
const _spendDayFmt = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Madrid" });
let _spendDay = _spendDayFmt.format(new Date());
let _claudeUsdToday = 0, _elevenCharsToday = 0;
function _rollSpendDay() {
  const d = _spendDayFmt.format(new Date());
  if (d !== _spendDay) { _spendDay = d; _claudeUsdToday = 0; _elevenCharsToday = 0; }
}
function addClaudeSpend(r) {
  try { _rollSpendDay(); _claudeUsdToday += claudeCost(r?.model, r?.usage?.input_tokens, r?.usage?.output_tokens); } catch (_) {}
}
function addElevenSpend(chars) { _rollSpendDay(); _elevenCharsToday += (chars || 0); }

// Rate-limit en memoria (ventana fija). Limpieza periódica para no crecer sin fin.
const _rl = new Map();
function _overLimit(key, max, windowMs) {
  const now = Date.now();
  let e = _rl.get(key);
  if (!e || now - e.start >= windowMs) { e = { count: 0, start: now }; _rl.set(key, e); }
  e.count++;
  return e.count > max;
}
setInterval(() => {
  const now = Date.now();
  for (const [k, e] of _rl) if (now - e.start > 86400000) _rl.delete(k);
}, 3600000).unref?.();

function clientIp(req) {
  const xf = (req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return xf || req.ip || req.socket?.remoteAddress || "unknown";
}

// Middleware que protege los endpoints caros (Claude / ElevenLabs).
function guard(req, res, next) {
  // Capa A — secreto compartido (solo se exige si está configurado en el entorno).
  if (APP_SHARED_SECRET && req.get("x-app-key") !== APP_SHARED_SECRET) {
    return res.status(401).json({ error: "no autorizado" });
  }
  // Capa C — tope de gasto diario: corta ANTES de gastar más.
  _rollSpendDay();
  if (_claudeUsdToday >= CLAUDE_DAILY_USD_CAP || _elevenCharsToday >= ELEVEN_DAILY_CHAR_CAP) {
    return res.status(503).json({ error: "servicio en pausa por hoy" });
  }
  // Capa B — rate-limit por IP y por dispositivo.
  const ip = clientIp(req);
  if (_overLimit("ipm:" + ip, RL_IP_PER_MIN, 60000) || _overLimit("ipd:" + ip, RL_IP_PER_DAY, 86400000)) {
    return res.status(429).json({ error: "demasiadas peticiones" });
  }
  const dev = req.get("x-device-id");
  if (dev && (_overLimit("dvm:" + dev, RL_DEV_PER_MIN, 60000) || _overLimit("dvd:" + dev, RL_DEV_PER_DAY, 86400000))) {
    return res.status(429).json({ error: "demasiadas peticiones" });
  }
  next();
}

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

// ─── CACHÉ DE NARRACIONES EN DISCO ──────────────────────────────────────────
// Directorio: /data/narration-cache (Render Persistent Disk) o fallback local
const NARRATION_CACHE_DIR = process.env.NARRATION_CACHE_DIR
  || (process.env.RENDER ? "/data/narration-cache" : "./narration-cache");
let CACHE_TTL_DAYS = Number(process.env.CACHE_TTL_DAYS ?? 14);
let CACHE_TTL_MS   = CACHE_TTL_DAYS * 24 * 60 * 60 * 1000;

const CACHE_TXT_DIR    = path.join(NARRATION_CACHE_DIR, "txt");
const CACHE_MP3_DIR    = path.join(NARRATION_CACHE_DIR, "mp3");
const CACHE_CONFIG_FILE = path.join(NARRATION_CACHE_DIR, "admin-config.json");

async function readCacheConfig() {
  try { return JSON.parse(await fs.readFile(CACHE_CONFIG_FILE, "utf8")); }
  catch { return {}; }
}
async function writeCacheConfig(cfg) {
  await fs.writeFile(CACHE_CONFIG_FILE, JSON.stringify(cfg, null, 2), "utf8");
}

// ── Topes de gasto editables desde el panel (persisten en disco) ──────────────
const ADMIN_LIMITS_FILE = path.join(NARRATION_CACHE_DIR, "admin-limits.json");
async function loadAdminLimits() {
  try {
    const j = JSON.parse(await fs.readFile(ADMIN_LIMITS_FILE, "utf8"));
    if (Number.isFinite(j.claudeDailyUsdCap)  && j.claudeDailyUsdCap  > 0) CLAUDE_DAILY_USD_CAP  = j.claudeDailyUsdCap;
    if (Number.isFinite(j.elevenDailyCharCap) && j.elevenDailyCharCap > 0) ELEVEN_DAILY_CHAR_CAP = j.elevenDailyCharCap;
    console.log(`Topes cargados de disco: Claude $${CLAUDE_DAILY_USD_CAP}/día, Eleven ${ELEVEN_DAILY_CHAR_CAP} chars/día`);
  } catch { /* sin overrides en disco: se usan env/defaults */ }
}
async function saveAdminLimits() {
  await fs.writeFile(ADMIN_LIMITS_FILE, JSON.stringify({
    claudeDailyUsdCap: CLAUDE_DAILY_USD_CAP,
    elevenDailyCharCap: ELEVEN_DAILY_CHAR_CAP,
  }, null, 2), "utf8");
}

async function initNarrationCache() {
  await fs.mkdir(CACHE_TXT_DIR, { recursive: true });
  await fs.mkdir(CACHE_MP3_DIR, { recursive: true });
  await loadAdminLimits(); // topes de gasto guardados desde el panel
  // Leer TTL override desde disco persistente
  const cfg = await readCacheConfig();
  if (cfg.ttl_days && Number.isInteger(cfg.ttl_days) && cfg.ttl_days > 0) {
    CACHE_TTL_DAYS = cfg.ttl_days;
    CACHE_TTL_MS   = CACHE_TTL_DAYS * 24 * 60 * 60 * 1000;
  }
  await cleanExpiredCache();
  console.log(`✅ Narration cache ready — dir: ${NARRATION_CACHE_DIR}, TTL: ${CACHE_TTL_DAYS} días`);
}

// ─── POOL DE PREGUNTAS DE QUIZ ───────────────────────────────────────────────
const QUIZ_POOL_DIR = path.join(NARRATION_CACHE_DIR, "quiz-pool");

async function initQuizPool() {
  await fs.mkdir(QUIZ_POOL_DIR, { recursive: true });
  console.log(`✅ Quiz pool ready — dir: ${QUIZ_POOL_DIR}`);
}

function quizPoolFile(topic, difficulty, lang = "es") {
  const safe = topic.replace(/[^a-z0-9_]/gi, "_").slice(0, 60);
  const langSuffix = lang === "en" ? "_en" : "";
  return path.join(QUIZ_POOL_DIR, `${safe}_${difficulty}${langSuffix}.json`);
}

async function loadQuizPool(topic, difficulty, lang = "es") {
  try {
    return JSON.parse(await fs.readFile(quizPoolFile(topic, difficulty, lang), "utf8"));
  } catch { return []; }
}

async function saveQuizPool(topic, difficulty, pool, lang = "es") {
  await fs.writeFile(quizPoolFile(topic, difficulty, lang), JSON.stringify(pool));
}

// ─── POOL DE ROSCOS (juego "El Rosco", estilo Pasapalabra) ───────────────────
const ROSCO_POOL_DIR = path.join(NARRATION_CACHE_DIR, "rosco-pool");

// Letras del rosco. ES: 25 letras sin K/W (incluye Ñ). EN: alfabeto A-Z.
const ROSCO_LETTERS_ES = ["A","B","C","D","E","F","G","H","I","J","L","M","N","Ñ","O","P","Q","R","S","T","U","V","X","Y","Z"];
const ROSCO_LETTERS_EN = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const ROSCO_DIFFICULTY_ES = {
  easy:   "FÁCIL: palabras comunes del día a día, definiciones directas.",
  medium: "MEDIA: cultura general, alguna palabra menos frecuente.",
  hard:   "DIFÍCIL: vocabulario rico, términos específicos, definiciones más sutiles.",
};
const ROSCO_DIFFICULTY_EN = {
  easy:   "EASY: common everyday words, direct definitions.",
  medium: "MEDIUM: general knowledge, some less frequent words.",
  hard:   "HARD: rich vocabulary, specific terms, subtler definitions.",
};

async function initRoscoPool() {
  await fs.mkdir(ROSCO_POOL_DIR, { recursive: true });
  console.log(`✅ Rosco pool ready — dir: ${ROSCO_POOL_DIR}`);
}

// Versión del pool: súbela para descartar sets antiguos al mejorar el prompt.
const ROSCO_POOL_VERSION = "v6";

function roscoPoolFile(difficulty, lang = "es") {
  const safe = String(difficulty).replace(/[^a-z0-9_]/gi, "_").slice(0, 20);
  const langSuffix = lang === "en" ? "_en" : "";
  return path.join(ROSCO_POOL_DIR, `${safe}${langSuffix}_${ROSCO_POOL_VERSION}.json`);
}

async function loadRoscoPool(difficulty, lang = "es") {
  try { return JSON.parse(await fs.readFile(roscoPoolFile(difficulty, lang), "utf8")); }
  catch { return []; }
}

async function saveRoscoPool(difficulty, pool, lang = "es") {
  await fs.writeFile(roscoPoolFile(difficulty, lang), JSON.stringify(pool));
}

// Minúsculas sin acentos, PERO conservando la ñ (letra propia del rosco español).
function roscoNormalize(s) {
  // minúsculas y sin tildes, pero conservando la ñ (letra propia del rosco).
  return String(s || "")
    .toLowerCase()
    .replace(/[áàä]/g, "a")
    .replace(/[éèë]/g, "e")
    .replace(/[íìï]/g, "i")
    .replace(/[óòö]/g, "o")
    .replace(/[úùü]/g, "u")
    .trim();
}

// Valida que la respuesta cumple de verdad la condición de su letra.
function roscoEntryValid(entry) {
  if (!entry) return false;
  const letter = roscoNormalize(entry.letter);
  const clue   = roscoNormalize(entry.clue);
  const answer = roscoNormalize(entry.answer);
  if (!letter || !clue || !answer) return false;
  // La pista no puede delatar la respuesta: se compara por palabras completas
  // (no subcadena), para no rechazar p. ej. "barca" por aparecer en "embarcación".
  const clueWords = clue.split(/[^a-zñ]+/).filter(Boolean);
  if (clueWords.includes(answer)) return false;
  const mode = entry.mode === "contains" ? "contains" : "starts";
  return mode === "starts"
    ? answer.startsWith(letter)
    : answer.replace(/\s+/g, "").includes(letter);
}

// Extrae el primer array JSON de una respuesta de Claude (tolera ```fences```).
function parseRoscoArray(raw) {
  let s = String(raw || "").trim().replace(/```json|```/g, "").trim();
  const a = s.indexOf("[");
  const b = s.lastIndexOf("]");
  if (a === -1 || b === -1) throw new Error(`No JSON array: ${String(raw).slice(0, 200)}`);
  const parsed = JSON.parse(s.slice(a, b + 1));
  if (!Array.isArray(parsed)) throw new Error("La respuesta no es un array");
  return parsed;
}

// Normaliza el array crudo a entradas {letter,mode,clue,answer} y descarta las
// que no cumplen su letra.
function mapRoscoEntries(parsed) {
  return parsed
    .map(e => ({
      letter: String(e.letter || "").toUpperCase(),
      mode: e.mode === "contains" ? "contains" : "starts",
      clue: String(e.clue || "").trim(),
      answer: String(e.answer || "").trim().toLowerCase(),
    }))
    .filter(roscoEntryValid);
}

// Garantiza UNA entrada por letra y en el orden canónico de `letters`: descarta
// repetidas (Claude a veces devuelve la misma letra varias veces) y letras que
// no estén en la lista.
function dedupeAndOrderRosco(entries, letters) {
  const byLetter = new Map();
  for (const e of entries) {
    const L = String(e.letter || "").toUpperCase();
    if (!byLetter.has(L)) byLetter.set(L, { ...e, letter: L });
  }
  const out = [];
  for (const L of letters) {
    if (byLetter.has(L)) out.push(byLetter.get(L));
  }
  return out;
}

function buildRoscoReviewPrompt(letters, draft) {
  return `Eres un lexicógrafo revisando un rosco de concurso en ESPAÑOL. Te doy un BORRADOR (array JSON de {letter,mode,clue,answer}). Devuelve SOLO el array JSON COMPLETO y corregido, sin markdown ni texto extra.

Revisa CADA entrada, una por una, y aplica:
1. La "answer" debe ser una palabra REAL y CONOCIDA del español de uso corriente. Si es rara, un tecnicismo oscuro, un nombre propio poco común o dudoso, SUSTITÚYELA por otra palabra más común para esa MISMA letra.
2. La "clue" debe ser una definición CORRECTA y precisa de esa palabra, de modo que la respuesta sea la ÚNICA solución natural. Si la pista es vaga, ambigua, incorrecta o describe otra cosa, REESCRÍBELA (o cambia la respuesta) hasta que encajen a la perfección. Ejemplos de fallo a corregir: definir un martillo y poner "hacha"; decir que Diana es diosa "griega" (es romana); una respuesta que no es lo que la pista describe.
3. Debe haber UNA entrada por CADA letra de esta lista, EN ESTE ORDEN: ${letters.join(", ")} (incluida la Ñ, siempre "contains"). Añade las que falten.
4. Cada respuesta cumple su letra (empieza/contiene) y la pista NUNCA contiene la palabra respuesta.

REGLA DE ORO: ante cualquier duda de si pista y respuesta encajan perfectamente, cámbialas por un par SENCILLO, común e indiscutible. Prefiere lo correcto y conocido antes que lo ingenioso.

BORRADOR:
${JSON.stringify(draft)}`;
}

function buildRoscoReviewPromptEN(letters, draft) {
  return `You are a lexicographer reviewing a quiz-show word ring in ENGLISH. I give you a DRAFT (JSON array of {letter,mode,clue,answer}). Return ONLY the COMPLETE, corrected JSON array, no markdown or extra text.

Review EACH entry, one by one, and apply:
1. The "answer" must be a REAL, WELL-KNOWN, everyday English word. If it is obscure, an unusual technical term, a rare proper noun, or doubtful, REPLACE it with a more common word for the SAME letter.
2. The "clue" must be a CORRECT, precise definition of that word, so the answer is the ONLY natural solution. If a clue is vague, ambiguous, wrong, or describes something else, REWRITE it (or change the answer) until they match perfectly. Typical errors to fix: defining a hammer but writing "axe"; an answer that is not what the clue describes.
3. There must be ONE entry per EACH letter in this list, IN THIS ORDER: ${letters.join(", ")}. Add any that are missing.
4. Each answer satisfies its letter (start/contain), and the clue NEVER contains the answer word.

GOLDEN RULE: whenever in any doubt that clue and answer match perfectly, swap them for a SIMPLE, common, indisputable pair. Prefer correct and well-known over clever.

DRAFT:
${JSON.stringify(draft)}`;
}

// Prompt para rellenar SOLO las letras que faltan (llamada corta y rápida).
function buildRoscoFillPrompt(missing, difficulty) {
  const diff = ROSCO_DIFFICULTY_ES[difficulty] || ROSCO_DIFFICULTY_ES.medium;
  return `Completa un rosco tipo "Pasapalabra" en ESPAÑOL. Devuelve SOLO un array JSON, sin markdown ni texto extra, con UNA entrada por CADA una de estas letras: ${missing.join(", ")}.
Esquema por entrada: {"letter":"A","mode":"starts","clue":"...","answer":"..."}
Reglas:
- "answer": UNA palabra común en español, en minúsculas, que EMPIEZA por su letra (mode "starts"); usa "contains" solo si casi no hay palabras que empiecen por ella (la Ñ SIEMPRE "contains").
- "clue": definición breve y PRECISA que describa EXACTAMENTE esa palabra; no incluyas la respuesta.
- Dificultad: ${diff}`;
}

function buildRoscoFillPromptEN(missing, difficulty) {
  const diff = ROSCO_DIFFICULTY_EN[difficulty] || ROSCO_DIFFICULTY_EN.medium;
  return `Complete a "Pasapalabra"-style word ring in ENGLISH. Return ONLY a JSON array, no markdown or extra text, with ONE entry per EACH of these letters: ${missing.join(", ")}.
Per-entry schema: {"letter":"A","mode":"starts","clue":"...","answer":"..."}
Rules:
- "answer": ONE common lowercase English word that STARTS WITH its letter (mode "starts"); use "contains" only if very few words start with it.
- "clue": a short, PRECISE definition describing EXACTLY that word; do not include the answer.
- Difficulty: ${diff}`;
}

// Si tras generar/revisar faltan letras, hace una llamada corta para SOLO esas
// letras y las fusiona. Garantiza roscos completos. Si falla, deja lo que había.
async function fillMissingLetters(entries, letters, difficulty, lang, isEN) {
  const present = new Set(entries.map(e => String(e.letter).toUpperCase()));
  const missing = letters.filter(L => !present.has(L));
  if (missing.length === 0) return entries;
  try {
    const prompt = isEN
      ? buildRoscoFillPromptEN(missing, difficulty)
      : buildRoscoFillPrompt(missing, difficulty);
    const r = await anthropic.messages.create({
      model: MODEL_SMART,
      max_tokens: 900,
      temperature: 0.3,
      messages: [{ role: "user", content: prompt }],
    });
    logClaude(r, "rosco_fill", lang);
    const extra = mapRoscoEntries(parseRoscoArray(r.content?.[0]?.text ?? ""));
    const merged = dedupeAndOrderRosco([...entries, ...extra], letters);
    console.log(`🧩 Rosco fill [${lang}]: faltaban ${missing.length} → ${merged.length}/${letters.length}`);
    return merged;
  } catch (e) {
    console.error("Rosco fill error:", e.message);
    return entries;
  }
}

function buildRoscoPrompt(letters, difficulty, existingAnswers = []) {
  const diff = ROSCO_DIFFICULTY_ES[difficulty] || ROSCO_DIFFICULTY_ES.medium;
  const avoid = existingAnswers.length > 0
    ? `\nEvita estas respuestas ya usadas: ${existingAnswers.slice(-120).join(", ")}.\n`
    : "";
  return `Genera un rosco tipo "Pasapalabra" en ESPAÑOL. Devuelve SOLO un JSON válido (un array), sin markdown ni texto extra, con este esquema EXACTO:
[{"letter":"A","mode":"starts","clue":"...","answer":"..."}]

Reglas:
- Una entrada por CADA letra de esta lista, EN ESTE ORDEN: ${letters.join(", ")}. No te saltes ninguna, incluida la Ñ.
- "answer": UNA sola palabra común en español, sin artículos, en minúsculas.
- "mode": "starts" si la respuesta EMPIEZA por la letra; "contains" si la CONTIENE. Usa "contains" solo cuando apenas existan palabras que empiecen por esa letra. La letra Ñ SIEMPRE "contains".
- "clue": una definición breve y PRECISA (1 frase), estilo locutor de concurso.
- CRÍTICO — EXACTITUD: la definición debe describir EXACTAMENTE la palabra de "answer", y esa palabra debe ser la ÚNICA que encaje de forma natural con la pista. No confundas conceptos parecidos (p. ej. hacha≠martillo, fábula≠personificación, zarza≠lima, y Diana es diosa romana, no griega). Si no puedes definir bien una palabra, elige otra más segura para esa letra.
- La pista NO puede incluir la palabra respuesta ni delatarla.
- La respuesta debe cumplir DE VERDAD la condición de su letra (empezar/contener).
- Antes de devolver el JSON, revisa cada par: ¿la definición lleva sin ambigüedad a esa palabra concreta? ¿la palabra cumple su letra?
- Números escritos con palabras.
- Dificultad: ${diff}
${avoid}`;
}

function buildRoscoPromptEN(letters, difficulty, existingAnswers = []) {
  const diff = ROSCO_DIFFICULTY_EN[difficulty] || ROSCO_DIFFICULTY_EN.medium;
  const avoid = existingAnswers.length > 0
    ? `\nAvoid these already-used answers: ${existingAnswers.slice(-120).join(", ")}.\n`
    : "";
  return `Generate a "Pasapalabra"-style word ring in ENGLISH. Return ONLY valid JSON (an array), no markdown or extra text, with this EXACT schema:
[{"letter":"A","mode":"starts","clue":"...","answer":"..."}]

Rules:
- One entry per EACH letter in this list, IN THIS ORDER: ${letters.join(", ")}. Do not skip any.
- "answer": ONE single common English word, no articles, lowercase.
- "mode": "starts" if the answer STARTS WITH the letter; "contains" if it CONTAINS it. Use "contains" only when very few common words start with that letter.
- "clue": a short, PRECISE definition (1 sentence), game-show host style.
- CRITICAL — ACCURACY: the definition must describe EXACTLY the "answer" word, and that word must be the ONLY one that naturally fits the clue. Do not confuse similar concepts (e.g. axe≠hammer, fable≠personification). If you cannot define a word well, pick a safer word for that letter.
- The clue must NOT include the answer word or give it away.
- The answer must REALLY satisfy its letter condition (start/contain).
- Before returning the JSON, check each pair: does the definition unambiguously lead to that exact word? Does the word satisfy its letter?
- Write numbers as words.
- Difficulty: ${diff}
${avoid}`;
}

const TOPIC_PROMPTS = {
  cultura_general:    "cultura general",
  historia_espana:    "historia de España",
  cine_series:        "cine y series",
  ciencia_naturaleza: "ciencia y naturaleza",
  mezcla:             "mezcla de cultura general, historia, ciencia, música y curiosidades",
};

const TOPIC_PROMPTS_EN = {
  cultura_general:    "general knowledge",
  historia_espana:    "history of Spain",
  cine_series:        "movies and TV series",
  ciencia_naturaleza: "science and nature",
  mezcla:             "a mix of general knowledge, history, science, music and curiosities",
};

const DIFFICULTY_HINTS = {
  easy:   "FÁCIL: preguntas muy accesibles, hechos conocidos o fáciles de deducir, distractores claros, sin trampas.",
  medium: "MEDIA: requiere cultura general, debe costar un poco, distractores plausibles.",
  hard:   "DIFÍCIL: pregunta específica, detalle preciso, distractores muy plausibles, nada evidente ni escolar.",
};

const DIFFICULTY_HINTS_EN = {
  easy:   "EASY: very accessible questions, well-known facts or easy to deduce, clear distractors, no tricks.",
  medium: "MEDIUM: requires general knowledge, should take some thought, plausible distractors.",
  hard:   "HARD: specific question, precise detail, very plausible distractors, nothing obvious.",
};

function buildQuizPrompt(topicText, difficulty, existingQuestions = []) {
  const diff = DIFFICULTY_HINTS[difficulty] || DIFFICULTY_HINTS.medium;
  const avoid = existingQuestions.length > 0
    ? `\nEvita repetir o reformular cualquiera de estas preguntas ya existentes:\n- ${existingQuestions.slice(-40).join("\n- ")}\n`
    : "";
  return `Devuelve SOLO un JSON válido, sin markdown ni texto extra, con este esquema EXACTO:
{"question":"...","options":["...","...","...","..."],"correct_index":0,"explanation":"..."}

Reglas:
- Español.
- EXACTAMENTE 4 opciones.
- Solo 1 correcta. correct_index entre 0 y 3.
- explanation: 1-2 frases breves.
- NO pongas siempre la correcta en la misma posición.
- Distractores plausibles pero incorrectos.
- Números y romanos en texto para lectura en voz alta.
- Dificultad: ${diff}
- Tema: ${topicText}
${avoid}`;
}

function buildQuizPromptEN(topicText, difficulty, existingQuestions = []) {
  const diff = DIFFICULTY_HINTS_EN[difficulty] || DIFFICULTY_HINTS_EN.medium;
  const avoid = existingQuestions.length > 0
    ? `\nAvoid repeating or rephrasing any of these existing questions:\n- ${existingQuestions.slice(-40).join("\n- ")}\n`
    : "";
  return `Return ONLY valid JSON, no markdown or extra text, with this EXACT schema:
{"question":"...","options":["...","...","...","..."],"correct_index":0,"explanation":"..."}

Rules:
- English.
- EXACTLY 4 options.
- Only 1 correct. correct_index between 0 and 3.
- explanation: 1-2 short sentences.
- Do NOT always place the correct answer in the same position.
- Plausible but incorrect distractors.
- Write numbers and Roman numerals as words for text-to-speech readability.
- Difficulty: ${diff}
- Topic: ${topicText}
${avoid}`;
}

function narrationHash(str) {
  return createHash("sha256").update(str).digest("hex").slice(0, 16);
}

async function getCachedText(key) {
  const file = path.join(CACHE_TXT_DIR, `${narrationHash(key)}.json`);
  try {
    const stat = await fs.stat(file);
    if (Date.now() - stat.mtimeMs > CACHE_TTL_MS) { await fs.unlink(file).catch(() => {}); return null; }
    const data = JSON.parse(await fs.readFile(file, "utf8"));
    return data.text ?? null;
  } catch { return null; }
}

async function setCachedText(key, text) {
  const file = path.join(CACHE_TXT_DIR, `${narrationHash(key)}.json`);
  await fs.writeFile(file, JSON.stringify({ key, text, ts: Date.now() })).catch(() => {});
}

async function getCachedMp3(key) {
  const file = path.join(CACHE_MP3_DIR, `${narrationHash(key)}.mp3`);
  try {
    const stat = await fs.stat(file);
    if (Date.now() - stat.mtimeMs > CACHE_TTL_MS) { await fs.unlink(file).catch(() => {}); return null; }
    return await fs.readFile(file);
  } catch { return null; }
}

async function setCachedMp3(key, buffer) {
  const file = path.join(CACHE_MP3_DIR, `${narrationHash(key)}.mp3`);
  await fs.writeFile(file, buffer).catch(() => {});
}

async function cleanExpiredCache() {
  const now = Date.now();
  for (const dir of [CACHE_TXT_DIR, CACHE_MP3_DIR]) {
    try {
      const files = await fs.readdir(dir);
      for (const f of files) {
        try {
          const fp = path.join(dir, f);
          const stat = await fs.stat(fp);
          if (now - stat.mtimeMs > CACHE_TTL_MS) await fs.unlink(fp);
        } catch {}
      }
    } catch {}
  }
}

async function cacheStats() {
  let txtCount = 0, mp3Count = 0, totalBytes = 0, oldest = Date.now();
  for (const [dir, label] of [[CACHE_TXT_DIR, "txt"], [CACHE_MP3_DIR, "mp3"]]) {
    try {
      const files = await fs.readdir(dir);
      for (const f of files) {
        try {
          const stat = await fs.stat(path.join(dir, f));
          totalBytes += stat.size;
          if (stat.mtimeMs < oldest) oldest = stat.mtimeMs;
          label === "txt" ? txtCount++ : mp3Count++;
        } catch {}
      }
    } catch {}
  }
  return {
    txt_entries: txtCount,
    mp3_entries: mp3Count,
    total_size_mb: (totalBytes / 1048576).toFixed(2),
    oldest_entry_days: txtCount + mp3Count > 0
      ? ((Date.now() - oldest) / 86400000).toFixed(1) : 0,
    cache_ttl_days: CACHE_TTL_DAYS,
    cache_dir: NARRATION_CACHE_DIR,
  };
}

initNarrationCache().catch(e => console.error("⚠️ Error iniciando caché:", e.message));
initQuizPool().catch(e => console.error("⚠️ Error iniciando quiz pool:", e.message));
initRoscoPool().catch(e => console.error("⚠️ Error iniciando rosco pool:", e.message));

// ─── MIDDLEWARE ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: "2mb" }));

// ─── ANALYTICS (SQLite + dashboard) ───────────────────────────────────────────
mountAnalytics(app);
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
// Fallback de geocodificación inversa: BigDataCloud (gratis, sin API key, permite
// uso desde servidor). Nominatim bloquea/limita las IPs de Render, así que cuando
// falla o devuelve ciudad vacía recurrimos aquí.
async function geocodeBigDataCloud(lat, lng, lang = "es") {
  const r = await axios.get("https://api.bigdatacloud.net/data/reverse-geocode-client", {
    params: { latitude: lat, longitude: lng, localityLanguage: lang },
    timeout: 12000,
  });
  const d = r.data || {};
  const admin = (d.localityInfo && d.localityInfo.administrative) || [];
  // En España el nivel administrativo 6 es la provincia (p.ej. "Segovia").
  const nivel6 = admin.find((a) => a.adminLevel === 6);
  return {
    city:        limpiar(d.city || d.locality || ""),
    province:    limpiar((nivel6 && nivel6.name) || d.principalSubdivision || ""),
    country:     limpiar(d.countryName || ""),
    countryCode: limpiar((d.countryCode || "").toUpperCase()),
    raw:         d,
  };
}

async function geocodeInverso(lat, lng, lang = "es") {
  const key = `geo|${lat.toFixed(3)}|${lng.toFixed(3)}|${lang}`;
  const cached = getCache(key, TTL.reverse);
  if (cached) return cached;

  let result = null;
  try {
    const r = await axios.get("https://nominatim.openstreetmap.org/reverse", {
      params: { format: "jsonv2", lat, lon: lng, zoom: 10, addressdetails: 1, "accept-language": lang },
      headers: { "User-Agent": "SanchoApp/1.0 (contact: app.raidio@gmail.com)" },
      timeout: 15000,
    });
    const addr = r.data?.address || {};
    result = {
      city:        limpiar(addr.city || addr.town || addr.village || addr.municipality || addr.hamlet || ""),
      province:    limpiar(addr.state_district || addr.province || addr.state || ""),
      country:     limpiar(addr.country || ""),
      countryCode: limpiar((addr.country_code || "").toUpperCase()),
      raw:         r.data || null,
    };
  } catch (e) {
    console.error("ERROR geocodeInverso (nominatim):", e.message);
  }

  // Fallback si Nominatim falló o no resolvió la ciudad (habitual en Render).
  if (!result || !result.city) {
    try {
      const bdc = await geocodeBigDataCloud(lat, lng, lang);
      if (bdc.city) {
        console.log(`geocodeInverso: fallback BigDataCloud -> ${bdc.city}, ${bdc.province}`);
        result = bdc;
      }
    } catch (e) {
      console.error("ERROR geocodeInverso (bigdatacloud):", e.message);
    }
  }

  if (!result) result = { city: "", province: "", country: "", countryCode: "", raw: null };
  // Solo cacheamos resultados con ciudad; asi un fallo puntual no se fija 12 h.
  if (result.city) setCache(key, result);
  return result;
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

// ─── EVENTOS EN VIVO VÍA GEMINI (grounding con Google Search) ────────────────
// Fuente principal: Gemini busca en Google en tiempo real y filtra por relevancia.
// Tope diario de seguridad + caché por zona/día (en getLiveEventsContext) para
// que el gasto no se dispare. Sin GEMINI_API_KEY, devuelve null (fallback).
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_DAILY_CAP = 800; // máximo de llamadas a Gemini por día
let _geminiDay = "";
let _geminiCount = 0;

async function buscarEventosGemini({ zona, now, lang, poi }) {
  if (!GEMINI_API_KEY) return null;
  const today = now.toISOString().slice(0, 10);
  if (_geminiDay !== today) { _geminiDay = today; _geminiCount = 0; }
  if (_geminiCount >= GEMINI_DAILY_CAP) return null;

  const isEN = lang === "en";
  const fecha = now.toLocaleDateString(isEN ? "en-GB" : "es-ES",
    { day: "numeric", month: "long", year: "numeric", timeZone: TIMEZONE });
  const cerca = poi
    ? (isEN ? ` The traveller is near: ${poi}.` : ` El viajero está cerca de: ${poi}.`)
    : "";
  const prompt = isEN
    ? `You are a road-trip co-pilot in Spain. Today is ${fecha}. List ONLY real, notable events (local fiestas, fairs, festivals, big concerts) happening in ${zona} (Spain) these days or the coming week.${cerca} Only what a traveller would care about, with dates. Nothing small or obscure. If nothing notable, reply EXACTLY "NINGUNO". Max 3, short plain lines like "- Name (date): one short detail". No intro, no filler.`
    : `Eres el copiloto de un viaje por carretera en España. Hoy es ${fecha}. Lista SOLO eventos reales y destacados (fiestas populares, ferias, festivales, conciertos grandes) que haya estos días o la próxima semana en ${zona} (España).${cerca} Solo lo que le interesaría a un viajero, con su fecha. Nada pequeño ni raro. Si no hay nada destacado, responde EXACTAMENTE "NINGUNO". Máximo 3, en líneas cortas como "- Nombre (fecha): un detalle breve". Sin introducción ni relleno.`;

  try {
    _geminiCount++;
    const resp = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }], tools: [{ google_search: {} }] },
      { headers: { "Content-Type": "application/json" }, timeout: 20000 }
    );
    const cand = resp.data?.candidates?.[0];
    const text = (cand?.content?.parts || []).map(p => p.text).filter(Boolean).join("").trim();
    const norm = text.toUpperCase();
    if (!text || norm === "NINGUNO" || norm.startsWith("NINGUNO")) return null;
    return text;
  } catch (e) {
    console.error("Gemini eventos error:", e.response?.data?.error?.message || e.message);
    return null;
  }
}

// ─── CONTEXTO DE EVENTOS EN VIVO ─────────────────────────────────────────────
// Estrategia: 0) Gemini (Google Search en vivo) → 1) Spain.info → 2) Claude
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
    // 0) Fuente principal: Gemini con grounding de Google Search (actual al día).
    const geminiTexto = await buscarEventosGemini({
      zona, now, lang: limpiar(language) || "es", poi,
    });
    if (geminiTexto) {
      const context = `Eventos reales cerca (${zona}):\n${geminiTexto}`;
      setCache(key, context);
      return context;
    }

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

    // 2) Fallback: Claude — pide eventos con fechas si las conoce, pero no exige fechas para responder
    const r = await anthropic.messages.create({
      model: MODEL_FAST,
      max_tokens: 250,
      system: "Eres un experto en cultura, fiestas y tradiciones locales de España. Responde SOLO si conoces eventos reales. Si no conoces ninguno, responde únicamente: NINGUNO.",
      messages: [{ role: "user", content: `¿Qué eventos, ferias, festivales o fiestas importantes se celebran en ${zona} durante ${mes}? ${poi ? `El viajero está cerca de: ${poi}.` : ""} Si conoces fechas concretas (día y mes), inclúyelas. Si no las conoces con seguridad, menciona el evento igualmente. Solo eventos reales, en 2-3 frases máximo.` }],
    });
    logClaude(r, "eventos_vivo");

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
// ─── CORRECCIÓN DE PRONUNCIACIÓN PARA ELEVENLABS ─────────────────────────────
// Palabras españolas que ElevenLabs pronuncia mal en inglés → reemplazar por fonética
// Solo palabras que ElevenLabs pronuncia mal en inglés — no tocar las que ya suenan bien
const PRONUNCIACION = [
  [/\bGeneralife\b/gi, "Jenerali-fe"],
];

function corregirPronunciacion(text) {
  if (!text) return text;
  let result = text;
  for (const [pattern, replacement] of PRONUNCIACION) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

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

// ─── QUIZ QUESTION POOL ──────────────────────────────────────────────────────
app.get("/quiz/pool/stats", async (_req, res) => {
  try {
    const files = await fs.readdir(QUIZ_POOL_DIR).catch(() => []);
    const pools = [];
    for (const f of files.filter(f => f.endsWith(".json"))) {
      try {
        const data = JSON.parse(await fs.readFile(path.join(QUIZ_POOL_DIR, f), "utf8"));
        pools.push({ file: f, questions: data.length, sample: data[0]?.question?.slice(0, 80) ?? "" });
      } catch { pools.push({ file: f, questions: "?", sample: "" }); }
    }
    pools.sort((a, b) => String(a.file).localeCompare(String(b.file)));
    res.json({ total_pools: pools.length, pools });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post("/quiz/question", guard, async (req, res) => {
  try {
    const { topic = "cultura_general", difficulty = "easy", usedIds = [], customTopic = "", lang = "es" } = req.body || {};

    const isEN = lang === "en";
    const topicPrompts = isEN ? TOPIC_PROMPTS_EN : TOPIC_PROMPTS;

    // Temas personalizados no se poolizan — demasiado únicos
    const isCustom = topic === "personalizado";
    const topicText = isCustom
      ? (customTopic.trim() || (isEN ? "general knowledge" : "cultura general"))
      : (topicPrompts[topic] || (isEN ? "general knowledge" : "cultura general"));

    if (!isCustom) {
      const pool = await loadQuizPool(topic, difficulty, lang);
      const usedSet = new Set(usedIds);
      const available = pool.filter(q => !usedSet.has(q.id));

      if (available.length > 0) {
        const q = available[Math.floor(Math.random() * available.length)];
        console.log(`🎯 Quiz HIT [${lang}]: ${topic}/${difficulty} (pool:${pool.length} disp:${available.length})`);
        return res.json({ ...q, fromPool: true });
      }
      console.log(`🤖 Quiz MISS [${lang}]: generando para ${topic}/${difficulty} (pool:${pool.length} usadas:${usedIds.length})`);
    }

    // Generar nueva pregunta con Claude
    const pool = isCustom ? [] : await loadQuizPool(topic, difficulty, lang);
    const existingQuestions = pool.map(q => q.question);
    const prompt = isEN
      ? buildQuizPromptEN(topicText, difficulty, existingQuestions)
      : buildQuizPrompt(topicText, difficulty, existingQuestions);

    const r = await anthropic.messages.create({
      model: MODEL_FAST,
      max_tokens: 600,
      messages: [{ role: "user", content: prompt }],
    });
    logClaude(r, "quiz", lang);

    const raw = r.content?.[0]?.text ?? "";
    let jsonStr = raw.trim().replace(/```json|```/g, "").trim();
    const start = jsonStr.indexOf("{");
    const end = jsonStr.lastIndexOf("}");
    if (start === -1 || end === -1) throw new Error(`No JSON in response: ${raw.slice(0, 200)}`);
    jsonStr = jsonStr.slice(start, end + 1);

    const parsed = JSON.parse(jsonStr);
    if (!parsed.question || !Array.isArray(parsed.options) || parsed.options.length !== 4) {
      throw new Error(`Formato inválido: ${raw.slice(0, 200)}`);
    }

    const id = narrationHash(`${lang}|${topic}|${difficulty}|${parsed.question}`);
    const newQ = {
      id,
      question: parsed.question,
      options: parsed.options,
      correct_index: typeof parsed.correct_index === "number" ? parsed.correct_index : 0,
      explanation: parsed.explanation ?? "",
      createdAt: new Date().toISOString(),
    };

    if (!isCustom) {
      // Añadir al pool evitando duplicados
      if (!pool.find(p => p.id === id)) {
        pool.push(newQ);
        saveQuizPool(topic, difficulty, pool, lang).catch(e => console.error("Error guardando quiz pool:", e.message));
        console.log(`💾 Quiz SET [${lang}]: ${topic}/${difficulty} (pool size: ${pool.length})`);
      }
    }

    res.json({ ...newQ, fromPool: false });
  } catch (e) {
    console.error("❌ /quiz/question error:", e.message);
    res.status(500).json({ error: "quiz_question_failed", detail: e.message });
  }
});

// ─── ROSCO (juego "El Rosco") ────────────────────────────────────────────────
app.get("/rosco/pool/stats", async (_req, res) => {
  try {
    const files = await fs.readdir(ROSCO_POOL_DIR).catch(() => []);
    const pools = [];
    for (const f of files.filter(f => f.endsWith(".json"))) {
      try {
        const data = JSON.parse(await fs.readFile(path.join(ROSCO_POOL_DIR, f), "utf8"));
        pools.push({ file: f, sets: data.length, letters: data[0]?.letters?.length ?? 0 });
      } catch { pools.push({ file: f, sets: "?", letters: 0 }); }
    }
    pools.sort((a, b) => String(a.file).localeCompare(String(b.file)));
    res.json({ total_pools: pools.length, pools });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post("/rosco/set", guard, async (req, res) => {
  try {
    const { difficulty = "medium", usedIds = [], lang = "es" } = req.body || {};
    const isEN = lang === "en";
    const letters = isEN ? ROSCO_LETTERS_EN : ROSCO_LETTERS_ES;

    // Pool hit: devolver un rosco ya generado que el cliente no haya visto.
    const pool = await loadRoscoPool(difficulty, lang);
    const usedSet = new Set(usedIds);
    const available = pool.filter(s => !usedSet.has(s.id));
    if (available.length > 0) {
      const s = available[Math.floor(Math.random() * available.length)];
      console.log(`🎯 Rosco HIT [${lang}]: ${difficulty} (pool:${pool.length} disp:${available.length})`);
      return res.json({ ...s, fromPool: true });
    }
    console.log(`🤖 Rosco MISS [${lang}]: generando ${difficulty} (pool:${pool.length})`);

    const existingAnswers = pool.flatMap(s => (s.letters || []).map(l => l.answer));

    async function generate() {
      const prompt = isEN
        ? buildRoscoPromptEN(letters, difficulty, existingAnswers)
        : buildRoscoPrompt(letters, difficulty, existingAnswers);
      const r = await anthropic.messages.create({
        model: MODEL_SMART,
        max_tokens: 2000,
        messages: [{ role: "user", content: prompt }],
      });
      logClaude(r, "rosco", lang);
      return parseRoscoArray(r.content?.[0]?.text ?? "");
    }

    // Primer pase: genera, valida y deduplica por letra; un reintento si faltan.
    let entries = [];
    for (let attempt = 0; attempt < 2; attempt++) {
      entries = dedupeAndOrderRosco(mapRoscoEntries(await generate()), letters);
      if (entries.length >= Math.floor(letters.length * 0.8)) break;
      console.log(`⚠️ Rosco válidas ${entries.length}/${letters.length}, reintentando…`);
    }

    // Relleno dirigido de las letras que falten ANTES de revisar, para que la
    // revisión pula también las letras rellenadas.
    entries = await fillMissingLetters(entries, letters, difficulty, lang, isEN);

    // Pase FINAL de revisión, con temperatura baja para máxima precisión:
    // corrige cualquier pista que no defina con exactitud su palabra sobre el
    // rosco ya completo. Si algo falla, nos quedamos con lo anterior.
    try {
      const reviewPrompt = isEN
        ? buildRoscoReviewPromptEN(letters, entries)
        : buildRoscoReviewPrompt(letters, entries);
      const rr = await anthropic.messages.create({
        model: MODEL_SMART,
        max_tokens: 2500,
        temperature: 0.3,
        messages: [{ role: "user", content: reviewPrompt }],
      });
      logClaude(rr, "rosco_review", lang);
      const reviewed = dedupeAndOrderRosco(
        mapRoscoEntries(parseRoscoArray(rr.content?.[0]?.text ?? "")), letters);
      if (reviewed.length >= entries.length) {
        console.log(`🔎 Rosco review [${lang}]: ${entries.length} → ${reviewed.length} válidas`);
        entries = reviewed;
      }
    } catch (e) {
      console.error("Rosco review error (se usa lo anterior):", e.message);
    }

    if (entries.length < Math.floor(letters.length * 0.6)) {
      throw new Error(`Rosco inválido: solo ${entries.length}/${letters.length} válidas`);
    }

    const id = narrationHash(`${lang}|${difficulty}|${entries.map(e => e.answer).join(",")}`);
    const set = { id, lang, difficulty, letters: entries, createdAt: new Date().toISOString() };

    if (!pool.find(p => p.id === id)) {
      pool.push(set);
      saveRoscoPool(difficulty, pool, lang).catch(e => console.error("Error guardando rosco pool:", e.message));
      console.log(`💾 Rosco SET [${lang}]: ${difficulty} (pool:${pool.length}, letras:${entries.length})`);
    }

    res.json({ ...set, fromPool: false });
  } catch (e) {
    console.error("❌ /rosco/set error:", e.message);
    res.status(500).json({ error: "rosco_set_failed", detail: e.message });
  }
});

// ─── CACHÉ — STATS Y CONTROL ─────────────────────────────────────────────────
app.get("/cache/stats", async (_req, res) => {
  try { res.json(await cacheStats()); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

// ─── PANEL DE ADMIN (estado + topes editables) ───────────────────────────────
function adminOk(req) {
  const secret = process.env.CACHE_ADMIN_SECRET;
  return Boolean(secret) && req.query.secret === secret;
}

// Estado general para el cuadro de mandos.
app.get("/admin/status", (req, res) => {
  if (!adminOk(req)) return res.status(401).json({ error: "secret inválido o no configurado" });
  _rollSpendDay();
  res.json({
    poiCount: POIS.length,
    spend: {
      day: _spendDay,
      claudeUsdToday: Math.round(_claudeUsdToday * 10000) / 10000,
      claudeDailyUsdCap: CLAUDE_DAILY_USD_CAP,
      elevenCharsToday: _elevenCharsToday,
      elevenDailyCharCap: ELEVEN_DAILY_CHAR_CAP,
    },
    rateLimits: { ipPerMin: RL_IP_PER_MIN, ipPerDay: RL_IP_PER_DAY, devPerMin: RL_DEV_PER_MIN, devPerDay: RL_DEV_PER_DAY },
    secretActive: Boolean(APP_SHARED_SECRET),
    gemini: { callsToday: _geminiCount, dailyCap: GEMINI_DAILY_CAP },
    uptimeSec: Math.round(process.uptime()),
  });
});

// Ver los topes de gasto actuales.
app.get("/admin/limits", (req, res) => {
  if (!adminOk(req)) return res.status(401).json({ error: "secret inválido o no configurado" });
  res.json({ claudeDailyUsdCap: CLAUDE_DAILY_USD_CAP, elevenDailyCharCap: ELEVEN_DAILY_CHAR_CAP });
});

// Editar los topes de gasto (persisten en disco).
app.post("/admin/limits", async (req, res) => {
  if (!adminOk(req)) return res.status(401).json({ error: "secret inválido o no configurado" });
  const c = Number(req.body?.claudeDailyUsdCap);
  const e = Number(req.body?.elevenDailyCharCap);
  if (Number.isFinite(c) && c > 0) CLAUDE_DAILY_USD_CAP  = c;
  if (Number.isFinite(e) && e > 0) ELEVEN_DAILY_CHAR_CAP = e;
  try { await saveAdminLimits(); } catch (err) { return res.status(500).json({ error: err.message }); }
  res.json({ claudeDailyUsdCap: CLAUDE_DAILY_USD_CAP, elevenDailyCharCap: ELEVEN_DAILY_CHAR_CAP, message: "Topes actualizados" });
});

app.post("/cache/config", async (req, res) => {
  const secret = process.env.CACHE_ADMIN_SECRET;
  if (!secret || req.query.secret !== secret)
    return res.status(401).json({ error: "secret inválido o no configurado" });
  const ttl_days = Number(req.body?.ttl_days);
  if (!Number.isInteger(ttl_days) || ttl_days < 1)
    return res.status(400).json({ error: "ttl_days debe ser un entero positivo" });
  CACHE_TTL_DAYS = ttl_days;
  CACHE_TTL_MS   = ttl_days * 24 * 60 * 60 * 1000;
  await writeCacheConfig({ ttl_days });
  res.json({ ttl_days, message: `TTL actualizado a ${ttl_days} días` });
});

app.delete("/cache/clear", async (req, res) => {
  const secret = process.env.CACHE_ADMIN_SECRET;
  if (!secret || req.query.secret !== secret)
    return res.status(401).json({ error: "secret inválido o no configurado" });
  try {
    let deleted = 0;
    for (const dir of [CACHE_TXT_DIR, CACHE_MP3_DIR]) {
      const files = await fs.readdir(dir).catch(() => []);
      for (const f of files) {
        await fs.unlink(path.join(dir, f)).catch(() => {});
        deleted++;
      }
    }
    res.json({ deleted, message: "Caché limpiado" });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ─── SALUD ───────────────────────────────────────────────────────────────────
app.get("/healthz", (_req, res) => res.status(200).send("ok"));
app.get("/",        (_req, res) => res.send("Backend Sancho funcionando ✔️"));

// ─── CUENTOS INMERSIVOS ───────────────────────────────────────────────────────
app.post("/kids-story-immersive", guard, generateKidsStoryImmersive);
app.post("/render-immersive", guard, renderImmersiveSegments);

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
app.post("/ai/generate", guard, async (req, res) => {
  try {
    if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ error: "Falta ANTHROPIC_API_KEY" });

    const { prompt, temas, liveEvents = false, latitude = null, longitude = null, timestamp = null, poiNombre = "", language = "es", nivel = "normal", poiCacheKey = null } = req.body || {};

    if (!prompt || typeof prompt !== "string") return res.status(400).json({ error: "prompt requerido (string)" });

    // ── Caché de texto (solo cuando no hay eventos en vivo y hay clave de POI) ──
    // El sufijo de idioma evita colisiones entre narraciones ES y EN del mismo POI
    const langSuffix = language === "en" ? "|en" : "";
    const resolvedCacheKey = poiCacheKey ? `${poiCacheKey}${langSuffix}` : null;
    const useTextCache = resolvedCacheKey && !asBool(liveEvents);
    if (useTextCache) {
      const cached = await getCachedText(resolvedCacheKey);
      if (cached) {
        console.log(`📦 Text cache HIT [${language}]: ${resolvedCacheKey}`);
        return res.json({ text: cached, cache: "hit" });
      }
    }

    const maxTokens   = MAX_TOKENS_BY_NIVEL[nivel] ?? MAX_TOKENS_BY_NIVEL.normal;
    const temasTxt    = Array.isArray(temas) ? temas.filter(Boolean).join(", ") : "";
    const liveContext = await getLiveEventsContext({ liveEvents, latitude, longitude, timestamp, poiNombre, language });
    const finalPrompt = construirPromptConEventos({ prompt, liveEvents, liveContext });

    const isEN = language === "en";
    const systemPrompt = isEN
      ? [
          "You are SANCHO, a road trip co-pilot app. Explain places clearly and with accuracy, but without academic language — like a great storyteller, not a historian. Use precise vocabulary. Avoid vague phrases, slang or inaccuracies. Reply in English, no lists, no emojis, no headings. Natural text designed to sound great out loud while driving.",
          temasTxt ? `Active topics: ${temasTxt}` : "",
        ].filter(Boolean).join("\n")
      : [
          "Eres SANCHO, el copiloto de viaje. Explicas los lugares de forma clara y con rigor, pero sin tecnicismos ni lenguaje académico — como un buen divulgador, no como un historiador ni como un colega informal. Usa vocabulario preciso y correcto. Evita expresiones vagas, coloquialismos burdos o imprecisiones. Responde en español, sin listas, sin emojis, sin títulos. Solo texto natural pensado para sonar bien en voz alta mientras se conduce.",
          temasTxt ? `Temas activados: ${temasTxt}` : "",
        ].filter(Boolean).join("\n");

    const r = await anthropic.messages.create({
      model: MODEL_FAST,
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: finalPrompt }],
    });
    logClaude(r, "narracion", language);

    const rawText  = r.content?.[0]?.text ?? "";
    const maxWords = MAX_WORDS_BY_NIVEL[nivel] ?? MAX_WORDS_BY_NIVEL.normal;
    const text     = truncarPorFrases(rawText, maxWords);

    if (useTextCache && text) {
      setCachedText(resolvedCacheKey, text).catch(() => {});
      console.log(`💾 Text cache SET [${language}]: ${resolvedCacheKey}`);
    }

    res.json({ text, model_used: r.model, usage: r.usage, live_events_enabled: asBool(liveEvents), live_context_used: Boolean(liveContext?.trim()), cache: "miss" });
  } catch (e) {
    console.error("ERROR /ai/generate:", e.message);
    res.status(500).json({ error: "ai_generate_failed", detail: e.message });
  }
});

// ─── TTS (ELEVENLABS) ────────────────────────────────────────────────────────
app.post("/tts", guard, async (req, res) => {
  const apiKey = process.env.ELEVEN_API_KEY;
  const { text, voiceId, mood = "normal", lang = "es" } = req.body || {};

  try {
    if (!text?.trim())               return res.status(400).json({ error: "text requerido" });
    if (!apiKey || !DEFAULT_VOICE_ID) return res.status(500).json({ error: "Falta ELEVEN_API_KEY o ELEVEN_VOICE_ID en env" });

    // Voz por defecto en inglés: voz británica (Daniel) aunque no esté la env
    // configurada, para no caer nunca en la voz española hablando inglés.
    const DEFAULT_VOICE_ID_EN = "onwK4e9ZLuTAKqWW03F9"; // Daniel (UK)
    const defaultVoice = lang === "en"
      ? (process.env.ELEVEN_VOICE_ID_EN || DEFAULT_VOICE_ID_EN)
      : DEFAULT_VOICE_ID;
    const usedVoiceId = voiceId || defaultVoice;
    const cleanText   = corregirPronunciacion(text);

    // ── Caché de audio: misma voz + texto → mismo MP3 ──────────────────────
    const mp3CacheKey = `${usedVoiceId}|${mood}|${cleanText}`;
    const cachedMp3   = await getCachedMp3(mp3CacheKey);
    if (cachedMp3) {
      console.log(`🎵 MP3 cache HIT (${(cachedMp3.length / 1024).toFixed(0)}KB)`);
      res.set("Content-Type", "audio/mpeg");
      res.set("X-Cache", "HIT");
      return res.send(cachedMp3);
    }

    const voiceSettings   = VOICE_SETTINGS_BY_MOOD[mood] ?? VOICE_SETTINGS_BY_MOOD.normal;
    const url             = `https://api.elevenlabs.io/v1/text-to-speech/${usedVoiceId}`;
    const headers         = { "xi-api-key": apiKey, "Content-Type": "application/json", "Accept": "audio/mpeg" };
    const payloadFlash    = { text: cleanText, model_id: "eleven_flash_v2_5",      voice_settings: voiceSettings };
    const payloadFallback = { text: cleanText, model_id: "eleven_multilingual_v2", voice_settings: { stability: voiceSettings.stability, similarity_boost: voiceSettings.similarity_boost } };

    let elevenResp;
    try {
      elevenResp = await axios.post(url, payloadFlash, { headers, responseType: "arraybuffer", timeout: 30000 });
    } catch (eFlash) {
      console.warn("⚠️ ElevenLabs Flash failed, trying multilingual:", eFlash.response?.status, eFlash.message);
      elevenResp = await axios.post(url, payloadFallback, { headers, responseType: "arraybuffer", timeout: 30000 });
    }

    const audioBuffer = Buffer.from(elevenResp.data);
    setCachedMp3(mp3CacheKey, audioBuffer).catch(() => {});
    console.log(`🎵 MP3 cache SET (${(audioBuffer.length / 1024).toFixed(0)}KB)`);
    recordUsage({ provider: "eleven", model: "eleven_flash_v2_5", chars: cleanText.length, context: "tts", lang });
    addElevenSpend(cleanText.length); // suma al tope de gasto diario

    res.set("Content-Type", "audio/mpeg");
    res.set("X-Cache", "MISS");
    res.send(audioBuffer);
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
    const { messages = [], screen = "home", context: ctx = {}, step = null, lang = "es" } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) return res.status(400).json({ error: "messages requerido" });

    const isEN = lang === "en";

    const screenLabelsES = {
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

    const screenLabelsEN = {
      home:                "SANCHO main menu",
      games:               "games menu (Guess the Song, Quiz Show, Kids Stories)",
      guess_song:          "Guess the Song game setup",
      guess_song_round:    "playing Guess the Song",
      kids_stories:        "Kids Stories setup",
      kids_story_playing:  "listening to a kids story",
      quiz:                "Quiz Show setup",
      quiz_playing:        "playing Quiz Show",
      map:                 "route map with points of interest",
      learn:               "SANCHO Learn setup (automatic POI narration)",
    };

    const screenLabels = isEN ? screenLabelsEN : screenLabelsES;

    const systemPrompt = isEN
      ? `You are the voice assistant for SANCHO, a road trip co-pilot app. The user is driving — be very concise, maximum 2 sentences.
Screen: "${screenLabels[screen] || screen}" | Step: "${step || "none"}" | Context: ${JSON.stringify(ctx)}

Always reply with valid JSON (no text outside the JSON):
{ "speech": "what you say out loud, no emojis", "action": "action_name or null", "params": {} }

━━━ HOW STEPS WORK ━━━
When "step" is NOT "none": the user just answered the question for that step.
→ Extract the info from their message and call the indicated action.
→ Include in "speech" the NEXT question in the flow.
→ If the user said something irrelevant, briefly repeat the question.

⛔ NEVER narrate stories, songs or quiz questions.

━━━ NAVIGATION ━━━
"learn" / "narrate" / "tell me" → navigate_learn, speech includes "What topics? History, curiosities, nature, live events or where to stop."
"song" / "guess" / "music" → navigate_guess_song, speech includes "What genre? Indie, pop, rock, Disney, classics or Spanish pop."
"stories" / "story" / "kids" → navigate_kids_stories, speech includes "What are the kids' names and are they a boy or a girl?"
"quiz" / "trivia" / "questions" → navigate_quiz, speech includes "What are the players' names?"
"map" → navigate_map
"stop" / "quiet" / "shut up" → stop_audio
"what's nearby" / "tell me about here" → trigger_poi
"thanks" / "bye" / "done" / "cancel" → close_assistant
home screen → navigate_home; games → navigate_games

━━━ GUESS THE SONG ━━━
step=song_category → Extract genre. indie→"indie", pop→"pop", rock→"rock", disney→"disney", classics→"Clásicos de siempre España", spanish pop→"Pop España 2026".
  Call: set_guess_song_category { key: "..." }  speech: "Got it! What are the players' names?"
step=song_players → Extract names.
  Call: set_guess_song_players { players: ["name1","name2",...] }  speech: "Difficulty: easy, normal or hard?"
step=song_difficulty → easy→"easy", normal→"normal", hard→"hard".
  Call: note_song_difficulty { difficulty: "easy"|"normal"|"hard" }  speech: "Answer by voice? Yes or no."
step=song_voice → yes→true, no→false.
  Call: note_song_voice { voice: true|false }  speech: "How many seconds to answer? Between 10 and 60."
step=song_time → Extract the number of seconds (10-60).
  Call: note_song_time { seconds: N }  speech: "Ready! Shall we start?"
step=song_confirm → Call: start_guess_song { difficulty: "${ctx.difficulty || 'normal'}" }  speech: "Let's go! Good luck everyone!"
During game (screen=guess_song_round): "reveal" → reveal_song | "yes"/"correct" → answer_correct | "no"/"wrong" → answer_wrong | "next" → next_round

━━━ KIDS STORIES ━━━
step=story_protagonists → Extract name and gender (boy/girl).
  Call: set_story_protagonists { kids: [{name:"...",gender:"boy"|"girl"},...] }  speech: "Great! What is the story about?"
step=story_idea → Extract idea.
  Call: set_story_idea { idea: "..." }  speech: "How many minutes? Between 1 and 5."
step=story_duration → Extract minutes.
  Call: note_story_duration { minutes: N }  speech: "Perfect! Shall we start the story?"
step=story_confirm → Call: start_story { minutes: ${ctx.minutes || 3} }  speech: "Here we go! Enjoy!"

━━━ QUIZ ━━━
step=quiz_players → Extract names.
  Call: set_quiz_players { players: [...] }  speech: "Topic? General knowledge, history of Spain, movies, science or mix."
step=quiz_topic → general→"cultura_general", history→"historia_espana", movies→"cine_series", science→"ciencia_naturaleza", mix→"mezcla".
  Call: note_quiz_topic { topic: "..." }  speech: "How many questions per player? Between 3 and 5."
step=quiz_questions → Extract number.
  Call: note_quiz_questions { questions: N }  speech: "Perfect! Shall we start?"
step=quiz_confirm → Call: start_quiz { topic: "${ctx.topic || 'cultura_general'}", questions: ${ctx.questions || 3} }  speech: "Let the quiz begin!"

━━━ LEARN ━━━
step=learn_topics → Map to booleans.
  Call: set_learn_topics { dondeParar: bool, historia: bool, datosCuriosos: bool, naturaleza: bool, eventosEnVivo: bool, ingenieria: bool }`
      : `Eres el asistente de voz de SANCHO, una app de copiloto para viajes en coche. El usuario conduce — sé muy conciso, máximo 2 frases.
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
  Llama: note_song_difficulty { difficulty: "easy"|"normal"|"hard" }  speech: "¿Queréis responder por voz? Sí o no."
paso=song_voice → sí→true, no→false.
  Llama: note_song_voice { voice: true|false }  speech: "¿Cuántos segundos para responder? Entre 10 y 60."
paso=song_time → Extrae el número de segundos (10-60).
  Llama: note_song_time { seconds: N }  speech: "¡Listo! ¿Empezamos?"
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
    logClaude(response, "assistant", req.body?.lang);

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
    const errSpeech = (req.body?.lang === "en")
      ? "Sorry, something went wrong. Please try again."
      : "Lo siento, ha habido un error. Inténtalo de nuevo.";
    res.status(200).json({ speech: errSpeech, action: null, params: {} });
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

    const { provincia, comunidad, timestamp, language = "es" } = req.body || {};
    if (!provincia) return res.status(400).json({ error: "provincia requerida" });

    const isEN = language === "en";
    const key = `bienvenida|${provincia}${isEN ? "|en" : ""}`;
    const cached = getCache(key, TTL.bienvenida);
    if (cached) return res.json({ text: cached });

    const now      = parseFecha(timestamp);
    const m        = now.getMonth() + 1;

    let systemPrompt, userPrompt;
    if (isEN) {
      const month    = now.toLocaleString("en-US", { month: "long", timeZone: TIMEZONE });
      const season   = m >= 3 && m <= 5 ? "spring" : m >= 6 && m <= 8 ? "summer" : m >= 9 && m <= 11 ? "autumn" : "winter";
      systemPrompt   = "You are SANCHO, a road trip co-pilot app. You narrate with warmth, like a friend who knows Spain well. No lists, no emojis, no headings. Natural text designed to sound great out loud while driving.";
      userPrompt     = `The traveller has just entered the province of ${provincia}${comunidad ? `, in the region of ${comunidad}` : ""}. It is ${month}, ${season}.\n\nWelcome them in 3-5 paragraphs:\n1. Something visual or sensory they notice as they enter.\n2. The identity of ${provincia} — what makes it unique and why it matters: this could be a key historical figure born or linked to this land, a decisive historical event that happened here, or the role it played in the history of Spain.\n3. Two or three things they will discover, at least one surprising.\n4. A hook at the end that makes them want to pay attention.\n\nWarm, personal tone with character.`;
    } else {
      const mes      = now.toLocaleString("es-ES", { month: "long", timeZone: TIMEZONE });
      const estacion = m >= 3 && m <= 5 ? "primavera" : m >= 6 && m <= 8 ? "verano" : m >= 9 && m <= 11 ? "otoño" : "invierno";
      systemPrompt   = "Eres el copiloto de carretera SANCHO. Narras con calidez, como un amigo que conoce bien España. Sin listas, sin emojis, sin títulos. Solo texto natural pensado para sonar bien en voz alta.";
      userPrompt     = `El viajero acaba de entrar en la provincia de ${provincia}${comunidad ? `, comunidad de ${comunidad}` : ""}. Es ${mes}, ${estacion}.\n\nDale la bienvenida en 3-5 párrafos:\n1. Algo visual o sensorial que el viajero percibe al entrar.\n2. La identidad de ${provincia} — qué la hace única y por qué importa: puede ser un personaje histórico clave nacido o ligado a esta tierra, un hecho histórico decisivo que ocurrió aquí, o el papel que tuvo en la historia de España.\n3. Dos o tres cosas que va a encontrar, al menos una sorprendente.\n4. Un cierre con gancho que invite a estar atento.\n\nTono cercano, cálido, con personalidad.`;
    }

    const r = await anthropic.messages.create({
      model: MODEL_SMART,
      max_tokens: 600,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    });
    logClaude(r, "bienvenida", language);

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
