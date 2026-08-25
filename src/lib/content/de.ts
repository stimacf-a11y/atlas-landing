import type { SiteContent } from "./types";

export const de: SiteContent = {
  nav: {
    focus: "Fokus",
    principles: "Prinzipien",
    atlas: "ATLAS",
    cblx: "CBLX",
    team: "Team",
    contact: "Kontakt",
  },
  langMenu: { ariaLabel: "Sprache" },
  hero: {
    badge: "Technologieentwicklung · Madrid, Spanien",
    heading: "Wir bauen die nächste Generation der KI",
    paragraph:
      "Caelum Private Equity entwickelt fundamentale Intelligenzsysteme, ermöglichende Infrastruktur und transformative Unternehmens-KI. Unsere Ingenieure und Forscher lösen die schwierigsten Probleme der künstlichen Intelligenz — und bringen sie als produktionsreife Systeme auf den Markt.",
    cta: "Gespräch beginnen",
  },
  focus: {
    label: "Entwicklungsschwerpunkt",
    heading: "Wo wir bauen",
    intro:
      "Wir entwickeln entlang des gesamten KI-Stacks — von der Grundlagenforschung bis zum Unternehmenseinsatz. Unsere Engineering-Agenda setzt auf technische Exzellenz, verantwortungsvolle Entwicklung und einen nachhaltigen Wettbewerbsvorteil.",
    items: [
      {
        title: "Fundamentale Modelle",
        body: "Fortschrittliche Reasoning-Systeme, multimodale Architekturen und bahnbrechende Fähigkeiten, die die Grenzen der KI-Forschung verschieben.",
      },
      {
        title: "KI-Infrastruktur",
        body: "Compute-Plattformen, Trainings-Frameworks, Sicherheitswerkzeuge und Deployment-Systeme, die KI-Anwendungen im Unternehmensmaßstab ermöglichen.",
      },
      {
        title: "Unternehmens-KI",
        body: "Workflow-Automatisierung, Produktivitätswerkzeuge und domänenspezifische Anwendungen, die KI-Fähigkeiten in messbaren Geschäftswert übersetzen.",
      },
      {
        title: "Sicherheit & Governance",
        body: "Interpretierbarkeitsforschung, Alignment-Frameworks und Governance-Lösungen für eine verantwortungsvolle KI-Entwicklung.",
      },
      {
        title: "Effiziente Systeme",
        body: "Energieoptimierte Modelle, Edge-KI und ressourcenbeschränkte Umgebungen, die KI-Fähigkeiten universell zugänglich machen.",
      },
      {
        title: "KI in der Wissenschaft",
        body: "Wirkstoffforschung, Materialwissenschaft, Klimamodellierung. KI beschleunigt Forschungszyklen und ermöglicht wissenschaftliche Durchbrüche.",
      },
    ],
  },
  principles: {
    label: "Engineering-Prinzipien",
    heading: "Wie wir bauen",
    items: [
      {
        title: "Technische Exzellenz",
        body: "Wir bauen durch rigorose Forschung und Engineering. Wissenschaftliche Integrität und technische Tiefe leiten jede Entscheidung, und unsere Roadmaps sind auf ambitionierte technische Arbeit statt kurze Zyklen ausgelegt.",
      },
      {
        title: "Infrastruktur & Skalierung",
        body: "Fundamentale Modelle und ermöglichende Infrastruktur verändern ganze Branchen. Wir bauen die Plattformen und Werkzeuge für einen sicheren, skalierbaren KI-Einsatz. Infrastruktur erschließt tausend Anwendungen.",
      },
      {
        title: "Langfristiges Engineering",
        body: "Transformative KI-Entwicklung erfordert langfristiges Engagement. Wir arbeiten in mehrjährigen Horizonten mit kontinuierlicher operativer Unterstützung und verfolgen anspruchsvolle Forschung ohne Druck zur vorzeitigen Monetarisierung.",
      },
      {
        title: "Verantwortungsvolles Wachstum",
        body: "Fähigkeit und Verantwortung sind untrennbar. Wir priorisieren Sicherheitsforschung, Interpretierbarkeit und Governance. KI-Systeme müssen durchdacht entwickelt und verantwortungsvoll eingesetzt werden, um dauerhaftes Vertrauen zu verdienen.",
      },
    ],
  },
  atlas: {
    label: "Flaggschiff-System",
    heading: "ATLAS — Consent-native Dateninfrastruktur",
    intro: [
      "ATLAS ist ein KI-System für den Immobiliensektor, das drei unterschiedliche Märkte auf einer Plattform bedient: B2B, B2C und C2C. Es handelt sich um eine Multi-Agenten-Architektur, die auf Daten läuft, deren Einwilligung an der Quelle eingeholt wird, statt sie im Nachhinein abzugreifen — technisch tiefgehend, mit einem verteidigungsfähigen Vorsprung und Compliance, die von Beginn an mitgedacht ist.",
      "Operativ ist ATLAS ein einziges System, in dem drei spezialisierte Agenten kontinuierlich laufen — rund um die Uhr, sieben Tage die Woche —, um Wohnimmobilien zu erschließen, bevor sie den offenen Markt erreichen. Der erste erfasst und bewertet Signale, um Immobilien mit einer messbaren Verkaufswahrscheinlichkeit zu identifizieren; der zweite bewertet jeden Lead nach Bestätigung, Vorlaufzeit, Absicht und Datenvollständigkeit und entscheidet über den weiteren Weg; der dritte ist die Schnittstelle zum menschlichen Team, liefert ein erklärbares Briefing und speist Feedback aus dem Feld zurück, das das Modell rekalibriert. Sie koordinieren sich über Events statt über direkte Aufrufe, sodass die Pipeline sich abschwächt statt komplett auszufallen.",
    ],
    agentPipelineLabel: "Agenten-Pipeline",
    agents: [
      { id: "A1", name: "Signalerfassung & Bewertung", note: "Event-Bus · asynchron" },
      { id: "A2", name: "Lead-Bewertung & Routing", note: "Event-Bus · asynchron" },
      { id: "A3", name: "Mensch-Schnittstelle & Feedback-Schleife", note: "Event-Bus · Feedback" },
    ],
    agentFooter:
      "Jeder Markt ist ein eigenständiger Teilnehmer mit eigenem Consent-Regime, und alle drei agieren über dieselbe Plattform.",
    markets: [
      {
        tag: "B2B",
        title: "Immobilienagenturen",
        body: "Agenturen abonnieren einen qualifizierten Strom von Eigentümern, die selbst um Kontaktaufnahme gebeten haben — kalte Akquise wird durch dokumentierte Absicht ersetzt. Sie handeln im Rahmen einer vertraglichen Zugehörigkeit, sodass eine einzige umfassende Einwilligung des Eigentümers genügt.",
      },
      {
        tag: "B2C",
        title: "Plattform an Eigentümer",
        body: "Eine kostenlose Bewertungs-App ist der Einstiegspunkt: Der Eigentümer fotografiert die Immobilie, erhält eine Bewertung mit per Computer Vision erfasstem Zustand und entscheidet explizit und granular, wer ihn über welchen Kanal erreichen darf.",
      },
      {
        tag: "C2C",
        title: "Verkäufer an Käufer",
        body: "Ein Verkäufer kann ein Angebot für registrierte Käufer in ihrer Suchregion sichtbar machen, ohne Kontaktdaten preiszugeben. Signalisiert ein Käufer Interesse, bestätigt der Verkäufer von Fall zu Fall, bevor etwas offengelegt wird — ein vermittelter Ablauf, da kein Vertrag einen privaten Käufer bindet.",
      },
    ],
    asymmetryParagraph:
      "Die Asymmetrie zwischen diesen drei Regimen ist beabsichtigt: Das Consent-Design ist auf die Verantwortlichkeit der Gegenseite abgestimmt. Eine vertraglich gebundene Agentur und ein anonymer privater Käufer rechtfertigen nicht dieselbe Offenlegung, und das System setzt diese Unterscheidung im Code durch.",
    capabilities: [
      {
        title: "Geospatiale Matching-Engine",
        body: "Käuferkriterien und sichtbare Angebote werden über eine strukturierte räumliche Abfrage einer indexierten Immobiliendatenbank abgeglichen — Gebiet, Preisspanne und Typologie werden geometrisch aufgelöst, nicht durch ein Sprachmodell, sodass Ergebnisse exakt, kostengünstig und reproduzierbar sind.",
      },
      {
        title: "Deterministisches, prüfbares Scoring",
        body: "Das Intent-Scoring ist ein transparentes, erklärbares Modell mit vollständiger Aufschlüsselung der beitragenden Signale — keine Blackbox. Erklärbarkeit ist ein Designkriterium, angetrieben vom EU AI Act statt nachträglich angepasst.",
      },
      {
        title: "Consent als Wettbewerbsvorteil",
        body: "First-Party-Daten mit Einwilligung lassen sich nicht durch Aggregation oder Scraping replizieren. Öffentliche Signale dienen nur der Priorisierung; direkte Kontaktaufnahme erfordert explizite, granulare Einwilligung — im Code auf zwei unabhängigen Ebenen durchgesetzt.",
      },
      {
        title: "Bewertung per Computer Vision",
        body: "Der Zustand der Immobilie wird anhand nutzerseitig eingereichter Fotos erfasst und speist ein hedonisches Bewertungsmodell, das stets eine Spanne mit Vergleichsobjekten liefert — nie eine unqualifizierte Einzelzahl.",
      },
      {
        title: "EU-Datenresidenz per Design",
        body: "Vollständig in einer EU-Region eingesetzt von Anfang an, mit Modell-Inferenz innerhalb der Region, um internationale Datenübertragung zu vermeiden. Infrastructure as Code seit dem ersten Commit für volle Rückverfolgbarkeit.",
      },
      {
        title: "Ereignisgesteuerte Resilienz",
        body: "Agenten veröffentlichen und konsumieren Events über Warteschlangen mit Dead-Letter-Handling, sodass ein fehlgeschlagener Erfassungszyklus eigenständig wiederholt wird, ohne das Scoring oder die nachgelagerte, auf Menschen ausgerichtete Pipeline zu blockieren.",
      },
    ],
    whyHeading: "Warum dies unser Engineering repräsentiert",
    whyParagraph:
      "ATLAS ist kein Wrapper um ein allgemeines Modell. Sein Vorteil verstärkt sich entlang dreier Achsen zugleich: eine rechtliche Grundlage, die Wettbewerber nicht kopieren können, ohne ihr Geschäftsmodell umzubauen, ein prüfbares Scoring-System, das regulatorische Kontrolle bereits durch seinen Aufbau erfüllt, und eine Infrastruktur, die skaliert, ohne dass eine Migration bevorsteht. So sehen die Systeme aus, die wir bauen — technisch tiefgehend, strukturell verteidigungsfähig und verantwortungsvoll per Design statt durch Nachbesserung.",
  },
  cblx: {
    label: "Smart-City-Plattform",
    heading: "CBLX — Urbane Daten in urbane Intelligenz verwandeln",
    kicker: "Smart City · Intelligentes Abfallmanagement · Urbane Intelligenz",
    intro: [
      "CBLX ist eine Smart-City-Technologieplattform, die entwickelt wurde, um das urbane Abfallmanagement durch künstliche Intelligenz, IoT, Automatisierung, Rückverfolgbarkeit und fortgeschrittene Datenanalyse zu transformieren. Ausgangspunkt ist eine klare Prämisse: eine traditionell reaktive Infrastruktur in ein vernetztes, messbares, prädiktives und zunehmend effizienteres urbanes System zu verwandeln.",
      "CBLX ist nicht nur eine Methode zur Abfallverwaltung. Das langfristige Ziel besteht darin, die von der urbanen Infrastruktur erzeugten Daten in nützliche Intelligenz für Verwaltungen, Betreiber und Städte zu verwandeln — vom traditionellen, reaktiven Sammelmodell hin zu einem intelligenten, prädiktiven und datengetriebenen Modell.",
      "Durch IoT, künstliche Intelligenz, prädiktive Analytik und operative Optimierung ermöglicht die Plattform zu verstehen, was in der Stadt geschieht, vorherzusehen, was sie benötigen wird, und ihre Ressourcen effizienter einzusetzen. Vom Abfallmanagement zur urbanen Intelligenz.",
    ],
    conceptualEvolutionLabel: "Konzeptionelle Entwicklung",
    conceptualEvolutionBody1:
      "Die Stadt erzeugt Abfall. Abfall erzeugt Daten. Daten offenbaren Muster. Muster ermöglichen Prognosen. Prognosen optimieren Entscheidungen. Optimierte Entscheidungen machen Städte effizienter.",
    conceptualEvolutionBody2:
      "CBLX optimiert das Abfallmanagement in einer ersten Stufe. In späteren Stufen kann dieselbe Architektur neue Datenquellen aufnehmen und zusätzliche Fähigkeiten urbaner Intelligenz entwickeln.",
    stack: [
      {
        id: "01",
        title: "Vernetzte Container",
        body: "Mit Sensoren ausgestattete Container, die Füllstand und Gewicht messen, bei Bedarf mit Kompaktierung und RFID-Kennzeichnung für die durchgängige Rückverfolgbarkeit jedes Assets.",
      },
      {
        id: "02",
        title: "Flottentelemetrie",
        body: "Sensoren und Telemetrie an Fahrzeugen und Sammelsystemen, die Infrastruktur und Feldeinsätze kontinuierlich statt über periodische Berichte überwachen.",
      },
      {
        id: "03",
        title: "Prädiktive Intelligenz",
        body: "KI-Modelle analysieren Muster der Abfallerzeugung, um Füllstände und künftigen Sammelbedarf zu prognostizieren, Anomalien zu erkennen und operative Maßnahmen zu empfehlen.",
      },
      {
        id: "04",
        title: "Dynamische Optimierung",
        body: "Routen, Frequenzen und Zeitpläne werden anhand von realem Bedarf und Prognosen optimiert und ersetzen überwiegend statische Kalender durch ein bedarfsgesteuertes Modell.",
      },
      {
        id: "05",
        title: "Operative & Executive Dashboards",
        body: "KPIs sowie historische, operative und prädiktive Analysen werden je nach Nutzerprofil dargestellt, mit rollenbasierten Zugriffs-, Visualisierungs- und Verwaltungsebenen.",
      },
      {
        id: "06",
        title: "Interoperable Architektur",
        body: "Vorbereitet für die Integration kommunaler Systeme, Smart-City-Plattformen, Flottenmanagement, IoT-Infrastruktur, externer APIs, Analytik und GIS-Systeme.",
      },
    ],
    questionsHeading: "Vier Fragen, die das System beantwortet",
    questions: [
      {
        id: "Q1",
        q: "Was geschieht gerade?",
        a: "Überwachung und Analyse des aktuellen Zustands der Infrastruktur.",
      },
      {
        id: "Q2",
        q: "Warum geschieht es?",
        a: "Identifikation von Mustern, Verhaltensweisen und wahrscheinlichen Ursachen.",
      },
      {
        id: "Q3",
        q: "Was wird als Nächstes geschehen?",
        a: "Prädiktive Modelle, die Füllstände, Nachfrage und operative Bedarfe vorhersehen.",
      },
      {
        id: "Q4",
        q: "Was sollten wir tun?",
        a: "Empfehlungen, die die verfügbaren Ressourcen effizienter einsetzen.",
      },
    ],
    operatingModelHeading: "Intelligentes Betriebsmodell",
    operatingModelBody:
      "In einem konventionellen System fährt ein Fahrzeug eine Route, weil es der Kalender vorgibt. CBLX führt eine andere Logik ein: welche Container Aufmerksamkeit benötigen, welche warten können und wie die verfügbaren Ressourcen zu organisieren sind. Die Routenoptimierung reduziert unnötige Kilometer, Abholungen fast leerer Container, Energieverbrauch, Betriebszeit, ungenutzte Fahrzeugkapazität, Containersättigung und die Störungen, die eine rein statische Planung verursacht.",
    signals: [
      "Füllstand",
      "Gewicht",
      "Verfügbare Kapazität",
      "Standort",
      "Erzeugungshistorie",
      "Füllgeschwindigkeit",
      "Prognostizierte Erzeugung",
      "Operative Priorität",
      "Fahrzeugverfügbarkeit",
      "Fahrzeugkapazität",
      "Verkehrsbedingungen",
      "Gebietsmerkmale",
      "Historische Sammelfrequenz",
    ],
    valuePropositionLabel: "Wertversprechen",
    value: [
      {
        n: "1",
        title: "Effizienz",
        body: "Optimierung von Routen, Fahrzeugen, Personal, Sammelfrequenzen und Infrastruktur. Ziel ist es, bestehende Ressourcen besser zu nutzen, bevor Kapazität oder Kosten erhöht werden.",
      },
      {
        n: "2",
        title: "Nachhaltigkeit",
        body: "Weniger unnötige Fahrten, geringerer Energieverbrauch und Emissionen, weniger ineffiziente Ressourcennutzung — eine direkte Folge eines besser optimierten, datengetriebenen Betriebs.",
      },
      {
        n: "3",
        title: "Intelligenz",
        body: "Operative Daten werden zu nutzbarer Information für Planung, Prognose und Entscheidungsfindung, sodass Infrastrukturdaten über den täglichen Einsatz hinaus Wert behalten.",
      },
      {
        n: "4",
        title: "Rückverfolgbarkeit",
        body: "Größere Transparenz darüber, wie das System funktioniert, und die Möglichkeit, Ergebnisse anhand objektiver Indikatoren zu messen: was geschieht, wann, und wie sich der Dienst entwickelt.",
      },
    ],
    targetUsersLabel: "Zielnutzer",
    users: [
      "Stadtverwaltungen",
      "Öffentliche Verwaltungen",
      "Konzessionäre für Reinigung & Sammlung",
      "Umweltbetreiber",
      "Unternehmen für Abfallmanagement & -aufbereitung",
      "Smart-City-Programme",
      "Großanlagen",
      "Stadtentwicklungsprojekte",
      "Private Betreiber im großen Maßstab",
    ],
    economicsLabel: "Wirtschaftlichkeit & Skalierbarkeit",
    economicsBody1:
      "CBLX muss operative und wirtschaftliche Tragfähigkeit gleichermaßen belegen. Das Projektmodell umfasst CAPEX, OPEX, Technologie-, Infrastruktur- und Einführungskosten, Wartung, fünfjährige Finanzszenarien, mögliche operative Einsparungen, Kapitalrendite sowie die wirtschaftlichen Auswirkungen eines besser optimierten Dienstes.",
    economicsBody2:
      "Die Architektur ist modular und von Grund auf skalierbar konzipiert: zunächst Pilotprojekte in definierten Zonen, dann Bezirke, Kommunen, Metropolregionen, Regionen, große private Anlagen und neue Märkte — mit der Möglichkeit, Geräte, Sensoren, Algorithmen und Datenquellen hinzuzufügen, ohne das System neu aufzubauen.",
    governanceLabel: "Datenschutz, Sicherheit & Compliance",
    governance: [
      {
        title: "Privacy by Design",
        body: "Datenschutz ist von Beginn an in die Architektur eingebettet, nicht nachträglich hinzugefügt.",
      },
      {
        title: "Security by Design",
        body: "Sicherheit erstreckt sich über jede Ebene — IoT-Geräte, Infrastruktur, Kommunikation, Speicherung und Anwendungen.",
      },
      {
        title: "Data Governance",
        body: "Klare Richtlinien für Zugriff, Nutzung, Aufbewahrung, Qualität und Rückverfolgbarkeit jedes Datensatzes.",
      },
      {
        title: "Verantwortungsvolle KI",
        body: "Aufsicht, Transparenz, Dokumentation und Kontrollmechanismen, mit menschlicher Überwachung, wo sie anwendbar ist.",
      },
    ],
    governanceFooter:
      "Die Architektur berücksichtigt die EU-Datenschutz-Grundverordnung, das anwendbare spanische Datenschutzrecht, europäische Anforderungen an KI-Systeme, Datenminimierung, Zugriffskontrolle, Cybersicherheit, Rückverfolgbarkeit und Data Governance.",
    positioningHeading: "Positionierung",
    positioningBody:
      "CBLX ist keine App zur Abfallverwaltung, kein Containerhersteller, kein Sensorsystem, kein Routenoptimierungstool und kein kommunales Dashboard. Es ist eine ganzheitliche Intelligenzplattform für urbanes Management, beginnend mit einer der essenziellen Dienstleistungen jeder Stadt: Abfall. Die Kombination aus vernetzter Infrastruktur, IoT, Daten, künstlicher Intelligenz, Optimierung und Analytik bildet den technologischen Kern des Projekts.",
  },
  capabilityTrack: {
    label: "Nachweisliche Fähigkeiten",
    heading: "Was wir aufgebaut haben",
    items: [
      {
        title: "Engineering fundamentaler Modelle",
        stage: "Plattform",
        summary:
          "Neuartige Architektur für effizientere Modellskalierung mit bahnbrechender Reasoning-Fähigkeit",
        body: "Forschungs- und Engineering-Praxis, geprägt von führenden KI-Institutionen. Arbeit an effizienter Skalierung mit fortgeschrittenem Reasoning, mit Fokus auf verantwortungsvollen Fähigkeitsausbau und integrierte Sicherheitsforschung.",
      },
      {
        title: "Unternehmens-KI-Plattform",
        stage: "Produktion",
        summary: "End-to-End-Plattform für Bereitstellung, Überwachung und Optimierung von KI-Modellen im großen Maßstab",
        body: "Infrastruktur-Engineering nach Hyperscaler-Standards. Lösung kritischer Engpässe bei Kosten, Latenz und Zuverlässigkeit, mit messbarer Akzeptanz bei Unternehmen.",
      },
      {
        title: "KI-Agenten für Wissensarbeit",
        stage: "Im Einsatz",
        summary: "Autonome Agenten automatisieren hochwertige Workflows in professionellen Dienstleistungen",
        body: "Tiefgehende Fachexpertise, angewendet auf hochwertige Branchen, mit im Feld validiertem Product-Market-Fit und einem klaren Weg zu bedeutendem Umsatzwachstum.",
      },
    ],
    partnerReasons: [
      {
        title: "Tiefe technische Expertise",
        body: "Unser Team bringt direkte Erfahrung in KI-Forschung, Infrastruktur-Engineering und Unternehmensskalierung mit. Wir verstehen die Probleme, die Sie lösen, auf technischer Ebene.",
      },
      {
        title: "Strategisches Netzwerk",
        body: "Zugang zu führenden KI-Forschungsinstitutionen, Unternehmenskunden und Infrastrukturbetreibern. Strategische Kontakte und Partnerschaften, die Ihre Wirkung verstärken.",
      },
      {
        title: "Verbindliches Engagement",
        body: "Langfristiges Engagement im Einklang mit ambitionierten Forschungs-Roadmaps. Wir unterstützen Entdeckung und technische Tiefe ohne Druck zur vorzeitigen Monetarisierung.",
      },
    ],
  },
  team: {
    label: "Führung",
    heading: "Gründer & CEO",
    portraitAlt: "Fernando Stimac Jaén, Gründer & CEO von Caelum Private Equity",
    name: "Fernando Stimac Jaén",
    role: "Gründer & CEO · Madrid, Spanien",
    tagline: "29 Jahre globale Unternehmensführung · KI- & Infrastrukturstrategie",
    bio: [
      "Kaufmännischer Leiter mit nahezu drei Jahrzehnten Erfahrung im Umsatzaufbau in LATAM und Europa. Derzeit Commercial Real Estate Consultant bei Engel & Völkers España, verantwortlich für das Luxus-Mietgeschäft in den gefragtesten Bezirken Madrids — vom Listing bis zum Vertragsabschluss, mit CRM-Automatisierung, die die Konversionsrate um 62 % steigerte.",
      "Zuvor trieb er die regionale Expansion bei Conagra Brands in Uruguay, Bolivien und Paraguay voran (+48 % regionaler Umsatz) sowie die Geschäftsentwicklung bei JBS in Osteuropa, Chile und der Karibik, mit Verantwortung für internationale Lieferketten und SAP-basierte Leistungsanalysen.",
    ],
    careerLabel: "Werdegang",
    career: [
      {
        period: "2021 — heute",
        company: "Engel & Völkers España",
        role: "Commercial Real Estate Consultant",
      },
      { period: "2019 — 2021", company: "Conagra Brands", role: "Export Manager" },
      { period: "2012 — 2019", company: "JBS", role: "Export Sales Manager" },
      {
        period: "1995 — 2012",
        company: "Pernod Ricard · Diageo",
        role: "Vertrieb & Gastronomiemanagement",
      },
    ],
    certificationsLabel: "Zertifizierungen",
    certifications: [
      "SAP Cloud ERP · SAP",
      "Cloud Onboarding for SAP Cloud ERP · SAP",
      "AWS Cloud Services · Amazon Web Services",
      "Claude 101 & Claude Code 101 · Anthropic",
      "Agents & Workflows · OpenAI",
      "AI Foundations · OpenAI",
    ],
    educationLabel: "Ausbildung & Sprachen",
    education: [
      {
        degree: "MBA, Disruptive Technology Enterprise Management",
        school: "The University of Texas at San Antonio",
      },
      {
        degree: "BBA, Business Administration & Management",
        school: "The University of Texas at San Antonio",
      },
    ],
    languages: "Spanisch (Muttersprache) · Englisch (verhandlungssicher) · Kroatisch · Portugiesisch",
    advisoryLabel: "Beirat & Partner",
    advisory: [
      {
        title: "KI-Forschung",
        body: "Direkte Verbindungen zu führenden Forschungsinstitutionen und Frontier-KI-Labors. Beratung zu technischer Ausrichtung und Fähigkeitsdurchbrüchen.",
      },
      {
        title: "Infrastruktur",
        body: "Expertise in Compute-Plattformen, Cloud-Bereitstellung und Skalierung von Unternehmensinfrastruktur durch ehemalige Hyperscaler-Ingenieure.",
      },
      {
        title: "Unternehmen",
        body: "Beziehungen zu Unternehmenskunden und Betreibern, die KI-Produkte auf bedeutenden Umsatz und breite Akzeptanz skaliert haben.",
      },
    ],
  },
  contact: {
    label: "Kontakt",
    heading: "Kontaktieren Sie uns",
    paragraph:
      "Wir sind stets an Gesprächen mit Teams interessiert, die an der Spitze der KI-Forschung und -Infrastruktur arbeiten. Ob Sie fundamentale Modelle voranbringen, ermöglichende Infrastruktur aufbauen oder Unternehmens-KI im großen Maßstab einsetzen — wir freuen uns, von Ihnen zu hören.",
    cta: "Gespräch beginnen",
    emailLabel: "E-Mail",
    websiteLabel: "Website",
    locationLabel: "Standort",
    location: "Madrid, Spanien",
  },
  footer: {
    logoAlt: "Caelum Private Equity",
    description:
      "Caelum Private Equity entwickelt Systeme künstlicher Intelligenz, ermöglichende Infrastruktur und Unternehmenstechnologie — darunter ATLAS, unsere consent-native Multi-Agenten-Plattform für Immobilien, und CBLX, unsere Smart-City-Plattform für urbane Intelligenz.",
    developmentAreasLabel: "Entwicklungsbereiche",
    developmentAreas: ["Fundamentale Modelle", "KI-Infrastruktur", "Unternehmens-KI", "Verantwortungsvolle KI"],
    companyLabel: "Unternehmen",
    companyLinks: [
      { label: "Engineering-Prinzipien", href: "#principles" },
      { label: "ATLAS", href: "#atlas" },
      { label: "CBLX", href: "#cblx" },
      { label: "Team", href: "#team" },
      { label: "Kontakt", href: "#contact" },
    ],
    copyright:
      "© 2026 Caelum Private Equity. Alle Rechte vorbehalten. Diese Mitteilung stellt kein Angebot zum Verkauf und keine Aufforderung zum Kauf von Wertpapieren dar. Die Wertentwicklung der Vergangenheit ist kein Indikator für zukünftige Ergebnisse.",
  },
};
