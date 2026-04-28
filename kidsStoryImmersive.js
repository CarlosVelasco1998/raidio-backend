// kidsStoryImmersive.js  – ES Modules
import axios from "axios";
import fs from "fs";
import path from "path";
import os from "os";
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";

ffmpeg.setFfmpegPath(ffmpegPath);

// ================== LIBRERÍA DE VOCES ==================
const VOICE_LIBRARY = {
  narrator_f:   { id: "XrExE9yKIg1WjnnlVkGX", name: "Matilda",  s: { stability: 0.50, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true } },
  narrator_m:   { id: "JBFqnCBsd6RMkjVDRZzb", name: "George",   s: { stability: 0.50, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true } },
  child_girl_1: { id: "MF3mGyEYCl7XYWbV9V6O", name: "Elli",      s: { stability: 0.40, similarity_boost: 0.85, style: 0.50, use_speaker_boost: true } },
  child_girl_2: { id: "cgSgspJ2msm6clMCkdW9", name: "Jessica",   s: { stability: 0.42, similarity_boost: 0.85, style: 0.50, use_speaker_boost: true } },
  child_girl_3: { id: "XB0fDUnXU5powFXDhCwa", name: "Charlotte", s: { stability: 0.45, similarity_boost: 0.82, style: 0.45, use_speaker_boost: true } },
  child_boy_1:  { id: "IKne3meq5aSn9XLyUdCD", name: "Charlie",   s: { stability: 0.40, similarity_boost: 0.85, style: 0.50, use_speaker_boost: true } },
  child_boy_2:  { id: "bIHbv24MWmeRgasZH58o", name: "Will",      s: { stability: 0.42, similarity_boost: 0.85, style: 0.50, use_speaker_boost: true } },
  child_boy_3:  { id: "iP95p4xoKVk53GoZ742B", name: "Chris",     s: { stability: 0.45, similarity_boost: 0.82, style: 0.45, use_speaker_boost: true } },
  old_man:      { id: "pqHfZKP75CvOlQylNhV4", name: "Bill",      s: { stability: 0.65, similarity_boost: 0.75, style: 0.20, use_speaker_boost: true } },
  old_woman:    { id: "pFZP5JQG7iQjIQuC4Bku", name: "Lily",      s: { stability: 0.60, similarity_boost: 0.75, style: 0.25, use_speaker_boost: true } },
  villain_m:    { id: "N2lVS1w4EtoT3dr4eOWO", name: "Callum",    s: { stability: 0.45, similarity_boost: 0.80, style: 0.55, use_speaker_boost: true } },
  villain_f:    { id: "AZnzlk1XvdvUeBnXmlld", name: "Domi",      s: { stability: 0.45, similarity_boost: 0.80, style: 0.50, use_speaker_boost: true } },
  animal_small: { id: "21m00Tcm4TlvDq8ikWAM", name: "Rachel",    s: { stability: 0.35, similarity_boost: 0.90, style: 0.60, use_speaker_boost: true } },
  animal_large: { id: "nPczCjzI2devNBz1zQrb", name: "Brian",     s: { stability: 0.70, similarity_boost: 0.75, style: 0.30, use_speaker_boost: true } },
  magical_f:    { id: "Xb7hH8MSUJpSbSDYk0k2", name: "Alice",     s: { stability: 0.50, similarity_boost: 0.80, style: 0.40, use_speaker_boost: true } },
  magical_m:    { id: "onwK4e9ZLuTAKqWW03F9", name: "Daniel",    s: { stability: 0.50, similarity_boost: 0.80, style: 0.35, use_speaker_boost: true } },
  nature:       { id: "pNInz6obpgDQGcFmaJgB", name: "Adam",      s: { stability: 0.75, similarity_boost: 0.70, style: 0.15, use_speaker_boost: true } },
};

