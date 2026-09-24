import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { GUIDE_CHAPTERS, NAV_CTA } from "../lib/data";
import { Reveal } from "./Reveal";

/**
 * Sección "Recursos" — presenta la Guía Cransh descargable y dirige a la
 * landing de captación /guia. Este es el único punto de conversión a lead
 * en la web principal: la página en sí no vende, conecta con el recurso.
 */
export function ResourcesSection() {
  return (
    <section id="recursos" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cransh-purple/10 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* guide mockup */}
          <Reveal scale className="order-first lg:order-none lg:col-span-5">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md -rotate-2 rounded-3xl border border-white/10 bg-gradient-to-br from-[#101410] to-ink p-7 shadow-2xl sm:p-9">
              <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-cransh-green/20 blur-[60px]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cransh-green">
                Guía digital 01
              </span>
              <h3 className="mt-3 font-display text-3xl leading-[0.95] tracking-tight text-cransh-off sm:text-4xl">
                GUÍA <span className="text-cransh-green">CRANSH</span>
              </h3>
              <p className="mt-1 font-display text-2xl leading-[0.95] tracking-tight text-cransh-off/90 sm:text-3xl">
                ¿QUÉ COMO
                <br />
                ENTRE CLASES?
              </p>
              <p className="mt-4 max-w-[26ch] text-sm text-cransh-off/60">
                Cómo organizar tus comidas y snacks cuando tu día no te da tiempo.
              </p>
              <div className="mt-6 flex items-center gap-2 text-cransh-off/40">
                <FileText size={16} strokeWidth={1.75} />
                <span className="text-xs font-medium">PDF · Descarga gratuita</span>
              </div>
            </div>
          </Reveal>

          {/* copy + chapter list */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-cransh-green">
                Recursos
              </span>
              <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-cransh-off sm:text-6xl">
                MÁS QUE
                <br />
                UN SNACK.
              </h2>
              <p className="mt-6 max-w-lg text-lg text-cransh-off/70">
                Una guía práctica para organizar tus comidas y snacks cuando tu día no te da
                tiempo.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {GUIDE_CHAPTERS.map((chapter, i) => {
                const Icon = chapter.icon;
                return (
                  <Reveal key={chapter.title} delay={i * 80}>
                    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                      <Icon size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-cransh-green" />
                      <div>
                        <p className="text-sm font-semibold text-cransh-off">{chapter.title}</p>
                        <p className="mt-0.5 text-xs text-cransh-off/55">{chapter.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={500}>
              <Link
                to={NAV_CTA.href}
                className="btn-magnetic mt-9 inline-flex items-center gap-2 rounded-full bg-cransh-green px-8 py-4 text-sm font-bold tracking-wide text-ink shadow-[0_0_50px_rgba(168,255,0,0.35)]"
              >
                {NAV_CTA.label}
                <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
