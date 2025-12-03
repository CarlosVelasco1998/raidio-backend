from qgis.core import (
    QgsProject,
    QgsCoordinateReferenceSystem,
    QgsProperty,
    QgsFillSymbol
)
import processing
from qgis.utils import iface
import os

# === RUTAS ===
PROJECT_DIR = r"C:\Users\javiv\Desktop\APP RAIDIO\raidio-backend"
GEOJSON_PATH = os.path.join(PROJECT_DIR, "pois.geojson")

def actualizar():
    proj = QgsProject.instance()

    # 1) Recargar/cargar POIS (puntos en 4326)
    pois_layers = proj.mapLayersByName("pois")
    if pois_layers:
        pois = pois_layers[0]
        pois.reload()
    else:
        pois = iface.addVectorLayer(GEOJSON_PATH, "pois", "ogr")

    if not pois or not pois.isValid():
        raise Exception("La capa 'pois' no es válida. Revisa pois.geojson.")

    # 2) Reproyectar a 3857 (metros)
    pois_3857 = processing.run(
        "native:reprojectlayer",
        {
            "INPUT": pois,
            "TARGET_CRS": QgsCoordinateReferenceSystem("EPSG:3857"),
            "OUTPUT": "memory:"
        }
    )["OUTPUT"]
    pois_3857.setName("pois_3857")

    old_3857 = proj.mapLayersByName("pois_3857")
    if old_3857:
        proj.removeMapLayer(old_3857[0].id())
    proj.addMapLayer(pois_3857)

    # 3) Buffer dinámico por campo "radio"
    buffers = processing.run(
        "native:buffer",
        {
            "INPUT": pois_3857,
            "DISTANCE": QgsProperty.fromExpression('"radio"'),
            "SEGMENTS": 50,
            "DISSOLVE": False,
            "OUTPUT": "memory:"
        }
    )["OUTPUT"]
    buffers.setName("pois_buffers")

    old_buf = proj.mapLayersByName("pois_buffers")
    if old_buf:
        proj.removeMapLayer(old_buf[0].id())
    proj.addMapLayer(buffers)

    # 4) SIMBOLOGÍA SEMITRANSPARENTE AUTOMÁTICA
    # Relleno rojo suave con transparencia (alpha=70 aprox 27% opacidad)
    symbol = QgsFillSymbol.createSimple({
        "color": "255,0,0,70",          # R,G,B,Alpha (0-255)
        "outline_color": "255,0,0,180", # borde más visible
        "outline_width": "0.8"
    })
    buffers.renderer().setSymbol(symbol)
    buffers.triggerRepaint()

    # 5) Refrescar mapa
    iface.mapCanvas().refresh()
    iface.messageBar().pushSuccess("RAIDIOAPP", "Capas actualizadas con buffers semitransparentes OK")

actualizar()
