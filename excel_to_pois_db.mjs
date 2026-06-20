// tools/excel_to_pois_db.mjs
// Convierte Excel a pois_db.js con bloques por PROVINCIAS (como tu formato original).
// Incluye sponsor/eventos.
// Si sponsor o eventos tienen contenido real, los escribe como objeto/array real.
// Si no, deja el comentario placeholder.
//
// Uso:
//   node tools/excel_to_pois_db.mjs ./pois_completada.xlsx ./pois_db.js [sheetName]
//
// Requisitos:
//   npm i xlsx

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import xlsx from "xlsx";

// ------------------------------
// CLI
// ------------------------------
const argv = process.argv.slice(2);
if (argv.length < 2) {
  console.error(
    "Uso: node tools/excel_to_pois_db.mjs <input.xlsx> <output_pois_db.js> [sheetName]"
  );
  process.exit(1);
}

const inputXlsx = argv[0];
const outputJs = argv[1];
const sheetNameArg = argv[2];

if (!fs.existsSync(inputXlsx)) {
  console.error("No existe el archivo:", inputXlsx);
  process.exit(1);
}

// ------------------------------
// Utils
// ------------------------------
function toStr(v) {
  if (v === null || v === undefined) return "";
  return String(v).trim();
}

// xlsx misreads supplementary-plane emoji (U+1F000–U+1FAFF) as BMP PUA chars
// (U+F000–U+FAFF). Fix by adding 0x10000 to those codepoints.
function fixEmojiEncoding(s) {
  if (!s) return "";
  let out = "";
  for (const ch of s) {
    const cp = ch.codePointAt(0);
    if (cp >= 0xf000 && cp <= 0xfaff) {
      out += String.fromCodePoint(cp + 0x10000);
    } else {
      out += ch;
    }
  }
  return out;
}

function normKey(s) {
  return toStr(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[\s_\-]/g, "");
}

function findKeyCaseInsensitive(row, candidates) {
  const keys = Object.keys(row || {});
  const want = candidates.map(normKey);

  for (const k of keys) {
    const nk = normKey(k);
    const idx = want.indexOf(nk);
    if (idx >= 0) return k;
  }

  // fallback por "contiene"
  for (const k of keys) {
    const nk = normKey(k);
    for (const c of candidates) {
      const nc = normKey(c);
      if (nc && nk.includes(nc)) return k;
    }
  }

  return null;
}

function getVal(row, candidates, fallbackIndex = null) {
  const k = findKeyCaseInsensitive(row, candidates);
  if (k && row[k] !== undefined) return row[k];

  if (fallbackIndex !== null && Array.isArray(row.__rowArray)) {
    return row.__rowArray[fallbackIndex];
  }

  return "";
}

