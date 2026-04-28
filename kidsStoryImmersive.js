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
  narrator_f:   { id: "Nh2zY9kknu6z4pZy6FhD", name: "Sara",     s: { stability: 0.50, similarity_boost: 0.80, style: 0.30, use_speaker_boost: true } },
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
  // ElevenLabs habla más rápido que un narrador humano — compensamos con factor 1.7
  const targetWords = Math.round(targetMinutes * wpm * 1.7);
  const minWords = Math.round(targetWords * 0.85);
  const maxWords = Math.round(targetWords * 1.15);

  const kidsList = kids
    .map((k) => `${k.name} → voz: ${voiceAssignments[k.name]}`)
    .join(", ");

  const secondaryVoices = Object.keys(VOICE_LIBRARY)
    .filter((k) => !k.startsWith("narrator") && !k.startsWith("child"))
    .join(", ");

  return `Eres un cuentacuentos experto para niños. Crea un cuento ORIGINAL en español castellano para niños de ${age} años que van en coche con su familia.

PROTAGONISTAS (con su voz asignada): ${kidsList}
VOZ NARRADOR/A: ${narratorKey}
IDEA: "${idea || "Inventa una aventura original y entretenida."}"
DURACIÓN OBJETIVO: entre ${minWords} y ${maxWords} palabras en total.

VOCES DISPONIBLES para personajes secundarios: ${secondaryVoices}
Usa solo las que necesites según los personajes del cuento.

ESTRUCTURA OBLIGATORIA DEL CUENTO:
1. PRESENTACIÓN (primeros segmentos): sitúa la escena con calma. Di dónde estamos, quiénes son los protagonistas, qué les gusta, qué estaban haciendo. Deja que los niños se imaginen la escena. Ejemplo: "Érase una vez, yendo por la carretera, [nombre], a quien le encantaba [cosa], y [nombre2], que siempre llevaba [objeto]..."
2. DETONANTE: algo inesperado ocurre que arranca la aventura.
3. DESARROLLO: los protagonistas afrontan el problema con humor, ingenio o valentía. Incluye 1 o 2 momentos donde los personajes del cuento le gastan una broma o le preguntan algo gracioso directamente a los protagonistas por su nombre.
4. DESENLACE: resuelto de forma satisfactoria, sin moraleja forzada.

ESTILO:
- Lenguaje sencillo y cercano, apto para la edad indicada.
- El narrador SIEMPRE presenta quién habla antes de cada diálogo: "dijo [personaje]:", "respondió [personaje]:", "preguntó [personaje] con una sonrisa:".
- Humor suave, situaciones absurdas o sorprendentes. Que los niños quieran escuchar qué pasa después.
- Sin violencia. Sin moraleja forzada. Sin arcoíris ni nubes de algodón al final.
- Nunca menciones que eres una IA.

EFECTOS DE SONIDO:
- Pon SOLO 2 o 3 efectos de sonido en momentos muy concretos y significativos.
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
    { text: description, duration_seconds: 2.0, prompt_influence: 0.5 },
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
