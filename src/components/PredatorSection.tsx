import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollParallax } from "../hooks/useScrollParallax";
import { NAV_CTA } from "../lib/data";
import { PantherMark } from "./PantherMark";
import { Reveal } from "./Reveal";

export function PredatorSection() {
  const { ref, offset } = useScrollParallax<HTMLDivElement>(0.1);

  return (
    <section
      id="depredador"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink py-28"
    >
      {/* atmospheric lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-cransh-green/[0.08] blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[420px] w-[420px] rounded-full bg-cransh-purple/[0.12] blur-[140px]" />
      </div>

      {/* the panther emerges — subtle, parallaxed, watermark-scale */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-auto -translate-x-1/2 -translate-y-1/2"
        style={{ transform: `translate(-50%, calc(-50% + ${offset}px))` }}
      >
        <PantherMark eyes eyeColor="#a8ff00" className="h-full w-auto text-white/[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-cransh-green">
            Despierta al depredador
          </span>
          <h2 className="font-display text-6xl leading-[0.88] tracking-tight text-cransh-off sm:text-7xl lg:text-8xl">
            DESPIERTA
            <br />
            <span className="text-glow-green text-cransh-green">AL DEPREDADOR.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-lg text-cransh-off/70">
            Todos tenemos algo dentro que nos impulsa a seguir.
          </p>
          <Link
            to={NAV_CTA.href}
            className="btn-magnetic mt-10 inline-flex items-center gap-2 rounded-full bg-cransh-yellow px-8 py-4 text-sm font-bold tracking-wide text-ink shadow-[0_0_50px_rgba(255,230,0,0.3)]"
          >
            {NAV_CTA.label}
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
