import type { SiteContent } from "./types";

export const es: SiteContent = {
  nav: {
    focus: "Áreas de desarrollo",
    principles: "Principios",
    atlas: "ATLAS",
    cblx: "CBLX",
    team: "Equipo",
    contact: "Contacto",
  },
  langMenu: { ariaLabel: "Idioma" },
  hero: {
    badge: "Desarrollo tecnológico · Madrid, España",
    heading: "Construyendo la Próxima Generación de IA",
    paragraph:
      "Caelum Private Equity desarrolla sistemas de inteligencia fundacional, infraestructura habilitadora y IA empresarial transformadora. Nuestros ingenieros e investigadores resuelven los problemas más difíciles de la inteligencia artificial — y los llevan a producción.",
    cta: "Inicia una Conversación",
  },
  focus: {
    label: "Áreas de Desarrollo",
    heading: "Dónde Construimos",
    intro:
      "Construimos a lo largo de toda la cadena de valor de la IA — desde la investigación fundacional hasta el despliegue empresarial. Nuestra agenda de ingeniería prioriza la excelencia técnica, el desarrollo responsable y una ventaja competitiva defendible.",
    items: [
      {
        title: "Modelos Fundacionales",
        body: "Sistemas de razonamiento avanzado, arquitecturas multimodales y capacidades disruptivas que amplían la frontera de la investigación en IA.",
      },
      {
        title: "Infraestructura de IA",
        body: "Plataformas de cómputo, frameworks de entrenamiento, herramientas de seguridad y sistemas de despliegue que habilitan aplicaciones de IA a escala empresarial.",
      },
      {
        title: "IA Empresarial",
        body: "Automatización de flujos de trabajo, herramientas de productividad y aplicaciones específicas de dominio que traducen la capacidad de la IA en valor de negocio medible.",
      },
      {
        title: "Seguridad y Gobernanza",
        body: "Investigación en interpretabilidad, marcos de alineación y soluciones de gobernanza para un desarrollo responsable de la IA.",
      },
      {
        title: "Sistemas Eficientes",
        body: "Modelos optimizados en consumo energético, IA en el borde (edge AI) y entornos con recursos limitados que hacen la capacidad de la IA universalmente accesible.",
      },
      {
        title: "IA en la Ciencia",
        body: "Descubrimiento de fármacos, ciencia de materiales, modelización climática. La IA acelera los ciclos de investigación y hace posibles avances científicos.",
      },
    ],
  },
  principles: {
    label: "Principios de Ingeniería",
    heading: "Cómo Construimos",
    items: [
      {
        title: "Excelencia Técnica",
        body: "Construimos mediante una investigación e ingeniería rigurosas. La integridad científica y la profundidad técnica guían cada decisión, y nuestras hojas de ruta cuentan con los recursos necesarios para un trabajo técnico ambicioso, en lugar de ciclos cortos.",
      },
      {
        title: "Infraestructura y Escala",
        body: "Los modelos fundacionales y la infraestructura habilitadora transforman sectores enteros. Construimos las plataformas y herramientas para un despliegue de IA seguro y escalable. La infraestructura desbloquea miles de aplicaciones.",
      },
      {
        title: "Ingeniería a Largo Plazo",
        body: "El desarrollo de IA transformadora exige un compromiso a largo plazo. Trabajamos en horizontes plurianuales con apoyo operativo sostenido, abordando investigación compleja sin presión por una monetización prematura.",
      },
      {
        title: "Crecimiento Responsable",
        body: "Capacidad y responsabilidad son inseparables. Priorizamos la investigación en seguridad, la interpretabilidad y la gobernanza. Los sistemas de IA deben desarrollarse con cuidado y desplegarse de forma responsable para ganarse una confianza duradera.",
      },
    ],
  },
  atlas: {
    label: "Sistema Insignia",
    heading: "ATLAS — Infraestructura de Datos Nativa en Consentimiento",
    intro: [
      "ATLAS es un sistema de inteligencia artificial construido para el sector inmobiliario, que da servicio a tres mercados distintos sobre una misma plataforma: B2B, B2C y C2C. Es una arquitectura multiagente que opera sobre datos consentidos en el origen, en lugar de datos extraídos a posteriori — técnicamente profunda, con un foso defendible y con el cumplimiento normativo diseñado desde el primer commit.",
      "A nivel operativo, ATLAS es un único sistema en el que tres agentes especializados se ejecutan de forma continua — las veinticuatro horas del día, los siete días de la semana — para captar stock residencial antes de que llegue al mercado abierto. El primero ingiere y puntúa señales para identificar propiedades con una probabilidad de venta medible; el segundo evalúa cada lead según su corroboración, plazo de maduración, intención y completitud de los datos, y decide la ruta que debe seguir; el tercero es la interfaz con el equipo humano, entrega un informe explicable y recoge la retroalimentación de campo que recalibra el modelo. Coordinan entre sí mediante eventos y no llamadas directas, de modo que el pipeline se degrada de forma progresiva en lugar de fallar como un único bloque.",
    ],
    agentPipelineLabel: "Pipeline de agentes",
    agents: [
      { id: "A1", name: "Ingesta y puntuación de señales", note: "Bus de eventos · asíncrono" },
      { id: "A2", name: "Evaluación y enrutamiento de leads", note: "Bus de eventos · asíncrono" },
      { id: "A3", name: "Interfaz humana y bucle de retroalimentación", note: "Bus de eventos · retroalimentación" },
    ],
    agentFooter:
      "Cada mercado es un participante distinto con su propio régimen de consentimiento, y los tres operan a través de la misma plataforma.",
    markets: [
      {
        tag: "B2B",
        title: "Agencias Inmobiliarias",
        body: "Las agencias se suscriben a un flujo cualificado de propietarios que han solicitado ser contactados, sustituyendo la prospección en frío por una intención documentada. Operan bajo una afiliación contractual, por lo que basta un único consentimiento general del propietario.",
      },
      {
        tag: "B2C",
        title: "Plataforma al Propietario",
        body: "Una aplicación de valoración gratuita es el punto de entrada: el propietario fotografía la vivienda, recibe una valoración con el estado evaluado por visión artificial, y decide de forma explícita y granular quién puede contactarle y por qué canal.",
      },
      {
        tag: "C2C",
        title: "Vendedor a Comprador",
        body: "Un vendedor puede hacer visible un anuncio a compradores registrados que buscan en su zona sin exponer ningún dato de contacto. Cuando un comprador manifiesta interés, el vendedor confirma caso por caso antes de que se revele nada — un flujo mediado, ya que ningún contrato vincula a un comprador particular.",
      },
    ],
    asymmetryParagraph:
      "La asimetría entre esos tres regímenes es deliberada: el diseño del consentimiento se calibra en función de la responsabilidad de quien está al otro lado. Una agencia vinculada contractualmente y un comprador particular anónimo no justifican el mismo nivel de divulgación, y el sistema aplica esa distinción en el código.",
    capabilities: [
      {
        title: "Motor de Coincidencia Geoespacial",
        body: "Los criterios del comprador y los anuncios visibles se emparejan mediante una consulta espacial estructurada sobre una base de datos inmobiliaria indexada — área, franja de precio y tipología resueltos de forma geométrica, no por un modelo de lenguaje, de modo que los resultados son exactos, económicos de ejecutar y reproducibles.",
      },
      {
        title: "Puntuación Determinista y Auditable",
        body: "La puntuación de intención es un modelo transparente y explicable, con un desglose completo de las señales que contribuyen a ella — no una caja negra. La explicabilidad es una restricción de diseño, impulsada por el Reglamento Europeo de IA (EU AI Act) y no incorporada a posteriori.",
      },
      {
        title: "El Consentimiento como Foso Defensivo",
        body: "Los datos consentidos de origen (first-party) no pueden replicarse mediante agregación ni extracción automatizada. Las señales públicas solo informan la priorización; el contacto directo exige un consentimiento explícito y granular — aplicado en el código en dos capas independientes.",
      },
      {
        title: "Valoración por Visión Artificial",
        body: "El estado del inmueble se evalúa a partir de fotografías aportadas por el usuario, que alimentan un modelo de valoración hedónica que siempre devuelve un rango con comparables — nunca una cifra única sin matices.",
      },
      {
        title: "Residencia de Datos en la UE por Diseño",
        body: "Desplegado íntegramente en una región de la UE desde el primer día, con la inferencia del modelo enrutada dentro de la región para evitar exposición a transferencias internacionales. Infraestructura como código desde el primer commit para una trazabilidad completa.",
      },
      {
        title: "Resiliencia Basada en Eventos",
        body: "Los agentes publican y consumen eventos mediante colas con gestión de mensajes fallidos (dead-letter), de modo que un ciclo de ingesta fallido se reintenta de forma autónoma sin bloquear la puntuación ni el pipeline orientado a las personas.",
      },
    ],
    whyHeading: "Por Qué Esto Representa Nuestra Ingeniería",
    whyParagraph:
      "ATLAS no es un envoltorio sobre un modelo de propósito general. Su ventaja se acumula simultáneamente en tres ejes: una base legal que la competencia no puede copiar sin rehacer su modelo de negocio, un sistema de puntuación auditable que satisface el escrutinio regulatorio por construcción, y una infraestructura que escala sin necesitar una migración por delante. Esa es la forma de los sistemas que construimos — técnicamente profundos, estructuralmente defendibles y responsables por diseño, no por corrección posterior.",
  },
  cblx: {
    label: "Plataforma de Ciudad Inteligente",
    heading: "CBLX — Convirtiendo Datos Urbanos en Inteligencia Urbana",
    kicker: "Smart City · Gestión Inteligente de Residuos · Inteligencia Urbana",
    intro: [
      "CBLX es una plataforma tecnológica de Smart City construida para transformar la gestión de residuos urbanos mediante inteligencia artificial, IoT, automatización, trazabilidad y análisis avanzado de datos. Parte de una premisa clara: convertir una infraestructura tradicionalmente reactiva en un sistema urbano conectado, medible, predictivo y progresivamente más eficiente.",
      "CBLX no es solo una forma de gestionar residuos. Su objetivo a largo plazo es convertir los datos generados por la infraestructura urbana en inteligencia útil para administraciones, operadores y ciudades — pasando de un modelo de recogida tradicional y reactivo a uno inteligente, predictivo y basado en datos.",
      "A través del IoT, la inteligencia artificial, la analítica predictiva y la optimización operativa, la plataforma permite entender qué está pasando en la ciudad, anticipar lo que necesitará y utilizar sus recursos de forma más eficiente. De la gestión de residuos a la inteligencia urbana.",
    ],
    conceptualEvolutionLabel: "Evolución conceptual",
    conceptualEvolutionBody1:
      "La ciudad genera residuos. Los residuos generan datos. Los datos revelan patrones. Los patrones permiten predecir. La predicción optimiza decisiones. Las decisiones optimizadas hacen las ciudades más eficientes.",
    conceptualEvolutionBody2:
      "CBLX optimiza la gestión de residuos en una primera etapa. En etapas posteriores, la misma arquitectura puede incorporar nuevas fuentes de datos y desarrollar capacidades adicionales de Inteligencia Urbana.",
    stack: [
      {
        id: "01",
        title: "Contenedores Conectados",
        body: "Contenedores equipados con sensores que miden el nivel de llenado y el peso, con compactación cuando se requiere e identificación RFID para una trazabilidad completa de cada activo.",
      },
      {
        id: "02",
        title: "Telemetría de Flota",
        body: "Sensores y telemetría en vehículos y sistemas de recogida, que monitorizan la infraestructura y las operaciones de campo de forma continua en lugar de mediante reportes periódicos.",
      },
      {
        id: "03",
        title: "Inteligencia Predictiva",
        body: "Modelos de IA analizan los patrones de generación de residuos para prever niveles de llenado y demanda futura de recogida, detectar anomalías y recomendar acciones operativas.",
      },
      {
        id: "04",
        title: "Optimización Dinámica",
        body: "Rutas, frecuencias y horarios se optimizan en función de la demanda real y prevista, sustituyendo calendarios mayoritariamente estáticos por un modelo impulsado por la demanda.",
      },
      {
        id: "05",
        title: "Paneles Operativos y Ejecutivos",
        body: "KPIs y análisis histórico, operativo y predictivo presentados según el perfil de usuario, con niveles de acceso, visualización y administración por rol.",
      },
      {
        id: "06",
        title: "Arquitectura Interoperable",
        body: "Preparada para integrarse con sistemas municipales, plataformas Smart City, gestión de flotas, infraestructura IoT, APIs externas, analítica y sistemas GIS.",
      },
    ],
    questionsHeading: "Cuatro Preguntas que Responde el Sistema",
    questions: [
      {
        id: "Q1",
        q: "¿Qué está pasando?",
        a: "Monitorización y análisis del estado actual de la infraestructura.",
      },
      {
        id: "Q2",
        q: "¿Por qué está pasando?",
        a: "Identificación de patrones, comportamientos y causas probables.",
      },
      {
        id: "Q3",
        q: "¿Qué pasará a continuación?",
        a: "Modelos predictivos que anticipan niveles de llenado, demanda y necesidades operativas.",
      },
      {
        id: "Q4",
        q: "¿Qué deberíamos hacer?",
        a: "Recomendaciones que aprovechan de forma más eficiente los recursos disponibles.",
      },
    ],
    operatingModelHeading: "Modelo Operativo Inteligente",
    operatingModelBody:
      "En un sistema convencional, un vehículo recorre una ruta porque así lo marca el calendario. CBLX introduce una lógica distinta: qué contenedores necesitan atención, cuáles pueden esperar y cómo organizar los recursos disponibles. La optimización de rutas actúa sobre los kilómetros innecesarios, las recogidas de contenedores casi vacíos, el consumo energético, el tiempo operativo, la capacidad ociosa de los vehículos, la saturación de contenedores y las incidencias que genera una planificación puramente estática.",
    signals: [
      "Nivel de llenado",
      "Peso",
      "Capacidad disponible",
      "Ubicación",
      "Historial de generación",
      "Velocidad de llenado",
      "Previsión de generación",
      "Prioridad operativa",
      "Disponibilidad de vehículos",
      "Capacidad de vehículos",
      "Condiciones del tráfico",
      "Características de la zona",
      "Frecuencia histórica de recogida",
    ],
    valuePropositionLabel: "Propuesta de valor",
    value: [
      {
        n: "1",
        title: "Eficiencia",
        body: "Optimización de rutas, vehículos, personal, frecuencias de recogida e infraestructura. El objetivo es aprovechar mejor los recursos existentes antes de añadir capacidad o coste.",
      },
      {
        n: "2",
        title: "Sostenibilidad",
        body: "Menos desplazamientos innecesarios, menor consumo energético y emisiones, menos uso ineficiente de recursos — consecuencia directa de una operación mejor optimizada y basada en datos.",
      },
      {
        n: "3",
        title: "Inteligencia",
        body: "Los datos operativos se convierten en información utilizable para la planificación, la predicción y la toma de decisiones, de modo que los datos de infraestructura tienen valor más allá de la operativa diaria.",
      },
      {
        n: "4",
        title: "Trazabilidad",
        body: "Mayor visibilidad sobre el rendimiento del sistema, y la capacidad de medir resultados mediante indicadores objetivos: qué ocurre, cuándo, y cómo evoluciona el servicio.",
      },
    ],
    targetUsersLabel: "Usuarios objetivo",
    users: [
      "Ayuntamientos",
      "Administraciones públicas",
      "Concesionarias de limpieza y recogida",
      "Operadores medioambientales",
      "Empresas de gestión y tratamiento de residuos",
      "Programas Smart City",
      "Grandes instalaciones",
      "Desarrollos urbanísticos",
      "Operadores privados a gran escala",
    ],
    economicsLabel: "Economía y escalabilidad",
    economicsBody1:
      "CBLX debe demostrar viabilidad tanto operativa como económica. El modelo del proyecto cubre CAPEX, OPEX, tecnología, coste de infraestructura y despliegue, mantenimiento, escenarios financieros a cinco años, ahorro operativo potencial, retorno de la inversión e impacto económico de un servicio mejor optimizado.",
    economicsBody2:
      "La arquitectura es modular y escalable por diseño: primero pilotos en zonas definidas, después distritos, municipios, áreas metropolitanas, regiones, grandes instalaciones privadas y nuevos mercados — añadiendo dispositivos, sensores, algoritmos y fuentes de datos sin rehacer el sistema.",
    governanceLabel: "Privacidad, seguridad y cumplimiento",
    governance: [
      {
        title: "Privacidad desde el Diseño",
        body: "La protección de datos se incorpora a la arquitectura desde el diseño inicial, no se añade después.",
      },
      {
        title: "Seguridad desde el Diseño",
        body: "La seguridad abarca todas las capas — dispositivos IoT, infraestructura, comunicaciones, almacenamiento y aplicaciones.",
      },
      {
        title: "Gobernanza de Datos",
        body: "Políticas claras de acceso, uso, retención, calidad y trazabilidad de cada conjunto de datos.",
      },
      {
        title: "IA Responsable",
        body: "Mecanismos de supervisión, transparencia, documentación y control, con supervisión humana cuando corresponde.",
      },
    ],
    governanceFooter:
      "La arquitectura tiene en cuenta el Reglamento General de Protección de Datos de la UE, la normativa española de protección de datos aplicable, los requisitos europeos para sistemas de IA, la minimización de datos, el control de acceso, la ciberseguridad, la trazabilidad y la gobernanza de datos.",
    positioningHeading: "Posicionamiento",
    positioningBody:
      "CBLX no es una aplicación de gestión de residuos, un fabricante de contenedores, un sistema de sensores, una herramienta de optimización de rutas ni un panel municipal. Es una plataforma integral de inteligencia para la gestión urbana, que empieza por uno de los servicios esenciales de cualquier ciudad: los residuos. La combinación de infraestructura conectada, IoT, datos, inteligencia artificial, optimización y analítica es el núcleo tecnológico del proyecto.",
  },
  capabilityTrack: {
    label: "Trayectoria de Capacidades",
    heading: "Lo Que Hemos Construido",
    items: [
      {
        title: "Ingeniería de Modelos Fundacionales",
        stage: "Plataforma",
        summary:
          "Arquitectura novedosa que permite un escalado de modelos más eficiente con una capacidad de razonamiento disruptiva",
        body: "Práctica de investigación e ingeniería basada en instituciones de IA de referencia. Trabajo sobre escalado eficiente con razonamiento avanzado, centrado en un avance responsable de capacidades y en investigación de seguridad integrada.",
      },
      {
        title: "Plataforma de IA Empresarial",
        stage: "Producción",
        summary: "Plataforma de extremo a extremo para el despliegue, la monitorización y la optimización de modelos de IA a escala",
        body: "Práctica de ingeniería de infraestructura conforme a estándares de hyperscaler. Resuelve cuellos de botella críticos en coste, latencia y fiabilidad, con tracción empresarial medible.",
      },
      {
        title: "Agentes de IA para Trabajo del Conocimiento",
        stage: "Desplegado",
        summary: "Agentes autónomos que automatizan flujos de trabajo de servicios profesionales de alto valor",
        body: "Experiencia profunda de dominio aplicada a sectores de alto valor, con encaje producto-mercado validado sobre el terreno y un camino claro hacia un impacto significativo en ingresos.",
      },
    ],
    partnerReasons: [
      {
        title: "Experiencia Técnica Profunda",
        body: "Nuestro equipo aporta experiencia directa en investigación de IA, ingeniería de infraestructura y escalado empresarial. Entendemos los problemas que resuelves a nivel técnico.",
      },
      {
        title: "Red Estratégica",
        body: "Acceso a instituciones de investigación de IA de referencia, clientes empresariales y operadores de infraestructura. Presentaciones estratégicas y alianzas que amplifican tu impacto.",
      },
      {
        title: "Compromiso a Largo Plazo",
        body: "Compromiso sostenido, alineado con hojas de ruta de investigación ambiciosas. Apoyamos el descubrimiento y la profundidad técnica sin presión por una monetización prematura.",
      },
    ],
  },
  team: {
    label: "Liderazgo",
    heading: "Fundador y CEO",
    portraitAlt: "Fernando Stimac Jaén, Fundador y CEO de Caelum Private Equity",
    name: "Fernando Stimac Jaén",
    role: "Fundador y CEO · Madrid, España",
    tagline: "29 Años de Liderazgo Empresarial Global · Estrategia de IA e Infraestructura",
    bio: [
      "Líder comercial con casi tres décadas generando ingresos en LATAM y Europa. Actualmente Consultor Inmobiliario Comercial en Engel & Völkers España, al frente de las operaciones de alquiler de lujo en los distritos prime de Madrid — ciclo completo desde la captación hasta el contrato, con automatización de CRM que elevó la conversión un 62%.",
      "Anteriormente impulsó la expansión regional en Conagra Brands en Uruguay, Bolivia y Paraguay (+48% en ventas regionales), y el desarrollo de negocio en JBS en Europa del Este, Chile y el Caribe, gestionando cadenas de suministro internacionales y analítica de rendimiento basada en SAP.",
    ],
    careerLabel: "Trayectoria profesional",
    career: [
      {
        period: "2021 — actualidad",
        company: "Engel & Völkers España",
        role: "Consultor Inmobiliario Comercial",
      },
      { period: "2019 — 2021", company: "Conagra Brands", role: "Export Manager" },
      { period: "2012 — 2019", company: "JBS", role: "Export Sales Manager" },
      {
        period: "1995 — 2012",
        company: "Pernod Ricard · Diageo",
        role: "Dirección Comercial y de Canal On-trade",
      },
    ],
    certificationsLabel: "Certificaciones",
    certifications: [
      "SAP Cloud ERP · SAP",
      "Cloud Onboarding for SAP Cloud ERP · SAP",
      "AWS Cloud Services · Amazon Web Services",
      "Claude 101 & Claude Code 101 · Anthropic",
      "Agents & Workflows · OpenAI",
      "AI Foundations · OpenAI",
    ],
    educationLabel: "Formación e Idiomas",
    education: [
      {
        degree: "MBA, Gestión Empresarial de Tecnologías Disruptivas",
        school: "The University of Texas at San Antonio",
      },
      {
        degree: "Grado en Administración y Dirección de Empresas",
        school: "The University of Texas at San Antonio",
      },
    ],
    languages: "Español (nativo) · Inglés (dominio profesional completo) · Croata · Portugués",
    advisoryLabel: "Asesoramiento y Colaboradores",
    advisory: [
      {
        title: "Investigación en IA",
        body: "Conexiones directas con instituciones de investigación de referencia y laboratorios de IA de frontera. Asesoramiento sobre dirección técnica y avances de capacidades.",
      },
      {
        title: "Infraestructura",
        body: "Experiencia en plataformas de cómputo, despliegue en la nube y escalado de infraestructura empresarial, aportada por antiguos ingenieros de hyperscalers.",
      },
      {
        title: "Empresarial",
        body: "Relaciones con clientes empresariales y operadores que han escalado productos de IA hasta alcanzar ingresos y adopción significativos.",
      },
    ],
  },
  contact: {
    label: "Contacto",
    heading: "Ponte en Contacto",
    paragraph:
      "Siempre nos interesa conversar con equipos que trabajan en la frontera de la investigación e infraestructura de IA. Ya estés avanzando en modelos fundacionales, infraestructura habilitadora o despliegue de IA empresarial a escala, nos encantaría saber de ti.",
    cta: "Inicia una Conversación",
    emailLabel: "Correo electrónico",
    websiteLabel: "Sitio web",
    locationLabel: "Ubicación",
    location: "Madrid, España",
  },
  footer: {
    logoAlt: "Caelum Private Equity",
    description:
      "Caelum Private Equity desarrolla sistemas de inteligencia artificial, infraestructura habilitadora y tecnología empresarial — incluidos ATLAS, nuestra plataforma multiagente nativa en consentimiento para el sector inmobiliario, y CBLX, nuestra plataforma de inteligencia urbana para Smart Cities.",
    developmentAreasLabel: "Áreas de Desarrollo",
    developmentAreas: ["Modelos Fundacionales", "Infraestructura de IA", "IA Empresarial", "IA Responsable"],
    companyLabel: "Empresa",
    companyLinks: [
      { label: "Principios de Ingeniería", href: "#principles" },
      { label: "ATLAS", href: "#atlas" },
      { label: "CBLX", href: "#cblx" },
      { label: "Equipo", href: "#team" },
      { label: "Contacto", href: "#contact" },
    ],
    copyright:
      "© 2026 Caelum Private Equity. Todos los derechos reservados. Esta comunicación no constituye una oferta de venta ni una solicitud de oferta de compra de ningún valor. Los resultados pasados no garantizan resultados futuros.",
  },
};
