import { useLocation } from "@tanstack/react-router";
import { localeFromPath, type Locale } from "@/lib/i18n-seo";
import type { SiteContent } from "./types";
import { en } from "./en";
import { es } from "./es";
import { de } from "./de";

export const CONTENT: Record<Locale, SiteContent> = { en, es, de };

export function useContent(): SiteContent {
  const pathname = useLocation({ select: (l) => l.pathname });
  return CONTENT[localeFromPath(pathname)];
}
