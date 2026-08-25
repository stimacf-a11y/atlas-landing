import type { Locale } from "@/lib/i18n-seo";

export type EvolutionStage = { title: string; body: string; tooltip: string };

type EvolutionCopy = {
  pathLabel: string;
  measurableLabel: string;
  metricAria: (title: string) => string;
  flowLine: string;
  stages: EvolutionStage[];
};

export const CBLX_EVOLUTION_COPY: Record<Locale, EvolutionCopy> = {
  en: {
    pathLabel: "Evolution path",
    measurableLabel: "Measurable impact",
    metricAria: (title) => `Metric for ${title}`,
    flowLine: "Waste → Data → Prediction → Optimisation → Urban Intelligence",
    stages: [
      {
        title: "Waste",
        body: "Physical infrastructure: containers, vehicles, routes and collection operations.",
        tooltip:
          "Measurable: fleet utilisation %, container coverage and collection frequency per zone.",
      },
      {
        title: "Data",
        body: "Sensors, weighing, RFID and telemetry turn every asset and round into measurable data.",
        tooltip: "Measurable: data points per day, connected asset % and telemetry latency.",
      },
      {
        title: "Prediction",
        body: "AI models learn generation patterns and forecast fill levels and demand.",
        tooltip:
          "Measurable: forecast accuracy %, prediction horizon in days and overflow reduction.",
      },
      {
        title: "Optimisation",
        body: "Routes, frequencies and resources adjust to real need instead of a fixed calendar.",
        tooltip: "Measurable: route km saved, fuel/energy reduction and cost per tonne collected.",
      },
      {
        title: "Urban Intelligence",
        body: "Aggregated data becomes strategic insight for planning the wider city.",
        tooltip:
          "Measurable: planning decisions supported, reports generated and city systems integrated.",
      },
    ],
  },
  es: {
    pathLabel: "Ruta de evolución",
    measurableLabel: "Impacto medible",
    metricAria: (title) => `Métrica de ${title}`,
    flowLine: "Residuos → Datos → Predicción → Optimización → Inteligencia urbana",
    stages: [
      {
        title: "Residuos",
        body: "Infraestructura física: contenedores, vehículos, rutas y operaciones de recogida.",
        tooltip:
          "Medible: % de utilización de flota, cobertura de contenedores y frecuencia de recogida por zona.",
      },
      {
        title: "Datos",
        body: "Sensores, pesaje, RFID y telemetría convierten cada activo y ruta en datos medibles.",
        tooltip:
          "Medible: registros de datos por día, % de activos conectados y latencia de telemetría.",
      },
      {
        title: "Predicción",
        body: "Los modelos de IA aprenden patrones de generación y anticipan llenado y demanda.",
        tooltip:
          "Medible: % de precisión del pronóstico, horizonte de predicción en días y reducción de desbordes.",
      },
      {
        title: "Optimización",
        body: "Rutas, frecuencias y recursos se ajustan a la necesidad real, no a un calendario fijo.",
        tooltip:
          "Medible: km de ruta ahorrados, reducción de combustible/energía y coste por tonelada recogida.",
      },
      {
        title: "Inteligencia urbana",
        body: "Los datos agregados se convierten en criterio estratégico para planificar la ciudad.",
        tooltip:
          "Medible: decisiones de planificación respaldadas, informes generados y sistemas municipales integrados.",
      },
    ],
  },
  de: {
    pathLabel: "Entwicklungspfad",
    measurableLabel: "Messbare Wirkung",
    metricAria: (title) => `Kennzahl für ${title}`,
    flowLine: "Abfall → Daten → Prognose → Optimierung → Urbane Intelligenz",
    stages: [
      {
        title: "Abfall",
        body: "Physische Infrastruktur: Behälter, Fahrzeuge, Routen und Sammelbetrieb.",
        tooltip:
          "Messbar: Flottenauslastung in %, Behälterabdeckung und Sammelfrequenz je Zone.",
      },
      {
        title: "Daten",
        body: "Sensoren, Verwiegung, RFID und Telemetrie machen jedes Asset und jede Tour messbar.",
        tooltip:
          "Messbar: Datenpunkte pro Tag, Anteil verbundener Assets in % und Telemetrie-Latenz.",
      },
      {
        title: "Prognose",
        body: "KI-Modelle erlernen Aufkommensmuster und prognostizieren Füllstände und Bedarf.",
        tooltip:
          "Messbar: Prognosegenauigkeit in %, Prognosehorizont in Tagen und Rückgang von Überfüllungen.",
      },
      {
        title: "Optimierung",
        body: "Routen, Frequenzen und Ressourcen richten sich am realen Bedarf statt am Kalender aus.",
        tooltip:
          "Messbar: eingesparte Routenkilometer, geringerer Kraftstoff-/Energieverbrauch und Kosten pro gesammelter Tonne.",
      },
      {
        title: "Urbane Intelligenz",
        body: "Aggregierte Daten werden zu strategischen Erkenntnissen für die Stadtplanung.",
        tooltip:
          "Messbar: unterstützte Planungsentscheidungen, erzeugte Berichte und integrierte Stadtsysteme.",
      },
    ],
  },
};
