import re, json, pathlib

js_path = pathlib.Path("pois_db.js")
text = js_path.read_text(encoding="utf-8")

# Quitar comentarios // y /* */
text = re.sub(r"//.*", "", text)
text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)

# Extrae SOLO los arrays export const POIS... = [ ... ];
blocks = re.findall(
    r"export\s+const\s+(POIS\w*)\s*=\s*\[(.*?)\]\s*;",
    text,
    flags=re.S
)

if not blocks:
    raise ValueError("No encuentro 'export const POIS = [ ... ];' en pois_db.js")

def split_objects(arr_src: str):
    """Divide el texto del array en bloques { ... } usando profundidad de llaves."""
    objs = []
    depth = 0
    start = None
    for i, ch in enumerate(arr_src):
        if ch == "{":
            if depth == 0:
                start = i
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0 and start is not None:
                objs.append(arr_src[start:i+1])
                start = None
    return objs

all_pois = []

for group_name, arr_text in blocks:
    obj_blocks = split_objects(arr_text)

    for blk in obj_blocks:
        s = blk
        # JS -> JSON tolerante
        s = re.sub(r"([A-Za-z_]\w*)\s*:", r'"\1":', s)  # keys con comillas
        s = s.replace("'", '"')
        s = re.sub(r",\s*}", "}", s)
        s = re.sub(r",\s*]", "]", s)

        try:
            p = json.loads(s)
            p["_grupo"] = group_name
            all_pois.append(p)
        except json.JSONDecodeError as e:
            print("\n=== POI QUE ROMPE EL PARSER ===")
            print(blk)
            print("=== FIN POI ===\n")
            raise e

# Construye GeoJSON
features = []
for p in all_pois:
    lat = float(p["lat"])
    lng = float(p["lng"])
    features.append({
        "type": "Feature",
        "properties": {
            "id": p.get("id"),
            "nombre": p.get("nombre"),
            "nivel": int(p.get("nivel", 3)),
            "categorias": ";".join(p.get("categorias", [])),
            "tipo": p.get("tipo"),
            "radio": int(p.get("radioActivacionMetros", 1500)),
            "grupo": p.get("_grupo")
        },
        "geometry": {
            "type": "Point",
            "coordinates": [lng, lat]
        }
    })

geojson = {"type": "FeatureCollection", "features": features}
pathlib.Path("pois.geojson").write_text(
    json.dumps(geojson, ensure_ascii=False, indent=2),
    encoding="utf-8"
)

print(f"OK -> pois.geojson actualizado con {len(features)} POIs")
