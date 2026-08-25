export type RenderTier = "none" | "low" | "medium" | "high";

export interface TierProfile {
  pixelDensity: number;
  uDensity: number;
  uStrength: number;
  grain: "on" | "off";
  animateCamera: boolean;
}

// animateCamera is true on every tier — only "none" (reduced motion, no WebGL,
// or a genuinely underpowered device) turns motion off. A "low" tier still
// moves; it just renders at a lower pixel density and shader density.
export const TIER_PROFILES: Record<Exclude<RenderTier, "none">, TierProfile> = {
  low: { pixelDensity: 0.75, uDensity: 0.9, uStrength: 2.6, grain: "off", animateCamera: true },
  medium: { pixelDensity: 1, uDensity: 1.15, uStrength: 3.4, grain: "off", animateCamera: true },
  high: { pixelDensity: 1.5, uDensity: 1.3, uStrength: 4, grain: "on", animateCamera: true },
};

/**
 * Picks a WebGL quality tier from device signals. Browser-only: call it from
 * useEffect, never during render or SSR. "none" means fall back to static CSS.
 */
export function detectRenderTier(): RenderTier {
  if (typeof window === "undefined") return "none";

  const nav = navigator as Navigator & {
    deviceMemory?: number;
    hardwareConcurrency?: number;
    connection?: { saveData?: boolean; effectiveType?: string };
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "none";
  if (nav.connection?.saveData) return "none";
  if (/2g|slow-2g/.test(nav.connection?.effectiveType ?? "")) return "none";

  try {
    const canvas = document.createElement("canvas");
    if (!canvas.getContext("webgl2") && !canvas.getContext("webgl")) return "none";
  } catch {
    return "none";
  }

  const width = window.innerWidth;
  // Browsers commonly cap or omit hardwareConcurrency/deviceMemory for privacy
  // (Safari and Firefox often report exactly 4, or nothing at all) — treat a
  // missing/low-but-plausible value as "unknown", not "weak device".
  const cores = nav.hardwareConcurrency ?? 8;
  const memory = nav.deviceMemory ?? 8;
  const dpr = window.devicePixelRatio || 1;
  const coarse = window.matchMedia("(pointer: coarse)").matches;

  if (width < 768 && coarse) return "none";
  if (width < 480) return "none";
  if (cores <= 2 || memory <= 2) return "none";

  if ((coarse && width < 1024) || dpr > 3) return "low";
  if (width < 1440 || cores <= 4) return "medium";
  return "high";
}

/** Caps the effective render resolution so high-DPR phones don't over-render. */
export function effectivePixelDensity(profile: TierProfile, dpr: number): number {
  return Math.min(profile.pixelDensity, Math.max(0.5, 2 / Math.max(1, dpr)) * 1.5);
}