const GIRL_KEYS = ["child_girl_1", "child_girl_2", "child_girl_3"];
const BOY_KEYS  = ["child_boy_1",  "child_boy_2",  "child_boy_3"];

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
function buildStoryPrompt({ kids, narratorGender, age, targetMinutes, idea, voiceAssignments }) {
  const narratorKey = narratorGender === "m" ? "narrator_m" : "narrator_f";
  const wpm = Math.min(Math.max(120 + (age - 3) * 5, 115), 165);
  const targetWords = targetMinutes * wpm;
  const minWords = Math.round(targetWords * 0.85);
  const maxWords = Math.round(targetWords * 1.15);

  const kidsList = kids
    .map((k) => `${k.name} → voz: ${voiceAssignments[k.name]}`)
    .join(", ");

  const secondaryVoices = Object.keys(VOICE_LIBRARY)
    .filter((k) => !k.startsWith("narrator") && !k.startsWith("child"))
    .join(", ");

  return `Eres un experto cuentacuentos infantil. Crea un cuento ORIGINAL en español para niños de ${age} años que viajan en coche.

PROTAGONISTAS (con su voz asignada): ${kidsList}
VOZ NARRADOR/A: ${narratorKey}
IDEA DEL CUENTO: "${idea || "Inventa una aventura original. Puede ser de cualquier tipo: exploración, misterio, humor, fantasía, animales que hablan, viajes a mundos extraños, lo que se te ocurra."}"
DURACIÓN: entre ${minWords} y ${maxWords} palabras en total (texto hablado).

VOCES DISPONIBLES para personajes secundarios: ${secondaryVoices}
Elige solo las que encajen con los personajes del cuento. No uses todas si no hacen falta.

ESTILO Y TONO:
- Que sea una historia con gancho desde la primera frase: algo que pase, un problema, un misterio, una situación absurda o divertida.
- Puede ser de princesas, dragones, robots, piratas, animales, detectives, lo que sea — pero que tenga aventura real.
- Incluye tensión, humor, sorpresas o giros inesperados. Los niños deben querer saber qué pasa después.
- Los personajes tienen personalidad propia: que se note quién es el valiente, el gracioso, el que tiene miedo pero se atreve.
- El final debe sentirse GANADO: que los protagonistas hayan resuelto algo, superado algo o descubierto algo.
- Evita finales genéricos tipo "y todos fueron felices para siempre rodeados de arcoíris". El desenlace puede ser alegre, emotivo o divertido, pero que surja de lo que ha pasado en la historia.
- Nada de moralejas forzadas ni frases del tipo "y aprendieron que la amistad es lo más importante del mundo".
- Sin violencia explícita. Apto para escuchar en coche.
- Nunca menciones que eres una IA.

FORMATO DEL CUENTO:
- Cada segmento de narración o diálogo: máximo 60 palabras.
- Añade entre 4 y 6 efectos de sonido en momentos clave (no en cada segmento).
- Usa los nombres de los protagonistas como personajes activos con diálogos expresivos.

FORMATO DE RESPUESTA — responde EXCLUSIVAMENTE con un JSON válido, sin texto antes ni después:

{
  "title": "Título del cuento",
  "segments": [
    { "type": "narration", "voice": "${narratorKey}", "text": "Texto narrado..." },
    { "type": "sfx", "description": "sound description in english, max 6 words" },
    { "type": "dialogue", "voice": "child_girl_1", "character": "Nombre", "text": "Lo que dice el personaje..." },
    { "type": "narration", "voice": "${narratorKey}", "text": "Continúa la narración..." }
  ]
}

TIPOS DE SEGMENTO:
- "narration" → texto narrado. Voz siempre "${narratorKey}".
- "dialogue"  → frase dicha por un personaje. Voz según el personaje.
- "sfx"       → efecto de sonido. Solo el campo "description" en inglés (ej: "creaking wooden door", "distant thunder rumble").

Asegúrate de que el JSON sea completo y válido.`;
}

