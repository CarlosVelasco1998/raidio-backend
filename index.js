// index.js (RAIDIOAPP backend)
// ES Modules -> package.json debe tener: "type": "module"

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

import { POIS } from "./pois_db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ================== CONFIG SPOTIFY ==================
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

// Cache sencillo del token de Spotify
let spotifyTokenCache = {
  accessToken: null,
  expiresAt: 0, // timestamp en ms
};

async function getSpotifyAccessToken() {
  if (
    spotifyTokenCache.accessToken &&
    Date.now() < spotifyTokenCache.expiresAt
  ) {
    // Token aún válido
    return spotifyTokenCache.accessToken;
  }

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    throw new Error("Faltan SPOTIFY_CLIENT_ID o SPOTIFY_CLIENT_SECRET en env");
  }

  const basicAuth = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const tokenUrl = "https://accounts.spotify.com/api/token";

  const resp = await axios.post(
    tokenUrl,
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      timeout: 15000,
    }
  );

  const data = resp.data;
  const accessToken = data.access_token;
  const expiresIn = data.expires_in; // en segundos (suele ser 3600)

  spotifyTokenCache = {
    accessToken,
    // Le restamos 60 segundos de margen
    expiresAt: Date.now() + (expiresIn - 60) * 1000,
  };

  console.log("🎧 Nuevo token de Spotify obtenido (caduca en", expiresIn, "s)");

  return accessToken;
}

// Mapeo simple de géneros de la app → búsqueda Spotify
function mapGenreToSpotifyQuery(genre) {
  switch (genre) {
    case "pop":
      return "genre:pop";
    case "rock":
      return "genre:rock";
    case "reggaeton":
      // Spotify no tiene seed "reggaeton" formal, pero la keyword funciona
      return "reggaeton";
    case "indie":
      return "genre:indie";
    case "clasicos_80":
      return "year:1980-1989";
    case "any":
    default:
      return "year:1980-2024";
  }
}

// ================== MIDDLEWARES ==================
app.use(cors());
app.use(express.json({ limit: "2mb" }));

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

// GET /pois-all
app.get("/pois-all", (req, res) => {
  try {
    // Devuelve todo (puedes recortar campos si quieres)
    res.json({ count: POIS.length, pois: POIS });
  } catch (e) {
    console.error("ERROR /pois-all:", e);
    res.status(500).json({ error: "backend error" });
  }
});

// ================== ENDPOINT LISTAR VOCES (DEBUG) ==================
// GET /voices  -> te devuelve las voces reales de TU cuenta
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
// POST /tts { "text": "hola...", "voiceId": "OPCIONAL" }
// Devuelve audio/mpeg

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
        error: "Falta ELEVEN_API_KEY o ELEVEN_VOICE_ID en .env",
      });
    }

    const usedVoiceId = voiceId || DEFAULT_VOICE_ID;

    console.log("➡️ TTS REQUEST length:", text.length);
    console.log("➡️ voiceId recibido desde Flutter:", voiceId);
    console.log("➡️ VOZ FINAL QUE USA EL BACKEND:", usedVoiceId);

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
      const statusFlash = eFlash.response?.status;
      let decodedFlash = eFlash.response?.data;

      try {
        if (decodedFlash && Buffer.isBuffer(decodedFlash)) {
          decodedFlash = decodedFlash.toString("utf8");
        }
      } catch (_) {}

      console.error("⚠️ Flash failed. status:", statusFlash);
      console.error("⚠️ Flash body:", decodedFlash || eFlash.message);

      // Reintento con modelo más estable
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
      else if (raw instanceof ArrayBuffer)
        decoded = Buffer.from(raw).toString("utf8");
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
// Respuesta: { title, artist, preview_url, deezer_id, link }

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
      // genérico para que siempre salga algo
      return 'genre:"Pop" OR genre:"Rock" OR genre:"Dance"';
  }
}

app.get("/deezer-random-track", async (req, res) => {
  try {
    const genre = (req.query.genre || "any").toString();
    const q = mapGenreToDeezerQuery(genre);

    // Deezer search: devuelve tracks con campo preview (mp3 30s)
    // OJO: limit alto para aumentar probabilidad
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

