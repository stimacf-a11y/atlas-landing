export type Locale = "en" | "es" | "de";

export const LOCALES: Locale[] = ["es", "en", "de"];

/** Path each locale is served from. Spanish is the primary language at the site root. */
export const LOCALE_PATH: Record<Locale, string> = {
  es: "/",
  en: "/en",
  de: "/de",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  es: "es-ES",
  de: "de-DE",
};

type Seo = { title: string; description: string; ogDescription: string };

export const SEO: Record<Locale, Seo> = {
  en: {
    title: "Caelum Private Equity — Technology Development & ATLAS AI",
    description:
      "Caelum Private Equity builds foundational AI systems, enabling infrastructure and enterprise technology — including ATLAS, a consent-native multi-agent platform for real estate.",
    ogDescription:
      "We build foundational AI systems, enabling infrastructure and enterprise technology. ATLAS is our consent-native multi-agent platform for real estate.",
  },
  es: {
    title: "Caelum Private Equity — Desarrollo tecnológico e IA ATLAS",
    description:
      "Caelum Private Equity desarrolla sistemas de inteligencia artificial, infraestructura habilitadora y tecnología empresarial — incluido ATLAS, plataforma multiagente con consentimiento nativo para el sector inmobiliario.",
    ogDescription:
      "Desarrollamos sistemas de IA, infraestructura habilitadora y tecnología empresarial. ATLAS es nuestra plataforma multiagente con consentimiento nativo para el inmobiliario.",
  },
  de: {
    title: "Caelum Private Equity — Technologieentwicklung & ATLAS KI",
    description:
      "Caelum Private Equity entwickelt KI-Basissysteme, unterstützende Infrastruktur und Unternehmenstechnologie — darunter ATLAS, eine Multi-Agenten-Plattform mit nativer Einwilligung für die Immobilienbranche.",
    ogDescription:
      "Wir entwickeln KI-Basissysteme, unterstützende Infrastruktur und Unternehmenstechnologie. ATLAS ist unsere Multi-Agenten-Plattform mit nativer Einwilligung für Immobilien.",
  },
};

/** Locale-specific head() payload with canonical + reciprocal hreflang alternates. */
export function localeHead(locale: Locale) {
  const seo = SEO[locale];
  const path = LOCALE_PATH[locale];

  return {
    meta: [
      { title: seo.title },
      { name: "description", content: seo.description },
      { property: "og:title", content: seo.title },
      { property: "og:description", content: seo.ogDescription },
      { property: "og:url", content: path },
      { property: "og:locale", content: HTML_LANG[locale].replace("-", "_") },
      { property: "og:site_name", content: "Caelum Private Equity" },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.ogDescription },
    ],
    links: [
      { rel: "canonical", href: path },
      ...LOCALES.map((code) => ({
        rel: "alternate",
        hreflang: code,
        href: LOCALE_PATH[code],
      })),
      { rel: "alternate", hreflang: "x-default", href: LOCALE_PATH.es },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Caelum Private Equity",
          alternateName: "CPEXS",
          description: seo.description,
          url: path,
          address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
          email: "stimacf@cpexs.com",
          inLanguage: HTML_LANG[locale],
        }),
      },
    ],
  };
}

export function localeFromPath(pathname: string): Locale {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/de")) return "de";
  return "es";
}
