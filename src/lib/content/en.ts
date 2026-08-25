import type { SiteContent } from "./types";

export const en: SiteContent = {
  nav: {
    focus: "Focus",
    principles: "Principles",
    atlas: "ATLAS",
    cblx: "CBLX",
    team: "Team",
    contact: "Contact",
  },
  langMenu: { ariaLabel: "Language" },
  hero: {
    badge: "Technology development · Madrid, Spain",
    heading: "Building the Next Generation of AI",
    paragraph:
      "Caelum Private Equity builds foundational intelligence systems, enabling infrastructure, and transformative enterprise AI. Our engineers and researchers solve the hardest problems in artificial intelligence — and ship them as production systems.",
    cta: "Start a Conversation",
  },
  focus: {
    label: "Development Focus",
    heading: "Where We Build",
    intro:
      "We build across the AI stack — from foundational research to enterprise deployment. Our engineering agenda prioritises technical excellence, responsible development, and defensible competitive advantage.",
    items: [
      {
        title: "Foundational Models",
        body: "Advanced reasoning systems, multimodal architectures, and breakthrough capabilities pushing the frontier of AI research.",
      },
      {
        title: "AI Infrastructure",
        body: "Compute platforms, training frameworks, safety tools, and deployment systems enabling enterprise-scale AI applications.",
      },
      {
        title: "Enterprise AI",
        body: "Workflow automation, productivity tools, and domain-specific applications translating AI capability into measurable business value.",
      },
      {
        title: "Safety & Governance",
        body: "Interpretability research, alignment frameworks, and governance solutions for responsible AI development.",
      },
      {
        title: "Efficient Systems",
        body: "Energy-optimized models, edge AI, and resource-constrained environments making AI capability universally accessible.",
      },
      {
        title: "AI in Science",
        body: "Drug discovery, materials science, climate modeling. AI accelerating research cycles and enabling scientific breakthroughs.",
      },
    ],
  },
  principles: {
    label: "Engineering Principles",
    heading: "How We Build",
    items: [
      {
        title: "Technical Excellence",
        body: "We build through rigorous research and engineering. Scientific integrity and technical depth guide every decision, and our roadmaps are resourced for ambitious technical work rather than short cycles.",
      },
      {
        title: "Infrastructure & Scale",
        body: "Foundational models and enabling infrastructure reshape entire sectors. We build the platforms and tools for safe, scalable AI deployment. Infrastructure unlocks a thousand applications.",
      },
      {
        title: "Long-Horizon Engineering",
        body: "Transformative AI development requires long-term commitment. We work on multi-year horizons with sustained operational support, pursuing hard research without pressure for premature monetization.",
      },
      {
        title: "Responsible Growth",
        body: "Capability and responsibility are inseparable. We prioritize safety research, interpretability, and governance. AI systems must be developed thoughtfully and deployed responsibly to earn lasting trust.",
      },
    ],
  },
  atlas: {
    label: "Flagship System",
    heading: "ATLAS — Consent-Native Data Infrastructure",
    intro: [
      "ATLAS is an artificial intelligence system built for the real estate sector, serving three distinct markets on one platform: B2B, B2C and C2C. It is a multi-agent architecture running on data that is consented at the point of origin rather than scraped after the fact — technically deep, with a defensible moat and compliance designed in from the first commit.",
      "Operationally, ATLAS is a single system in which three specialised agents run continuously — twenty-four hours a day, seven days a week — to source residential stock before it reaches the open market. The first ingests and scores signals to identify properties with a measurable probability of sale; the second evaluates each lead across corroboration, lead time, intent and data completeness, and decides the route it should take; the third is the interface to the human team, delivering an explainable brief and returning field feedback that recalibrates the model. They coordinate through events rather than direct calls, so the pipeline degrades gracefully instead of failing as one.",
    ],
    agentPipelineLabel: "Agent pipeline",
    agents: [
      { id: "A1", name: "Signal ingestion & scoring", note: "Event bus · async" },
      { id: "A2", name: "Lead evaluation & routing", note: "Event bus · async" },
      { id: "A3", name: "Human interface & feedback loop", note: "Event bus · feedback" },
    ],
    agentFooter:
      "Each market is a distinct participant with its own consent regime, and all three transact through the same platform.",
    markets: [
      {
        tag: "B2B",
        title: "Real Estate Agencies",
        body: "Agencies subscribe to a qualified stream of homeowners who have themselves asked to be contacted, replacing cold prospecting with documented intent. They operate under a contractual affiliation, so a single blanket consent from the owner suffices.",
      },
      {
        tag: "B2C",
        title: "Platform to Homeowner",
        body: "A free valuation app is the entry point: the owner photographs the property, receives a valuation with condition assessed by computer vision, and decides explicitly and granularly who may reach them and through which channel.",
      },
      {
        tag: "C2C",
        title: "Seller to Buyer",
        body: "A seller can make a listing visible to registered buyers searching their area without exposing any contact detail. When a buyer signals interest, the seller confirms case by case before anything is disclosed — a mediated flow, since no contract binds a private buyer.",
      },
    ],
    asymmetryParagraph:
      "The asymmetry between those three regimes is deliberate: consent design is calibrated to the accountability of whoever sits on the other end. A contractually bound agency and an anonymous private buyer do not warrant the same disclosure, and the system enforces that distinction in code.",
    capabilities: [
      {
        title: "Geospatial Matching Engine",
        body: "Buyer criteria and visible listings are matched by a structured spatial query over an indexed property database — area, price band and typology resolved geometrically, not by a language model, so results are exact, cheap to run and reproducible.",
      },
      {
        title: "Deterministic, Auditable Scoring",
        body: "Intent scoring is a transparent, explainable model with a full breakdown of contributing signals — not a black box. Explainability is a design constraint, driven by the EU AI Act rather than retrofitted for it.",
      },
      {
        title: "Consent as the Moat",
        body: "First-party consented data cannot be replicated by aggregation or scraping. Public signals inform prioritisation only; direct outreach requires explicit, granular consent — enforced in code at two independent layers.",
      },
      {
        title: "Computer Vision Valuation",
        body: "Property condition assessed from user-submitted photography, feeding a hedonic valuation model that always returns a range with comparables — never an unqualified single figure.",
      },
      {
        title: "EU Data Residency by Design",
        body: "Fully deployed in an EU region from day one, with model inference routed in-region to avoid international transfer exposure. Infrastructure as code from the first commit for full traceability.",
      },
      {
        title: "Event-Driven Resilience",
        body: "Agents publish and consume events through queues with dead-letter handling, so a failed ingestion cycle retries on its own without stalling scoring or the human-facing pipeline behind it.",
      },
    ],
    whyHeading: "Why This Represents Our Engineering",
    whyParagraph:
      "ATLAS is not a wrapper on a general-purpose model. Its advantage compounds across three axes at once: a legal basis competitors cannot copy without rebuilding their business model, an auditable scoring system that satisfies regulatory scrutiny by construction, and infrastructure that scales without a migration ahead of it. That is the shape of the systems we build — technically deep, structurally defensible, and responsible by design rather than by remediation.",
  },
  cblx: {
    label: "Smart City Platform",
    heading: "CBLX — Turning Urban Data into Urban Intelligence",
    kicker: "Smart City · Intelligent Waste Management · Urban Intelligence",
    intro: [
      "CBLX is a Smart City technology platform built to transform urban waste management through artificial intelligence, IoT, automation, traceability and advanced data analysis. It starts from one clear premise: turn an infrastructure that has traditionally been reactive into a connected, measurable, predictive and progressively more efficient urban system.",
      "CBLX is not only a way to manage waste. Its long-term objective is to convert the data generated by urban infrastructure into useful intelligence for administrations, operators and cities — moving from a traditional, reactive collection model to an intelligent, predictive and data-driven one.",
      "Through IoT, artificial intelligence, predictive analytics and operational optimisation, the platform makes it possible to understand what is happening in the city, anticipate what it will need, and use its resources more efficiently. From waste management to urban intelligence.",
    ],
    conceptualEvolutionLabel: "Conceptual evolution",
    conceptualEvolutionBody1:
      "The city generates waste. Waste generates data. Data reveals patterns. Patterns enable prediction. Prediction optimises decisions. Optimised decisions make cities more efficient.",
    conceptualEvolutionBody2:
      "CBLX optimises waste management in a first stage. In later stages the same architecture can absorb new data sources and develop additional Urban Intelligence capabilities.",
    stack: [
      {
        id: "01",
        title: "Connected Containers",
        body: "Sensor-equipped containers measuring fill level and weight, with compaction where required and RFID identification for end-to-end traceability of every asset.",
      },
      {
        id: "02",
        title: "Fleet Telemetry",
        body: "Sensors and telemetry on vehicles and collection systems, monitoring infrastructure and field operations continuously rather than through periodic reporting.",
      },
      {
        id: "03",
        title: "Predictive Intelligence",
        body: "AI models analyse waste generation patterns to forecast fill levels and future collection demand, detect anomalies and recommend operational action.",
      },
      {
        id: "04",
        title: "Dynamic Optimisation",
        body: "Routes, frequencies and schedules are optimised against real demand and forecast, replacing predominantly static calendars with a demand-driven model.",
      },
      {
        id: "05",
        title: "Operational & Executive Dashboards",
        body: "KPIs, historical, operational and predictive analysis presented per user profile, with access, visualisation and administration levels by role.",
      },
      {
        id: "06",
        title: "Interoperable Architecture",
        body: "Prepared to integrate municipal systems, Smart City platforms, fleet management, IoT infrastructure, external APIs, analytics and GIS systems.",
      },
    ],
    questionsHeading: "Four Questions the System Answers",
    questions: [
      {
        id: "Q1",
        q: "What is happening?",
        a: "Monitoring and analysis of the current state of the infrastructure.",
      },
      {
        id: "Q2",
        q: "Why is it happening?",
        a: "Identification of patterns, behaviours and probable causes.",
      },
      {
        id: "Q3",
        q: "What will happen next?",
        a: "Predictive models anticipating fill levels, demand and operational needs.",
      },
      {
        id: "Q4",
        q: "What should we do?",
        a: "Recommendations that put the available resources to more efficient use.",
      },
    ],
    operatingModelHeading: "Intelligent Operating Model",
    operatingModelBody:
      "In a conventional system a vehicle runs a route because the calendar says so. CBLX introduces a different logic: which containers need attention, which can wait, and how to organise the available resources. Route optimisation targets unnecessary kilometres, collections of near-empty containers, energy consumption, operating time, idle vehicle capacity, container saturation and the incidents that purely static planning creates.",
    signals: [
      "Fill level",
      "Weight",
      "Available capacity",
      "Location",
      "Generation history",
      "Fill speed",
      "Forecast generation",
      "Operational priority",
      "Vehicle availability",
      "Vehicle capacity",
      "Traffic conditions",
      "Area characteristics",
      "Historical collection frequency",
    ],
    valuePropositionLabel: "Value proposition",
    value: [
      {
        n: "1",
        title: "Efficiency",
        body: "Optimisation of routes, vehicles, personnel, collection frequencies and infrastructure. The objective is to use existing resources better before adding capacity or cost.",
      },
      {
        n: "2",
        title: "Sustainability",
        body: "Fewer unnecessary journeys, lower energy consumption and emissions, less inefficient use of resources — a direct consequence of a better optimised, data-driven operation.",
      },
      {
        n: "3",
        title: "Intelligence",
        body: "Operational data becomes usable information for planning, prediction and decision-making, so infrastructure data holds value beyond the daily round.",
      },
      {
        n: "4",
        title: "Traceability",
        body: "Greater visibility over how the system performs, and the ability to measure outcomes through objective indicators: what happens, when, and how the service evolves.",
      },
    ],
    targetUsersLabel: "Target users",
    users: [
      "City councils",
      "Public administrations",
      "Cleaning & collection concessionaires",
      "Environmental operators",
      "Waste management & treatment firms",
      "Smart City programmes",
      "Large facilities",
      "Urban developments",
      "Private operators at scale",
    ],
    economicsLabel: "Economics & scalability",
    economicsBody1:
      "CBLX must prove operational and economic viability alike. The project model covers CAPEX, OPEX, technology, infrastructure and rollout cost, maintenance, five-year financial scenarios, potential operational savings, return on investment and the economic impact of a better optimised service.",
    economicsBody2:
      "The architecture is modular and scalable by design: pilots in defined zones first, then districts, municipalities, metropolitan areas, regions, large private facilities and new markets — adding devices, sensors, algorithms and data sources without rebuilding the system.",
    governanceLabel: "Privacy, security & compliance",
    governance: [
      {
        title: "Privacy by Design",
        body: "Data protection is built into the architecture from the initial design, not appended to it later.",
      },
      {
        title: "Security by Design",
        body: "Security spans every layer — IoT devices, infrastructure, communications, storage and applications.",
      },
      {
        title: "Data Governance",
        body: "Clear policies for access, use, retention, quality and traceability of every data set.",
      },
      {
        title: "Responsible AI",
        body: "Oversight, transparency, documentation and control mechanisms, with human supervision where it applies.",
      },
    ],
    governanceFooter:
      "The architecture accounts for the EU General Data Protection Regulation, applicable Spanish data protection law, European requirements for AI systems, data minimisation, access control, cybersecurity, traceability and data governance.",
    positioningHeading: "Positioning",
    positioningBody:
      "CBLX is not a waste management app, a container manufacturer, a sensor system, a route optimisation tool or a municipal dashboard. It is an integral intelligence platform for urban management, starting with one of the essential services of any city: waste. The combination of connected infrastructure, IoT, data, artificial intelligence, optimisation and analytics is the technological core of the project.",
  },
  capabilityTrack: {
    label: "Capability Track Record",
    heading: "What We Have Built",
    items: [
      {
        title: "Foundational Model Engineering",
        stage: "Platform",
        summary:
          "Novel architecture enabling more efficient model scaling with breakthrough reasoning capability",
        body: "Research and engineering practice drawn from leading AI institutions. Work on efficient scaling with advanced reasoning, focused on responsible capability advancement and integrated safety research.",
      },
      {
        title: "Enterprise AI Platform",
        stage: "Production",
        summary: "End-to-end platform for AI model deployment, monitoring, and optimization at scale",
        body: "Infrastructure engineering practice at hyperscaler standards. Solving critical bottlenecks in cost, latency, and reliability, with measurable enterprise traction.",
      },
      {
        title: "AI Agents for Knowledge Work",
        stage: "Deployed",
        summary: "Autonomous agents automating high-value professional services workflows",
        body: "Deep domain expertise applied to high-value sectors, with product-market fit validated in the field and a clear path to significant revenue impact.",
      },
    ],
    partnerReasons: [
      {
        title: "Deep Technical Expertise",
        body: "Our team brings direct experience in AI research, infrastructure engineering, and enterprise scaling. We understand the problems you're solving at the technical level.",
      },
      {
        title: "Strategic Network",
        body: "Access to leading AI research institutions, enterprise customers, and infrastructure operators. Strategic introductions and partnerships that amplify your impact.",
      },
      {
        title: "Committed Delivery",
        body: "Long-term commitment aligned with ambitious research roadmaps. We support discovery and technical depth without pressure for premature monetization.",
      },
    ],
  },
  team: {
    label: "Leadership",
    heading: "Founder & CEO",
    portraitAlt: "Fernando Stimac Jaén, Founder & CEO of Caelum Private Equity",
    name: "Fernando Stimac Jaén",
    role: "Founder & CEO · Madrid, Spain",
    tagline: "29 Years Global Enterprise Leadership · AI & Infrastructure Strategy",
    bio: [
      "Commercial leader with nearly three decades building revenue across LATAM and Europe. Currently Commercial Real Estate Consultant at Engel & Völkers España, leading luxury rental operations in Madrid's prime districts — full cycle from listing to contract, with CRM automation that lifted conversion by 62%.",
      "Previously drove regional expansion at Conagra Brands across Uruguay, Bolivia and Paraguay (+48% regional sales), and business development at JBS across Eastern Europe, Chile and the Caribbean, managing international supply chains and SAP-based performance analytics.",
    ],
    careerLabel: "Career",
    career: [
      {
        period: "2021 — present",
        company: "Engel & Völkers España",
        role: "Commercial Real Estate Consultant",
      },
      { period: "2019 — 2021", company: "Conagra Brands", role: "Export Manager" },
      { period: "2012 — 2019", company: "JBS", role: "Export Sales Manager" },
      {
        period: "1995 — 2012",
        company: "Pernod Ricard · Diageo",
        role: "Sales & On-trade Management",
      },
    ],
    certificationsLabel: "Certifications",
    certifications: [
      "SAP Cloud ERP · SAP",
      "Cloud Onboarding for SAP Cloud ERP · SAP",
      "AWS Cloud Services · Amazon Web Services",
      "Claude 101 & Claude Code 101 · Anthropic",
      "Agents & Workflows · OpenAI",
      "AI Foundations · OpenAI",
    ],
    educationLabel: "Education & Languages",
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
    languages: "Spanish (native) · English (full professional) · Croatian · Portuguese",
    advisoryLabel: "Advisory & Partners",
    advisory: [
      {
        title: "AI Research",
        body: "Direct connections with leading research institutions and frontier AI labs. Advisory support on technical direction and capability breakthroughs.",
      },
      {
        title: "Infrastructure",
        body: "Expertise in compute platforms, cloud deployment, and enterprise infrastructure scaling from former hyperscaler engineers.",
      },
      {
        title: "Enterprise",
        body: "Relationships with enterprise customers and operators who've scaled AI products to significant revenue and adoption.",
      },
    ],
  },
  contact: {
    label: "Contact",
    heading: "Get In Touch",
    paragraph:
      "We're always interested in conversations with teams building at the frontier of AI research and infrastructure. Whether you're advancing foundational models, enabling infrastructure, or deploying enterprise AI at scale, we'd love to hear from you.",
    cta: "Start a Conversation",
    emailLabel: "Email",
    websiteLabel: "Website",
    locationLabel: "Location",
    location: "Madrid, Spain",
  },
  footer: {
    logoAlt: "Caelum Private Equity",
    description:
      "Caelum Private Equity develops artificial intelligence systems, enabling infrastructure and enterprise technology — including ATLAS, our consent-native multi-agent platform for real estate, and CBLX, our Smart City urban intelligence platform.",
    developmentAreasLabel: "Development Areas",
    developmentAreas: ["Foundational Models", "AI Infrastructure", "Enterprise AI", "Responsible AI"],
    companyLabel: "Company",
    companyLinks: [
      { label: "Engineering Principles", href: "#principles" },
      { label: "ATLAS", href: "#atlas" },
      { label: "CBLX", href: "#cblx" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    copyright:
      "© 2026 Caelum Private Equity. All rights reserved. This communication is not an offer to sell or a solicitation of an offer to buy any securities. Past performance does not guarantee future results.",
  },
};
