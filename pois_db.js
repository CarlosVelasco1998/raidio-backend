// pois_db.js
// Base de datos de puntos de interés para RAIDIOAPP
// Provincias: Madrid, Toledo, Ciudad Real, Jaén, Granada
//
// ✅ Generado automáticamente desde Excel. NO EDITAR A MANO.
//    Fuente: pois.xlsx

export const POIS = [

  // =====================================================================
  // ================================ MADRID =============================
  // =====================================================================

  {
    id: "es_mad_puerto_somosierra_batalla",
    nombre: "Puerto de Somosierra (batalla de 1808)",
    emoji: "⛰️",
    lat: 41.1325,
    lng: -3.58167,
    nivel: 1,
    categorias: ["historia", "batallas", "datosCuriosos"],
    tipo: "paso_montana",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 140,
    cooldownMin: 80,
    intereses: ["guerra_independencia", "batalla", "paso_montana", "logistica", "terreno"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-de-somosierra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-de-somosierra.png",
  },

  // ✅ CAPITAL
  {
    id: "es_mad_capital_madrid",
    nombre: "Madrid (capital de provincia)",
    emoji: "🏛️",
    lat: 40.416775,
    lng: -3.70379,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "monarquia", "cultura", "museos", "siglo_xvi_xvii"],
    sponsor: {
      "sponsorId": "bar_001",
      "sponsorNombre": "Bar Manolo",
      "mensaje": "Bocadillos y terraza y cocks",
      "url": "https://www.google.com/maps/place/Bernab%C3%A9u/@40.4544295,-3.6877974,17z/data=!3m1!5s0xd4228e2361e11b7:0x67f5c76cf9a0be21!4m6!3m5!1s0xd4228e23705d39f:0xa8fff6d26e2b1988!8m2!3d40.4530196!4d-3.6883748!16zL20vMDFneGx0?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    eventos: [
      {
        "titulo": "id, titulo, descripcion, startDate, endDate, importancia"
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/madrid.png",
  },

  {
    id: "es_mad_valle_caidos",
    nombre: "Valle de los Caídos",
    emoji: "🕊️",
    lat: 40.6419103,
    lng: -4.1508807,
    nivel: 1,
    categorias: ["historia", "guerra_civil", "memoria", "arquitectura", "datosCuriosos"],
    tipo: "memorial",
    radioActivacionMetros: 8000,

    perfil: "historia",
    prioridad: 125,
    cooldownMin: 90,
    intereses: ["arquitectura", "siglo_xx", "memoria_historica", "contexto_guerra_civil", "construccion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valle-de-los-caidos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mad_el_escorial",
        "nombre": "Monasterio de San Lorenzo de El Escorial (UNESCO)",
        "tipo": "monasterio",
        "nivel": 1,
        "lat": 40.590105,
        "lng": -4.147921,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valle-de-los-caidos.png",
  },

  {
    id: "es_mad_alcala_henares_centro",
    nombre: "Centro histórico de Alcalá de Henares (Cervantes)",
    emoji: "🏰",
    lat: 40.481979,
    lng: -3.364135,
    nivel: 1,
    categorias: ["historia", "literatura", "unesco"],
    tipo: "casco_historico",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 125,
    cooldownMin: 70,
    intereses: ["cervantes", "literatura", "universidad", "arquitectura", "unesco"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/centro-historico-de-alcala-de-henares.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mad_universidad_alcala",
        "nombre": "Universidad de Alcalá y Colegio Mayor de San Ildefonso",
        "tipo": "universidad_historica",
        "nivel": 2,
        "lat": 40.48293,
        "lng": -3.36308,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/centro-historico-de-alcala-de-henares.png",
  },

  {
    id: "es_mad_aranjuez_palacio_jardines",
    nombre: "Palacio Real y Jardines de Aranjuez (UNESCO)",
    emoji: "🌸",
    lat: 40.03101,
    lng: -3.60444,
    nivel: 1,
    categorias: ["historia", "paisaje", "unesco"],
    tipo: "palacio_jardines",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["palacio", "jardines", "arte", "monarquia", "unesco", "paisaje_cultural"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/palacio-real-y-jardines-de-aranjuez.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/palacio-real-y-jardines-de-aranjuez.png",
  },

  {
    id: "es_mad_hayedo_montejo",
    nombre: "Hayedo de Montejo (UNESCO)",
    emoji: "🌲",
    lat: 41.103323,
    lng: -3.489824,
    nivel: 1,
    categorias: ["naturaleza", "unesco", "paisaje"],
    tipo: "bosque",
    radioActivacionMetros: 4000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["bosque", "hayedo", "unesco", "biodiversidad", "otoño", "sendero"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hayedo-de-montejo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hayedo-de-montejo.png",
  },

  {
    id: "es_mad_guadarrama_parque_nacional",
    nombre: "Parque Nacional de la Sierra de Guadarrama",
    emoji: "🌲",
    lat: 40.7849,
    lng: -3.9572,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo"],
    tipo: "parque_nacional",
    radioActivacionMetros: 12000,

    perfil: "naturaleza",
    prioridad: 115,
    cooldownMin: 45,
    intereses: ["senderismo", "cumbres", "miradores", "fauna", "flora", "clima", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-la-sierra-de-guadarrama.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mad_penalara",
        "nombre": "Macizo de Peñalara",
        "tipo": "cumbre",
        "nivel": 1,
        "lat": 40.848,
        "lng": -3.9642,
        "radio": 7500
      },
      {
        "id": "es_mad_castillo_manzanares_real",
        "nombre": "Castillo Nuevo de Manzanares el Real",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 40.727222,
        "lng": -3.862222,
        "radio": 2000
      },
      {
        "id": "es_mad_pedriza",
        "nombre": "La Pedriza (granito y escalada)",
        "tipo": "paraje_natural",
        "nivel": 2,
        "lat": 40.7313,
        "lng": -3.8853,
        "radio": 8000
      },
      {
        "id": "es_mad_lagunas_penalara",
        "nombre": "Lagunas glaciares de Peñalara",
        "tipo": "lagunas",
        "nivel": 3,
        "lat": 40.8566,
        "lng": -3.9578,
        "radio": 6000
      },
      {
        "id": "es_mad_embalse_santillana",
        "nombre": "Embalse de Santillana y Mirador",
        "tipo": "embalse",
        "nivel": 3,
        "lat": 40.7194,
        "lng": -3.8503,
        "radio": 6000
      },
      {
        "id": "es_mad_castillo_viejo_manzanares",
        "nombre": "Castillo Viejo de Manzanares el Real",
        "tipo": "ruinas",
        "nivel": 3,
        "lat": 40.7319,
        "lng": -3.8689,
        "radio": 1500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-la-sierra-de-guadarrama.png",
  },

  {
    id: "es_mad_brunete_batalla",
    nombre: "Brunete (Batalla de Brunete, 1937)",
    emoji: "⚔️",
    lat: 40.4059,
    lng: -3.9986,
    nivel: 2,
    categorias: ["historia", "batallas", "guerra_civil"],
    tipo: "pueblo_batalla",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 125,
    cooldownMin: 90,
    intereses: ["guerra_civil", "batalla", "frentes", "consecuencias"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/brunete.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/brunete.png",
  },

  {
    id: "es_mad_castillo_buitrago",
    nombre: "Muralla y Castillo de Buitrago del Lozoya",
    emoji: "🧱",
    lat: 40.9937,
    lng: -3.6369,
    nivel: 2,
    categorias: ["historia", "fortificaciones", "pueblo"],
    tipo: "muralla_castillo",
    radioActivacionMetros: 2500,

    perfil: "historia",
    prioridad: 110,
    cooldownMin: 40,
    intereses: ["muralla", "fortificacion", "edad_media", "río", "pueblo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/muralla-y-castillo-de-buitrago-del-lozoya.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/muralla-y-castillo-de-buitrago-del-lozoya.png",
  },

  {
    id: "es_mad_castillo_coracera",
    nombre: "Castillo de la Coracera (San Martín de Valdeiglesias)",
    emoji: "🏰",
    lat: 40.3637,
    lng: -4.3972,
    nivel: 2,
    categorias: ["historia", "castillos", "pueblo"],
    tipo: "castillo",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 105,
    cooldownMin: 40,
    intereses: ["castillo", "señorios", "arquitectura", "pueblo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-la-coracera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-la-coracera.png",
  },

  {
    id: "es_mad_rascafria_paular",
    nombre: "Rascafría y Monasterio de El Paular",
    emoji: "⛪",
    lat: 40.9044,
    lng: -3.8809,
    nivel: 2,
    categorias: ["historia", "monasterios", "naturaleza"],
    tipo: "pueblo_monasterio",
    radioActivacionMetros: 3000,

    perfil: "parada",
    prioridad: 105,
    cooldownMin: 45,
    intereses: ["monasterio", "valle", "rio", "senderismo", "pueblo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rascafria-y-monasterio-de-el-paular.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mad_las_presillas",
        "nombre": "Área natural de Las Presillas (Lozoya)",
        "tipo": "area_recreativa",
        "nivel": 3,
        "lat": 40.8797,
        "lng": -3.8852,
        "radio": 1500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rascafria-y-monasterio-de-el-paular.png",
  },

  {
    id: "es_mad_chinchon_plaza_mayor",
    nombre: "Chinchón y su Plaza Mayor",
    emoji: "🏡",
    lat: 40.140267,
    lng: -3.422169,
    nivel: 2,
    categorias: ["historia", "cultura", "pueblo"],
    tipo: "pueblo",
    radioActivacionMetros: 8000,

    perfil: "parada",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["plaza_mayor", "gastronomia", "pueblo", "patrimonio", "plan_rapido"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chinchon-y-su-plaza-mayor.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chinchon-y-su-plaza-mayor.png",
  },

  {
    id: "es_mad_nuevo_baztan",
    nombre: "Nuevo Baztán (villa barroca industrial)",
    emoji: "🏰",
    lat: 40.3675,
    lng: -3.2427,
    nivel: 3,
    categorias: ["historia", "arquitectura", "datosCuriosos"],
    tipo: "conjunto_historico",
    radioActivacionMetros: 1800,

    perfil: "cultura",
    prioridad: 85,
    cooldownMin: 40,
    intereses: ["barroco", "industrializacion", "urbanismo", "arquitectura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nuevo-baztan.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nuevo-baztan.png",
  },

  {
    id: "es_mad_patones_arriba",
    nombre: "Patones de Arriba (arquitectura negra)",
    emoji: "🏡",
    lat: 40.8575,
    lng: -3.4852,
    nivel: 3,
    categorias: ["cultura", "arquitectura", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 1800,

    perfil: "parada",
    prioridad: 80,
    cooldownMin: 35,
    intereses: ["arquitectura_negra", "pueblo", "paseo", "foto", "gastronomia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/patones-de-arriba.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/patones-de-arriba.png",
  },

  {
    id: "es_mad_tunel_guadarrama_ave",
    nombre: "Túnel de Guadarrama — el más largo de España (28 km)",
    emoji: "🚇",
    lat: 40.7667,
    lng: -4.0333,
    nivel: 1,
    categorias: ["ingenieria_civil", "tunel", "ave", "record"],
    tipo: "tunel",
    radioActivacionMetros: 8000,

    perfil: "ingenieria",
    prioridad: 98,
    cooldownMin: 65,
    intereses: ["28km_tunel_ferroviario_mas_largo_españa_6o_europa_9o_mundo", "dos_tubos_paralelos_diametro_9_5m", "profundidad_maxima_992m_bajo_sierra", "AVE_madrid_valladolid_1219_millones_euros", "5_tuneladoras_trabajando_simultaneamente", "granito_y_gneis_perforado_con_explosivos_y_TBM"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-guadarrama-el-mas-largo-de-espana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-guadarrama-el-mas-largo-de-espana.png",
  },

  {
    id: "es_mad_bypass_m30",
    nombre: "Bypass Sur M-30 — el mayor túnel urbano de España (7,8 km)",
    emoji: "🚇",
    lat: 40.3878,
    lng: -3.6872,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "urbano", "record"],
    tipo: "tunel",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 85,
    cooldownMin: 58,
    intereses: ["7844m_mayor_tunel_urbano_espana", "dos_tubos_3_carriles_cada_uno_bajo_rio_manzanares", "soterramiento_m30_3900_millones_euros_2007", "transformó_ribera_manzanares_en_parque_madrid_rio", "premio_obra_civil_mejor_mundo_2009_ICE"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bypass-sur-m-30-el-mayor-tunel-urbano-de-espana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bypass-sur-m-30-el-mayor-tunel-urbano-de-espana.png",
  },

  // =====================================================================
  // ================================ TOLEDO =============================
  // =====================================================================

  // ✅ CAPITAL
  {
    id: "es_tol_capital_toledo",
    nombre: "Toledo (capital de provincia)",
    emoji: "🏛️",
    lat: 39.8568,
    lng: -4.0245,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "unesco", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 135,
    cooldownMin: 120,
    intereses: ["unesco", "ciudad_historica", "tres_culturas", "arquitectura", "arte", "sin novedad en el alcazar"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/toledo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_tol_toledo_ciudad_historica",
        "nombre": "Casco histórico de Toledo (UNESCO)",
        "tipo": "ciudad_historica",
        "nivel": 1,
        "lat": 39.8568,
        "lng": -4.0245,
        "radio": 8000
      },
      {
        "id": "es_tol_alcazar_toledo",
        "nombre": "Alcázar de Toledo",
        "tipo": "fortaleza",
        "nivel": 1,
        "lat": 39.8573,
        "lng": -4.0219,
        "radio": 4500
      },
      {
        "id": "es_tol_puente_alcantara",
        "nombre": "Puente de Alcántara",
        "tipo": "puente_romano",
        "nivel": 2,
        "lat": 39.85796,
        "lng": -4.02062,
        "radio": 3000
      },
      {
        "id": "es_tol_puente_san_martin",
        "nombre": "Puente de San Martín",
        "tipo": "puente_medieval",
        "nivel": 2,
        "lat": 39.8589,
        "lng": -4.0331,
        "radio": 2500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/toledo.png",
  },

  {
    id: "es_tol_cerro_calderico_molinos",
    nombre: "Molinos de Consuegra (Cerro Calderico)",
    emoji: "💨",
    lat: 39.4579,
    lng: -3.6075,
    nivel: 1,
    categorias: ["historia", "literatura", "paisaje"],
    tipo: "molinos",
    radioActivacionMetros: 10500,

    perfil: "cultura",
    prioridad: 125,
    cooldownMin: 70,
    intereses: ["molinos", "quijote", "vistas", "paisaje", "viento"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/molinos-de-consuegra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_tol_castillo_consuegra",
        "nombre": "Castillo de Consuegra",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 39.4631,
        "lng": -3.6084,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/molinos-de-consuegra.png",
  },

  {
    id: "es_tol_barrancas_burujon",
    nombre: "Las Barrancas de Burujón",
    emoji: "🏔️",
    lat: 39.8803,
    lng: -4.3497,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "geologia"],
    tipo: "barranco",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 50,
    intereses: ["geologia", "miradores", "foto", "aves", "sendero_corto"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-barrancas-de-burujon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-barrancas-de-burujon.png",
  },

  {
    id: "es_tol_santa_maria_melque",
    nombre: "Santa María de Melque",
    emoji: "🛕",
    lat: 39.6744,
    lng: -4.2486,
    nivel: 2,
    categorias: ["historia", "visigodo"],
    tipo: "ermita",
    radioActivacionMetros: 2500,

    perfil: "historia",
    prioridad: 110,
    cooldownMin: 60,
    intereses: ["visigodo", "religion", "arte", "arquitectura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-maria-de-melque.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-maria-de-melque.png",
  },

  {
    id: "es_tol_montes_toledo",
    nombre: "Montes de Toledo (Puerto del Milagro)",
    emoji: "🏔️",
    lat: 39.5127,
    lng: -4.3216,
    nivel: 2,
    categorias: ["naturaleza", "paisaje"],
    tipo: "montana",
    radioActivacionMetros: 4500,

    perfil: "naturaleza",
    prioridad: 105,
    cooldownMin: 45,
    intereses: ["paisaje", "sierra", "fauna", "senderismo", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montes-de-toledo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montes-de-toledo.png",
  },

  {
    id: "es_tol_castillo_escalona",
    nombre: "Castillo de Escalona",
    emoji: "🏰",
    lat: 40.1677,
    lng: -4.4047,
    nivel: 2,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 3000,

    perfil: "historia",
    prioridad: 105,
    cooldownMin: 45,
    intereses: ["castillo", "tajo", "frontera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-escalona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-escalona.png",
  },

  {
    id: "es_tol_castillo_orgaz",
    nombre: "Castillo de Orgaz",
    emoji: "🏰",
    lat: 39.6473,
    lng: -3.8751,
    nivel: 2,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["castillo", "edad_media", "señorio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-orgaz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-orgaz.png",
  },

  {
    id: "es_tol_talavera_murallas",
    nombre: "Murallas y Torres de Talavera de la Reina",
    emoji: "🧱",
    lat: 39.9614,
    lng: -4.8284,
    nivel: 2,
    categorias: ["historia", "arquitectura"],
    tipo: "muralla",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 95,
    cooldownMin: 45,
    intereses: ["muralla", "defensa", "arquitectura", "ciudad", "Joselito el Gallo", "Cerámica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/murallas-y-torres-de-talavera-de-la-reina.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_tol_basilica_prado",
        "nombre": "Basílica del Prado (Talavera)",
        "tipo": "basilica",
        "nivel": 3,
        "lat": 39.959,
        "lng": -4.8241,
        "radio": 2000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/murallas-y-torres-de-talavera-de-la-reina.png",
  },

  {
    id: "es_tol_torrejon_c_romana",
    nombre: "Villa romana de El Saucedo (Talavera la Nueva)",
    emoji: "🏛️",
    lat: 39.9667,
    lng: -5.0019,
    nivel: 3,
    categorias: ["historia", "romano"],
    tipo: "villa_romana",
    radioActivacionMetros: 2000,

    perfil: "historia",
    prioridad: 85,
    cooldownMin: 45,
    intereses: ["romano", "villa", "mosaicos", "vida_cotidiana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villa-romana-de-el-saucedo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villa-romana-de-el-saucedo.png",
  },

  {
    id: "es_tol_castillo_dos_hermanas",
    nombre: "Castillo de Dos Hermanas (Navahermosa)",
    emoji: "🏰",
    lat: 39.5985,
    lng: -4.5763,
    nivel: 3,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 2000,

    perfil: "historia",
    prioridad: 80,
    cooldownMin: 35,
    intereses: ["castillo", "edad_media"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-dos-hermanas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-dos-hermanas.png",
  },

  {
    id: "es_tol_cuevas_huecas",
    nombre: "Cuevas y ermitas rupestres de Huecas",
    emoji: "🕳️",
    lat: 39.9701,
    lng: -4.1711,
    nivel: 3,
    categorias: ["historia", "arqueologia"],
    tipo: "cuevas",
    radioActivacionMetros: 2000,

    perfil: "historia",
    prioridad: 80,
    cooldownMin: 45,
    intereses: ["arqueologia", "rupestre", "cuevas", "religion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuevas-y-ermitas-rupestres-de-huecas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuevas-y-ermitas-rupestres-de-huecas.png",
  },

  {
    id: "es_tol_malpica_castillo",
    nombre: "Castillo de Malpica de Tajo",
    emoji: "🏰",
    lat: 39.8948,
    lng: -4.6561,
    nivel: 3,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 2000,

    perfil: "historia",
    prioridad: 80,
    cooldownMin: 35,
    intereses: ["castillo", "tajo", "edad_media"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-malpica-de-tajo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-malpica-de-tajo.png",
  },

  {
    id: "es_tol_belmonte_san_jose",
    nombre: "Castillo de San José (Belvís de la Jara)",
    emoji: "🏰",
    lat: 39.7609,
    lng: -4.9463,
    nivel: 3,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 2000,

    perfil: "historia",
    prioridad: 80,
    cooldownMin: 35,
    intereses: ["castillo", "edad_media"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-san-jose.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-san-jose.png",
  },

  {
    id: "es_tol_yebenes_cueva",
    nombre: "Cuevas del Chiquero (Los Yébenes)",
    emoji: "🕳️",
    lat: 39.5113,
    lng: -3.8952,
    nivel: 3,
    categorias: ["prehistoria", "arqueologia"],
    tipo: "cueva",
    radioActivacionMetros: 1500,

    perfil: "historia",
    prioridad: 75,
    cooldownMin: 45,
    intereses: ["prehistoria", "cuevas", "arqueologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuevas-del-chiquero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuevas-del-chiquero.png",
  },

  {
    id: "es_tol_camunas_tamborada",
    nombre: "Museo del Pecado Mortal (Camuñas)",
    emoji: "🖼️",
    lat: 39.4326,
    lng: -3.4551,
    nivel: 3,
    categorias: ["cultura", "tradicion", "curiosidades"],
    tipo: "museo",
    radioActivacionMetros: 1500,

    perfil: "cultura",
    prioridad: 75,
    cooldownMin: 45,
    intereses: ["tradiciones", "museo", "curiosidades", "cultura_local"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/museo-del-pecado-mortal.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/museo-del-pecado-mortal.png",
  },

  // =====================================================================
  // ================================ CIUDAD REAL =============================
  // =====================================================================

  {
    id: "es_cr_parque_cabaneros",
    nombre: "Parque Nacional de Cabañeros (acceso sur)",
    emoji: "🌲",
    lat: 39.3087,
    lng: -4.4571,
    nivel: 1,
    categorias: ["naturaleza", "fauna", "parque_nacional"],
    tipo: "parque_nacional",
    radioActivacionMetros: 12000,

    perfil: "naturaleza",
    prioridad: 125,
    cooldownMin: 60,
    intereses: ["fauna", "berrea", "observacion", "paisaje", "senderismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-cabaneros.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-cabaneros.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cr_capital_ciudad_real",
    nombre: "Ciudad Real (capital de provincia)",
    emoji: "🏛️",
    lat: 38.9848,
    lng: -3.927,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "datosCuriosos"],
    tipo: "capital_provincia",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 125,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "cultura", "mancha"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-real.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cr_campo_calatrava_volcanes",
        "nombre": "Campo de Calatrava (zona volcánica y maares)",
        "tipo": "paisaje_volcanico",
        "nivel": 2,
        "lat": 38.946,
        "lng": -3.9,
        "radio": 9000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-real.png",
  },

  {
    id: "es_cr_tablas_daimiel",
    nombre: "Parque Nacional de Las Tablas de Daimiel",
    emoji: "🌲",
    lat: 39.1451,
    lng: -3.687,
    nivel: 1,
    categorias: ["naturaleza", "aves", "humedal", "unesco"],
    tipo: "parque_nacional",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 125,
    cooldownMin: 60,
    intereses: ["humedal", "aves", "observacion", "sendero", "ecosistema"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-las-tablas-de-daimiel.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-las-tablas-de-daimiel.png",
  },

  {
    id: "es_cr_almagro_plaza_mayor",
    nombre: "Almagro y su Plaza Mayor / Corral de Comedias",
    emoji: "🏰",
    lat: 38.8894,
    lng: -3.7068,
    nivel: 1,
    categorias: ["historia", "teatro", "arquitectura", "pueblo"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6000,

    perfil: "parada",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["teatro", "corral_de_comedias", "arquitectura", "pueblo", "plan_cultural"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almagro-y-su-plaza-mayor-corral-de-comedias.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cr_orden_calatrava_contexto",
        "nombre": "Orden de Calatrava (historia militar de la zona)",
        "tipo": "contexto_historico",
        "nivel": 3,
        "lat": 38.8894,
        "lng": -3.7068,
        "radio": 8000
      },
      {
        "id": "es_cr_castillo_dona_berenguela",
        "nombre": "Castillo de Doña Berenguela (Bolaños de Calatrava)",
        "tipo": "castillo",
        "nivel": 3,
        "lat": 38.9063,
        "lng": -3.6675,
        "radio": 4000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almagro-y-su-plaza-mayor-corral-de-comedias.png",
  },

  {
    id: "es_cr_calatrava_nueva",
    nombre: "Castillo de Calatrava la Nueva",
    emoji: "🏰",
    lat: 38.7956,
    lng: -3.8236,
    nivel: 2,
    categorias: ["historia", "castillos", "ordenes_militares"],
    tipo: "castillo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["ordenes_militares", "castillo", "defensa", "reconquista"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-calatrava-la-nueva.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-calatrava-la-nueva.png",
  },

  {
    id: "es_cr_lagunas_ruidera",
    nombre: "Parque Natural de las Lagunas de Ruidera",
    emoji: "🌿",
    lat: 38.951,
    lng: -2.89,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "agua"],
    tipo: "parque_natural",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 115,
    cooldownMin: 60,
    intereses: ["lagunas", "agua", "rutas", "baño", "fauna", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-las-lagunas-de-ruidera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-las-lagunas-de-ruidera.png",
  },

  {
    id: "es_cr_puerto_lapice_venta",
    nombre: "Puerto Lápice (ventas cervantinas y paso de la A4)",
    emoji: "🏰",
    lat: 39.3244,
    lng: -3.4827,
    nivel: 2,
    categorias: ["historia", "cervantes", "pueblo", "datosCuriosos"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6000,

    perfil: "parada",
    prioridad: 110,
    cooldownMin: 60,
    intereses: ["quijote", "ventas", "cervantes", "pueblo", "parada_viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-lapice.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-lapice.png",
  },

  {
    id: "es_cr_valdepenas_vino",
    nombre: "Valdepeñas (tierra de vino y batallas napoleónicas)",
    emoji: "🏙️",
    lat: 38.7621,
    lng: -3.3843,
    nivel: 2,
    categorias: ["historia", "vino", "cultura", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "parada",
    prioridad: 105,
    cooldownMin: 50,
    intereses: ["vino", "cultura_local", "gastronomia", "historia_napoleonica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valdepenas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valdepenas.png",
  },

  {
    id: "es_cr_villanueva_infantes",
    nombre: "Villanueva de los Infantes (corazón histórico de La Mancha)",
    emoji: "🏰",
    lat: 38.7373,
    lng: -3.0132,
    nivel: 2,
    categorias: ["historia", "pueblo", "cultura"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6000,

    perfil: "parada",
    prioridad: 100,
    cooldownMin: 60,
    intereses: ["pueblo", "patrimonio", "mancha", "plan_paseo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villanueva-de-los-infantes.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villanueva-de-los-infantes.png",
  },

  {
    id: "es_cr_manzanares_ciudad",
    nombre: "Manzanares (cruce histórico de la A4)",
    emoji: "🏙️",
    lat: 38.9993,
    lng: -3.3694,
    nivel: 2,
    categorias: ["historia", "mancha", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 60,
    intereses: ["mancha", "rutas", "comunicaciones", "historia_local"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/manzanares.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/manzanares.png",
  },

  {
    id: "es_cr_motilla_azuer",
    nombre: "Motilla del Azuer (prehistoria en La Mancha)",
    emoji: "⛏️",
    lat: 39.034,
    lng: -3.5111,
    nivel: 3,
    categorias: ["prehistoria", "arqueologia", "datosCuriosos"],
    tipo: "yacimiento",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 90,
    cooldownMin: 90,
    intereses: ["prehistoria", "arqueologia", "yacimiento", "agua", "ingenieria_antigua"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/motilla-del-azuer.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/motilla-del-azuer.png",
  },

  {
    id: "es_cr_viso_marques_santa_cruz",
    nombre: "Palacio del Marqués de Santa Cruz (Viso del Marqués)",
    emoji: "🏯",
    lat: 38.523,
    lng: -3.5619,
    nivel: 3,
    categorias: ["historia", "arquitectura", "renacimiento"],
    tipo: "palacio",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 60,
    intereses: ["renacimiento", "arte", "arquitectura", "palacio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/palacio-del-marques-de-santa-cruz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/palacio-del-marques-de-santa-cruz.png",
  },

  {
    id: "es_cr_puertollano_mineria",
    nombre: "Puertollano (minería e industria histórica)",
    emoji: "🏭",
    lat: 38.6879,
    lng: -4.1123,
    nivel: 3,
    categorias: ["historia", "industria", "datosCuriosos"],
    tipo: "ciudad_industrial",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 85,
    cooldownMin: 60,
    intereses: ["industria", "mineria", "historia_economica", "siglo_xix_xx"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puertollano.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puertollano.png",
  },

  {
    id: "es_cr_minas_almaden",
    nombre: "Minas de Almadén — mayor yacimiento mercurio del mundo",
    emoji: "⛏️",
    lat: 38.7742,
    lng: -4.8356,
    nivel: 1,
    categorias: ["ingenieria_civil", "mineria", "unesco", "mercurio"],
    tipo: "mina",
    radioActivacionMetros: 3500,

    perfil: "ingenieria",
    prioridad: 92,
    cooldownMin: 65,
    intereses: ["mayor_yacimiento_mercurio_mundo_2000_años_explotacion", "patrimonio_humanidad_unesco_2012", "mercurio_financiaba_extraccion_plata_potosi_bolivia", "teatro_minero_siglo_XVIII_dentro_mina", "esclavos_romanos_y_presos_trabajaban_en_ella"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minas-de-almaden-mayor-yacimiento-mercurio-del-mundo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minas-de-almaden-mayor-yacimiento-mercurio-del-mundo.png",
  },

  // =====================================================================
  // ================================ JAÉN =============================
  // =====================================================================

  {
    id: "es_ja_navas_tolosa_batalla",
    nombre: "Las Navas de Tolosa (batalla de 1212)",
    emoji: "⚔️",
    lat: 38.3053,
    lng: -3.3437,
    nivel: 1,
    categorias: ["historia", "batallas", "reconquista", "datosCuriosos"],
    tipo: "campo_batalla",
    radioActivacionMetros: 8000,

    perfil: "historia",
    prioridad: 160,
    cooldownMin: 180,
    intereses: ["reconquista", "batalla", "terreno", "logistica", "consecuencias"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-navas-de-tolosa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-navas-de-tolosa.png",
  },

  {
    id: "es_ja_bailen_batalla",
    nombre: "Bailén (batalla de 1808 contra Napoleón)",
    emoji: "⚔️",
    lat: 38.0962,
    lng: -3.775,
    nivel: 1,
    categorias: ["historia", "batallas", "datosCuriosos"],
    tipo: "ciudad_batalla",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 150,
    cooldownMin: 120,
    intereses: ["guerra_independencia", "batalla", "consecuencias", "logistica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bailen.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bailen.png",
  },

  {
    id: "es_ja_baeza_renacimiento",
    nombre: "Baeza (Renacimiento, UNESCO)",
    emoji: "🏰",
    lat: 37.993,
    lng: -3.4689,
    nivel: 1,
    categorias: ["historia", "unesco", "arquitectura", "renacimiento"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 140,
    cooldownMin: 120,
    intereses: ["renacimiento", "unesco", "arquitectura", "arte", "historia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baeza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baeza.png",
  },

  {
    id: "es_ja_ubeda_renacimiento",
    nombre: "Úbeda (Renacimiento, UNESCO)",
    emoji: "🏰",
    lat: 38.011,
    lng: -3.371,
    nivel: 1,
    categorias: ["historia", "unesco", "arquitectura", "renacimiento"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 140,
    cooldownMin: 120,
    intereses: ["renacimiento", "unesco", "arquitectura", "arte", "urbanismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ubeda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ubeda.png",
  },

  {
    id: "es_ja_cazorla_parque_natural",
    nombre: "Parque Natural Sierras de Cazorla, Segura y Las Villas",
    emoji: "🌿",
    lat: 37.91,
    lng: -2.93,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "fauna", "parque_natural"],
    tipo: "parque_natural",
    radioActivacionMetros: 15000,

    perfil: "naturaleza",
    prioridad: 130,
    cooldownMin: 90,
    intereses: ["fauna", "senderismo", "ríos", "bosques", "miradores", "naturaleza"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-sierras-de-cazorla-segura-y-las-villas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-sierras-de-cazorla-segura-y-las-villas.png",
  },

  {
    id: "es_ja_despenaperros",
    nombre: "Parque Natural de Despeñaperros (puerta de Andalucía)",
    emoji: "🌿",
    lat: 38.399,
    lng: -3.49,
    nivel: 1,
    categorias: ["naturaleza", "geologia", "paisaje", "historia"],
    tipo: "parque_natural",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 130,
    cooldownMin: 60,
    intereses: ["geologia", "desfiladero", "paisaje", "paso_natural", "fauna", "rutas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-despenaperros.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-despenaperros.png",
  },

  // ✅ CAPITAL
  {
    id: "es_ja_capital_jaen",
    nombre: "Jaén (capital de provincia)",
    emoji: "🏛️",
    lat: 37.7796,
    lng: -3.7849,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "aceite"],
    tipo: "capital_provincia",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 125,
    cooldownMin: 120,
    intereses: ["aceite", "cultura", "historia_urbana", "capitalidad"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jaen.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ja_castillo_santa_catalina",
        "nombre": "Castillo de Santa Catalina (Jaén)",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 37.7654,
        "lng": -3.7922,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jaen.png",
  },

  {
    id: "es_ja_banos_encina_castillo",
    nombre: "Baños de la Encina y Castillo de Burgalimar",
    emoji: "🏰",
    lat: 38.1735,
    lng: -3.7746,
    nivel: 2,
    categorias: ["historia", "castillos", "pueblo"],
    tipo: "castillo",
    radioActivacionMetros: 6000,

    perfil: "parada",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["castillo", "pueblo", "edad_media", "plan_visita"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/banos-de-la-encina-y-castillo-de-burgalimar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/banos-de-la-encina-y-castillo-de-burgalimar.png",
  },

  {
    id: "es_ja_martos_pena",
    nombre: "Martos y la Peña (torreones y frontera medieval)",
    emoji: "🔭",
    lat: 37.721,
    lng: -3.967,
    nivel: 2,
    categorias: ["historia", "castillos", "paisaje"],
    tipo: "ciudad_mirador",
    radioActivacionMetros: 7000,

    perfil: "parada",
    prioridad: 110,
    cooldownMin: 90,
    intereses: ["mirador", "frontera_medieval", "paisaje", "castillos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/martos-y-la-pena.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/martos-y-la-pena.png",
  },

  {
    id: "es_ja_carolina_nuevas_poblaciones",
    nombre: "La Carolina (Nuevas Poblaciones de Sierra Morena)",
    emoji: "🏙️",
    lat: 38.2752,
    lng: -3.6178,
    nivel: 2,
    categorias: ["historia", "ilustracion", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 110,
    cooldownMin: 90,
    intereses: ["ilustracion", "poblamiento", "reformas", "siglo_xviii"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-carolina.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-carolina.png",
  },

  {
    id: "es_ja_linares_minas",
    nombre: "Linares (minería histórica y patrimonio industrial)",
    emoji: "🏭",
    lat: 38.095,
    lng: -3.636,
    nivel: 2,
    categorias: ["historia", "industria", "mineria", "datosCuriosos"],
    tipo: "ciudad_industrial",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 100,
    cooldownMin: 90,
    intereses: ["mineria", "industria", "patrimonio", "siglo_xix_xx"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/linares.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/linares.png",
  },

  {
    id: "es_ja_andujar_santuario_cabeza",
    nombre: "Andújar y Santuario de la Virgen de la Cabeza",
    emoji: "🕍",
    lat: 38.039,
    lng: -4.054,
    nivel: 3,
    categorias: ["historia", "religion", "naturaleza"],
    tipo: "santuario",
    radioActivacionMetros: 8000,

    perfil: "parada",
    prioridad: 95,
    cooldownMin: 90,
    intereses: ["religion", "santuario", "paisaje", "romeria", "rutas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/andujar-y-santuario-de-la-virgen-de-la-cabeza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/andujar-y-santuario-de-la-virgen-de-la-cabeza.png",
  },

  {
    id: "es_ja_arjona_historia_almohade",
    nombre: "Arjona (orígenes íberos y época almohade)",
    emoji: "🏰",
    lat: 37.9355,
    lng: -4.0552,
    nivel: 3,
    categorias: ["historia", "arqueologia", "datosCuriosos"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 95,
    cooldownMin: 120,
    intereses: ["iberos", "andalusi", "arqueologia", "contexto"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arjona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arjona.png",
  },

  {
    id: "es_ja_mar_de_olivos",
    nombre: "Mar de olivos (paisaje del aceite de Jaén)",
    emoji: "🌄",
    lat: 38,
    lng: -3.8,
    nivel: 3,
    categorias: ["paisaje", "datosCuriosos", "cultura", "aceite"],
    tipo: "paisaje_cultural",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 85,
    cooldownMin: 90,
    intereses: ["aceite", "paisaje", "agricultura", "cultura_local"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mar-de-olivos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mar-de-olivos.png",
  },

  {
    id: "es_jaen_tunel_despeñaperros_ferroviario",
    nombre: "Paso ferroviario de Despeñaperros — vía de Alta Velocidad",
    emoji: "🚇",
    lat: 38.3967,
    lng: -3.5178,
    nivel: 2,
    categorias: ["ingenieria_civil", "ferroviaria", "tunel", "alta_velocidad"],
    tipo: "tunel",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 70,
    cooldownMin: 50,
    intereses: ["tunel_AVE_mas_largo_españa_8_km_bajo_sierra_morena", "desnivel_400m_resuelto_en_8km", "geologia_cuarcita_y_pizarra_muy_dura_perforacion_TBM", "separa_meseta_castellana_de_andalucia", "infraestructura_clave_madrid_sevilla_bajo_30_min"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/paso-ferroviario-de-despenaperros-via-de-alta-velocidad.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/paso-ferroviario-de-despenaperros-via-de-alta-velocidad.png",
  },

  {
    id: "es_jaen_tunel_espeluy_ave",
    nombre: "Túnel de Despeñaperros AVE — Sierra Morena perforada",
    emoji: "🚇",
    lat: 38.3967,
    lng: -3.5178,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "ave", "sierra_morena"],
    tipo: "tunel",
    radioActivacionMetros: 5000,

    perfil: "ingenieria",
    prioridad: 80,
    cooldownMin: 55,
    intereses: ["7_8km_tunel_sierra_morena_linea_AVE_madrid_sevilla", "cuarcita_y_pizarra_paleozoica_extremadamente_dura", "soluciona_el_mayor_obstaculo_orografico_entre_meseta_y_andalucia", "inaugurado_1992_expo_sevilla", "pendiente_maxima_25_por_mil"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-despenaperros-ave-sierra-morena-perforada.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-despenaperros-ave-sierra-morena-perforada.png",
  },

  // =====================================================================
  // ================================ GRANADA =============================
  // =====================================================================

  {
    id: "es_gr_sierra_nevada",
    nombre: "Sierra Nevada (acceso Pradollano)",
    emoji: "🌿",
    lat: 37.095,
    lng: -3.394,
    nivel: 1,
    categorias: ["naturaleza", "montaña", "paisaje", "datosCuriosos"],
    tipo: "parque_natural",
    radioActivacionMetros: 12000,

    perfil: "naturaleza",
    prioridad: 140,
    cooldownMin: 90,
    intereses: ["montaña", "senderismo", "nieve", "vistas", "fauna", "altitud"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sierra-nevada.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sierra-nevada.png",
  },

  // ✅ CAPITAL
  {
    id: "es_gr_capital_granada",
    nombre: "Granada (capital de provincia)",
    emoji: "🏛️",
    lat: 37.1773,
    lng: -3.5986,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "datosCuriosos"],
    tipo: "capital_provincia",
    radioActivacionMetros: 11000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["reino_nazari", "renacimiento", "cultura", "historia_urbana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/granada.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gr_alhambra",
        "nombre": "La Alhambra y Generalife",
        "tipo": "monumento_unesco",
        "nivel": 1,
        "lat": 37.1761,
        "lng": -3.5881,
        "radio": 7000
      },
      {
        "id": "es_gr_catedral_capilla_real",
        "nombre": "Catedral y Capilla Real (Reyes Católicos)",
        "tipo": "catedral",
        "nivel": 1,
        "lat": 37.1764,
        "lng": -3.5995,
        "radio": 6000
      },
      {
        "id": "es_gr_albaicin_san_nicolas",
        "nombre": "Albaicín y Mirador de San Nicolás",
        "tipo": "barrio_mirador",
        "nivel": 2,
        "lat": 37.1806,
        "lng": -3.594,
        "radio": 5000
      },
      {
        "id": "es_gr_sacromonte_cuevas",
        "nombre": "Sacromonte (cuevas y cultura gitana)",
        "tipo": "barrio_historico",
        "nivel": 2,
        "lat": 37.1835,
        "lng": -3.5858,
        "radio": 6000
      },
      {
        "id": "es_gr_reino_nazari_contexto",
        "nombre": "Reino Nazarí de Granada (contexto histórico)",
        "tipo": "contexto_historico",
        "nivel": 3,
        "lat": 37.1773,
        "lng": -3.5986,
        "radio": 10000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/granada.png",
  },

  {
    id: "es_gr_suspiro_moro",
    nombre: "Puerto del Suspiro del Moro (última mirada de Boabdil)",
    emoji: "⛰️",
    lat: 37.0151,
    lng: -3.6005,
    nivel: 2,
    categorias: ["historia", "reconquista", "paisaje"],
    tipo: "puerto_montana",
    radioActivacionMetros: 9000,

    perfil: "historia",
    prioridad: 135,
    cooldownMin: 120,
    intereses: ["reconquista", "boabdil", "paso_montana", "paisaje", "cronica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-del-suspiro-del-moro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-del-suspiro-del-moro.png",
  },

  {
    id: "es_gr_alpujarras_lanjaron",
    nombre: "Las Alpujarras y Lanjarón (paisaje morisco)",
    emoji: "🗺️",
    lat: 36.9194,
    lng: -3.4802,
    nivel: 2,
    categorias: ["historia", "paisaje", "naturaleza"],
    tipo: "comarca",
    radioActivacionMetros: 12000,

    perfil: "parada",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["paisaje", "rutas", "pueblos", "agua", "historia_morisca"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-alpujarras-y-lanjaron.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gr_velez_benaudalla_valle",
        "nombre": "Vélez de Benaudalla (valle camino de la costa)",
        "tipo": "pueblo_valle",
        "nivel": 3,
        "lat": 36.8338,
        "lng": -3.5169,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-alpujarras-y-lanjaron.png",
  },

  {
    id: "es_gr_guadix_cuevas",
    nombre: "Guadix (catedral y cuevas habitadas)",
    emoji: "🏰",
    lat: 37.3,
    lng: -3.134,
    nivel: 2,
    categorias: ["historia", "arquitectura", "datosCuriosos"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8000,

    perfil: "parada",
    prioridad: 110,
    cooldownMin: 90,
    intereses: ["cuevas", "arquitectura", "catedral", "plan_visita"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guadix.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guadix.png",
  },

  {
    id: "es_gr_moclin_castillo",
    nombre: "Moclín (castillo de frontera nazarí)",
    emoji: "🏰",
    lat: 37.3423,
    lng: -3.7861,
    nivel: 3,
    categorias: ["historia", "castillos", "frontera_nazari"],
    tipo: "castillo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 95,
    cooldownMin: 90,
    intereses: ["frontera_nazari", "castillo", "vigilancia", "edad_media"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/moclin.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/moclin.png",
  },

  {
    id: "es_gr_fuente_vaqueros_lorca",
    nombre: "Fuente Vaqueros (cuna de Federico García Lorca)",
    emoji: "🏡",
    lat: 37.2199,
    lng: -3.7856,
    nivel: 3,
    categorias: ["historia", "literatura", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 90,
    intereses: ["lorca", "literatura", "cultura", "pueblo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuente-vaqueros.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuente-vaqueros.png",
  },

  {
    id: "es_gr_loja_paso_historico",
    nombre: "Loja (puerta occidental de Granada)",
    emoji: "🏙️",
    lat: 37.168,
    lng: -4.151,
    nivel: 3,
    categorias: ["historia", "ciudad", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 90,
    cooldownMin: 90,
    intereses: ["frontera", "reconquista", "ruta", "ciudad"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/loja.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/loja.png",
  },

  // =====================================================================
  // ================================ OTROS =============================
  // =====================================================================

  // ✅ CAPITAL
  {
    id: "es_alm_capital_almeria",
    nombre: "Almería (capital mediterránea del sureste andaluz)",
    emoji: "🏛️",
    lat: 36.834,
    lng: -2.4637,
    nivel: 1,
    categorias: ["historia", "capital", "mar", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 9500,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 90,
    intereses: ["a7", "puerto", "mediterraneo", "alcazaba", "sureste"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almeria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_alm_alcazaba",
        "nombre": "Alcazaba de Almería",
        "tipo": "alcazaba",
        "nivel": 1,
        "lat": 36.841,
        "lng": -2.467,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almeria.png",
  },

  {
    id: "es_alm_cabo_gata",
    nombre: "Cabo de Gata (volcanes y costa árida singular)",
    emoji: "🌿",
    lat: 36.766,
    lng: -2.236,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "mar"],
    tipo: "parque_natural",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 134,
    cooldownMin: 85,
    intereses: ["volcanismo", "parque_natural", "calas", "aridez", "mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabo-de-gata.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabo-de-gata.png",
  },

  {
    id: "es_alm_desierto_tabernas",
    nombre: "Desierto de Tabernas (paisaje semiárido único en Europa)",
    emoji: "🏜️",
    lat: 37.046,
    lng: -2.39,
    nivel: 1,
    categorias: ["naturaleza", "geologia", "paisaje", "datosCuriosos"],
    tipo: "desierto",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 132,
    cooldownMin: 80,
    intereses: ["badlands", "aridez", "rodajes", "ramblas", "a92"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/desierto-de-tabernas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_alm_oasys_minihollywood",
        "nombre": "Oasys MiniHollywood (cine del oeste en pleno desierto)",
        "tipo": "parque_tematizado",
        "nivel": 2,
        "lat": 37.005,
        "lng": -2.377,
        "radio": 5000
      },
      {
        "id": "es_alm_tabernas",
        "nombre": "Tabernas (pueblo del desierto y cruce interior)",
        "tipo": "pueblo",
        "nivel": 2,
        "lat": 37.05,
        "lng": -2.39,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/desierto-de-tabernas.png",
  },

  {
    id: "es_alm_karst_sorbas",
    nombre: "Karst en Yesos de Sorbas",
    emoji: "🪨",
    lat: 37.1,
    lng: -2.065,
    nivel: 1,
    categorias: ["naturaleza", "geologia", "datosCuriosos"],
    tipo: "karst",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 126,
    cooldownMin: 75,
    intereses: ["yesos", "cuevas", "karst", "geologia", "sorbas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/karst-en-yesos-de-sorbas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_alm_sorbas",
        "nombre": "Sorbas (pueblo suspendido sobre el barranco)",
        "tipo": "pueblo_historico",
        "nivel": 2,
        "lat": 37.098,
        "lng": -2.126,
        "radio": 5500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/karst-en-yesos-de-sorbas.png",
  },

  {
    id: "es_alm_playa_muertos",
    nombre: "Playa de los Muertos (gran icono paisajístico del levante)",
    emoji: "🏖️",
    lat: 36.951,
    lng: -1.899,
    nivel: 1,
    categorias: ["naturaleza", "mar", "paisaje"],
    tipo: "playa",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 124,
    cooldownMin: 75,
    intereses: ["acantilados", "agua_clara", "cabo_de_gata", "sendero", "mirador"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/playa-de-los-muertos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/playa-de-los-muertos.png",
  },

  {
    id: "es_alm_mojacar",
    nombre: "Mojácar (pueblo blanco del levante almeriense)",
    emoji: "🏰",
    lat: 37.14,
    lng: -1.851,
    nivel: 1,
    categorias: ["historia", "pueblo", "mar", "paisaje"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 122,
    cooldownMin: 80,
    intereses: ["a7", "levante", "pueblo_blanco", "miradores", "costa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mojacar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mojacar.png",
  },

  {
    id: "es_alm_velez_blanco",
    nombre: "Vélez-Blanco y castillo de los Fajardo",
    emoji: "🏰",
    lat: 37.691,
    lng: -2.095,
    nivel: 1,
    categorias: ["historia", "castillos", "paisaje"],
    tipo: "villa_historica",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 75,
    intereses: ["castillo", "los_veles", "marmol", "a92", "renacimiento"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/velez-blanco-y-castillo-de-los-fajardo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_alm_velez_rubio",
        "nombre": "Vélez-Rubio (puerta norte de la A-92 hacia Murcia)",
        "tipo": "ciudad_historica",
        "nivel": 2,
        "lat": 37.648,
        "lng": -2.073,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/velez-blanco-y-castillo-de-los-fajardo.png",
  },

  {
    id: "es_alm_san_jose",
    nombre: "San José (puerto y base costera del Cabo de Gata)",
    emoji: "🐚",
    lat: 36.765,
    lng: -2.108,
    nivel: 2,
    categorias: ["mar", "naturaleza", "ruta"],
    tipo: "nucleo_costero",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 106,
    cooldownMin: 70,
    intereses: ["cabo_de_gata", "calas", "puerto", "a7", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-jose.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-jose.png",
  },

  {
    id: "es_alm_roquetas_mar",
    nombre: "Roquetas de Mar (gran acceso occidental del litoral)",
    emoji: "⚓",
    lat: 36.764,
    lng: -2.614,
    nivel: 2,
    categorias: ["mar", "ciudad", "ruta"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 70,
    intereses: ["a7", "poniente", "litoral", "invernaderos", "mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/roquetas-de-mar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/roquetas-de-mar.png",
  },

  {
    id: "es_alm_nijar",
    nombre: "Níjar (cerámica y puerta interior del parque)",
    emoji: "🏡",
    lat: 36.966,
    lng: -2.206,
    nivel: 2,
    categorias: ["cultura", "pueblo", "ruta"],
    tipo: "villa",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 70,
    intereses: ["ceramica", "cabo_de_gata", "a7", "artesania", "sierra_alhamilla"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nijar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nijar.png",
  },

  {
    id: "es_alm_cuevas_almanzora",
    nombre: "Cuevas del Almanzora (valle, castillo y río)",
    emoji: "🏰",
    lat: 37.296,
    lng: -1.879,
    nivel: 2,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 104,
    cooldownMin: 70,
    intereses: ["almanzora", "castillo", "a7", "levante", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuevas-del-almanzora.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuevas-del-almanzora.png",
  },

  {
    id: "es_alm_carboneras",
    nombre: "Carboneras (bahía industrial y marinera del Levante)",
    emoji: "⚓",
    lat: 36.998,
    lng: -1.893,
    nivel: 2,
    categorias: ["mar", "historia", "ruta"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 102,
    cooldownMin: 70,
    intereses: ["a7", "levante", "puerto", "cabo_de_gata", "litoral"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/carboneras.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/carboneras.png",
  },

  {
    id: "es_alm_vera",
    nombre: "Vera (cruce histórico del levante)",
    emoji: "🏙️",
    lat: 37.246,
    lng: -1.869,
    nivel: 2,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 102,
    cooldownMin: 70,
    intereses: ["a7", "levante", "costa", "interior", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vera.png",
  },

  {
    id: "es_alm_huercal_overa",
    nombre: "Huércal-Overa (bisagra entre Andalucía y el sureste peninsular)",
    emoji: "🏙️",
    lat: 37.39,
    lng: -1.943,
    nivel: 2,
    categorias: ["ruta", "ciudad", "historia"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 100,
    cooldownMin: 70,
    intereses: ["a7", "a91", "corredor_levantino", "almanzora", "transito"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/huercal-overa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/huercal-overa.png",
  },

  {
    id: "es_alm_gergal",
    nombre: "Gérgal (puerto serrano entre la A-92 y la alta montaña)",
    emoji: "🏡",
    lat: 37.12,
    lng: -2.54,
    nivel: 3,
    categorias: ["ruta", "pueblo", "paisaje"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 86,
    cooldownMin: 60,
    intereses: ["a92", "sierra_filabres", "puerto", "viaje", "estepa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/gergal.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/gergal.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cad_capital_cadiz",
    nombre: "Cádiz (capital atlántica y extremo histórico de la bahía)",
    emoji: "🏛️",
    lat: 36.5271,
    lng: -6.2886,
    nivel: 1,
    categorias: ["historia", "capital", "mar", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 140,
    cooldownMin: 95,
    intereses: ["constitucion_1812", "bahia", "fenicios", "roma", "puerto"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cadiz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cad_catedral_cadiz",
        "nombre": "Catedral de Cádiz",
        "tipo": "catedral",
        "nivel": 1,
        "lat": 36.5299,
        "lng": -6.2944,
        "radio": 4500
      },
      {
        "id": "es_cad_puerto_santa_maria",
        "nombre": "El Puerto de Santa María (estuario, bodegas y salida a la costa)",
        "tipo": "ciudad_historica",
        "nivel": 1,
        "lat": 36.5964,
        "lng": -6.2329,
        "radio": 7000
      },
      {
        "id": "es_cad_puerto_real",
        "nombre": "Puerto Real (puerta de la Bahía desde la AP-4)",
        "tipo": "ciudad",
        "nivel": 2,
        "lat": 36.5282,
        "lng": -6.1901,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cadiz.png",
  },

  {
    id: "es_cad_jerez_frontera",
    nombre: "Jerez de la Frontera (gran nudo histórico del oeste andaluz)",
    emoji: "🏰",
    lat: 36.68645,
    lng: -6.13606,
    nivel: 1,
    categorias: ["historia", "ciudad", "cultura", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 136,
    cooldownMin: 90,
    intereses: ["ap4", "a4", "a382", "vino", "flamenco", "caballos", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jerez-de-la-frontera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cad_alcazar_jerez",
        "nombre": "Alcázar de Jerez",
        "tipo": "alcazar",
        "nivel": 1,
        "lat": 36.6803,
        "lng": -6.1377,
        "radio": 5000
      },
      {
        "id": "es_cad_cartuja_jerez",
        "nombre": "Cartuja de Jerez (monasterio en la salida norte)",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 36.7076,
        "lng": -6.1609,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jerez-de-la-frontera.png",
  },

  {
    id: "es_cad_baelo_claudia",
    nombre: "Baelo Claudia (ruinas romanas frente al Estrecho)",
    emoji: "🏛️",
    lat: 36.0899,
    lng: -5.7784,
    nivel: 1,
    categorias: ["historia", "roma", "arqueologia", "mar"],
    tipo: "yacimiento_romano",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 132,
    cooldownMin: 85,
    intereses: ["roma", "garum", "bolonia", "estrecho", "arqueologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baelo-claudia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baelo-claudia.png",
  },

  {
    id: "es_cad_arcos_frontera",
    nombre: "Arcos de la Frontera (balcón blanco sobre la campiña)",
    emoji: "🏰",
    lat: 36.7508,
    lng: -5.8107,
    nivel: 1,
    categorias: ["historia", "pueblo", "paisaje", "ruta"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 130,
    cooldownMin: 85,
    intereses: ["a382", "pueblos_blancos", "miradores", "campina", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arcos-de-la-frontera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arcos-de-la-frontera.png",
  },

  {
    id: "es_cad_tarifa",
    nombre: "Tarifa (puerta del Estrecho y viento del sur)",
    emoji: "⚓",
    lat: 36.0143,
    lng: -5.6044,
    nivel: 1,
    categorias: ["naturaleza", "mar", "historia", "ruta"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 128,
    cooldownMin: 85,
    intereses: ["estrecho", "viento", "africa", "murallas", "a7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarifa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarifa.png",
  },

  {
    id: "es_cad_algeciras",
    nombre: "Algeciras (gran puerto entre Mediterráneo y Atlántico)",
    emoji: "🚢",
    lat: 36.1408,
    lng: -5.4562,
    nivel: 1,
    categorias: ["ruta", "ciudad", "mar", "ingenieria"],
    tipo: "ciudad_portuaria",
    radioActivacionMetros: 8500,

    perfil: "historia",
    prioridad: 126,
    cooldownMin: 85,
    intereses: ["puerto", "a7", "estrecho", "logistica", "gibraltar"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/algeciras.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cad_los_barrios",
        "nombre": "Los Barrios (bisagra de la A-381 hacia Jerez y la bahía)",
        "tipo": "ciudad",
        "nivel": 3,
        "lat": 36.1847,
        "lng": -5.4921,
        "radio": 5500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/algeciras.png",
  },

  {
    id: "es_cad_medina_sidonia",
    nombre: "Medina Sidonia (cerro histórico entre la Bahía y el Estrecho)",
    emoji: "🏰",
    lat: 36.4565,
    lng: -5.9273,
    nivel: 1,
    categorias: ["historia", "pueblo", "cultura", "ruta"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 126,
    cooldownMin: 80,
    intereses: ["a381", "a390", "romanos", "medieval", "dulces", "mirador"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medina-sidonia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medina-sidonia.png",
  },

  {
    id: "es_cad_vejer_frontera",
    nombre: "Vejer de la Frontera (uno de los grandes pueblos blancos)",
    emoji: "🏰",
    lat: 36.2524,
    lng: -5.9656,
    nivel: 1,
    categorias: ["historia", "pueblo", "paisaje"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 124,
    cooldownMin: 80,
    intereses: ["a48", "n340", "pueblos_blancos", "murallas", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vejer-de-la-frontera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vejer-de-la-frontera.png",
  },

  {
    id: "es_cad_chipiona_rocio_jurado",
    nombre: "Chipiona (la localidad de Rocío Jurado)",
    emoji: "🎭",
    lat: 36.7362,
    lng: -6.437,
    nivel: 2,
    categorias: ["cultura", "musica", "pueblo", "ruta"],
    tipo: "homenaje_cultural",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 112,
    cooldownMin: 70,
    intereses: ["chipiona", "rocio_jurado", "copla", "flamenco", "costa_noroeste", "cadiz"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chipiona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chipiona.png",
  },

  {
    id: "es_cad_zahara_sierra",
    nombre: "Zahara de la Sierra (atalaya blanca en la ruta interior)",
    emoji: "🏰",
    lat: 36.8402,
    lng: -5.3911,
    nivel: 2,
    categorias: ["historia", "pueblo", "paisaje"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 70,
    intereses: ["a382", "sierra_de_grazalema", "embalse", "miradores", "pueblos_blancos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zahara-de-la-sierra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zahara-de-la-sierra.png",
  },

  {
    id: "es_cad_san_fernando",
    nombre: "San Fernando (arsenal, salinas y puente hacia Cádiz)",
    emoji: "🏙️",
    lat: 36.4678,
    lng: -6.1982,
    nivel: 2,
    categorias: ["historia", "mar", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 108,
    cooldownMin: 70,
    intereses: ["salinas", "arsenal", "islas", "bahia", "defensa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-fernando.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-fernando.png",
  },

  {
    id: "es_cad_castellar_frontera",
    nombre: "Castellar de la Frontera (castillo y bosque mediterráneo)",
    emoji: "🏰",
    lat: 36.3181,
    lng: -5.4536,
    nivel: 2,
    categorias: ["historia", "pueblo", "naturaleza"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5500,

    perfil: "historia",
    prioridad: 108,
    cooldownMin: 70,
    intereses: ["castillo", "parque_natural", "alcornocales", "campo_de_gibraltar", "mirador"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castellar-de-la-frontera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castellar-de-la-frontera.png",
  },

  {
    id: "es_cad_chiclana_frontera",
    nombre: "Chiclana de la Frontera (enlace costero entre bahía y costa de la Luz)",
    emoji: "🏙️",
    lat: 36.4192,
    lng: -6.1494,
    nivel: 2,
    categorias: ["ruta", "mar", "ciudad"],
    tipo: "ciudad",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 65,
    intereses: ["a48", "costa_de_la_luz", "playas", "bahia", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chiclana-de-la-frontera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chiclana-de-la-frontera.png",
  },

  {
    id: "es_cad_jimena_frontera",
    nombre: "Jimena de la Frontera (corazón serrano del interior gaditano)",
    emoji: "🏰",
    lat: 36.4333,
    lng: -5.45,
    nivel: 2,
    categorias: ["historia", "pueblo", "naturaleza"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5500,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 70,
    intereses: ["alcornocales", "castillo", "sierra", "a405", "ruta"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jimena-de-la-frontera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jimena-de-la-frontera.png",
  },

  {
    id: "es_cad_bornos",
    nombre: "Bornos (lago y entrada oriental de la sierra gaditana)",
    emoji: "🏡",
    lat: 36.8152,
    lng: -5.7439,
    nivel: 3,
    categorias: ["ruta", "paisaje", "pueblo"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 88,
    cooldownMin: 60,
    intereses: ["a384", "embalse", "sierra", "pueblos_blancos", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bornos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bornos.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cor_capital_cordoba",
    nombre: "Córdoba (capital califal del eje A-4)",
    emoji: "🏛️",
    lat: 37.8882,
    lng: -4.7794,
    nivel: 1,
    categorias: ["historia", "capital", "cultura", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 140,
    cooldownMin: 95,
    intereses: ["a4", "a45", "guadalquivir", "califato", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cordoba.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cor_mezquita",
        "nombre": "Mezquita-Catedral de Córdoba",
        "tipo": "mezquita_catedral",
        "nivel": 1,
        "lat": 37.8796,
        "lng": -4.7794,
        "radio": 5000
      },
      {
        "id": "es_cor_medina_azahara",
        "nombre": "Medina Azahara (ciudad palatina omeya)",
        "tipo": "yacimiento",
        "nivel": 1,
        "lat": 37.8876,
        "lng": -4.8235,
        "radio": 5500
      },
      {
        "id": "es_cor_puente_romano",
        "nombre": "Puente Romano de Córdoba",
        "tipo": "puente_historico",
        "nivel": 2,
        "lat": 37.8789,
        "lng": -4.7797,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cordoba.png",
  },

  {
    id: "es_cor_sierras_subbeticas",
    nombre: "Parque Natural Sierras Subbéticas",
    emoji: "🌿",
    lat: 37.5,
    lng: -4.25,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "geologia"],
    tipo: "parque_natural",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 126,
    cooldownMin: 80,
    intereses: ["karst", "olivar", "senderismo", "caliza", "subbetica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-sierras-subbeticas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cor_zuheros",
        "nombre": "Zuheros (uno de los pueblos más escénicos de las Subbéticas)",
        "tipo": "pueblo_historico",
        "nivel": 1,
        "lat": 37.543,
        "lng": -4.316,
        "radio": 5500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-sierras-subbeticas.png",
  },

  {
    id: "es_cor_montoro",
    nombre: "Montoro (meandro rojo sobre la A-4)",
    emoji: "🏰",
    lat: 38.026,
    lng: -4.381,
    nivel: 1,
    categorias: ["historia", "pueblo", "paisaje", "ruta"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 80,
    intereses: ["a4", "guadalquivir", "casas_rojas", "miradores", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montoro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montoro.png",
  },

  {
    id: "es_cor_priego_cordoba",
    nombre: "Priego de Córdoba (barroco y balcón de las Subbéticas)",
    emoji: "🏰",
    lat: 37.438,
    lng: -4.195,
    nivel: 1,
    categorias: ["historia", "ciudad", "paisaje", "cultura"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 124,
    cooldownMin: 80,
    intereses: ["barroco", "subbetica", "manantiales", "a333", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/priego-de-cordoba.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/priego-de-cordoba.png",
  },

  {
    id: "es_cor_almodovar_rio",
    nombre: "Almodóvar del Río (castillo junto al Guadalquivir)",
    emoji: "🏰",
    lat: 37.81,
    lng: -5.02,
    nivel: 1,
    categorias: ["historia", "castillos", "ruta"],
    tipo: "castillo",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 120,
    cooldownMin: 75,
    intereses: ["a431", "guadalquivir", "castillo", "vega", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almodovar-del-rio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almodovar-del-rio.png",
  },

  {
    id: "es_cor_lucena",
    nombre: "Lucena (gran nudo del sur cordobés)",
    emoji: "🏰",
    lat: 37.409,
    lng: -4.485,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 75,
    intereses: ["a45", "a318", "sefardi", "barroco", "subbetica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lucena.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lucena.png",
  },

  {
    id: "es_cor_parque_cardenia_montoro",
    nombre: "Parque Natural Cardeña-Montoro",
    emoji: "🌿",
    lat: 38.2,
    lng: -4.3,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "fauna"],
    tipo: "parque_natural",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 112,
    cooldownMin: 75,
    intereses: ["dehesa", "lince", "sierra_morena", "fauna", "bosque_mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-cardena-montoro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-cardena-montoro.png",
  },

  {
    id: "es_cor_puente_genil",
    nombre: "Puente Genil (nudo del Genil entre Córdoba, Málaga y Sevilla)",
    emoji: "🏙️",
    lat: 37.39,
    lng: -4.77,
    nivel: 2,
    categorias: ["ruta", "ciudad", "historia"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 108,
    cooldownMin: 70,
    intereses: ["genil", "a318", "campina", "ferrocarril", "conexion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-genil.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-genil.png",
  },

  {
    id: "es_cor_montilla",
    nombre: "Montilla (vinos del sur de Córdoba)",
    emoji: "🏙️",
    lat: 37.586,
    lng: -4.638,
    nivel: 2,
    categorias: ["cultura", "ciudad", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 70,
    intereses: ["vino", "a45", "campina_sur", "bodegas", "montilla_moriles"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montilla.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montilla.png",
  },

  {
    id: "es_cor_baena",
    nombre: "Baena (olivar e historia entre campiña y Subbética)",
    emoji: "🏰",
    lat: 37.615,
    lng: -4.327,
    nivel: 2,
    categorias: ["historia", "ciudad", "cultura"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 106,
    cooldownMin: 70,
    intereses: ["aceite", "n432", "campina", "castillo", "tambor"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baena.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baena.png",
  },

  {
    id: "es_cor_cabra",
    nombre: "Cabra (puerta central de las Subbéticas)",
    emoji: "🏙️",
    lat: 37.472,
    lng: -4.442,
    nivel: 2,
    categorias: ["historia", "ciudad", "naturaleza"],
    tipo: "ciudad",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 70,
    intereses: ["subbetica", "via_verde", "barroco", "a339", "sierras"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabra.png",
  },

  {
    id: "es_cor_iznajar",
    nombre: "Iznájar (embalse y miradores en la frontera sur)",
    emoji: "🏰",
    lat: 37.257,
    lng: -4.308,
    nivel: 2,
    categorias: ["paisaje", "pueblo", "ruta"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 70,
    intereses: ["embalse", "miradores", "a333", "sur_de_cordoba", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/iznajar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/iznajar.png",
  },

  {
    id: "es_cor_aguilar_frontera",
    nombre: "Aguilar de la Frontera (cerro, bodegas y campiña)",
    emoji: "🏰",
    lat: 37.514,
    lng: -4.656,
    nivel: 2,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 104,
    cooldownMin: 70,
    intereses: ["a45", "campina", "vino", "castillo", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aguilar-de-la-frontera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aguilar-de-la-frontera.png",
  },

  {
    id: "es_cor_palma_rio",
    nombre: "Palma del Río (vega, naranjos y cruce occidental)",
    emoji: "🏙️",
    lat: 37.7,
    lng: -5.28,
    nivel: 2,
    categorias: ["ruta", "ciudad", "paisaje"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 102,
    cooldownMin: 65,
    intereses: ["vega", "guadalquivir", "genil", "a431", "occidente"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/palma-del-rio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/palma-del-rio.png",
  },

  {
    id: "es_cor_bujalance",
    nombre: "Bujalance (campiña y torres en la salida este)",
    emoji: "🏡",
    lat: 37.896,
    lng: -4.383,
    nivel: 3,
    categorias: ["ruta", "pueblo", "historia"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 86,
    cooldownMin: 60,
    intereses: ["a4", "campina", "torres", "viaje", "cordoba_oriental"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bujalance.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bujalance.png",
  },

  {
    id: "es_cor_adamuz",
    nombre: "Adamuz (puerta serrana del nordeste cordobés)",
    emoji: "🏡",
    lat: 38.027,
    lng: -4.525,
    nivel: 3,
    categorias: ["ruta", "pueblo", "naturaleza"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 84,
    cooldownMin: 60,
    intereses: ["sierra_morena", "n420", "olivar", "dehesa", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/adamuz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/adamuz.png",
  },

  // ✅ CAPITAL
  {
    id: "es_hue_capital_huelva",
    nombre: "Huelva (capital atlántica del corredor A-49)",
    emoji: "🏛️",
    lat: 37.2614,
    lng: -6.9447,
    nivel: 1,
    categorias: ["historia", "capital", "mar", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 136,
    cooldownMin: 90,
    intereses: ["a49", "atlantico", "rio_tinto", "puerto", "descubrimientos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/huelva.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_hue_rabida",
        "nombre": "La Rábida (monasterio y lugar colombino)",
        "tipo": "monasterio",
        "nivel": 1,
        "lat": 37.2056,
        "lng": -6.9298,
        "radio": 5000
      },
      {
        "id": "es_hue_palos_frontera",
        "nombre": "Palos de la Frontera (salida simbólica hacia el Atlántico)",
        "tipo": "villa_historica",
        "nivel": 1,
        "lat": 37.228,
        "lng": -6.8934,
        "radio": 6500
      },
      {
        "id": "es_hue_muelle_tinto",
        "nombre": "Muelle del Tinto (hierro y memoria industrial)",
        "tipo": "muelle_historico",
        "nivel": 2,
        "lat": 37.2499,
        "lng": -6.9584,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/huelva.png",
  },

  {
    id: "es_hue_el_rocio",
    nombre: "El Rocío (aldea de marisma y romería)",
    emoji: "🏡",
    lat: 37.128,
    lng: -6.488,
    nivel: 1,
    categorias: ["naturaleza", "cultura", "ruta", "datosCuriosos"],
    tipo: "aldea",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 80,
    intereses: ["donana", "romeria", "marismas", "caballos", "arena"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-rocio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-rocio.png",
  },

  {
    id: "es_hue_aracena",
    nombre: "Aracena (capital serrana del norte onubense)",
    emoji: "🏰",
    lat: 37.892,
    lng: -6.562,
    nivel: 1,
    categorias: ["historia", "pueblo", "naturaleza", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 80,
    intereses: ["sierra_de_aracena", "n433", "jamon", "castillo", "cueva"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aracena.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_hue_gruta_maravillas",
        "nombre": "Gruta de las Maravillas (geología bajo el castillo)",
        "tipo": "cueva",
        "nivel": 1,
        "lat": 37.8915,
        "lng": -6.558,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aracena.png",
  },

  {
    id: "es_hue_minas_riotinto",
    nombre: "Minas de Riotinto (paisaje minero del interior)",
    emoji: "⛏️",
    lat: 37.694,
    lng: -6.591,
    nivel: 1,
    categorias: ["historia", "ingenieria", "geologia", "datosCuriosos"],
    tipo: "cuenca_minera",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 124,
    cooldownMin: 80,
    intereses: ["mineria", "cobre", "paisaje_marciano", "n435", "industrial"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minas-de-riotinto.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minas-de-riotinto.png",
  },

  {
    id: "es_hue_niebla",
    nombre: "Niebla (murallas sobre el Tinto a pie de la A-49)",
    emoji: "🏰",
    lat: 37.3613,
    lng: -6.6792,
    nivel: 1,
    categorias: ["historia", "pueblo", "fortaleza", "ruta"],
    tipo: "pueblo_amurallado",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 124,
    cooldownMin: 80,
    intereses: ["a49", "murallas", "puerta_del_condado", "andalusi", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/niebla.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/niebla.png",
  },

  {
    id: "es_hue_ayamonte",
    nombre: "Ayamonte (frontera del Guadiana y final occidental de la A-49)",
    emoji: "🚩",
    lat: 37.214,
    lng: -7.408,
    nivel: 1,
    categorias: ["historia", "ciudad", "mar", "ruta"],
    tipo: "ciudad_fronteriza",
    radioActivacionMetros: 7500,

    perfil: "cultura",
    prioridad: 122,
    cooldownMin: 80,
    intereses: ["guadiana", "frontera", "portugal", "a49", "estuario"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ayamonte.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ayamonte.png",
  },

  {
    id: "es_hue_dolmen_soto",
    nombre: "Dolmen de Soto (gran monumento megalítico de Trigueros)",
    emoji: "🪨",
    lat: 37.3897,
    lng: -6.8242,
    nivel: 1,
    categorias: ["historia", "arqueologia", "datosCuriosos"],
    tipo: "dolmen",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 122,
    cooldownMin: 75,
    intereses: ["megalitismo", "prehistoria", "condado", "trigueros", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/dolmen-de-soto.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/dolmen-de-soto.png",
  },

  {
    id: "es_hue_almonte",
    nombre: "Almonte (puerta del eje Doñana-El Rocío)",
    emoji: "🏡",
    lat: 37.262,
    lng: -6.517,
    nivel: 2,
    categorias: ["naturaleza", "pueblo", "ruta"],
    tipo: "villa",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 110,
    cooldownMin: 70,
    intereses: ["donana", "a483", "romeria", "marismas", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almonte.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almonte.png",
  },

  {
    id: "es_hue_moguer",
    nombre: "Moguer (literatura, vino y cercanía al eje Huelva-Sevilla)",
    emoji: "🏰",
    lat: 37.2749,
    lng: -6.8385,
    nivel: 2,
    categorias: ["historia", "pueblo", "cultura"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 70,
    intereses: ["juan_ramon_jimenez", "vino", "condado", "campina", "a494"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/moguer.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_hue_san_juan_puerto",
        "nombre": "San Juan del Puerto (paso del Tinto en el corredor metropolitano)",
        "tipo": "ciudad",
        "nivel": 3,
        "lat": 37.3144,
        "lng": -6.8416,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/moguer.png",
  },

  {
    id: "es_hue_matalascanas",
    nombre: "Matalascañas (acceso litoral a Doñana)",
    emoji: "🐚",
    lat: 36.995,
    lng: -6.55,
    nivel: 2,
    categorias: ["naturaleza", "mar", "ruta"],
    tipo: "nucleo_costero",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 70,
    intereses: ["donana", "costa", "playa", "a483", "dunas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/matalascanas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/matalascanas.png",
  },

  {
    id: "es_hue_isla_cristina",
    nombre: "Isla Cristina (pesca, sal y marismas)",
    emoji: "⚓",
    lat: 37.2,
    lng: -7.325,
    nivel: 2,
    categorias: ["mar", "historia", "naturaleza"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 102,
    cooldownMin: 70,
    intereses: ["pesca", "salinas", "marismas", "litoral", "atlantico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/isla-cristina.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/isla-cristina.png",
  },

  {
    id: "es_hue_lepe",
    nombre: "Lepe (nudo de la costa occidental onubense)",
    emoji: "🏙️",
    lat: 37.254,
    lng: -7.204,
    nivel: 2,
    categorias: ["ruta", "ciudad", "mar"],
    tipo: "ciudad",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 98,
    cooldownMin: 65,
    intereses: ["a49", "isla_antilla", "fresa", "litoral", "conexion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lepe.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_hue_cartaya",
        "nombre": "Cartaya (entre pinares y salida a la costa occidental)",
        "tipo": "ciudad",
        "nivel": 3,
        "lat": 37.282,
        "lng": -7.154,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lepe.png",
  },

  {
    id: "es_hue_bollullos_condado",
    nombre: "Bollullos Par del Condado (viñas y cruce interior)",
    emoji: "🏙️",
    lat: 37.3413,
    lng: -6.5393,
    nivel: 3,
    categorias: ["ruta", "pueblo", "cultura"],
    tipo: "ciudad",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 86,
    cooldownMin: 60,
    intereses: ["condado", "vino", "a483", "campina", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bollullos-par-del-condado.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bollullos-par-del-condado.png",
  },

  {
    id: "es_hue_palma_condado",
    nombre: "La Palma del Condado (bisagra entre A-49 y Doñana)",
    emoji: "🏙️",
    lat: 37.386,
    lng: -6.553,
    nivel: 3,
    categorias: ["ruta", "ciudad", "paisaje"],
    tipo: "ciudad",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 84,
    cooldownMin: 60,
    intereses: ["a49", "condado", "campina", "corredor", "sevilla"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-palma-del-condado.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-palma-del-condado.png",
  },

  // ✅ CAPITAL
  {
    id: "es_mal_capital_malaga",
    nombre: "Málaga (capital mediterránea del sur)",
    emoji: "🏛️",
    lat: 36.7213,
    lng: -4.4214,
    nivel: 1,
    categorias: ["historia", "capital", "mar", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 140,
    cooldownMin: 95,
    intereses: ["puerto", "museos", "costa_del_sol", "a7", "guadalmedina"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/malaga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mal_alcazaba",
        "nombre": "Alcazaba de Málaga",
        "tipo": "alcazaba",
        "nivel": 1,
        "lat": 36.7223,
        "lng": -4.4163,
        "radio": 4500
      },
      {
        "id": "es_mal_gibralfaro",
        "nombre": "Castillo de Gibralfaro",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 36.7229,
        "lng": -4.4106,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/malaga.png",
  },

  {
    id: "es_mal_antequera",
    nombre: "Antequera (gran cruce andaluz entre A-45, A-92 y A-7)",
    emoji: "🏰",
    lat: 37.0194,
    lng: -4.5614,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta", "cultura"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 90,
    intereses: ["a45", "a92", "a92m", "cruce_andaluz", "dolmenes", "torcal"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/antequera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mal_dolmenes_antequera",
        "nombre": "Dólmenes de Antequera (UNESCO)",
        "tipo": "dolmenes",
        "nivel": 1,
        "lat": 37.0253,
        "lng": -4.5452,
        "radio": 5000
      },
      {
        "id": "es_mal_torcal_antequera",
        "nombre": "El Torcal de Antequera (karst y paisaje singular)",
        "tipo": "paraje_natural",
        "nivel": 1,
        "lat": 36.9521,
        "lng": -4.5404,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/antequera.png",
  },

  {
    id: "es_mal_ronda",
    nombre: "Ronda (gran garganta del interior, enlace hacia Cádiz y Sevilla)",
    emoji: "🏰",
    lat: 36.742,
    lng: -5.167,
    nivel: 1,
    categorias: ["historia", "pueblo", "paisaje", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 85,
    intereses: ["tajo", "serrania", "a367", "cádiz", "puente_nuevo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ronda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ronda.png",
  },

  {
    id: "es_mal_caminito_rey",
    nombre: "Caminito del Rey (desfiladero de los Gaitanes)",
    emoji: "🏔️",
    lat: 36.932,
    lng: -4.802,
    nivel: 1,
    categorias: ["naturaleza", "ingenieria", "datosCuriosos"],
    tipo: "desfiladero",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 130,
    cooldownMin: 80,
    intereses: ["gaitanes", "pasarela", "vertigo", "embalses", "senderismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caminito-del-rey.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caminito-del-rey.png",
  },

  {
    id: "es_mal_fuente_piedra",
    nombre: "Laguna de Fuente de Piedra (flamencos en el norte de Málaga)",
    emoji: "🦩",
    lat: 37.104,
    lng: -4.736,
    nivel: 1,
    categorias: ["naturaleza", "fauna", "paisaje"],
    tipo: "laguna",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 124,
    cooldownMin: 75,
    intereses: ["flamencos", "humedal", "a92", "aves", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laguna-de-fuente-de-piedra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laguna-de-fuente-de-piedra.png",
  },

  {
    id: "es_mal_nerja",
    nombre: "Nerja (balcón del Mediterráneo oriental)",
    emoji: "⚓",
    lat: 36.746,
    lng: -3.879,
    nivel: 1,
    categorias: ["mar", "paisaje", "cultura"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 75,
    intereses: ["a7", "balcon_de_europa", "costa", "cuevas", "mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nerja.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mal_frigiliana",
        "nombre": "Frigiliana (pueblo blanco sobre el eje de la Axarquía)",
        "tipo": "pueblo_historico",
        "nivel": 2,
        "lat": 36.791,
        "lng": -3.898,
        "radio": 5500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nerja.png",
  },

  {
    id: "es_mal_marbella",
    nombre: "Marbella (nudo costero del oeste malagueño)",
    emoji: "⚓",
    lat: 36.5099,
    lng: -4.8864,
    nivel: 1,
    categorias: ["mar", "ciudad", "ruta"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 75,
    intereses: ["a7", "costa_del_sol", "puerto", "casco_historico", "turismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/marbella.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/marbella.png",
  },

  {
    id: "es_mal_estepona",
    nombre: "Estepona (jardines, mar y transición hacia Cádiz)",
    emoji: "⚓",
    lat: 36.427,
    lng: -5.146,
    nivel: 2,
    categorias: ["mar", "ciudad", "paisaje"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 108,
    cooldownMin: 70,
    intereses: ["a7", "litoral_oeste", "mediterraneo", "paso_a_cadiz", "puerto"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/estepona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/estepona.png",
  },

  {
    id: "es_mal_velez_malaga",
    nombre: "Vélez-Málaga (capital de la Axarquía)",
    emoji: "🏰",
    lat: 36.781,
    lng: -4.102,
    nivel: 2,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 70,
    intereses: ["axarquia", "a7", "fortaleza", "camino_costero", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/velez-malaga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/velez-malaga.png",
  },

  {
    id: "es_mal_archidona",
    nombre: "Archidona (puerta oriental hacia Granada)",
    emoji: "🏰",
    lat: 37.094,
    lng: -4.388,
    nivel: 2,
    categorias: ["historia", "pueblo", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 106,
    cooldownMin: 70,
    intereses: ["a92", "plaza_ochavada", "cerro", "camino_real", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/archidona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/archidona.png",
  },

  {
    id: "es_mal_rincon_victoria",
    nombre: "Rincón de la Victoria y Cueva del Tesoro",
    emoji: "⚓",
    lat: 36.717,
    lng: -4.286,
    nivel: 2,
    categorias: ["mar", "geologia", "ruta"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 65,
    intereses: ["a7", "cueva", "litoral", "axarquia", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rincon-de-la-victoria-y-cueva-del-tesoro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rincon-de-la-victoria-y-cueva-del-tesoro.png",
  },

  {
    id: "es_mal_ardales",
    nombre: "Ardales (embalses y puerta del desfiladero)",
    emoji: "🏡",
    lat: 36.88,
    lng: -4.846,
    nivel: 2,
    categorias: ["naturaleza", "pueblo", "ruta"],
    tipo: "pueblo",
    radioActivacionMetros: 5500,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 65,
    intereses: ["embalses", "desfiladero", "gaitanes", "a357", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ardales.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ardales.png",
  },

  {
    id: "es_mal_alora",
    nombre: "Álora (castillo sobre el valle del Guadalhorce)",
    emoji: "🏰",
    lat: 36.823,
    lng: -4.706,
    nivel: 2,
    categorias: ["historia", "pueblo", "paisaje"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5500,

    perfil: "historia",
    prioridad: 102,
    cooldownMin: 65,
    intereses: ["guadalhorce", "castillo", "valle", "a343", "ruta"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alora.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alora.png",
  },

  {
    id: "es_mal_campillos",
    nombre: "Campillos (alto del corredor interior hacia Sevilla y Cádiz)",
    emoji: "🏙️",
    lat: 37.05,
    lng: -4.863,
    nivel: 3,
    categorias: ["ruta", "pueblo", "paisaje"],
    tipo: "ciudad",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 86,
    cooldownMin: 60,
    intereses: ["a92", "campina", "cruce", "interior", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/campillos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/campillos.png",
  },

  {
    id: "es_mal_casabermeja",
    nombre: "Casabermeja (umbral de Málaga en la A-45)",
    emoji: "🏡",
    lat: 36.892,
    lng: -4.428,
    nivel: 3,
    categorias: ["ruta", "pueblo", "paisaje"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 84,
    cooldownMin: 60,
    intereses: ["a45", "pedrizas", "puerta_de_malaga", "montes", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/casabermeja.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/casabermeja.png",
  },

  // ✅ CAPITAL
  {
    id: "es_sev_capital_sevilla",
    nombre: "Sevilla (capital de provincia)",
    emoji: "🏛️",
    lat: 37.39,
    lng: -5.99,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 135,
    cooldownMin: 120,
    intereses: ["andalucia", "guadalquivir", "capitalidad", "historia_urbana", "arte"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sevilla.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_sev_catedral_giralda",
        "nombre": "Catedral de Sevilla y Giralda (UNESCO)",
        "tipo": "catedral",
        "nivel": 1,
        "lat": 37.38619,
        "lng": -5.99242,
        "radio": 7000
      },
      {
        "id": "es_sev_alcazar",
        "nombre": "Real Alcázar de Sevilla (UNESCO)",
        "tipo": "palacio",
        "nivel": 1,
        "lat": 37.38389,
        "lng": -5.99139,
        "radio": 6500
      },
      {
        "id": "es_sev_italica",
        "nombre": "Itálica (ciudad romana)",
        "tipo": "yacimiento",
        "nivel": 1,
        "lat": 37.44389,
        "lng": -6.04667,
        "radio": 7000
      },
      {
        "id": "es_sev_plaza_espana",
        "nombre": "Plaza de España (Sevilla)",
        "tipo": "conjunto_historico",
        "nivel": 1,
        "lat": 37.37694,
        "lng": -5.98694,
        "radio": 6500
      },
      {
        "id": "es_sev_archivo_indias",
        "nombre": "Archivo General de Indias (UNESCO)",
        "tipo": "monumento_unesco",
        "nivel": 1,
        "lat": 37.384,
        "lng": -5.992,
        "radio": 5000
      },
      {
        "id": "es_sev_triana",
        "nombre": "Triana (barrio histórico y puente)",
        "tipo": "barrio_historico",
        "nivel": 2,
        "lat": 37.38622,
        "lng": -6.00233,
        "radio": 6000
      },
      {
        "id": "es_sev_santiponce",
        "nombre": "Santiponce (villa histórica)",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 37.43528,
        "lng": -6.04333,
        "radio": 6000
      },
      {
        "id": "es_sev_torre_oro",
        "nombre": "Torre del Oro",
        "tipo": "fortaleza",
        "nivel": 2,
        "lat": 37.38244,
        "lng": -5.99647,
        "radio": 4500
      },
      {
        "id": "es_sev_setas",
        "nombre": "Metropol Parasol (Setas de Sevilla)",
        "tipo": "mirador",
        "nivel": 2,
        "lat": 37.39325,
        "lng": -5.99188,
        "radio": 4500
      },
      {
        "id": "es_sev_san_isidoro_campo",
        "nombre": "Monasterio de San Isidoro del Campo",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 37.43425,
        "lng": -6.03658,
        "radio": 4500
      },
      {
        "id": "es_sev_casa_pilatos",
        "nombre": "Casa de Pilatos",
        "tipo": "palacio",
        "nivel": 2,
        "lat": 37.39027,
        "lng": -5.987,
        "radio": 4500
      },
      {
        "id": "es_sev_parque_maria_luisa",
        "nombre": "Parque de María Luisa",
        "tipo": "paisaje_cultural",
        "nivel": 2,
        "lat": 37.37694,
        "lng": -5.98694,
        "radio": 6000
      },
      {
        "id": "es_sev_cartuja",
        "nombre": "Monasterio de la Cartuja",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 37.38583,
        "lng": -5.99306,
        "radio": 5000
      },
      {
        "id": "es_sev_la_algaba",
        "nombre": "La Algaba (vega del Guadalquivir)",
        "tipo": "ciudad",
        "nivel": 3,
        "lat": 37.45,
        "lng": -6,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sevilla.png",
  },

  {
    id: "es_sev_real_jara",
    nombre: "El Real de la Jara (castillo en la puerta norte de Sevilla)",
    emoji: "🏰",
    lat: 37.95,
    lng: -6.15,
    nivel: 3,
    categorias: ["historia", "pueblo", "ruta"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 88,
    cooldownMin: 65,
    intereses: ["sierra_norte", "frontera", "castillo", "a66", "paso"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-real-de-la-jara.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-real-de-la-jara.png",
  },

  {
    id: "es_sev_guillena",
    nombre: "Guillena (puerta metropolitana hacia Sevilla)",
    emoji: "🏙️",
    lat: 37.533,
    lng: -6.05,
    nivel: 3,
    categorias: ["ruta", "ciudad", "paisaje"],
    tipo: "ciudad",
    radioActivacionMetros: 5500,

    perfil: "historia",
    prioridad: 86,
    cooldownMin: 55,
    intereses: ["corredor", "entrada_a_sevilla", "guadalquivir", "transito", "a66"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guillena.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guillena.png",
  },

  {
    id: "es_sev_almaden_plata",
    nombre: "Almadén de la Plata (camino, dehesa y agua)",
    emoji: "🏡",
    lat: 37.8667,
    lng: -6.0667,
    nivel: 3,
    categorias: ["naturaleza", "pueblo", "ruta"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 86,
    cooldownMin: 60,
    intereses: ["dehesa", "ruta_de_la_plata", "agua", "sierra_norte", "senderismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almaden-de-la-plata.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almaden-de-la-plata.png",
  },

  {
    id: "es_sev_ronquillo",
    nombre: "El Ronquillo (bosque mediterráneo y embalses)",
    emoji: "🏡",
    lat: 37.717,
    lng: -6.167,
    nivel: 3,
    categorias: ["naturaleza", "pueblo", "paisaje"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 84,
    cooldownMin: 55,
    intereses: ["embalses", "bosque_mediterraneo", "sierra", "a66", "aire_libre"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-ronquillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-ronquillo.png",
  },

  {
    id: "es_sev_castillo_guardas",
    nombre: "El Castillo de las Guardas (sierra y minería)",
    emoji: "🏡",
    lat: 37.683,
    lng: -6.3,
    nivel: 3,
    categorias: ["naturaleza", "historia", "pueblo"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 82,
    cooldownMin: 60,
    intereses: ["sierra_norte", "mineria", "dehesa", "patrimonio", "ruta"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-castillo-de-las-guardas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-castillo-de-las-guardas.png",
  },

  {
    id: "es_ara_hue_ordesa",
    nombre: "Parque Nacional de Ordesa y Monte Perdido",
    emoji: "🌲",
    lat: 42.65,
    lng: -0.05,
    nivel: 1,
    categorias: ["naturaleza", "parque_nacional", "paisaje"],
    tipo: "parque_nacional",
    radioActivacionMetros: 10000,

    perfil: "naturaleza",
    prioridad: 139,
    cooldownMin: 90,
    intereses: ["ordesa", "pirineo", "glaciarismo", "senderismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-ordesa-y-monte-perdido.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-ordesa-y-monte-perdido.png",
  },

  // ✅ CAPITAL
  {
    id: "es_ara_hue_huesca_capital",
    nombre: "Huesca (capital de provincia)",
    emoji: "🏛️",
    lat: 42.1362,
    lng: -0.4087,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 11000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 90,
    intereses: ["a23", "a22", "capitalidad", "san_lorenzo", "casco_historico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/huesca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/huesca.png",
  },

  {
    id: "es_ara_hue_fraga",
    nombre: "Fraga, entrada oriental de Aragón por la A-2",
    emoji: "🏰",
    lat: 41.5229,
    lng: 0.3489,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta", "frontera"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 133,
    cooldownMin: 70,
    intereses: ["a2", "cinca", "frontera_aragon", "puerta_de_entrada"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fraga-entrada-oriental-de-aragon-por-la-a-2.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fraga-entrada-oriental-de-aragon-por-la-a-2.png",
  },

  {
    id: "es_ara_hue_loarre",
    nombre: "Castillo de Loarre",
    emoji: "🏰",
    lat: 42.3241,
    lng: -0.6222,
    nivel: 1,
    categorias: ["historia", "castillo", "arquitectura", "mirador"],
    tipo: "castillo",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 132,
    cooldownMin: 70,
    intereses: ["romanico", "fortaleza", "prepirineo", "cine"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-loarre.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-loarre.png",
  },

  {
    id: "es_ara_hue_riglos",
    nombre: "Mallos de Riglos",
    emoji: "🪨",
    lat: 42.3472,
    lng: -0.7268,
    nivel: 1,
    categorias: ["naturaleza", "geologia", "escalada", "paisaje"],
    tipo: "formacion_geologica",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 131,
    cooldownMin: 75,
    intereses: ["conglomerados", "escalada", "aves_rapaces", "prepirineo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mallos-de-riglos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mallos-de-riglos.png",
  },

  {
    id: "es_ara_hue_alquezar",
    nombre: "Alquézar",
    emoji: "🏰",
    lat: 42.1716,
    lng: -0.023,
    nivel: 1,
    categorias: ["pueblo", "historia", "naturaleza", "ruta"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 70,
    intereses: ["somontano", "pasarelas", "rio_vero", "colegiata"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alquezar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alquezar.png",
  },

  {
    id: "es_ara_hue_jaca",
    nombre: "Jaca",
    emoji: "🏰",
    lat: 42.569,
    lng: -0.549,
    nivel: 1,
    categorias: ["historia", "ciudad", "montaña", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8500,

    perfil: "historia",
    prioridad: 129,
    cooldownMin: 70,
    intereses: ["a23", "pirineo", "camino_de_santiago", "frontera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jaca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ara_hue_ciudadela_jaca",
        "nombre": "Ciudadela de Jaca",
        "tipo": "fortaleza",
        "nivel": 1,
        "lat": 42.5708,
        "lng": -0.5485,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jaca.png",
  },

  {
    id: "es_ara_hue_canfranc",
    nombre: "Canfranc Estación",
    emoji: "🚂",
    lat: 42.7507,
    lng: -0.5147,
    nivel: 1,
    categorias: ["historia", "arquitectura", "ferrocarril", "montaña"],
    tipo: "estacion_historica",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 65,
    intereses: ["frontera", "tunel", "pirineo", "estacion_internacional"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/canfranc-estacion.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/canfranc-estacion.png",
  },

  {
    id: "es_ara_hue_san_juan_pena",
    nombre: "Monasterio de San Juan de la Peña",
    emoji: "⛪",
    lat: 42.5086,
    lng: -0.6734,
    nivel: 1,
    categorias: ["historia", "monasterio", "arquitectura"],
    tipo: "monasterio",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 127,
    cooldownMin: 65,
    intereses: ["romanico", "aragón_medieval", "bosque", "panteon_real"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-san-juan-de-la-pena.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-san-juan-de-la-pena.png",
  },

  {
    id: "es_ara_hue_guara",
    nombre: "Parque Natural de la Sierra y los Cañones de Guara",
    emoji: "🌿",
    lat: 42.2489,
    lng: -0.0704,
    nivel: 1,
    categorias: ["naturaleza", "geologia", "aventura"],
    tipo: "parque_natural",
    radioActivacionMetros: 8500,

    perfil: "naturaleza",
    prioridad: 125,
    cooldownMin: 80,
    intereses: ["barrancos", "cañones", "guara", "buitres"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-la-sierra-y-los-canones-de-guara.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-la-sierra-y-los-canones-de-guara.png",
  },

  {
    id: "es_ara_hue_barbastro",
    nombre: "Barbastro",
    emoji: "🏰",
    lat: 42.0346,
    lng: 0.1269,
    nivel: 1,
    categorias: ["historia", "ciudad", "vino", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 7500,

    perfil: "cultura",
    prioridad: 123,
    cooldownMin: 60,
    intereses: ["somontano", "a22", "catedral", "rio_vero"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/barbastro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/barbastro.png",
  },

  {
    id: "es_ara_hue_ainsa",
    nombre: "Aínsa",
    emoji: "🏰",
    lat: 42.4156,
    lng: 0.1402,
    nivel: 1,
    categorias: ["pueblo", "historia", "montaña"],
    tipo: "villa_medieval",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 122,
    cooldownMin: 65,
    intereses: ["sobrarbe", "plaza_mayor", "pirineo", "murallas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ainsa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ainsa.png",
  },

  {
    id: "es_ara_hue_monzon",
    nombre: "Monzón",
    emoji: "🏙️",
    lat: 41.9113,
    lng: 0.1941,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 118,
    cooldownMin: 55,
    intereses: ["a22", "cinca", "castillo", "eje_huesca_lleida"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monzon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ara_hue_castillo_monzon",
        "nombre": "Castillo de Monzón",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 41.9093,
        "lng": 0.1928,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monzon.png",
  },

  {
    id: "es_ara_hue_formigal",
    nombre: "Formigal",
    emoji: "⛷️",
    lat: 42.7737,
    lng: -0.3614,
    nivel: 2,
    categorias: ["montaña", "nieve", "turismo"],
    tipo: "estacion_esqui",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 116,
    cooldownMin: 60,
    intereses: ["esqui", "pirineo", "portalet", "a136"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/formigal.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/formigal.png",
  },

  {
    id: "es_ara_hue_panticosa",
    nombre: "Panticosa",
    emoji: "⛰️",
    lat: 42.7241,
    lng: -0.2821,
    nivel: 2,
    categorias: ["montaña", "nieve", "naturaleza"],
    tipo: "villa_montana",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 112,
    cooldownMin: 55,
    intereses: ["pirineo", "balneario", "esqui", "ibones"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/panticosa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/panticosa.png",
  },

  {
    id: "es_ara_hue_bolea",
    nombre: "Bolea y la colegiata de Santa María",
    emoji: "🏰",
    lat: 42.2602,
    lng: -0.6713,
    nivel: 2,
    categorias: ["pueblo", "arquitectura", "ruta"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 107,
    cooldownMin: 45,
    intereses: ["colegiata", "hoya_de_huesca", "olivos", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bolea-y-la-colegiata-de-santa-maria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bolea-y-la-colegiata-de-santa-maria.png",
  },

  {
    id: "es_ara_hue_sabinanigo",
    nombre: "Sabiñánigo",
    emoji: "🏙️",
    lat: 42.519,
    lng: -0.365,
    nivel: 2,
    categorias: ["ciudad", "montaña", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 106,
    cooldownMin: 45,
    intereses: ["a23", "gallego", "puerta_del_pirineo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sabinanigo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sabinanigo.png",
  },

  {
    id: "es_ara_hue_ayerbe",
    nombre: "Ayerbe",
    emoji: "🏡",
    lat: 42.2747,
    lng: -0.6887,
    nivel: 2,
    categorias: ["pueblo", "ruta", "prepirineo"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 40,
    intereses: ["a132", "ramon_y_cajal", "paso_hacia_riglos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ayerbe.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ayerbe.png",
  },

  // ✅ CAPITAL
  {
    id: "es_ter_teruel_capital",
    nombre: "Teruel (capital mudéjar del eje A-23)",
    emoji: "🏛️",
    lat: 40.344,
    lng: -1.1069,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 120,
    intereses: ["a23", "mudejar", "amantes", "capitalidad"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/teruel.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ter_torres_mudejares",
        "nombre": "Torres mudéjares de Teruel",
        "tipo": "torres_mudejares",
        "nivel": 1,
        "lat": 40.3448,
        "lng": -1.1062,
        "radio": 5000
      },
      {
        "id": "es_ter_mausoleo_amantes",
        "nombre": "Mausoleo de los Amantes de Teruel",
        "tipo": "mausoleo",
        "nivel": 1,
        "lat": 40.3442,
        "lng": -1.109,
        "radio": 4000
      },
      {
        "id": "es_ter_dinopolis",
        "nombre": "Dinópolis",
        "tipo": "parque_tematico",
        "nivel": 2,
        "lat": 40.3304,
        "lng": -1.0941,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/teruel.png",
  },

  {
    id: "es_ter_albarracin",
    nombre: "Albarracín",
    emoji: "🏰",
    lat: 40.4073,
    lng: -1.4445,
    nivel: 1,
    categorias: ["historia", "pueblo", "medieval", "paisaje"],
    tipo: "conjunto_historico",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 136,
    cooldownMin: 90,
    intereses: ["murallas", "medieval", "rodeno", "sierra"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/albarracin.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ter_pinares_rodeno",
        "nombre": "Pinares de Rodeno",
        "tipo": "espacio_natural",
        "nivel": 2,
        "lat": 40.4239,
        "lng": -1.4319,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/albarracin.png",
  },

  {
    id: "es_ter_alcaniz",
    nombre: "Alcañiz",
    emoji: "🏰",
    lat: 41.05,
    lng: -0.1328,
    nivel: 1,
    categorias: ["historia", "ciudad", "motor", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 132,
    cooldownMin: 90,
    intereses: ["n232", "bajo_aragon", "castillo", "motorland"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcaniz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ter_motorland",
        "nombre": "MotorLand Aragón",
        "tipo": "circuito",
        "nivel": 2,
        "lat": 41.0789,
        "lng": -0.2048,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcaniz.png",
  },

  {
    id: "es_ter_gallocanta",
    nombre: "Laguna de Gallocanta",
    emoji: "🦩",
    lat: 40.9977,
    lng: -1.5071,
    nivel: 1,
    categorias: ["naturaleza", "aves", "humedal"],
    tipo: "laguna",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 130,
    cooldownMin: 75,
    intereses: ["grullas", "migracion", "humedal", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laguna-de-gallocanta.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laguna-de-gallocanta.png",
  },

  {
    id: "es_ter_valderrobres",
    nombre: "Valderrobres",
    emoji: "🏰",
    lat: 40.8759,
    lng: 0.1558,
    nivel: 1,
    categorias: ["historia", "pueblo", "medieval", "ruta"],
    tipo: "conjunto_historico",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 130,
    cooldownMin: 75,
    intereses: ["matarraña", "puente", "castillo", "piedra"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valderrobres.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valderrobres.png",
  },

  {
    id: "es_ter_mora_rubielos",
    nombre: "Mora de Rubielos",
    emoji: "🏰",
    lat: 40.2534,
    lng: -0.7522,
    nivel: 1,
    categorias: ["historia", "pueblo", "castillo"],
    tipo: "villa_historica",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 128,
    cooldownMin: 75,
    intereses: ["a23", "gudar_javalambre", "castillo", "parada"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mora-de-rubielos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mora-de-rubielos.png",
  },

  {
    id: "es_ter_rubielos_mora",
    nombre: "Rubielos de Mora",
    emoji: "🏰",
    lat: 40.1888,
    lng: -0.6516,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura"],
    tipo: "conjunto_historico",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 124,
    cooldownMin: 75,
    intereses: ["medieval", "portales", "gudar_javalambre"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rubielos-de-mora.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rubielos-de-mora.png",
  },

  {
    id: "es_ter_organos_montoro",
    nombre: "Órganos de Montoro",
    emoji: "🌿",
    lat: 40.8829,
    lng: -0.8188,
    nivel: 2,
    categorias: ["naturaleza", "geologia", "paisaje"],
    tipo: "monumento_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 60,
    intereses: ["roca", "maestrazgo", "miradores", "geologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/organos-de-montoro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/organos-de-montoro.png",
  },

  {
    id: "es_ter_peracense",
    nombre: "Castillo de Peracense",
    emoji: "🏰",
    lat: 40.6421,
    lng: -1.4681,
    nivel: 2,
    categorias: ["historia", "castillos", "arquitectura"],
    tipo: "castillo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 122,
    cooldownMin: 60,
    intereses: ["fortaleza", "piedra_roja", "sierra_menera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-peracense.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-peracense.png",
  },

  {
    id: "es_ter_cantavieja",
    nombre: "Cantavieja",
    emoji: "🏰",
    lat: 40.5282,
    lng: -0.405,
    nivel: 2,
    categorias: ["historia", "pueblo", "maestrazgo"],
    tipo: "villa_historica",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["maestrazgo", "plaza", "altiplano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cantavieja.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cantavieja.png",
  },

  {
    id: "es_ter_mirambel",
    nombre: "Mirambel",
    emoji: "🏰",
    lat: 40.5878,
    lng: -0.3421,
    nivel: 2,
    categorias: ["historia", "pueblo", "medieval"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["maestrazgo", "murallas", "silencio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mirambel.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mirambel.png",
  },

  {
    id: "es_ter_puertomingalvo",
    nombre: "Puertomingalvo",
    emoji: "🏰",
    lat: 40.2647,
    lng: -0.4562,
    nivel: 2,
    categorias: ["historia", "pueblo", "montana"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["medieval", "castillo", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puertomingalvo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puertomingalvo.png",
  },

  {
    id: "es_ter_linares_mora",
    nombre: "Linares de Mora",
    emoji: "🏰",
    lat: 40.3218,
    lng: -0.5755,
    nivel: 2,
    categorias: ["historia", "pueblo", "montana"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 112,
    cooldownMin: 60,
    intereses: ["sierra", "casco_historico", "gudar"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/linares-de-mora.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/linares-de-mora.png",
  },

  {
    id: "es_ter_calanda",
    nombre: "Calanda (tambores y Buñuel)",
    emoji: "🏡",
    lat: 40.94,
    lng: -0.2347,
    nivel: 2,
    categorias: ["cultura", "tradicion", "pueblo"],
    tipo: "villa",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 60,
    intereses: ["semana_santa", "tambor", "bunuel"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calanda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calanda.png",
  },

  {
    id: "es_ter_calamocha",
    nombre: "Calamocha (eje interior hacia Zaragoza y Levante)",
    emoji: "🏡",
    lat: 40.9211,
    lng: -1.3009,
    nivel: 3,
    categorias: ["ruta", "historia", "llanura"],
    tipo: "villa",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 96,
    cooldownMin: 45,
    intereses: ["a23", "jiloca", "paso"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calamocha.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calamocha.png",
  },

  {
    id: "es_zar_monasterio_piedra",
    nombre: "Monasterio de Piedra (Nuévalos)",
    emoji: "⛪",
    lat: 41.1932396,
    lng: -1.7851055,
    nivel: 1,
    categorias: ["historia", "monasterios", "naturaleza", "paisaje", "datosCuriosos"],
    tipo: "monasterio_parque",
    radioActivacionMetros: 3000,

    perfil: "historia",
    prioridad: 170,
    cooldownMin: 240,
    intereses: ["cister", "Desamortizción de Mendizábal", "Don Pablo Muntadas Campeny", "cascadas", "jardines", "paseo", "fotografia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-piedra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_zar_nuevalos",
        "nombre": "Nuévalos (pueblo de acceso al Monasterio de Piedra)",
        "tipo": "pueblo",
        "nivel": 3,
        "lat": 41.212,
        "lng": -1.789,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-piedra.png",
  },

  // ✅ CAPITAL
  {
    id: "es_zgz_zaragoza_capital",
    nombre: "Zaragoza (capital y gran nodo del valle del Ebro)",
    emoji: "🏛️",
    lat: 41.6488,
    lng: -0.8891,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 120,
    intereses: ["a2", "a68", "ap2", "ebro", "mudéjar", "capitalidad"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zaragoza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_zgz_basilica_pilar",
        "nombre": "Basílica del Pilar",
        "tipo": "basilica",
        "nivel": 1,
        "lat": 41.6565,
        "lng": -0.8789,
        "radio": 5000
      },
      {
        "id": "es_zgz_aljaferia",
        "nombre": "Palacio de la Aljafería",
        "tipo": "palacio_fortificado",
        "nivel": 1,
        "lat": 41.656,
        "lng": -0.907,
        "radio": 5000
      },
      {
        "id": "es_zgz_utebo_torre",
        "nombre": "Utebo y su torre mudéjar",
        "tipo": "villa",
        "nivel": 3,
        "lat": 41.7081,
        "lng": -0.9992,
        "radio": 4000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zaragoza.png",
  },

  {
    id: "es_zgz_calatayud",
    nombre: "Calatayud (historia entre sierras y autovía)",
    emoji: "🏰",
    lat: 41.3539,
    lng: -1.6432,
    nivel: 1,
    categorias: ["historia", "ciudad", "arquitectura", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000,

    perfil: "historia",
    prioridad: 132,
    cooldownMin: 90,
    intereses: ["a2", "mudéjar", "fortalezas", "juderia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calatayud.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_zar_colegiata_santa_maria",
        "nombre": "Colegiata de Santa María la Mayor (Calatayud, mudéjar)",
        "tipo": "iglesia_mudejar",
        "nivel": 1,
        "lat": 41.3538,
        "lng": -1.6465,
        "radio": 6000
      },
      {
        "id": "es_zar_castillo_ayub",
        "nombre": "Castillo de Ayub (Calatayud)",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 41.352,
        "lng": -1.64,
        "radio": 7000
      },
      {
        "id": "es_zgz_bilbilis",
        "nombre": "Yacimiento romano de Bílbilis",
        "tipo": "yacimiento_romano",
        "nivel": 2,
        "lat": 41.3759,
        "lng": -1.6047,
        "radio": 4000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calatayud.png",
  },

  {
    id: "es_zgz_sos_rey_catolico",
    nombre: "Sos del Rey Católico",
    emoji: "🏰",
    lat: 42.497,
    lng: -1.2157,
    nivel: 1,
    categorias: ["historia", "pueblo", "medieval"],
    tipo: "conjunto_historico",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 130,
    cooldownMin: 75,
    intereses: ["medieval", "fernando_el_catolico", "piedra"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sos-del-rey-catolico.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sos-del-rey-catolico.png",
  },

  {
    id: "es_zgz_moncayo",
    nombre: "Parque Natural del Moncayo",
    emoji: "🌿",
    lat: 41.7867,
    lng: -1.8295,
    nivel: 1,
    categorias: ["naturaleza", "montaña", "paisaje"],
    tipo: "parque_natural",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 128,
    cooldownMin: 75,
    intereses: ["moncayo", "senderismo", "bosques", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-moncayo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-moncayo.png",
  },

  {
    id: "es_zgz_belchite_viejo",
    nombre: "Pueblo Viejo de Belchite",
    emoji: "🏛️",
    lat: 41.305,
    lng: -0.7557,
    nivel: 1,
    categorias: ["historia", "guerra", "memoria"],
    tipo: "ruinas_historicas",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["guerra_civil", "ruinas", "memoria_historica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pueblo-viejo-de-belchite.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pueblo-viejo-de-belchite.png",
  },

  {
    id: "es_zgz_tarazona",
    nombre: "Tarazona (ciudad monumental al pie del Moncayo)",
    emoji: "🏰",
    lat: 41.9022,
    lng: -1.7251,
    nivel: 1,
    categorias: ["historia", "arquitectura", "cultura"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 126,
    cooldownMin: 75,
    intereses: ["catedral", "mudéjar", "moncayo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarazona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_zgz_veruela",
        "nombre": "Monasterio de Veruela",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 41.8596,
        "lng": -1.7331,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarazona.png",
  },

  {
    id: "es_zgz_daroca",
    nombre: "Daroca (ciudad amurallada del eje interior)",
    emoji: "🏰",
    lat: 41.1153,
    lng: -1.4148,
    nivel: 1,
    categorias: ["historia", "murallas", "pueblo", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 122,
    cooldownMin: 75,
    intereses: ["murallas", "colegiata", "a23", "camino_historico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/daroca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_zar_daroca_murallas",
        "nombre": "Daroca (murallas y ciudad medieval)",
        "tipo": "ciudad_medieval",
        "nivel": 2,
        "lat": 41.1151,
        "lng": -1.4146,
        "radio": 1000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/daroca.png",
  },

  {
    id: "es_zar_embalse_tranquera",
    nombre: "Embalse de La Tranquera (cerca de Nuévalos)",
    emoji: "💧",
    lat: 41.236636,
    lng: -1.8383977,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "agua", "datosCuriosos"],
    tipo: "embalse",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["embalse", "paisaje", "foto", "agua"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/embalse-de-la-tranquera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_zar_jaraba_cascadas",
        "nombre": "Jaraba (cascadas y barrancos)",
        "tipo": "cascadas",
        "nivel": 2,
        "lat": 41.1904357,
        "lng": -1.8872258,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/embalse-de-la-tranquera.png",
  },

  {
    id: "es_zgz_fuendetodos_goya",
    nombre: "Fuendetodos (pueblo natal de Goya)",
    emoji: "🏰",
    lat: 41.3428,
    lng: -0.2883,
    nivel: 2,
    categorias: ["cultura", "arte", "pueblo"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["goya", "pintura", "grabado", "arte_aragones"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuendetodos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuendetodos.png",
  },

  {
    id: "es_zgz_carinena",
    nombre: "Cariñena (capital del vino de la comarca)",
    emoji: "🍷",
    lat: 41.3381,
    lng: -1.2248,
    nivel: 2,
    categorias: ["cultura", "gastronomia", "vino", "ruta"],
    tipo: "ciudad_vincola",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 114,
    cooldownMin: 60,
    intereses: ["vino", "denominacion_origen", "a23", "campo_de_carinena"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/carinena.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/carinena.png",
  },

  {
    id: "es_zgz_ejea",
    nombre: "Ejea de los Caballeros",
    emoji: "🏘️",
    lat: 42.1292,
    lng: -1.1375,
    nivel: 2,
    categorias: ["historia", "comarca", "llanura"],
    tipo: "ciudad_comarcal",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 112,
    cooldownMin: 60,
    intereses: ["cinco_villas", "aragón_interior", "románico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ejea-de-los-caballeros.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ejea-de-los-caballeros.png",
  },

  {
    id: "es_zgz_mequinenza",
    nombre: "Mequinenza y el mar de Aragón",
    emoji: "🌊",
    lat: 41.3774,
    lng: 0.3014,
    nivel: 2,
    categorias: ["naturaleza", "agua", "paisaje", "ruta"],
    tipo: "entorno_fluvial",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 112,
    cooldownMin: 60,
    intereses: ["ebro", "segre", "embalses", "pesca"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mequinenza-y-el-mar-de-aragon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mequinenza-y-el-mar-de-aragon.png",
  },

  {
    id: "es_zar_alhama_aragon",
    nombre: "Alhama de Aragón (balnearios y casco)",
    emoji: "♨️",
    lat: 41.2967,
    lng: -1.8942,
    nivel: 2,
    categorias: ["cultura", "aguas_termales", "parada", "datosCuriosos"],
    tipo: "balneario",
    radioActivacionMetros: 2000,

    perfil: "parada",
    prioridad: 110,
    cooldownMin: 120,
    intereses: ["balneario", "aguas_termales", "descanso", "parada_viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alhama-de-aragon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alhama-de-aragon.png",
  },

  {
    id: "es_zgz_caspe",
    nombre: "Caspe (embalse y cruce del este aragonés)",
    emoji: "🏘️",
    lat: 41.2367,
    lng: -0.0407,
    nivel: 2,
    categorias: ["historia", "agua", "ruta"],
    tipo: "ciudad_comarcal",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 60,
    intereses: ["embalse", "mar_de_aragon", "n232", "compromiso_de_caspe"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caspe.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caspe.png",
  },

  {
    id: "es_zgz_la_almunia",
    nombre: "La Almunia de Doña Godina",
    emoji: "🏡",
    lat: 41.4767,
    lng: -1.3752,
    nivel: 2,
    categorias: ["ruta", "historia", "servicios"],
    tipo: "villa",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 45,
    intereses: ["a2", "valdejalon", "paso"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-almunia-de-dona-godina.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-almunia-de-dona-godina.png",
  },

  {
    id: "es_zar_lago_termal_alhama",
    nombre: "Lago Termal de Alhama de Aragón",
    emoji: "♨️",
    lat: 41.2948505,
    lng: -1.9000086,
    nivel: 2,
    categorias: ["naturaleza", "agua", "datosCuriosos"],
    tipo: "lago_termal",
    radioActivacionMetros: 2000,

    perfil: "naturaleza",
    prioridad: 95,
    cooldownMin: 120,
    intereses: ["aguas_termales", "baño", "paisaje", "relax"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lago-termal-de-alhama-de-aragon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lago-termal-de-alhama-de-aragon.png",
  },

  {
    id: "es_zgz_alagon",
    nombre: "Alagón (puerta occidental de Zaragoza)",
    emoji: "🏡",
    lat: 41.7705,
    lng: -1.1219,
    nivel: 3,
    categorias: ["ruta", "historia", "valle"],
    tipo: "villa",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 96,
    cooldownMin: 45,
    intereses: ["a68", "ebro", "paso"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alagon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alagon.png",
  },

  {
    id: "es_zar_ateca",
    nombre: "Ateca (casco histórico)",
    emoji: "🏡",
    lat: 41.3293183,
    lng: -1.7997732,
    nivel: 3,
    categorias: ["historia", "pueblo", "cultura"],
    tipo: "pueblo",
    radioActivacionMetros: 7000,

    perfil: "parada",
    prioridad: 80,
    cooldownMin: 90,
    intereses: ["pueblo", "parada_viaje", "paseo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ateca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ateca.png",
  },

  {
    id: "es_ast_covadonga",
    nombre: "Covadonga",
    emoji: "🕍",
    lat: 43.3083,
    lng: -5.0512,
    nivel: 1,
    categorias: ["historia", "santuario", "montaña"],
    tipo: "santuario",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 125,
    cooldownMin: 60,
    intereses: ["reconquista", "santuario", "picos_de_europa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/covadonga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/covadonga.png",
  },

  {
    id: "es_ast_somiedo",
    nombre: "Somiedo y su parque natural",
    emoji: "🌿",
    lat: 43.0968,
    lng: -6.2571,
    nivel: 1,
    categorias: ["parque_natural", "montana", "fauna"],
    tipo: "parque_natural",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 123,
    cooldownMin: 60,
    intereses: ["osos", "brañas", "lagos", "montana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/somiedo-y-su-parque-natural.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/somiedo-y-su-parque-natural.png",
  },

  {
    id: "es_ast_cabo_penas",
    nombre: "Cabo Peñas",
    emoji: "🏖️",
    lat: 43.6571,
    lng: -5.8487,
    nivel: 1,
    categorias: ["costa", "acantilados", "faro"],
    tipo: "cabo",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 60,
    intereses: ["cantabrico", "acantilados", "faro", "viento", "geologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabo-penas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ast_luanco",
        "nombre": "Luanco y su villa marinera",
        "tipo": "villa_mariner",
        "nivel": 2,
        "lat": 43.615,
        "lng": -5.793,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabo-penas.png",
  },

  {
    id: "es_ast_redes",
    nombre: "Parque Natural de Redes",
    emoji: "🌿",
    lat: 43.2013,
    lng: -5.3448,
    nivel: 1,
    categorias: ["parque_natural", "bosque", "montana"],
    tipo: "parque_natural",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 121,
    cooldownMin: 55,
    intereses: ["reserva_biosfera", "hayedos", "rios", "senderismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-redes.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-redes.png",
  },

  {
    id: "es_ast_gijon_cimavilla",
    nombre: "Cimavilla y puerto de Gijón",
    emoji: "🏰",
    lat: 43.5444,
    lng: -5.6635,
    nivel: 1,
    categorias: ["costa", "casco_historico", "puerto"],
    tipo: "casco_historico",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["puerto", "historia_urbana", "cantabrico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cimavilla-y-puerto-de-gijon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ast_gijon_laboral",
        "nombre": "Universidad Laboral de Gijón",
        "tipo": "edificio_singular",
        "nivel": 2,
        "lat": 43.5215,
        "lng": -5.6225,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cimavilla-y-puerto-de-gijon.png",
  },

  {
    id: "es_ast_oviedo_catedral",
    nombre: "Catedral de Oviedo",
    emoji: "⛪",
    lat: 43.3619,
    lng: -5.8448,
    nivel: 1,
    categorias: ["historia", "catedral", "camino"],
    tipo: "catedral",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["camino_primitivo", "reliquias", "gótico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/catedral-de-oviedo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ast_naranco",
        "nombre": "Santa María del Naranco",
        "tipo": "iglesia_prerromanica",
        "nivel": 1,
        "lat": 43.3778,
        "lng": -5.8504,
        "radio": 5000
      },
      {
        "id": "es_ast_lillo",
        "nombre": "San Miguel de Lillo",
        "tipo": "iglesia_prerromanica",
        "nivel": 2,
        "lat": 43.3784,
        "lng": -5.8528,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/catedral-de-oviedo.png",
  },

  {
    id: "es_ast_fitu",
    nombre: "Mirador del Fitu",
    emoji: "🔭",
    lat: 43.449,
    lng: -5.1904,
    nivel: 1,
    categorias: ["mirador", "montana", "paisaje"],
    tipo: "mirador",
    radioActivacionMetros: 5500,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 55,
    intereses: ["picos_de_europa", "costa", "vistas", "panoramica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mirador-del-fitu.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mirador-del-fitu.png",
  },

  {
    id: "es_ast_pozo_soton",
    nombre: "Pozo Sotón",
    emoji: "🏭",
    lat: 43.2918,
    lng: -5.6535,
    nivel: 1,
    categorias: ["industria", "mineria", "patrimonio"],
    tipo: "patrimonio_industrial",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 119,
    cooldownMin: 55,
    intereses: ["mineria", "pozo", "revolucion_industrial", "cuencas_mineras"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pozo-soton.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ast_mumi",
        "nombre": "Museo de la Minería y de la Industria (MUMI)",
        "tipo": "museo",
        "nivel": 2,
        "lat": 43.2885,
        "lng": -5.6415,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pozo-soton.png",
  },

  {
    id: "es_ast_bufones_pria",
    nombre: "Bufones de Pría",
    emoji: "🌊",
    lat: 43.4442,
    lng: -4.9398,
    nivel: 1,
    categorias: ["costa", "geologia", "datosCuriosos"],
    tipo: "fenomeno_natural",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 118,
    cooldownMin: 50,
    intereses: ["oleaje", "karst", "acantilados", "mar"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bufones-de-pria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bufones-de-pria.png",
  },

  {
    id: "es_ast_playa_silencio",
    nombre: "Playa del Silencio",
    emoji: "🏖️",
    lat: 43.5639,
    lng: -6.308,
    nivel: 1,
    categorias: ["costa", "playa", "paisaje"],
    tipo: "playa_paisajistica",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 116,
    cooldownMin: 50,
    intereses: ["acantilados", "miradores", "costa_verde"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/playa-del-silencio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/playa-del-silencio.png",
  },

  {
    id: "es_ast_cudillero",
    nombre: "Cudillero",
    emoji: "⚓",
    lat: 43.5635,
    lng: -6.1458,
    nivel: 1,
    categorias: ["costa", "pueblo", "anfiteatro"],
    tipo: "villa_marinera",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 115,
    cooldownMin: 50,
    intereses: ["casas_colgantes", "puerto", "cantabrico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cudillero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cudillero.png",
  },

  {
    id: "es_ast_cangas_onis_puente",
    nombre: "Cangas de Onís y su puente",
    emoji: "🌉",
    lat: 43.3506,
    lng: -5.1288,
    nivel: 1,
    categorias: ["historia", "puente", "pueblo"],
    tipo: "puente_historico",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 115,
    cooldownMin: 50,
    intereses: ["puente_romano", "oriente_asturiano", "sella"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cangas-de-onis-y-su-puente.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cangas-de-onis-y-su-puente.png",
  },

  {
    id: "es_ast_santa_cristina_lena",
    nombre: "Santa Cristina de Lena",
    emoji: "⛪",
    lat: 43.1588,
    lng: -5.8274,
    nivel: 1,
    categorias: ["historia", "prerromanico", "unesco"],
    tipo: "iglesia_prerromanica",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 115,
    cooldownMin: 50,
    intereses: ["prerromanico", "unesco", "puerto_pajares"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-cristina-de-lena.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-cristina-de-lena.png",
  },

  {
    id: "es_ast_cabo_vidio",
    nombre: "Cabo Vidio",
    emoji: "🏖️",
    lat: 43.5632,
    lng: -6.3827,
    nivel: 1,
    categorias: ["costa", "faro", "acantilados"],
    tipo: "cabo",
    radioActivacionMetros: 5500,

    perfil: "naturaleza",
    prioridad: 114,
    cooldownMin: 50,
    intereses: ["faro", "mar", "vistas", "acantilados"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabo-vidio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabo-vidio.png",
  },

  {
    id: "es_ast_taramundi",
    nombre: "Taramundi",
    emoji: "⛰️",
    lat: 43.3613,
    lng: -7.1118,
    nivel: 1,
    categorias: ["montana", "tradicion", "artesania"],
    tipo: "pueblo_montana",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 113,
    cooldownMin: 55,
    intereses: ["cuchilleria", "etnografia", "aldeas", "occidente"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/taramundi.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/taramundi.png",
  },

  {
    id: "es_ast_senda_oso",
    nombre: "Senda del Oso (Tuñón)",
    emoji: "🥾",
    lat: 43.2406,
    lng: -5.9682,
    nivel: 1,
    categorias: ["naturaleza", "via_verde", "familia"],
    tipo: "ruta_natural",
    radioActivacionMetros: 5500,

    perfil: "familia",
    prioridad: 112,
    cooldownMin: 50,
    intereses: ["bicicleta", "sendas", "oseras", "bosque"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/senda-del-oso.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/senda-del-oso.png",
  },

  {
    id: "es_ast_san_isidro",
    nombre: "Puerto de San Isidro",
    emoji: "⛰️",
    lat: 43.0528,
    lng: -5.3413,
    nivel: 1,
    categorias: ["montana", "puerto", "paisaje"],
    tipo: "puerto_montana",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 110,
    cooldownMin: 50,
    intereses: ["cordillera", "nieve", "frontera", "vistas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-de-san-isidro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-de-san-isidro.png",
  },

  {
    id: "es_ast_colunga_muja",
    nombre: "Colunga y el Museo del Jurásico",
    emoji: "🖼️",
    lat: 43.4857,
    lng: -5.2711,
    nivel: 2,
    categorias: ["costa", "museo", "familia"],
    tipo: "museo",
    radioActivacionMetros: 5000,

    perfil: "familia",
    prioridad: 103,
    cooldownMin: 45,
    intereses: ["dinosaurios", "jurásico", "costa_jurásica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/colunga-y-el-museo-del-jurasico.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ast_lastres",
        "nombre": "Lastres",
        "tipo": "villa_marinera",
        "nivel": 2,
        "lat": 43.5114,
        "lng": -5.2727,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/colunga-y-el-museo-del-jurasico.png",
  },

  {
    id: "es_ast_teverga_prehistoria",
    nombre: "Parque de la Prehistoria de Teverga",
    emoji: "🔬",
    lat: 43.1581,
    lng: -6.1014,
    nivel: 2,
    categorias: ["museo", "prehistoria", "familia"],
    tipo: "centro_interpretacion",
    radioActivacionMetros: 4500,

    perfil: "familia",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["arte_rupestre", "prehistoria", "cuevas", "familia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-de-la-prehistoria-de-teverga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-de-la-prehistoria-de-teverga.png",
  },

  {
    id: "es_ast_llanes",
    nombre: "Llanes y sus cubos de la memoria",
    emoji: "🐚",
    lat: 43.4206,
    lng: -4.7544,
    nivel: 2,
    categorias: ["costa", "casco_historico", "arte"],
    tipo: "villa_costera",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["puerto", "arte_publico", "oriente_asturiano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/llanes-y-sus-cubos-de-la-memoria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/llanes-y-sus-cubos-de-la-memoria.png",
  },

  {
    id: "es_ast_ribadesella",
    nombre: "Ribadesella y el Sella",
    emoji: "🐚",
    lat: 43.4612,
    lng: -5.0595,
    nivel: 2,
    categorias: ["costa", "río", "pueblo"],
    tipo: "villa_costera",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["sella", "cueva_tito_bustillo", "desembocadura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ribadesella-y-el-sella.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ribadesella-y-el-sella.png",
  },

  {
    id: "es_ast_aviles_casco_historico",
    nombre: "Avilés (casco histórico)",
    emoji: "🏰",
    lat: 43.5558,
    lng: -5.9248,
    nivel: 2,
    categorias: ["historia", "casco_historico", "ría"],
    tipo: "casco_historico",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 40,
    intereses: ["arcadas", "puerto", "industria_y_patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aviles.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ast_aviles_niemeyer",
        "nombre": "Centro Niemeyer",
        "tipo": "centro_cultural",
        "nivel": 2,
        "lat": 43.5606,
        "lng": -5.9258,
        "radio": 4000
      },
      {
        "id": "es_ast_salinas",
        "nombre": "Salinas y el museo de anclas",
        "tipo": "frente_maritimo",
        "nivel": 2,
        "lat": 43.5763,
        "lng": -5.9591,
        "radio": 4200
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aviles.png",
  },

  {
    id: "es_ast_tineo",
    nombre: "Tineo y el Camino Primitivo",
    emoji: "🏰",
    lat: 43.3379,
    lng: -6.4142,
    nivel: 2,
    categorias: ["camino", "villa", "historia"],
    tipo: "villa_historica",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 97,
    cooldownMin: 40,
    intereses: ["camino_primitivo", "occidente", "peregrinacion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tineo-y-el-camino-primitivo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tineo-y-el-camino-primitivo.png",
  },

  {
    id: "es_ast_tazones",
    nombre: "Tazones, puerto histórico de Villaviciosa",
    emoji: "⚓",
    lat: 43.5381,
    lng: -5.392,
    nivel: 2,
    categorias: ["costa", "pueblo", "puerto"],
    tipo: "puerto_historico",
    radioActivacionMetros: 4200,

    perfil: "cultura",
    prioridad: 97,
    cooldownMin: 40,
    intereses: ["carlos_v", "ria", "gastronomia", "historia_marina"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tazones-puerto-historico-de-villaviciosa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tazones-puerto-historico-de-villaviciosa.png",
  },

  {
    id: "es_ast_tapia_casariego",
    nombre: "Tapia de Casariego",
    emoji: "⚓",
    lat: 43.5691,
    lng: -6.9436,
    nivel: 2,
    categorias: ["costa", "villa_mariner", "surf"],
    tipo: "villa_mariner",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 96,
    cooldownMin: 40,
    intereses: ["mar", "surf", "puerto", "occidente"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tapia-de-casariego.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tapia-de-casariego.png",
  },

  {
    id: "es_ast_luarca",
    nombre: "Luarca, villa blanca de la costa verde",
    emoji: "⚓",
    lat: 43.5455,
    lng: -6.5352,
    nivel: 2,
    categorias: ["costa", "pueblo", "paisaje"],
    tipo: "villa_marinera",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["puerto", "costa_verde", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/luarca-villa-blanca-de-la-costa-verde.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/luarca-villa-blanca-de-la-costa-verde.png",
  },

  {
    id: "es_ast_villaviciosa",
    nombre: "Villaviciosa y la ría",
    emoji: "🐚",
    lat: 43.4813,
    lng: -5.4359,
    nivel: 2,
    categorias: ["ría", "pueblo", "sidra"],
    tipo: "villa_costera",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["sidra", "ría", "románico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villaviciosa-y-la-ria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villaviciosa-y-la-ria.png",
  },

  {
    id: "es_ast_mieres",
    nombre: "Mieres y el valle minero",
    emoji: "🌄",
    lat: 43.2508,
    lng: -5.775,
    nivel: 2,
    categorias: ["patrimonio_industrial", "valle", "ruta"],
    tipo: "ciudad_valle",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["mineria", "valle_del_caudal", "a_66"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mieres-y-el-valle-minero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mieres-y-el-valle-minero.png",
  },

  {
    id: "es_ast_grado",
    nombre: "Grado y el camino interior",
    emoji: "🥾",
    lat: 43.3884,
    lng: -6.074,
    nivel: 3,
    categorias: ["pueblo", "mercado", "ruta"],
    tipo: "villa_camino",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 75,
    cooldownMin: 30,
    intereses: ["camino_primitivo", "mercados", "vega"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/grado-y-el-camino-interior.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/grado-y-el-camino-interior.png",
  },

  {
    id: "es_can_altamira",
    nombre: "Cueva y museo de Altamira",
    emoji: "🕳️",
    lat: 43.3772,
    lng: -4.1223,
    nivel: 1,
    categorias: ["historia", "arte_rupestre", "unesco"],
    tipo: "cueva_museo",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 125,
    cooldownMin: 60,
    intereses: ["prehistoria", "unesco", "arte_rupestre"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cueva-y-museo-de-altamira.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_can_santillana",
        "nombre": "Santillana del Mar",
        "tipo": "casco_historico",
        "nivel": 1,
        "lat": 43.389,
        "lng": -4.1082,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cueva-y-museo-de-altamira.png",
  },

  {
    id: "es_can_costa_quebrada",
    nombre: "Costa Quebrada",
    emoji: "🌊",
    lat: 43.4768,
    lng: -3.9187,
    nivel: 1,
    categorias: ["costa", "geologia", "geoparque"],
    tipo: "litoral_geologico",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 123,
    cooldownMin: 55,
    intereses: ["flysch", "acantilados", "geologia", "oleaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/costa-quebrada.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_can_mogro_liencres",
        "nombre": "Mogro y las dunas de Liencres",
        "tipo": "dunas",
        "nivel": 1,
        "lat": 43.4495,
        "lng": -3.9637,
        "radio": 5500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/costa-quebrada.png",
  },

  {
    id: "es_can_collados_ason",
    nombre: "Collados del Asón",
    emoji: "🌄",
    lat: 43.1988,
    lng: -3.5955,
    nivel: 1,
    categorias: ["parque_natural", "montana", "cascadas"],
    tipo: "paisaje_natural",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 60,
    intereses: ["nacimiento_del_ason", "miradores", "caliza", "senderismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/collados-del-ason.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_can_lunada",
        "nombre": "Puerto y mirador de Lunada",
        "tipo": "puerto_montana",
        "nivel": 1,
        "lat": 43.1708,
        "lng": -3.6348,
        "radio": 5500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/collados-del-ason.png",
  },

  {
    id: "es_can_cabarceno",
    nombre: "Parque de la Naturaleza de Cabárceno",
    emoji: "🌿",
    lat: 43.3483,
    lng: -3.8363,
    nivel: 1,
    categorias: ["naturaleza", "fauna", "parque"],
    tipo: "parque_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["fauna", "mina_a_cielo_abierto", "familias"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-de-la-naturaleza-de-cabarceno.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-de-la-naturaleza-de-cabarceno.png",
  },

  {
    id: "es_can_santander_bahia",
    nombre: "Bahía y centro histórico de Santander",
    emoji: "⛵",
    lat: 43.4627,
    lng: -3.805,
    nivel: 1,
    categorias: ["costa", "ciudad", "puerto"],
    tipo: "frente_maritimo",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["bahia", "puerto", "historia_urbana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bahia-y-centro-historico-de-santander.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_can_santander_magdalena",
        "nombre": "Península de la Magdalena",
        "tipo": "peninsula",
        "nivel": 1,
        "lat": 43.4623,
        "lng": -3.7717,
        "radio": 6000
      },
      {
        "id": "es_can_santander_centro_botin",
        "nombre": "Centro Botín",
        "tipo": "centro_cultural",
        "nivel": 2,
        "lat": 43.4624,
        "lng": -3.8014,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bahia-y-centro-historico-de-santander.png",
  },

  {
    id: "es_can_soplao",
    nombre: "Cueva El Soplao",
    emoji: "🕳️",
    lat: 43.3008,
    lng: -4.4259,
    nivel: 1,
    categorias: ["cueva", "geologia", "familia"],
    tipo: "cueva",
    radioActivacionMetros: 5000,

    perfil: "familia",
    prioridad: 120,
    cooldownMin: 55,
    intereses: ["espeleologia", "excéntricas", "mineria", "karst"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cueva-el-soplao.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cueva-el-soplao.png",
  },

  {
    id: "es_can_oyambre",
    nombre: "Parque Natural de Oyambre",
    emoji: "🌿",
    lat: 43.3913,
    lng: -4.3948,
    nivel: 1,
    categorias: ["costa", "parque_natural", "marismas"],
    tipo: "parque_natural",
    radioActivacionMetros: 5500,

    perfil: "naturaleza",
    prioridad: 118,
    cooldownMin: 55,
    intereses: ["playas", "marismas", "aves", "occidente"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-oyambre.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_can_san_vicente_barquera",
        "nombre": "San Vicente de la Barquera",
        "tipo": "villa_marinera",
        "nivel": 1,
        "lat": 43.3854,
        "lng": -4.3987,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-oyambre.png",
  },

  {
    id: "es_can_ajo_faro",
    nombre: "Faro de Ajo y acantilados",
    emoji: "🗼",
    lat: 43.4959,
    lng: -3.6079,
    nivel: 1,
    categorias: ["costa", "faro", "acantilados"],
    tipo: "faro",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 117,
    cooldownMin: 50,
    intereses: ["costa_oriental", "aves", "acantilados", "mar"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/faro-de-ajo-y-acantilados.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_can_isla_arnuero",
        "nombre": "Isla y la costa de Arnuero",
        "tipo": "frente_costero",
        "nivel": 2,
        "lat": 43.4987,
        "lng": -3.5675,
        "radio": 4200
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/faro-de-ajo-y-acantilados.png",
  },

  {
    id: "es_can_lierganes",
    nombre: "Liérganes",
    emoji: "🏰",
    lat: 43.3426,
    lng: -3.7426,
    nivel: 1,
    categorias: ["pueblo", "historia", "rio"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 116,
    cooldownMin: 55,
    intereses: ["leyenda_hombre_pez", "pasiegos", "arquitectura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lierganes.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lierganes.png",
  },

  {
    id: "es_can_hermida_desfiladero",
    nombre: "Desfiladero de La Hermida",
    emoji: "🏔️",
    lat: 43.2495,
    lng: -4.658,
    nivel: 1,
    categorias: ["paisaje", "garganta", "ruta"],
    tipo: "desfiladero",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 115,
    cooldownMin: 55,
    intereses: ["deva", "paredes_calizas", "acceso_a_liebana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/desfiladero-de-la-hermida.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/desfiladero-de-la-hermida.png",
  },

  {
    id: "es_can_fontibre",
    nombre: "Fontibre, nacimiento del Ebro",
    emoji: "💧",
    lat: 43.017,
    lng: -4.1566,
    nivel: 1,
    categorias: ["rio", "nacimiento", "naturaleza"],
    tipo: "nacimiento_rio",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 115,
    cooldownMin: 50,
    intereses: ["ebro", "manantial", "campoo", "hidrologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fontibre-nacimiento-del-ebro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_can_reinosa",
        "nombre": "Reinosa, puerta de Campoo",
        "tipo": "ciudad_montana",
        "nivel": 2,
        "lat": 43.0007,
        "lng": -4.1387,
        "radio": 4000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fontibre-nacimiento-del-ebro.png",
  },

  {
    id: "es_can_comillas",
    nombre: "Comillas",
    emoji: "🐚",
    lat: 43.3858,
    lng: -4.2913,
    nivel: 1,
    categorias: ["costa", "arquitectura", "pueblo"],
    tipo: "villa_costera",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 115,
    cooldownMin: 50,
    intereses: ["modernismo", "universidad_pontificia", "costa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/comillas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_can_comillas_capricho",
        "nombre": "El Capricho de Gaudí",
        "tipo": "edificio_singular",
        "nivel": 2,
        "lat": 43.3865,
        "lng": -4.2928,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/comillas.png",
  },

  {
    id: "es_can_ramales_cullalvera",
    nombre: "Ramales de la Victoria y cueva de Cullalvera",
    emoji: "🕳️",
    lat: 43.2578,
    lng: -3.4656,
    nivel: 1,
    categorias: ["cueva", "prehistoria", "karst"],
    tipo: "cueva",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 114,
    cooldownMin: 50,
    intereses: ["karst", "cuevas", "oriente", "geologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ramales-de-la-victoria-y-cueva-de-cullalvera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ramales-de-la-victoria-y-cueva-de-cullalvera.png",
  },

  {
    id: "es_can_juliobriga",
    nombre: "Julióbriga y Retortillo",
    emoji: "🏛️",
    lat: 42.9972,
    lng: -4.0217,
    nivel: 1,
    categorias: ["roma", "arqueologia", "historia"],
    tipo: "yacimiento_romano",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 113,
    cooldownMin: 50,
    intereses: ["cantabros", "roma", "campoo", "arqueologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/juliobriga-y-retortillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/juliobriga-y-retortillo.png",
  },

  {
    id: "es_can_barcena_pie_concha",
    nombre: "Bárcena de Pie de Concha y la calzada romana",
    emoji: "📜",
    lat: 43.1255,
    lng: -4.049,
    nivel: 1,
    categorias: ["historia", "calzada_romana", "valle"],
    tipo: "sitio_historico",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 112,
    cooldownMin: 50,
    intereses: ["romanizacion", "besaya", "camino", "montana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/barcena-de-pie-de-concha-y-la-calzada-romana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/barcena-de-pie-de-concha-y-la-calzada-romana.png",
  },

  {
    id: "es_can_santo_toribio",
    nombre: "Monasterio de Santo Toribio de Liébana",
    emoji: "⛪",
    lat: 43.1513,
    lng: -4.6438,
    nivel: 1,
    categorias: ["monasterio", "historia", "religion"],
    tipo: "monasterio",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 111,
    cooldownMin: 50,
    intereses: ["liebana", "jubileo", "lignum_crucis", "peregrinacion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santo-toribio-de-liebana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santo-toribio-de-liebana.png",
  },

  {
    id: "es_can_potes",
    nombre: "Potes y la Liébana",
    emoji: "⛰️",
    lat: 43.1531,
    lng: -4.6233,
    nivel: 1,
    categorias: ["montaña", "pueblo", "valle"],
    tipo: "villa_montana",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 50,
    intereses: ["liebana", "torres", "picos_de_europa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/potes-y-la-liebana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/potes-y-la-liebana.png",
  },

  {
    id: "es_can_castro_urdiales",
    nombre: "Castro Urdiales",
    emoji: "🐚",
    lat: 43.3828,
    lng: -3.2196,
    nivel: 1,
    categorias: ["costa", "puerto", "casco_historico"],
    tipo: "villa_costera",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 50,
    intereses: ["bahia", "iglesia_gotica", "castillo_faro"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-urdiales.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-urdiales.png",
  },

  {
    id: "es_can_puente_viesgo",
    nombre: "Puente Viesgo y sus cuevas prehistóricas",
    emoji: "🕳️",
    lat: 43.2985,
    lng: -3.964,
    nivel: 2,
    categorias: ["prehistoria", "cuevas", "valle"],
    tipo: "cuevas",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["cuevas_del_monte_castillo", "arte_rupestre", "besaya"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-viesgo-y-sus-cuevas-prehistoricas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-viesgo-y-sus-cuevas-prehistoricas.png",
  },

  {
    id: "es_can_vega_pas",
    nombre: "Vega de Pas",
    emoji: "⛰️",
    lat: 43.1576,
    lng: -3.7828,
    nivel: 2,
    categorias: ["montana", "valles_pasiegos", "tradicion"],
    tipo: "pueblo_montana",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 99,
    cooldownMin: 45,
    intereses: ["pasiegos", "cabañas", "sobaos", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vega-de-pas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vega-de-pas.png",
  },

  {
    id: "es_can_santona_buciero",
    nombre: "Santoña y el monte Buciero",
    emoji: "🐚",
    lat: 43.4454,
    lng: -3.4555,
    nivel: 2,
    categorias: ["costa", "naturaleza", "pueblo"],
    tipo: "villa_costera",
    radioActivacionMetros: 4500,

    perfil: "naturaleza",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["anchoas", "marismas", "fortes"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santona-y-el-monte-buciero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santona-y-el-monte-buciero.png",
  },

  {
    id: "es_can_cabezon_secuoyas",
    nombre: "Bosque de secuoyas de Cabezón de la Sal",
    emoji: "🌲",
    lat: 43.3077,
    lng: -4.2326,
    nivel: 2,
    categorias: ["naturaleza", "bosque", "datosCuriosos"],
    tipo: "bosque",
    radioActivacionMetros: 4500,

    perfil: "naturaleza",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["secuoyas", "reforestacion", "cantabrico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bosque-de-secuoyas-de-cabezon-de-la-sal.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bosque-de-secuoyas-de-cabezon-de-la-sal.png",
  },

  {
    id: "es_can_suances",
    nombre: "Suances y la ría de San Martín",
    emoji: "🐚",
    lat: 43.4266,
    lng: -4.0433,
    nivel: 2,
    categorias: ["costa", "ria", "surf"],
    tipo: "villa_costera",
    radioActivacionMetros: 4300,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["playas", "sur", "ria", "cantabrico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/suances-y-la-ria-de-san-martin.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/suances-y-la-ria-de-san-martin.png",
  },

  {
    id: "es_can_barcena_mayor",
    nombre: "Bárcena Mayor",
    emoji: "🏡",
    lat: 43.1968,
    lng: -4.2163,
    nivel: 2,
    categorias: ["pueblo", "montaña", "tradicion"],
    tipo: "pueblo_tradicional",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["saja_besaya", "arquitectura_popular", "montaña"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/barcena-mayor.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/barcena-mayor.png",
  },

  {
    id: "es_can_cartes",
    nombre: "Cartes, villa del Camino Real",
    emoji: "🏰",
    lat: 43.3235,
    lng: -4.0689,
    nivel: 2,
    categorias: ["historia", "villa", "camino_real"],
    tipo: "villa_historica",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 94,
    cooldownMin: 40,
    intereses: ["camino_real", "casco_historico", "besaya"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cartes-villa-del-camino-real.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_can_torrelavega",
        "nombre": "Torrelavega, nudo del Besaya",
        "tipo": "nudo_viario",
        "nivel": 2,
        "lat": 43.3514,
        "lng": -4.047,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cartes-villa-del-camino-real.png",
  },

  {
    id: "es_can_ampuero",
    nombre: "Ampuero y el valle bajo del Asón",
    emoji: "🌊",
    lat: 43.3439,
    lng: -3.4173,
    nivel: 2,
    categorias: ["valle", "rio", "pueblo"],
    tipo: "valle_fluvial",
    radioActivacionMetros: 4200,

    perfil: "naturaleza",
    prioridad: 93,
    cooldownMin: 40,
    intereses: ["ason", "valles", "oriente", "puente"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ampuero-y-el-valle-bajo-del-ason.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ampuero-y-el-valle-bajo-del-ason.png",
  },

  {
    id: "es_can_pechon",
    nombre: "Pechón y la Tina Mayor",
    emoji: "🌊",
    lat: 43.3821,
    lng: -4.4898,
    nivel: 2,
    categorias: ["costa", "estuario", "paisaje"],
    tipo: "estuario",
    radioActivacionMetros: 4200,

    perfil: "naturaleza",
    prioridad: 91,
    cooldownMin: 40,
    intereses: ["tina_mayor", "desembocadura", "frontera", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pechon-y-la-tina-mayor.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pechon-y-la-tina-mayor.png",
  },

  {
    id: "es_can_tudanca",
    nombre: "Tudanca",
    emoji: "⛰️",
    lat: 43.153,
    lng: -4.3736,
    nivel: 2,
    categorias: ["montana", "pueblo", "tradicion"],
    tipo: "pueblo_montana",
    radioActivacionMetros: 4300,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["valles", "casas_montanesas", "saja_nansa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tudanca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tudanca.png",
  },

  {
    id: "es_can_laredo",
    nombre: "Laredo y su gran arenal",
    emoji: "🐚",
    lat: 43.4113,
    lng: -3.413,
    nivel: 2,
    categorias: ["costa", "playa", "pueblo"],
    tipo: "villa_costera",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["playas", "puerto", "bahia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laredo-y-su-gran-arenal.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laredo-y-su-gran-arenal.png",
  },

  {
    id: "es_bur_santo_domingo_silos",
    nombre: "Monasterio de Santo Domingo de Silos",
    emoji: "⛪",
    lat: 41.9626,
    lng: -3.4196,
    nivel: 1,
    categorias: ["historia", "monasterios", "arquitectura", "religion"],
    tipo: "monasterio",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 145,
    cooldownMin: 180,
    intereses: ["monasterio", "arte", "arquitectura", "religion", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santo-domingo-de-silos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santo-domingo-de-silos.png",
  },

  {
    id: "es_bur_atapuerca",
    nombre: "Yacimientos de Atapuerca",
    emoji: "🦕",
    lat: 42.378,
    lng: -3.5079,
    nivel: 1,
    categorias: ["historia", "arqueologia", "datosCuriosos", "cultura"],
    tipo: "yacimiento_prehistorico",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 140,
    cooldownMin: 150,
    intereses: ["arqueologia", "poblamiento", "historia_antigua", "patrimonio", "visita"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yacimientos-de-atapuerca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yacimientos-de-atapuerca.png",
  },

  {
    id: "es_bur_clunia",
    nombre: "Ciudad romana de Clunia Sulpicia",
    emoji: "🏛️",
    lat: 41.8042,
    lng: -3.4781,
    nivel: 1,
    categorias: ["historia", "arqueologia", "datosCuriosos", "cultura"],
    tipo: "ciudad_romana",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 140,
    cooldownMin: 150,
    intereses: ["arqueologia", "poblamiento", "historia_antigua", "patrimonio", "visita"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-romana-de-clunia-sulpicia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-romana-de-clunia-sulpicia.png",
  },

  // ✅ CAPITAL
  {
    id: "es_bur_capital_burgos",
    nombre: "Burgos (capital de provincia)",
    emoji: "🏛️",
    lat: 42.3439,
    lng: -3.6969,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "patrimonio", "cultura", "museos", "paseo_urbano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/burgos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_bur_huelgas_reales",
        "nombre": "Monasterio de las Huelgas Reales",
        "tipo": "monasterio",
        "nivel": 1,
        "lat": 42.3344,
        "lng": -3.7169,
        "radio": 4000
      },
      {
        "id": "es_bur_catedral_burgos",
        "nombre": "Catedral de Burgos",
        "tipo": "catedral",
        "nivel": 1,
        "lat": 42.34,
        "lng": -3.7043,
        "radio": 1800
      },
      {
        "id": "es_bur_cartuja_miraflores",
        "nombre": "Cartuja de Miraflores",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 42.3277,
        "lng": -3.6596,
        "radio": 3000
      },
      {
        "id": "es_bur_san_pedro_cardena",
        "nombre": "Monasterio de San Pedro de Cardeña",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 42.3027,
        "lng": -3.6201,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/burgos.png",
  },

  {
    id: "es_bur_lerma",
    nombre: "Lerma",
    emoji: "🏰",
    lat: 42.0262,
    lng: -3.7586,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a1", "duques_de_lerma"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lerma.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lerma.png",
  },

  {
    id: "es_bur_aranda_duero",
    nombre: "Aranda de Duero",
    emoji: "🏰",
    lat: 41.6717,
    lng: -3.6892,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a1", "ribera_del_duero"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aranda-de-duero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aranda-de-duero.png",
  },

  {
    id: "es_bur_frias",
    nombre: "Frías",
    emoji: "🏰",
    lat: 42.7608,
    lng: -3.2949,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "ciudad_medieval", "ebro"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/frias.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/frias.png",
  },

  {
    id: "es_bur_miranda_ebro",
    nombre: "Miranda de Ebro",
    emoji: "🏰",
    lat: 42.6865,
    lng: -2.947,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "nudo_logistico", "ebro", "ap1"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/miranda-de-ebro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/miranda-de-ebro.png",
  },

  {
    id: "es_bur_ona_san_salvador",
    nombre: "Monasterio de San Salvador de Oña",
    emoji: "⛪",
    lat: 42.7356,
    lng: -3.4147,
    nivel: 2,
    categorias: ["historia", "monasterios", "arquitectura", "religion"],
    tipo: "monasterio",
    radioActivacionMetros: 3000,

    perfil: "historia",
    prioridad: 126,
    cooldownMin: 120,
    intereses: ["monasterio", "arte", "arquitectura", "religion", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-san-salvador-de-ona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-san-salvador-de-ona.png",
  },

  {
    id: "es_bur_covarrubias",
    nombre: "Covarrubias",
    emoji: "🏰",
    lat: 42.0598,
    lng: -3.5191,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "arleanza", "castilla_medieval"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/covarrubias.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/covarrubias.png",
  },

  {
    id: "es_bur_briviesca",
    nombre: "Briviesca",
    emoji: "🏰",
    lat: 42.5492,
    lng: -3.3237,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a1", "la_bureba"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/briviesca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/briviesca.png",
  },

  {
    id: "es_bur_sasamon",
    nombre: "Sasamón",
    emoji: "🏰",
    lat: 42.4173,
    lng: -4.0432,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "camino_a62", "origen_romano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sasamon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sasamon.png",
  },

  {
    id: "es_bur_penaranda_duero",
    nombre: "Peñaranda de Duero",
    emoji: "🏰",
    lat: 41.6886,
    lng: -3.4802,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "castillo", "ribera_del_duero"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/penaranda-de-duero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/penaranda-de-duero.png",
  },

  {
    id: "es_bur_poza_sal",
    nombre: "Poza de la Sal",
    emoji: "🏰",
    lat: 42.6654,
    lng: -3.5036,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "salinas"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "felix_rodriguez_de_la_fuente", "sal"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/poza-de-la-sal.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/poza-de-la-sal.png",
  },

  {
    id: "es_bur_pancorbo_desfiladero",
    nombre: "Desfiladero de Pancorbo",
    emoji: "🏔️",
    lat: 42.635,
    lng: -3.1108,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "geologia"],
    tipo: "desfiladero",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 116,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "paso_natural", "a1", "cantabrico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/desfiladero-de-pancorbo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/desfiladero-de-pancorbo.png",
  },

  {
    id: "es_bur_orbaneja_castillo",
    nombre: "Orbaneja del Castillo",
    emoji: "🪨",
    lat: 42.7572,
    lng: -3.7907,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "cascadas"],
    tipo: "paraje_karstico",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 112,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "karst", "cascada", "cañones"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/orbaneja-del-castillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/orbaneja-del-castillo.png",
  },

  // ✅ CAPITAL
  {
    id: "es_leo_capital_leon",
    nombre: "León (capital de provincia)",
    emoji: "🏛️",
    lat: 42.5987,
    lng: -5.5671,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "patrimonio", "cultura", "museos", "paseo_urbano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/leon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_leo_san_isidoro",
        "nombre": "Real Colegiata de San Isidoro",
        "tipo": "colegiata",
        "nivel": 1,
        "lat": 42.6015,
        "lng": -5.5704,
        "radio": 1800
      },
      {
        "id": "es_leo_catedral_leon",
        "nombre": "Catedral de León",
        "tipo": "catedral",
        "nivel": 1,
        "lat": 42.598,
        "lng": -5.567,
        "radio": 1800
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/leon.png",
  },

  {
    id: "es_leo_las_medulas",
    nombre: "Las Médulas",
    emoji: "🌄",
    lat: 42.4614,
    lng: -6.7701,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "unesco", "mineria_romana"],
    tipo: "paisaje_cultural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 130,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "romanos", "oro", "unesco"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-medulas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-medulas.png",
  },

  {
    id: "es_leo_ponferrada",
    nombre: "Ponferrada",
    emoji: "🏰",
    lat: 42.5463,
    lng: -6.5962,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "bierzo", "a6"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponferrada.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_leo_castillo_ponferrada",
        "nombre": "Castillo de los Templarios de Ponferrada",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 42.5475,
        "lng": -6.5968,
        "radio": 2200
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponferrada.png",
  },

  {
    id: "es_leo_astorga",
    nombre: "Astorga",
    emoji: "🏰",
    lat: 42.4588,
    lng: -6.056,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a6", "camino_de_santiago"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/astorga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_leo_palacio_episcopal_astorga",
        "nombre": "Palacio Episcopal de Astorga",
        "tipo": "palacio",
        "nivel": 1,
        "lat": 42.4587,
        "lng": -6.0575,
        "radio": 1800
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/astorga.png",
  },

  {
    id: "es_leo_villafranca_bierzo",
    nombre: "Villafranca del Bierzo",
    emoji: "🏰",
    lat: 42.6074,
    lng: -6.81,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "camino_de_santiago", "a6"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villafranca-del-bierzo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villafranca-del-bierzo.png",
  },

  {
    id: "es_leo_carracedo",
    nombre: "Monasterio de Santa María de Carracedo",
    emoji: "⛪",
    lat: 42.549,
    lng: -6.7368,
    nivel: 2,
    categorias: ["historia", "monasterios", "arquitectura", "religion"],
    tipo: "monasterio",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 126,
    cooldownMin: 120,
    intereses: ["monasterio", "arte", "arquitectura", "religion", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santa-maria-de-carracedo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santa-maria-de-carracedo.png",
  },

  {
    id: "es_leo_hospital_orbigo",
    nombre: "Hospital de Órbigo",
    emoji: "🏰",
    lat: 42.4635,
    lng: -5.8826,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "puente", "camino_de_santiago", "a6"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hospital-de-orbigo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hospital-de-orbigo.png",
  },

  {
    id: "es_leo_sahagun",
    nombre: "Sahagún",
    emoji: "🏰",
    lat: 42.3721,
    lng: -5.0298,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "mudejar"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a231", "mudejar", "camino_de_santiago"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sahagun.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sahagun.png",
  },

  {
    id: "es_leo_castrillo_polvazares",
    nombre: "Castrillo de los Polvazares",
    emoji: "🏰",
    lat: 42.4629,
    lng: -6.1268,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "maragateria", "arrieros"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castrillo-de-los-polvazares.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castrillo-de-los-polvazares.png",
  },

  {
    id: "es_leo_valencia_don_juan",
    nombre: "Valencia de Don Juan",
    emoji: "🏰",
    lat: 42.2935,
    lng: -5.5207,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "esla", "sur_leones"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valencia-de-don-juan.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valencia-de-don-juan.png",
  },

  {
    id: "es_leo_mansilla_mulas",
    nombre: "Mansilla de las Mulas",
    emoji: "🏰",
    lat: 42.4972,
    lng: -5.4176,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "camino_de_santiago", "murallas", "a60"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mansilla-de-las-mulas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mansilla-de-las-mulas.png",
  },

  {
    id: "es_leo_la_baneza",
    nombre: "La Bañeza",
    emoji: "🏰",
    lat: 42.3002,
    lng: -5.8977,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a6", "cruce_camino"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-baneza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-baneza.png",
  },

  {
    id: "es_leo_hoces_vegacervera",
    nombre: "Hoces de Vegacervera",
    emoji: "🏔️",
    lat: 42.9108,
    lng: -5.5401,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "geologia"],
    tipo: "hoces",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 114,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "caliza", "desfiladero", "cuevas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hoces-de-vegacervera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_leo_valporquero",
        "nombre": "Cueva de Valporquero",
        "tipo": "cuevas",
        "nivel": 2,
        "lat": 42.9522,
        "lng": -5.5693,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hoces-de-vegacervera.png",
  },

  {
    id: "es_leo_puerto_pajares",
    nombre: "Puerto de Pajares",
    emoji: "⛰️",
    lat: 42.9933,
    lng: -5.7596,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "montaña"],
    tipo: "puerto_montana",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 112,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "a66", "puerto", "paso_asturias"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-de-pajares.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ast_pajares",
        "nombre": "Puerto de Pajares",
        "tipo": "puerto_montana",
        "nivel": 2,
        "lat": 42.9935,
        "lng": -5.7562,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-de-pajares.png",
  },

  {
    id: "es_leo_bembibre",
    nombre: "Bembibre",
    emoji: "📍",
    lat: 42.6171,
    lng: -6.415,
    nivel: 3,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "carretera"],
    tipo: "parada_ruta",
    radioActivacionMetros: 1600,

    perfil: "parada",
    prioridad: 88,
    cooldownMin: 70,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a6", "bierzo", "parada_viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bembibre.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bembibre.png",
  },

  {
    id: "es_pal_villa_romana_olmeda",
    nombre: "Villa Romana La Olmeda",
    emoji: "🏛️",
    lat: 42.0947,
    lng: -4.2588,
    nivel: 1,
    categorias: ["historia", "arqueologia", "datosCuriosos", "cultura"],
    tipo: "villa_romana",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 140,
    cooldownMin: 150,
    intereses: ["arqueologia", "poblamiento", "historia_antigua", "patrimonio", "visita"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villa-romana-la-olmeda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villa-romana-la-olmeda.png",
  },

  // ✅ CAPITAL
  {
    id: "es_pal_capital_palencia",
    nombre: "Palencia (capital de provincia)",
    emoji: "🏛️",
    lat: 42.0097,
    lng: -4.5288,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "patrimonio", "cultura", "museos", "paseo_urbano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/palencia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pal_cristo_otero",
        "nombre": "Cristo del Otero",
        "tipo": "mirador_monumental",
        "nivel": 1,
        "lat": 42.0176,
        "lng": -4.5159,
        "radio": 1800
      },
      {
        "id": "es_pal_monte_viejo",
        "nombre": "Monte el Viejo",
        "tipo": "parque_periurbano",
        "nivel": 2,
        "lat": 42.026,
        "lng": -4.557,
        "radio": 4500
      },
      {
        "id": "es_pal_venta_banos",
        "nombre": "Venta de Baños",
        "tipo": "nudo_viario",
        "nivel": 3,
        "lat": 41.9212,
        "lng": -4.494,
        "radio": 1600
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/palencia.png",
  },

  {
    id: "es_pal_aguilar_campoo",
    nombre: "Aguilar de Campoo",
    emoji: "🏰",
    lat: 42.792,
    lng: -4.258,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a67", "montana_palentina"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aguilar-de-campoo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pal_santa_maria_real_aguilar",
        "nombre": "Monasterio de Santa María la Real",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 42.7925,
        "lng": -4.2642,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aguilar-de-campoo.png",
  },

  {
    id: "es_pal_fromista",
    nombre: "Frómista",
    emoji: "🏰",
    lat: 42.266,
    lng: -4.4069,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "camino_de_santiago", "canal"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fromista.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pal_san_martin_fromista",
        "nombre": "Iglesia de San Martín de Frómista",
        "tipo": "iglesia_romanica",
        "nivel": 1,
        "lat": 42.267,
        "lng": -4.4079,
        "radio": 1800
      },
      {
        "id": "es_pal_canal_castilla_fromista",
        "nombre": "Canal de Castilla en Frómista",
        "tipo": "canal_historico",
        "nivel": 2,
        "lat": 42.2695,
        "lng": -4.404,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fromista.png",
  },

  {
    id: "es_pal_carrion_condes",
    nombre: "Carrión de los Condes",
    emoji: "🏰",
    lat: 42.3389,
    lng: -4.601,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 124,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "camino_de_santiago"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/carrion-de-los-condes.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/carrion-de-los-condes.png",
  },

  {
    id: "es_pal_herrera_pisuerga",
    nombre: "Herrera de Pisuerga",
    emoji: "🏰",
    lat: 42.5949,
    lng: -4.3301,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "legion_romana", "a67"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/herrera-de-pisuerga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/herrera-de-pisuerga.png",
  },

  {
    id: "es_pal_ampudia",
    nombre: "Ampudia",
    emoji: "🏰",
    lat: 41.9156,
    lng: -4.7808,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "tierra_de_campos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ampudia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ampudia.png",
  },

  {
    id: "es_pal_villalcazar_sirga",
    nombre: "Villalcázar de Sirga",
    emoji: "🏰",
    lat: 42.3154,
    lng: -4.5433,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "templarios", "camino_de_santiago"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villalcazar-de-sirga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villalcazar-de-sirga.png",
  },

  {
    id: "es_pal_becerril_campos",
    nombre: "Becerril de Campos",
    emoji: "🏰",
    lat: 42.1088,
    lng: -4.6396,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "tierra_de_campos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/becerril-de-campos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/becerril-de-campos.png",
  },

  {
    id: "es_pal_baltanas",
    nombre: "Baltanás",
    emoji: "🏰",
    lat: 41.9371,
    lng: -4.2462,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "cerrato", "bodegas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baltanas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baltanas.png",
  },

  {
    id: "es_pal_saldana",
    nombre: "Saldaña",
    emoji: "🏰",
    lat: 42.5216,
    lng: -4.735,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "vega_carrion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/saldana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/saldana.png",
  },

  {
    id: "es_pal_paredes_nava",
    nombre: "Paredes de Nava",
    emoji: "🏰",
    lat: 42.1524,
    lng: -4.692,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "tierra_de_campos", "arte"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/paredes-de-nava.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/paredes-de-nava.png",
  },

  {
    id: "es_pal_duenas",
    nombre: "Dueñas",
    emoji: "🏰",
    lat: 41.876,
    lng: -4.5455,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a62", "camino_del_pisuerga"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/duenas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/duenas.png",
  },

  {
    id: "es_pal_cervera_pisuerga",
    nombre: "Cervera de Pisuerga",
    emoji: "⛰️",
    lat: 42.8654,
    lng: -4.4992,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "montaña"],
    tipo: "puerta_natural",
    radioActivacionMetros: 4000,

    perfil: "naturaleza",
    prioridad: 110,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "montaña_palentina", "embalses"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cervera-de-pisuerga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cervera-de-pisuerga.png",
  },

  {
    id: "es_sal_castro_yecla",
    nombre: "Castro vetón de Yecla la Vieja",
    emoji: "🏕️",
    lat: 40.9558,
    lng: -6.4906,
    nivel: 1,
    categorias: ["historia", "arqueologia", "datosCuriosos", "cultura"],
    tipo: "castro_veton",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 140,
    cooldownMin: 150,
    intereses: ["arqueologia", "poblamiento", "historia_antigua", "patrimonio", "visita"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-veton-de-yecla-la-vieja.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-veton-de-yecla-la-vieja.png",
  },

  {
    id: "es_sal_siega_verde",
    nombre: "Yacimiento rupestre de Siega Verde",
    emoji: "🎨",
    lat: 40.8864,
    lng: -6.6135,
    nivel: 1,
    categorias: ["historia", "arqueologia", "datosCuriosos", "cultura"],
    tipo: "arte_rupestre",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 140,
    cooldownMin: 150,
    intereses: ["arqueologia", "poblamiento", "historia_antigua", "patrimonio", "visita"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yacimiento-rupestre-de-siega-verde.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yacimiento-rupestre-de-siega-verde.png",
  },

  // ✅ CAPITAL
  {
    id: "es_sal_capital_salamanca",
    nombre: "Salamanca (capital de provincia)",
    emoji: "🏛️",
    lat: 40.9701,
    lng: -5.6635,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "patrimonio", "cultura", "museos", "paseo_urbano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/salamanca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_sal_universidad_salamanca",
        "nombre": "Universidad de Salamanca",
        "tipo": "universidad_historica",
        "nivel": 1,
        "lat": 40.961,
        "lng": -5.6676,
        "radio": 1800
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/salamanca.png",
  },

  {
    id: "es_sal_ciudad_rodrigo",
    nombre: "Ciudad Rodrigo",
    emoji: "🏰",
    lat: 40.5972,
    lng: -6.5226,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a62", "frontera", "fortificaciones"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-rodrigo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-rodrigo.png",
  },

  {
    id: "es_sal_bejar",
    nombre: "Béjar",
    emoji: "🏰",
    lat: 40.3864,
    lng: -5.7635,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 124,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a66", "sierra"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bejar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_sal_candelario",
        "nombre": "Candelario",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 40.3686,
        "lng": -5.7445,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bejar.png",
  },

  {
    id: "es_sal_pena_francia",
    nombre: "Santuario de la Peña de Francia",
    emoji: "🔭",
    lat: 40.492,
    lng: -6.1732,
    nivel: 1,
    categorias: ["naturaleza", "miradores", "paisaje", "datosCuriosos"],
    tipo: "mirador",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["mirador", "vistas", "paisaje", "foto", "parada"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santuario-de-la-pena-de-francia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_sal_alberca",
        "nombre": "La Alberca",
        "tipo": "villa_historica",
        "nivel": 1,
        "lat": 40.4872,
        "lng": -6.1117,
        "radio": 3000
      },
      {
        "id": "es_sal_batuecas",
        "nombre": "Las Batuecas",
        "tipo": "valle_natural",
        "nivel": 1,
        "lat": 40.4934,
        "lng": -6.2306,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santuario-de-la-pena-de-francia.png",
  },

  {
    id: "es_sal_san_esteban_sierra",
    nombre: "San Esteban de la Sierra",
    emoji: "🏰",
    lat: 40.5074,
    lng: -5.9068,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "sierra", "vino"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-esteban-de-la-sierra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-esteban-de-la-sierra.png",
  },

  {
    id: "es_sal_san_martin_castanar",
    nombre: "San Martín del Castañar",
    emoji: "🏰",
    lat: 40.5235,
    lng: -6.0642,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "sierra_de_francia", "camino"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-martin-del-castanar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-martin-del-castanar.png",
  },

  {
    id: "es_sal_mogarraz",
    nombre: "Mogarraz",
    emoji: "🏰",
    lat: 40.4927,
    lng: -6.0538,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "retratos", "sierra_de_francia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mogarraz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mogarraz.png",
  },

  {
    id: "es_sal_alba_tormes",
    nombre: "Alba de Tormes",
    emoji: "🏰",
    lat: 40.8278,
    lng: -5.5133,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "rio_tormes", "ruta_a50"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alba-de-tormes.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alba-de-tormes.png",
  },

  {
    id: "es_sal_ledesma",
    nombre: "Ledesma",
    emoji: "🏰",
    lat: 41.0924,
    lng: -6.0017,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "fortaleza", "tormes"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ledesma.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ledesma.png",
  },

  {
    id: "es_sal_penaranda_bramonte",
    nombre: "Peñaranda de Bracamonte",
    emoji: "🏰",
    lat: 40.901,
    lng: -5.2015,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a50", "llanura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/penaranda-de-bracamonte.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/penaranda-de-bracamonte.png",
  },

  {
    id: "es_sal_ruta_vino_sierra",
    nombre: "Viñedos de la Sierra de Salamanca",
    emoji: "🍷",
    lat: 40.47,
    lng: -5.95,
    nivel: 2,
    categorias: ["cultura", "gastronomia", "vino", "paisaje"],
    tipo: "zona_vitivinicola",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 60,
    intereses: ["vino", "bodegas", "paisaje", "gastronomia", "tradicion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vinedos-de-la-sierra-de-salamanca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_sal_miranda_castanar",
        "nombre": "Miranda del Castañar",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 40.4849,
        "lng": -5.9984,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vinedos-de-la-sierra-de-salamanca.png",
  },

  {
    id: "es_sal_guijuelo",
    nombre: "Guijuelo",
    emoji: "🍽️",
    lat: 40.5568,
    lng: -5.6702,
    nivel: 3,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "gastronomia"],
    tipo: "pueblo_gastronomico",
    radioActivacionMetros: 1800,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 70,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "jamon", "a66", "industria_alimentaria"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guijuelo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guijuelo.png",
  },

  {
    id: "es_sal_fuentes_onoro",
    nombre: "Fuentes de Oñoro",
    emoji: "🚩",
    lat: 40.5926,
    lng: -6.8106,
    nivel: 3,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "frontera", "carretera"],
    tipo: "parada_frontera",
    radioActivacionMetros: 1600,

    perfil: "parada",
    prioridad: 85,
    cooldownMin: 70,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a62", "portugal", "parada_viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuentes-de-onoro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuentes-de-onoro.png",
  },

  {
    id: "es_seg_castillo_coca",
    nombre: "Castillo de Coca",
    emoji: "🏰",
    lat: 41.2168,
    lng: -4.5206,
    nivel: 1,
    categorias: ["historia", "castillos", "arquitectura", "datosCuriosos"],
    tipo: "castillo",
    radioActivacionMetros: 2200,

    perfil: "historia",
    prioridad: 136,
    cooldownMin: 120,
    intereses: ["castillo", "edad_media", "fortificacion", "arquitectura", "linajes", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-coca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_seg_coca",
        "nombre": "Coca",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 41.2185,
        "lng": -4.5193,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-coca.png",
  },

  // ✅ CAPITAL
  {
    id: "es_seg_capital_segovia",
    nombre: "Segovia (capital de provincia)",
    emoji: "🏛️",
    lat: 40.9481,
    lng: -4.1184,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "patrimonio", "cultura", "museos", "paseo_urbano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/segovia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_seg_alcazar",
        "nombre": "Alcázar de Segovia",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 40.952,
        "lng": -4.1321,
        "radio": 2200
      },
      {
        "id": "es_seg_acueducto",
        "nombre": "Acueducto de Segovia",
        "tipo": "acueducto_romano",
        "nivel": 1,
        "lat": 40.9498,
        "lng": -4.1193,
        "radio": 1800
      },
      {
        "id": "es_seg_riofrio",
        "nombre": "Palacio Real de Riofrío",
        "tipo": "palacio_real",
        "nivel": 1,
        "lat": 40.8987,
        "lng": -4.1095,
        "radio": 1800
      },
      {
        "id": "es_seg_granja_san_ildefonso",
        "nombre": "Palacio Real de La Granja de San Ildefonso",
        "tipo": "palacio_real",
        "nivel": 1,
        "lat": 40.9006,
        "lng": -4.0061,
        "radio": 1800
      },
      {
        "id": "es_seg_navas_riofrio",
        "nombre": "Navas de Riofrío",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 40.8668,
        "lng": -4.1402,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/segovia.png",
  },

  {
    id: "es_seg_pedraza",
    nombre: "Pedraza",
    emoji: "🏰",
    lat: 41.1303,
    lng: -3.8097,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "villa_medieval", "a1"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pedraza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pedraza.png",
  },

  {
    id: "es_seg_sepulveda",
    nombre: "Sepúlveda",
    emoji: "🏰",
    lat: 41.2976,
    lng: -3.7487,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a1", "duraton"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sepulveda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sepulveda.png",
  },

  {
    id: "es_seg_cuellar",
    nombre: "Cuéllar",
    emoji: "🏰",
    lat: 41.4028,
    lng: -4.3163,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a601", "murallas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuellar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_seg_castillo_cuellar",
        "nombre": "Castillo de Cuéllar",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 41.4023,
        "lng": -4.3146,
        "radio": 2200
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuellar.png",
  },

  {
    id: "es_seg_hoces_duraton",
    nombre: "Hoces del Río Duratón",
    emoji: "🌿",
    lat: 41.308,
    lng: -3.8827,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "aves"],
    tipo: "parque_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "buitres", "cañon"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hoces-del-rio-duraton.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hoces-del-rio-duraton.png",
  },

  {
    id: "es_seg_turegano",
    nombre: "Turégano",
    emoji: "🏰",
    lat: 41.1547,
    lng: -4.0077,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "castillo_iglesia", "centro_provincia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/turegano.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/turegano.png",
  },

  {
    id: "es_seg_riaza",
    nombre: "Riaza",
    emoji: "🏰",
    lat: 41.2788,
    lng: -3.4775,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a1", "sierra"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/riaza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/riaza.png",
  },

  {
    id: "es_seg_ayllon",
    nombre: "Ayllón",
    emoji: "🏰",
    lat: 41.4198,
    lng: -3.3748,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a1", "frontera_historica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ayllon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ayllon.png",
  },

  {
    id: "es_seg_sotosalbos",
    nombre: "Sotosalbos",
    emoji: "🏰",
    lat: 41.0356,
    lng: -3.942,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "sierra", "románico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sotosalbos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sotosalbos.png",
  },

  {
    id: "es_seg_santa_maria_nieva",
    nombre: "Santa María la Real de Nieva",
    emoji: "🏰",
    lat: 41.0686,
    lng: -4.4042,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a6", "claustro"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-maria-la-real-de-nieva.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-maria-la-real-de-nieva.png",
  },

  {
    id: "es_seg_navafria",
    nombre: "Puerto y Bosque de Navafría",
    emoji: "🌲",
    lat: 41.0507,
    lng: -3.8056,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "montaña"],
    tipo: "puerto_bosque",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 112,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "senderismo", "pinares"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-y-bosque-de-navafria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-y-bosque-de-navafria.png",
  },

  {
    id: "es_seg_villacastin",
    nombre: "Villacastín",
    emoji: "🛣️",
    lat: 40.7798,
    lng: -4.4143,
    nivel: 3,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "carretera"],
    tipo: "nudo_viario",
    radioActivacionMetros: 1800,

    perfil: "parada",
    prioridad: 88,
    cooldownMin: 70,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "ap6", "a6", "parada_viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villacastin.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villacastin.png",
  },

  {
    id: "es_sor_santa_maria_huerta",
    nombre: "Monasterio de Santa María de Huerta",
    emoji: "⛪",
    lat: 41.2615,
    lng: -2.1795,
    nivel: 1,
    categorias: ["historia", "monasterios", "arquitectura", "religion"],
    tipo: "monasterio",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 145,
    cooldownMin: 180,
    intereses: ["monasterio", "arte", "arquitectura", "religion", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santa-maria-de-huerta.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santa-maria-de-huerta.png",
  },

  {
    id: "es_sor_medinaceli",
    nombre: "Medinaceli (villa histórica)",
    emoji: "🏰",
    lat: 41.1721,
    lng: -2.436,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 145,
    cooldownMin: 180,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a2", "cerro_testigo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medinaceli.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_sor_arco_romano_medinaceli",
        "nombre": "Arco Romano de Medinaceli",
        "tipo": "monumento_romano",
        "nivel": 1,
        "lat": 41.1708,
        "lng": -2.435,
        "radio": 1800
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medinaceli.png",
  },

  {
    id: "es_sor_gormaz",
    nombre: "Castillo de Gormaz",
    emoji: "🏰",
    lat: 41.4913,
    lng: -3.0047,
    nivel: 1,
    categorias: ["historia", "castillos", "arquitectura", "datosCuriosos"],
    tipo: "castillo",
    radioActivacionMetros: 2500,

    perfil: "historia",
    prioridad: 132,
    cooldownMin: 120,
    intereses: ["castillo", "edad_media", "fortificacion", "arquitectura", "linajes", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-gormaz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-gormaz.png",
  },

  // ✅ CAPITAL
  {
    id: "es_sor_capital_soria",
    nombre: "Soria (capital de provincia)",
    emoji: "🏛️",
    lat: 41.7636,
    lng: -2.4663,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "patrimonio", "cultura", "museos", "paseo_urbano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/soria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_sor_numancia",
        "nombre": "Yacimiento de Numancia",
        "tipo": "ciudad_celtibera",
        "nivel": 1,
        "lat": 41.8054,
        "lng": -2.4829,
        "radio": 3500
      },
      {
        "id": "es_sor_san_juan_duero",
        "nombre": "Monasterio de San Juan de Duero",
        "tipo": "claustro",
        "nivel": 1,
        "lat": 41.7647,
        "lng": -2.454,
        "radio": 1800
      },
      {
        "id": "es_sor_valonsadero",
        "nombre": "Monte Valonsadero",
        "tipo": "monte_periurbano",
        "nivel": 2,
        "lat": 41.8013,
        "lng": -2.4562,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/soria.png",
  },

  {
    id: "es_sor_burgo_osma",
    nombre: "El Burgo de Osma",
    emoji: "🏰",
    lat: 41.5865,
    lng: -3.0666,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "n122", "catedral"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-burgo-de-osma.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-burgo-de-osma.png",
  },

  {
    id: "es_sor_canon_rio_lobos",
    nombre: "Cañón del Río Lobos",
    emoji: "🌿",
    lat: 41.7709,
    lng: -3.0457,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "cañones", "aves"],
    tipo: "parque_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "buitres", "cañon", "ermita"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/canon-del-rio-lobos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_sor_ucero",
        "nombre": "Ucero",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 41.7174,
        "lng": -3.0516,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/canon-del-rio-lobos.png",
  },

  {
    id: "es_sor_laguna_negra",
    nombre: "Laguna Negra",
    emoji: "🏔️",
    lat: 41.9717,
    lng: -2.8668,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "alta_montaña"],
    tipo: "laguna_glaciar",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "glaciarismo", "senderismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laguna-negra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_sor_duruelo_sierra",
        "nombre": "Duruelo de la Sierra",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 41.9541,
        "lng": -2.9306,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laguna-negra.png",
  },

  {
    id: "es_sor_berlanga_duero",
    nombre: "Berlanga de Duero",
    emoji: "🏰",
    lat: 41.4655,
    lng: -2.8611,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a11", "colegiata"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/berlanga-de-duero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/berlanga-de-duero.png",
  },

  {
    id: "es_sor_yanguas",
    nombre: "Yanguas",
    emoji: "🏰",
    lat: 42.101,
    lng: -2.339,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "camero_viejo", "frontera_historica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yanguas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yanguas.png",
  },

  {
    id: "es_sor_san_esteban_gormaz",
    nombre: "San Esteban de Gormaz",
    emoji: "🏰",
    lat: 41.5749,
    lng: -3.2057,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "duero", "n122"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-esteban-de-gormaz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-esteban-de-gormaz.png",
  },

  {
    id: "es_sor_vinuesa",
    nombre: "Vinuesa",
    emoji: "🏰",
    lat: 41.9151,
    lng: -2.7631,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "pinares", "embalses"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vinuesa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vinuesa.png",
  },

  {
    id: "es_sor_calatanazor",
    nombre: "Calatañazor",
    emoji: "🏰",
    lat: 41.7004,
    lng: -2.8179,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "medieval", "sabinares"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calatanazor.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calatanazor.png",
  },

  {
    id: "es_sor_almazan",
    nombre: "Almazán",
    emoji: "🏰",
    lat: 41.4852,
    lng: -2.5336,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "n111", "plaza_mayor"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almazan.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almazan.png",
  },

  {
    id: "es_sor_arcos_jalon",
    nombre: "Arcos de Jalón (valle y paso histórico)",
    emoji: "🏡",
    lat: 41.2149,
    lng: -2.2717,
    nivel: 3,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 1000,

    perfil: "parada",
    prioridad: 80,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "valle_jalon", "parada_viaje", "a2"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arcos-de-jalon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arcos-de-jalon.png",
  },

  // ✅ CAPITAL
  {
    id: "es_val_capital_valladolid",
    nombre: "Valladolid (capital de provincia)",
    emoji: "🏛️",
    lat: 41.6523,
    lng: -4.7245,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "patrimonio", "cultura", "museos", "paseo_urbano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valladolid.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_val_castillo_simancas",
        "nombre": "Castillo-Archivo de Simancas",
        "tipo": "archivo_historico",
        "nivel": 1,
        "lat": 41.5909,
        "lng": -4.8261,
        "radio": 1800
      },
      {
        "id": "es_val_simancas",
        "nombre": "Simancas",
        "tipo": "villa_historica",
        "nivel": 1,
        "lat": 41.5908,
        "lng": -4.8274,
        "radio": 3000
      },
      {
        "id": "es_val_cigales",
        "nombre": "Cigales",
        "tipo": "zona_vitivinicola",
        "nivel": 2,
        "lat": 41.7582,
        "lng": -4.6993,
        "radio": 4000
      },
      {
        "id": "es_val_mucientes",
        "nombre": "Bodegas de Mucientes",
        "tipo": "zona_vitivinicola",
        "nivel": 2,
        "lat": 41.7447,
        "lng": -4.7635,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valladolid.png",
  },

  {
    id: "es_val_medina_campo",
    nombre: "Medina del Campo",
    emoji: "🏰",
    lat: 41.3124,
    lng: -4.9151,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3200,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a6", "ferias", "historia_comercial"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medina-del-campo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_val_castillo_mota",
        "nombre": "Castillo de La Mota",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 41.3087,
        "lng": -4.9131,
        "radio": 2200
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medina-del-campo.png",
  },

  {
    id: "es_val_tordesillas",
    nombre: "Tordesillas",
    emoji: "🏰",
    lat: 41.502,
    lng: -4.9991,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a62", "tratado", "duero"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tordesillas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tordesillas.png",
  },

  {
    id: "es_val_uruena",
    nombre: "Urueña",
    emoji: "🏰",
    lat: 41.7285,
    lng: -5.0271,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "murallas", "villa_del_libro"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/uruena.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/uruena.png",
  },

  {
    id: "es_val_penafiel",
    nombre: "Peñafiel",
    emoji: "🏰",
    lat: 41.5944,
    lng: -4.1183,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "n122", "ribera_del_duero"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/penafiel.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_val_castillo_penafiel",
        "nombre": "Castillo de Peñafiel",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 41.5957,
        "lng": -4.117,
        "radio": 2200
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/penafiel.png",
  },

  {
    id: "es_val_castronuno",
    nombre: "Reserva Natural de Riberas de Castronuño",
    emoji: "🦅",
    lat: 41.388,
    lng: -5.262,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "aves", "río"],
    tipo: "reserva_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 118,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "duero", "aves", "humedal"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/reserva-natural-de-riberas-de-castronuno.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/reserva-natural-de-riberas-de-castronuno.png",
  },

  {
    id: "es_val_olmedo",
    nombre: "Olmedo",
    emoji: "🏰",
    lat: 41.2871,
    lng: -4.6848,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "mudejar", "a6"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/olmedo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/olmedo.png",
  },

  {
    id: "es_val_medina_rioseco",
    nombre: "Medina de Rioseco",
    emoji: "🏰",
    lat: 41.8858,
    lng: -5.0423,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "canal_de_castilla", "campos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medina-de-rioseco.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medina-de-rioseco.png",
  },

  {
    id: "es_val_villalba_alcores",
    nombre: "Villalba de los Alcores",
    emoji: "🏰",
    lat: 41.8643,
    lng: -4.8615,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "castillo", "campos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villalba-de-los-alcores.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villalba-de-los-alcores.png",
  },

  {
    id: "es_val_nava_rey",
    nombre: "Nava del Rey",
    emoji: "🏰",
    lat: 41.3316,
    lng: -5.0805,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a6", "vino"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nava-del-rey.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nava-del-rey.png",
  },

  {
    id: "es_val_villalon_campos",
    nombre: "Villalón de Campos",
    emoji: "🏰",
    lat: 42.0995,
    lng: -5.0345,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "tierra_de_campos", "mercados"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villalon-de-campos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villalon-de-campos.png",
  },

  {
    id: "es_val_tudela_duero",
    nombre: "Tudela de Duero",
    emoji: "🏰",
    lat: 41.5848,
    lng: -4.5815,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "duero", "entorno_valladolid"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tudela-de-duero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tudela-de-duero.png",
  },

  {
    id: "es_val_portillo",
    nombre: "Castillo de Portillo",
    emoji: "🏰",
    lat: 41.479,
    lng: -4.5881,
    nivel: 2,
    categorias: ["historia", "castillos", "arquitectura", "datosCuriosos"],
    tipo: "castillo",
    radioActivacionMetros: 2500,

    perfil: "historia",
    prioridad: 120,
    cooldownMin: 70,
    intereses: ["castillo", "edad_media", "fortificacion", "arquitectura", "linajes", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-portillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-portillo.png",
  },

  {
    id: "es_val_rueda",
    nombre: "Rueda",
    emoji: "🍷",
    lat: 41.4144,
    lng: -4.957,
    nivel: 2,
    categorias: ["cultura", "gastronomia", "vino", "paisaje"],
    tipo: "zona_vitivinicola",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 60,
    intereses: ["vino", "bodegas", "paisaje", "gastronomia", "tradicion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rueda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rueda.png",
  },

  {
    id: "es_zam_castrotorafe",
    nombre: "Despoblado y castillo de Castrotorafe",
    emoji: "🏰",
    lat: 41.7924,
    lng: -5.669,
    nivel: 1,
    categorias: ["historia", "arqueologia", "datosCuriosos", "cultura"],
    tipo: "yacimiento_medieval",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 140,
    cooldownMin: 150,
    intereses: ["arqueologia", "poblamiento", "historia_antigua", "patrimonio", "visita"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/despoblado-y-castillo-de-castrotorafe.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/despoblado-y-castillo-de-castrotorafe.png",
  },

  {
    id: "es_zam_san_pedro_nave",
    nombre: "Iglesia de San Pedro de la Nave",
    emoji: "⛪",
    lat: 41.7275,
    lng: -5.6931,
    nivel: 1,
    categorias: ["historia", "arquitectura", "cultura", "datosCuriosos", "religion", "visigodo"],
    tipo: "iglesia_visigoda",
    radioActivacionMetros: 1800,

    perfil: "historia",
    prioridad: 140,
    cooldownMin: 150,
    intereses: ["patrimonio", "arquitectura", "historia", "visita", "visigodo", "embalse"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/iglesia-de-san-pedro-de-la-nave.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/iglesia-de-san-pedro-de-la-nave.png",
  },

  // ✅ CAPITAL
  {
    id: "es_zam_capital_zamora",
    nombre: "Zamora (capital de provincia)",
    emoji: "🏛️",
    lat: 41.5035,
    lng: -5.7468,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "patrimonio", "cultura", "museos", "paseo_urbano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zamora.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zamora.png",
  },

  {
    id: "es_zam_puebla_sanabria",
    nombre: "Puebla de Sanabria",
    emoji: "🏰",
    lat: 42.0547,
    lng: -6.6335,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a52", "castillo", "frontera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puebla-de-sanabria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puebla-de-sanabria.png",
  },

  {
    id: "es_zam_benavente",
    nombre: "Benavente",
    emoji: "🏰",
    lat: 42.0021,
    lng: -5.6783,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a6", "a66", "a52", "nudo_viario"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/benavente.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/benavente.png",
  },

  {
    id: "es_zam_toro",
    nombre: "Toro",
    emoji: "🏰",
    lat: 41.5218,
    lng: -5.395,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a11", "vino", "duero"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/toro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_zam_colegiata_toro",
        "nombre": "Colegiata de Toro",
        "tipo": "colegiata",
        "nivel": 1,
        "lat": 41.5245,
        "lng": -5.3942,
        "radio": 1800
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/toro.png",
  },

  {
    id: "es_zam_arribes_duero",
    nombre: "Arribes del Duero (miradores zamoranos)",
    emoji: "🌿",
    lat: 41.285,
    lng: -6.423,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "cañones", "miradores"],
    tipo: "parque_natural",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "duero", "cañones"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arribes-del-duero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_zam_fermoselle",
        "nombre": "Fermoselle",
        "tipo": "villa_historica",
        "nivel": 1,
        "lat": 41.3197,
        "lng": -6.3956,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arribes-del-duero.png",
  },

  {
    id: "es_zam_lago_sanabria",
    nombre: "Lago de Sanabria",
    emoji: "🏔️",
    lat: 42.1173,
    lng: -6.729,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "glaciarismo"],
    tipo: "lago_glaciar",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "lago", "glaciar", "playas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lago-de-sanabria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_zam_ribadelago",
        "nombre": "Ribadelago",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 42.1277,
        "lng": -6.749,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lago-de-sanabria.png",
  },

  {
    id: "es_zam_moreruela",
    nombre: "Monasterio de Santa María de Moreruela",
    emoji: "⛪",
    lat: 41.7003,
    lng: -5.7052,
    nivel: 2,
    categorias: ["historia", "monasterios", "arquitectura", "religion"],
    tipo: "monasterio",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 126,
    cooldownMin: 120,
    intereses: ["monasterio", "arte", "arquitectura", "religion", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santa-maria-de-moreruela.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santa-maria-de-moreruela.png",
  },

  {
    id: "es_zam_fuentesauco",
    nombre: "Fuentesaúco",
    emoji: "🏰",
    lat: 41.2288,
    lng: -5.495,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a66", "llanura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuentesauco.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuentesauco.png",
  },

  {
    id: "es_zam_tabara",
    nombre: "Tábara",
    emoji: "🏰",
    lat: 41.8259,
    lng: -5.9608,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a52", "mozárabe"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tabara.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tabara.png",
  },

  {
    id: "es_zam_villardeciervos",
    nombre: "Villardeciervos",
    emoji: "🏰",
    lat: 41.9411,
    lng: -6.2854,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "sierra_de_la_culebra", "bosques"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villardeciervos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villardeciervos.png",
  },

  {
    id: "es_zam_villalpando",
    nombre: "Villalpando",
    emoji: "🏰",
    lat: 41.865,
    lng: -5.411,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "tierra_de_campos", "a6"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villalpando.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villalpando.png",
  },

  {
    id: "es_zam_alcanices",
    nombre: "Alcañices",
    emoji: "🏰",
    lat: 41.6995,
    lng: -6.3468,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "n122", "frontera_portugal"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcanices.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcanices.png",
  },

  {
    id: "es_zam_castro_sanabria",
    nombre: "Castro de Sanabria",
    emoji: "🏰",
    lat: 42.015,
    lng: -6.6306,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "sanabria", "castillo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-de-sanabria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-de-sanabria.png",
  },

  {
    id: "es_zam_santa_marta_tera",
    nombre: "Santa Marta de Tera",
    emoji: "🏰",
    lat: 41.9957,
    lng: -5.9307,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "camino_sanabres", "románico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-marta-de-tera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-marta-de-tera.png",
  },

  {
    id: "es_zam_mombuey",
    nombre: "Mombuey",
    emoji: "📍",
    lat: 42.0228,
    lng: -6.3304,
    nivel: 3,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "carretera"],
    tipo: "parada_ruta",
    radioActivacionMetros: 1500,

    perfil: "parada",
    prioridad: 86,
    cooldownMin: 70,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "a52", "sierra_culebra", "parada_viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mombuey.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mombuey.png",
  },

  // ✅ CAPITAL
  {
    id: "es_avi_capital_avila",
    nombre: "Ávila (capital de provincia)",
    emoji: "🏛️",
    lat: 40.6566,
    lng: -4.7004,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "historia_urbana", "patrimonio", "cultura", "museos", "paseo_urbano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/avila.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_avi_basilica_san_vicente",
        "nombre": "Basílica de San Vicente",
        "tipo": "basilica",
        "nivel": 1,
        "lat": 40.6579,
        "lng": -4.6989,
        "radio": 1800
      },
      {
        "id": "es_avi_murallas_avila",
        "nombre": "Murallas de Ávila",
        "tipo": "muralla",
        "nivel": 1,
        "lat": 40.6568,
        "lng": -4.6998,
        "radio": 1800
      },
      {
        "id": "es_avi_cuatro_postes",
        "nombre": "Mirador de los Cuatro Postes",
        "tipo": "mirador",
        "nivel": 2,
        "lat": 40.6617,
        "lng": -4.7112,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/avila.png",
  },

  {
    id: "es_avi_arevalo",
    nombre: "Arévalo",
    emoji: "🏰",
    lat: 41.0648,
    lng: -4.7204,
    nivel: 1,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "mudejar"],
    tipo: "villa_historica",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "mudejar", "ruta_a6"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arevalo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_avi_castillo_arevalo",
        "nombre": "Castillo de Arévalo",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 41.0642,
        "lng": -4.7225,
        "radio": 2200
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arevalo.png",
  },

  {
    id: "es_avi_plataforma_gredos",
    nombre: "Plataforma de Gredos",
    emoji: "🌲",
    lat: 40.2597,
    lng: -5.2703,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "alta_montaña"],
    tipo: "acceso_parque",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "gredos", "circos_glaciares", "senderismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/plataforma-de-gredos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_avi_cuevas_aguila",
        "nombre": "Cuevas del Águila",
        "tipo": "cuevas",
        "nivel": 2,
        "lat": 40.2978,
        "lng": -5.2483,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/plataforma-de-gredos.png",
  },

  {
    id: "es_avi_valle_iruelas",
    nombre: "Reserva Natural del Valle de Iruelas",
    emoji: "🦅",
    lat: 40.368,
    lng: -4.5755,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "embalse", "aves"],
    tipo: "reserva_natural",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 118,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "buitres", "embalse", "bosque"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/reserva-natural-del-valle-de-iruelas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_avi_toros_guisando",
        "nombre": "Toros de Guisando",
        "tipo": "verracos",
        "nivel": 1,
        "lat": 40.3649,
        "lng": -4.519,
        "radio": 1800
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/reserva-natural-del-valle-de-iruelas.png",
  },

  {
    id: "es_avi_barco_avila",
    nombre: "El Barco de Ávila",
    emoji: "🏰",
    lat: 40.3587,
    lng: -5.523,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "rio_tormes", "puerta_gredos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-barco-de-avila.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-barco-de-avila.png",
  },

  {
    id: "es_avi_navas_marques",
    nombre: "Las Navas del Marqués",
    emoji: "🏰",
    lat: 40.6033,
    lng: -4.334,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "sierra_oeste", "ruta_ap6"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-navas-del-marques.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_avi_magalia",
        "nombre": "Castillo-Palacio de Magalia",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 40.6037,
        "lng": -4.3279,
        "radio": 2500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-navas-del-marques.png",
  },

  {
    id: "es_avi_mombeltran",
    nombre: "Mombeltrán",
    emoji: "🏰",
    lat: 40.2608,
    lng: -5.0145,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "valle_del_tietar", "sierra"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mombeltran.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mombeltran.png",
  },

  {
    id: "es_avi_cebreros",
    nombre: "Cebreros",
    emoji: "🏰",
    lat: 40.4569,
    lng: -4.4655,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "transicion_meseta", "n403"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cebreros.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cebreros.png",
  },

  {
    id: "es_avi_tiemblo",
    nombre: "El Tiemblo",
    emoji: "🏰",
    lat: 40.416,
    lng: -4.5027,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "n403", "sierra"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-tiemblo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-tiemblo.png",
  },

  {
    id: "es_avi_madrigal_altas_torres",
    nombre: "Madrigal de las Altas Torres",
    emoji: "🏰",
    lat: 41.0891,
    lng: -4.9979,
    nivel: 2,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "murallas"],
    tipo: "villa_historica",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 90,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "isabel_la_catolica", "muralla"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/madrigal-de-las-altas-torres.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/madrigal-de-las-altas-torres.png",
  },

  {
    id: "es_avi_castillo_adrada",
    nombre: "Castillo de La Adrada",
    emoji: "🏰",
    lat: 40.2986,
    lng: -4.6343,
    nivel: 2,
    categorias: ["historia", "castillos", "arquitectura", "datosCuriosos"],
    tipo: "castillo",
    radioActivacionMetros: 2500,

    perfil: "historia",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["castillo", "edad_media", "fortificacion", "arquitectura", "linajes", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-la-adrada.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-la-adrada.png",
  },

  {
    id: "es_avi_puerto_pico",
    nombre: "Puerto del Pico",
    emoji: "⛰️",
    lat: 40.3553,
    lng: -5.0107,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "senderismo", "datosCuriosos", "montaña"],
    tipo: "puerto_montana",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 112,
    cooldownMin: 70,
    intereses: ["paisaje", "miradores", "fauna", "flora", "rutas", "trashumancia", "calzada_romana", "gargantas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-del-pico.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-del-pico.png",
  },

  {
    id: "es_avi_adanero_nudo",
    nombre: "Adanero (nudo histórico de la A-6 y AP-6)",
    emoji: "🛣️",
    lat: 40.9448,
    lng: -4.6045,
    nivel: 3,
    categorias: ["historia", "pueblo", "arquitectura", "cultura", "datosCuriosos", "carretera"],
    tipo: "nudo_viario",
    radioActivacionMetros: 1200,

    perfil: "parada",
    prioridad: 82,
    cooldownMin: 70,
    intereses: ["patrimonio", "casco_historico", "paseo", "arquitectura", "historia_local", "ruta_a6", "parada_viaje", "nudo_viario"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/adanero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/adanero.png",
  },

  // ✅ CAPITAL
  {
    id: "es_clm_alb_albacete_capital",
    nombre: "Albacete (capital funcional del gran corredor hacia Alicante y Valencia)",
    emoji: "🏛️",
    lat: 38.9942,
    lng: -1.8585,
    nivel: 1,
    categorias: ["provincia", "capital", "ciudad", "cultura", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 136,
    cooldownMin: 110,
    intereses: ["a31", "a32", "a30", "cuchilleria", "llanura", "nudo_logistico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/albacete.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/albacete.png",
  },

  {
    id: "es_clm_alb_almansa",
    nombre: "Almansa (castillo y gran cruce entre Castilla-La Mancha, Murcia y Valencia)",
    emoji: "🏰",
    lat: 38.868,
    lng: -1.0975,
    nivel: 1,
    categorias: ["historia", "castillo", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 133,
    cooldownMin: 100,
    intereses: ["a31", "a35", "batalla_de_almansa", "castillo", "frontera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almansa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almansa.png",
  },

  {
    id: "es_clm_alb_alcala_jucar",
    nombre: "Alcalá del Júcar (uno de los pueblos más espectaculares del este peninsular)",
    emoji: "🏰",
    lat: 39.193,
    lng: -1.4302,
    nivel: 1,
    categorias: ["historia", "pueblo", "rio", "paisaje"],
    tipo: "villa_historica",
    radioActivacionMetros: 9500,

    perfil: "cultura",
    prioridad: 131,
    cooldownMin: 100,
    intereses: ["jucar", "cuevas", "hoz", "miradores", "manchuela"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcala-del-jucar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_alb_jorquera",
        "nombre": "Jorquera (meandro fortificado sobre el Júcar)",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 39.1745,
        "lng": -1.5219,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcala-del-jucar.png",
  },

  {
    id: "es_clm_alb_nacimiento_rio_mundo",
    nombre: "Nacimiento del Río Mundo (gran icono natural del sur de Albacete)",
    emoji: "🌄",
    lat: 38.4732,
    lng: -2.4236,
    nivel: 1,
    categorias: ["naturaleza", "agua", "paisaje", "senderismo"],
    tipo: "paraje_natural",
    radioActivacionMetros: 10000,

    perfil: "naturaleza",
    prioridad: 130,
    cooldownMin: 100,
    intereses: ["rio_mundo", "cascada", "karst", "sierra_del_segura", "excursion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nacimiento-del-rio-mundo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_alb_riopar",
        "nombre": "Riópar (puerta serrana de la sierra del Segura)",
        "tipo": "pueblo_sierra",
        "nivel": 2,
        "lat": 38.499,
        "lng": -2.4176,
        "radio": 8500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nacimiento-del-rio-mundo.png",
  },

  {
    id: "es_clm_alb_chinchilla",
    nombre: "Chinchilla de Montearagón (balcón amurallado sobre Albacete)",
    emoji: "🏰",
    lat: 38.921,
    lng: -1.7221,
    nivel: 1,
    categorias: ["historia", "castillo", "pueblo", "paisaje"],
    tipo: "villa_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 95,
    intereses: ["a31", "castillo", "cuevas", "miradores", "medieval"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chinchilla-de-montearagon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chinchilla-de-montearagon.png",
  },

  {
    id: "es_clm_alb_ayna",
    nombre: "Ayna (la Suiza manchega en el cañón del Mundo)",
    emoji: "🌄",
    lat: 38.5531,
    lng: -2.0701,
    nivel: 1,
    categorias: ["naturaleza", "pueblo", "paisaje", "cine"],
    tipo: "pueblo_paisajistico",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 127,
    cooldownMin: 95,
    intereses: ["canon", "rio_mundo", "miradores", "paisaje", "amanece_que_no_es_poco"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ayna.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ayna.png",
  },

  {
    id: "es_clm_alb_hellin",
    nombre: "Hellín (gran enlace del sureste y ciudad de tambor)",
    emoji: "🛤️",
    lat: 38.5106,
    lng: -1.7007,
    nivel: 1,
    categorias: ["historia", "ciudad", "cultura", "ruta"],
    tipo: "ciudad_ruta",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 122,
    cooldownMin: 90,
    intereses: ["a30", "a31", "tamborada", "sureste_manchego"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hellin.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_alb_tobarra",
        "nombre": "Tobarra (ruta, tambores y paisaje de transición)",
        "tipo": "pueblo_ruta",
        "nivel": 2,
        "lat": 38.5885,
        "lng": -1.6936,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hellin.png",
  },

  {
    id: "es_clm_alb_la_roda",
    nombre: "La Roda (parada clásica de la A-31 entre Madrid y Levante)",
    emoji: "🛤️",
    lat: 39.2074,
    lng: -2.1575,
    nivel: 2,
    categorias: ["ruta", "pueblo", "gastronomia", "servicios"],
    tipo: "pueblo_ruta",
    radioActivacionMetros: 8000,

    perfil: "gastronomia",
    prioridad: 110,
    cooldownMin: 80,
    intereses: ["a31", "miguelitos", "parada_util", "corredor_levante"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-roda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-roda.png",
  },

  {
    id: "es_clm_alb_villarrobledo",
    nombre: "Villarrobledo (vino, tinajas y gran nudo del noroeste albaceteño)",
    emoji: "🛤️",
    lat: 39.2683,
    lng: -2.6011,
    nivel: 2,
    categorias: ["historia", "ciudad", "gastronomia", "ruta"],
    tipo: "ciudad_ruta",
    radioActivacionMetros: 8500,

    perfil: "gastronomia",
    prioridad: 108,
    cooldownMin: 80,
    intereses: ["a43", "vino", "tinajas", "mancha"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villarrobledo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villarrobledo.png",
  },

  {
    id: "es_clm_alb_lietor",
    nombre: "Liétor (balcones y callejas sobre el valle del Mundo)",
    emoji: "🏰",
    lat: 38.5412,
    lng: -1.9536,
    nivel: 2,
    categorias: ["historia", "pueblo", "paisaje", "rio"],
    tipo: "villa_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 107,
    cooldownMin: 80,
    intereses: ["rio_mundo", "sierra", "balcones", "a30"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lietor.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lietor.png",
  },

  {
    id: "es_clm_alb_casas_ibanez",
    nombre: "Casas-Ibáñez (cabecera de la Manchuela y enlace hacia el valle del Cabriel)",
    emoji: "🛤️",
    lat: 39.2851,
    lng: -1.4713,
    nivel: 2,
    categorias: ["ruta", "ciudad", "paisaje", "provincia"],
    tipo: "ciudad_ruta",
    radioActivacionMetros: 7500,

    perfil: "cultura",
    prioridad: 103,
    cooldownMin: 75,
    intereses: ["n322", "manchuela", "cabriel", "enlace_valencia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/casas-ibanez.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_alb_fuentealbilla",
        "nombre": "Fuentealbilla (pueblo de vinos y paisaje de la Manchuela)",
        "tipo": "pueblo_gastronomico",
        "nivel": 3,
        "lat": 39.266,
        "lng": -1.551,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/casas-ibanez.png",
  },

  {
    id: "es_clm_alb_montealegre_castillo",
    nombre: "Montealegre del Castillo (perfil fortificado junto a la A-31)",
    emoji: "🏰",
    lat: 38.7875,
    lng: -1.3253,
    nivel: 2,
    categorias: ["historia", "castillo", "pueblo", "ruta"],
    tipo: "castillo",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 103,
    cooldownMin: 70,
    intereses: ["a31", "castillos", "frontera_interior", "altiplano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montealegre-del-castillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montealegre-del-castillo.png",
  },

  {
    id: "es_clm_alb_caudete",
    nombre: "Caudete (último gran enclave antes del Vinalopó)",
    emoji: "🏰",
    lat: 38.7064,
    lng: -0.9887,
    nivel: 2,
    categorias: ["historia", "pueblo", "ruta", "frontera"],
    tipo: "villa_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 101,
    cooldownMin: 70,
    intereses: ["a31", "levante", "frontera_regional", "sierras"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caudete.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caudete.png",
  },

  {
    id: "es_clm_alb_minaya",
    nombre: "Minaya (llanura manchega junto al corredor principal)",
    emoji: "🛤️",
    lat: 39.2712,
    lng: -2.3198,
    nivel: 3,
    categorias: ["ruta", "pueblo", "paisaje", "mancha"],
    tipo: "pueblo_ruta",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 92,
    cooldownMin: 60,
    intereses: ["a31", "mancha", "camino_a_levante"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minaya.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minaya.png",
  },

  {
    id: "es_clm_alb_la_gineta",
    nombre: "La Gineta (tramo de llanura y tradición en la A-31)",
    emoji: "🛤️",
    lat: 39.1123,
    lng: -1.996,
    nivel: 3,
    categorias: ["ruta", "pueblo", "mancha", "paisaje"],
    tipo: "pueblo_ruta",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 91,
    cooldownMin: 60,
    intereses: ["a31", "parada_corta", "llanura_manchega"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-gineta.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-gineta.png",
  },

  {
    id: "es_clm_alb_bonete",
    nombre: "Bonete (llanuras de transición en la autovía hacia Levante)",
    emoji: "🛤️",
    lat: 38.8897,
    lng: -1.3486,
    nivel: 3,
    categorias: ["ruta", "paisaje", "pueblo", "llanura"],
    tipo: "pueblo_ruta",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 89,
    cooldownMin: 60,
    intereses: ["a31", "meseta", "viento", "camino_hacia_almansa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bonete.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bonete.png",
  },

  // ✅ CAPITAL
  {
    id: "es_clm_cue_cuenca_capital",
    nombre: "Cuenca (ciudad histórica y gran desvío recomendado desde la A-3)",
    emoji: "🏛️",
    lat: 40.0704,
    lng: -2.1374,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "patrimonio"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 120,
    intereses: ["a40", "casas_colgadas", "hoces", "unesco", "medieval"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuenca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_cue_hoces_jucar_huecar",
        "nombre": "Hoces del Júcar y del Huécar (el paisaje que abraza Cuenca)",
        "tipo": "paraje_natural",
        "nivel": 1,
        "lat": 40.0765,
        "lng": -2.1345,
        "radio": 9000
      },
      {
        "id": "es_clm_cue_palancares",
        "nombre": "Los Palancares y Tierra Muerta (simas y pinares junto a la ruta)",
        "tipo": "parque_natural",
        "nivel": 2,
        "lat": 39.9952,
        "lng": -2.1015,
        "radio": 8500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuenca.png",
  },

  {
    id: "es_clm_cue_segobriga",
    nombre: "Segóbriga (gran ciudad romana muy cerca del corredor A-3/A-40)",
    emoji: "🏛️",
    lat: 40.0315,
    lng: -2.8127,
    nivel: 1,
    categorias: ["historia", "arqueologia", "romano", "cultura"],
    tipo: "yacimiento_romano",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 132,
    cooldownMin: 100,
    intereses: ["romanos", "anfiteatro", "mineria", "a3", "a40"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/segobriga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_cue_ucles",
        "nombre": "Uclés (monasterio-fortaleza dominante sobre la Mancha alta)",
        "tipo": "monasterio",
        "nivel": 1,
        "lat": 39.981,
        "lng": -2.8617,
        "radio": 8500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/segobriga.png",
  },

  {
    id: "es_clm_cue_alarcon",
    nombre: "Alarcón (villa amurallada sobre el embalse)",
    emoji: "🏰",
    lat: 39.5469,
    lng: -2.0848,
    nivel: 1,
    categorias: ["historia", "pueblo", "castillo", "paisaje"],
    tipo: "villa_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 131,
    cooldownMin: 100,
    intereses: ["a3", "embalse", "murallas", "castillo", "desvio_recomendado"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alarcon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_cue_embalse_alarcon",
        "nombre": "Embalse de Alarcón (gran horizonte azul junto a la A-3)",
        "tipo": "embalse",
        "nivel": 2,
        "lat": 39.561,
        "lng": -2.067,
        "radio": 8000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alarcon.png",
  },

  {
    id: "es_clm_cue_tarancon",
    nombre: "Tarancón (nudo clave de la A-3 y puerta occidental de Cuenca)",
    emoji: "🛤️",
    lat: 40.01,
    lng: -3.01,
    nivel: 1,
    categorias: ["historia", "ruta", "ciudad", "provincia"],
    tipo: "ciudad_ruta",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 100,
    intereses: ["a3", "tarancon", "conexion_madrid_valencia", "paradas_utiles"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarancon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_cue_belinchon",
        "nombre": "Belinchón (balcón castellano sobre la antigua ruta de Valencia)",
        "tipo": "pueblo_ruta",
        "nivel": 2,
        "lat": 40.0469,
        "lng": -3.0592,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarancon.png",
  },

  {
    id: "es_clm_cue_ciudad_encantada",
    nombre: "Ciudad Encantada (formaciones kársticas icónicas de la Serranía)",
    emoji: "🪨",
    lat: 40.2243,
    lng: -2.0226,
    nivel: 1,
    categorias: ["naturaleza", "geologia", "paisaje", "datosCuriosos"],
    tipo: "paraje_karstico",
    radioActivacionMetros: 9500,

    perfil: "naturaleza",
    prioridad: 129,
    cooldownMin: 110,
    intereses: ["karst", "serrania", "formas_rocosas", "a40", "excursion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-encantada.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_cue_ventano_diablo",
        "nombre": "Ventano del Diablo (mirador de vértigo sobre el Júcar)",
        "tipo": "mirador",
        "nivel": 2,
        "lat": 40.1939,
        "lng": -2.0419,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-encantada.png",
  },

  {
    id: "es_clm_cue_belmonte",
    nombre: "Belmonte (castillo cinematográfico en la conexión con la A-3)",
    emoji: "🏰",
    lat: 39.5599,
    lng: -2.708,
    nivel: 1,
    categorias: ["historia", "castillo", "pueblo", "cultura"],
    tipo: "castillo",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 127,
    cooldownMin: 95,
    intereses: ["castillo", "mancha", "cine", "a43", "desvio_recomendado"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/belmonte.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/belmonte.png",
  },

  {
    id: "es_clm_cue_san_clemente",
    nombre: "San Clemente (gran villa renacentista del suroeste conquense)",
    emoji: "🏰",
    lat: 39.4012,
    lng: -2.4283,
    nivel: 2,
    categorias: ["historia", "renacimiento", "pueblo", "cultura"],
    tipo: "villa_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 80,
    intereses: ["a43", "renacimiento", "mancha", "desvio_util"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-clemente.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-clemente.png",
  },

  {
    id: "es_clm_cue_castillo_garcimunoz",
    nombre: "Castillo de Garcimuñoz (fortaleza junto al eje A-3/A-43)",
    emoji: "🏰",
    lat: 39.6598,
    lng: -2.3818,
    nivel: 2,
    categorias: ["historia", "castillo", "ruta", "pueblo"],
    tipo: "castillo",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 105,
    cooldownMin: 75,
    intereses: ["a3", "a43", "castillos", "jorge_manrique"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-garcimunoz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-garcimunoz.png",
  },

  {
    id: "es_clm_cue_huete",
    nombre: "Huete (conventos y patrimonio en el enlace hacia la A-40)",
    emoji: "🏰",
    lat: 40.1459,
    lng: -2.6908,
    nivel: 2,
    categorias: ["historia", "pueblo", "cultura", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 75,
    intereses: ["a40", "n320", "conventos", "alcarria_conquense"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/huete.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/huete.png",
  },

  {
    id: "es_clm_cue_las_pedroneras",
    nombre: "Las Pedroñeras (capital del ajo morado en el corredor manchego)",
    emoji: "🍽️",
    lat: 39.45,
    lng: -2.6808,
    nivel: 2,
    categorias: ["gastronomia", "pueblo", "ruta", "datosCuriosos"],
    tipo: "pueblo_gastronomico",
    radioActivacionMetros: 7000,

    perfil: "gastronomia",
    prioridad: 104,
    cooldownMin: 75,
    intereses: ["ajo_morado", "a43", "mancha", "producto_local"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-pedroneras.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/las-pedroneras.png",
  },

  {
    id: "es_clm_cue_motilla_palancar",
    nombre: "Motilla del Palancar (cruce estratégico hacia la Manchuela)",
    emoji: "🛤️",
    lat: 39.5657,
    lng: -1.9121,
    nivel: 2,
    categorias: ["ruta", "pueblo", "servicios", "provincia"],
    tipo: "pueblo_ruta",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 102,
    cooldownMin: 70,
    intereses: ["a3", "n420", "manchuela", "parada_util"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/motilla-del-palancar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/motilla-del-palancar.png",
  },

  {
    id: "es_clm_cue_minglanilla",
    nombre: "Minglanilla (último gran balcón conquense antes de Valencia)",
    emoji: "🛤️",
    lat: 39.5338,
    lng: -1.6009,
    nivel: 2,
    categorias: ["ruta", "pueblo", "paisaje", "frontera"],
    tipo: "pueblo_ruta",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 101,
    cooldownMin: 70,
    intereses: ["a3", "cabriel", "entrada_a_valencia", "parada_corta"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minglanilla.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minglanilla.png",
  },

  {
    id: "es_clm_cue_honrubia",
    nombre: "Honrubia (paso histórico de llanuras y ventas hacia Levante)",
    emoji: "🛤️",
    lat: 39.6131,
    lng: -2.284,
    nivel: 2,
    categorias: ["ruta", "historia", "pueblo", "llanura"],
    tipo: "pueblo_ruta",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 97,
    cooldownMin: 65,
    intereses: ["a3", "camino_real", "ventas", "mancha_oriental"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/honrubia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/honrubia.png",
  },

  {
    id: "es_clm_cue_sisante",
    nombre: "Sisante (desvío manchego con trazado tradicional)",
    emoji: "🛤️",
    lat: 39.4099,
    lng: -2.202,
    nivel: 2,
    categorias: ["historia", "pueblo", "cultura", "ruta"],
    tipo: "pueblo_ruta",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 96,
    cooldownMin: 65,
    intereses: ["a43", "a3", "mancha", "arquitectura_popular"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sisante.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sisante.png",
  },

  {
    id: "es_gua_siguenca_casco",
    nombre: "Sigüenza (casco medieval)",
    emoji: "🏰",
    lat: 41.0666189,
    lng: -2.6524928,
    nivel: 1,
    categorias: ["historia", "catedral\" \"pueblo", "arquitectura", "cultura", "datosCuriosos"],
    tipo: "casco_historico",
    radioActivacionMetros: 11000,

    perfil: "cultura",
    prioridad: 140,
    cooldownMin: 150,
    intereses: ["medieval", "catedral", "castillo_parador", "paseo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/siguenza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_gua_siguenza",
        "nombre": "Sigüenza (catedral y ciudad histórica del norte de Guadalajara)",
        "tipo": "ciudad_historica",
        "nivel": 1,
        "lat": 41.0689,
        "lng": -2.642,
        "radio": 10000
      },
      {
        "id": "es_gua_barranco_rio_dulce",
        "nombre": "Parque Natural del Barranco del Río Dulce",
        "tipo": "parque_natural",
        "nivel": 1,
        "lat": 41.0205072,
        "lng": -2.5917397,
        "radio": 9000
      },
      {
        "id": "es_gua_pelegrina_mirador",
        "nombre": "Mirador de Pelegrina (Río Dulce)",
        "tipo": "mirador",
        "nivel": 2,
        "lat": 41.0148481,
        "lng": -2.6333063,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/siguenza.png",
  },

  // ✅ CAPITAL
  {
    id: "es_clm_gua_guadalajara_capital",
    nombre: "Guadalajara (gran puerta de entrada desde Madrid por la A-2)",
    emoji: "🏛️",
    lat: 40.6337,
    lng: -3.1669,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 11000,

    perfil: "cultura",
    prioridad: 132,
    cooldownMin: 100,
    intereses: ["a2", "n320", "a40", "palacios", "medieval", "renacimiento", "viaje_hacia_aragon"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guadalajara.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gua_palacio_infantado",
        "nombre": "Palacio del Infantado (Guadalajara)",
        "tipo": "palacio",
        "nivel": 1,
        "lat": 40.6314256,
        "lng": -3.1650391,
        "radio": 5000
      },
      {
        "id": "es_gua_capital_guadalajara",
        "nombre": "Guadalajara (capital de provincia)",
        "tipo": "capital_provincia",
        "nivel": 1,
        "lat": 40.63333,
        "lng": -3.16667,
        "radio": 9000
      },
      {
        "id": "es_clm_gua_lupiana",
        "nombre": "Lupiana (monasterio jerónimo en la salida hacia la Alcarria)",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 40.6112,
        "lng": -3.0546,
        "radio": 6500
      },
      {
        "id": "es_gua_concatedral_santa_maria",
        "nombre": "Concatedral de Santa María (Guadalajara)",
        "tipo": "iglesia",
        "nivel": 2,
        "lat": 40.6345712,
        "lng": -3.1652753,
        "radio": 4000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guadalajara.png",
  },

  {
    id: "es_clm_gua_alto_tajo",
    nombre: "Parque Natural del Alto Tajo (gran reserva de cañones y pinares)",
    emoji: "🌿",
    lat: 40.896,
    lng: -1.896,
    nivel: 1,
    categorias: ["naturaleza", "parque", "paisaje", "senderismo"],
    tipo: "parque_natural",
    radioActivacionMetros: 12000,

    perfil: "naturaleza",
    prioridad: 128,
    cooldownMin: 110,
    intereses: ["alto_tajo", "cañones", "pinares", "fauna", "serrania"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-alto-tajo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_gua_molina_aragon",
        "nombre": "Molina de Aragón (fortaleza y señorío del extremo oriental)",
        "tipo": "villa_historica",
        "nivel": 1,
        "lat": 40.8428,
        "lng": -1.8864,
        "radio": 9000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-alto-tajo.png",
  },

  {
    id: "es_clm_gua_brihuega",
    nombre: "Brihuega (jardines, murallas y la Alcarria más conocida)",
    emoji: "🏰",
    lat: 40.7595,
    lng: -2.8705,
    nivel: 1,
    categorias: ["historia", "pueblo", "cultura", "paisaje"],
    tipo: "villa_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 90,
    intereses: ["alcarria", "murallas", "jardines", "lavanda", "n2", "desvios_recomendados"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/brihuega.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gua_brihuega_jardines",
        "nombre": "Brihuega (jardines y casco histórico)",
        "tipo": "pueblo",
        "nivel": 2,
        "lat": 40.7597,
        "lng": -2.8705,
        "radio": 11000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/brihuega.png",
  },

  {
    id: "es_clm_gua_recopolis",
    nombre: "Recópolis (ciudad visigoda junto al Tajo)",
    emoji: "🏛️",
    lat: 40.3378,
    lng: -2.8818,
    nivel: 1,
    categorias: ["historia", "arqueologia", "datosCuriosos", "cultura"],
    tipo: "yacimiento_visigodo",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 124,
    cooldownMin: 95,
    intereses: ["visigodos", "arqueologia", "tajo", "ciudad_antigua", "n320"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/recopolis.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_gua_zorita_canes",
        "nombre": "Zorita de los Canes (castillo y vega del Tajo)",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 40.3304,
        "lng": -2.8897,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/recopolis.png",
  },

  {
    id: "es_clm_gua_pastrana",
    nombre: "Pastrana (duques, conventos y trazado histórico)",
    emoji: "🏰",
    lat: 40.4191,
    lng: -2.9227,
    nivel: 1,
    categorias: ["historia", "pueblo", "cultura", "literatura"],
    tipo: "villa_historica",
    radioActivacionMetros: 8500,

    perfil: "cultura",
    prioridad: 122,
    cooldownMin: 90,
    intereses: ["n320", "alcarria", "santa_teresa", "evoli", "palacio_ducal"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pastrana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gua_pastrana_ducal",
        "nombre": "Pastrana (palacio ducal y villa histórica)",
        "tipo": "pueblo_historico",
        "nivel": 3,
        "lat": 40.417,
        "lng": -2.922,
        "radio": 12000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pastrana.png",
  },

  {
    id: "es_clm_gua_atienza",
    nombre: "Atienza (fortaleza de frontera y silueta medieval)",
    emoji: "🏰",
    lat: 41.1978,
    lng: -2.87,
    nivel: 2,
    categorias: ["historia", "castillo", "medieval", "paisaje"],
    tipo: "villa_medieval",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 109,
    cooldownMin: 80,
    intereses: ["frontera_castellana", "medieval", "castillo", "serrania"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/atienza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/atienza.png",
  },

  {
    id: "es_clm_gua_torija",
    nombre: "Torija (castillo y hito clásico del corredor A-2)",
    emoji: "🏰",
    lat: 40.744,
    lng: -3.0302,
    nivel: 2,
    categorias: ["historia", "castillo", "ruta", "pueblo"],
    tipo: "castillo",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 70,
    intereses: ["a2", "castillos", "camino_real", "viajeros", "alcarria"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torija.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gua_castillo_torija",
        "nombre": "Castillo de Torija (cerca de la A2)",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 40.7431409,
        "lng": -3.0341528,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torija.png",
  },

  {
    id: "es_clm_gua_entrepenas",
    nombre: "Embalse de Entrepeñas (gran horizonte de agua de la Alcarria)",
    emoji: "💧",
    lat: 40.486,
    lng: -2.717,
    nivel: 2,
    categorias: ["naturaleza", "agua", "paisaje", "mirador"],
    tipo: "embalse",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 107,
    cooldownMin: 80,
    intereses: ["a40", "embalses", "tajo", "miradores", "ingenieria_hidraulica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/embalse-de-entrepenas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_clm_gua_sacedon",
        "nombre": "Sacedón (balcón a Entrepeñas en la ruta hacia Cuenca)",
        "tipo": "pueblo_embalse",
        "nivel": 2,
        "lat": 40.4813,
        "lng": -2.7327,
        "radio": 7500
      },
      {
        "id": "es_clm_gua_monsalud",
        "nombre": "Monasterio de Monsalud (joya cisterciense cerca de la A-40)",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 40.4582,
        "lng": -2.706,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/embalse-de-entrepenas.png",
  },

  {
    id: "es_clm_gua_jadraque",
    nombre: "Jadraque (castillo del Cid sobre el valle del Henares)",
    emoji: "🏰",
    lat: 40.9256,
    lng: -2.9251,
    nivel: 2,
    categorias: ["historia", "castillo", "paisaje", "pueblo"],
    tipo: "castillo",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 70,
    intereses: ["castillo", "henares", "a2", "miradores", "frontera_medieval"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jadraque.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jadraque.png",
  },

  {
    id: "es_clm_gua_tamajon",
    nombre: "Tamajón (puerta de la arquitectura negra)",
    emoji: "🛤️",
    lat: 40.9999,
    lng: -3.2487,
    nivel: 2,
    categorias: ["arquitectura", "pueblo", "paisaje", "ruta"],
    tipo: "pueblo_ruta",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 103,
    cooldownMin: 75,
    intereses: ["arquitectura_negra", "sierra", "pizarra", "escapadas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tamajon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tamajon.png",
  },

  {
    id: "es_clm_gua_trillo",
    nombre: "Trillo (río, cascadas urbanas y energía)",
    emoji: "🌊",
    lat: 40.7004,
    lng: -2.5931,
    nivel: 2,
    categorias: ["rio", "paisaje", "ingenieria", "pueblo"],
    tipo: "pueblo_ribera",
    radioActivacionMetros: 7500,

    perfil: "naturaleza",
    prioridad: 102,
    cooldownMin: 75,
    intereses: ["rio_tajo", "cascadas", "energia", "n320", "alcarria"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/trillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/trillo.png",
  },

  {
    id: "es_clm_gua_hita",
    nombre: "Hita (villa medieval junto al eje Madrid-Zaragoza)",
    emoji: "🏰",
    lat: 40.8248,
    lng: -3.0492,
    nivel: 2,
    categorias: ["historia", "medieval", "pueblo", "ruta"],
    tipo: "villa_medieval",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 102,
    cooldownMin: 65,
    intereses: ["arcipreste", "medieval", "a2", "cerros", "literatura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hita.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hita.png",
  },

  {
    id: "es_clm_gua_cogolludo",
    nombre: "Cogolludo (palacio renacentista en la sierra norte)",
    emoji: "🏰",
    lat: 40.946,
    lng: -3.0896,
    nivel: 2,
    categorias: ["historia", "renacimiento", "pueblo", "cultura"],
    tipo: "villa_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 101,
    cooldownMin: 70,
    intereses: ["palacio", "mendoza", "renacimiento", "sierra_norte"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cogolludo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cogolludo.png",
  },

  {
    id: "es_clm_gua_cifuentes",
    nombre: "Cifuentes (manantiales, plaza mayor y señorío)",
    emoji: "🏰",
    lat: 40.7865,
    lng: -2.622,
    nivel: 2,
    categorias: ["historia", "pueblo", "agua", "cultura"],
    tipo: "villa_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 70,
    intereses: ["n320", "manantiales", "alcarria", "plaza_mayor"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cifuentes.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cifuentes.png",
  },

  {
    id: "es_gua_salinas_imon",
    nombre: "Salinas de Imón (patrimonio salinero)",
    emoji: "🧂",
    lat: 41.1600875,
    lng: -2.7391867,
    nivel: 3,
    categorias: ["historia", "industria", "datosCuriosos", "patrimonio"],
    tipo: "salinas",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 80,
    cooldownMin: 120,
    intereses: ["sal", "industria_historica", "patrimonio", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/salinas-de-imon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/salinas-de-imon.png",
  },

  {
    id: "es_gua_alcolea_pinar_nudo",
    nombre: "Alcolea del Pinar (nudo A2 / N-211)",
    emoji: "🏡",
    lat: 41.0355,
    lng: -2.467,
    nivel: 3,
    categorias: ["cultura", "carretera", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "parada",
    prioridad: 75,
    cooldownMin: 90,
    intereses: ["parada_viaje", "servicios", "nudo_carreteras"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcolea-del-pinar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcolea-del-pinar.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cat_bar_barcelona",
    nombre: "Barcelona (capital de provincia)",
    emoji: "🏛️",
    lat: 41.3874,
    lng: 2.1686,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "modernismo"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "gaudi", "gótico", "modernismo", "puerto", "ramblas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/barcelona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cat_bar_sant_cugat",
        "nombre": "Sant Cugat del Vallès y su monasterio",
        "tipo": "ciudad",
        "nivel": 2,
        "lat": 41.4736,
        "lng": 2.0861,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/barcelona.png",
  },

  {
    id: "es_cat_bar_montserrat_monasterio",
    nombre: "Monasterio de Montserrat",
    emoji: "⛪",
    lat: 41.5933,
    lng: 1.8372,
    nivel: 1,
    categorias: ["historia", "religion", "montaña", "paisaje"],
    tipo: "monasterio",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 90,
    intereses: ["monasterio", "moreneta", "montaña", "peregrinación", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-montserrat.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-montserrat.png",
  },

  {
    id: "es_cat_bar_cardona",
    nombre: "Cardona y su castillo",
    emoji: "🏰",
    lat: 41.913,
    lng: 1.681,
    nivel: 1,
    categorias: ["castillo", "historia", "mina", "paisaje"],
    tipo: "villa_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["castillo", "sal", "frontera_medieval", "fortaleza", "valle"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cardona-y-su-castillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cardona-y-su-castillo.png",
  },

  {
    id: "es_cat_bar_montseny",
    nombre: "Parque Natural del Montseny",
    emoji: "🌿",
    lat: 41.775,
    lng: 2.464,
    nivel: 1,
    categorias: ["naturaleza", "parque_natural", "montaña", "unesco"],
    tipo: "parque_natural",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["bosques", "senderismo", "fauna", "miradores", "reserva_biosfera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-montseny.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-montseny.png",
  },

  {
    id: "es_cat_bar_sitges",
    nombre: "Sitges",
    emoji: "🐚",
    lat: 41.235,
    lng: 1.8119,
    nivel: 1,
    categorias: ["costa", "cultura", "playa", "arquitectura"],
    tipo: "pueblo_costero",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["playas", "casco_historico", "modernismo", "cine", "paseo_maritimo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sitges.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sitges.png",
  },

  {
    id: "es_cat_bar_vic",
    nombre: "Vic",
    emoji: "🏘️",
    lat: 41.93,
    lng: 2.254,
    nivel: 2,
    categorias: ["historia", "mercado", "cultura", "gastronomia"],
    tipo: "capital_comarcal",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 50,
    intereses: ["plaza_mayor", "embutidos", "obispado", "mercados", "románico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vic.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vic.png",
  },

  {
    id: "es_cat_bar_colonia_guell",
    nombre: "Colònia Güell y la cripta de Gaudí",
    emoji: "🏭",
    lat: 41.3617,
    lng: 2.0289,
    nivel: 2,
    categorias: ["gaudi", "arquitectura", "industria", "unesco"],
    tipo: "colonia_industrial",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 50,
    intereses: ["gaudi", "colonia_industrial", "cripta", "modernismo", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/colonia-guell-y-la-cripta-de-gaudi.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/colonia-guell-y-la-cripta-de-gaudi.png",
  },

  {
    id: "es_cat_bar_sant_sadurni_cava",
    nombre: "Sant Sadurní d’Anoia y la cultura del cava",
    emoji: "🍷",
    lat: 41.425,
    lng: 1.785,
    nivel: 2,
    categorias: ["gastronomia", "cultura", "vino", "datosCuriosos"],
    tipo: "villa_enoturistica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 50,
    intereses: ["cava", "bodegas", "viñedo", "enoturismo", "tradición"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sant-sadurni-danoia-y-la-cultura-del-cava.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sant-sadurni-danoia-y-la-cultura-del-cava.png",
  },

  {
    id: "es_cat_bar_terrassa",
    nombre: "Terrassa y el modernismo industrial",
    emoji: "🏙️",
    lat: 41.5632,
    lng: 2.0089,
    nivel: 2,
    categorias: ["cultura", "arquitectura", "industria", "historia"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 50,
    intereses: ["modernismo", "industria_textil", "seu_d_egara", "patrimonio", "valles"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/terrassa-y-el-modernismo-industrial.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/terrassa-y-el-modernismo-industrial.png",
  },

  {
    id: "es_cat_bar_manresa",
    nombre: "Manresa",
    emoji: "🏙️",
    lat: 41.726,
    lng: 1.823,
    nivel: 2,
    categorias: ["historia", "religion", "ciudad", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 107,
    cooldownMin: 50,
    intereses: ["seo", "ignacio_de_loyola", "puente", "cataluna_central", "camino"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/manresa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/manresa.png",
  },

  {
    id: "es_cat_bar_vilafranca_penedes",
    nombre: "Vilafranca del Penedès",
    emoji: "🏘️",
    lat: 41.345,
    lng: 1.699,
    nivel: 2,
    categorias: ["vino", "historia", "cultura", "ruta"],
    tipo: "capital_comarcal",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 105,
    cooldownMin: 50,
    intereses: ["penedes", "vino", "castellers", "ferias", "casco_historico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vilafranca-del-penedes.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vilafranca-del-penedes.png",
  },

  {
    id: "es_cat_bar_mataro",
    nombre: "Mataró",
    emoji: "🏘️",
    lat: 41.5381,
    lng: 2.4445,
    nivel: 2,
    categorias: ["costa", "romanico", "cultura", "mar"],
    tipo: "capital_comarcal",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 103,
    cooldownMin: 45,
    intereses: ["costa", "romano", "modernismo", "maresme", "puerto"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mataro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mataro.png",
  },

  {
    id: "es_cat_bar_garraf",
    nombre: "Parque del Garraf",
    emoji: "🌿",
    lat: 41.31,
    lng: 1.87,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "karst", "costa"],
    tipo: "parque_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 102,
    cooldownMin: 45,
    intereses: ["senderos", "paisaje_calizo", "mediterraneo", "cuevas", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-del-garraf.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-del-garraf.png",
  },

  {
    id: "es_cat_bar_castelldefels",
    nombre: "Castelldefels y su castillo",
    emoji: "⚓",
    lat: 41.28,
    lng: 1.976,
    nivel: 2,
    categorias: ["costa", "castillo", "playa", "datosCuriosos"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 102,
    cooldownMin: 45,
    intereses: ["castillo", "playa", "delta_llobregat", "aeropuerto", "torres_defensivas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castelldefels-y-su-castillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castelldefels-y-su-castillo.png",
  },

  {
    id: "es_cat_bar_granollers",
    nombre: "Granollers",
    emoji: "🏙️",
    lat: 41.6079,
    lng: 2.2877,
    nivel: 2,
    categorias: ["historia", "mercado", "ciudad", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 102,
    cooldownMin: 45,
    intereses: ["porxada", "mercados", "valles_oriental", "ruta_francia", "historia_local"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/granollers.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cat_bar_circuit_montmelo",
        "nombre": "Circuit de Barcelona-Catalunya (Montmeló)",
        "tipo": "circuito",
        "nivel": 2,
        "lat": 41.5696,
        "lng": 2.2612,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/granollers.png",
  },

  {
    id: "es_cat_bar_caldes_montbui",
    nombre: "Caldes de Montbui",
    emoji: "♨️",
    lat: 41.6322,
    lng: 2.1649,
    nivel: 2,
    categorias: ["termas", "historia", "cultura", "datosCuriosos"],
    tipo: "villa_termal",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 101,
    cooldownMin: 45,
    intereses: ["termalismo", "romano", "balnearios", "agua_caliente", "casco_antiguo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caldes-de-montbui.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caldes-de-montbui.png",
  },

  {
    id: "es_cat_bar_sabadell",
    nombre: "Sabadell",
    emoji: "🏙️",
    lat: 41.5463,
    lng: 2.1086,
    nivel: 2,
    categorias: ["cultura", "industria", "ciudad", "historia"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["industria_textil", "valles", "plazas", "arquitectura", "movilidad"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sabadell.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sabadell.png",
  },

  {
    id: "es_cat_bar_igualada",
    nombre: "Igualada",
    emoji: "🏙️",
    lat: 41.5788,
    lng: 1.6172,
    nivel: 2,
    categorias: ["industria", "historia", "ciudad", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 98,
    cooldownMin: 45,
    intereses: ["curtidos", "museos", "anoia", "modernismo", "aerostacion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/igualada.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/igualada.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cat_gi_girona",
    nombre: "Girona (capital de provincia)",
    emoji: "🏛️",
    lat: 41.9794,
    lng: 2.8214,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "juderia"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 120,
    intereses: ["casco_historico", "murallas", "onyar", "juderia", "catedral"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/girona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/girona.png",
  },

  {
    id: "es_cat_gi_garrotxa",
    nombre: "Parque Natural de la Zona Volcánica de la Garrotxa",
    emoji: "🌿",
    lat: 42.155,
    lng: 2.513,
    nivel: 1,
    categorias: ["naturaleza", "volcanes", "paisaje", "senderismo"],
    tipo: "parque_natural",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 60,
    intereses: ["conos_volcanicos", "hayedo", "senderismo", "fauna", "geologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-la-zona-volcanica-de-la-garrotxa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cat_gi_olot",
        "nombre": "Olot",
        "tipo": "ciudad",
        "nivel": 2,
        "lat": 42.1828,
        "lng": 2.4889,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-la-zona-volcanica-de-la-garrotxa.png",
  },

  {
    id: "es_cat_gi_besalu",
    nombre: "Besalú",
    emoji: "🏰",
    lat: 42.2,
    lng: 2.6997,
    nivel: 1,
    categorias: ["medieval", "historia", "puente", "cultura"],
    tipo: "villa_medieval",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["puente", "juderia", "edad_media", "garrotxa", "románico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/besalu.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/besalu.png",
  },

  {
    id: "es_cat_gi_ripoll",
    nombre: "Ripoll",
    emoji: "🏰",
    lat: 42.2007,
    lng: 2.1903,
    nivel: 1,
    categorias: ["romanico", "historia", "monasterio", "cultura"],
    tipo: "villa_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["monasterio", "origen_cataluña", "románico", "pirineo", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ripoll.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ripoll.png",
  },

  {
    id: "es_cat_gi_figueres",
    nombre: "Figueres",
    emoji: "🏙️",
    lat: 42.2666,
    lng: 2.9616,
    nivel: 1,
    categorias: ["cultura", "arte", "ruta", "ciudad"],
    tipo: "ciudad",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["dali", "emporda", "museos", "fortaleza", "frontera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/figueres.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cat_gi_teatre_museu_dali",
        "nombre": "Teatre-Museu Dalí",
        "tipo": "museo",
        "nivel": 1,
        "lat": 42.2681,
        "lng": 2.9581,
        "radio": 6000
      },
      {
        "id": "es_cat_gi_peralada",
        "nombre": "Peralada",
        "tipo": "villa_enoturistica",
        "nivel": 2,
        "lat": 42.3084,
        "lng": 3.0107,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/figueres.png",
  },

  {
    id: "es_cat_gi_cadaques",
    nombre: "Cadaqués",
    emoji: "🐚",
    lat: 42.2887,
    lng: 3.2784,
    nivel: 1,
    categorias: ["costa", "arte", "pueblo", "paisaje"],
    tipo: "pueblo_costero",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 116,
    cooldownMin: 60,
    intereses: ["dali", "mediterraneo", "cala", "casas_blancas", "cap_de_creus"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cadaques.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cadaques.png",
  },

  {
    id: "es_cat_gi_tossa",
    nombre: "Tossa de Mar",
    emoji: "🐚",
    lat: 41.7206,
    lng: 2.9323,
    nivel: 1,
    categorias: ["costa", "murallas", "playa", "cultura"],
    tipo: "villa_costera",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 112,
    cooldownMin: 50,
    intereses: ["vila_vella", "murallas", "calas", "costa_brava", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tossa-de-mar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tossa-de-mar.png",
  },

  {
    id: "es_cat_gi_pals",
    nombre: "Pals",
    emoji: "🏰",
    lat: 41.9703,
    lng: 3.1481,
    nivel: 1,
    categorias: ["medieval", "costa", "historia", "paisaje"],
    tipo: "villa_medieval",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 112,
    cooldownMin: 50,
    intereses: ["torre", "emporda", "arroz", "calles_piedra", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pals.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pals.png",
  },

  {
    id: "es_cat_gi_banyoles",
    nombre: "Banyoles y su lago",
    emoji: "🏞️",
    lat: 42.1167,
    lng: 2.7667,
    nivel: 2,
    categorias: ["naturaleza", "lago", "deporte", "cultura"],
    tipo: "ciudad_lacustre",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 108,
    cooldownMin: 50,
    intereses: ["estany", "remo", "karst", "paseos", "leyendas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/banyoles-y-su-lago.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/banyoles-y-su-lago.png",
  },

  {
    id: "es_cat_gi_camprodon",
    nombre: "Camprodon",
    emoji: "⛰️",
    lat: 42.3128,
    lng: 2.364,
    nivel: 2,
    categorias: ["montaña", "puente", "historia", "pueblo"],
    tipo: "villa_montana",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 106,
    cooldownMin: 50,
    intereses: ["pirineo", "puente_románico", "valles", "montaña", "rio_ter"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/camprodon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/camprodon.png",
  },

  {
    id: "es_cat_gi_castello_empuries",
    nombre: "Castelló d’Empúries",
    emoji: "🏰",
    lat: 42.258,
    lng: 3.075,
    nivel: 2,
    categorias: ["medieval", "humedales", "historia", "cultura"],
    tipo: "villa_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 105,
    cooldownMin: 50,
    intereses: ["emporda", "basilica", "amedieval", "aiguamolls", "canales"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castello-dempuries.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castello-dempuries.png",
  },

  {
    id: "es_cat_gi_portbou",
    nombre: "Portbou",
    emoji: "🚩",
    lat: 42.4276,
    lng: 3.1593,
    nivel: 2,
    categorias: ["frontera", "costa", "historia", "ruta"],
    tipo: "pueblo_fronterizo",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 45,
    intereses: ["francia", "frontera", "tren", "walter_benjamin", "cala"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/portbou.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/portbou.png",
  },

  {
    id: "es_cat_gi_puigcerda",
    nombre: "Puigcerdà",
    emoji: "🏘️",
    lat: 42.4314,
    lng: 1.9287,
    nivel: 2,
    categorias: ["montaña", "frontera", "cultura", "naturaleza"],
    tipo: "capital_comarcal",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 45,
    intereses: ["cerdanya", "frontera", "lago", "esqui", "pirineo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puigcerda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puigcerda.png",
  },

  {
    id: "es_cat_gi_roses",
    nombre: "Roses",
    emoji: "⚓",
    lat: 42.2629,
    lng: 3.1748,
    nivel: 2,
    categorias: ["costa", "historia", "playa", "puerto"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 103,
    cooldownMin: 45,
    intereses: ["golfo_de_roses", "ciudadela", "playas", "bahia", "vacaciones"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/roses.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/roses.png",
  },

  {
    id: "es_cat_gi_sant_feliu",
    nombre: "Sant Feliu de Guíxols",
    emoji: "⚓",
    lat: 41.7807,
    lng: 3.0307,
    nivel: 2,
    categorias: ["costa", "monasterio", "mar", "cultura"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["costa_brava", "puerto", "monasterio", "paseo", "calas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sant-feliu-de-guixols.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sant-feliu-de-guixols.png",
  },

  {
    id: "es_cat_gi_hostalric",
    nombre: "Hostalric y su fortaleza",
    emoji: "🏰",
    lat: 41.7468,
    lng: 2.6356,
    nivel: 2,
    categorias: ["castillo", "fortaleza", "ruta", "historia"],
    tipo: "villa_historica",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["fortaleza", "ap7", "paso_estrategico", "murallas", "selva"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hostalric-y-su-fortaleza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hostalric-y-su-fortaleza.png",
  },

  {
    id: "es_cat_gi_bisbal_emporda",
    nombre: "La Bisbal d’Empordà",
    emoji: "🏙️",
    lat: 41.9606,
    lng: 3.0419,
    nivel: 2,
    categorias: ["artesania", "ceramica", "historia", "cultura"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 98,
    cooldownMin: 45,
    intereses: ["ceramica", "emporda", "artesania", "mercados", "castillo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-bisbal-demporda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-bisbal-demporda.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cat_lle_lleida",
    nombre: "Lleida (capital de provincia)",
    emoji: "🏛️",
    lat: 41.6176,
    lng: 0.62,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 125,
    cooldownMin: 120,
    intereses: ["segre", "seo_vella", "poniente", "catedral", "ciudad"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lleida.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cat_lle_seu_vella",
        "nombre": "La Seu Vella de Lleida",
        "tipo": "monumento",
        "nivel": 1,
        "lat": 41.6179,
        "lng": 0.6221,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lleida.png",
  },

  {
    id: "es_cat_lle_mont_rebei",
    nombre: "Congost de Mont-rebei",
    emoji: "🏔️",
    lat: 42.0731,
    lng: 0.7386,
    nivel: 1,
    categorias: ["naturaleza", "cañon", "senderismo", "paisaje"],
    tipo: "desfiladero",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 60,
    intereses: ["congost", "senderos", "pasarelas", "geologia", "vistas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/congost-de-mont-rebei.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/congost-de-mont-rebei.png",
  },

  {
    id: "es_cat_lle_vall_boi",
    nombre: "Vall de Boí",
    emoji: "🌄",
    lat: 42.504,
    lng: 0.803,
    nivel: 1,
    categorias: ["unesco", "romanico", "montaña", "naturaleza"],
    tipo: "valle_historico",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["románico", "boi_taull", "unesco", "pirineo", "valles"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vall-de-boi.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cat_lle_taull",
        "nombre": "Taüll y Sant Climent",
        "tipo": "iglesia_romanica",
        "nivel": 1,
        "lat": 42.5167,
        "lng": 0.85,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vall-de-boi.png",
  },

  {
    id: "es_cat_lle_seu_urgell",
    nombre: "La Seu d’Urgell",
    emoji: "🏘️",
    lat: 42.3567,
    lng: 1.4636,
    nivel: 1,
    categorias: ["pirineo", "romanico", "historia", "cultura"],
    tipo: "capital_comarcal",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 116,
    cooldownMin: 60,
    intereses: ["andorra", "catedral", "olimpiadas", "pirineo", "frontera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-seu-durgell.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-seu-durgell.png",
  },

  {
    id: "es_cat_lle_vielha",
    nombre: "Vielha e Mijaran",
    emoji: "🏘️",
    lat: 42.7014,
    lng: 0.7956,
    nivel: 1,
    categorias: ["pirineo", "montaña", "valle", "naturaleza"],
    tipo: "capital_comarcal",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 116,
    cooldownMin: 60,
    intereses: ["aran", "valle", "gastronomia", "esqui", "túnel_de_viella"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vielha-e-mijaran.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vielha-e-mijaran.png",
  },

  {
    id: "es_cat_lle_cervera",
    nombre: "Cervera",
    emoji: "🏰",
    lat: 41.6683,
    lng: 1.2752,
    nivel: 2,
    categorias: ["universidad", "historia", "cultura", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 106,
    cooldownMin: 50,
    intereses: ["universidad", "segarra", "murallas", "a2", "barroco"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cervera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cervera.png",
  },

  {
    id: "es_cat_lle_solsona",
    nombre: "Solsona",
    emoji: "🏰",
    lat: 41.9949,
    lng: 1.5171,
    nivel: 2,
    categorias: ["barroco", "historia", "montaña", "cultura"],
    tipo: "villa_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 106,
    cooldownMin: 50,
    intereses: ["solsones", "gigantes", "catedral", "casco_historico", "fiestas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/solsona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/solsona.png",
  },

  {
    id: "es_cat_lle_sort",
    nombre: "Sort",
    emoji: "⛰️",
    lat: 42.4103,
    lng: 1.1302,
    nivel: 2,
    categorias: ["montaña", "aventura", "rio", "naturaleza"],
    tipo: "villa_montana",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 45,
    intereses: ["rafting", "loteria", "pallars", "noguera_pallaresa", "pirineo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sort.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sort.png",
  },

  {
    id: "es_cat_lle_guimera",
    nombre: "Guimerà",
    emoji: "🏰",
    lat: 41.566,
    lng: 1.1857,
    nivel: 2,
    categorias: ["medieval", "pueblo", "historia", "cultura"],
    tipo: "villa_medieval",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 45,
    intereses: ["urgel", "calles_piedra", "torre", "rio_corb", "edad_media"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guimera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guimera.png",
  },

  {
    id: "es_cat_lle_estany_ivars",
    nombre: "Estany d’Ivars i Vila-sana",
    emoji: "🌿",
    lat: 41.6807,
    lng: 0.9912,
    nivel: 2,
    categorias: ["naturaleza", "lago", "aves", "paisaje"],
    tipo: "espacio_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 102,
    cooldownMin: 45,
    intereses: ["humedal", "aves", "recuperacion_ambiental", "pla_d_urgell", "paseos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/estany-divars-i-vila-sana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/estany-divars-i-vila-sana.png",
  },

  {
    id: "es_cat_lle_balaguer",
    nombre: "Balaguer",
    emoji: "🏙️",
    lat: 41.7892,
    lng: 0.805,
    nivel: 2,
    categorias: ["historia", "rio", "cultura", "medieval"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 101,
    cooldownMin: 45,
    intereses: ["rio_segre", "murallas", "mercado", "noguera", "plaza"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/balaguer.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/balaguer.png",
  },

  {
    id: "es_cat_lle_tremp",
    nombre: "Tremp",
    emoji: "🏙️",
    lat: 42.1676,
    lng: 0.894,
    nivel: 2,
    categorias: ["geologia", "naturaleza", "historia", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 101,
    cooldownMin: 45,
    intereses: ["pallars_jussa", "dinosaurios", "sierras", "embalses", "senderos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tremp.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tremp.png",
  },

  {
    id: "es_cat_lle_tarrega",
    nombre: "Tàrrega",
    emoji: "🏙️",
    lat: 41.6469,
    lng: 1.1392,
    nivel: 2,
    categorias: ["historia", "cultura", "ruta", "feria"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["urgell", "ferias", "calles_historicas", "a2", "mercados"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarrega.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarrega.png",
  },

  {
    id: "es_cat_lle_borges_blanques",
    nombre: "Les Borges Blanques",
    emoji: "🏘️",
    lat: 41.5218,
    lng: 0.8692,
    nivel: 2,
    categorias: ["aceite", "gastronomia", "ruta", "cultura"],
    tipo: "capital_comarcal",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["aceite_de_oliva", "garrigues", "ferias", "ap2", "cooperativas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/les-borges-blanques.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/les-borges-blanques.png",
  },

  {
    id: "es_cat_lle_agramunt",
    nombre: "Agramunt",
    emoji: "🏰",
    lat: 41.7864,
    lng: 1.0988,
    nivel: 2,
    categorias: ["gastronomia", "historia", "cultura", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 98,
    cooldownMin: 45,
    intereses: ["turron", "sio", "casco_historico", "urgell", "dulces"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/agramunt.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/agramunt.png",
  },

  {
    id: "es_cat_lle_ponts",
    nombre: "Ponts",
    emoji: "🏡",
    lat: 41.9157,
    lng: 1.184,
    nivel: 2,
    categorias: ["ruta", "puente", "historia", "gastronomia"],
    tipo: "villa",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 96,
    cooldownMin: 40,
    intereses: ["c14", "paso_natural", "embutidos", "noguera", "puente"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponts.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponts.png",
  },

  {
    id: "es_cat_lle_artesa_segre",
    nombre: "Artesa de Segre",
    emoji: "🏡",
    lat: 41.8947,
    lng: 1.0469,
    nivel: 2,
    categorias: ["ruta", "historia", "paisaje", "naturaleza"],
    tipo: "villa",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["noguera", "montsec", "paso_interior", "rios", "embalses"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/artesa-de-segre.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/artesa-de-segre.png",
  },

  {
    id: "es_cat_lle_mollerussa",
    nombre: "Mollerussa",
    emoji: "🏙️",
    lat: 41.63,
    lng: 0.894,
    nivel: 2,
    categorias: ["llanura", "ruta", "cultura", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 94,
    cooldownMin: 40,
    intereses: ["pla_d_urgell", "ferias", "regadio", "nudo_logistico", "a2"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mollerussa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mollerussa.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cat_tarr_tarragona",
    nombre: "Tarragona (capital de provincia)",
    emoji: "🏛️",
    lat: 41.1189,
    lng: 1.2445,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "roma", "unesco"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["romano", "anfiteatro", "mediterraneo", "circo", "murallas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarragona.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cat_tarr_amfiteatre",
        "nombre": "Anfiteatro romano de Tarragona",
        "tipo": "anfiteatro_romano",
        "nivel": 1,
        "lat": 41.1176,
        "lng": 1.2584,
        "radio": 7000
      },
      {
        "id": "es_cat_tarr_altafulla",
        "nombre": "Altafulla",
        "tipo": "villa_costera",
        "nivel": 2,
        "lat": 41.1438,
        "lng": 1.3744,
        "radio": 6500
      },
      {
        "id": "es_cat_tarr_salou",
        "nombre": "Salou",
        "tipo": "ciudad_costera",
        "nivel": 2,
        "lat": 41.0766,
        "lng": 1.1416,
        "radio": 7000
      },
      {
        "id": "es_cat_tarr_vila_seca",
        "nombre": "Vila-seca",
        "tipo": "ciudad",
        "nivel": 2,
        "lat": 41.1108,
        "lng": 1.145,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tarragona.png",
  },

  {
    id: "es_cat_tarr_delta_ebre",
    nombre: "Parque Natural del Delta de l’Ebre",
    emoji: "🌿",
    lat: 40.719,
    lng: 0.706,
    nivel: 1,
    categorias: ["naturaleza", "delta", "aves", "paisaje"],
    tipo: "parque_natural",
    radioActivacionMetros: 10000,

    perfil: "naturaleza",
    prioridad: 124,
    cooldownMin: 60,
    intereses: ["arrozales", "flamencos", "humedales", "bahias", "biodiversidad"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-delta-de-lebre.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-delta-de-lebre.png",
  },

  {
    id: "es_cat_tarr_poblet",
    nombre: "Monasterio de Poblet",
    emoji: "⛪",
    lat: 41.3797,
    lng: 1.0802,
    nivel: 1,
    categorias: ["monasterio", "unesco", "historia", "cultura"],
    tipo: "monasterio",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 122,
    cooldownMin: 60,
    intereses: ["cister", "reyes_de_aragon", "unesco", "bosque", "silencio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-poblet.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-poblet.png",
  },

  {
    id: "es_cat_tarr_montblanc",
    nombre: "Montblanc",
    emoji: "🏰",
    lat: 41.3768,
    lng: 1.1616,
    nivel: 1,
    categorias: ["medieval", "murallas", "historia", "cultura"],
    tipo: "villa_medieval",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["murallas", "sant_jordi", "conca_de_barbera", "casco_historico", "leyendas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montblanc.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montblanc.png",
  },

  {
    id: "es_cat_tarr_miravet",
    nombre: "Miravet",
    emoji: "🏰",
    lat: 41.0406,
    lng: 0.5978,
    nivel: 1,
    categorias: ["castillo", "rio", "historia", "cultura"],
    tipo: "villa_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["castillo_templario", "ebro", "ceramica", "barca", "murallas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/miravet.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/miravet.png",
  },

  {
    id: "es_cat_tarr_reus",
    nombre: "Reus",
    emoji: "🏙️",
    lat: 41.154,
    lng: 1.108,
    nivel: 1,
    categorias: ["modernismo", "cultura", "gaudi", "ciudad"],
    tipo: "ciudad",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 116,
    cooldownMin: 60,
    intereses: ["gaudi", "vermú", "modernismo", "comercio", "camp_de_tarragona"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/reus.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/reus.png",
  },

  {
    id: "es_cat_tarr_siurana",
    nombre: "Siurana",
    emoji: "🔭",
    lat: 41.2604,
    lng: 0.9318,
    nivel: 1,
    categorias: ["pueblo", "paisaje", "escalada", "leyendas"],
    tipo: "pueblo_mirador",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 114,
    cooldownMin: 50,
    intereses: ["acantilados", "miradores", "escalada", "priorat", "leyenda_reina_mora"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/siurana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/siurana.png",
  },

  {
    id: "es_cat_tarr_tortosa",
    nombre: "Tortosa",
    emoji: "🏙️",
    lat: 40.8123,
    lng: 0.5216,
    nivel: 1,
    categorias: ["historia", "rio", "cultura", "ciudad"],
    tipo: "ciudad",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 114,
    cooldownMin: 60,
    intereses: ["ebro", "castillo", "renacimiento", "puentes", "catedral"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tortosa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tortosa.png",
  },

  {
    id: "es_cat_tarr_santes_creus",
    nombre: "Monasterio de Santes Creus",
    emoji: "⛪",
    lat: 41.3816,
    lng: 1.3606,
    nivel: 1,
    categorias: ["monasterio", "historia", "cultura", "cister"],
    tipo: "monasterio",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 114,
    cooldownMin: 50,
    intereses: ["cister", "claustro", "alt_camp", "reyes", "piedra"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santes-creus.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-santes-creus.png",
  },

  {
    id: "es_cat_tarr_falset",
    nombre: "Falset y el Priorat",
    emoji: "🍷",
    lat: 41.1468,
    lng: 0.8202,
    nivel: 2,
    categorias: ["vino", "paisaje", "cultura", "montaña"],
    tipo: "villa_enoturistica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 106,
    cooldownMin: 50,
    intereses: ["priorat", "vino", "sierras", "cooperativas", "enoturismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/falset-y-el-priorat.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/falset-y-el-priorat.png",
  },

  {
    id: "es_cat_tarr_valls",
    nombre: "Valls",
    emoji: "🏙️",
    lat: 41.2869,
    lng: 1.2499,
    nivel: 2,
    categorias: ["gastronomia", "castellers", "cultura", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 45,
    intereses: ["calçots", "castellers", "alt_camp", "fiestas", "tradicion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valls.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valls.png",
  },

  {
    id: "es_cat_tarr_amposta",
    nombre: "Amposta",
    emoji: "🏙️",
    lat: 40.7095,
    lng: 0.579,
    nivel: 2,
    categorias: ["rio", "delta", "cultura", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 102,
    cooldownMin: 45,
    intereses: ["puente_colgante", "delta", "arroz", "ebro", "montsia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/amposta.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/amposta.png",
  },

  {
    id: "es_cat_tarr_cambrils",
    nombre: "Cambrils",
    emoji: "⚓",
    lat: 41.0671,
    lng: 1.0565,
    nivel: 2,
    categorias: ["costa", "gastronomia", "puerto", "playa"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 101,
    cooldownMin: 45,
    intereses: ["puerto_pesquero", "playas", "cocina_marinera", "familias", "costa_daurada"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cambrils.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cambrils.png",
  },

  {
    id: "es_cat_tarr_vendrell",
    nombre: "El Vendrell",
    emoji: "🏙️",
    lat: 41.2204,
    lng: 1.5348,
    nivel: 2,
    categorias: ["cultura", "musica", "costa", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["pau_casals", "baix_penedes", "n340", "playas", "museos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-vendrell.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/el-vendrell.png",
  },

  {
    id: "es_cat_tarr_torredembarra",
    nombre: "Torredembarra",
    emoji: "⚓",
    lat: 41.1448,
    lng: 1.3986,
    nivel: 2,
    categorias: ["costa", "playa", "puerto", "ruta"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 96,
    cooldownMin: 40,
    intereses: ["faro", "playas", "puerto", "costa_daurada", "n340"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torredembarra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torredembarra.png",
  },

  {
    id: "es_cat_tarr_hospitalet_infant",
    nombre: "L’Hospitalet de l’Infant",
    emoji: "🐚",
    lat: 40.9928,
    lng: 0.9218,
    nivel: 2,
    categorias: ["costa", "ruta", "playa", "paisaje"],
    tipo: "villa_costera",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["ap7", "calas", "vandellos", "costa", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lhospitalet-de-linfant.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lhospitalet-de-linfant.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cval_ali_capital_alicante",
    nombre: "Alicante (capital, puerto y gran parada del litoral)",
    emoji: "🏛️",
    lat: 38.3452,
    lng: -0.481,
    nivel: 1,
    categorias: ["capital", "ciudad", "mar", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 80,
    intereses: ["capitalidad", "puerto", "a7", "mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alicante.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_ali_santa_barbara",
        "nombre": "Castillo de Santa Bárbara",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 38.3465,
        "lng": -0.4764,
        "radio": 5500
      },
      {
        "id": "es_cval_ali_puerto",
        "nombre": "Puerto de Alicante",
        "tipo": "puerto",
        "nivel": 1,
        "lat": 38.3395,
        "lng": -0.4793,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alicante.png",
  },

  {
    id: "es_cval_ali_villena",
    nombre: "Villena, puerta de Alicante por la A-31",
    emoji: "🏰",
    lat: 38.637,
    lng: -0.8657,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8500,

    perfil: "historia",
    prioridad: 132,
    cooldownMin: 75,
    intereses: ["a31", "castillo", "interior", "meseta"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villena-puerta-de-alicante-por-la-a-31.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_ali_castillo_atalaya",
        "nombre": "Castillo de la Atalaya de Villena",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 38.6342,
        "lng": -0.8611,
        "radio": 5500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villena-puerta-de-alicante-por-la-a-31.png",
  },

  {
    id: "es_cval_ali_elche",
    nombre: "Elche",
    emoji: "🏰",
    lat: 38.2699,
    lng: -0.7126,
    nivel: 1,
    categorias: ["ciudad", "cultura", "palmeras"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8500,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 70,
    intereses: ["palmeral", "misteri", "a7", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/elche.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_ali_palmeral",
        "nombre": "Palmeral de Elche",
        "tipo": "paisaje_cultural",
        "nivel": 1,
        "lat": 38.268,
        "lng": -0.7003,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/elche.png",
  },

  {
    id: "es_cval_ali_orihuela",
    nombre: "Orihuela",
    emoji: "🏰",
    lat: 38.0848,
    lng: -0.944,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 7500,

    perfil: "historia",
    prioridad: 121,
    cooldownMin: 60,
    intereses: ["vega_baja", "poeta_miguel_hernandez", "a7", "sur"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/orihuela.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/orihuela.png",
  },

  {
    id: "es_cval_ali_calpe",
    nombre: "Calpe y el Peñón de Ifach",
    emoji: "⚓",
    lat: 38.6446,
    lng: 0.0445,
    nivel: 1,
    categorias: ["mar", "naturaleza", "paisaje"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7500,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 55,
    intereses: ["ifach", "escalada", "litoral", "ap7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calpe-y-el-penon-de-ifach.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calpe-y-el-penon-de-ifach.png",
  },

  {
    id: "es_cval_ali_denia",
    nombre: "Dénia",
    emoji: "⚓",
    lat: 38.8408,
    lng: 0.1057,
    nivel: 1,
    categorias: ["mar", "puerto", "historia"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 119,
    cooldownMin: 55,
    intereses: ["ferry", "montgo", "litoral", "mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/denia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/denia.png",
  },

  {
    id: "es_cval_ali_benidorm",
    nombre: "Benidorm",
    emoji: "⚓",
    lat: 38.5411,
    lng: -0.1225,
    nivel: 1,
    categorias: ["mar", "ciudad", "turismo"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 8500,

    perfil: "datos",
    prioridad: 118,
    cooldownMin: 55,
    intereses: ["rascacielos", "playa", "ap7", "turismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/benidorm.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/benidorm.png",
  },

  {
    id: "es_cval_ali_altea",
    nombre: "Altea",
    emoji: "🐚",
    lat: 38.5989,
    lng: -0.0516,
    nivel: 1,
    categorias: ["mar", "pueblo", "cultura"],
    tipo: "villa_costera",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 117,
    cooldownMin: 50,
    intereses: ["casco_blanco", "iglesia", "mediterraneo", "n332"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/altea.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/altea.png",
  },

  {
    id: "es_cval_ali_santa_pola",
    nombre: "Santa Pola",
    emoji: "⚓",
    lat: 38.1917,
    lng: -0.555,
    nivel: 1,
    categorias: ["mar", "naturaleza", "ruta"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 116,
    cooldownMin: 50,
    intereses: ["salinas", "isla_tabarca", "pesca", "ap7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-pola.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santa-pola.png",
  },

  {
    id: "es_cval_ali_alcoy",
    nombre: "Alcoy, enclave industrial del eje interior por A-7",
    emoji: "🏰",
    lat: 38.6984,
    lng: -0.4731,
    nivel: 1,
    categorias: ["ciudad", "interior", "historia"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 115,
    cooldownMin: 50,
    intereses: ["a7", "modernismo", "monta%C3%B1a", "industria"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcoy-enclave-industrial-del-eje-interior-por-a-7.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alcoy-enclave-industrial-del-eje-interior-por-a-7.png",
  },

  {
    id: "es_cval_ali_torrevieja",
    nombre: "Torrevieja",
    emoji: "⚓",
    lat: 37.9779,
    lng: -0.6832,
    nivel: 1,
    categorias: ["mar", "salinas", "turismo"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7500,

    perfil: "naturaleza",
    prioridad: 114,
    cooldownMin: 50,
    intereses: ["salinas", "n332", "ap7", "litoral_sur"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torrevieja.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torrevieja.png",
  },

  {
    id: "es_cval_ali_guardamar",
    nombre: "Guardamar del Segura",
    emoji: "⚓",
    lat: 38.0903,
    lng: -0.6556,
    nivel: 1,
    categorias: ["mar", "paisaje", "dunas"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 113,
    cooldownMin: 45,
    intereses: ["dunas", "segura", "n332", "ap7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guardamar-del-segura.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/guardamar-del-segura.png",
  },

  {
    id: "es_cval_ali_elda_petrer",
    nombre: "Elda y Petrer, nudo interior entre A-31 y A-7",
    emoji: "🏙️",
    lat: 38.4778,
    lng: -0.7916,
    nivel: 1,
    categorias: ["ciudad", "ruta", "industria"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "datos",
    prioridad: 112,
    cooldownMin: 50,
    intereses: ["calzado", "a31", "a7", "vinalopo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/elda-y-petrer-nudo-interior-entre-a-31-y-a-7.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/elda-y-petrer-nudo-interior-entre-a-31-y-a-7.png",
  },

  {
    id: "es_cval_ali_villajoyosa",
    nombre: "La Vila Joiosa",
    emoji: "⚓",
    lat: 38.5079,
    lng: -0.2328,
    nivel: 1,
    categorias: ["mar", "historia", "gastronomia"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 112,
    cooldownMin: 45,
    intereses: ["casas_de_colores", "chocolate", "litoral", "ap7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-vila-joiosa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-vila-joiosa.png",
  },

  {
    id: "es_cval_ali_novelda",
    nombre: "Novelda",
    emoji: "🏙️",
    lat: 38.3853,
    lng: -0.767,
    nivel: 1,
    categorias: ["ciudad", "historia", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 111,
    cooldownMin: 45,
    intereses: ["uvas", "marmol", "a31", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/novelda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_ali_santuario_novelda",
        "nombre": "Santuario de Santa María Magdalena de Novelda",
        "tipo": "santuario",
        "nivel": 1,
        "lat": 38.401,
        "lng": -0.7658,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/novelda.png",
  },

  {
    id: "es_cval_cas_peniscola",
    nombre: "Peñíscola y su ciudadela sobre el mar",
    emoji: "🏰",
    lat: 40.3579,
    lng: 0.4069,
    nivel: 1,
    categorias: ["historia", "fortaleza", "mar", "cultura"],
    tipo: "conjunto_historico",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 140,
    cooldownMin: 80,
    intereses: ["castillo", "templarios", "murallas", "mediterraneo", "cine"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/peniscola-y-su-ciudadela-sobre-el-mar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/peniscola-y-su-ciudadela-sobre-el-mar.png",
  },

  {
    id: "es_cval_cas_morella",
    nombre: "Morella, gran fortaleza interior junto al eje de la N-232",
    emoji: "🏰",
    lat: 40.619,
    lng: -0.0974,
    nivel: 1,
    categorias: ["historia", "fortaleza", "pueblo"],
    tipo: "villa_historica",
    radioActivacionMetros: 9000,

    perfil: "historia",
    prioridad: 138,
    cooldownMin: 90,
    intereses: ["castillo", "murallas", "maestrazgo", "n232", "mirador"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/morella-gran-fortaleza-interior-junto-al-eje-de-la-n-232.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/morella-gran-fortaleza-interior-junto-al-eje-de-la-n-232.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cval_cas_capital_castellon",
    nombre: "Castellón de la Plana (capital y gran nodo del corredor mediterráneo)",
    emoji: "🏛️",
    lat: 39.9864,
    lng: -0.0513,
    nivel: 1,
    categorias: ["capital", "ciudad", "cultura", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 134,
    cooldownMin: 75,
    intereses: ["capitalidad", "a7", "ap7", "puerto", "llanura_costera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castellon-de-la-plana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_cas_grao_castellon",
        "nombre": "El Grao y Puerto de Castellón",
        "tipo": "puerto",
        "nivel": 1,
        "lat": 39.9745,
        "lng": -0.0129,
        "radio": 6500
      },
      {
        "id": "es_cval_cas_vila_real",
        "nombre": "Vila-real",
        "tipo": "ciudad",
        "nivel": 1,
        "lat": 39.9387,
        "lng": -0.1018,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castellon-de-la-plana.png",
  },

  {
    id: "es_cval_cas_vinaros",
    nombre: "Vinaròs (puerta norte de la Comunitat por AP-7/N-340)",
    emoji: "⚓",
    lat: 40.4703,
    lng: 0.4756,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta", "mar"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 132,
    cooldownMin: 75,
    intereses: ["ap7", "n340", "puerta_norte", "mediterraneo", "pesca"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vinaros.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_cas_benicarlo",
        "nombre": "Benicarló",
        "tipo": "ciudad_costera",
        "nivel": 1,
        "lat": 40.4189,
        "lng": 0.4231,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vinaros.png",
  },

  {
    id: "es_cval_cas_segorbe",
    nombre: "Segorbe, gran parada histórica del eje A-23",
    emoji: "🏰",
    lat: 39.8529,
    lng: -0.4881,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8000,

    perfil: "historia",
    prioridad: 128,
    cooldownMin: 70,
    intereses: ["a23", "via_verde", "obispado", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/segorbe-gran-parada-historica-del-eje-a-23.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_cas_navajas",
        "nombre": "Navajas y el Salto de la Novia",
        "tipo": "paraje_natural",
        "nivel": 1,
        "lat": 39.8779,
        "lng": -0.5033,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/segorbe-gran-parada-historica-del-eje-a-23.png",
  },

  {
    id: "es_cval_cas_desierto_palmas",
    nombre: "Desierto de las Palmas",
    emoji: "🌿",
    lat: 40.0709,
    lng: 0.018,
    nivel: 1,
    categorias: ["naturaleza", "montana", "mirador"],
    tipo: "parque_natural",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 126,
    cooldownMin: 65,
    intereses: ["miradores", "sierra", "benicassim", "castellon"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/desierto-de-las-palmas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_cas_benicassim",
        "nombre": "Benicàssim",
        "tipo": "ciudad_costera",
        "nivel": 1,
        "lat": 40.055,
        "lng": 0.0649,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/desierto-de-las-palmas.png",
  },

  {
    id: "es_cval_cas_arco_cabanes",
    nombre: "Arco romano de Cabanes",
    emoji: "🏛️",
    lat: 40.1547,
    lng: 0.044,
    nivel: 1,
    categorias: ["historia", "romano", "ruta"],
    tipo: "monumento_romano",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 122,
    cooldownMin: 55,
    intereses: ["via_augusta", "romano", "a7", "ap7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arco-romano-de-cabanes.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arco-romano-de-cabanes.png",
  },

  {
    id: "es_cval_cas_sant_mateu",
    nombre: "Sant Mateu (enlace histórico del Maestrazgo hacia la N-232)",
    emoji: "🏰",
    lat: 40.4634,
    lng: 0.1787,
    nivel: 1,
    categorias: ["historia", "pueblo", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 121,
    cooldownMin: 60,
    intereses: ["maestrazgo", "n232", "casco_historico", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sant-mateu.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sant-mateu.png",
  },

  {
    id: "es_cval_cas_prat_cabanes",
    nombre: "Parque Natural del Prat de Cabanes-Torreblanca",
    emoji: "🌿",
    lat: 40.2506,
    lng: 0.214,
    nivel: 1,
    categorias: ["naturaleza", "humedal", "paisaje"],
    tipo: "parque_natural",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["humedal", "aves", "litoral", "ap7", "a7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-prat-de-cabanes-torreblanca.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-del-prat-de-cabanes-torreblanca.png",
  },

  {
    id: "es_cval_cas_montanejos",
    nombre: "Montanejos (escapada natural desde el corredor interior)",
    emoji: "🌿",
    lat: 40.068,
    lng: -0.5215,
    nivel: 1,
    categorias: ["naturaleza", "montana", "aguas"],
    tipo: "villa_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 119,
    cooldownMin: 60,
    intereses: ["termas", "barranco", "cv20", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montanejos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montanejos.png",
  },

  {
    id: "es_cval_cas_jerica",
    nombre: "Jérica",
    emoji: "🏰",
    lat: 39.9138,
    lng: -0.5719,
    nivel: 1,
    categorias: ["historia", "pueblo", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 116,
    cooldownMin: 55,
    intereses: ["a23", "torre_mudejar", "palancia", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jerica.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jerica.png",
  },

  {
    id: "es_cval_cas_oropesa",
    nombre: "Oropesa del Mar",
    emoji: "⚓",
    lat: 40.0927,
    lng: 0.1412,
    nivel: 1,
    categorias: ["mar", "turismo", "ruta"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 112,
    cooldownMin: 50,
    intereses: ["playa", "ap7", "vacaciones", "litoral"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/oropesa-del-mar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/oropesa-del-mar.png",
  },

  {
    id: "es_cval_cas_coves_vinroma",
    nombre: "Les Coves de Vinromà (corredor interior de la A-7)",
    emoji: "🏡",
    lat: 40.3078,
    lng: 0.122,
    nivel: 1,
    categorias: ["pueblo", "ruta", "interior"],
    tipo: "pueblo",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 45,
    intereses: ["a7", "llanura_litoral", "interior", "mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/les-coves-de-vinroma.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/les-coves-de-vinroma.png",
  },

  {
    id: "es_cval_cas_nules",
    nombre: "Nules",
    emoji: "🏡",
    lat: 39.852,
    lng: -0.1548,
    nivel: 1,
    categorias: ["pueblo", "ruta", "costa"],
    tipo: "pueblo",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 104,
    cooldownMin: 45,
    intereses: ["a7", "citrico", "plana", "mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nules.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/nules.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cval_val_capital_valencia",
    nombre: "Valencia (capital mediterránea y gran nodo del este)",
    emoji: "🏛️",
    lat: 39.4699,
    lng: -0.3763,
    nivel: 1,
    categorias: ["capital", "ciudad", "cultura", "mar"],
    tipo: "capital_provincia",
    radioActivacionMetros: 11000,

    perfil: "cultura",
    prioridad: 140,
    cooldownMin: 90,
    intereses: ["capitalidad", "turia", "puerto", "mediterraneo", "historia_urbana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valencia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_val_ciudad_artes",
        "nombre": "Ciudad de las Artes y las Ciencias",
        "tipo": "complejo_cultural",
        "nivel": 1,
        "lat": 39.4549,
        "lng": -0.3507,
        "radio": 6500
      },
      {
        "id": "es_cval_val_puerto",
        "nombre": "Puerto de Valencia",
        "tipo": "puerto",
        "nivel": 1,
        "lat": 39.4482,
        "lng": -0.3203,
        "radio": 7000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valencia.png",
  },

  {
    id: "es_cval_val_requena",
    nombre: "Requena, gran puerta de entrada por la A-3",
    emoji: "🏰",
    lat: 39.4894,
    lng: -1.1012,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta", "vino"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 136,
    cooldownMin: 80,
    intereses: ["a3", "meseta", "bodega", "murallas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/requena-gran-puerta-de-entrada-por-la-a-3.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_val_hoces_cabriel",
        "nombre": "Parque Natural de las Hoces del Cabriel",
        "tipo": "parque_natural",
        "nivel": 1,
        "lat": 39.534,
        "lng": -1.0675,
        "radio": 8500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/requena-gran-puerta-de-entrada-por-la-a-3.png",
  },

  {
    id: "es_cval_val_sagunto",
    nombre: "Sagunto, llave histórica del corredor mediterráneo",
    emoji: "🏰",
    lat: 39.6834,
    lng: -0.2734,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8500,

    perfil: "historia",
    prioridad: 132,
    cooldownMin: 75,
    intereses: ["ap7", "a7", "romano", "castillo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sagunto-llave-historica-del-corredor-mediterraneo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_val_teatro_sagunto",
        "nombre": "Teatro romano de Sagunto",
        "tipo": "teatro_romano",
        "nivel": 1,
        "lat": 39.6798,
        "lng": -0.2749,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sagunto-llave-historica-del-corredor-mediterraneo.png",
  },

  {
    id: "es_cval_val_xativa",
    nombre: "Xàtiva",
    emoji: "🏰",
    lat: 38.9905,
    lng: -0.5186,
    nivel: 1,
    categorias: ["historia", "ciudad", "cultura"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8000,

    perfil: "historia",
    prioridad: 129,
    cooldownMin: 70,
    intereses: ["borja", "a7", "casco_historico", "interior_sur"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/xativa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_val_castillo_xativa",
        "nombre": "Castillo de Xàtiva",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 38.9918,
        "lng": -0.5169,
        "radio": 5500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/xativa.png",
  },

  {
    id: "es_cval_val_albufera",
    nombre: "Parque Natural de la Albufera",
    emoji: "🌿",
    lat: 39.3404,
    lng: -0.3345,
    nivel: 1,
    categorias: ["naturaleza", "humedal", "paisaje"],
    tipo: "parque_natural",
    radioActivacionMetros: 8500,

    perfil: "naturaleza",
    prioridad: 128,
    cooldownMin: 70,
    intereses: ["arrozales", "aves", "lago", "saler"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-la-albufera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-la-albufera.png",
  },

  {
    id: "es_cval_val_bocairent",
    nombre: "Bocairent",
    emoji: "🏰",
    lat: 38.7672,
    lng: -0.6087,
    nivel: 1,
    categorias: ["historia", "pueblo", "montana"],
    tipo: "villa_historica",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 120,
    cooldownMin: 55,
    intereses: ["casco_medieval", "a7", "barranco", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bocairent.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bocairent.png",
  },

  {
    id: "es_cval_val_gandia",
    nombre: "Gandía",
    emoji: "⚓",
    lat: 38.968,
    lng: -0.1813,
    nivel: 1,
    categorias: ["mar", "ciudad", "cultura"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 55,
    intereses: ["duques", "playa", "ap7", "mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/gandia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cval_val_oliva",
        "nombre": "Oliva",
        "tipo": "ciudad_costera",
        "nivel": 1,
        "lat": 38.9197,
        "lng": -0.1222,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/gandia.png",
  },

  {
    id: "es_cval_val_cheste_circuito",
    nombre: "Circuit Ricardo Tormo de Cheste",
    emoji: "🏎️",
    lat: 39.4812,
    lng: -0.6291,
    nivel: 1,
    categorias: ["deporte", "motor", "ruta"],
    tipo: "circuito",
    radioActivacionMetros: 6000,

    perfil: "datos",
    prioridad: 118,
    cooldownMin: 60,
    intereses: ["motogp", "a3", "motor", "cheste"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/circuit-ricardo-tormo-de-cheste.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/circuit-ricardo-tormo-de-cheste.png",
  },

  {
    id: "es_cval_val_utiel",
    nombre: "Utiel",
    emoji: "🏙️",
    lat: 39.5675,
    lng: -1.2034,
    nivel: 1,
    categorias: ["ciudad", "vino", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 117,
    cooldownMin: 55,
    intereses: ["a3", "utiel_requena", "vi%C3%B1edo", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/utiel.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/utiel.png",
  },

  {
    id: "es_cval_val_cullera",
    nombre: "Cullera",
    emoji: "⚓",
    lat: 39.1651,
    lng: -0.2501,
    nivel: 1,
    categorias: ["mar", "paisaje", "ruta"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 114,
    cooldownMin: 50,
    intereses: ["jucar", "playa", "monta%C3%B1a", "ap7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cullera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cullera.png",
  },

  {
    id: "es_cval_val_bunyol",
    nombre: "Buñol",
    emoji: "🏰",
    lat: 39.4183,
    lng: -0.7901,
    nivel: 1,
    categorias: ["pueblo", "cultura", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 113,
    cooldownMin: 50,
    intereses: ["tomatina", "a3", "castillo", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bunol.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bunol.png",
  },

  {
    id: "es_cval_val_alzira",
    nombre: "Alzira",
    emoji: "🏙️",
    lat: 39.1516,
    lng: -0.4344,
    nivel: 1,
    categorias: ["ciudad", "ruta", "rio"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 45,
    intereses: ["a7", "jucar", "huerta", "ribera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alzira.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alzira.png",
  },

  {
    id: "es_cval_val_ontinyent",
    nombre: "Ontinyent",
    emoji: "🏙️",
    lat: 38.8219,
    lng: -0.6064,
    nivel: 1,
    categorias: ["ciudad", "interior", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 109,
    cooldownMin: 45,
    intereses: ["a7", "vall_dalbaida", "textil", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ontinyent.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ontinyent.png",
  },

  {
    id: "es_cval_val_chiva",
    nombre: "Chiva",
    emoji: "🏡",
    lat: 39.4727,
    lng: -0.7172,
    nivel: 1,
    categorias: ["pueblo", "ruta", "interior"],
    tipo: "pueblo",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 109,
    cooldownMin: 45,
    intereses: ["a3", "sierra", "interior", "paso_hacia_valencia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chiva.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/chiva.png",
  },

  {
    id: "es_bad_merida",
    nombre: "Mérida (capital extremeña y ciudad romana)",
    emoji: "🏰",
    lat: 38.9,
    lng: -6.333,
    nivel: 1,
    categorias: ["historia", "ciudad", "cultura", "datosCuriosos"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 100,
    intereses: ["augusta_emerita", "roma", "lusitania", "patrimonio", "extremadura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/merida.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_bad_teatro_merida",
        "nombre": "Teatro Romano de Mérida",
        "tipo": "monumento_romano",
        "nivel": 1,
        "lat": 38.9169,
        "lng": -6.3431,
        "radio": 6000
      },
      {
        "id": "es_bad_anfiteatro_merida",
        "nombre": "Anfiteatro Romano de Mérida",
        "tipo": "monumento_romano",
        "nivel": 1,
        "lat": 38.9169,
        "lng": -6.3431,
        "radio": 5500
      },
      {
        "id": "es_bad_templo_diana",
        "nombre": "Templo de Diana (Mérida)",
        "tipo": "monumento_romano",
        "nivel": 2,
        "lat": 38.91694,
        "lng": -6.34314,
        "radio": 4500
      },
      {
        "id": "es_bad_alcazaba_merida",
        "nombre": "Alcazaba de Mérida",
        "tipo": "fortaleza",
        "nivel": 2,
        "lat": 38.91487,
        "lng": -6.34765,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/merida.png",
  },

  // ✅ CAPITAL
  {
    id: "es_bad_capital_badajoz",
    nombre: "Badajoz (capital de provincia)",
    emoji: "🏛️",
    lat: 38.88028,
    lng: -6.97528,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "frontera", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 120,
    intereses: ["frontera", "portugal", "alcazaba", "guadiana", "ciudad_amurallada"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/badajoz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_bad_alcazaba_badajoz",
        "nombre": "Alcazaba de Badajoz",
        "tipo": "fortaleza",
        "nivel": 1,
        "lat": 38.8828,
        "lng": -6.9683,
        "radio": 6000
      },
      {
        "id": "es_bad_puente_palmas",
        "nombre": "Puente de Palmas",
        "tipo": "puente_medieval",
        "nivel": 2,
        "lat": 38.8825,
        "lng": -6.9775,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/badajoz.png",
  },

  {
    id: "es_bad_zafra",
    nombre: "Zafra (la Sevilla chica)",
    emoji: "🏰",
    lat: 38.417,
    lng: -6.417,
    nivel: 1,
    categorias: ["historia", "arquitectura", "ciudad"],
    tipo: "villa_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 122,
    cooldownMin: 90,
    intereses: ["ferias", "plaza_grande", "plaza_chica", "duques_de_feria", "ruta_de_la_plata"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zafra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_bad_alcazar_duques_feria",
        "nombre": "Alcázar de los Duques de Feria (Zafra)",
        "tipo": "palacio",
        "nivel": 2,
        "lat": 38.417,
        "lng": -6.417,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zafra.png",
  },

  {
    id: "es_bad_medellin",
    nombre: "Medellín (villa histórica)",
    emoji: "🏰",
    lat: 38.96306,
    lng: -5.95778,
    nivel: 2,
    categorias: ["historia", "villa", "paisaje"],
    tipo: "villa_historica",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 108,
    cooldownMin: 85,
    intereses: ["metellinum", "romanidad", "conquistadores", "cerro", "guadiana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medellin.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_bad_castillo_medellin",
        "nombre": "Castillo de Medellín",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 38.96306,
        "lng": -5.95778,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/medellin.png",
  },

  {
    id: "es_bad_almendralejo",
    nombre: "Almendralejo (vino y Tierra de Barros)",
    emoji: "🏙️",
    lat: 38.68,
    lng: -6.41,
    nivel: 2,
    categorias: ["historia", "ciudad", "gastronomia"],
    tipo: "ciudad",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 106,
    cooldownMin: 80,
    intereses: ["vino", "tierra_de_barros", "industria", "ruta_de_la_plata", "cava"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almendralejo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almendralejo.png",
  },

  {
    id: "es_bad_monesterio",
    nombre: "Monesterio (jamón y puerta hacia Sierra Morena)",
    emoji: "🏡",
    lat: 38.0875,
    lng: -6.27444,
    nivel: 2,
    categorias: ["gastronomia", "ruta", "naturaleza", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 98,
    cooldownMin: 70,
    intereses: ["jamon", "sierra_morena", "dehesa", "a66", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monesterio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monesterio.png",
  },

  {
    id: "es_bad_villafranca_barros",
    nombre: "Villafranca de los Barros",
    emoji: "🏙️",
    lat: 38.56139,
    lng: -6.33917,
    nivel: 3,
    categorias: ["ruta", "ciudad", "gastronomia"],
    tipo: "ciudad",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 65,
    intereses: ["barros", "vino", "paso", "campina", "extremadura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villafranca-de-los-barros.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/villafranca-de-los-barros.png",
  },

  {
    id: "es_bad_fuente_cantos",
    nombre: "Fuente de Cantos (dehesa y Zurbarán)",
    emoji: "🏡",
    lat: 38.24667,
    lng: -6.30917,
    nivel: 3,
    categorias: ["historia", "pueblo", "cultura"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 86,
    cooldownMin: 65,
    intereses: ["zurbaran", "dehesa", "campina", "sur_extremeno", "ruta"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuente-de-cantos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fuente-de-cantos.png",
  },

  {
    id: "es_bad_montijo",
    nombre: "Montijo (Vegas Bajas del Guadiana)",
    emoji: "🏙️",
    lat: 38.91,
    lng: -6.6175,
    nivel: 3,
    categorias: ["ruta", "ciudad", "paisaje"],
    tipo: "ciudad",
    radioActivacionMetros: 5500,

    perfil: "historia",
    prioridad: 84,
    cooldownMin: 60,
    intereses: ["vegas_bajas", "guadiana", "regadio", "paso", "extremadura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montijo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/montijo.png",
  },

  {
    id: "es_bad_talavera_real",
    nombre: "Talavera la Real (llanura y aviación)",
    emoji: "🏡",
    lat: 38.5833,
    lng: -6.9,
    nivel: 3,
    categorias: ["ruta", "pueblo", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 80,
    cooldownMin: 55,
    intereses: ["llanura", "aviacion", "guadiana", "paso", "campina"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/talavera-la-real.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/talavera-la-real.png",
  },

  {
    id: "es_bad_torremejia",
    nombre: "Torremejía (enlace natural hacia Tierra de Barros)",
    emoji: "🏡",
    lat: 38.783,
    lng: -6.367,
    nivel: 3,
    categorias: ["ruta", "pueblo", "paisaje"],
    tipo: "pueblo",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 78,
    cooldownMin: 55,
    intereses: ["a66", "tierra_de_barros", "transito", "llanura", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torremejia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torremejia.png",
  },

  {
    id: "es_bad_lobon",
    nombre: "Lobón (entre Mérida y Badajoz)",
    emoji: "🏡",
    lat: 38.85,
    lng: -6.62417,
    nivel: 3,
    categorias: ["ruta", "pueblo", "paisaje"],
    tipo: "pueblo",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 78,
    cooldownMin: 55,
    intereses: ["guadiana", "vegas_bajas", "a5", "paso", "llanura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lobon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lobon.png",
  },

  {
    id: "es_cac_trujillo_ciudad",
    nombre: "Trujillo (ciudad monumental)",
    emoji: "🏰",
    lat: 39.46528,
    lng: -5.87889,
    nivel: 1,
    categorias: ["historia", "arquitectura", "ciudad"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 132,
    cooldownMin: 100,
    intereses: ["conquistadores", "renacimiento", "plaza_mayor", "murallas", "castillo", "fortaleza", "medieval", "alcazaba", "plaza_mayor", "francisco_pizarro", "soportales"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/trujillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cac_castillo_trujillo",
        "nombre": "Castillo de Trujillo",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 39.46528,
        "lng": -5.87889,
        "radio": 10
      },
      {
        "id": "es_cac_plaza_mayor_trujillo",
        "nombre": "Plaza Mayor de Trujillo",
        "tipo": "conjunto_historico",
        "nivel": 2,
        "lat": 39.46528,
        "lng": -5.87889,
        "radio": 10
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/trujillo.png",
  },

  // ✅ CAPITAL
  {
    id: "es_cac_capital_caceres",
    nombre: "Cáceres (capital de provincia)",
    emoji: "🏛️",
    lat: 39.483,
    lng: -6.367,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 120,
    intereses: ["capitalidad", "via_de_la_plata", "patrimonio", "ciudad", "extremadura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caceres.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cac_ciudad_monumental",
        "nombre": "Ciudad Monumental de Cáceres (UNESCO)",
        "tipo": "ciudad_historica",
        "nivel": 1,
        "lat": 39.474,
        "lng": -6.371,
        "radio": 8000
      },
      {
        "id": "es_cac_arco_estrella",
        "nombre": "Arco de la Estrella (Cáceres)",
        "tipo": "muralla",
        "nivel": 2,
        "lat": 39.474,
        "lng": -6.371,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caceres.png",
  },

  {
    id: "es_cac_monfrague",
    nombre: "Parque Nacional de Monfragüe",
    emoji: "🌲",
    lat: 39.84083,
    lng: -6.03,
    nivel: 1,
    categorias: ["naturaleza", "aves", "paisaje", "datosCuriosos"],
    tipo: "parque_nacional",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 128,
    cooldownMin: 60,
    intereses: ["aves_rapaces", "tajo", "tietar", "miradores", "bosque_mediterraneo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-monfrague.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cac_salto_gitano",
        "nombre": "Salto del Gitano (Monfragüe)",
        "tipo": "mirador",
        "nivel": 2,
        "lat": 39.84083,
        "lng": -6.03,
        "radio": 5000
      },
      {
        "id": "es_cac_torrejon_rubio",
        "nombre": "Torrejón el Rubio (puerta de Monfragüe)",
        "tipo": "pueblo",
        "nivel": 3,
        "lat": 39.7667,
        "lng": -6,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-nacional-de-monfrague.png",
  },

  {
    id: "es_cac_plasencia",
    nombre: "Plasencia (puerta del norte extremeño)",
    emoji: "🏙️",
    lat: 40.033,
    lng: -6.1,
    nivel: 2,
    categorias: ["historia", "ciudad", "arquitectura"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 90,
    intereses: ["jerte", "murallas", "catedrales", "norte_extremadura", "via_plata"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/plasencia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cac_catedral_plasencia",
        "nombre": "Catedral Nueva de Plasencia",
        "tipo": "catedral",
        "nivel": 2,
        "lat": 40.033,
        "lng": -6.1,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/plasencia.png",
  },

  {
    id: "es_cac_navalmoral_mata",
    nombre: "Navalmoral de la Mata (puerta del Campo Arañuelo)",
    emoji: "🏙️",
    lat: 39.89833,
    lng: -5.54028,
    nivel: 2,
    categorias: ["ruta", "ciudad", "historia", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 108,
    cooldownMin: 75,
    intereses: ["a5", "campo_aranuelo", "cruce_de_caminos", "historia_local", "viaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/navalmoral-de-la-mata.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/navalmoral-de-la-mata.png",
  },

  {
    id: "es_cac_los_barruecos",
    nombre: "Los Barruecos (berrocal, charcas y cigüeñas)",
    emoji: "🌄",
    lat: 39.44556,
    lng: -6.50583,
    nivel: 2,
    categorias: ["naturaleza", "geologia", "paisaje"],
    tipo: "paraje_natural",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 108,
    cooldownMin: 55,
    intereses: ["granito", "charcas", "ciguenas", "paisaje", "rodajes"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/los-barruecos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/los-barruecos.png",
  },

  {
    id: "es_cac_embalse_valdecanas",
    nombre: "Embalse de Valdecañas",
    emoji: "💧",
    lat: 39.83167,
    lng: -5.40278,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "ingenieria"],
    tipo: "embalse",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 98,
    cooldownMin: 55,
    intereses: ["agua", "tajo", "embalse", "aves", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/embalse-de-valdecanas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_cac_dolmen_guadalperal",
        "nombre": "Dolmen de Guadalperal (Stonehenge extremeño)",
        "tipo": "yacimiento",
        "nivel": 2,
        "lat": 39.83167,
        "lng": -5.40278,
        "radio": 4500
      },
      {
        "id": "es_cac_peraleda_mata",
        "nombre": "Peraleda de la Mata (acceso al A-5 y entorno del Tajo)",
        "tipo": "pueblo",
        "nivel": 3,
        "lat": 39.85,
        "lng": -5.4667,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/embalse-de-valdecanas.png",
  },

  {
    id: "es_cac_belvis_monroy",
    nombre: "Belvís de Monroy (castillo y señorío)",
    emoji: "🏰",
    lat: 39.8192,
    lng: -5.6092,
    nivel: 3,
    categorias: ["historia", "castillo", "pueblo"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 92,
    cooldownMin: 75,
    intereses: ["castillo", "senorio", "tierra_de_frontera", "a5", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/belvis-de-monroy.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/belvis-de-monroy.png",
  },

  {
    id: "es_cac_jaraicejo",
    nombre: "Jaraicejo (alto en la vieja ruta de Madrid a Lisboa)",
    emoji: "🏰",
    lat: 39.1,
    lng: -5.133,
    nivel: 3,
    categorias: ["historia", "ruta", "pueblo"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 90,
    cooldownMin: 70,
    intereses: ["n_v", "a5", "ruta_historica", "viajeros", "parada"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jaraicejo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jaraicejo.png",
  },

  {
    id: "es_cac_almaraz",
    nombre: "Almaraz (Tajo, embalse y energía)",
    emoji: "🏡",
    lat: 39.8,
    lng: -5.667,
    nivel: 3,
    categorias: ["ruta", "ingenieria", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 90,
    cooldownMin: 65,
    intereses: ["tajo", "embalse", "energia", "infraestructura", "extremadura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almaraz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/almaraz.png",
  },

  {
    id: "es_cac_talayuela",
    nombre: "Talayuela (tabaco, dehesa y pinar)",
    emoji: "🏡",
    lat: 39.9667,
    lng: -5.6,
    nivel: 3,
    categorias: ["ruta", "paisaje", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 5500,

    perfil: "naturaleza",
    prioridad: 88,
    cooldownMin: 60,
    intereses: ["tabaco", "dehesa", "pinar", "agricultura", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/talayuela.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/talayuela.png",
  },

  {
    id: "es_gal_acoruna_torre_hercules",
    nombre: "Torre de Hércules (A Coruña)",
    emoji: "🗼",
    lat: 43.3851,
    lng: -8.4064,
    nivel: 1,
    categorias: ["historia", "unesco", "faro", "costa", "cultura"],
    tipo: "faro",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 130,
    cooldownMin: 70,
    intereses: ["faro", "romanos", "unesco", "oceano", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torre-de-hercules.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_acoruna_ciudad_vieja",
        "nombre": "Ciudad Vieja de A Coruña",
        "tipo": "casco_historico",
        "nivel": 2,
        "lat": 43.3708,
        "lng": -8.396,
        "radio": 3500
      },
      {
        "id": "es_gal_acoruna_castillo_san_anton",
        "nombre": "Castillo de San Antón",
        "tipo": "castillo",
        "nivel": 2,
        "lat": 43.3716,
        "lng": -8.389,
        "radio": 2500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torre-de-hercules.png",
  },

  {
    id: "es_gal_fragas_eume_caaveiro",
    nombre: "Fragas do Eume y Monasterio de Caaveiro",
    emoji: "🌿",
    lat: 43.435,
    lng: -8.098,
    nivel: 1,
    categorias: ["naturaleza", "bosque", "monasterio"],
    tipo: "parque_natural",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 125,
    cooldownMin: 60,
    intereses: ["bosque_atlantico", "senderismo", "monasterio", "río"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fragas-do-eume-y-monasterio-de-caaveiro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_pontedeume_casco_historico",
        "nombre": "Pontedeume y puente medieval",
        "tipo": "casco_historico",
        "nivel": 2,
        "lat": 43.4069,
        "lng": -8.1804,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fragas-do-eume-y-monasterio-de-caaveiro.png",
  },

  {
    id: "es_gal_santiago_ciudad_historica",
    nombre: "Ciudad histórica de Santiago",
    emoji: "🏰",
    lat: 42.8815,
    lng: -8.5457,
    nivel: 1,
    categorias: ["historia", "unesco", "casco_historico", "cultura"],
    tipo: "casco_historico",
    radioActivacionMetros: 8000,

    perfil: "cultura",
    prioridad: 125,
    cooldownMin: 90,
    intereses: ["plazas", "soportales", "universidad", "camino"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-historica-de-santiago.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_santiago_catedral",
        "nombre": "Catedral de Santiago de Compostela",
        "tipo": "catedral",
        "nivel": 1,
        "lat": 42.8806,
        "lng": -8.5449,
        "radio": 7000
      },
      {
        "id": "es_gal_santiago_monte_gozo",
        "nombre": "Monte do Gozo",
        "tipo": "mirador",
        "nivel": 3,
        "lat": 42.8956,
        "lng": -8.518,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ciudad-historica-de-santiago.png",
  },

  {
    id: "es_gal_corrubedo_dunas",
    nombre: "Parque natural de Corrubedo",
    emoji: "🌿",
    lat: 42.5528,
    lng: -9.0312,
    nivel: 1,
    categorias: ["naturaleza", "dunas", "costa"],
    tipo: "parque_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["dunas", "lagunas", "atlántico", "aves"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-corrubedo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-corrubedo.png",
  },

  {
    id: "es_gal_betanzos_casco_historico",
    nombre: "Betanzos (conjunto histórico)",
    emoji: "🏰",
    lat: 43.28,
    lng: -8.214,
    nivel: 2,
    categorias: ["historia", "pueblo", "camino"],
    tipo: "casco_historico",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 110,
    cooldownMin: 45,
    intereses: ["galicia_medieval", "iglesias", "plazas", "rutas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/betanzos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/betanzos.png",
  },

  {
    id: "es_gal_ferrol_arsenal_modernista",
    nombre: "Ferrol: arsenal y arquitectura modernista",
    emoji: "⚓",
    lat: 43.4845,
    lng: -8.2369,
    nivel: 2,
    categorias: ["historia", "patrimonio_industrial", "cultura"],
    tipo: "puerto_historico",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 105,
    cooldownMin: 45,
    intereses: ["arsenal", "ilustracion", "modernismo", "ria"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ferrol-arsenal-y-arquitectura-modernista.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ferrol-arsenal-y-arquitectura-modernista.png",
  },

  {
    id: "es_gal_sobrado_monxes_monasterio",
    nombre: "Monasterio de Sobrado dos Monxes",
    emoji: "⛪",
    lat: 43.0393,
    lng: -8.0276,
    nivel: 2,
    categorias: ["historia", "monasterio", "camino"],
    tipo: "monasterio",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["cister", "camino_del_norte", "arquitectura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-sobrado-dos-monxes.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-sobrado-dos-monxes.png",
  },

  {
    id: "es_gal_padron_roseton_jacobeo",
    nombre: "Padrón y tradición jacobea",
    emoji: "🏰",
    lat: 42.7386,
    lng: -8.6607,
    nivel: 2,
    categorias: ["historia", "camino", "pueblo"],
    tipo: "casco_historico",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 100,
    cooldownMin: 40,
    intereses: ["camino_portugues", "tradicion_jacobea", "río_sar"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/padron-y-tradicion-jacobea.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/padron-y-tradicion-jacobea.png",
  },

  {
    id: "es_gal_noia_casco_historico",
    nombre: "Noia (villa histórica)",
    emoji: "🏰",
    lat: 42.7856,
    lng: -8.8879,
    nivel: 2,
    categorias: ["historia", "ría", "pueblo"],
    tipo: "casco_historico",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["ria_de_muros_noia", "gremios", "puerto"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/noia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/noia.png",
  },

  {
    id: "es_gal_ponte_maceira",
    nombre: "Ponte Maceira",
    emoji: "🌉",
    lat: 42.9045,
    lng: -8.6628,
    nivel: 2,
    categorias: ["historia", "puente", "pueblo"],
    tipo: "puente_historico",
    radioActivacionMetros: 2500,

    perfil: "historia",
    prioridad: 95,
    cooldownMin: 35,
    intereses: ["puente", "camino", "paisaje_fluvial"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponte-maceira.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponte-maceira.png",
  },

  {
    id: "es_gal_muros_casco_historico",
    nombre: "Muros (villa marinera)",
    emoji: "⚓",
    lat: 42.7764,
    lng: -9.0602,
    nivel: 2,
    categorias: ["costa", "casco_historico", "pueblo"],
    tipo: "villa_marinera",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["casco_historico", "ria", "piedra", "mar"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/muros.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/muros.png",
  },

  {
    id: "es_gal_bergondo_pazo_marinan",
    nombre: "Pazo de Mariñán (Bergondo)",
    emoji: "🏯",
    lat: 43.3175,
    lng: -8.2413,
    nivel: 3,
    categorias: ["historia", "pazo", "jardines"],
    tipo: "pazo",
    radioActivacionMetros: 2500,

    perfil: "cultura",
    prioridad: 85,
    cooldownMin: 35,
    intereses: ["pazo", "jardines", "rías_altas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pazo-de-marinan.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pazo-de-marinan.png",
  },

  {
    id: "es_gal_rianxo_paseo_mar",
    nombre: "Rianxo y la ría de Arousa norte",
    emoji: "⚓",
    lat: 42.6508,
    lng: -8.8185,
    nivel: 3,
    categorias: ["costa", "pueblo", "paisaje"],
    tipo: "villa_marinera",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 80,
    cooldownMin: 35,
    intereses: ["ria_de_arousa", "literatura", "marisqueo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rianxo-y-la-ria-de-arousa-norte.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/rianxo-y-la-ria-de-arousa-norte.png",
  },

  {
    id: "es_gal_carballo_balneario",
    nombre: "Carballo y su tradición termal",
    emoji: "♨️",
    lat: 43.213,
    lng: -8.691,
    nivel: 3,
    categorias: ["pueblo", "termalismo", "ruta"],
    tipo: "villa_termal",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 75,
    cooldownMin: 30,
    intereses: ["termalismo", "comarca_de_bergantinos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/carballo-y-su-tradicion-termal.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/carballo-y-su-tradicion-termal.png",
  },

  {
    id: "es_gal_sada_paseo_maritimo",
    nombre: "Sada y la bahía coruñesa",
    emoji: "⚓",
    lat: 43.3564,
    lng: -8.2566,
    nivel: 3,
    categorias: ["costa", "puerto", "pueblo"],
    tipo: "villa_marinera",
    radioActivacionMetros: 2500,

    perfil: "cultura",
    prioridad: 75,
    cooldownMin: 30,
    intereses: ["bahia", "navegacion", "paseo_maritimo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sada-y-la-bahia-corunesa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sada-y-la-bahia-corunesa.png",
  },

  {
    id: "es_gal_lugo_muralla_romana",
    nombre: "Muralla romana de Lugo (UNESCO)",
    emoji: "🧱",
    lat: 43.0121,
    lng: -7.556,
    nivel: 1,
    categorias: ["historia", "unesco", "romanos", "murallas"],
    tipo: "muralla",
    radioActivacionMetros: 7000,

    perfil: "historia",
    prioridad: 130,
    cooldownMin: 90,
    intereses: ["romanos", "unesco", "urbanismo", "muralla"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/muralla-romana-de-lugo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_lugo_catedral",
        "nombre": "Catedral de Santa María de Lugo",
        "tipo": "catedral",
        "nivel": 2,
        "lat": 43.0104,
        "lng": -7.5566,
        "radio": 3500
      },
      {
        "id": "es_gal_lugo_termas_mino",
        "nombre": "Termas romanas y Miño",
        "tipo": "sitio_termal",
        "nivel": 3,
        "lat": 43.0055,
        "lng": -7.553,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/muralla-romana-de-lugo.png",
  },

  {
    id: "es_gal_lugo_playa_catedrales",
    nombre: "Playa de las Catedrales",
    emoji: "🏖️",
    lat: 43.5546,
    lng: -7.1572,
    nivel: 1,
    categorias: ["naturaleza", "costa", "geologia"],
    tipo: "playa_monumental",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 125,
    cooldownMin: 60,
    intereses: ["acantilados", "mareas", "erosion", "cantabrico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/playa-de-las-catedrales.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/playa-de-las-catedrales.png",
  },

  {
    id: "es_gal_o_cebreiro",
    nombre: "O Cebreiro",
    emoji: "🏰",
    lat: 42.707,
    lng: -7.0447,
    nivel: 1,
    categorias: ["camino", "montaña", "pueblo"],
    tipo: "aldea_historica",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["camino_frances", "montaña", "pallozas", "leyendas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/o-cebreiro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_pedrafita_cebreiro",
        "nombre": "Pedrafita do Cebreiro",
        "tipo": "puerto_montana",
        "nivel": 3,
        "lat": 42.7268,
        "lng": -7.0211,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/o-cebreiro.png",
  },

  {
    id: "es_gal_lugo_mondonedo",
    nombre: "Mondoñedo y su catedral",
    emoji: "🏰",
    lat: 43.4282,
    lng: -7.363,
    nivel: 2,
    categorias: ["historia", "catedral", "pueblo"],
    tipo: "casco_historico",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 105,
    cooldownMin: 45,
    intereses: ["catedral", "camino_del_norte", "valle"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mondonedo-y-su-catedral.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mondonedo-y-su-catedral.png",
  },

  {
    id: "es_gal_monforte_lemos",
    nombre: "Monforte de Lemos",
    emoji: "🏰",
    lat: 42.5217,
    lng: -7.5141,
    nivel: 2,
    categorias: ["historia", "pueblo", "río"],
    tipo: "casco_historico",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["condado_de_lemos", "río_cabe", "monasterios"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monforte-de-lemos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monforte-de-lemos.png",
  },

  {
    id: "es_gal_samos_monasterio",
    nombre: "Monasterio de Samos",
    emoji: "⛪",
    lat: 42.7306,
    lng: -7.3256,
    nivel: 2,
    categorias: ["historia", "monasterio", "camino"],
    tipo: "monasterio",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["benedictinos", "camino", "arte_religioso"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-samos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-samos.png",
  },

  {
    id: "es_gal_portomarin",
    nombre: "Portomarín y el Miño",
    emoji: "🥾",
    lat: 42.8078,
    lng: -7.6158,
    nivel: 2,
    categorias: ["camino", "pueblo", "río"],
    tipo: "villa_camino",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["camino_frances", "embalse", "iglesia_fortaleza"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/portomarin-y-el-mino.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/portomarin-y-el-mino.png",
  },

  {
    id: "es_gal_sarria",
    nombre: "Sarria y el Camino Francés",
    emoji: "🥾",
    lat: 42.7815,
    lng: -7.414,
    nivel: 2,
    categorias: ["camino", "pueblo", "cultura"],
    tipo: "villa_camino",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["peregrinos", "camino_frances", "últimos_100_km"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sarria-y-el-camino-frances.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sarria-y-el-camino-frances.png",
  },

  {
    id: "es_gal_lugo_ribadeo",
    nombre: "Ribadeo y la ría del Eo",
    emoji: "⚓",
    lat: 43.5375,
    lng: -7.04,
    nivel: 2,
    categorias: ["costa", "pueblo", "ría"],
    tipo: "villa_marinera",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["ría_del_eo", "frontera", "puerto"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ribadeo-y-la-ria-del-eo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_ast_castropol_eo",
        "nombre": "Castropol y la ría del Eo",
        "tipo": "villa_marinera",
        "nivel": 2,
        "lat": 43.5288,
        "lng": -7.0295,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ribadeo-y-la-ria-del-eo.png",
  },

  {
    id: "es_gal_castro_viladonga",
    nombre: "Castro de Viladonga",
    emoji: "🏕️",
    lat: 43.0452,
    lng: -7.6695,
    nivel: 2,
    categorias: ["historia", "castro", "arqueologia"],
    tipo: "yacimiento_castrexo",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["castros", "galicia_prerromana", "museo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-de-viladonga.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-de-viladonga.png",
  },

  {
    id: "es_gal_lugo_vilalba",
    nombre: "Vilalba y la Torre dos Andrade",
    emoji: "🗼",
    lat: 43.2959,
    lng: -7.6813,
    nivel: 2,
    categorias: ["historia", "torre", "ruta"],
    tipo: "torre_homenaje",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["linajes", "terra_cha", "fortaleza"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vilalba-y-la-torre-dos-andrade.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vilalba-y-la-torre-dos-andrade.png",
  },

  {
    id: "es_gal_viveiro",
    nombre: "Viveiro (casco histórico)",
    emoji: "⚓",
    lat: 43.6629,
    lng: -7.5936,
    nivel: 2,
    categorias: ["costa", "casco_historico", "pueblo"],
    tipo: "villa_marinera",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["puertas_medievales", "ría", "semana_santa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/viveiro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/viveiro.png",
  },

  {
    id: "es_gal_belesar_canion_mino",
    nombre: "Belesar y cañón del Miño",
    emoji: "🔭",
    lat: 42.603,
    lng: -7.81,
    nivel: 3,
    categorias: ["paisaje", "río", "viñedos"],
    tipo: "mirador_fluvial",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["cañon_del_miño", "terrazas", "ribeira_sacra"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/belesar-y-canon-del-mino.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/belesar-y-canon-del-mino.png",
  },

  {
    id: "es_gal_foz",
    nombre: "Foz y la Mariña lucense",
    emoji: "⚓",
    lat: 43.5695,
    lng: -7.2576,
    nivel: 3,
    categorias: ["costa", "playas", "pueblo"],
    tipo: "villa_marinera",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 80,
    cooldownMin: 35,
    intereses: ["cantabrico", "playas", "mariña"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/foz-y-la-marina-lucense.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/foz-y-la-marina-lucense.png",
  },

  {
    id: "es_gal_san_paio_narla",
    nombre: "Pazo y torre de San Paio de Narla",
    emoji: "🗼",
    lat: 43.0333,
    lng: -7.8333,
    nivel: 3,
    categorias: ["historia", "pazo", "torre"],
    tipo: "pazo_torre",
    radioActivacionMetros: 3000,

    perfil: "historia",
    prioridad: 80,
    cooldownMin: 35,
    intereses: ["casa_fuerte", "museo", "galicia_rural"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pazo-y-torre-de-san-paio-de-narla.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pazo-y-torre-de-san-paio-de-narla.png",
  },

  {
    id: "es_gal_burela",
    nombre: "Burela, puerto pesquero",
    emoji: "🐟",
    lat: 43.659,
    lng: -7.3616,
    nivel: 3,
    categorias: ["costa", "puerto", "mar"],
    tipo: "puerto_pesquero",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 80,
    cooldownMin: 35,
    intereses: ["pesca", "cantabrico", "bonito"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/burela-puerto-pesquero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/burela-puerto-pesquero.png",
  },

  {
    id: "es_gal_baamonde_nudo_a6_a8",
    nombre: "Baamonde, nudo A-6 y A-8",
    emoji: "🛣️",
    lat: 43.1675,
    lng: -7.7562,
    nivel: 3,
    categorias: ["ruta", "nudo_viario", "camino"],
    tipo: "nudo_viario",
    radioActivacionMetros: 2500,

    perfil: "cultura",
    prioridad: 70,
    cooldownMin: 30,
    intereses: ["a_6", "a_8", "cruce_de_caminos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baamonde-nudo-a-6-y-a-8.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baamonde-nudo-a-6-y-a-8.png",
  },

  {
    id: "es_gal_xures_lobios",
    nombre: "Baixa Limia y Serra do Xurés",
    emoji: "🌿",
    lat: 41.9066,
    lng: -8.0788,
    nivel: 1,
    categorias: ["naturaleza", "montaña", "frontera"],
    tipo: "parque_natural",
    radioActivacionMetros: 9000,

    perfil: "naturaleza",
    prioridad: 125,
    cooldownMin: 70,
    intereses: ["senderismo", "frontera", "biodiversidad", "termalismo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baixa-limia-y-serra-do-xures.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baixa-limia-y-serra-do-xures.png",
  },

  {
    id: "es_gal_cabezoas_canion_sil",
    nombre: "Cañón del Sil (mirador de Cabezoás)",
    emoji: "🔭",
    lat: 42.385,
    lng: -7.615,
    nivel: 1,
    categorias: ["paisaje", "miradores", "río"],
    tipo: "mirador_fluvial",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["ribeira_sacra", "cañon", "sil", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/canon-del-sil.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_santo_estevo",
        "nombre": "Monasterio de Santo Estevo de Ribas de Sil",
        "tipo": "monasterio",
        "nivel": 2,
        "lat": 42.3862,
        "lng": -7.6732,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/canon-del-sil.png",
  },

  {
    id: "es_gal_monterrei_fortaleza",
    nombre: "Fortaleza de Monterrei",
    emoji: "🏰",
    lat: 41.9478,
    lng: -7.4483,
    nivel: 1,
    categorias: ["historia", "castillo", "fortificaciones"],
    tipo: "fortaleza",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["frontera", "castillo", "acropolis_gallega"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fortaleza-de-monterrei.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_verin",
        "nombre": "Verín, puerta del Támega",
        "tipo": "villa_fronteriza",
        "nivel": 2,
        "lat": 41.9406,
        "lng": -7.4378,
        "radio": 4000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fortaleza-de-monterrei.png",
  },

  {
    id: "es_gal_ourense_as_burgas",
    nombre: "As Burgas (Ourense)",
    emoji: "♨️",
    lat: 42.3365,
    lng: -7.8641,
    nivel: 1,
    categorias: ["termalismo", "ciudad", "historia"],
    tipo: "fuente_termal",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["aguas_termales", "romanizacion", "ciudad"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/as-burgas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_ourense_catedral",
        "nombre": "Catedral de Ourense",
        "tipo": "catedral",
        "nivel": 2,
        "lat": 42.3363,
        "lng": -7.8635,
        "radio": 3500
      },
      {
        "id": "es_gal_ourense_puente_romano",
        "nombre": "Puente romano y Miño en Ourense",
        "tipo": "puente_historico",
        "nivel": 2,
        "lat": 42.339,
        "lng": -7.8668,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/as-burgas.png",
  },

  {
    id: "es_gal_ribadavia",
    nombre: "Ribadavia y la capital del Ribeiro",
    emoji: "🏰",
    lat: 42.2879,
    lng: -8.1432,
    nivel: 2,
    categorias: ["historia", "vino", "juderia"],
    tipo: "casco_historico",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 105,
    cooldownMin: 45,
    intereses: ["ribeiro", "juderia", "castillo", "viñedos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ribadavia-y-la-capital-del-ribeiro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_arnoia_termal_vino",
        "nombre": "Arnoia, termalismo y viñedo",
        "tipo": "villa_termal",
        "nivel": 3,
        "lat": 42.2508,
        "lng": -8.1334,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ribadavia-y-la-capital-del-ribeiro.png",
  },

  {
    id: "es_gal_aquis_querquennis",
    nombre: "Aquis Querquennis",
    emoji: "⚔️",
    lat: 42.0351,
    lng: -7.9588,
    nivel: 2,
    categorias: ["historia", "romanos", "arqueologia"],
    tipo: "campamento_romano",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 105,
    cooldownMin: 45,
    intereses: ["via_nova", "campamento_romano", "embalse"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aquis-querquennis.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aquis-querquennis.png",
  },

  {
    id: "es_gal_celanova_monasterio",
    nombre: "Monasterio de San Salvador de Celanova",
    emoji: "⛪",
    lat: 42.1535,
    lng: -7.9587,
    nivel: 2,
    categorias: ["historia", "monasterio", "arte"],
    tipo: "monasterio",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["mozárabe", "arte_religioso", "san_miguel"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-san-salvador-de-celanova.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-san-salvador-de-celanova.png",
  },

  {
    id: "es_gal_allariz",
    nombre: "Allariz (conjunto histórico)",
    emoji: "🏰",
    lat: 42.1907,
    lng: -7.8016,
    nivel: 2,
    categorias: ["historia", "pueblo", "río"],
    tipo: "casco_historico",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 100,
    cooldownMin: 45,
    intereses: ["arnoya", "villas_medievales", "recuperacion_urbana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/allariz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/allariz.png",
  },

  {
    id: "es_gal_castro_caldelas",
    nombre: "Castro Caldelas",
    emoji: "🏰",
    lat: 42.3731,
    lng: -7.4118,
    nivel: 2,
    categorias: ["historia", "pueblo", "castillo"],
    tipo: "casco_historico",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["ribeira_sacra", "montaña", "fortaleza"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-caldelas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castro-caldelas.png",
  },

  {
    id: "es_gal_carballino_veracruz",
    nombre: "Templo de la Veracruz (O Carballiño)",
    emoji: "🏛️",
    lat: 42.4304,
    lng: -8.0761,
    nivel: 2,
    categorias: ["arquitectura", "pueblo", "cultura"],
    tipo: "templo",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["modernidad", "piedra", "ribeiro"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/templo-de-la-veracruz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/templo-de-la-veracruz.png",
  },

  {
    id: "es_gal_o_barco_valdeorras",
    nombre: "O Barco de Valdeorras",
    emoji: "🌄",
    lat: 42.4156,
    lng: -6.989,
    nivel: 2,
    categorias: ["pueblo", "vino", "ruta"],
    tipo: "villa_valle",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["valdeorras", "pizarra", "sil"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/o-barco-de-valdeorras.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/o-barco-de-valdeorras.png",
  },

  {
    id: "es_gal_santuario_ermidas",
    nombre: "Santuario de As Ermidas",
    emoji: "🕍",
    lat: 42.3762,
    lng: -7.0867,
    nivel: 2,
    categorias: ["historia", "santuario", "paisaje"],
    tipo: "santuario",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["cañones", "barroco", "río_bibei"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santuario-de-as-ermidas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_a_rua_valdeorras",
        "nombre": "A Rúa y los viñedos de Valdeorras",
        "tipo": "villa_vinicola",
        "nivel": 3,
        "lat": 42.3915,
        "lng": -7.1202,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santuario-de-as-ermidas.png",
  },

  {
    id: "es_gal_manzaneda",
    nombre: "Manzaneda y alta montaña ourensana",
    emoji: "⛰️",
    lat: 42.3097,
    lng: -7.2358,
    nivel: 3,
    categorias: ["montaña", "paisaje", "naturaleza"],
    tipo: "sierra",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 85,
    cooldownMin: 40,
    intereses: ["alta_montaña", "invierno", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/manzaneda-y-alta-montana-ourensana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/manzaneda-y-alta-montana-ourensana.png",
  },

  {
    id: "es_gal_xinzo_limia",
    nombre: "Xinzo de Limia y la llanura de A Limia",
    emoji: "🌾",
    lat: 42.0634,
    lng: -7.7246,
    nivel: 3,
    categorias: ["paisaje", "pueblo", "ruta"],
    tipo: "villa_llanura",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 75,
    cooldownMin: 30,
    intereses: ["a_limia", "llanura", "carnaval"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/xinzo-de-limia-y-la-llanura-de-a-limia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/xinzo-de-limia-y-la-llanura-de-a-limia.png",
  },

  {
    id: "es_gal_pontevedra_vigo_casco_vello",
    nombre: "Casco Vello de Vigo",
    emoji: "🏰",
    lat: 42.2393,
    lng: -8.7266,
    nivel: 1,
    categorias: ["historia", "ciudad", "puerto"],
    tipo: "casco_historico",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["ría_de_vigo", "puerto", "historia_urbana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/casco-vello-de-vigo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_vigo_monte_castro",
        "nombre": "Monte do Castro (Vigo)",
        "tipo": "mirador_urbano",
        "nivel": 2,
        "lat": 42.2317,
        "lng": -8.7217,
        "radio": 4000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/casco-vello-de-vigo.png",
  },

  {
    id: "es_gal_pontevedra_centro_historico",
    nombre: "Pontevedra (centro histórico)",
    emoji: "🏰",
    lat: 42.431,
    lng: -8.6443,
    nivel: 1,
    categorias: ["historia", "casco_historico", "cultura"],
    tipo: "casco_historico",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["plazas", "peatonalizacion", "casco_historico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pontevedra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_combarro",
        "nombre": "Combarro y sus hórreos",
        "tipo": "villa_marinera",
        "nivel": 1,
        "lat": 42.4338,
        "lng": -8.7078,
        "radio": 5000
      },
      {
        "id": "es_gal_pontevedra_basilica_santa_maria",
        "nombre": "Basílica de Santa María la Mayor",
        "tipo": "basilica",
        "nivel": 2,
        "lat": 42.4298,
        "lng": -8.6473,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pontevedra.png",
  },

  {
    id: "es_gal_tui_catedral",
    nombre: "Tui y su catedral fortaleza",
    emoji: "⛪",
    lat: 42.046,
    lng: -8.6447,
    nivel: 1,
    categorias: ["historia", "catedral", "frontera"],
    tipo: "catedral",
    radioActivacionMetros: 5500,

    perfil: "historia",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["camino_portugues", "miño", "frontera_portuguesa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tui-y-su-catedral-fortaleza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_monte_aloia",
        "nombre": "Monte Aloia",
        "tipo": "parque_natural",
        "nivel": 2,
        "lat": 42.08,
        "lng": -8.688,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tui-y-su-catedral-fortaleza.png",
  },

  {
    id: "es_gal_baiona_monterreal",
    nombre: "Baiona y el recinto de Monterreal",
    emoji: "🏰",
    lat: 42.1195,
    lng: -8.8506,
    nivel: 1,
    categorias: ["costa", "historia", "fortificaciones"],
    tipo: "fortaleza_costera",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 115,
    cooldownMin: 50,
    intereses: ["carabela_pinta", "murallas", "atlántico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baiona-y-el-recinto-de-monterreal.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_nigran_monteferro",
        "nombre": "Monteferro (Nigrán)",
        "tipo": "mirador_costero",
        "nivel": 3,
        "lat": 42.141,
        "lng": -8.8245,
        "radio": 3500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/baiona-y-el-recinto-de-monterreal.png",
  },

  {
    id: "es_gal_soutomaior_castillo",
    nombre: "Castillo de Soutomaior",
    emoji: "🏰",
    lat: 42.3347,
    lng: -8.5708,
    nivel: 1,
    categorias: ["historia", "castillo", "jardines"],
    tipo: "castillo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 115,
    cooldownMin: 50,
    intereses: ["fortaleza", "jardines", "rías_baixas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-soutomaior.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-soutomaior.png",
  },

  {
    id: "es_gal_cambados",
    nombre: "Cambados, capital del albariño",
    emoji: "🍇",
    lat: 42.5138,
    lng: -8.8138,
    nivel: 1,
    categorias: ["vino", "casco_historico", "cultura"],
    tipo: "villa_vinicola",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 45,
    intereses: ["albariño", "ría_de_arousa", "pazos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cambados-capital-del-albarino.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_gal_o_grove_toxa",
        "nombre": "O Grove y A Toxa",
        "tipo": "villa_costera",
        "nivel": 2,
        "lat": 42.4945,
        "lng": -8.8643,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cambados-capital-del-albarino.png",
  },

  {
    id: "es_gal_illa_arousa",
    nombre: "Illa de Arousa",
    emoji: "🏝️",
    lat: 42.5634,
    lng: -8.8735,
    nivel: 2,
    categorias: ["costa", "isla", "naturaleza"],
    tipo: "isla",
    radioActivacionMetros: 4500,

    perfil: "naturaleza",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["arenales", "ría_de_arousa", "parque_natural"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/illa-de-arousa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/illa-de-arousa.png",
  },

  {
    id: "es_gal_carboeiro_monasterio",
    nombre: "Monasterio de Carboeiro (Silleda)",
    emoji: "⛪",
    lat: 42.7008,
    lng: -8.2537,
    nivel: 2,
    categorias: ["historia", "monasterio", "bosque"],
    tipo: "monasterio",
    radioActivacionMetros: 4000,

    perfil: "historia",
    prioridad: 90,
    cooldownMin: 40,
    intereses: ["romanico", "deza", "valle"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-carboeiro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/monasterio-de-carboeiro.png",
  },

  {
    id: "es_gal_ponte_sampaio",
    nombre: "Ponte Sampaio",
    emoji: "🌉",
    lat: 42.3412,
    lng: -8.6457,
    nivel: 2,
    categorias: ["historia", "puente", "río"],
    tipo: "puente_historico",
    radioActivacionMetros: 3000,

    perfil: "historia",
    prioridad: 90,
    cooldownMin: 35,
    intereses: ["guerra_de_la_independencia", "verdugo", "puente"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponte-sampaio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponte-sampaio.png",
  },

  {
    id: "es_gal_redondela_viaductos",
    nombre: "Redondela y sus viaductos",
    emoji: "🔭",
    lat: 42.2844,
    lng: -8.6077,
    nivel: 2,
    categorias: ["ingenieria", "ría", "pueblo"],
    tipo: "mirador_ferroviario",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 85,
    cooldownMin: 35,
    intereses: ["viaductos", "ría_de_vigo", "camino_portugues"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/redondela-y-sus-viaductos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/redondela-y-sus-viaductos.png",
  },

  {
    id: "es_gal_lalin",
    nombre: "Lalín, corazón de Galicia",
    emoji: "🛣️",
    lat: 42.6619,
    lng: -8.1114,
    nivel: 2,
    categorias: ["ruta", "interior", "pueblo"],
    tipo: "nudo_interior",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 85,
    cooldownMin: 35,
    intereses: ["ap_53", "cocido", "deza"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lalin-corazon-de-galicia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lalin-corazon-de-galicia.png",
  },

  {
    id: "es_gal_o_porrino",
    nombre: "O Porriño y el granito",
    emoji: "🏭",
    lat: 42.1611,
    lng: -8.6192,
    nivel: 3,
    categorias: ["ruta", "arquitectura", "pueblo"],
    tipo: "villa_industrial",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 80,
    cooldownMin: 35,
    intereses: ["granito", "antonio_palacios", "nudo_a52"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/o-porrino-y-el-granito.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/o-porrino-y-el-granito.png",
  },

  {
    id: "es_gal_ponteareas",
    nombre: "Ponteareas y el valle del Tea",
    emoji: "🌄",
    lat: 42.1766,
    lng: -8.5039,
    nivel: 3,
    categorias: ["pueblo", "río", "ruta"],
    tipo: "villa_valle",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 75,
    cooldownMin: 30,
    intereses: ["tea", "interior_pontevedres", "camino"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponteareas-y-el-valle-del-tea.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ponteareas-y-el-valle-del-tea.png",
  },

  {
    id: "es_gal_sanxenxo",
    nombre: "Sanxenxo y la ría de Pontevedra",
    emoji: "🐚",
    lat: 42.4,
    lng: -8.806,
    nivel: 3,
    categorias: ["costa", "playas", "ruta"],
    tipo: "villa_costera",
    radioActivacionMetros: 3000,

    perfil: "cultura",
    prioridad: 75,
    cooldownMin: 30,
    intereses: ["playas", "verano", "ría"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sanxenxo-y-la-ria-de-pontevedra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sanxenxo-y-la-ria-de-pontevedra.png",
  },

  // ✅ CAPITAL
  {
    id: "es_rioja_logrono",
    nombre: "Logroño, gran puerta riojana de la AP-68 y la A-12",
    emoji: "🏛️",
    lat: 42.4627,
    lng: -2.4449,
    nivel: 1,
    categorias: ["capital", "cultura", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 80,
    intereses: ["ap68", "a12", "ebro", "casco_historico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/logrono-gran-puerta-riojana-de-la-ap-68-y-la-a-12.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_rioja_calle_laurel",
        "nombre": "Calle Laurel",
        "tipo": "calle_historica",
        "nivel": 1,
        "lat": 42.4661,
        "lng": -2.4486,
        "radio": 2000
      },
      {
        "id": "es_rioja_fuenmayor",
        "nombre": "Fuenmayor",
        "tipo": "villa_vino",
        "nivel": 2,
        "lat": 42.4662,
        "lng": -2.5615,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/logrono-gran-puerta-riojana-de-la-ap-68-y-la-a-12.png",
  },

  {
    id: "es_rioja_san_millan",
    nombre: "San Millán de la Cogolla",
    emoji: "⛪",
    lat: 42.328,
    lng: -2.861,
    nivel: 1,
    categorias: ["unesco", "monasterio", "lengua"],
    tipo: "monasterio",
    radioActivacionMetros: 6500,

    perfil: "historia",
    prioridad: 136,
    cooldownMin: 80,
    intereses: ["castellano", "emilianenses", "patrimonio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-millan-de-la-cogolla.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-millan-de-la-cogolla.png",
  },

  {
    id: "es_rioja_haro",
    nombre: "Haro, capital del vino riojano",
    emoji: "🍷",
    lat: 42.577,
    lng: -2.8465,
    nivel: 1,
    categorias: ["vino", "ciudad", "cultura"],
    tipo: "ciudad_vino",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 134,
    cooldownMin: 75,
    intereses: ["ap68", "bodegas", "ebro"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/haro-capital-del-vino-riojano.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_rioja_barrio_estacion",
        "nombre": "Barrio de la Estación de Haro",
        "tipo": "barrio_bodegas",
        "nivel": 1,
        "lat": 42.5802,
        "lng": -2.8489,
        "radio": 3000
      },
      {
        "id": "es_pv_alava_labastida",
        "nombre": "Labastida",
        "tipo": "villa_vino",
        "nivel": 2,
        "lat": 42.5894,
        "lng": -2.793,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/haro-capital-del-vino-riojano.png",
  },

  {
    id: "es_rioja_santo_domingo",
    nombre: "Santo Domingo de la Calzada",
    emoji: "🏰",
    lat: 42.441,
    lng: -2.9537,
    nivel: 1,
    categorias: ["camino", "historia", "ciudad"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 130,
    cooldownMin: 70,
    intereses: ["a12", "camino_de_santiago", "catedral", "milagro_del_gallo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santo-domingo-de-la-calzada.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santo-domingo-de-la-calzada.png",
  },

  {
    id: "es_rioja_calahorra",
    nombre: "Calahorra",
    emoji: "🏰",
    lat: 42.3064,
    lng: -1.9651,
    nivel: 1,
    categorias: ["ciudad", "historia", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 70,
    intereses: ["ap68", "ebro", "romano", "catedral"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calahorra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calahorra.png",
  },

  {
    id: "es_rioja_alfaro",
    nombre: "Alfaro",
    emoji: "🏙️",
    lat: 42.1791,
    lng: -1.749,
    nivel: 1,
    categorias: ["naturaleza", "ciudad", "aves"],
    tipo: "ciudad",
    radioActivacionMetros: 6000,

    perfil: "naturaleza",
    prioridad: 124,
    cooldownMin: 70,
    intereses: ["cigueñas", "ebro", "ap68", "ciguenas_de_san_miguel"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alfaro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/alfaro.png",
  },

  {
    id: "es_rioja_najera",
    nombre: "Nájera",
    emoji: "🏰",
    lat: 42.4161,
    lng: -2.7347,
    nivel: 1,
    categorias: ["historia", "pueblo", "camino"],
    tipo: "villa_historica",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 123,
    cooldownMin: 65,
    intereses: ["a12", "reino_de_najera", "camino_de_santiago"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/najera.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_rioja_monasterio_najera",
        "nombre": "Monasterio de Santa María la Real de Nájera",
        "tipo": "monasterio",
        "nivel": 1,
        "lat": 42.418,
        "lng": -2.7349,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/najera.png",
  },

  {
    id: "es_rioja_clavijo",
    nombre: "Castillo de Clavijo",
    emoji: "🏰",
    lat: 42.3497,
    lng: -2.4277,
    nivel: 1,
    categorias: ["castillo", "historia", "mirador"],
    tipo: "castillo",
    radioActivacionMetros: 5000,

    perfil: "historia",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["leyenda", "sierra", "panoramica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-clavijo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_rioja_albelda",
        "nombre": "Albelda de Iregua",
        "tipo": "villa",
        "nivel": 2,
        "lat": 42.3584,
        "lng": -2.4737,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-clavijo.png",
  },

  {
    id: "es_rioja_san_vicente",
    nombre: "San Vicente de la Sonsierra",
    emoji: "🏰",
    lat: 42.5627,
    lng: -2.7598,
    nivel: 2,
    categorias: ["vino", "castillo", "pueblo"],
    tipo: "villa_historica",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 113,
    cooldownMin: 55,
    intereses: ["rioja_alta", "fortaleza", "viñedo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-vicente-de-la-sonsierra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_rioja_briones",
        "nombre": "Briones",
        "tipo": "villa_historica",
        "nivel": 2,
        "lat": 42.5445,
        "lng": -2.7851,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-vicente-de-la-sonsierra.png",
  },

  {
    id: "es_rioja_ezcaray",
    nombre: "Ezcaray",
    emoji: "⛰️",
    lat: 42.3269,
    lng: -3.012,
    nivel: 2,
    categorias: ["montaña", "pueblo", "naturaleza"],
    tipo: "villa_montana",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 113,
    cooldownMin: 55,
    intereses: ["ojacastro", "sierras", "gastronomia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ezcaray.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ezcaray.png",
  },

  {
    id: "es_rioja_arnedillo",
    nombre: "Arnedillo",
    emoji: "♨️",
    lat: 42.2098,
    lng: -2.235,
    nivel: 2,
    categorias: ["naturaleza", "termas", "pueblo"],
    tipo: "villa_termal",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 111,
    cooldownMin: 55,
    intereses: ["termas", "valle_del_cidacos", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arnedillo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arnedillo.png",
  },

  {
    id: "es_rioja_navarrete",
    nombre: "Navarrete",
    emoji: "🏰",
    lat: 42.4304,
    lng: -2.5649,
    nivel: 2,
    categorias: ["pueblo", "camino", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 50,
    intereses: ["a12", "camino_de_santiago", "ceramica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/navarrete.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/navarrete.png",
  },

  {
    id: "es_rioja_arnedo",
    nombre: "Arnedo",
    emoji: "🏙️",
    lat: 42.2278,
    lng: -2.1,
    nivel: 2,
    categorias: ["ciudad", "ruta", "industria"],
    tipo: "ciudad",
    radioActivacionMetros: 5000,

    perfil: "datos",
    prioridad: 108,
    cooldownMin: 50,
    intereses: ["calzado", "autovia_del_camino", "cidacos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arnedo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arnedo.png",
  },

  // ✅ CAPITAL
  {
    id: "es_navarra_pamplona",
    nombre: "Pamplona / Iruña, gran nudo de la AP-15",
    emoji: "🏛️",
    lat: 42.8125,
    lng: -1.6458,
    nivel: 1,
    categorias: ["capital", "historia", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 139,
    cooldownMin: 80,
    intereses: ["ap15", "a15", "murallas", "sanfermines"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pamplona-iruna-gran-nudo-de-la-ap-15.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_navarra_ciudadela",
        "nombre": "Ciudadela de Pamplona",
        "tipo": "fortaleza",
        "nivel": 1,
        "lat": 42.812,
        "lng": -1.6534,
        "radio": 2500
      },
      {
        "id": "es_navarra_plaza_castillo",
        "nombre": "Plaza del Castillo",
        "tipo": "plaza_mayor",
        "nivel": 2,
        "lat": 42.8166,
        "lng": -1.6442,
        "radio": 1800
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/pamplona-iruna-gran-nudo-de-la-ap-15.png",
  },

  {
    id: "es_navarra_bardenas",
    nombre: "Parque Natural de las Bardenas Reales",
    emoji: "🌿",
    lat: 42.2707,
    lng: -1.5344,
    nivel: 1,
    categorias: ["naturaleza", "desierto", "paisaje"],
    tipo: "parque_natural",
    radioActivacionMetros: 8000,

    perfil: "naturaleza",
    prioridad: 134,
    cooldownMin: 85,
    intereses: ["badlands", "paisaje", "sur_de_navarra", "n121"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-las-bardenas-reales.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-las-bardenas-reales.png",
  },

  {
    id: "es_navarra_olite",
    nombre: "Olite",
    emoji: "🏰",
    lat: 42.4797,
    lng: -1.6519,
    nivel: 1,
    categorias: ["historia", "pueblo", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 132,
    cooldownMin: 75,
    intereses: ["ap15", "navarra_media", "vino"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/olite.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_navarra_palacio_olite",
        "nombre": "Palacio Real de Olite",
        "tipo": "palacio_real",
        "nivel": 1,
        "lat": 42.4814,
        "lng": -1.6512,
        "radio": 2800
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/olite.png",
  },

  {
    id: "es_navarra_tudela",
    nombre: "Tudela",
    emoji: "🏰",
    lat: 42.0639,
    lng: -1.6057,
    nivel: 1,
    categorias: ["ciudad", "historia", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 129,
    cooldownMin: 75,
    intereses: ["ap68", "ebro", "huerta", "mudejar"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tudela.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tudela.png",
  },

  {
    id: "es_navarra_roncesvalles",
    nombre: "Roncesvalles",
    emoji: "🥾",
    lat: 43.0092,
    lng: -1.3192,
    nivel: 1,
    categorias: ["montaña", "camino", "historia"],
    tipo: "puerto_historico",
    radioActivacionMetros: 6000,

    perfil: "historia",
    prioridad: 128,
    cooldownMin: 75,
    intereses: ["pirineo", "camino_de_santiago", "a21"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/roncesvalles.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/roncesvalles.png",
  },

  {
    id: "es_navarra_puente_reina",
    nombre: "Puente la Reina / Gares",
    emoji: "🏰",
    lat: 42.672,
    lng: -1.8135,
    nivel: 1,
    categorias: ["camino", "puente", "pueblo"],
    tipo: "villa_historica",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 128,
    cooldownMin: 70,
    intereses: ["a12", "camino_de_santiago", "románico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-la-reina-gares.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-la-reina-gares.png",
  },

  {
    id: "es_navarra_estella",
    nombre: "Estella-Lizarra",
    emoji: "🏰",
    lat: 42.6719,
    lng: -2.0319,
    nivel: 1,
    categorias: ["historia", "ciudad", "camino"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 126,
    cooldownMin: 70,
    intereses: ["a12", "camino_de_santiago", "románico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/estella-lizarra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_navarra_irache",
        "nombre": "Monasterio de Irache",
        "tipo": "monasterio",
        "nivel": 1,
        "lat": 42.6611,
        "lng": -2.0382,
        "radio": 3000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/estella-lizarra.png",
  },

  {
    id: "es_navarra_javier",
    nombre: "Castillo de Javier",
    emoji: "🏰",
    lat: 42.5903,
    lng: -1.2089,
    nivel: 1,
    categorias: ["castillo", "historia", "santuario"],
    tipo: "castillo",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 124,
    cooldownMin: 65,
    intereses: ["san_francisco_javier", "a21", "fortaleza"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-javier.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/castillo-de-javier.png",
  },

  {
    id: "es_navarra_ujue",
    nombre: "Ujué, gran balcón de la Navarra media",
    emoji: "🏰",
    lat: 42.5076,
    lng: -1.4992,
    nivel: 1,
    categorias: ["mirador", "pueblo", "santuario"],
    tipo: "villa_historica",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 121,
    cooldownMin: 60,
    intereses: ["cerro", "románico", "panoramica"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ujue-gran-balcon-de-la-navarra-media.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ujue-gran-balcon-de-la-navarra-media.png",
  },

  {
    id: "es_navarra_sanguesa",
    nombre: "Sangüesa / Zangoza",
    emoji: "🏰",
    lat: 42.5755,
    lng: -1.282,
    nivel: 2,
    categorias: ["ciudad", "camino", "historia"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 114,
    cooldownMin: 55,
    intereses: ["a21", "aragon", "camino_de_santiago"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sanguesa-zangoza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/sanguesa-zangoza.png",
  },

  {
    id: "es_navarra_irurtzun",
    nombre: "Irurtzun, cruce natural entre la A-15 y la A-10",
    emoji: "🛣️",
    lat: 42.9191,
    lng: -1.828,
    nivel: 2,
    categorias: ["ruta", "montaña", "pueblo"],
    tipo: "nudo_ruta",
    radioActivacionMetros: 5000,

    perfil: "datos",
    prioridad: 112,
    cooldownMin: 55,
    intereses: ["a15", "a10", "sakana", "paso"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/irurtzun-cruce-natural-entre-la-a-15-y-la-a-10.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/irurtzun-cruce-natural-entre-la-a-15-y-la-a-10.png",
  },

  {
    id: "es_navarra_leitza",
    nombre: "Leitza",
    emoji: "⛰️",
    lat: 43.0785,
    lng: -1.914,
    nivel: 2,
    categorias: ["montaña", "pueblo", "bosque"],
    tipo: "villa_montana",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 111,
    cooldownMin: 55,
    intereses: ["a15", "leitzaran", "atlántico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/leitza.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/leitza.png",
  },

  {
    id: "es_navarra_altsasu",
    nombre: "Altsasu / Alsasua, gran puerta occidental navarra",
    emoji: "🏙️",
    lat: 42.8995,
    lng: -2.1688,
    nivel: 2,
    categorias: ["ruta", "montaña", "ciudad"],
    tipo: "ciudad",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 110,
    cooldownMin: 55,
    intereses: ["a1", "sakana", "paso_hacia_pais_vasco"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/altsasu-alsasua-gran-puerta-occidental-navarra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/altsasu-alsasua-gran-puerta-occidental-navarra.png",
  },

  {
    id: "es_navarra_fitero",
    nombre: "Fitero",
    emoji: "♨️",
    lat: 42.0569,
    lng: -1.8564,
    nivel: 2,
    categorias: ["monasterio", "termas", "pueblo"],
    tipo: "villa_termal",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 109,
    cooldownMin: 55,
    intereses: ["ap68", "balneario", "monasterio"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fitero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/fitero.png",
  },

  {
    id: "es_navarra_corella",
    nombre: "Corella",
    emoji: "🏰",
    lat: 42.1154,
    lng: -1.7865,
    nivel: 2,
    categorias: ["barroco", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 107,
    cooldownMin: 50,
    intereses: ["ap68", "sur_de_navarra", "palacios"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/corella.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/corella.png",
  },

  {
    id: "es_navarra_tafalla",
    nombre: "Tafalla",
    emoji: "🏙️",
    lat: 42.5264,
    lng: -1.6745,
    nivel: 2,
    categorias: ["ciudad", "ruta", "vino"],
    tipo: "ciudad",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 107,
    cooldownMin: 50,
    intereses: ["ap15", "navarra_media", "paso"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tafalla.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tafalla.png",
  },

  // ✅ CAPITAL
  {
    id: "es_pv_bizkaia_bilbao",
    nombre: "Bilbao, gran corazón de la ría",
    emoji: "🏛️",
    lat: 43.263,
    lng: -2.935,
    nivel: 1,
    categorias: ["ciudad", "cultura", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 11000,

    perfil: "cultura",
    prioridad: 140,
    cooldownMin: 85,
    intereses: ["a8", "ap68", "ría", "transformacion_urbana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bilbao-gran-corazon-de-la-ria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_bizkaia_guggenheim",
        "nombre": "Museo Guggenheim Bilbao",
        "tipo": "museo",
        "nivel": 1,
        "lat": 43.2686,
        "lng": -2.934,
        "radio": 2500
      },
      {
        "id": "es_pv_bizkaia_puente_colgante",
        "nombre": "Puente Colgante de Portugalete (UNESCO)",
        "tipo": "monumento_ingenieria",
        "nivel": 1,
        "lat": 43.323,
        "lng": -3.0169,
        "radio": 3500
      },
      {
        "id": "es_pv_bizkaia_casco_viejo",
        "nombre": "Casco Viejo de Bilbao",
        "tipo": "casco_historico",
        "nivel": 1,
        "lat": 43.2589,
        "lng": -2.9237,
        "radio": 2800
      },
      {
        "id": "es_pv_bizkaia_getxo",
        "nombre": "Getxo y el Abra",
        "tipo": "municipio_costero",
        "nivel": 2,
        "lat": 43.3441,
        "lng": -3.0089,
        "radio": 5000
      },
      {
        "id": "es_pv_bizkaia_barakaldo",
        "nombre": "Barakaldo y la ría industrial",
        "tipo": "ciudad",
        "nivel": 2,
        "lat": 43.2972,
        "lng": -2.9886,
        "radio": 5000
      },
      {
        "id": "es_pv_bizkaia_santurtzi",
        "nombre": "Santurtzi, puerto y salida al Cantábrico",
        "tipo": "puerto",
        "nivel": 2,
        "lat": 43.328,
        "lng": -3.031,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bilbao-gran-corazon-de-la-ria.png",
  },

  {
    id: "es_pv_bizkaia_gaztelugatxe",
    nombre: "San Juan de Gaztelugatxe",
    emoji: "🔭",
    lat: 43.4465,
    lng: -2.7846,
    nivel: 1,
    categorias: ["mar", "ermita", "paisaje"],
    tipo: "mirador_costero",
    radioActivacionMetros: 5500,

    perfil: "naturaleza",
    prioridad: 138,
    cooldownMin: 85,
    intereses: ["islote", "escalinata", "costa", "mirador"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-juan-de-gaztelugatxe.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/san-juan-de-gaztelugatxe.png",
  },

  {
    id: "es_pv_bizkaia_gernika",
    nombre: "Gernika-Lumo",
    emoji: "🏰",
    lat: 43.3167,
    lng: -2.6781,
    nivel: 1,
    categorias: ["historia", "memoria", "villa"],
    tipo: "villa_historica",
    radioActivacionMetros: 5500,

    perfil: "historia",
    prioridad: 134,
    cooldownMin: 80,
    intereses: ["bombardeo", "libertades_vascas", "urdaibai", "a8"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/gernika-lumo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_bizkaia_casa_juntas",
        "nombre": "Casa de Juntas y Árbol de Gernika",
        "tipo": "monumento_historico",
        "nivel": 1,
        "lat": 43.3152,
        "lng": -2.6774,
        "radio": 2500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/gernika-lumo.png",
  },

  {
    id: "es_pv_bizkaia_urkiola",
    nombre: "Parque Natural de Urkiola",
    emoji: "🌿",
    lat: 43.0917,
    lng: -2.6461,
    nivel: 1,
    categorias: ["naturaleza", "montaña", "parque_natural"],
    tipo: "parque_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 125,
    cooldownMin: 75,
    intereses: ["senderismo", "caliza", "duranguesado", "ap8"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-urkiola.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-urkiola.png",
  },

  {
    id: "es_pv_bizkaia_durango",
    nombre: "Durango",
    emoji: "🏰",
    lat: 43.1714,
    lng: -2.6326,
    nivel: 1,
    categorias: ["villa", "historia", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 120,
    cooldownMin: 60,
    intereses: ["ap8", "duranguesado", "casco_historico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/durango.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/durango.png",
  },

  {
    id: "es_pv_bizkaia_balmaseda",
    nombre: "Balmaseda",
    emoji: "🏰",
    lat: 43.1925,
    lng: -3.1954,
    nivel: 2,
    categorias: ["villa", "historia", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 114,
    cooldownMin: 55,
    intereses: ["encartaciones", "ap68", "camino", "puente_viejo"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/balmaseda.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/balmaseda.png",
  },

  {
    id: "es_pv_bizkaia_bermeo",
    nombre: "Bermeo",
    emoji: "🐚",
    lat: 43.4208,
    lng: -2.7215,
    nivel: 2,
    categorias: ["mar", "pueblo", "puerto"],
    tipo: "villa_costera",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 111,
    cooldownMin: 55,
    intereses: ["costa", "pesca", "urdaibai"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bermeo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_bizkaia_mundaka",
        "nombre": "Mundaka y su famosa ola",
        "tipo": "villa_costera",
        "nivel": 2,
        "lat": 43.4073,
        "lng": -2.6984,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bermeo.png",
  },

  {
    id: "es_pv_bizkaia_lekeitio",
    nombre: "Lekeitio",
    emoji: "🐚",
    lat: 43.3644,
    lng: -2.503,
    nivel: 2,
    categorias: ["mar", "costa", "pueblo"],
    tipo: "villa_costera",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 109,
    cooldownMin: 55,
    intereses: ["cantabrico", "puerto", "islote"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lekeitio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lekeitio.png",
  },

  {
    id: "es_pv_bizkaia_elorrio",
    nombre: "Elorrio",
    emoji: "🏰",
    lat: 43.1303,
    lng: -2.5423,
    nivel: 2,
    categorias: ["villa", "palacios", "historia"],
    tipo: "villa_historica",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 106,
    cooldownMin: 50,
    intereses: ["duranguesado", "torres", "ap8"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/elorrio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/elorrio.png",
  },

  {
    id: "es_pv_bizkaia_markina",
    nombre: "Markina-Xemein",
    emoji: "🏡",
    lat: 43.2681,
    lng: -2.497,
    nivel: 3,
    categorias: ["pueblo", "ruta", "interior"],
    tipo: "villa",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 94,
    cooldownMin: 40,
    intereses: ["interior_bizkaino", "pelota", "costa_interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/markina-xemein.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/markina-xemein.png",
  },

  {
    id: "es_pv_bizkaia_zalla",
    nombre: "Zalla y el valle de las Encartaciones",
    emoji: "🏘️",
    lat: 43.2114,
    lng: -3.1357,
    nivel: 3,
    categorias: ["valle", "ruta", "pueblo"],
    tipo: "municipio",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 93,
    cooldownMin: 40,
    intereses: ["encartaciones", "ap68", "paisaje"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zalla-y-el-valle-de-las-encartaciones.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zalla-y-el-valle-de-las-encartaciones.png",
  },

  // ✅ CAPITAL
  {
    id: "es_pv_gipuzkoa_donostia",
    nombre: "Donostia / San Sebastián",
    emoji: "🏛️",
    lat: 43.3183,
    lng: -1.9812,
    nivel: 1,
    categorias: ["ciudad", "cultura", "mar"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 140,
    cooldownMin: 85,
    intereses: ["a8", "bahia", "gastronomia", "playa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/donostia-san-sebastian.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_gipuzkoa_parte_vieja",
        "nombre": "Parte Vieja de Donostia",
        "tipo": "casco_historico",
        "nivel": 1,
        "lat": 43.3214,
        "lng": -1.9833,
        "radio": 2400
      },
      {
        "id": "es_pv_gipuzkoa_peine_viento",
        "nombre": "Peine del Viento",
        "tipo": "escultura",
        "nivel": 1,
        "lat": 43.3228,
        "lng": -2.0132,
        "radio": 2500
      },
      {
        "id": "es_pv_gipuzkoa_pasaia",
        "nombre": "Pasaia y su bahía",
        "tipo": "puerto",
        "nivel": 2,
        "lat": 43.3259,
        "lng": -1.925,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/donostia-san-sebastian.png",
  },

  {
    id: "es_pv_gipuzkoa_zumaia_flysch",
    nombre: "Flysch de Zumaia",
    emoji: "🏖️",
    lat: 43.2967,
    lng: -2.2606,
    nivel: 1,
    categorias: ["geologia", "mar", "paisaje"],
    tipo: "paraje_costero",
    radioActivacionMetros: 5500,

    perfil: "naturaleza",
    prioridad: 132,
    cooldownMin: 80,
    intereses: ["flysch", "costa", "acantilados", "geologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/flysch-de-zumaia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/flysch-de-zumaia.png",
  },

  {
    id: "es_pv_gipuzkoa_hondarribia",
    nombre: "Hondarribia",
    emoji: "🐚",
    lat: 43.3686,
    lng: -1.7904,
    nivel: 1,
    categorias: ["mar", "pueblo", "historia"],
    tipo: "villa_costera",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 131,
    cooldownMin: 75,
    intereses: ["frontera", "bahia_de_txingudi", "murallas", "a8"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hondarribia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_gipuzkoa_irun",
        "nombre": "Irún, frontera natural hacia Francia",
        "tipo": "ciudad",
        "nivel": 2,
        "lat": 43.3382,
        "lng": -1.7893,
        "radio": 6000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/hondarribia.png",
  },

  {
    id: "es_pv_gipuzkoa_loyola",
    nombre: "Santuario de Loyola (Azpeitia)",
    emoji: "🕍",
    lat: 43.1776,
    lng: -2.2649,
    nivel: 1,
    categorias: ["santuario", "historia", "arquitectura"],
    tipo: "santuario",
    radioActivacionMetros: 4500,

    perfil: "historia",
    prioridad: 124,
    cooldownMin: 65,
    intereses: ["ignacio_de_loyola", "urola", "barroco"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santuario-de-loyola.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/santuario-de-loyola.png",
  },

  {
    id: "es_pv_gipuzkoa_zarautz",
    nombre: "Zarautz",
    emoji: "🐚",
    lat: 43.2844,
    lng: -2.1699,
    nivel: 1,
    categorias: ["mar", "playa", "ruta"],
    tipo: "villa_costera",
    radioActivacionMetros: 5500,

    perfil: "cultura",
    prioridad: 123,
    cooldownMin: 60,
    intereses: ["surf", "a8", "litoral", "playa_larga"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zarautz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_gipuzkoa_getaria",
        "nombre": "Getaria",
        "tipo": "villa_costera",
        "nivel": 1,
        "lat": 43.3035,
        "lng": -2.205,
        "radio": 5000
      },
      {
        "id": "es_pv_gipuzkoa_orio",
        "nombre": "Orio",
        "tipo": "villa_costera",
        "nivel": 2,
        "lat": 43.2788,
        "lng": -2.126,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/zarautz.png",
  },

  {
    id: "es_pv_gipuzkoa_onati",
    nombre: "Oñati",
    emoji: "🏰",
    lat: 43.0326,
    lng: -2.4113,
    nivel: 1,
    categorias: ["universidad", "historia", "villa"],
    tipo: "villa_historica",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 122,
    cooldownMin: 65,
    intereses: ["renacimiento", "alto_deba", "santuario"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/onati.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/onati.png",
  },

  {
    id: "es_pv_gipuzkoa_arrasate",
    nombre: "Arrasate / Mondragón",
    emoji: "🏙️",
    lat: 43.0635,
    lng: -2.497,
    nivel: 2,
    categorias: ["industria", "cooperativismo", "ciudad"],
    tipo: "ciudad",
    radioActivacionMetros: 5000,

    perfil: "datos",
    prioridad: 116,
    cooldownMin: 60,
    intereses: ["ap1", "mondragon", "cooperativas", "alto_deba"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arrasate-mondragon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/arrasate-mondragon.png",
  },

  {
    id: "es_pv_gipuzkoa_eibar",
    nombre: "Eibar",
    emoji: "🏙️",
    lat: 43.1847,
    lng: -2.4733,
    nivel: 2,
    categorias: ["industria", "ciudad", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 5500,

    perfil: "datos",
    prioridad: 110,
    cooldownMin: 50,
    intereses: ["armas", "industria", "ap8", "deba"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/eibar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/eibar.png",
  },

  {
    id: "es_pv_gipuzkoa_tolosa",
    nombre: "Tolosa",
    emoji: "🏰",
    lat: 43.1367,
    lng: -2.0781,
    nivel: 2,
    categorias: ["villa", "historia", "mercado"],
    tipo: "villa_historica",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 107,
    cooldownMin: 50,
    intereses: ["oria", "a1", "alubia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tolosa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tolosa.png",
  },

  {
    id: "es_pv_gipuzkoa_bergara",
    nombre: "Bergara",
    emoji: "🏰",
    lat: 43.115,
    lng: -2.4175,
    nivel: 2,
    categorias: ["historia", "villa", "ciencia"],
    tipo: "villa_historica",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 107,
    cooldownMin: 50,
    intereses: ["real_seminario", "deba", "ap1"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bergara.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bergara.png",
  },

  {
    id: "es_pv_gipuzkoa_deba",
    nombre: "Deba",
    emoji: "🐚",
    lat: 43.2954,
    lng: -2.3525,
    nivel: 2,
    categorias: ["mar", "costa", "pueblo"],
    tipo: "villa_costera",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 102,
    cooldownMin: 45,
    intereses: ["litoral", "costa_vasca", "a8"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/deba.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/deba.png",
  },

  {
    id: "es_pv_gipuzkoa_ordizia",
    nombre: "Ordizia",
    emoji: "🏰",
    lat: 43.0544,
    lng: -2.1769,
    nivel: 2,
    categorias: ["mercado", "villa", "gastronomia"],
    tipo: "villa_historica",
    radioActivacionMetros: 4000,

    perfil: "cultura",
    prioridad: 102,
    cooldownMin: 45,
    intereses: ["a1", "goierri", "mercado_tradicional"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ordizia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_gipuzkoa_beasain",
        "nombre": "Beasain",
        "tipo": "ciudad",
        "nivel": 3,
        "lat": 43.0479,
        "lng": -2.2001,
        "radio": 4000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/ordizia.png",
  },

  {
    id: "es_pv_gipuzkoa_idiazabal",
    nombre: "Idiazabal",
    emoji: "🏡",
    lat: 43.011,
    lng: -2.2354,
    nivel: 3,
    categorias: ["gastronomia", "pueblo", "montaña"],
    tipo: "pueblo",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["queso", "goierri", "a1"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/idiazabal.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/idiazabal.png",
  },

  // ✅ CAPITAL
  {
    id: "es_pv_alava_vitoria_gasteiz",
    nombre: "Vitoria-Gasteiz, gran nudo entre la A-1 y la AP-68",
    emoji: "🏛️",
    lat: 42.8467,
    lng: -2.6726,
    nivel: 1,
    categorias: ["capital", "historia", "ruta", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 80,
    intereses: ["a1", "ap68", "llanada_alavesa", "capital_verde", "casco_historico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vitoria-gasteiz-gran-nudo-entre-la-a-1-y-la-ap-68.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_alava_catedral_santa_maria",
        "nombre": "Catedral de Santa María de Vitoria",
        "tipo": "catedral",
        "nivel": 1,
        "lat": 42.85,
        "lng": -2.6716,
        "radio": 2200
      },
      {
        "id": "es_pv_alava_salburua",
        "nombre": "Salburua y el anillo verde de Vitoria",
        "tipo": "parque_periurbano",
        "nivel": 1,
        "lat": 42.8592,
        "lng": -2.651,
        "radio": 5000
      },
      {
        "id": "es_pv_alava_estibaliz",
        "nombre": "Santuario de Estíbaliz",
        "tipo": "santuario",
        "nivel": 2,
        "lat": 42.8398,
        "lng": -2.5565,
        "radio": 3500
      },
      {
        "id": "es_pv_alava_virgen_blanca",
        "nombre": "Plaza de la Virgen Blanca",
        "tipo": "plaza_mayor",
        "nivel": 2,
        "lat": 42.8468,
        "lng": -2.6732,
        "radio": 1800
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/vitoria-gasteiz-gran-nudo-entre-la-a-1-y-la-ap-68.png",
  },

  {
    id: "es_pv_alava_laguardia",
    nombre: "Laguardia, balcón de Rioja Alavesa",
    emoji: "🏰",
    lat: 42.5547,
    lng: -2.585,
    nivel: 1,
    categorias: ["vino", "pueblo", "murallas", "cultura"],
    tipo: "villa_historica",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 136,
    cooldownMin: 80,
    intereses: ["rioja_alavesa", "ap68", "bodegas", "miradores"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laguardia-balcon-de-rioja-alavesa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_alava_elciego",
        "nombre": "Elciego y sus bodegas",
        "tipo": "villa_vino",
        "nivel": 2,
        "lat": 42.5157,
        "lng": -2.6181,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laguardia-balcon-de-rioja-alavesa.png",
  },

  {
    id: "es_pv_alava_valle_salado",
    nombre: "Valle Salado de Añana",
    emoji: "🧂",
    lat: 42.8019,
    lng: -2.9857,
    nivel: 1,
    categorias: ["paisaje", "industria_historica", "sal"],
    tipo: "salinas",
    radioActivacionMetros: 4500,

    perfil: "datos",
    prioridad: 132,
    cooldownMin: 70,
    intereses: ["sal", "ap68", "tradicion", "geologia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valle-salado-de-anana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_alava_nanclares",
        "nombre": "Nanclares de la Oca y la llanura del Zadorra",
        "tipo": "pueblo",
        "nivel": 3,
        "lat": 42.8167,
        "lng": -2.9853,
        "radio": 4500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/valle-salado-de-anana.png",
  },

  {
    id: "es_pv_alava_salto_nervion",
    nombre: "Salto del Nervión",
    emoji: "🔭",
    lat: 42.9709,
    lng: -3.0167,
    nivel: 1,
    categorias: ["naturaleza", "mirador", "paisaje"],
    tipo: "mirador_natural",
    radioActivacionMetros: 5000,

    perfil: "naturaleza",
    prioridad: 128,
    cooldownMin: 75,
    intereses: ["cascada", "valle_de_ayala", "mirador", "frontera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/salto-del-nervion.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_pv_bizkaia_orduna",
        "nombre": "Orduña, el balcón de Bizkaia",
        "tipo": "ciudad_historica",
        "nivel": 2,
        "lat": 42.9959,
        "lng": -3.0096,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/salto-del-nervion.png",
  },

  {
    id: "es_pv_alava_gorbeia",
    nombre: "Parque Natural de Gorbeia, vertiente alavesa",
    emoji: "🌿",
    lat: 42.979,
    lng: -2.769,
    nivel: 1,
    categorias: ["naturaleza", "montaña", "parque_natural"],
    tipo: "parque_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 126,
    cooldownMin: 70,
    intereses: ["gorbeia", "hayedos", "senderismo", "n622"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-gorbeia-vertiente-alavesa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-gorbeia-vertiente-alavesa.png",
  },

  {
    id: "es_pv_alava_izki",
    nombre: "Parque Natural de Izki",
    emoji: "🌿",
    lat: 42.7525,
    lng: -2.4433,
    nivel: 1,
    categorias: ["naturaleza", "bosque", "parque_natural"],
    tipo: "parque_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 123,
    cooldownMin: 70,
    intereses: ["roble_marojal", "montaña_alavesa", "senderismo", "a132"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-izki.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/parque-natural-de-izki.png",
  },

  {
    id: "es_pv_alava_iruna_veleia",
    nombre: "Yacimiento de Iruña-Veleia",
    emoji: "⛏️",
    lat: 42.826,
    lng: -2.808,
    nivel: 1,
    categorias: ["arqueologia", "historia", "romano"],
    tipo: "yacimiento",
    radioActivacionMetros: 3500,

    perfil: "historia",
    prioridad: 121,
    cooldownMin: 60,
    intereses: ["roma", "zadorra", "alava", "n622"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yacimiento-de-iruna-veleia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yacimiento-de-iruna-veleia.png",
  },

  {
    id: "es_pv_alava_araia_aizkorri",
    nombre: "Araia y el acceso al parque de Aizkorri-Aratz",
    emoji: "⛰️",
    lat: 42.894,
    lng: -2.3135,
    nivel: 2,
    categorias: ["naturaleza", "montaña", "pueblo"],
    tipo: "pueblo_montana",
    radioActivacionMetros: 5500,

    perfil: "naturaleza",
    prioridad: 110,
    cooldownMin: 55,
    intereses: ["a1", "senderismo", "aizkorri", "sierras"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/araia-y-el-acceso-al-parque-de-aizkorri-aratz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/araia-y-el-acceso-al-parque-de-aizkorri-aratz.png",
  },

  {
    id: "es_pv_alava_agurain",
    nombre: "Agurain / Salvatierra, puerta oriental de Álava",
    emoji: "🏰",
    lat: 42.8492,
    lng: -2.389,
    nivel: 2,
    categorias: ["pueblo", "historia", "ruta"],
    tipo: "villa_historica",
    radioActivacionMetros: 5000,

    perfil: "cultura",
    prioridad: 109,
    cooldownMin: 50,
    intereses: ["a1", "murallas", "llanada", "camino"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/agurain-salvatierra-puerta-oriental-de-alava.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/agurain-salvatierra-puerta-oriental-de-alava.png",
  },

  {
    id: "es_pv_alava_laudio",
    nombre: "Laudio / Llodio",
    emoji: "🏙️",
    lat: 43.1437,
    lng: -2.9626,
    nivel: 2,
    categorias: ["ciudad", "industria", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 5000,

    perfil: "datos",
    prioridad: 107,
    cooldownMin: 45,
    intereses: ["a625", "bilbao", "corredor_del_nervion", "industria"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laudio-llodio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/laudio-llodio.png",
  },

  {
    id: "es_pv_alava_ullibarri_gamboa",
    nombre: "Embalse de Ullíbarri-Gamboa",
    emoji: "💧",
    lat: 42.931,
    lng: -2.62,
    nivel: 2,
    categorias: ["naturaleza", "agua", "paisaje"],
    tipo: "embalse",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 104,
    cooldownMin: 50,
    intereses: ["agua", "deporte", "llanada", "vistas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/embalse-de-ullibarri-gamboa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/embalse-de-ullibarri-gamboa.png",
  },

  {
    id: "es_pv_alava_amurrio",
    nombre: "Amurrio",
    emoji: "🏡",
    lat: 43.052,
    lng: -3,
    nivel: 2,
    categorias: ["pueblo", "ruta", "valle"],
    tipo: "villa",
    radioActivacionMetros: 4500,

    perfil: "cultura",
    prioridad: 101,
    cooldownMin: 45,
    intereses: ["n622", "ayala", "paso_hacia_bilbao"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/amurrio.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/amurrio.png",
  },

  {
    id: "es_pv_alava_samaniego",
    nombre: "Samaniego",
    emoji: "🏡",
    lat: 42.5693,
    lng: -2.6806,
    nivel: 3,
    categorias: ["vino", "pueblo", "paisaje"],
    tipo: "pueblo",
    radioActivacionMetros: 3500,

    perfil: "cultura",
    prioridad: 95,
    cooldownMin: 40,
    intereses: ["rioja_alavesa", "viñedo", "ap68"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/samaniego.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/samaniego.png",
  },

  // ✅ CAPITAL
  {
    id: "es_mur_capital_murcia",
    nombre: "Murcia (capital y gran nudo de la A-30 y A-7)",
    emoji: "🏛️",
    lat: 37.9922,
    lng: -1.1307,
    nivel: 1,
    categorias: ["capital", "ciudad", "cultura", "ruta"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000,

    perfil: "cultura",
    prioridad: 138,
    cooldownMin: 80,
    intereses: ["capitalidad", "segura", "a30", "a7", "huerta"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/murcia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mur_catedral",
        "nombre": "Catedral de Murcia",
        "tipo": "catedral",
        "nivel": 1,
        "lat": 37.9839,
        "lng": -1.1298,
        "radio": 5000
      },
      {
        "id": "es_mur_molina_segura",
        "nombre": "Molina de Segura, enlace clave entre A-30 y A-7",
        "tipo": "ciudad",
        "nivel": 1,
        "lat": 38.0546,
        "lng": -1.2104,
        "radio": 6500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/murcia.png",
  },

  {
    id: "es_mur_cartagena",
    nombre: "Cartagena, gran puerto histórico del sureste",
    emoji: "🏰",
    lat: 37.6257,
    lng: -0.9966,
    nivel: 1,
    categorias: ["historia", "ciudad", "puerto", "mar"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9500,

    perfil: "historia",
    prioridad: 136,
    cooldownMin: 80,
    intereses: ["puerto", "arsenal", "cartagineses", "romano"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cartagena-gran-puerto-historico-del-sureste.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mur_teatro_cartagena",
        "nombre": "Teatro romano de Cartagena",
        "tipo": "teatro_romano",
        "nivel": 1,
        "lat": 37.5996,
        "lng": -0.9867,
        "radio": 5000
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cartagena-gran-puerto-historico-del-sureste.png",
  },

  {
    id: "es_mur_lorca",
    nombre: "Lorca, gran ciudad histórica del eje A-7",
    emoji: "🏰",
    lat: 37.671,
    lng: -1.7017,
    nivel: 1,
    categorias: ["historia", "ciudad", "ruta"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8500,

    perfil: "historia",
    prioridad: 132,
    cooldownMin: 75,
    intereses: ["a7", "barroco", "castillo", "guadalentin"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lorca-gran-ciudad-historica-del-eje-a-7.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    sub_pois: [
      {
        "id": "es_mur_castillo_lorca",
        "nombre": "Castillo de Lorca",
        "tipo": "castillo",
        "nivel": 1,
        "lat": 37.6748,
        "lng": -1.7008,
        "radio": 5500
      }
    ],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/lorca-gran-ciudad-historica-del-eje-a-7.png",
  },

  {
    id: "es_mur_caravaca",
    nombre: "Caravaca de la Cruz",
    emoji: "🏰",
    lat: 38.1056,
    lng: -1.8632,
    nivel: 1,
    categorias: ["historia", "religion", "ciudad"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8000,

    perfil: "historia",
    prioridad: 124,
    cooldownMin: 65,
    intereses: ["a%C3%B1o_jubilar", "santuario", "interior", "rm15"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caravaca-de-la-cruz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/caravaca-de-la-cruz.png",
  },

  {
    id: "es_mur_mar_menor",
    nombre: "Mar Menor y San Javier",
    emoji: "🏖️",
    lat: 37.8063,
    lng: -0.8372,
    nivel: 1,
    categorias: ["mar", "laguna", "paisaje"],
    tipo: "laguna_costera",
    radioActivacionMetros: 8500,

    perfil: "naturaleza",
    prioridad: 123,
    cooldownMin: 60,
    intereses: ["laguna_salada", "n332", "ap7", "deporte_nautico"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mar-menor-y-san-javier.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mar-menor-y-san-javier.png",
  },

  {
    id: "es_mur_cabo_palos",
    nombre: "Cabo de Palos",
    emoji: "🏖️",
    lat: 37.6335,
    lng: -0.6984,
    nivel: 1,
    categorias: ["mar", "paisaje", "naturaleza"],
    tipo: "cabo",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 122,
    cooldownMin: 55,
    intereses: ["faro", "reserva_marina", "mediterraneo", "ap7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabo-de-palos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cabo-de-palos.png",
  },

  {
    id: "es_mur_jumilla",
    nombre: "Jumilla (puerta norte por A-33)",
    emoji: "🏙️",
    lat: 38.4792,
    lng: -1.325,
    nivel: 1,
    categorias: ["ciudad", "vino", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 7500,

    perfil: "cultura",
    prioridad: 121,
    cooldownMin: 60,
    intereses: ["a33", "bodegas", "altiplano", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jumilla.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/jumilla.png",
  },

  {
    id: "es_mur_bolnuevo",
    nombre: "Bolnuevo y las Gredas de Mazarrón",
    emoji: "🌄",
    lat: 37.5616,
    lng: -1.3152,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "mar"],
    tipo: "paisaje_natural",
    radioActivacionMetros: 7000,

    perfil: "naturaleza",
    prioridad: 119,
    cooldownMin: 55,
    intereses: ["erosion", "mazarron", "gredas", "costa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bolnuevo-y-las-gredas-de-mazarron.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/bolnuevo-y-las-gredas-de-mazarron.png",
  },

  {
    id: "es_mur_yecla",
    nombre: "Yecla",
    emoji: "🏙️",
    lat: 38.6137,
    lng: -1.1147,
    nivel: 1,
    categorias: ["ciudad", "vino", "ruta"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 118,
    cooldownMin: 55,
    intereses: ["a33", "mueble", "altiplano", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yecla.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/yecla.png",
  },

  {
    id: "es_mur_union_minera",
    nombre: "La Unión y el Parque Minero",
    emoji: "⛏️",
    lat: 37.6163,
    lng: -0.8788,
    nivel: 1,
    categorias: ["industria", "historia", "paisaje"],
    tipo: "paisaje_minero",
    radioActivacionMetros: 6500,

    perfil: "datos",
    prioridad: 118,
    cooldownMin: 55,
    intereses: ["mineria", "sierra_minera", "cartagena", "ap7"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-union-y-el-parque-minero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/la-union-y-el-parque-minero.png",
  },

  {
    id: "es_mur_cieza",
    nombre: "Cieza, gran paso frutal del eje A-30",
    emoji: "🏙️",
    lat: 38.239,
    lng: -1.4199,
    nivel: 1,
    categorias: ["ciudad", "ruta", "rio"],
    tipo: "ciudad",
    radioActivacionMetros: 7000,

    perfil: "cultura",
    prioridad: 117,
    cooldownMin: 50,
    intereses: ["a30", "segura", "frutales", "floracion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cieza-gran-paso-frutal-del-eje-a-30.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cieza-gran-paso-frutal-del-eje-a-30.png",
  },

  {
    id: "es_mur_aguilas",
    nombre: "Águilas",
    emoji: "⚓",
    lat: 37.4065,
    lng: -1.5825,
    nivel: 1,
    categorias: ["mar", "ciudad", "paisaje"],
    tipo: "ciudad_costera",
    radioActivacionMetros: 7500,

    perfil: "cultura",
    prioridad: 116,
    cooldownMin: 50,
    intereses: ["castillo", "litoral", "mediterraneo", "sur"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aguilas.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/aguilas.png",
  },

  {
    id: "es_mur_archena",
    nombre: "Archena y su balneario",
    emoji: "♨️",
    lat: 38.1162,
    lng: -1.3014,
    nivel: 1,
    categorias: ["salud", "aguas", "ruta"],
    tipo: "balneario",
    radioActivacionMetros: 6500,

    perfil: "naturaleza",
    prioridad: 116,
    cooldownMin: 50,
    intereses: ["balneario", "a30", "termalismo", "segura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/archena-y-su-balneario.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/archena-y-su-balneario.png",
  },

  {
    id: "es_mur_calasparra",
    nombre: "Calasparra",
    emoji: "🌿",
    lat: 38.2302,
    lng: -1.6992,
    nivel: 1,
    categorias: ["pueblo", "naturaleza", "gastronomia"],
    tipo: "villa_natural",
    radioActivacionMetros: 6500,

    perfil: "cultura",
    prioridad: 112,
    cooldownMin: 50,
    intereses: ["arroz", "ca%C3%B1on_del_segura", "interior", "a30"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calasparra.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/calasparra.png",
  },

  {
    id: "es_mur_totana",
    nombre: "Totana",
    emoji: "🏡",
    lat: 37.769,
    lng: -1.5,
    nivel: 1,
    categorias: ["pueblo", "ruta", "interior"],
    tipo: "pueblo",
    radioActivacionMetros: 6000,

    perfil: "cultura",
    prioridad: 108,
    cooldownMin: 45,
    intereses: ["a7", "sierra_espu%C3%B1a", "paso_sur", "interior"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/totana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/totana.png",
  },

  {
    id: "es_mur_puerto_lumbreras",
    nombre: "Puerto Lumbreras",
    emoji: "🏡",
    lat: 37.5622,
    lng: -1.8104,
    nivel: 1,
    categorias: ["ruta", "pueblo", "frontera"],
    tipo: "pueblo",
    radioActivacionMetros: 5500,

    perfil: "datos",
    prioridad: 106,
    cooldownMin: 45,
    intereses: ["a7", "andalucia", "corredor_mediterraneo", "frontera"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-lumbreras.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puerto-lumbreras.png",
  },

  {
    id: "es_cac_presa_alcantara",
    nombre: "Presa de Alcántara y Embalse de José María Oriol",
    emoji: "🌊",
    lat: 39.7275,
    lng: -6.8906,
    nivel: 1,
    categorias: ["ingenieria_civil", "presa", "hidroelectrica", "record"],
    tipo: "presa",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 95,
    cooldownMin: 60,
    intereses: ["presa_contrafuertes", "3162_hm3_segundo_embalse_espana", "central_hidroelectrica_alcantara_II_1900MW", "rio_tajo", "puente_romano_2000_años"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-alcantara-y-embalse-de-jose-maria-oriol.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-alcantara-y-embalse-de-jose-maria-oriol.png",
  },

  {
    id: "es_sal_presa_almendra",
    nombre: "Presa de Almendra — la más alta de España",
    emoji: "🌊",
    lat: 41.2619,
    lng: -6.3431,
    nivel: 1,
    categorias: ["ingenieria_civil", "presa", "record", "hidroelectrica"],
    tipo: "presa",
    radioActivacionMetros: 3500,

    perfil: "ingenieria",
    prioridad: 95,
    cooldownMin: 60,
    intereses: ["202_metros_altura_record_espana", "presa_boveda", "rio_tormes", "2684_hm3_capacidad", "inaugurada_1970_iberdrola"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-almendra-la-mas-alta-de-espana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-almendra-la-mas-alta-de-espana.png",
  },

  {
    id: "es_bad_presa_la_serena",
    nombre: "Presa de La Serena — mayor embalse de España",
    emoji: "🌊",
    lat: 38.8964,
    lng: -5.6983,
    nivel: 1,
    categorias: ["ingenieria_civil", "presa", "record", "regadio"],
    tipo: "presa",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 95,
    cooldownMin: 60,
    intereses: ["3219_hm3_mayor_embalse_espana", "tercer_mayor_europa_occidental", "presa_gravedad_90m_altura", "rio_zujar_afluente_guadiana", "13000_hectareas_superficie_lleno"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-la-serena-mayor-embalse-de-espana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-la-serena-mayor-embalse-de-espana.png",
  },

  {
    id: "es_sal_presa_aldeadavila",
    nombre: "Presa de Aldeadávila — los Arribes del Duero",
    emoji: "🌊",
    lat: 41.2303,
    lng: -6.5678,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "hidroelectrica", "cañon"],
    tipo: "presa",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 80,
    cooldownMin: 55,
    intereses: ["arco_gravedad_139m_altura", "cañon_granitico_rio_duero", "12108_m3_s_capacidad_aliviadero", "frontera_portugal", "construida_1956_1963"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-aldeadavila-los-arribes-del-duero.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-aldeadavila-los-arribes-del-duero.png",
  },

  {
    id: "es_hue_presa_canelles",
    nombre: "Presa de Canelles y Congost de Mont-rebei",
    emoji: "🌊",
    lat: 42.0022,
    lng: 0.6839,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "cañon", "paisaje"],
    tipo: "presa",
    radioActivacionMetros: 3500,

    perfil: "ingenieria",
    prioridad: 80,
    cooldownMin: 55,
    intereses: ["1551_hm3_mayor_embalse_aragon", "presa_boveda_150m_altura", "rio_noguera_ribagorzana", "congost_mont_rebei_sin_carretera", "construida_1958_1960"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-canelles-y-congost-de-mont-rebei.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-canelles-y-congost-de-mont-rebei.png",
  },

  {
    id: "es_zgz_presa_mequinenza",
    nombre: "Presa de Mequinenza — el Mar de Aragón",
    emoji: "🌊",
    lat: 41.3636,
    lng: 0.2953,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "hidroelectrica", "embalse"],
    tipo: "presa",
    radioActivacionMetros: 3500,

    perfil: "ingenieria",
    prioridad: 78,
    cooldownMin: 55,
    intereses: ["1530_hm3_mayor_embalse_ebro", "presa_gravedad_79m_altura", "sumergió_pueblo_viejo_1964", "lucioperca_y_siluro_pesca_record_europa", "central_hidro_324MW"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-mequinenza-el-mar-de-aragon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-mequinenza-el-mar-de-aragon.png",
  },

  {
    id: "es_hue_presa_yesa",
    nombre: "Presa de Yesa — regulación del Aragón",
    emoji: "🌊",
    lat: 42.6167,
    lng: -1.1358,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "recrecimiento", "polémica"],
    tipo: "presa",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 75,
    cooldownMin: 50,
    intereses: ["recrecimiento_polemico_30_años_debate", "475_hm3_capacidad", "presa_gravedad_rio_aragon", "trasvase_bardenas_reales", "pueblos_inundados_ruesta_undues"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-yesa-regulacion-del-aragon.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-yesa-regulacion-del-aragon.png",
  },

  {
    id: "es_gua_presa_entrepeñas",
    nombre: "Presa de Entrepeñas — origen del Trasvase Tajo-Segura",
    emoji: "🌊",
    lat: 40.5622,
    lng: -2.6939,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "trasvase", "politica_hidrica"],
    tipo: "presa",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 75,
    cooldownMin: 55,
    intereses: ["inicio_trasvase_tajo_segura_1979", "837_hm3_capacidad", "presa_contrafuertes_rio_tajo", "conflicto_castilla_levante_agua", "menor_nivel_activa_alarma_nacional"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-entrepenas-origen-del-trasvase-tajo-segura.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-entrepenas-origen-del-trasvase-tajo-segura.png",
  },

  {
    id: "es_our_presa_lindoso_belesar",
    nombre: "Presa de Belesar — cañón del Miño",
    emoji: "🌊",
    lat: 42.6175,
    lng: -7.8219,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "hidroelectrica", "cañon"],
    tipo: "presa",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 50,
    intereses: ["presa_arco_gravedad_128m", "pueblo_portomarín_trasladado_piedra_a_piedra_1962", "iglesia_romanica_desmontada_y_reconstruida", "rio_mino_140_hm3", "turbinas_kaplan_reversibles"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-belesar-canon-del-mino.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-belesar-canon-del-mino.png",
  },

  {
    id: "es_cac_puente_alcantara",
    nombre: "Puente Romano de Alcántara — 2.000 años en pie",
    emoji: "🌉",
    lat: 39.7265,
    lng: -6.8932,
    nivel: 1,
    categorias: ["ingenieria_civil", "puente", "romano", "patrimonio"],
    tipo: "puente_historico",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 95,
    cooldownMin: 60,
    intereses: ["6_arcos_de_medio_punto_48m_vano_central", "construido_104_106_dC_trajano", "inscripcion_durate_in_saecula_para_siempre", "194m_longitud_9m_anchura", "arco_de_triunfo_en_centro_unico_en_puentes_romanos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-romano-de-alcantara-2000-anos-en-pie.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-romano-de-alcantara-2000-anos-en-pie.png",
  },

  {
    id: "es_bad_puente_lusitania",
    nombre: "Puente de Lusitania de Calatrava — Mérida",
    emoji: "🌉",
    lat: 38.9151,
    lng: -6.3551,
    nivel: 2,
    categorias: ["ingenieria_civil", "puente", "calatrava", "contemporaneo"],
    tipo: "puente_contemporaneo",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 82,
    cooldownMin: 55,
    intereses: ["arco_atirantado_sobre_tablero_190m_vano", "santiago_calatrava_1991", "480m_longitud_total", "dialogo_con_puente_romano_2000_años_al_lado", "hormigon_blanco_postesado"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-de-lusitania-de-calatrava-merida.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-de-lusitania-de-calatrava-merida.png",
  },

  {
    id: "es_biz_puente_colgante_vizcaya",
    nombre: "Puente Colgante de Bizkaia — primer transbordador del mundo",
    emoji: "🚡",
    lat: 43.3244,
    lng: -3.0175,
    nivel: 1,
    categorias: ["ingenieria_civil", "puente", "unesco", "record"],
    tipo: "puente_transbordador",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 95,
    cooldownMin: 60,
    intereses: ["primer_puente_transbordador_del_mundo_1893", "gondola_transporta_coches_y_personas_sin_tocar_el_agua", "160m_longitud_45m_altura", "patrimonio_humanidad_unesco_2006", "diseño_alberto_palacio_discipulo_eiffel"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-colgante-de-bizkaia-primer-transbordador-del-mundo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-colgante-de-bizkaia-primer-transbordador-del-mundo.png",
  },

  {
    id: "es_mal_puente_nuevo_ronda",
    nombre: "Puente Nuevo de Ronda — 98 metros sobre el Tajo",
    emoji: "🌉",
    lat: 36.7407,
    lng: -5.1657,
    nivel: 1,
    categorias: ["ingenieria_civil", "puente", "barroco", "paisaje"],
    tipo: "puente_historico",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 90,
    cooldownMin: 55,
    intereses: ["98m_sobre_el_tajo_del_guadalevin", "construido_1793_jose_martin_aldehuela", "primer_intento_1735_colapsó_50_muertos", "camara_interior_usada_como_carcel_guerra_civil", "arco_central_de_34m_de_luz"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-nuevo-de-ronda-98-metros-sobre-el-tajo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-nuevo-de-ronda-98-metros-sobre-el-tajo.png",
  },

  {
    id: "es_alb_puente_vicaria",
    nombre: "Puente de La Vicaria — arco sobre el embalse de Fuensanta",
    emoji: "🌉",
    lat: 38.3822,
    lng: -2.1461,
    nivel: 2,
    categorias: ["ingenieria_civil", "puente", "arco", "espectacular"],
    tipo: "puente_arco",
    radioActivacionMetros: 2500,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 50,
    intereses: ["arco_superior_tablero_intermedio", "conecta_yeste_y_letur_separados_desde_1932", "puente_cuelga_sobre_el_embalse", "hormigon_armado_vano_130m", "zona_inundada_por_presa_fuensanta"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-de-la-vicaria-arco-sobre-el-embalse-de-fuensanta.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-de-la-vicaria-arco-sobre-el-embalse-de-fuensanta.png",
  },

  {
    id: "es_gir_puente_besalu",
    nombre: "Puente Medieval de Besalú — siglo XI sobre el Fluviá",
    emoji: "🌉",
    lat: 42.1989,
    lng: 2.7003,
    nivel: 2,
    categorias: ["ingenieria_civil", "puente", "medieval", "romanico"],
    tipo: "puente_historico",
    radioActivacionMetros: 1500,

    perfil: "ingenieria",
    prioridad: 78,
    cooldownMin: 50,
    intereses: ["7_arcos_romanicos_siglo_XI", "torre_hexagonal_defensiva_en_centro", "135m_longitud_reconstruido_tras_guerra_civil", "puerta_de_entrada_a_la_ciudad_medieval", "unica_torre_de_puente_medieval_en_pie_cataluña"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-medieval-de-besalu-siglo-xi-sobre-el-fluvia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-medieval-de-besalu-siglo-xi-sobre-el-fluvia.png",
  },

  {
    id: "es_zam_viaducto_pajares",
    nombre: "Viaducto de Barrios de Luna — arco de 440m",
    emoji: "🌉",
    lat: 42.8681,
    lng: -5.9997,
    nivel: 2,
    categorias: ["ingenieria_civil", "viaducto", "arco", "record"],
    tipo: "viaducto",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 78,
    cooldownMin: 50,
    intereses: ["440m_vano_mayor_arco_hormigon_pretensado_europa_1983", "68m_sobre_embalse_barrios_luna", "autovia_a66_via_plata", "record_mundial_vano_libre_hormigon_al_inaugurarse", "construido_1979_1983"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/viaducto-de-barrios-de-luna-arco-de-440m.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/viaducto-de-barrios-de-luna-arco-de-440m.png",
  },

  {
    id: "es_tar_viaducto_millau_español",
    nombre: "Viaducto de Viaur — puente de hierro del siglo XIX",
    emoji: "🌉",
    lat: 41.1908,
    lng: 2.1878,
    nivel: 2,
    categorias: ["ingenieria_civil", "viaducto", "tirantes", "contemporaneo"],
    tipo: "viaducto",
    radioActivacionMetros: 2500,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 50,
    intereses: ["puente_del_alamillo_calatrava_1992_olimpiadas", "arco_200m_vano_cable_unico", "exposicion_universal_sevilla", "influencia_eiffel_en_diseño_estructural", "primer_puente_calatrava_mundialmente_reconocido"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/viaducto-de-viaur-puente-de-hierro-del-siglo-xix.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/viaducto-de-viaur-puente-de-hierro-del-siglo-xix.png",
  },

  {
    id: "es_sev_puente_alamillo",
    nombre: "Puente del Alamillo de Calatrava — Expo 92",
    emoji: "🌉",
    lat: 37.4072,
    lng: -6.0039,
    nivel: 2,
    categorias: ["ingenieria_civil", "puente", "calatrava", "contemporaneo"],
    tipo: "puente_atirantado",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 82,
    cooldownMin: 55,
    intereses: ["pylon_inclinado_142m_sin_contrapeso_opuesto", "200m_vano_principal_13_pares_cables", "disenado_expo_92_isla_cartuja", "hormigon_blanco_acero_inoxidable", "primer_puente_tipo_arpa_de_calatrava"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-del-alamillo-de-calatrava-expo-92.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/puente-del-alamillo-de-calatrava-expo-92.png",
  },

  {
    id: "es_cac_nuclear_almaraz",
    nombre: "Central Nuclear de Almaraz — mayor potencia de España",
    emoji: "☢️",
    lat: 39.8067,
    lng: -5.6981,
    nivel: 2,
    categorias: ["ingenieria_civil", "nuclear", "energia", "reactor"],
    tipo: "central_nuclear",
    radioActivacionMetros: 5000,

    perfil: "ingenieria",
    prioridad: 88,
    cooldownMin: 65,
    intereses: ["2_reactores_PWR_agua_presion_1918MW_total", "mayor_central_nuclear_españa", "refrigerada_embalse_arrocampo_rio_tajo", "cierre_previsto_2027_2028", "produce_20pct_electricidad_extremadura"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-nuclear-de-almaraz-mayor-potencia-de-espana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-nuclear-de-almaraz-mayor-potencia-de-espana.png",
  },

  {
    id: "es_gua_nuclear_trillo",
    nombre: "Central Nuclear de Trillo — última construida en España",
    emoji: "☢️",
    lat: 40.5511,
    lng: -2.5869,
    nivel: 2,
    categorias: ["ingenieria_civil", "nuclear", "energia", "reactor"],
    tipo: "central_nuclear",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 82,
    cooldownMin: 60,
    intereses: ["ultima_central_nuclear_construida_españa_1988", "1066MW_reactor_PWR", "refrigerada_rio_tajo", "almacenamiento_combustible_seco_desde_2002", "cierre_previsto_2035"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-nuclear-de-trillo-ultima-construida-en-espana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-nuclear-de-trillo-ultima-construida-en-espana.png",
  },

  {
    id: "es_bur_nuclear_garoña",
    nombre: "Central Nuclear de Santa María de Garoña — en desmantelamiento",
    emoji: "☢️",
    lat: 42.7681,
    lng: -3.2006,
    nivel: 2,
    categorias: ["ingenieria_civil", "nuclear", "desmantelamiento", "historia"],
    tipo: "central_nuclear",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 55,
    intereses: ["primer_reactor_BWR_agua_ebullicion_españa", "466MW_operativa_1971_2012", "desmantelamiento_40_años_proceso", "gemela_diseño_fukushima_daiichi_japon", "gorge_burgalés_ebro_naciente"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-nuclear-de-santa-maria-de-garona-en-desmantelamiento.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-nuclear-de-santa-maria-de-garona-en-desmantelamiento.png",
  },

  {
    id: "es_tar_nuclear_asco_vandellós",
    nombre: "Complejo Nuclear Ascó-Vandellós — 4 reactores en el Ebro",
    emoji: "☢️",
    lat: 41.2017,
    lng: 0.5678,
    nivel: 2,
    categorias: ["ingenieria_civil", "nuclear", "energia", "complejo"],
    tipo: "central_nuclear",
    radioActivacionMetros: 5000,

    perfil: "ingenieria",
    prioridad: 85,
    cooldownMin: 60,
    intereses: ["4_reactores_nucleares_en_50km_mayor_concentracion_españa", "refrigeracion_rio_ebro_agua_dulce", "asco_I_II_PWR_1806MW_total", "vandellós_II_1087MW_vandellós_I_desmantelamiento", "accidente_vandellós_I_1989_nivel_3_INES"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/complejo-nuclear-asco-vandellos-4-reactores-en-el-ebro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/complejo-nuclear-asco-vandellos-4-reactores-en-el-ebro.png",
  },

  {
    id: "es_val_nuclear_cofrentes",
    nombre: "Central Nuclear de Cofrentes — reactor BWR en el Júcar",
    emoji: "☢️",
    lat: 39.2483,
    lng: -1.0628,
    nivel: 2,
    categorias: ["ingenieria_civil", "nuclear", "energia", "reactor"],
    tipo: "central_nuclear",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 80,
    cooldownMin: 60,
    intereses: ["reactor_BWR_agua_ebullicion_1064MW", "refrigerada_embalse_embarcaderos_rio_jucar", "unica_central_nuclear_valencia", "cierre_previsto_2030", "genera_mas_electricidad_que_consume_toda_la_provincia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-nuclear-de-cofrentes-reactor-bwr-en-el-jucar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-nuclear-de-cofrentes-reactor-bwr-en-el-jucar.png",
  },

  {
    id: "es_hue_minas_riotinto_complejo",
    nombre: "Minas de Riotinto — 5.000 años de minería",
    emoji: "⛏️",
    lat: 37.7006,
    lng: -6.5833,
    nivel: 1,
    categorias: ["ingenieria_civil", "mineria", "historia", "paisaje"],
    tipo: "mina",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 95,
    cooldownMin: 65,
    intereses: ["5000_años_explotacion_continua_mina_mas_antigua_mundo", "corta_atalaya_1300m_diametro_340m_profundidad", "rio_tinto_rojo_por_acidos_y_bacterias_quimioautotrofas", "rio_tinto_company_inglesa_trajo_futbol_a_españa", "nasa_estudia_bacterias_del_rio_para_buscar_vida_en_marte"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minas-de-riotinto-5000-anos-de-mineria.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minas-de-riotinto-5000-anos-de-mineria.png",
  },

  {
    id: "es_ast_cuenca_minera_central",
    nombre: "Cuenca Minera del Nalón y Caudal — corazón del carbón asturiano",
    emoji: "⛏️",
    lat: 43.2897,
    lng: -5.8728,
    nivel: 2,
    categorias: ["ingenieria_civil", "mineria", "carbon", "patrimonio_industrial"],
    tipo: "mina",
    radioActivacionMetros: 5000,

    perfil: "ingenieria",
    prioridad: 82,
    cooldownMin: 60,
    intereses: ["900m_bajo_nivel_del_mar_pozos_mas_profundos_españa", "huelga_1934_y_1962_cambiaron_historia_españa", "MUMI_museo_mineria_unico_en_mina_real", "carbon_asturiano_alimentó_siderurgia_española_150_años", "ultimo_pozo_cerrado_2018"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuenca-minera-del-nalon-y-caudal-corazon-del-carbon-asturiano.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cuenca-minera-del-nalon-y-caudal-corazon-del-carbon-asturiano.png",
  },

  {
    id: "es_leo_corta_cabana",
    nombre: "Corta Cabana y Cuenca del Bierzo — minería a cielo abierto",
    emoji: "⛏️",
    lat: 42.6178,
    lng: -6.6058,
    nivel: 2,
    categorias: ["ingenieria_civil", "mineria", "carbon", "cielo_abierto"],
    tipo: "mina",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 75,
    cooldownMin: 55,
    intereses: ["explotacion_a_cielo_abierto_antracita_bierzo", "paisaje_transformado_por_cortas_gigantes", "central_termica_compostilla_consumia_toda_produccion", "cierre_2018_plan_carbón_europeo", "recuperacion_ambiental_en_curso"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/corta-cabana-y-cuenca-del-bierzo-mineria-a-cielo-abierto.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/corta-cabana-y-cuenca-del-bierzo-mineria-a-cielo-abierto.png",
  },

  {
    id: "es_our_mina_penouta",
    nombre: "Mina de Penouta — mayor mina de estaño de Europa",
    emoji: "⛏️",
    lat: 42.0836,
    lng: -6.9878,
    nivel: 2,
    categorias: ["ingenieria_civil", "mineria", "estaño", "estrategico"],
    tipo: "mina",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 50,
    intereses: ["mayor_mina_estaño_europa_occidental", "tambien_extrae_tantalo_y_columbita_minerales_criticos", "mineral_critico_union_europea_para_electronica", "explotacion_opencast_galeria_recuperada_2017", "reservas_estimadas_30_años"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mina-de-penouta-mayor-mina-de-estano-de-europa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mina-de-penouta-mayor-mina-de-estano-de-europa.png",
  },

  {
    id: "es_hue_mina_aguas_tenidas",
    nombre: "Mina de Aguas Teñidas — cobre y zinc en la Faja Pirítica",
    emoji: "⛏️",
    lat: 37.8072,
    lng: -7.01,
    nivel: 2,
    categorias: ["ingenieria_civil", "mineria", "cobre", "subterranea"],
    tipo: "mina",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 50,
    intereses: ["mina_subterranea_800m_profundidad", "faja_piritica_iberica_mayor_deposito_sulfuros_mundo", "extrae_cobre_zinc_plomo_oro_plata", "rampa_camiones_6km_para_subir_mineral", "produccion_2_millones_toneladas_año"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mina-de-aguas-tenidas-cobre-y-zinc-en-la-faja-piritica.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/mina-de-aguas-tenidas-cobre-y-zinc-en-la-faja-piritica.png",
  },

  {
    id: "es_bar_minas_potasa_bages",
    nombre: "Minas de Potasa del Bages — sal y potasio bajo el Llobregat",
    emoji: "⛏️",
    lat: 41.7194,
    lng: 1.8131,
    nivel: 2,
    categorias: ["ingenieria_civil", "mineria", "potasa", "sal"],
    tipo: "mina",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 70,
    cooldownMin: 50,
    intereses: ["potasa_se_extrae_600m_profundidad", "fertilizante_agricola_exportado_50_paises", "800km_galerías_subterraneas_bajo_bages", "sal_gema_explotada_desde_epoca_romana", "mayor_complejo_minero_subterraneo_españa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minas-de-potasa-del-bages-sal-y-potasio-bajo-el-llobregat.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/minas-de-potasa-del-bages-sal-y-potasio-bajo-el-llobregat.png",
  },

  {
    id: "es_sev_torre_pelli",
    nombre: "Torre Pelli de Sevilla — rascacielos más alto de Andalucía",
    emoji: "🏢",
    lat: 37.4052,
    lng: -5.9935,
    nivel: 2,
    categorias: ["ingenieria_civil", "rascacielos", "arquitectura", "record"],
    tipo: "rascacielos",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 50,
    intereses: ["180m_altura_torre_mas_alta_andalucia", "cesar_pelli_arquitecto_petronas_torres_gemelas", "polémica_visibilidad_giralda_2015", "fachada_vidrio_lamas_acero_ventilacion_natural", "cimentacion_200_pilotes_30m_profundidad"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torre-pelli-de-sevilla-rascacielos-mas-alto-de-andalucia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torre-pelli-de-sevilla-rascacielos-mas-alto-de-andalucia.png",
  },

  {
    id: "es_ter_viaducto_teruel",
    nombre: "Viaducto de Teruel — 1928 sobre el Turia",
    emoji: "🌉",
    lat: 40.3442,
    lng: -1.1078,
    nivel: 2,
    categorias: ["ingenieria_civil", "viaducto", "hormigon", "patrimonio"],
    tipo: "viaducto",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 70,
    cooldownMin: 50,
    intereses: ["puente_arco_hormigon_armado_1928", "60m_sobre_rio_turia", "jose_maria_fuster_diseñador", "estilo_neomudéjar_columnas_arabizantes", "parte_del_acceso_historico_al_casco_medieval"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/viaducto-de-teruel-1928-sobre-el-turia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/viaducto-de-teruel-1928-sobre-el-turia.png",
  },

  {
    id: "es_seg_acueducto_segovia_ingenieria",
    nombre: "Acueducto de Segovia — ingeniería romana sin cemento",
    emoji: "🏛️",
    lat: 40.9483,
    lng: -4.1186,
    nivel: 1,
    categorias: ["ingenieria_civil", "acueducto", "romano", "record"],
    tipo: "acueducto",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 95,
    cooldownMin: 60,
    intereses: ["167_arcos_20400_bloques_granito_sin_mortero_ni_cemento", "2000_años_llevando_agua_17km_sierra", "arcos_dobles_28m_altura_maxima", "grado_cero_de_la_topografia_romana", "funciono_hasta_siglo_XIX"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/acueducto-de-segovia-ingenieria-romana-sin-cemento.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/acueducto-de-segovia-ingenieria-romana-sin-cemento.png",
  },

  {
    id: "es_lle_tunel_vielha",
    nombre: "Túnel de Vielha — primer túnel de montaña de España",
    emoji: "🚇",
    lat: 42.7253,
    lng: 0.8833,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "montaña", "historia"],
    tipo: "tunel",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 50,
    intereses: ["primer_tunel_montaña_españa_1948", "5230m_longitud_bajo_macizo_de_maladeta", "construido_con_trabajo_presos_politicos_franquismo", "antes_del_tunel_val_d_aran_incomunicada_invierno", "tunel_de_vielha_II_1999_paralelo_y_mas_moderno"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-vielha-primer-tunel-de-montana-de-espana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-vielha-primer-tunel-de-montana-de-espana.png",
  },

  {
    id: "es_mur_trasvase_tajo_segura_cabecera",
    nombre: "Trasvase Tajo-Segura — mayor obra hidráulica de España",
    emoji: "💧",
    lat: 38.0833,
    lng: -1.3167,
    nivel: 2,
    categorias: ["ingenieria_civil", "trasvase", "hidraulica", "polemica"],
    tipo: "infraestructura_hidraulica",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 80,
    cooldownMin: 60,
    intereses: ["286km_canal_que_cruza_españa_meseta_a_mediterraneo", "eleva_agua_247m_bombeos_cascada_energia_enorme", "inaugurado_1979_riega_300000_hectareas", "conflicto_permanente_castilla_vs_levante_agua", "mayor_obra_hidraulica_española_siglo_XX"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/trasvase-tajo-segura-mayor-obra-hidraulica-de-espana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/trasvase-tajo-segura-mayor-obra-hidraulica-de-espana.png",
  },

  {
    id: "es_alm_plataforma_solar_tabernas",
    nombre: "Plataforma Solar de Almería — mayor laboratorio solar de Europa",
    emoji: "☀️",
    lat: 37.0894,
    lng: -2.3581,
    nivel: 2,
    categorias: ["ingenieria_civil", "energia_solar", "investigacion", "record"],
    tipo: "instalacion_energetica",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 80,
    cooldownMin: 55,
    intereses: ["mayor_laboratorio_solar_europa_desde_1981", "heliostat_campo_espejos_2700_unidades", "torre_solar_80m_concentra_luz_en_receptor", "2800_horas_sol_año_desierto_tabernas_ideal", "CIEMAT_investiga_hidrogeno_solar_y_desalacion"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/plataforma-solar-de-almeria-mayor-laboratorio-solar-de-europa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/plataforma-solar-de-almeria-mayor-laboratorio-solar-de-europa.png",
  },

  {
    id: "es_nav_parque_eolico_navarra",
    nombre: "Cordillera Pirenaica Navarra — pionera mundial en eólica",
    emoji: "💨",
    lat: 42.7833,
    lng: -1.65,
    nivel: 2,
    categorias: ["ingenieria_civil", "eolica", "energia", "renovable"],
    tipo: "parque_eolico",
    radioActivacionMetros: 5000,

    perfil: "ingenieria",
    prioridad: 75,
    cooldownMin: 55,
    intereses: ["navarra_primera_region_mundo_100pct_electrica_renovable_1_año_2023", "1300MW_instalados_eolica_pequeña_region", "parques_eolicos_1994_pioneros_españa", "molinos_500m_altura_viento_cantabrico_sin_obstaculos", "exporta_electricidad_al_resto_españa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cordillera-pirenaica-navarra-pionera-mundial-en-eolica.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/cordillera-pirenaica-navarra-pionera-mundial-en-eolica.png",
  },

  {
    id: "es_cor_presa_almodovar",
    nombre: "Central Hidroeléctrica de Iznájar — mayor embalse andaluz",
    emoji: "🌊",
    lat: 37.2544,
    lng: -4.3053,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "embalse", "hidraulica"],
    tipo: "presa",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 55,
    intereses: ["981_hm3_mayor_embalse_andalucia", "presa_arco_gravedad_122m_rio_genil", "abastece_agua_granada_malaga_cordoba", "construida_1960_69_plan_hidrologico_franquista", "turismo_nautico_surf_kayak_en_embalse"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-hidroelectrica-de-iznajar-mayor-embalse-andaluz.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/central-hidroelectrica-de-iznajar-mayor-embalse-andaluz.png",
  },

  {
    id: "es_ast_central_salime",
    nombre: "Presa de Salime — la Capilla Sixtina de la hidroeléctrica española",
    emoji: "🌊",
    lat: 43.2556,
    lng: -6.9853,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "arte", "hidroelectrica"],
    tipo: "presa",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 75,
    cooldownMin: 55,
    intereses: ["presa_boveda_doble_curvatura_127m_altura", "murales_genesio_diaz_arte_dentro_galeria_presa", "museo_etnografico_pueblos_sumergidos_bajo_embalse", "rio_navia_1954_inauguracion", "primera_presa_de_doble_boveda_en_españa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-salime-la-capilla-sixtina-de-la-hidroelectrica-espanola.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-salime-la-capilla-sixtina-de-la-hidroelectrica-espanola.png",
  },

  {
    id: "es_gip_tunel_san_adrian",
    nombre: "Túnel de San Adrián — paso medieval bajo el Aizkorri",
    emoji: "🚇",
    lat: 42.9442,
    lng: -2.3711,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel_natural", "medieval", "camino_santiago"],
    tipo: "tunel",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 70,
    cooldownMin: 50,
    intereses: ["tunel_natural_caliza_40m_longitud_970m_altitud", "camino_santiago_del_norte_durante_siglos", "ermita_rupestre_siglo_XI_en_interior", "primer_paso_natural_conocido_aizkorri", "ruta_jacobea_alternativa_a_la_costa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-san-adrian-paso-medieval-bajo-el-aizkorri.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-san-adrian-paso-medieval-bajo-el-aizkorri.png",
  },

  {
    id: "es_cant_faro_cabo_mayor",
    nombre: "Faro de Cabo Mayor — ingeniería de navegación del siglo XIX",
    emoji: "🗼",
    lat: 43.4944,
    lng: -3.7819,
    nivel: 2,
    categorias: ["ingenieria_civil", "faro", "maritima", "navegacion"],
    tipo: "faro",
    radioActivacionMetros: 2000,

    perfil: "ingenieria",
    prioridad: 68,
    cooldownMin: 50,
    intereses: ["faro_primera_orden_1839_luz_visible_26_millas_nauticas", "fresnel_lente_original_conservada", "automatizado_1983_antes_farero_vivia_dentro", "acantilado_calizo_90m_sobre_mar", "centro_arte_en_antiguos_cuarteles_farero"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/faro-de-cabo-mayor-ingenieria-de-navegacion-del-siglo-xix.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/faro-de-cabo-mayor-ingenieria-de-navegacion-del-siglo-xix.png",
  },

  {
    id: "es_cor_torre_hercules_faro",
    nombre: "Torre de Hércules — único faro romano activo del mundo",
    emoji: "🗼",
    lat: 43.3853,
    lng: -8.4003,
    nivel: 1,
    categorias: ["ingenieria_civil", "faro", "romano", "record"],
    tipo: "faro",
    radioActivacionMetros: 2500,

    perfil: "ingenieria",
    prioridad: 95,
    cooldownMin: 60,
    intereses: ["unico_faro_romano_activo_mundo_2000_años", "34m_torre_romana_mas_10m_añadidos_siglo_XVIII", "luz_LED_actual_visible_32_millas_nauticas", "patrimonio_humanidad_UNESCO_2009", "cimientos_sistema_rampa_helicoideal_sin_escaleras_original"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torre-de-hercules-unico-faro-romano-activo-del-mundo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/torre-de-hercules-unico-faro-romano-activo-del-mundo.png",
  },

  {
    id: "es_zgz_canal_imperial_aragon",
    nombre: "Canal Imperial de Aragón — 240 años regando el Ebro",
    emoji: "⛵",
    lat: 41.6561,
    lng: -0.8781,
    nivel: 2,
    categorias: ["ingenieria_civil", "canal", "riego", "ilustracion"],
    tipo: "canal",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 78,
    cooldownMin: 55,
    intereses: ["100km_canal_construido_1770_1790_ilustracion_española", "toma_agua_rio_aragon_en_navarra_riega_aragon", "primer_canal_navegable_de_españa", "esclusas_y_acueductos_obra_maestra_hidraulica_XVIII", "riego_30000_hectareas_y_agua_potable_zaragoza"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/canal-imperial-de-aragon-240-anos-regando-el-ebro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/canal-imperial-de-aragon-240-anos-regando-el-ebro.png",
  },

  {
    id: "es_rio_presa_gonzalez_lacasa",
    nombre: "Presa González Lacasa — presa de doble bóveda del Iregua",
    emoji: "🌊",
    lat: 42.3206,
    lng: -2.5628,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "hidroelectrica", "boveda"],
    tipo: "presa",
    radioActivacionMetros: 2500,

    perfil: "ingenieria",
    prioridad: 65,
    cooldownMin: 50,
    intereses: ["presa_doble_boveda_110m_altura_1947", "diseño_lorenzo_pardo_padre_hidraulica_española", "rio_iregua_afluente_ebro", "abastece_agua_logroño_200000_personas", "encañonada_sierras_cameros_caliza"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-gonzalez-lacasa-presa-de-doble-boveda-del-iregua.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-gonzalez-lacasa-presa-de-doble-boveda-del-iregua.png",
  },

  {
    id: "es_val_presa_contreras",
    nombre: "Presa de Contreras — arco en el cañón del Cabriel",
    emoji: "🌊",
    lat: 39.5328,
    lng: -1.4769,
    nivel: 2,
    categorias: ["ingenieria_civil", "presa", "cañon", "arco"],
    tipo: "presa",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 68,
    cooldownMin: 50,
    intereses: ["presa_arco_120m_altura_rio_cabriel", "858_hm3_capacidad_regadio_levante", "viaducto_A3_sobre_el_embalse_250m_altura_obra_arte", "cañon_cabriel_LIC_espacio_natural", "inaugurada_1973_abastece_cuenca_del_jucar"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-contreras-arco-en-el-canon-del-cabriel.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/presa-de-contreras-arco-en-el-canon-del-cabriel.png",
  },

  {
    id: "es_ast_tunel_pajares_ave",
    nombre: "Túnel de Pajares — 7º más largo de Europa (24,6 km)",
    emoji: "🚇",
    lat: 43.0011,
    lng: -5.7833,
    nivel: 1,
    categorias: ["ingenieria_civil", "tunel", "ave", "record"],
    tipo: "tunel",
    radioActivacionMetros: 8000,

    perfil: "ingenieria",
    prioridad: 97,
    cooldownMin: 65,
    intereses: ["24_6km_segundo_mas_largo_españa_septimo_europa", "profundidad_maxima_1005m_bajo_cordillera_cantabrica", "4000_millones_euros_inaugurado_noviembre_2023", "20_anos_construccion_con_filtraciones_agua_catastroficas", "5_tuneladoras_y_5000_trabajadores_simultaneos", "21_formaciones_geologicas_distintas_perforadas"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-pajares-7-mas-largo-de-europa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-pajares-7-mas-largo-de-europa.png",
  },

  {
    id: "es_gir_tunel_perthus_ave",
    nombre: "Túnel del Pertús — AVE Figueres-Perpiñán bajo los Pirineos",
    emoji: "🚇",
    lat: 42.4667,
    lng: 2.85,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "ave", "transfronterizo"],
    tipo: "tunel",
    radioActivacionMetros: 6000,

    perfil: "ingenieria",
    prioridad: 88,
    cooldownMin: 60,
    intereses: ["8_3km_tunel_AVE_transfronterizo_espana_francia", "conecta_red_ibérica_con_TGV_frances_2013", "primer_enlace_ferroviario_alta_velocidad_pirineos", "gestion_compartida_ADIF_y_RFF_france", "velocidad_maxima_300kmh_bajo_los_pirineos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-del-pertus-ave-figueres-perpinan-bajo-los-pirineos.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-del-pertus-ave-figueres-perpinan-bajo-los-pirineos.png",
  },

  {
    id: "es_gip_tunel_san_marcos_metro",
    nombre: "Túnel de Urola — AVE vasco bajo el Cantábrico",
    emoji: "🚇",
    lat: 43.2,
    lng: -2.3667,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "ferroviario", "vasco"],
    tipo: "tunel",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 75,
    cooldownMin: 55,
    intereses: ["tunel_bidasoa_8km_Y_vasca_alta_velocidad", "arcillas_y_areniscas_flysch_tectonicamente_complejas", "Y_vasca_conecta_bilbao_donostia_vitoria", "presupuesto_4600_millones_toda_Y_vasca", "conexion_futura_TGV_frances_por_irun"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-urola-ave-vasco-bajo-el-cantabrico.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-urola-ave-vasco-bajo-el-cantabrico.png",
  },

  {
    id: "es_hue_tunel_somport",
    nombre: "Túnel de Somport — el más largo de carretera en España (8,6 km)",
    emoji: "🚇",
    lat: 42.7897,
    lng: -0.5239,
    nivel: 1,
    categorias: ["ingenieria_civil", "tunel", "carretera", "pirineos"],
    tipo: "tunel",
    radioActivacionMetros: 4000,

    perfil: "ingenieria",
    prioridad: 92,
    cooldownMin: 60,
    intereses: ["8608m_tunel_carretera_mas_largo_españa", "une_jaca_espana_con_pau_francia_bajo_pirineos", "construccion_12_años_1992_2003", "unico_tubo_bidireccional_medida_de_seguridad_critica", "salida_emergencia_cada_400m_ventilacion_longitudinal", "reemplaza_al_peligroso_puerto_de_somport"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-somport-el-mas-largo-de-carretera-en-espana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-somport-el-mas-largo-de-carretera-en-espana.png",
  },

  {
    id: "es_lle_tunel_cadi",
    nombre: "Túnel del Cadí — la autopista bajo el Prepirineo (5 km)",
    emoji: "🚇",
    lat: 42.2611,
    lng: 1.7317,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "prepirineo"],
    tipo: "tunel",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 78,
    cooldownMin: 55,
    intereses: ["5026m_tercer_tunel_carretera_mas_largo_espana", "conecta_barcelona_con_val_de_aran_y_cerdanya", "abierto_1984_caliza_y_pizarra_sierra_cadi", "dos_tubos_unidireccionales_con_galeria_de_seguridad_central", "peaje_unico_tunel_montaña_cataluña"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-del-cadi-la-autopista-bajo-el-prepirineo.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-del-cadi-la-autopista-bajo-el-prepirineo.png",
  },

  {
    id: "es_ast_tunel_negrón",
    nombre: "Túnel de Negrón — autovía del Cantábrico bajo la montaña",
    emoji: "🚇",
    lat: 43.5256,
    lng: -5.8958,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "asturias"],
    tipo: "tunel",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 50,
    intereses: ["4102m_tunel_carretera_mas_largo_asturias", "autovía_A8_del_cantabrico", "caliza_carbonífera_extremamente_fracturada", "accidente_2009_reformas_seguridad_posteriores", "une_oviedo_con_costa_occidental_asturiana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-negron-autovia-del-cantabrico-bajo-la-montana.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-negron-autovia-del-cantabrico-bajo-la-montana.png",
  },

  {
    id: "es_gir_tunel_bracons",
    nombre: "Túnel de Bracons — Garrotxa y Osona bajo el alto de Bracons",
    emoji: "🚇",
    lat: 42.0853,
    lng: 2.4622,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "cataluña"],
    tipo: "tunel",
    radioActivacionMetros: 2500,

    perfil: "ingenieria",
    prioridad: 68,
    cooldownMin: 50,
    intereses: ["4556m_segundo_tunel_carretera_mas_largo_girona", "conecta_comarca_garrotxa_osona_sin_pasar_alto_bracons", "volcanes_y_basaltos_garrotxa_zona_volcanica_unica", "c17_carretera_vic_olot", "reduce_15_minutos_y_elimina_curvas_peligrosas_en_nieve"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-bracons-garrotxa-y-osona-bajo-el-alto-de-bracons.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-bracons-garrotxa-y-osona-bajo-el-alto-de-bracons.png",
  },

  {
    id: "es_leo_tunel_pajares_carretera",
    nombre: "Túnel de Pajares AP-66 — el paso de montaña bajo la ruta de la Plata",
    emoji: "🚇",
    lat: 42.9728,
    lng: -5.7861,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "autopista"],
    tipo: "tunel",
    radioActivacionMetros: 3500,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 52,
    intereses: ["4144m_autopista_AP66_via_de_la_plata", "alternativa_al_peligroso_puerto_de_pajares_N630", "inaugurado_en_dos_fases_1992_y_1997", "caliza_cambrica_con_multiples_acuiferos_activos", "salva_550m_desnivel_entre_meseta_y_asturias"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-pajares-ap-66-el-paso-de-montana-bajo-la-ruta-de-la-plata.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-pajares-ap-66-el-paso-de-montana-bajo-la-ruta-de-la-plata.png",
  },

  {
    id: "es_ala_tunel_isuskitza",
    nombre: "Túnel de Isuskitza — AP-1 entre Álava y Gipuzkoa",
    emoji: "🚇",
    lat: 43.0167,
    lng: -2.5833,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "vasco"],
    tipo: "tunel",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 68,
    cooldownMin: 50,
    intereses: ["3377m_autopista_AP1_vitoria_san_sebastian", "cruza_limite_provincial_alava_gipuzkoa_bajo_sierra_aizkorri", "dos_tubos_circulares_con_galeria_peatonal_evacuacion", "flysch_eoceno_ardilla_y_margas_dificil_impermeabilizacion", "nudo_burgos_irun_corredor_mas_transitado_norte_espana"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-isuskitza-ap-1-entre-alava-y-gipuzkoa.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-isuskitza-ap-1-entre-alava-y-gipuzkoa.png",
  },

  {
    id: "es_seg_tunel_alto_leon",
    nombre: "Túnel de Alto del León — A-6 entre Madrid y Galicia",
    emoji: "🚇",
    lat: 40.6833,
    lng: -4.15,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "sierra_guadarrama"],
    tipo: "tunel",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 70,
    cooldownMin: 50,
    intereses: ["2900m_tunel_carretera_sierra_guadarrama_A6", "evita_el_paso_por_el_puerto_de_los_leones_1.511m", "dos_tubos_paralelos_inaugurados_1972_y_2005", "granito_y_gneis_con_cobertura_400m", "corredor_madrid_galicia_mas_de_100000_vehiculos_dia"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-alto-del-leon-a-6-entre-madrid-y-galicia.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-alto-del-leon-a-6-entre-madrid-y-galicia.png",
  },

  {
    id: "es_mal_tunel_malaga_puerto",
    nombre: "Túneles de Málaga — la M-30 andaluza bajo el monte Gibralfaro",
    emoji: "🚇",
    lat: 36.7256,
    lng: -4.4158,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "urbano", "malaga"],
    tipo: "tunel",
    radioActivacionMetros: 2500,

    perfil: "ingenieria",
    prioridad: 68,
    cooldownMin: 50,
    intereses: ["sistema_3_tuneles_bajo_gibralfaro_y_monte_victoria", "soterramiento_ronda_ciudad_norte_2002_2007", "descongestiono_malaga_centro_eliminando_22km_atascos", "caliza_triasica_y_filitas_geologicamente_complejas", "conecta_puerto_con_aeropuerto_sin_semaforos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tuneles-de-malaga-la-m-30-andaluza-bajo-el-monte-gibralfaro.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tuneles-de-malaga-la-m-30-andaluza-bajo-el-monte-gibralfaro.png",
  },

  {
    id: "es_nav_tunel_irurzun",
    nombre: "Túnel de Almandoz — N-121 bajo la sierra de Aralar",
    emoji: "🚇",
    lat: 43.0833,
    lng: -1.7167,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "navarra"],
    tipo: "tunel",
    radioActivacionMetros: 2500,

    perfil: "ingenieria",
    prioridad: 65,
    cooldownMin: 48,
    intereses: ["2765m_under_sierra_aralar_N121_pamplona_san_sebastian", "caliza_muy_karstificada_grandes_cavidades_encontradas", "evita_el_sinuoso_paso_almandoz_con_nieve_peligroso", "inaugurado_2001_unico_tubo_bidireccional", "conecta_navarra_con_gipuzkoa_por_valle_del_bidasoa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-almandoz-n-121-bajo-la-sierra-de-aralar.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-almandoz-n-121-bajo-la-sierra-de-aralar.png",
  },

  {
    id: "es_pon_tunel_folgoso_autovia",
    nombre: "Túnel de Folgoso — A-57 bajo el Monte Castrove",
    emoji: "🚇",
    lat: 42.5,
    lng: -8.65,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "galicia"],
    tipo: "tunel",
    radioActivacionMetros: 2500,

    perfil: "ingenieria",
    prioridad: 65,
    cooldownMin: 48,
    intereses: ["3500m_uno_de_los_tuneles_mas_largos_galicia", "autovía_A57_pontevedra_marin", "granito_hercinico_gallego_muy_fracturado", "evita_el_paso_por_cumbre_castrove_400m", "parte_del_corredor_atlantico_ferroviario_y_viario"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-folgoso-a-57-bajo-el-monte-castrove.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-folgoso-a-57-bajo-el-monte-castrove.png",
  },

  {
    id: "es_hue_tunel_monrepós",
    nombre: "Túnel de Monrepós — A-23 bajo el Prepirineo oscense",
    emoji: "🚇",
    lat: 42.2722,
    lng: -0.35,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "pirineos"],
    tipo: "tunel",
    radioActivacionMetros: 3000,

    perfil: "ingenieria",
    prioridad: 68,
    cooldownMin: 50,
    intereses: ["3005m_autovia_A23_huesca_jaca_bajo_sierra_guara", "evita_el_peligroso_puerto_monrepos_1085m_frecuentes_nevadas", "inaugurado_2002_caliza_y_yesos_triasicos", "conecta_zaragoza_con_pirineos_y_valle_de_arán", "entrada_a_los_grandes_macizos_pirenaicos_oscenses"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-monrepos-a-23-bajo-el-prepirineo-oscense.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-monrepos-a-23-bajo-el-prepirineo-oscense.png",
  },

  {
    id: "es_bar_tunel_tibidabo_metro",
    nombre: "Túneles del Metro de Barcelona — 110 km bajo la ciudad",
    emoji: "🚇",
    lat: 41.3878,
    lng: 2.1611,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "metro", "urbano"],
    tipo: "tunel",
    radioActivacionMetros: 5000,

    perfil: "ingenieria",
    prioridad: 75,
    cooldownMin: 52,
    intereses: ["110km_tuneles_bajo_barcelona_mayor_red_metro_espana", "tuneladoras_EPB_presion_tierra_en_limos_delta_llobregat", "linea_9_metro_mas_profundo_40m_y_mas_largo_47km", "roca_granitica_y_arenas_deltaicas_misma_ciudad", "primera_linea_metro_1924_la_primera_del_sur_europa"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tuneles-del-metro-de-barcelona-110-km-bajo-la-ciudad.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tuneles-del-metro-de-barcelona-110-km-bajo-la-ciudad.png",
  },

  {
    id: "es_lle_tunel_vielha_old_new",
    nombre: "Túneles de Vielha I y II — Val d'Aran comunicado todo el año",
    emoji: "🚇",
    lat: 42.7253,
    lng: 0.8833,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "carretera", "aislamiento"],
    tipo: "tunel",
    radioActivacionMetros: 3500,

    perfil: "ingenieria",
    prioridad: 75,
    cooldownMin: 52,
    intereses: ["tunel_I_5230m_primer_tunel_montaña_espana_1948_presos_politicos", "tunel_II_5952m_inaugurado_1999_paralelo_al_original", "val_d_aran_incomunicado_cada_invierno_antes_de_1948", "macizo_maladeta_granito_y_pizarra_perforado_bajo_2000m_roca", "unica_comarca_española_con_territorio_vertiente_norte_pirineos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tuneles-de-vielha-i-y-ii-val-daran-comunicado-todo-el-ano.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tuneles-de-vielha-i-y-ii-val-daran-comunicado-todo-el-ano.png",
  },

  {
    id: "es_cad_tunel_suma",
    nombre: "Túnel de Gibraltar — el sueño del paso bajo el Estrecho",
    emoji: "🚇",
    lat: 36,
    lng: -5.35,
    nivel: 2,
    categorias: ["ingenieria_civil", "tunel", "proyecto", "estrecho"],
    tipo: "tunel",
    radioActivacionMetros: 6000,

    perfil: "ingenieria",
    prioridad: 72,
    cooldownMin: 55,
    intereses: ["proyecto_estudio_38km_bajo_estrecho_espana_marruecos", "profundidad_300m_mayor_desafio_geologico_mundial", "canal_estrecho_5km_ancho_minimo_corrientes_extremas", "estudios_desde_1980_sin_proyecto_definitivo_aun", "conectaría_europa_con_africa_en_tren_30_minutos"],
    sponsor: {
      "url": "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-gibraltar-el-sueno-del-paso-bajo-el-estrecho.png"
    },
    // eventos: [{ id, titulo, descripcion, startDate, endDate, importancia }],
    imagenUrl: "https://raw.githubusercontent.com/CarlosVelasco1998/raidio-backend/main/poi-images/tunel-de-gibraltar-el-sueno-del-paso-bajo-el-estrecho.png",
  },

];
