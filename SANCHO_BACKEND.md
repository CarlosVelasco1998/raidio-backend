# SANCHO Backend — Guía de referencia

Documento para Claude y para cualquier desarrollador. Léelo ENTERO antes de tocar nada.

---

## Qué es este backend

API Node.js (Express, ES Modules) que da servicio a la app **Sancho** — copiloto IA para viajes por carretera en España. Gestiona: POIs, narración IA, TTS (voz), asistente conversacional, cuentos infantiles, música (Deezer) y geocodificación.

---

## Reglas de oro — NO romper nunca

1. **No cambiar `pois_db.js` a mano.** Se genera siempre con `node excel_to_pois_db.mjs pois.xlsx pois_db.js datos_POI`. Si hay que añadir POIs, editar el Excel y regenerar.
2. **No cambiar la estructura de un endpoint existente** sin actualizar también el cliente Flutter (`main.dart`, `ai_service.dart`). Los contratos son bidireccionales.
3. **`kidsStoryImmersive.js` es independiente.** No moverlo ni reescribirlo sin leer su lógica completa primero.
4. **Variables de entorno obligatorias** (ver sección abajo). Si faltan, el servidor arranca pero los endpoints fallan silenciosamente.
5. **ElevenLabs se llama desde el servidor, no desde la app.** La API key nunca va al cliente Flutter.
6. **No forzar redeployments innecesarios en Render/Railway.** Cada redeploy puede cambiar la IP del servidor. Si esa IP es bloqueada por ElevenLabs/Cloudflare, el TTS deja de funcionar. Deploya solo cuando hay cambios reales en el código.

---

## Variables de entorno requeridas

```
ANTHROPIC_API_KEY      # Claude (Haiku para narración, Sonnet para assistant/stories)
ELEVEN_API_KEY         # ElevenLabs TTS
ELEVEN_VOICE_ID        # Voice ID por defecto (voz principal de Sancho)
PORT                   # Puerto Express (Render/Railway lo inyectan automáticamente)
```

---

## Estructura de archivos

```
index.js                  ← servidor principal (ESTE ARCHIVO)
pois_db.js                ← base de datos de POIs generada automáticamente
pois.xlsx                 ← fuente de verdad de POIs (editar aquí)
excel_to_pois_db.mjs      ← script de conversión Excel → pois_db.js
kidsStoryImmersive.js     ← lógica de cuentos inmersivos multi-voz
package.json              ← dependencias y scripts
SANCHO_BACKEND.md         ← este documento
```

---

## Endpoints — referencia completa

### GET /healthz
Devuelve `"ok"`. Health check de Render/Railway.

---

### GET /pois-nearby
Devuelve POIs cercanos a unas coordenadas.

**Query params:**
- `lat` (number, requerido)
- `lng` (number, requerido)
- `maxNivel` (int, default 3) — filtra POIs por nivel de importancia (1=más importante)
- `radius` (int, default 15000) — radio en metros

**Respuesta:**
```json
{ "count": 5, "pois": [ { ...poi, "distanceMeters": 1234 } ] }
```

**Notas:** Usa fórmula de Haversine. Ordena por distancia ascendente.

---

### GET /pois-all
Devuelve todos los POIs de la base de datos. Lo usa la pantalla de simulación dev.

**Respuesta:** `{ "count": 780, "pois": [...] }`

---

### POST /ai/generate
Genera texto de narración para un POI o ubicación. Lo llama `ai_service.dart` en Flutter.

**Body:**
```json
{
  "prompt": "texto del prompt completo construido en Flutter",
  "temas": ["historia", "naturaleza"],
  "nivel": "normal",           // "poco" | "normal" | "mucho"
  "liveEvents": false,
  "latitude": 40.4,
  "longitude": -3.7,
  "timestamp": "2026-06-06T12:00:00Z",
  "poiNombre": "Numancia",
  "language": "es"
}
```

**Respuesta:**
```json
{ "text": "...", "model_used": "claude-haiku-...", "usage": {...} }
```

**max_tokens por nivel:**
- `poco` → 300
- `normal` → 600
- `mucho` → 1200

**Modelo:** Claude Haiku (rápido y barato para narración en carretera).

---

### POST /tts
Convierte texto a voz usando ElevenLabs. Devuelve audio/mpeg binario.

**Body:**
```json
{
  "text": "Texto a narrar",
  "voiceId": "Nh2zY9kknu6z4pZy6FhD",   // opcional, usa ELEVEN_VOICE_ID si no se pasa
  "mood": "batalla"                        // "batalla"|"historia"|"naturaleza"|"practico"|"normal"
}
```

**Respuesta:** Bytes de audio MP3 (`Content-Type: audio/mpeg`).

