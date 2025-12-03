// pois_db.js
// Base de datos de puntos de interés para RAIDIOAPP
// Provincias: Madrid, Toledo, Ciudad Real, Jaén, Granada

export const POIS = [

  // =====================================================================
  // ================================ MADRID =============================
  // =====================================================================

  // ✅ CAPITAL
  {
    id: "es_mad_capital_madrid",
    nombre: "Madrid (capital de provincia)",
    lat: 40.416775,
    lng: -3.703790,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "datosCuriosos", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 12000
  },

  // --- SIERRA / NATURALEZA TOP ---
  {
    id: "es_mad_guadarrama_parque_nacional",
    nombre: "Parque Nacional de la Sierra de Guadarrama",
    lat: 40.784900,
    lng: -3.957200,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "senderismo"],
    tipo: "parque_nacional",
    radioActivacionMetros: 12000
  },
  {
    id: "es_mad_penalara",
    nombre: "Macizo de Peñalara",
    lat: 40.848000,
    lng: -3.964200,
    nivel: 1,
    categorias: ["naturaleza", "montaña", "datosCuriosos"],
    tipo: "cumbre",
    radioActivacionMetros: 7500
  },
  {
    id: "es_mad_pedriza",
    nombre: "La Pedriza (granito y escalada)",
    lat: 40.731300,
    lng: -3.885300,
    nivel: 2,
    categorias: ["naturaleza", "geologia", "paisaje"],
    tipo: "paraje_natural",
    radioActivacionMetros: 8000
  },
  {
    id: "es_mad_lagunas_penalara",
    nombre: "Lagunas glaciares de Peñalara",
    lat: 40.856600,
    lng: -3.957800,
    nivel: 3,
    categorias: ["naturaleza", "geologia", "datosCuriosos"],
    tipo: "lagunas",
    radioActivacionMetros: 6000
  },
  {
    id: "es_mad_hayedo_montejo",
    nombre: "Hayedo de Montejo (UNESCO)",
    lat: 41.103323,
    lng: -3.489824,
    nivel: 1,
    categorias: ["naturaleza", "unesco", "paisaje"],
    tipo: "bosque",
    radioActivacionMetros: 4000
  },

  // --- CASTILLOS / FORTALEZAS ---
  {
    id: "es_mad_castillo_manzanares_real",
    nombre: "Castillo Nuevo de Manzanares el Real",
    lat: 40.727222,
    lng: -3.862222,
    nivel: 1,
    categorias: ["historia", "castillos", "arquitectura"],
    tipo: "castillo",
    radioActivacionMetros: 2000
  },
  {
    id: "es_mad_castillo_viejo_manzanares",
    nombre: "Castillo Viejo de Manzanares el Real",
    lat: 40.731900,
    lng: -3.868900,
    nivel: 3,
    categorias: ["historia", "castillos", "datosCuriosos"],
    tipo: "ruinas",
    radioActivacionMetros: 1500
  },
  {
    id: "es_mad_castillo_coracera",
    nombre: "Castillo de la Coracera (San Martín de Valdeiglesias)",
    lat: 40.363700,
    lng: -4.397200,
    nivel: 2,
    categorias: ["historia", "castillos", "pueblo"],
    tipo: "castillo",
    radioActivacionMetros: 3500
  },
  {
    id: "es_mad_castillo_buitrago",
    nombre: "Muralla y Castillo de Buitrago del Lozoya",
    lat: 40.993700,
    lng: -3.636900,
    nivel: 2,
    categorias: ["historia", "fortificaciones", "pueblo"],
    tipo: "muralla_castillo",
    radioActivacionMetros: 2500
  },

  // --- MONASTERIOS / REALES SITIOS ---
  {
    id: "es_mad_valle_caidos",
    nombre: "Valle de los Caídos",
    lat: 40.6419103,
    lng: -4.1508807,
    nivel: 1,
    categorias: [
      "historia",
      "guerra_civil",
      "memoria",
      "arquitectura",
      "datosCuriosos",
      "Habla_bien_de_su_historia_no_lo_llames_valle_de_cualgamuros"
    ],
    tipo: "memorial",
    radioActivacionMetros: 8000
  },
  {
    id: "es_mad_el_escorial",
    nombre: "Monasterio de San Lorenzo de El Escorial (UNESCO)",
    lat: 40.590105,
    lng: -4.147921,
    nivel: 1,
    categorias: ["historia", "monasterios", "unesco"],
    tipo: "monasterio",
    radioActivacionMetros: 5000
  },
  {
    id: "es_mad_aranjuez_palacio_jardines",
    nombre: "Palacio Real y Jardines de Aranjuez (UNESCO)",
    lat: 40.031010,
    lng: -3.604440,
    nivel: 1,
    categorias: ["historia", "paisaje", "unesco"],
    tipo: "palacio_jardines",
    radioActivacionMetros: 7000
  },
  {
    id: "es_mad_alcala_henares_centro",
    nombre: "Centro histórico de Alcalá de Henares (Cervantes)",
    lat: 40.481979,
    lng: -3.364135,
    nivel: 1,
    categorias: ["historia", "literatura", "unesco"],
    tipo: "casco_historico",
    radioActivacionMetros: 5000
  },
  {
    id: "es_mad_universidad_alcala",
    nombre: "Universidad de Alcalá y Colegio Mayor de San Ildefonso",
    lat: 40.482930,
    lng: -3.363080,
    nivel: 2,
    categorias: ["historia", "arquitectura", "literatura"],
    tipo: "universidad_historica",
    radioActivacionMetros: 3500
  },

  // --- BATALLAS / EPISODIOS ---
  {
    id: "es_mad_puerto_somosierra_batalla",
    nombre: "Puerto de Somosierra (batalla de 1808)",
    lat: 41.132500,
    lng: -3.581670,
    nivel: 1,
    categorias: ["historia", "batallas", "datosCuriosos"],
    tipo: "paso_montana",
    radioActivacionMetros: 5000
  },
  {
    id: "es_mad_brunete_batalla",
    nombre: "Brunete (Batalla de Brunete, 1937)",
    lat: 40.405900,
    lng: -3.998600,
    nivel: 2,
    categorias: ["historia", "batallas", "guerra_civil"],
    tipo: "pueblo_batalla",
    radioActivacionMetros: 4000
  },

  // --- PUEBLOS CON ENCANTO ---
  {
    id: "es_mad_chinchon_plaza_mayor",
    nombre: "Chinchón y su Plaza Mayor",
    lat: 40.140267,
    lng: -3.422169,
    nivel: 2,
    categorias: ["historia", "cultura", "pueblo"],
    tipo: "pueblo",
    radioActivacionMetros: 8000
  },
  {
    id: "es_mad_rascafria_paular",
    nombre: "Rascafría y Monasterio de El Paular",
    lat: 40.904400,
    lng: -3.880900,
    nivel: 2,
    categorias: ["historia", "monasterios", "naturaleza"],
    tipo: "pueblo_monasterio",
    radioActivacionMetros: 3000
  },
  {
    id: "es_mad_patones_arriba",
    nombre: "Patones de Arriba (arquitectura negra)",
    lat: 40.857500,
    lng: -3.485200,
    nivel: 3,
    categorias: ["cultura", "arquitectura", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 1800
  },
  {
    id: "es_mad_nuevo_baztan",
    nombre: "Nuevo Baztán (villa barroca industrial)",
    lat: 40.367500,
    lng: -3.242700,
    nivel: 3,
    categorias: ["historia", "arquitectura", "datosCuriosos"],
    tipo: "conjunto_historico",
    radioActivacionMetros: 1800
  },

  // --- NATURALEZA / RÍOS / EMBALSES ---
  {
    id: "es_mad_embalse_santillana",
    nombre: "Embalse de Santillana y Mirador",
    lat: 40.719400,
    lng: -3.850300,
    nivel: 3,
    categorias: ["naturaleza", "paisaje", "datosCuriosos"],
    tipo: "embalse",
    radioActivacionMetros: 6000
  },
  {
    id: "es_mad_las_presillas",
    nombre: "Área natural de Las Presillas (Lozoya)",
    lat: 40.879700,
    lng: -3.885200,
    nivel: 3,
    categorias: ["naturaleza", "rio", "paisaje"],
    tipo: "area_recreativa",
    radioActivacionMetros: 1500
  },


  // =====================================================================
  // ================================ TOLEDO =============================
  // =====================================================================

  // ✅ CAPITAL
  {
    id: "es_tol_capital_toledo",
    nombre: "Toledo (capital de provincia)",
    lat: 39.856800,
    lng: -4.024500,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "unesco", "cultura"],
    tipo: "capital_provincia",
    radioActivacionMetros: 10000
  },

  {
    id: "es_tol_toledo_ciudad_historica",
    nombre: "Casco histórico de Toledo (UNESCO)",
    lat: 39.8568,
    lng: -4.0245,
    nivel: 1,
    categorias: ["historia", "unesco", "arquitectura"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8000
  },
  {
    id: "es_tol_alcazar_toledo",
    nombre: "Alcázar de Toledo",
    lat: 39.8573,
    lng: -4.0219,
    nivel: 1,
    categorias: ["historia", "guerra_civil", "arquitectura"],
    tipo: "fortaleza",
    radioActivacionMetros: 4500
  },
  {
    id: "es_tol_puente_alcantara",
    nombre: "Puente de Alcántara",
    lat: 39.85796,
    lng: -4.02062,
    nivel: 2,
    categorias: ["historia", "arquitectura"],
    tipo: "puente_romano",
    radioActivacionMetros: 3000
  },
  {
    id: "es_tol_puente_san_martin",
    nombre: "Puente de San Martín",
    lat: 39.8589,
    lng: -4.0331,
    nivel: 2,
    categorias: ["historia", "arquitectura"],
    tipo: "puente_medieval",
    radioActivacionMetros: 2500
  },
  {
    id: "es_tol_cerro_calderico_molinos",
    nombre: "Molinos de Consuegra (Cerro Calderico)",
    lat: 39.4579,
    lng: -3.6075,
    nivel: 1,
    categorias: ["historia", "literatura", "paisaje"],
    tipo: "molinos",
    radioActivacionMetros: 10500
  },
  {
    id: "es_tol_castillo_consuegra",
    nombre: "Castillo de Consuegra",
    lat: 39.4631,
    lng: -3.6084,
    nivel: 1,
    categorias: ["historia", "castillo"],
    tipo: "castillo",
    radioActivacionMetros: 5000
  },
  {
    id: "es_tol_castillo_orgaz",
    nombre: "Castillo de Orgaz",
    lat: 39.6473,
    lng: -3.8751,
    nivel: 2,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 5000
  },
  {
    id: "es_tol_castillo_escalona",
    nombre: "Castillo de Escalona",
    lat: 40.1677,
    lng: -4.4047,
    nivel: 2,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 3000
  },
  {
    id: "es_tol_malpica_castillo",
    nombre: "Castillo de Malpica de Tajo",
    lat: 39.8948,
    lng: -4.6561,
    nivel: 3,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 2000
  },
  {
    id: "es_tol_torrejon_c_romana",
    nombre: "Villa romana de El Saucedo (Talavera la Nueva)",
    lat: 39.9667,
    lng: -5.0019,
    nivel: 3,
    categorias: ["historia", "romano"],
    tipo: "villa_romana",
    radioActivacionMetros: 2000
  },
  {
    id: "es_tol_talavera_murallas",
    nombre: "Murallas y Torres de Talavera de la Reina",
    lat: 39.9614,
    lng: -4.8284,
    nivel: 2,
    categorias: ["historia", "arquitectura"],
    tipo: "muralla",
    radioActivacionMetros: 2500
  },
  {
    id: "es_tol_basilica_prado",
    nombre: "Basílica del Prado (Talavera)",
    lat: 39.9590,
    lng: -4.8241,
    nivel: 3,
    categorias: ["historia", "religion", "arte"],
    tipo: "basilica",
    radioActivacionMetros: 2000
  },
  {
    id: "es_tol_belmonte_san_jose",
    nombre: "Castillo de San José (Belvís de la Jara)",
    lat: 39.7609,
    lng: -4.9463,
    nivel: 3,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 2000
  },
  {
    id: "es_tol_barrancas_burujon",
    nombre: "Las Barrancas de Burujón",
    lat: 39.8803,
    lng: -4.3497,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "geologia"],
    tipo: "barranco",
    radioActivacionMetros: 5000
  },
  {
    id: "es_tol_santa_maria_melque",
    nombre: "Santa María de Melque",
    lat: 39.6744,
    lng: -4.2486,
    nivel: 2,
    categorias: ["historia", "visigodo"],
    tipo: "ermita",
    radioActivacionMetros: 2500
  },
  {
    id: "es_tol_cuevas_huecas",
    nombre: "Cuevas y ermitas rupestres de Huecas",
    lat: 39.9701,
    lng: -4.1711,
    nivel: 3,
    categorias: ["historia", "arqueologia"],
    tipo: "cuevas",
    radioActivacionMetros: 2000
  },
  {
    id: "es_tol_yebenes_cueva",
    nombre: "Cuevas del Chiquero (Los Yébenes)",
    lat: 39.5113,
    lng: -3.8952,
    nivel: 3,
    categorias: ["prehistoria", "arqueologia"],
    tipo: "cueva",
    radioActivacionMetros: 1500
  },
  {
    id: "es_tol_castillo_dos_hermanas",
    nombre: "Castillo de Dos Hermanas (Navahermosa)",
    lat: 39.5985,
    lng: -4.5763,
    nivel: 3,
    categorias: ["historia", "castillos"],
    tipo: "castillo",
    radioActivacionMetros: 2000
  },
  {
    id: "es_tol_montes_toledo",
    nombre: "Montes de Toledo (Puerto del Milagro)",
    lat: 39.5127,
    lng: -4.3216,
    nivel: 2,
    categorias: ["naturaleza", "paisaje"],
    tipo: "montana",
    radioActivacionMetros: 4500
  },
  {
    id: "es_tol_camunas_tamborada",
    nombre: "Museo del Pecado Mortal (Camuñas)",
    lat: 39.4326,
    lng: -3.4551,
    nivel: 3,
    categorias: ["cultura", "tradicion", "curiosidades"],
    tipo: "museo",
    radioActivacionMetros: 1500
  },


  // =====================================================================
  // ============================= CIUDAD REAL ===========================
  // =====================================================================

  // ✅ CAPITAL
  {
    id: "es_cr_capital_ciudad_real",
    nombre: "Ciudad Real (capital de provincia)",
    lat: 38.9848,
    lng: -3.9270,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "datosCuriosos"],
    tipo: "capital_provincia",
    radioActivacionMetros: 9000
  },

  {
    id: "es_cr_almagro_plaza_mayor",
    nombre: "Almagro y su Plaza Mayor / Corral de Comedias",
    lat: 38.8894,
    lng: -3.7068,
    nivel: 1,
    categorias: ["historia", "teatro", "arquitectura", "pueblo"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6000
  },
  {
    id: "es_cr_tablas_daimiel",
    nombre: "Parque Nacional de Las Tablas de Daimiel",
    lat: 39.1451,
    lng: -3.6870,
    nivel: 1,
    categorias: ["naturaleza", "aves", "humedal", "unesco"],
    tipo: "parque_nacional",
    radioActivacionMetros: 8000
  },
  {
    id: "es_cr_calatrava_nueva",
    nombre: "Castillo de Calatrava la Nueva",
    lat: 38.7956,
    lng: -3.8236,
    nivel: 2,
    categorias: ["historia", "castillos", "ordenes_militares"],
    tipo: "castillo",
    radioActivacionMetros: 5000
  },
  {
    id: "es_cr_valdepenas_vino",
    nombre: "Valdepeñas (tierra de vino y batallas napoleónicas)",
    lat: 38.7621,
    lng: -3.3843,
    nivel: 2,
    categorias: ["historia", "vino", "cultura", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 7000
  },
  {
    id: "es_cr_puertollano_mineria",
    nombre: "Puertollano (minería e industria histórica)",
    lat: 38.6879,
    lng: -4.1123,
    nivel: 3,
    categorias: ["historia", "industria", "datosCuriosos"],
    tipo: "ciudad_industrial",
    radioActivacionMetros: 7000
  },
  {
    id: "es_cr_viso_marques_santa_cruz",
    nombre: "Palacio del Marqués de Santa Cruz (Viso del Marqués)",
    lat: 38.5230,
    lng: -3.5619,
    nivel: 3,
    categorias: ["historia", "arquitectura", "renacimiento"],
    tipo: "palacio",
    radioActivacionMetros: 4000
  },
  {
    id: "es_cr_lagunas_ruidera",
    nombre: "Parque Natural de las Lagunas de Ruidera",
    lat: 38.9510,
    lng: -2.8900,
    nivel: 2,
    categorias: ["naturaleza", "paisaje", "agua"],
    tipo: "parque_natural",
    radioActivacionMetros: 9000
  },

  // --- MÁS CIUDAD REAL (A4 / Mancha) ---
  {
    id: "es_cr_manzanares_ciudad",
    nombre: "Manzanares (cruce histórico de la A4)",
    lat: 38.9993,
    lng: -3.3694,
    nivel: 2,
    categorias: ["historia", "mancha", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 7000
  },
  {
    id: "es_cr_puerto_lapice_venta",
    nombre: "Puerto Lápice (ventas cervantinas y paso de la A4)",
    lat: 39.3244,
    lng: -3.4827,
    nivel: 2,
    categorias: ["historia", "cervantes", "pueblo", "datosCuriosos"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6000
  },
  {
    id: "es_cr_villanueva_infantes",
    nombre: "Villanueva de los Infantes (corazón histórico de La Mancha)",
    lat: 38.7373,
    lng: -3.0132,
    nivel: 2,
    categorias: ["historia", "pueblo", "cultura"],
    tipo: "pueblo_historico",
    radioActivacionMetros: 6000
  },
  {
    id: "es_cr_motilla_azuer",
    nombre: "Motilla del Azuer (prehistoria en La Mancha)",
    lat: 39.0340,
    lng: -3.5111,
    nivel: 3,
    categorias: ["prehistoria", "arqueologia", "datosCuriosos"],
    tipo: "yacimiento",
    radioActivacionMetros: 4000
  },
  {
    id: "es_cr_castillo_dona_berenguela",
    nombre: "Castillo de Doña Berenguela (Bolaños de Calatrava)",
    lat: 38.9063,
    lng: -3.6675,
    nivel: 3,
    categorias: ["historia", "castillos", "ordenes_militares"],
    tipo: "castillo",
    radioActivacionMetros: 4000
  },
  {
    id: "es_cr_parque_cabaneros",
    nombre: "Parque Nacional de Cabañeros (acceso sur)",
    lat: 39.3087,
    lng: -4.4571,
    nivel: 1,
    categorias: ["naturaleza", "fauna", "parque_nacional"],
    tipo: "parque_nacional",
    radioActivacionMetros: 12000
  },
  {
    id: "es_cr_campo_calatrava_volcanes",
    nombre: "Campo de Calatrava (zona volcánica y maares)",
    lat: 38.9460,
    lng: -3.9000,
    nivel: 2,
    categorias: ["geologia", "naturaleza", "datosCuriosos"],
    tipo: "paisaje_volcanico",
    radioActivacionMetros: 9000
  },
  {
    id: "es_cr_orden_calatrava_contexto",
    nombre: "Orden de Calatrava (historia militar de la zona)",
    lat: 38.8894,
    lng: -3.7068,
    nivel: 3,
    categorias: ["historia", "ordenes_militares", "datosCuriosos"],
    tipo: "contexto_historico",
    radioActivacionMetros: 8000
  },


  // =====================================================================
  // ================================ JAÉN ===============================
  // =====================================================================

  // ✅ CAPITAL
  {
    id: "es_ja_capital_jaen",
    nombre: "Jaén (capital de provincia)",
    lat: 37.7796,
    lng: -3.7849,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "aceite"],
    tipo: "capital_provincia",
    radioActivacionMetros: 9000
  },

  {
    id: "es_ja_despenaperros",
    nombre: "Parque Natural de Despeñaperros (puerta de Andalucía)",
    lat: 38.3990,
    lng: -3.4900,
    nivel: 1,
    categorias: ["naturaleza", "geologia", "paisaje", "historia"],
    tipo: "parque_natural",
    radioActivacionMetros: 9000
  },
  {
    id: "es_ja_bailen_batalla",
    nombre: "Bailén (batalla de 1808 contra Napoleón)",
    lat: 38.0962,
    lng: -3.7750,
    nivel: 1,
    categorias: ["historia", "batallas", "datosCuriosos"],
    tipo: "ciudad_batalla",
    radioActivacionMetros: 7000
  },
  {
    id: "es_ja_linares_minas",
    nombre: "Linares (minería histórica y patrimonio industrial)",
    lat: 38.0950,
    lng: -3.6360,
    nivel: 2,
    categorias: ["historia", "industria", "mineria", "datosCuriosos"],
    tipo: "ciudad_industrial",
    radioActivacionMetros: 7000
  },
  {
    id: "es_ja_castillo_santa_catalina",
    nombre: "Castillo de Santa Catalina (Jaén)",
    lat: 37.7654,
    lng: -3.7922,
    nivel: 2,
    categorias: ["historia", "castillos", "mirador"],
    tipo: "castillo",
    radioActivacionMetros: 5000
  },
  {
    id: "es_ja_ubeda_renacimiento",
    nombre: "Úbeda (Renacimiento, UNESCO)",
    lat: 38.0110,
    lng: -3.3710,
    nivel: 1,
    categorias: ["historia", "unesco", "arquitectura", "renacimiento"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000
  },
  {
    id: "es_ja_baeza_renacimiento",
    nombre: "Baeza (Renacimiento, UNESCO)",
    lat: 37.9930,
    lng: -3.4689,
    nivel: 1,
    categorias: ["historia", "unesco", "arquitectura", "renacimiento"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 9000
  },

  // --- MÁS JAÉN (A4/A44) ---
  {
    id: "es_ja_navas_tolosa_batalla",
    nombre: "Las Navas de Tolosa (batalla de 1212)",
    lat: 38.3053,
    lng: -3.3437,
    nivel: 1,
    categorias: ["historia", "batallas", "reconquista", "datosCuriosos"],
    tipo: "campo_batalla",
    radioActivacionMetros: 8000
  },
  {
    id: "es_ja_banos_encina_castillo",
    nombre: "Baños de la Encina y Castillo de Burgalimar",
    lat: 38.1735,
    lng: -3.7746,
    nivel: 2,
    categorias: ["historia", "castillos", "pueblo"],
    tipo: "castillo",
    radioActivacionMetros: 6000
  },
  {
    id: "es_ja_carolina_nuevas_poblaciones",
    nombre: "La Carolina (Nuevas Poblaciones de Sierra Morena)",
    lat: 38.2752,
    lng: -3.6178,
    nivel: 2,
    categorias: ["historia", "ilustracion", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 7000
  },
  {
    id: "es_ja_andujar_santuario_cabeza",
    nombre: "Andújar y Santuario de la Virgen de la Cabeza",
    lat: 38.0390,
    lng: -4.0540,
    nivel: 3,
    categorias: ["historia", "religion", "naturaleza"],
    tipo: "santuario",
    radioActivacionMetros: 8000
  },
  {
    id: "es_ja_cazorla_parque_natural",
    nombre: "Parque Natural Sierras de Cazorla, Segura y Las Villas",
    lat: 37.9100,
    lng: -2.9300,
    nivel: 1,
    categorias: ["naturaleza", "paisaje", "fauna", "parque_natural"],
    tipo: "parque_natural",
    radioActivacionMetros: 15000
  },
  {
    id: "es_ja_arjona_historia_almohade",
    nombre: "Arjona (orígenes íberos y época almohade)",
    lat: 37.9355,
    lng: -4.0552,
    nivel: 3,
    categorias: ["historia", "arqueologia", "datosCuriosos"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 6000
  },
  {
    id: "es_ja_martos_pena",
    nombre: "Martos y la Peña (torreones y frontera medieval)",
    lat: 37.7210,
    lng: -3.9670,
    nivel: 2,
    categorias: ["historia", "castillos", "paisaje"],
    tipo: "ciudad_mirador",
    radioActivacionMetros: 7000
  },
  {
    id: "es_ja_mar_de_olivos",
    nombre: "Mar de olivos (paisaje del aceite de Jaén)",
    lat: 38.0000,
    lng: -3.8000,
    nivel: 3,
    categorias: ["paisaje", "datosCuriosos", "cultura", "aceite"],
    tipo: "paisaje_cultural",
    radioActivacionMetros: 12000
  },


  // =====================================================================
  // =============================== GRANADA =============================
  // =====================================================================

  // ✅ CAPITAL
  {
    id: "es_gr_capital_granada",
    nombre: "Granada (capital de provincia)",
    lat: 37.1773,
    lng: -3.5986,
    nivel: 1,
    categorias: ["historia", "provincia", "capital", "cultura", "datosCuriosos"],
    tipo: "capital_provincia",
    radioActivacionMetros: 11000
  },

  {
    id: "es_gr_alhambra",
    nombre: "La Alhambra y Generalife",
    lat: 37.1761,
    lng: -3.5881,
    nivel: 1,
    categorias: ["historia", "unesco", "arquitectura", "andalusi"],
    tipo: "monumento_unesco",
    radioActivacionMetros: 7000
  },
  {
    id: "es_gr_albaicin_san_nicolas",
    nombre: "Albaicín y Mirador de San Nicolás",
    lat: 37.1806,
    lng: -3.5940,
    nivel: 2,
    categorias: ["historia", "paisaje", "barrio_historico"],
    tipo: "barrio_mirador",
    radioActivacionMetros: 5000
  },
  {
    id: "es_gr_sierra_nevada",
    nombre: "Sierra Nevada (acceso Pradollano)",
    lat: 37.0950,
    lng: -3.3940,
    nivel: 1,
    categorias: ["naturaleza", "montaña", "paisaje", "datosCuriosos"],
    tipo: "parque_natural",
    radioActivacionMetros: 12000
  },
  {
    id: "es_gr_loja_paso_historico",
    nombre: "Loja (puerta occidental de Granada)",
    lat: 37.1680,
    lng: -4.1510,
    nivel: 3,
    categorias: ["historia", "ciudad", "datosCuriosos"],
    tipo: "ciudad",
    radioActivacionMetros: 6000
  },
  {
    id: "es_gr_guadix_cuevas",
    nombre: "Guadix (catedral y cuevas habitadas)",
    lat: 37.3000,
    lng: -3.1340,
    nivel: 2,
    categorias: ["historia", "arquitectura", "datosCuriosos"],
    tipo: "ciudad_historica",
    radioActivacionMetros: 8000
  },

  // --- MÁS GRANADA ---
  {
    id: "es_gr_catedral_capilla_real",
    nombre: "Catedral y Capilla Real (Reyes Católicos)",
    lat: 37.1764,
    lng: -3.5995,
    nivel: 1,
    categorias: ["historia", "arquitectura", "reyes_catolicos"],
    tipo: "catedral",
    radioActivacionMetros: 6000
  },
  {
    id: "es_gr_sacromonte_cuevas",
    nombre: "Sacromonte (cuevas y cultura gitana)",
    lat: 37.1835,
    lng: -3.5858,
    nivel: 2,
    categorias: ["historia", "cultura", "datosCuriosos"],
    tipo: "barrio_historico",
    radioActivacionMetros: 6000
  },
  {
    id: "es_gr_velez_benaudalla_valle",
    nombre: "Vélez de Benaudalla (valle camino de la costa)",
    lat: 36.8338,
    lng: -3.5169,
    nivel: 3,
    categorias: ["paisaje", "pueblo", "datosCuriosos"],
    tipo: "pueblo_valle",
    radioActivacionMetros: 7000
  },
  {
    id: "es_gr_moclin_castillo",
    nombre: "Moclín (castillo de frontera nazarí)",
    lat: 37.3423,
    lng: -3.7861,
    nivel: 3,
    categorias: ["historia", "castillos", "frontera_nazari"],
    tipo: "castillo",
    radioActivacionMetros: 5000
  },
  {
    id: "es_gr_alpujarras_lanjaron",
    nombre: "Las Alpujarras y Lanjarón (paisaje morisco)",
    lat: 36.9194,
    lng: -3.4802,
    nivel: 2,
    categorias: ["historia", "paisaje", "naturaleza"],
    tipo: "comarca",
    radioActivacionMetros: 12000
  },
  {
    id: "es_gr_fuente_vaqueros_lorca",
    nombre: "Fuente Vaqueros (cuna de Federico García Lorca)",
    lat: 37.2199,
    lng: -3.7856,
    nivel: 3,
    categorias: ["historia", "literatura", "datosCuriosos"],
    tipo: "pueblo",
    radioActivacionMetros: 6000
  },
  {
    id: "es_gr_suspiro_moro",
    nombre: "Puerto del Suspiro del Moro (última mirada de Boabdil)",
    lat: 37.0151,
    lng: -3.6005,
    nivel: 2,
    categorias: ["historia", "reconquista", "paisaje"],
    tipo: "puerto_montana",
    radioActivacionMetros: 9000
  },
  {
    id: "es_gr_reino_nazari_contexto",
    nombre: "Reino Nazarí de Granada (contexto histórico)",
    lat: 37.1773,
    lng: -3.5986,
    nivel: 3,
    categorias: ["historia", "andalusi", "datosCuriosos"],
    tipo: "contexto_historico",
    radioActivacionMetros: 10000
  },
];