function asNumber(v, fallback = 0) {
  const s = toStr(v);
  if (!s) return fallback;
  if (typeof v === "number") return Number.isFinite(v) ? v : fallback;

  const n = Number(s.replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

function stripWrappingQuotes(s) {
  let x = toStr(s);
  x = x.replace(/^\\+|\\+$/g, "");

  for (let i = 0; i < 3; i++) {
    x = x.replace(/^["']+/, "").replace(/["']+$/, "").trim();
  }

  return x;
}

function parseList(v) {
  if (v === null || v === undefined) return [];
  if (Array.isArray(v)) return v.map(stripWrappingQuotes).filter(Boolean);

  const s0 = toStr(v);
  if (!s0) return [];

  const s = s0.trim();

  // JSON array
  if (s.startsWith("[") && s.endsWith("]")) {
    try {
      const arr = JSON.parse(s);
      if (Array.isArray(arr)) {
        return arr.map(stripWrappingQuotes).filter(Boolean);
      }
    } catch (_) {
      // cae a split
    }
  }

  // split flexible
  return s
    .split(/[,;\n]/g)
    .map((x) => stripWrappingQuotes(x))
    .filter(Boolean);
}

function jsString(value) {
  return JSON.stringify(value ?? "");
}

function jsArrayOfStrings(arr) {
  const clean = (arr || []).map(stripWrappingQuotes).filter(Boolean);
  return `[${clean.map(jsString).join(", ")}]`;
}

function inferProvinceFromId(id) {
  const s = toStr(id).toLowerCase();
  if (s.startsWith("es_mad_")) return "Madrid";
  if (s.startsWith("es_tol_")) return "Toledo";
  if (s.startsWith("es_cr_")) return "Ciudad Real";
  if (s.startsWith("es_ja_")) return "Jaén";
  if (s.startsWith("es_gr_")) return "Granada";
  return "OTROS";
}

function normalizeProvince(p, idFallback) {
  const s = toStr(p);
  if (!s) return inferProvinceFromId(idFallback);

  const low = s.toLowerCase();
  if (low.includes("madrid")) return "Madrid";
  if (low.includes("toledo")) return "Toledo";
  if (low.includes("ciudad") && low.includes("real")) return "Ciudad Real";
  if (low.includes("jaen") || low.includes("jaén")) return "Jaén";
  if (low.includes("granada")) return "Granada";

  // si viene un número por error, ignóralo
  if (/^\d+(\.\d+)?$/.test(s)) return inferProvinceFromId(idFallback);

  return s;
}

function isCommentRow(row) {
  const id = toStr(getVal(row, ["id", "ID"], 0));
  const nombre = toStr(getVal(row, ["nombre", "Nombre"], 1));
  return id.startsWith("//") || nombre.startsWith("//");
}

function inferPerfilFromCats(cats) {
  const c = (cats || []).map((x) => stripWrappingQuotes(x).toLowerCase());

  const isNaturaleza = c.some(
    (x) =>
      x.includes("naturaleza") ||
      x.includes("geologia") ||
      x.includes("montaña") ||
      x.includes("montana") ||
      x.includes("paisaje") ||
      x.includes("rio") ||
      x.includes("lago") ||
      x.includes("cascada") ||
      x.includes("mirador")
  );

  const isHistoria = c.some(
    (x) =>
      x.includes("historia") ||
      x.includes("batalla") ||
      x.includes("guerra") ||
      x.includes("reconquista") ||
      x.includes("castillo") ||
      x.includes("monasterio") ||
      x.includes("fortaleza")
  );

  if (isNaturaleza) return "naturaleza";
  if (isHistoria) return "historia";
  return "cultura";
}

function looksLikeSponsorPlaceholder(s) {
  const x = toStr(s).trim();
  if (!x) return false;

  const normalized = x.toLowerCase().replace(/\s+/g, " ").trim();

  return (
    normalized === "{ sponsorid, sponsornombre, mensaje, url }" ||
    normalized === "{ sponsorid, sponsornombre, mensaje, url? }"
  );
}

function looksLikeEventosPlaceholder(s) {
  const x = toStr(s).trim();
  if (!x) return false;

  const normalized = x.toLowerCase().replace(/\s+/g, " ").trim();

  return (
    normalized ===
    "[{ id, titulo, descripcion, startdate, enddate, importancia }]"
  );
}

function cleanObjectStrings(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return obj;

  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === "string") {
      out[k] = stripWrappingQuotes(v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

function removeEmptyFields(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return obj;

  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === null || v === undefined) continue;
    if (typeof v === "string" && !toStr(v)) continue;
    if (Array.isArray(v) && v.length === 0) continue;
    out[k] = v;
  }
  return out;
}

function tryParseJsonish(raw) {
  const s = toStr(raw).trim();
  if (!s) return null;

  // JSON puro
  try {
    return JSON.parse(s);
  } catch (_) {}

  // JSON-ish con claves sin comillas y/o comillas simples
  try {
    const normalized = s
      .replace(/([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:/g, '$1"$2":')
      .replace(/'/g, '"');

    return JSON.parse(normalized);
  } catch (_) {}

  return null;
}

// ------------------------------
// Sponsor flexible
// ------------------------------
function buildSponsorFromSeparateColumns(row) {
  const sponsorId = toStr(
    getVal(row, ["sponsorId", "SponsorId", "SPONSORID", "idSponsor"])
  );

  const sponsorNombre = toStr(
    getVal(row, [
      "sponsorNombre",
      "SponsorNombre",
      "SPONSORNOMBRE",
      "nombreSponsor",
      "NombreSponsor",
    ])
  );

  const mensaje = toStr(
    getVal(row, [
      "mensaje",
      "Mensaje",
      "mensajeSponsor",
      "MensajeSponsor",
      "sponsorMensaje",
      "SponsorMensaje",
      "descripcionSponsor",
      "DescripcionSponsor",
    ])
  );

  const url = toStr(
    getVal(row, [
      "url",
      "URL",
      "sponsorUrl",
      "SponsorUrl",
      "mapsUrl",
      "MapsUrl",
      "googleMapsUrl",
      "GoogleMapsUrl",
    ])
  );

  const sponsor = removeEmptyFields({
    sponsorId,
    sponsorNombre,
    mensaje,
    url,
  });

  return Object.keys(sponsor).length > 0 ? sponsor : null;
}

function parseSponsorTextFallback(raw) {
  const s = toStr(raw);
  if (!s) return null;
  if (looksLikeSponsorPlaceholder(s)) return null;

  // Casos tipo:
  // sponsorId | sponsorNombre | mensaje | url
  // sponsorNombre | mensaje | url
  // sponsorNombre | mensaje
  const parts = s
    .split(/\s*\|\s*/g)
    .map(stripWrappingQuotes)
    .filter(Boolean);

  if (parts.length >= 4) {
    return removeEmptyFields({
      sponsorId: parts[0],
      sponsorNombre: parts[1],
      mensaje: parts[2],
      url: parts[3],
    });
  }

  if (parts.length === 3) {
    return removeEmptyFields({
      sponsorNombre: parts[0],
      mensaje: parts[1],
      url: parts[2],
    });
  }

  if (parts.length === 2) {
    return removeEmptyFields({
      sponsorNombre: parts[0],
      mensaje: parts[1],
    });
  }

  // Si solo hay texto, se toma como mensaje
  return removeEmptyFields({
    mensaje: s,
  });
}

function parseSponsorOrNull(v, row) {
  const s = toStr(v);
  if (looksLikeSponsorPlaceholder(s)) return null;

  // 1) intenta parsear directamente la celda sponsor
  if (s) {
    const parsed = tryParseJsonish(s);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      const clean = removeEmptyFields(cleanObjectStrings(parsed));
      if (Object.keys(clean).length > 0) return clean;
    }
  }

  // 2) intenta columnas separadas
  const sponsorFromCols = buildSponsorFromSeparateColumns(row);
  if (sponsorFromCols) return sponsorFromCols;

  // 3) fallback texto flexible
  if (s) {
    const sponsorFromText = parseSponsorTextFallback(s);
    if (sponsorFromText && Object.keys(sponsorFromText).length > 0) {
      return sponsorFromText;
    }
  }

  return null;
}

// ------------------------------
// Eventos flexible
// ------------------------------
function parseSingleEventText(line) {
  const raw = stripWrappingQuotes(line);
  if (!raw) return null;

  // JSON / JS-like object
  if (raw.startsWith("{") && raw.endsWith("}")) {
    const parsed = tryParseJsonish(raw);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      const clean = removeEmptyFields(cleanObjectStrings(parsed));
      return Object.keys(clean).length > 0 ? clean : null;
    }
  }

  // Convención por pipes:
  // id | titulo | descripcion | startDate | endDate | importancia
  // titulo | descripcion | startDate | endDate | importancia
  // titulo | descripcion
  const parts = raw
    .split(/\s*\|\s*/g)
    .map(stripWrappingQuotes)
    .filter(Boolean);

  if (parts.length >= 6) {
    return removeEmptyFields({
      id: parts[0],
      titulo: parts[1],
      descripcion: parts[2],
      startDate: parts[3],
      endDate: parts[4],
      importancia: parts[5],
    });
  }

  if (parts.length === 5) {
    return removeEmptyFields({
      titulo: parts[0],
      descripcion: parts[1],
      startDate: parts[2],
      endDate: parts[3],
      importancia: parts[4],
    });
  }

  if (parts.length === 4) {
    return removeEmptyFields({
      titulo: parts[0],
      descripcion: parts[1],
      startDate: parts[2],
      endDate: parts[3],
    });
  }

  if (parts.length === 3) {
    return removeEmptyFields({
      titulo: parts[0],
      descripcion: parts[1],
      startDate: parts[2],
    });
  }

  if (parts.length === 2) {
    return removeEmptyFields({
      titulo: parts[0],
      descripcion: parts[1],
    });
  }

  return removeEmptyFields({
    titulo: raw,
  });
}

function parseEventosOrNull(v) {
  const s = toStr(v);
  if (!s) return null;
  if (looksLikeEventosPlaceholder(s)) return null;

  // 1) array JSON / JS-like
  if (s.trim().startsWith("[") && s.trim().endsWith("]")) {
    const parsed = tryParseJsonish(s);
    if (Array.isArray(parsed)) {
      const clean = parsed
        .map((x) => {
          if (x && typeof x === "object" && !Array.isArray(x)) {
            return removeEmptyFields(cleanObjectStrings(x));
          }
          if (typeof x === "string") {
            return parseSingleEventText(x);
          }
          return null;
        })
        .filter(Boolean);

      if (clean.length > 0) return clean;
    }
  }

  // 2) varias entradas separadas por salto de línea o ;
  const entries = s
    .split(/\n|;/g)
    .map((x) => x.trim())
    .filter(Boolean);

  if (entries.length > 0) {
    const events = entries.map(parseSingleEventText).filter(Boolean);
    if (events.length > 0) return events;
  }

  return null;
}

// ------------------------------
// Leer Excel
// ------------------------------
const wb = xlsx.readFile(inputXlsx);
const sheetName = sheetNameArg || wb.SheetNames[0];
const ws = wb.Sheets[sheetName];

if (!ws) {
  console.error("No existe la hoja:", sheetName);
  console.error("Hojas disponibles:", wb.SheetNames.join(", "));
  process.exit(1);
}

const rowsArray = xlsx.utils.sheet_to_json(ws, { header: 1, defval: "" });
const header = rowsArray[0] || [];
const dataRows = rowsArray.slice(1);

// construir objetos por fila usando headers tal cual
const rows = dataRows.map((r) => {
  const obj = { __rowArray: r };
  header.forEach((h, i) => {
    const key = toStr(h);
    if (key) obj[key] = r[i];
  });
  return obj;
});

// ------------------------------
// Parsear POIs
// ------------------------------
const pois = [];
let idx = 0;

for (const row of rows) {
  if (!row || isCommentRow(row)) continue;

  const id = toStr(getVal(row, ["id", "ID"], 0));
  if (!id) continue;

  const nombre = toStr(getVal(row, ["nombre", "Nombre"], 1));
  const emoji = fixEmojiEncoding(toStr(getVal(row, ["emoji", "Emoji"], 4)));

  const lat = asNumber(getVal(row, ["lat", "Lat", "LAT"], 2), 0);
  const lng = asNumber(getVal(row, ["lng", "Lon", "LNG", "Lng"], 3), 0);
  const nivel = Math.round(asNumber(getVal(row, ["nivel", "Nivel"], 4), 3));

  const categorias = parseList(
    getVal(row, ["categorias", "Categorías", "Categorias"], 5)
  );
  const tipo = toStr(getVal(row, ["tipo", "Tipo"], 6));
  const radioActivacionMetros = Math.round(
    asNumber(getVal(row, ["radioActivacionMetros", "radio", "Radio"], 7), 2000)
  );

  const perfilRaw = toStr(getVal(row, ["perfil", "Perfil"], 8)).toLowerCase();
  const prioridad = Math.round(
    asNumber(getVal(row, ["prioridad", "Prioridad"], 9), 100)
  );
  const cooldownMin = Math.round(
    asNumber(getVal(row, ["cooldownMin", "CooldownMin", "cooldown"], 10), 60)
  );
  const intereses = parseList(getVal(row, ["intereses", "Intereses"], 11));

  // provincia: NO fallback a índice para evitar bugs
  const provinciaCell = getVal(row, ["provincia", "Provincia"], null);
  const provincia = normalizeProvince(provinciaCell, id);

  // sponsor/eventos: por header si existe, si no por índices O,P (14,15)
  const sponsorCell = getVal(row, ["sponsor", "Sponsor"], 14);
  const eventosCell = getVal(row, ["eventos", "Eventos"], 15);
  const subPoisCell = getVal(row, ["sub_pois", "subPois", "SubPois", "sub_poi"], 16);
  const imagenUrl = toStr(getVal(row, ["imageUrl", "imagenUrl", "imagen_url", "ImagenUrl", "imagen"], null));
  // Música de fondo: clave manual (nombre de fichero sin extensión en assets/audio/music/)
  const musica = stripWrappingQuotes(toStr(getVal(row, ["musica", "Musica", "música", "Música", "pista", "track", "cancion", "canción"], null)));

  const sponsor = parseSponsorOrNull(sponsorCell, row);
  const eventos = parseEventosOrNull(eventosCell);

  let subPois = null;
  if (subPoisCell) {
    const raw = toStr(subPoisCell).trim();
    if (raw && raw !== "[]") {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) subPois = parsed;
      } catch (_) {}
    }
  }

  pois.push({
    __idx: idx++,
    provincia,
    id,
    nombre,
    emoji,
    lat,
    lng,
    nivel,
    categorias,
    tipo,
    radioActivacionMetros,
    perfil: perfilRaw || inferPerfilFromCats(categorias),
    prioridad,
    cooldownMin,
    intereses,
    sponsor,
    eventos,
    subPois,
    imagenUrl: imagenUrl || null,
    musica: musica || null,
  });
}

// ------------------------------
// Agrupar por provincias
// ------------------------------
const PROVINCES_ORDER = [
  "Madrid",
  "Toledo",
  "Ciudad Real",
  "Jaén",
  "Granada",
  "OTROS",
];

const byProv = new Map();
for (const p of PROVINCES_ORDER) byProv.set(p, []);

for (const p of pois) {
  const key = byProv.has(p.provincia) ? p.provincia : "OTROS";
  byProv.get(key).push(p);
}

// ------------------------------
// Generar pois_db.js
// ------------------------------
function poiToBlock(p) {
  const lines = [];

  if (p.tipo === "capital_provincia") {
    lines.push("  // ✅ CAPITAL");
  }

  lines.push("  {");
  lines.push(`    id: ${jsString(p.id)},`);
  lines.push(`    nombre: ${jsString(p.nombre)},`);
  if (p.emoji) lines.push(`    emoji: ${jsString(p.emoji)},`);
  lines.push(`    lat: ${Number(p.lat)},`);
  lines.push(`    lng: ${Number(p.lng)},`);
  lines.push(`    nivel: ${Math.round(p.nivel ?? 3)},`);
  lines.push(`    categorias: ${jsArrayOfStrings(p.categorias)},`);
  lines.push(`    tipo: ${jsString(p.tipo)},`);
  lines.push(
    `    radioActivacionMetros: ${Math.round(
      p.radioActivacionMetros ?? 2000
    )},`
  );
  lines.push("");
  lines.push(`    perfil: ${jsString(p.perfil || "cultura")},`);
  lines.push(`    prioridad: ${Math.round(p.prioridad ?? 100)},`);
  lines.push(`    cooldownMin: ${Math.round(p.cooldownMin ?? 60)},`);
  lines.push(`    intereses: ${jsArrayOfStrings(p.intereses)},`);

  if (p.sponsor && Object.keys(p.sponsor).length > 0) {
    lines.push(
      `    sponsor: ${JSON.stringify(p.sponsor, null, 2).replace(/\n/g, "\n    ")},`
    );
  } else {
    lines.push(`    // sponsor: { sponsorId, sponsorNombre, mensaje, url },`);
  }

  if (Array.isArray(p.eventos) && p.eventos.length > 0) {
    lines.push(
      `    eventos: ${JSON.stringify(p.eventos, null, 2).replace(/\n/g, "\n    ")},`
    );
  } else {
    lines.push(
      `    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],`
    );
  }

  if (Array.isArray(p.subPois) && p.subPois.length > 0) {
    lines.push(
      `    sub_pois: ${JSON.stringify(p.subPois, null, 2).replace(/\n/g, "\n    ")},`
    );
  }

  if (p.imagenUrl) {
    lines.push(`    imagenUrl: ${jsString(p.imagenUrl)},`);
  }

  if (p.musica) {
    lines.push(`    musica: ${jsString(p.musica)},`);
  }

  lines.push("  },");
  return lines.join("\n");
}

const out = [];
out.push("// pois_db.js");
out.push("// Base de datos de puntos de interés para RAIDIOAPP");
out.push("// Provincias: Madrid, Toledo, Ciudad Real, Jaén, Granada");
out.push("//");
out.push("// ✅ Generado automáticamente desde Excel. NO EDITAR A MANO.");
out.push("//    Fuente: " + path.basename(inputXlsx));
out.push("");
out.push("export const POIS = [");
out.push("");

for (const prov of PROVINCES_ORDER) {
  const list = byProv.get(prov) || [];
  if (!list.length) continue;

  const title = prov.toUpperCase();
  out.push("  // =====================================================================");
  out.push(
    `  // ================================ ${title} =============================`
  );
  out.push("  // =====================================================================");
  out.push("");

  for (const p of list) {
    out.push(poiToBlock(p));
    out.push("");
  }
}

out.push("];");
out.push("");

fs.writeFileSync(outputJs, out.join("\n"), "utf8");

console.log("✅ pois_db.js generado:", outputJs);
console.log("   POIs:", pois.length);
console.log(
  "   Provincias:",
  PROVINCES_ORDER.filter((p) => (byProv.get(p) || []).length).join(", ")
);