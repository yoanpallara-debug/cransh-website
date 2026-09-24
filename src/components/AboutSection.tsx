import { ArrowRight } from "lucide-react";
import { ProductRender } from "./ProductRender";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section id="historia" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cransh-purple/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-4">
        {/* left column */}
        <div className="lg:col-span-5">
          <Reveal>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-cransh-green">
              Conoce Cransh
            </span>
            <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-cransh-off sm:text-6xl lg:text-7xl">
              UN SNACK
              <br />
              PARA TU RITMO.
            </h2>
            <p className="mt-6 max-w-sm text-lg text-cransh-off/70">
              Es energía, sabor y practicidad en un solo bocado.
            </p>
          </Reveal>
        </div>

        {/* floating product — overlaps both columns on desktop */}
        <div className="relative order-first lg:order-none lg:col-span-4">
          <Reveal
            scale
            delay={150}
            className="relative mx-auto w-[60vw] max-w-[280px] lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[22vw] lg:max-w-sm lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <ProductRender flavor="chocolate" />
          </Reveal>
        </div>

        {/* right column */}
        <div className="lg:col-span-3 lg:col-start-10 lg:flex lg:items-center">
          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-cransh-off/70 sm:text-lg">
              Cransh Energy es un snack energizante elaborado con ingredientes
              como cacao, quinoa, miel y extractos vegetales, pensado para
              acompañar tu ritmo durante el estudio, trabajo, entrenamiento y
              movimiento.
            </p>
            <a
              href="#depredador"
              className="btn-magnetic mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-cransh-off"
            >
              <span className="border-b border-cransh-green pb-0.5">
                Conoce nuestra historia
              </span>
              <ArrowRight size={16} strokeWidth={2.5} className="text-cransh-green" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
