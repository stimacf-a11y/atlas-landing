import { useRef, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { TierProfile } from "@/lib/render-tier";

const BASE = { cPolarAngle: 125, cDistance: 32 };

/**
 * Browser-only shader gradient. Never import this module statically from a
 * route: @react-three/fiber requires a real WebGL context.
 *
 * Quality (pixel density, noise detail, grain, camera motion) comes from the
 * device tier resolved in HeroBackground. GSAP drives a slow yoyo loop on the
 * camera params, inside a gsap.context via useGSAP so it is reverted on unmount.
 */
export default function HeroShaderGradient({
  pixelDensity,
  profile,
}: {
  pixelDensity: number;
  profile: TierProfile;
}) {
  const scope = useRef<HTMLDivElement>(null);
  const [camera, setCamera] = useState(BASE);

  useGSAP(
    () => {
      if (!profile.animateCamera) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const state = { ...BASE };
      const commit = () =>
        setCamera({
          cPolarAngle: Math.round(state.cPolarAngle * 10) / 10,
          cDistance: Math.round(state.cDistance * 10) / 10,
        });

      const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
      tl.to(state, { cPolarAngle: 136, duration: 14, onUpdate: commit }, 0);
      tl.to(state, { cDistance: 36, duration: 18, onUpdate: commit }, 0);

      return () => setCamera(BASE);
    },
    { scope, dependencies: [profile.animateCamera] },
  );

  return (
    <div ref={scope} className="absolute inset-0">
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        pixelDensity={pixelDensity}
        fov={45}
        pointerEvents="none"
        powerPreference="low-power"
      >
        <ShaderGradient
          cDistance={camera.cDistance}
          cPolarAngle={camera.cPolarAngle}
          uDensity={profile.uDensity}
          uStrength={profile.uStrength}
          uSpeed={profile.animateCamera ? 0.4 : 0.2}
          grain={profile.grain}
          color1="#d97706"
          color2="#4a4a4a"
          color3="#1a1a1a"
        />
      </ShaderGradientCanvas>
    </div>
  );
}
