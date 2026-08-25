import { useRef } from "react";
import LiquidGlass from "liquid-glass-react";
import { ArrowUpRight } from "lucide-react";

interface Props {
  href: string;
  label: string;
}

const CONTENT = "flex whitespace-nowrap items-center gap-3 px-7 py-4 font-display text-sm font-semibold";

/** Browser-only: liquid-glass-react uses SVG displacement filters + pointer tracking. */
export default function LiquidGlassCta({ href, label }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative shrink-0 isolate">
      {/* Invisible twin reserves the layout box; the glass layers sit absolutely on top. */}
      <span aria-hidden className={`${CONTENT} invisible`}>
        {label}
        <ArrowUpRight className="size-4" strokeWidth={2} />
      </span>

      <LiquidGlass
        cornerRadius={2}
        displacementScale={54}
        blurAmount={0.05}
        saturation={130}
        aberrationIntensity={1.6}
        elasticity={0.06}
        padding="0px"
        mouseContainer={containerRef}
        style={{ position: "absolute", top: "50%", left: "50%", width: "100%" }}
      >
        <a href={href} className={`${CONTENT} group text-foreground`}>
          {label}
          <ArrowUpRight
            className="size-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </a>
      </LiquidGlass>
    </div>
  );
}
