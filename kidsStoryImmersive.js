// kidsStoryImmersive.js  – ES Modules
import axios from "axios";
import fs from "fs";
import Anthropic from "@anthropic-ai/sdk";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import { recordUsage } from "./analytics.js";

ffmpeg.setFfmpegPath(ffmpegPath);

let spendHooks = {};
export function configureKidsStorySpendTracking(hooks = {}) {
  spendHooks = hooks;
}

// ================== LIBRERÍA DE VOCES ==================
const VOICE_LIBRARY = {
  narrator_f:   { id: "KHCvMklQZZo0O30ERnVn", name: "Sara",     s: { stability: 0.50, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true } },
  narrator_m:   { id: "JBFqnCBsd6RMkjVDRZzb", name: "George",   s: { stability: 0.50, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true } },
  child_girl_1: { id: "1tDEBGOo8EqEPApM49eJ", name: "Niña-1",    s: { stability: 0.40, similarity_boost: 0.85, style: 0.50, use_speaker_boost: true } },
  child_girl_2: { id: "cgSgspJ2msm6clMCkdW9", name: "Jessica",   s: { stability: 0.42, similarity_boost: 0.85, style: 0.50, use_speaker_boost: true } },
  child_girl_3: { id: "XB0fDUnXU5powFXDhCwa", name: "Charlotte", s: { stability: 0.45, similarity_boost: 0.82, style: 0.45, use_speaker_boost: true } },
  child_boy_1:  { id: "jQrhxsqzG6CPKo3ll0w9", name: "Niño-1",    s: { stability: 0.40, similarity_boost: 0.85, style: 0.50, use_speaker_boost: true } },
  child_boy_2:  { id: "bIHbv24MWmeRgasZH58o", name: "Will",      s: { stability: 0.42, similarity_boost: 0.85, style: 0.50, use_speaker_boost: true } },
  child_boy_3:  { id: "iP95p4xoKVk53GoZ742B", name: "Chris",     s: { stability: 0.45, similarity_boost: 0.82, style: 0.45, use_speaker_boost: true } },
  old_man:      { id: "pqHfZKP75CvOlQylNhV4", name: "Bill",      s: { stability: 0.65, similarity_boost: 0.75, style: 0.20, use_speaker_boost: true } },
  old_woman:    { id: "M9RTtrzRACmbUzsEMq8p", name: "Anciana",   s: { stability: 0.60, similarity_boost: 0.75, style: 0.25, use_speaker_boost: true } },
  villain_m:    { id: "N2lVS1w4EtoT3dr4eOWO", name: "Callum",    s: { stability: 0.45, similarity_boost: 0.80, style: 0.55, use_speaker_boost: true } },
  villain_f:    { id: "AZnzlk1XvdvUeBnXmlld", name: "Domi",      s: { stability: 0.45, similarity_boost: 0.80, style: 0.50, use_speaker_boost: true } },
  animal_small: { id: "21m00Tcm4TlvDq8ikWAM", name: "Rachel",    s: { stability: 0.35, similarity_boost: 0.90, style: 0.60, use_speaker_boost: true } },
  animal_large: { id: "nPczCjzI2devNBz1zQrb", name: "Brian",     s: { stability: 0.70, similarity_boost: 0.75, style: 0.30, use_speaker_boost: true } },
  magical_f:    { id: "Xb7hH8MSUJpSbSDYk0k2", name: "Alice",     s: { stability: 0.50, similarity_boost: 0.80, style: 0.40, use_speaker_boost: true } },
  magical_m:    { id: "onwK4e9ZLuTAKqWW03F9", name: "Daniel",    s: { stability: 0.50, similarity_boost: 0.80, style: 0.35, use_speaker_boost: true } },
  nature:       { id: "pNInz6obpgDQGcFmaJgB", name: "Adam",      s: { stability: 0.75, similarity_boost: 0.70, style: 0.15, use_speaker_boost: true } },
  narrator_f_en: { id: "Xb7hH8MSUJpSbSDYk0k2", name: "Alice",  s: { stability: 0.50, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true } },
  narrator_m_en: { id: "onwK4e9ZLuTAKqWW03F9", name: "Daniel", s: { stability: 0.50, similarity_boost: 0.80, style: 0.35, use_speaker_boost: true } },
};

