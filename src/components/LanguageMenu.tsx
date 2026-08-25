import { Link, useLocation } from "@tanstack/react-router";
import { Globe } from "lucide-react";
import { LOCALE_PATH, localeFromPath, type Locale } from "@/lib/i18n-seo";
import { useContent } from "@/lib/content";

const LANGUAGES: { code: Locale; label: string }[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

export function LanguageMenu() {
  const pathname = useLocation({ select: (l) => l.pathname });
  const active = localeFromPath(pathname);
  const ariaLabel = useContent().langMenu.ariaLabel;

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className="flex items-center gap-1 border border-border px-1.5 py-1"
    >
      <Globe
        className="mx-1 size-3.5 shrink-0 text-muted-foreground"
        strokeWidth={1.5}
        aria-hidden="true"
      />
      {LANGUAGES.map((lang) => {
        const isActive = active === lang.code;
        return (
          <Link
            key={lang.code}
            to={LOCALE_PATH[lang.code]}
            hrefLang={lang.code}
            title={lang.label}
            aria-label={lang.label}
            aria-current={isActive ? "true" : undefined}
            className={`px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-accent"
            }`}
          >
            {lang.code}
          </Link>
        );
      })}
    </div>
  );
}
