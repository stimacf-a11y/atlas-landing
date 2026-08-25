import { lazy, Suspense, useEffect, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import {
  detectRenderTier,
  effectivePixelDensity,
  TIER_PROFILES,
  type RenderTier,
} from "@/lib/render-tier";

const HeroShaderGradient = lazy(() => import("./HeroShaderGradient"));

/** Static CSS fallback used during SSR, while loading, and on low-end devices. */
function StaticFallback() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 100% at 18% 10%, oklch(0.646 0.163 55.5 / 0.28) 0%, transparent 55%)," +
          "radial-gradient(90% 90% at 85% 0%, oklch(0.5 0.09 250 / 0.22) 0%, transparent 60%)," +
          "var(--background)",
      }}
    />
  );
}

function AdaptiveGradient() {
  const [tier, setTier] = useState<RenderTier | null>(null);
  const [dpr, setDpr] = useState(1);

  useEffect(() => {
    const resolve = () => {
      setTier(detectRenderTier());
      setDpr(window.devicePixelRatio || 1);
    };
    resolve();
    window.addEventListener("resize", resolve);
    return () => window.removeEventListener("resize", resolve);
  }, []);

  if (tier === null || tier === "none") return <StaticFallback />;

  const profile = TIER_PROFILES[tier];

  return (
    <Suspense fallback={<StaticFallback />}>
      <HeroShaderGradient
        pixelDensity={effectivePixelDensity(profile, dpr)}
        profile={profile}
      />
    </Suspense>
  );
}

export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <ClientOnly fallback={<StaticFallback />}>
        <AdaptiveGradient />
      </ClientOnly>
      {/* Legibility veil over the animated gradient */}
      <div className="absolute inset-0 bg-background/55" />
    </div>
  );
}