const GIRL_KEYS = ["child_girl_1", "child_girl_2", "child_girl_3"];
const BOY_KEYS  = ["child_boy_1",  "child_boy_2",  "child_boy_3"];

const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
const ALLOWED_DURATIONS = new Set([3, 5, 7, 10]);
const STORY_THEMES = {
  surprise: { es: "sorpresa: elige libremente la premisa más original", en: "surprise: freely choose the most original premise" },
  magic:    { es: "magia y fantasía", en: "magic and fantasy" },
  mystery:  { es: "misterio amable e intrigante", en: "gentle, intriguing mystery" },
  animals:  { es: "animales con personalidades memorables", en: "animals with memorable personalities" },
  space:    { es: "espacio, ciencia y aventura", en: "space, science and adventure" },
  spain:    { es: "una aventura inspirada en lugares, leyendas o cultura de España", en: "an adventure inspired by Spain's places, legends or culture" },
};
const STORY_TONES = {
  fun:      { es: "divertido, ingenioso y cálido", en: "funny, witty and warm" },
  exciting: { es: "emocionante y con suspense apto para su edad", en: "exciting, with age-appropriate suspense" },
  calm:     { es: "tranquilo, imaginativo y reconfortante", en: "calm, imaginative and comforting" },
};
const STORY_MUSIC = {
  magic: "magic.mp3",
  mystery: "magic.mp3",
  exciting: "magic.mp3",
  surprise: "wonder.mp3",
  animals: "wonder.mp3",
  space: "wonder.mp3",
  spain: "wonder.mp3",
  calm: "wonder.mp3",
  fun: "wonder.mp3",
};

// ================== ASIGNACIÓN DE VOCES A PROTAGONISTAS ==================
function assignChildVoices(kids) {
  let gi = 0, bi = 0;
  const map = {};
  for (const kid of kids) {
    if (kid.gender === "girl") {
      map[kid.name] = GIRL_KEYS[gi++ % GIRL_KEYS.length];
    } else {
      map[kid.name] = BOY_KEYS[bi++ % BOY_KEYS.length];
    }
  }
  return map;
}