// ================== TTS POR SEGMENTO ==================
async function callTTS(apiKey, voiceKey, text) {
  const voice = VOICE_LIBRARY[voiceKey] ?? VOICE_LIBRARY["narrator_f"];
  const resp = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${voice.id}`,
    { text, model_id: "eleven_multilingual_v2", voice_settings: voice.s },
    {
      headers: { "xi-api-key": apiKey, "Content-Type": "application/json", Accept: "audio/mpeg" },
      responseType: "arraybuffer",
      timeout: 35000,
    }
  );
  return Buffer.from(resp.data);
}

// ================== EFECTO DE SONIDO ==================
async function callSFX(apiKey, description) {
  const resp = await axios.post(
    "https://api.elevenlabs.io/v1/sound-generation",
    { text: description, duration_seconds: 3.0, prompt_influence: 0.3 },
    {
      headers: { "xi-api-key": apiKey, "Content-Type": "application/json", Accept: "audio/mpeg" },
      responseType: "arraybuffer",
      timeout: 35000,
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

// ================== HANDLER PRINCIPAL ==================
export async function generateKidsStoryImmersive(req, res) {
  const elevenKey = process.env.ELEVEN_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!elevenKey) return res.status(500).json({ error: "No ELEVEN_API_KEY" });
  if (!openaiKey) return res.status(500).json({ error: "No OPENAI_API_KEY" });

  const {
    kids           = [],
    narratorGender = "f",
    age            = 7,
    targetMinutes  = 3,
    idea           = "",
  } = req.body ?? {};

  if (!Array.isArray(kids) || kids.length === 0) {
    return res.status(400).json({ error: "kids[] requerido: [{ name, gender }]" });
  }

  try {
    // 1 — Asignar voces a los protagonistas
    const voiceAssignments = assignChildVoices(kids);
    console.log("🎭 Voces asignadas:", voiceAssignments);

    // 2 — Generar cuento estructurado con OpenAI
    const prompt = buildStoryPrompt({ kids, narratorGender, age, targetMinutes, idea, voiceAssignments });
    console.log("✍️  Generando cuento con OpenAI...");

    const openaiResp = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "Eres un experto cuentacuentos infantil. Respondes SIEMPRE con JSON válido y completo, sin texto adicional.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 4000,
        temperature: 0.85,
        response_format: { type: "json_object" },
      },
      {
        headers: { Authorization: `Bearer ${openaiKey}`, "Content-Type": "application/json" },
        timeout: 60000,
      }
    );

    const parsed   = JSON.parse(openaiResp.data.choices[0].message.content);
    const segments = parsed.segments ?? [];
    const title    = parsed.title ?? "Cuento";

    console.log(`📖 "${title}" — ${segments.length} segmentos`);

    // 3 — Procesar cada segmento con ElevenLabs
    const audioBuffers = [];

    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      const tag = `[${i + 1}/${segments.length}] ${seg.type}`;

      try {
        if (seg.type === "sfx") {
          if (!seg.description?.trim()) continue;
          console.log(`  ${tag} — "${seg.description}"`);
          audioBuffers.push(await callSFX(elevenKey, seg.description.trim()));

        } else if (seg.type === "narration" || seg.type === "dialogue") {
          if (!seg.text?.trim()) continue;
          const voiceKey  = seg.voice ?? (narratorGender === "m" ? "narrator_m" : "narrator_f");
          const voiceName = VOICE_LIBRARY[voiceKey]?.name ?? voiceKey;
          console.log(`  ${tag} — ${voiceName}: "${seg.text.slice(0, 45)}..."`);
          audioBuffers.push(await callTTS(elevenKey, voiceKey, seg.text.trim()));
        }
      } catch (segErr) {
        console.warn(`  ⚠️  Segmento ${i + 1} fallido (${seg.type}): ${segErr.message} — omitido`);
      }
    }

    if (audioBuffers.length === 0) {
      return res.status(500).json({ error: "No se generó ningún segmento de audio" });
    }

    // 4 — Concatenar con ffmpeg
    console.log(`🎵 Concatenando ${audioBuffers.length} piezas...`);
    const finalAudio = await concatenateBuffers(audioBuffers);

    // 5 — Devolver MP3
    res.set("Content-Type", "audio/mpeg");
    res.set("X-Story-Title", encodeURIComponent(title));
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
