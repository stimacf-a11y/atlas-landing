export type TitleBody = { title: string; body: string };

export type SiteContent = {
  nav: {
    focus: string;
    principles: string;
    atlas: string;
    cblx: string;
    team: string;
    contact: string;
  };
  langMenu: { ariaLabel: string };
  hero: {
    badge: string;
    heading: string;
    paragraph: string;
    cta: string;
  };
  focus: {
    label: string;
    heading: string;
    intro: string;
    items: TitleBody[];
  };
  principles: {
    label: string;
    heading: string;
    items: TitleBody[];
  };
  atlas: {
    label: string;
    heading: string;
    intro: string[];
    agentPipelineLabel: string;
    agents: { id: string; name: string; note: string }[];
    agentFooter: string;
    markets: { tag: string; title: string; body: string }[];
    asymmetryParagraph: string;
    capabilities: TitleBody[];
    whyHeading: string;
    whyParagraph: string;
  };
  cblx: {
    label: string;
    heading: string;
    kicker: string;
    intro: string[];
    conceptualEvolutionLabel: string;
    conceptualEvolutionBody1: string;
    conceptualEvolutionBody2: string;
    stack: { id: string; title: string; body: string }[];
    questionsHeading: string;
    questions: { id: string; q: string; a: string }[];
    operatingModelHeading: string;
    operatingModelBody: string;
    signals: string[];
    valuePropositionLabel: string;
    value: { n: string; title: string; body: string }[];
    targetUsersLabel: string;
    users: string[];
    economicsLabel: string;
    economicsBody1: string;
    economicsBody2: string;
    governanceLabel: string;
    governance: TitleBody[];
    governanceFooter: string;
    positioningHeading: string;
    positioningBody: string;
  };
  capabilityTrack: {
    label: string;
    heading: string;
    items: { title: string; stage: string; summary: string; body: string }[];
    partnerReasons: TitleBody[];
  };
  team: {
    label: string;
    heading: string;
    portraitAlt: string;
    name: string;
    role: string;
    tagline: string;
    bio: string[];
    careerLabel: string;
    career: { period: string; company: string; role: string }[];
    certificationsLabel: string;
    certifications: string[];
    educationLabel: string;
    education: { degree: string; school: string }[];
    languages: string;
    advisoryLabel: string;
    advisory: TitleBody[];
  };
  contact: {
    label: string;
    heading: string;
    paragraph: string;
    cta: string;
    emailLabel: string;
    websiteLabel: string;
    locationLabel: string;
    location: string;
  };
  footer: {
    logoAlt: string;
    description: string;
    developmentAreasLabel: string;
    developmentAreas: string[];
    companyLabel: string;
    companyLinks: { label: string; href: string }[];
    copyright: string;
  };
};