// ================== PROMPT PARA OPENAI ==================
function buildStoryPrompt({ kids, narratorGender, age, targetMinutes, idea, voiceAssignments, language = "es", theme = "surprise", tone = "fun" }) {
  const isEN = language === "en";
  const narratorKey = isEN
    ? (narratorGender === "m" ? "narrator_m_en" : "narrator_f_en")
    : (narratorGender === "m" ? "narrator_m" : "narrator_f");
  const wpm = Math.min(Math.max(120 + (age - 3) * 5, 115), 165);
  // ElevenLabs habla más rápido que un narrador humano — compensamos con factor 1.7
  const targetWords = Math.round(targetMinutes * wpm * 1.7);
  const minWords = Math.round(targetWords * 0.85);
  const maxWords = Math.round(targetWords * 1.15);

  const kidsList = kids
    .map((k) => `${k.name} → voice: ${voiceAssignments[k.name]}`)
    .join(", ");

  const secondaryVoices = Object.keys(VOICE_LIBRARY)
    .filter((k) => !k.startsWith("narrator") && !k.startsWith("child"))
    .join(", ");
  const themeText = (STORY_THEMES[theme] ?? STORY_THEMES.surprise)[isEN ? "en" : "es"];
  const toneText = (STORY_TONES[tone] ?? STORY_TONES.fun)[isEN ? "en" : "es"];
  const sfxCount = targetMinutes <= 3 ? "2" : targetMinutes <= 5 ? "3 or 4" : "4 to 6";

  if (isEN) {
    return `You are an expert children's storyteller. Create an ORIGINAL story in English for ${age}-year-olds travelling by car with their family.

MAIN CHARACTERS (with assigned voice): ${kidsList}
NARRATOR VOICE: ${narratorKey}
IDEA: "${idea || "Invent an original and entertaining adventure."}"
CHOSEN THEME: ${themeText}
CHOSEN MOOD: ${toneText}
TARGET LENGTH: between ${minWords} and ${maxWords} words in total.

AVAILABLE VOICES for secondary characters: ${secondaryVoices}
Only use the ones you need for the story's characters.

REQUIRED STORY STRUCTURE:
1. INTRODUCTION (first segments): set the scene calmly. Describe where we are, who the main characters are, what they like, what they were doing. Let the children picture the scene. Example: "Once upon a time, driving along the road, [name], who loved [thing], and [name2], who always carried [object]..."
2. TRIGGER: something unexpected happens that starts the adventure.
3. DEVELOPMENT: the characters face the problem with humour, cleverness or bravery. Include 1 or 2 moments where story characters play a joke on or ask something funny directly to the main characters by name.
4. RESOLUTION: resolved in a satisfying way, no forced moral.

QUALITY BAR:
- This is a paid, personalised audio production. It must feel authored rather than templated.
- The children must make meaningful decisions and change the outcome; do not merely insert their names into a generic story.
- Give every named child at least one useful action and one spoken line. Balance their importance.
- Give secondary characters distinct personalities, motives and speech patterns.
- Maintain continuity of objects, places, character knowledge and goals from beginning to end.
- Every scene must advance the story. Avoid filler, repeated explanations and repetitive catchphrases.
- Build anticipation, include at least one genuine surprise, and earn the resolution.
- Never use copyrighted franchise characters even if requested; invent an original equivalent.

STYLE:
- Simple and friendly language, suitable for the indicated age.
- The narrator ALWAYS introduces who speaks before each dialogue: "said [character]:", "replied [character]:", "asked [character] with a smile:".
- Gentle humour, absurd or surprising situations. Children should want to hear what happens next.
- No violence. No forced moral. No rainbows and cotton clouds at the end.
- Never mention that you are an AI.

SOUND EFFECTS:
- Use ${sfxCount} sound effects at very specific, meaningful moments.
- Place them where they really add value (a door opening, a thunderclap, an animal appearing). Do not put them between every segment.

RESPONSE FORMAT — reply EXCLUSIVELY with valid JSON, no text before or after:

{
  "title": "Story title",
  "segments": [
    { "type": "narration", "voice": "${narratorKey}", "text": "Once upon a time... [scene and character introduction]" },
    { "type": "narration", "voice": "${narratorKey}", "text": "Suddenly... [narration ending with: 'said the dragon:']" },
    { "type": "dialogue", "voice": "animal_large", "character": "Dragon", "text": "Hey, you! Can [name] really do [funny thing]?" },
    { "type": "sfx", "description": "precise sound effect in english, max 10 words" },
    { "type": "narration", "voice": "${narratorKey}", "text": "Continue the narration..." }
  ]
}

FORMAT RULES:
- "narration" → voice always "${narratorKey}". End with an introduction of the next speaker when appropriate: "said X:", "replied Y:", "asked Z:".
- "dialogue"  → what the character says, without including their name.
- "sfx"       → ALWAYS in English, very specific (e.g. "large dragon roaring", "heavy wooden door slamming shut", "tiny bell ringing twice").
- Each text segment: maximum 60 words.
- The JSON must be complete and valid.`;
  }

  return `Eres un cuentacuentos experto para niños. Crea un cuento ORIGINAL en español castellano para niños de ${age} años que van en coche con su familia.

PROTAGONISTAS (con su voz asignada): ${kidsList.replace(/voice:/g, "voz:")}
VOZ NARRADOR/A: ${narratorKey}
IDEA: "${idea || "Inventa una aventura original y entretenida."}"
TEMA ELEGIDO: ${themeText}
TONO ELEGIDO: ${toneText}
DURACIÓN OBJETIVO: entre ${minWords} y ${maxWords} palabras en total.

VOCES DISPONIBLES para personajes secundarios: ${secondaryVoices}
Usa solo las que necesites según los personajes del cuento.

ESTRUCTURA OBLIGATORIA DEL CUENTO:
1. PRESENTACIÓN (primeros segmentos): sitúa la escena con calma. Di dónde estamos, quiénes son los protagonistas, qué les gusta, qué estaban haciendo. Deja que los niños se imaginen la escena. Ejemplo: "Érase una vez, yendo por la carretera, [nombre], a quien le encantaba [cosa], y [nombre2], que siempre llevaba [objeto]..."
2. DETONANTE: algo inesperado ocurre que arranca la aventura.
3. DESARROLLO: los protagonistas afrontan el problema con humor, ingenio o valentía. Incluye 1 o 2 momentos donde los personajes del cuento le gastan una broma o le preguntan algo gracioso directamente a los protagonistas por su nombre.
4. DESENLACE: resuelto de forma satisfactoria, sin moraleja forzada.

NIVEL DE CALIDAD:
- Es una producción de audio personalizada y de pago. Debe parecer escrita con intención, nunca una plantilla con nombres pegados.
- Los niños deben tomar decisiones importantes y cambiar el resultado de la aventura.
- Da a cada peque al menos una acción útil y una frase hablada. Equilibra su protagonismo.
- Los personajes secundarios deben tener personalidad, motivación y forma de hablar propias.
- Mantén la continuidad de objetos, lugares, conocimientos y objetivos de principio a fin.
- Cada escena debe hacer avanzar la historia. Evita relleno, explicaciones repetidas y muletillas.
- Crea expectación, incluye al menos una sorpresa real y haz que el desenlace se sienta merecido.
- No uses personajes de franquicias protegidas aunque se soliciten: inventa un equivalente original.

ESTILO:
- Lenguaje sencillo y cercano, apto para la edad indicada.
- El narrador SIEMPRE presenta quién habla antes de cada diálogo: "dijo [personaje]:", "respondió [personaje]:", "preguntó [personaje] con una sonrisa:".
- Humor suave, situaciones absurdas o sorprendentes. Que los niños quieran escuchar qué pasa después.
- Sin violencia. Sin moraleja forzada. Sin arcoíris ni nubes de algodón al final.
- Nunca menciones que eres una IA.

EFECTOS DE SONIDO:
- Pon ${sfxCount} efectos de sonido en momentos muy concretos y significativos.
- Colócalos donde realmente aporten (una puerta que se abre, un trueno, un animal que aparece). No los pongas entre todos los segmentos.

FORMATO DE RESPUESTA — responde EXCLUSIVAMENTE con un JSON válido, sin texto antes ni después:

{
  "title": "Título del cuento",
  "segments": [
    { "type": "narration", "voice": "${narratorKey}", "text": "Érase una vez... [presentación de la escena y los personajes]" },
    { "type": "narration", "voice": "${narratorKey}", "text": "De repente... [narración que termina con: 'dijo el dragón:']" },
    { "type": "dialogue", "voice": "animal_large", "character": "Dragón", "text": "¡Eh, vosotros! ¿Acaso [nombre] sabe hacer [cosa graciosa]?" },
    { "type": "sfx", "description": "precise sound effect in english, max 10 words" },
    { "type": "narration", "voice": "${narratorKey}", "text": "Continúa la narración..." }
  ]
}

REGLAS DE FORMATO:
- "narration" → voz siempre "${narratorKey}". Termina con una presentación del siguiente hablante cuando corresponda: "dijo X:", "respondió Y:", "preguntó Z:".
- "dialogue"  → lo que dice el personaje, sin incluir su nombre.
- "sfx"       → SIEMPRE en inglés, muy concreto (ej: "large dragon roaring", "heavy wooden door slamming shut", "tiny bell ringing twice").
- Cada segmento de texto: máximo 60 palabras.
- El JSON debe ser completo y válido.`;
}

