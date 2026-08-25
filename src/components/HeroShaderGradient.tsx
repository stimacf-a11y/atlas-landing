import { useRef, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { TierProfile } from "@/lib/render-tier";

const BASE = { cPolarAngle: 110, cDistance: 30, cAzimuthAngle: 0 };

/**
 * Browser-only shader gradient. Never import this module statically from a
 * route: @react-three/fiber requires a real WebGL context.
 *
 * Quality (pixel density, noise detail, grain) comes from the device tier
 * resolved in HeroBackground. GSAP drives a continuous camera orbit — a
 * never-ending azimuth rotation (linear ease, no yoyo) plus a slow polar/
 * distance breathing — inside a gsap.context via useGSAP so it reverts on
 * unmount. This mirrors the "gsap.to(props, { repeat: -1, ease: 'none',
 * onUpdate })" pattern for continuous scene motion.
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
          cAzimuthAngle: Math.round(state.cAzimuthAngle * 10) / 10,
        });

      // Continuous orbit: azimuth sweeps a full 360° on an unbroken loop.
      gsap.to(state, {
        cAzimuthAngle: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
        onUpdate: commit,
      });

      // Gentle polar/distance breathing layered on top, so the orbit isn't flat.
      const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
      tl.to(state, { cPolarAngle: 145, duration: 12, onUpdate: commit }, 0);
      tl.to(state, { cDistance: 38, duration: 16, onUpdate: commit }, 0);

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
          cAzimuthAngle={camera.cAzimuthAngle}
          uDensity={profile.uDensity}
          uStrength={profile.uStrength}
          uSpeed={0.4}
          grain={profile.grain}
          color1="#d97706"
          color2="#4a4a4a"
          color3="#1a1a1a"
        />
      </ShaderGradientCanvas>
    </div>
  );
}
