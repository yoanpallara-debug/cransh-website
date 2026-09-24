import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NAV_CTA } from "../lib/data";
import { ProductRender } from "./ProductRender";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 sm:py-44">
      {/* background flavors, subtle */}
      <div className="pointer-events-none absolute inset-0 opacity-25 sm:opacity-35">
        <div className="absolute -left-10 top-10 w-40 -rotate-12 sm:w-56">
          <ProductRender flavor="vainilla" particles={false} />
        </div>
        <div className="absolute left-1/2 -top-10 w-44 -translate-x-1/2 rotate-3 sm:w-64">
          <ProductRender flavor="chocolate" particles={false} />
        </div>
        <div className="absolute -right-8 top-16 w-40 rotate-12 sm:w-56">
          <ProductRender flavor="fresa" particles={false} />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-cransh-off sm:text-6xl lg:text-7xl">
            PEQUEÑOS HÁBITOS.
            <br />
            <span className="text-glow-green text-cransh-green">GRANDES DÍAS.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-sm text-lg text-cransh-off/70">
            Descarga la Guía Cransh y empieza a organizar tu energía hoy.
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