// ================== TTS POR SEGMENTO ==================
async function callTTS(apiKey, voiceKey, text, modelId = "eleven_multilingual_v2") {
  const voice = VOICE_LIBRARY[voiceKey] ?? VOICE_LIBRARY["narrator_f"];
  // eleven_v3 usa stability discreta (0/0.5/1) y no admite 'style'; adaptamos.
  const isV3 = modelId === "eleven_v3";
  const voiceSettings = isV3
    ? { stability: 0.5, use_speaker_boost: true }
    : voice.s;
  const resp = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${voice.id}`,
    { text, model_id: modelId, voice_settings: voiceSettings },
    {
      headers: { "xi-api-key": apiKey, "Content-Type": "application/json", Accept: "audio/mpeg" },
      responseType: "arraybuffer",
      timeout: isV3 ? 90000 : 35000, // v3 es más lento
    }
  );
  recordUsage({ provider: "eleven", model: modelId, chars: (text || "").length, context: "cuento" });
  spendHooks.addElevenChars?.((text || "").length);
  return Buffer.from(resp.data);
}

async function callStoryTTS(apiKey, voiceKey, text) {
  try {
    return await callTTS(apiKey, voiceKey, text, "eleven_v3");
  } catch (v3Error) {
    console.warn(`Eleven v3 falló para ${voiceKey}; usando multilingual v2: ${v3Error.message}`);
    return callTTS(apiKey, voiceKey, text, "eleven_multilingual_v2");
  }
}

// ================== EFECTO DE SONIDO / MÚSICA ==================
async function callSFX(apiKey, description, durationSeconds = 2.0) {
  const resp = await axios.post(
    "https://api.elevenlabs.io/v1/sound-generation",
    { text: description, duration_seconds: durationSeconds, prompt_influence: 0.4 },
    {
      headers: { "xi-api-key": apiKey, "Content-Type": "application/json", Accept: "audio/mpeg" },
      responseType: "arraybuffer",
      timeout: 60000,
    }
  );
  return Buffer.from(resp.data);
}

// ================== CONCATENAR CON FFMPEG ==================
async function concatenateBuffers(buffers) {
  const tmpDir = os.tmpdir();
  const sid = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const segFiles = [];

  for (let i = 0; i < buffers.length; i++) {
    const p = path.join(tmpDir, `raidio_seg_${sid}_${i}.mp3`);
    fs.writeFileSync(p, buffers[i]);
    segFiles.push(p);
  }

  const listPath = path.join(tmpDir, `raidio_list_${sid}.txt`);
  const outPath  = path.join(tmpDir, `raidio_out_${sid}.mp3`);

  fs.writeFileSync(listPath, segFiles.map((f) => `file '${f}'`).join("\n"));

  await new Promise((resolve, reject) => {
    ffmpeg()
      .input(listPath)
      .inputOptions(["-f concat", "-safe 0"])
      .audioCodec("libmp3lame")
      .audioBitrate("128k")
      .output(outPath)
      .on("end", resolve)
      .on("error", reject)
      .run();
  });

  const result = fs.readFileSync(outPath);
  for (const f of [...segFiles, listPath, outPath]) {
    try { fs.unlinkSync(f); } catch (_) {}
  }
  return result;
}

async function mixBackgroundMusic(voiceBuffer, theme, tone) {
  const musicName = STORY_MUSIC[theme] ?? STORY_MUSIC[tone] ?? "wonder.mp3";
  const musicPath = path.join(MODULE_DIR, "story_music", musicName);
  if (!fs.existsSync(musicPath)) {
    console.warn(`Música de cuento no encontrada: ${musicPath}; se devuelve mezcla sin fondo`);
    return voiceBuffer;
  }

  const tmpDir = os.tmpdir();
  const sid = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const voicePath = path.join(tmpDir, `sancho_story_voice_${sid}.mp3`);
  const outPath = path.join(tmpDir, `sancho_story_mix_${sid}.mp3`);
  fs.writeFileSync(voicePath, voiceBuffer);

  try {
    await new Promise((resolve, reject) => {
      ffmpeg()
        .input(voicePath)
        .input(musicPath)
        .inputOptions(["-stream_loop -1"])
        .complexFilter([
          "[1:a]volume=0.13[bed]",
          "[bed][0:a]sidechaincompress=threshold=0.018:ratio=8:attack=20:release=650[ducked]",
          "[0:a][ducked]amix=inputs=2:duration=first:dropout_transition=2,alimiter=limit=0.95[mix]",
        ])
        .outputOptions(["-map [mix]"])
        .audioCodec("libmp3lame")
        .audioBitrate("128k")
        .output(outPath)
        .on("end", resolve)
        .on("error", reject)
        .run();
    });
    return fs.readFileSync(outPath);
  } finally {
    for (const file of [voicePath, outPath]) {
      try { fs.unlinkSync(file); } catch (_) {}
    }
  }
}

function normalizeDuration(value) {
  const requested = Number(value);
  if (ALLOWED_DURATIONS.has(requested)) return requested;
  return [...ALLOWED_DURATIONS].reduce((best, current) =>
    Math.abs(current - requested) < Math.abs(best - requested) ? current : best, 5);
}

function normalizeKids(value) {
  if (!Array.isArray(value)) return [];
  return value.slice(0, 5).map((kid, index) => ({
    name: String(kid?.name || `Peque ${index + 1}`).trim().slice(0, 40),
    gender: kid?.gender === "girl" ? "girl" : "boy",
  })).filter((kid) => kid.name.length > 0);
}

function normalizeStory(parsed, { kids, narratorGender, language, targetMinutes, voiceAssignments }) {
  const narratorKey = language === "en"
    ? (narratorGender === "m" ? "narrator_m_en" : "narrator_f_en")
    : (narratorGender === "m" ? "narrator_m" : "narrator_f");
  const allowedVoices = new Set(Object.keys(VOICE_LIBRARY));
  const rawSegments = Array.isArray(parsed?.segments) ? parsed.segments : [];
  const segments = [];
  let spokenWords = 0;
  let spokenSegments = 0;

  for (const raw of rawSegments.slice(0, 120)) {
    if (raw?.type === "sfx") {
      const description = String(raw.description || "").trim().slice(0, 140);
      if (description) segments.push({ type: "sfx", description });
      continue;
    }
    if (raw?.type !== "narration" && raw?.type !== "dialogue") continue;
    const text = String(raw.text || "").trim();
    if (!text) continue;
    const character = String(raw.character || "").trim();
    let voice = raw.type === "narration" ? narratorKey : String(raw.voice || "");
    const childVoice = Object.entries(voiceAssignments)
      .find(([name]) => character.localeCompare(name, undefined, { sensitivity: "base" }) === 0)?.[1];
    if (childVoice) voice = childVoice;
    if (!allowedVoices.has(voice)) voice = narratorKey;
    spokenWords += text.split(/\s+/).filter(Boolean).length;
    spokenSegments += 1;
    segments.push({ type: raw.type, voice, character, text });
  }

  const minimumWords = Math.round(targetMinutes * 115 * 1.7 * 0.62);
  if (spokenSegments < 6 || spokenWords < minimumWords) {
    throw new Error(`Cuento incompleto: ${spokenWords} palabras; mínimo de calidad ${minimumWords}`);
  }
  const fullText = segments.filter((s) => s.text).map((s) => s.text).join(" ").toLocaleLowerCase();
  for (const kid of kids) {
    if (!fullText.includes(kid.name.toLocaleLowerCase())) {
      throw new Error(`El cuento ha olvidado al protagonista ${kid.name}`);
    }
  }
  return {
    title: String(parsed?.title || (language === "en" ? "A Sancho Story" : "Un cuento de Sancho")).trim().slice(0, 120),
    segments,
    spokenWords,
  };
}

async function mapWithConcurrency(items, concurrency, task) {
  const results = new Array(items.length);
  let cursor = 0;
  async function worker() {
    while (cursor < items.length) {
      const index = cursor++;
      results[index] = await task(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
}

// ================== RENDER DE SEGMENTOS YA ESCRITOS ==================
// Para "Cuento Aventura": rendero guiones FIJOS (sin Claude) — multi-voz + SFX +
// concatenado — y devuelvo el MP3. Body: { segments: [{type,voice,text}|{type:'sfx',description}] }.
export async function renderImmersiveSegments(req, res) {
  const elevenKey = process.env.ELEVEN_API_KEY;
  if (!elevenKey) return res.status(500).json({ error: "No ELEVEN_API_KEY" });

  const { segments = [], model = "eleven_multilingual_v2" } = req.body ?? {};
  if (!Array.isArray(segments) || segments.length === 0) {
    return res.status(400).json({ error: "segments[] requerido" });
  }

  try {
    const audioBuffers = [];
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      try {
        if (seg.type === "sfx") {
          if (!seg.description?.trim()) continue;
          audioBuffers.push(await callSFX(elevenKey, seg.description.trim(), seg.duration || 2.0));
        } else if (seg.text?.trim()) {
          const voiceKey = seg.voice ?? "narrator_f";
          audioBuffers.push(await callTTS(elevenKey, voiceKey, seg.text.trim(), model));
        }
      } catch (segErr) {
        console.warn(`render-immersive seg ${i + 1} (${seg.type}) fallido: ${segErr.message}`);
      }
    }
    if (audioBuffers.length === 0) {
      return res.status(500).json({ error: "No se generó audio" });
    }
    const finalAudio = audioBuffers.length === 1
      ? audioBuffers[0]
      : await concatenateBuffers(audioBuffers);
    res.set("Content-Type", "audio/mpeg");
    res.send(finalAudio);
    console.log(`✅ render-immersive: ${segments.length} segs → ${(finalAudio.length / 1024).toFixed(0)} KB`);
  } catch (err) {
    const detail = err.response?.data
      ? (Buffer.isBuffer(err.response.data) ? err.response.data.toString("utf8") : err.response.data)
      : err.message;
    console.error("❌ render-immersive error:", detail);
    res.status(500).json({ error: "render_failed", detail });
  }
}

// ================== HANDLER PRINCIPAL ==================
export async function generateKidsStoryImmersive(req, res) {
  const elevenKey = process.env.ELEVEN_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  if (!elevenKey) return res.status(500).json({ error: "No ELEVEN_API_KEY" });
  if (!anthropicKey) return res.status(500).json({ error: "No ANTHROPIC_API_KEY" });

  const anthropic = new Anthropic({ apiKey: anthropicKey });

  const {
    kids: rawKids  = [],
    narratorGender = "f",
    age            = 7,
    targetMinutes: rawTargetMinutes = 5,
    idea           = "",
    language       = "es",
    theme: rawTheme = "surprise",
    tone: rawTone = "fun",
    storyId        = "",
  } = req.body ?? {};

  const kids = normalizeKids(rawKids);
  const targetMinutes = normalizeDuration(rawTargetMinutes);
  const safeAge = Math.min(11, Math.max(3, Number(age) || 7));
  const theme = STORY_THEMES[rawTheme] ? rawTheme : "surprise";
  const tone = STORY_TONES[rawTone] ? rawTone : "fun";
  const safeLanguage = language === "en" ? "en" : "es";

  if (kids.length === 0) {
    return res.status(400).json({ error: "kids[] requerido: [{ name, gender }]" });
  }

  try {
    // 1 — Asignar voces a los protagonistas
    const voiceAssignments = assignChildVoices(kids);
    console.log("🎭 Voces asignadas:", voiceAssignments);

    // 2 — Generar cuento estructurado con Claude
    const prompt = buildStoryPrompt({
      kids,
      narratorGender,
      age: safeAge,
      targetMinutes,
      idea: String(idea || "").trim().slice(0, 1200),
      voiceAssignments,
      language: safeLanguage,
      theme,
      tone,
    });
    console.log("✍️  Generando cuento con Claude...");

    const systemPrompt = safeLanguage === "en"
      ? "You are an expert children's storyteller. You ALWAYS respond with complete, valid JSON and nothing else."
      : "Eres un experto cuentacuentos infantil. Respondes SIEMPRE con JSON válido y completo, sin texto adicional.";

    const claudeResp = await anthropic.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: Math.max(5000, Math.min(10000, targetMinutes * 900)),
      system: systemPrompt,
      messages: [{ role: "user", content: prompt }],
    });
    recordUsage({
      provider: "claude",
      model: claudeResp?.model,
      tokensIn: claudeResp?.usage?.input_tokens,
      tokensOut: claudeResp?.usage?.output_tokens,
      context: "cuento",
      lang: safeLanguage,
    });
    spendHooks.addClaudeResponse?.(claudeResp);

    let rawText = claudeResp.content[0].text.trim();
    rawText = rawText.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "");
    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      const match = rawText.match(/\{[\s\S]*\}/);
      if (match) parsed = JSON.parse(match[0]);
      else throw new Error("No se pudo parsear el JSON del cuento: " + rawText.slice(0, 200));
    }
    const normalized = normalizeStory(parsed, {
      kids,
      narratorGender,
      language: safeLanguage,
      targetMinutes,
      voiceAssignments,
    });
    const segments = normalized.segments;
    const title = normalized.title;

    console.log(`📖 "${title}" — ${segments.length} segmentos, ${normalized.spokenWords} palabras`);

    // 3 — Procesar por lotes conservando el orden. Las voces son obligatorias;
    // un efecto puede omitirse si Eleven falla, pero nunca una frase del cuento.
    const rendered = await mapWithConcurrency(segments, 3, async (seg, i) => {
      const tag = `[${i + 1}/${segments.length}] ${seg.type}`;
      if (seg.type === "sfx") {
        try {
          console.log(`  ${tag} — "${seg.description}"`);
          return await callSFX(elevenKey, seg.description.trim());
        } catch (segErr) {
          console.warn(`  ⚠️  Efecto ${i + 1} fallido: ${segErr.message}`);
          return null;
        }
      }
      const voiceKey = seg.voice;
      const voiceName = VOICE_LIBRARY[voiceKey]?.name ?? voiceKey;
      console.log(`  ${tag} — ${voiceName}: "${seg.text.slice(0, 45)}..."`);
      return callStoryTTS(elevenKey, voiceKey, seg.text.trim());
    });
    const audioBuffers = rendered.filter(Buffer.isBuffer);

    if (audioBuffers.length === 0) {
      return res.status(500).json({ error: "No se generó ningún segmento de audio" });
    }

    // Coletilla final siempre presente
    try {
      const narratorKey = safeLanguage === "en"
        ? (narratorGender === "m" ? "narrator_m_en" : "narrator_f_en")
        : (narratorGender === "m" ? "narrator_m" : "narrator_f");
      const closingText = safeLanguage === "en"
        ? "And that's the end of our story! Until the next adventure, kids!"
        : "Y colorín colorado, este cuento ha terminado. ¡Hasta la próxima aventura, chicos!";
      const closingBuf = await callStoryTTS(elevenKey, narratorKey, closingText);
      audioBuffers.push(closingBuf);
    } catch (closingError) {
      console.warn(`No se pudo generar la despedida: ${closingError.message}`);
    }

    // 4 — Concatenar con ffmpeg
    console.log(`🎵 Concatenando ${audioBuffers.length} piezas...`);
    const voiceAudio = await concatenateBuffers(audioBuffers);
    const finalAudio = await mixBackgroundMusic(voiceAudio, theme, tone);

    // 5 — Devolver MP3
    res.set("Content-Type", "audio/mpeg");
    res.set("X-Story-Title", encodeURIComponent(title));
    if (storyId) res.set("X-Story-Id", String(storyId).slice(0, 120));
    res.set("X-Story-Minutes", String(targetMinutes));
    res.send(finalAudio);

    console.log(`✅ Cuento enviado — ${(finalAudio.length / 1024).toFixed(1)} KB`);

  } catch (err) {
    const detail = err.response?.data
      ? Buffer.isBuffer(err.response.data)
        ? err.response.data.toString("utf8")
        : err.response.data
      : err.message;
    console.error("❌ Error cuento inmersivo:", detail);
    res.status(500).json({ error: "kids_story_failed", detail });
  }
}