**Voice settings por mood** (controlan expresividad de la voz):
| mood       | stability | style | efecto              |
|------------|-----------|-------|---------------------|
| batalla    | 0.30      | 0.75  | dramático, épico    |
| historia   | 0.40      | 0.55  | evocador, con peso  |
| naturaleza | 0.50      | 0.35  | calmado             |
| practico   | 0.60      | 0.15  | claro, directo      |
| normal     | 0.55      | 0.20  | estándar            |

**Modelos ElevenLabs:** Intenta `eleven_flash_v2_5` primero, fallback a `eleven_multilingual_v2`.

**⚠️ IMPORTANTE:** ElevenLabs bloquea IPs de ciertos proveedores cloud. Si el TTS devuelve 403, el problema es la IP del servidor, no el código. Solución: cambiar de proveedor de hosting (Railway funciona bien).

---

### GET /voices
Lista las voces disponibles en la cuenta de ElevenLabs. Solo para debug.

---

### POST /assistant
Asistente conversacional de voz. Maneja navegación, juegos, cuentos y configuración de Learn.

**Body:**
```json
{
  "messages": [{ "role": "user", "content": "quiero jugar" }],
  "screen": "home",
  "context": {},
  "step": null
}
```

**Respuesta:**
```json
{
  "speech": "¡Claro! ¿A qué quieres jugar?",
  "action": "navigate_games",
  "params": {}
}
```

**Modelo:** Claude Sonnet (necesita razonamiento para parsear intenciones).

**Acciones posibles:**
- Navegación: `navigate_home`, `navigate_games`, `navigate_learn`, `navigate_guess_song`, `navigate_kids_stories`, `navigate_quiz`, `navigate_map`
- Juego Adivina la canción: `set_guess_song_category`, `set_guess_song_players`, `start_guess_song`, `reveal_song`, `answer_correct`, `answer_wrong`, `next_round`
- Cuentos: `set_story_protagonists`, `set_story_idea`, `start_story`
- Quiz: `set_quiz_players`, `start_quiz`
- Learn: `set_learn_topics`
- Utilidad: `stop_audio`, `trigger_poi`, `close_assistant`

---

### POST /kids-story-immersive
Genera un cuento inmersivo multi-voz para niños. Lógica delegada a `kidsStoryImmersive.js`.

---

### GET /deezer-random-track
Devuelve una canción aleatoria con preview de Deezer para el juego "Adivina la canción".

**Query params:** `genre` (indie | pop | rock | reggaeton | rap | electronic | any)

**Respuesta:**
```json
{ "title": "...", "artist": "...", "preview_url": "...", "deezer_id": 123, "link": "..." }
```

**Notas:** API pública de Deezer, sin autenticación. No todas las canciones tienen preview.

---

### GET /provincia
Geocodificación inversa — convierte coordenadas en provincia/ciudad española.

**Query params:** `lat`, `lng`

**Respuesta:**
```json
{ "provincia": "Madrid", "comunidad": "Comunidad de Madrid", "ciudad": "Alcalá de Henares" }
```

**Usa:** Nominatim (OpenStreetMap). Cache 6h.

---

### POST /narrate/bienvenida-provincia
Genera una narración de bienvenida al entrar en una provincia nueva.

**Body:** `{ "provincia": "Toledo", "comunidad": "Castilla-La Mancha", "timestamp": "..." }`

**Respuesta:** `{ "texto": "..." }`

**Cache:** 24h por provincia. **Modelo:** Claude Sonnet.

---

### GET /debug/spaininfo-test
Endpoint de debug que muestra los eventos encontrados en Spain.info para unas coordenadas.

---

## Cómo añadir un endpoint nuevo sin romper nada

1. Añadirlo **al final** del archivo `index.js`, antes del `app.listen`.
2. Formato estándar:
```javascript
app.METHOD('/ruta', async (req, res) => {
  try {
    // lógica
    res.json({ ... });
  } catch (e) {
    console.error('ERROR /ruta:', e.message);
    res.status(500).json({ error: 'descripción' });
  }
});
```
3. Documentarlo en este archivo.
4. Si la app Flutter necesita llamarlo, añadir el método en `ai_service.dart` o crear uno nuevo.

## Cómo añadir POIs nuevos

1. Editar `pois.xlsx` hoja `datos_POI`.
2. Ejecutar: `node excel_to_pois_db.mjs pois.xlsx pois_db.js datos_POI`
3. Commit y push de `pois.xlsx` + `pois_db.js`.
4. Render/Railway redespliega automáticamente.

## Cómo cambiar la voz de ElevenLabs

- Cambiar `ELEVEN_VOICE_ID` en las variables de entorno del servidor.
- Para voces específicas por contexto (batalla, etc.), editar `VOICE_SETTINGS_BY_MOOD` en `index.js`.
- Los `voiceId` de cada voz en la app Flutter están en `main.dart` en `kElevenVoices`.
