from qgis.core import QgsProject

proj = QgsProject.instance()
bufs = proj.mapLayersByName("pois_buffers")

if not bufs:
    print("❌ NO existe ninguna capa llamada pois_buffers")
else:
    layer = bufs[0]
    print("✔ Capa encontrada:", layer.name())
    print("Tipo de geometría:", layer.geometryType())  # 2 = polígono
    print("Features:", layer.featureCount())
    print("Validez:", layer.isValid())
    print("CRS:", layer.crs().authid())
