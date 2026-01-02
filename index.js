// index.js (RAIDIOAPP backend) - ES Modules ("type":"module")
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

import { POIS } from "./pois_db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ================== MIDDLEWARES ==================
app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.get("/healthz", (req, res) => {
  res.status(200).send("ok");
});


// ================== LOG CARGA POIS ==================
console.log("POIS cargados:", POIS.length);
if (POIS.length > 0) console.log("Primer POI:", POIS[0]);

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
// POST /ai/generate { prompt: "...", temas: [...], model?: "gpt-4o-mini" }
app.post("/ai/generate", async (req, res) => {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Falta OPENAI_API_KEY en env" });
    }

    const { prompt, temas, model } = req.body || {};
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "prompt requerido (string)" });
    }

    const usedModel = model || process.env.OPENAI_MODEL || "gpt-4o-mini";

    // Si quieres, puedes meter “temas” en el system o dejarlo solo para logging:
    const temasTxt = Array.isArray(temas) ? temas.filter(Boolean).join(", ") : "";

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
        { role: "user", content: prompt },
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
