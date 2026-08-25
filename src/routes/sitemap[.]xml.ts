import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { LOCALES, LOCALE_PATH, type Locale } from "@/lib/i18n-seo";
import logoAsset from "@/assets/cpexs-logo.png.asset.json";
import founderAsset from "@/assets/fernando.png.asset.json";

// TODO: replace with the project's public domain once a custom domain or published URL is set.
const BASE_URL = "";

interface SitemapUrl {
  locale: Locale;
  path: string;
  priority: string;
  changefreq: string;
}

interface ImageEntry {
  url: string;
  title: string;
  caption: string;
}

const URLS: SitemapUrl[] = LOCALES.map((locale) => ({
  locale,
  path: LOCALE_PATH[locale],
  priority: locale === "es" ? "1.0" : "0.8",
  changefreq: "weekly",
}));

const IMAGES: Record<Locale, ImageEntry[]> = {
  es: [
    {
      url: logoAsset.url,
      title: "Logo de Caelum Private Equity",
      caption: "Logotipo corporativo de Caelum Private Equity (CPEXS).",
    },
    {
      url: founderAsset.url,
      title: "Fernando Stimac Jaén",
      caption: "Fernando Stimac Jaén, fundador de Caelum Private Equity.",
    },
  ],
  en: [
    {
      url: logoAsset.url,
      title: "Caelum Private Equity logo",
      caption: "Corporate logo of Caelum Private Equity (CPEXS).",
    },
    {
      url: founderAsset.url,
      title: "Fernando Stimac Jaén",
      caption: "Fernando Stimac Jaén, founder of Caelum Private Equity.",
    },
  ],
  de: [
    {
      url: logoAsset.url,
      title: "Caelum Private Equity Logo",
      caption: "Unternehmenslogo von Caelum Private Equity (CPEXS).",
    },
    {
      url: founderAsset.url,
      title: "Fernando Stimac Jaén",
      caption: "Fernando Stimac Jaén, Gründer von Caelum Private Equity.",
    },
  ],
};

const fullUrl = (path: string) => `${BASE_URL}${path}`;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const lines: string[] = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
        ];

        for (const url of URLS) {
          lines.push(`  <url>`);
          lines.push(`    <loc>${escapeXml(fullUrl(url.path))}</loc>`);

          for (const code of [...LOCALES, "x-default" as const]) {
            const href = code === "x-default" ? LOCALE_PATH.es : LOCALE_PATH[code];
            lines.push(
              `    <xhtml:link rel="alternate" hreflang="${code}" href="${escapeXml(fullUrl(href))}" />`,
            );
          }

          for (const image of IMAGES[url.locale]) {
            lines.push(`    <image:image>`);
            lines.push(`      <image:loc>${escapeXml(fullUrl(image.url))}</image:loc>`);
            lines.push(`      <image:title>${escapeXml(image.title)}</image:title>`);
            lines.push(`      <image:caption>${escapeXml(image.caption)}</image:caption>`);
            lines.push(`    </image:image>`);
          }

          lines.push(`    <changefreq>${url.changefreq}</changefreq>`);
          lines.push(`    <priority>${url.priority}</priority>`);
          lines.push(`  </url>`);
        }

        lines.push(`</urlset>`);

        const xml = lines.join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
