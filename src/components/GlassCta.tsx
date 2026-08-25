import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const LiquidGlassCta = lazy(() => import("./LiquidGlassCta"));

interface GlassCtaProps {
  href: string;
  label: string;
}

/** Solid accent button: SSR fallback, loading state and small screens. */
function SolidCta({ href, label }: GlassCtaProps) {
  return (
    <a
      href={href}
      className="group inline-flex shrink-0 items-center gap-3 bg-accent px-7 py-4 font-display text-sm font-semibold text-accent-foreground transition-[filter] hover:brightness-110"
    >
      {label}
      <ArrowUpRight
        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2}
      />
    </a>
  );
}

export function GlassCta({ href, label }: GlassCtaProps) {
  const isMobile = useIsMobile();

  return (
    <ClientOnly fallback={<SolidCta href={href} label={label} />}>
      {isMobile ? (
        <SolidCta href={href} label={label} />
      ) : (
        <Suspense fallback={<SolidCta href={href} label={label} />}>
          <LiquidGlassCta href={href} label={label} />
        </Suspense>
      )}
    </ClientOnly>
  );
}
