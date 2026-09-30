import { GuiaHeader } from "../components/GuiaHeader";
import { GuiaHero } from "../components/GuiaHero";
import { GuideLeadForm } from "../components/GuideLeadForm";
import { Check } from "lucide-react";

/**
 * Landing de captación de leads — único objetivo: conseguir los datos del
 * usuario para entregarle la Guía Cransh. A propósito no comparte la
 * estructura de la web principal (sin navegación completa, sin otras
 * secciones de marca): todo aquí conduce al formulario.
 */
export function GuiaPage() {
  return (
    <>
      <GuiaHeader />
      <main>
        <GuiaHero />

        <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-24">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-cransh-green/30 to-transparent" />
          <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-cransh-green/[0.06] blur-[120px]" />
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-cransh-green/25 bg-cransh-green/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-cransh-green">
                <span className="h-1.5 w-1.5 rounded-full bg-cransh-green shadow-[0_0_12px_rgba(168,255,0,0.9)]" />
                Tu siguiente paso
              </span>
              <h2 className="mt-5 font-display text-4xl leading-[0.94] tracking-tight text-cransh-off sm:text-5xl">
                MÁS CLARIDAD.
                <br />
                <span className="text-cransh-green">MENOS IMPROVISAR.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cransh-off/60 sm:text-base">
                Déjanos tus datos y recibe una guía práctica para preparar tus días con más intención.
              </p>

              <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-ink-soft">
                <img
                  src={`${import.meta.env.BASE_URL}moments/trabaja.jpg`}
                  alt="Una pausa Cransh durante una jornada de trabajo"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-ink/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
                  Ideas simples para días intensos
                </span>
              </div>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {["Organiza tus comidas y snacks", "Prepara un kit para salir", "Haz seguimiento a tus hábitos"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-cransh-off/70">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cransh-green/10 text-cransh-green">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
            <GuideLeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center sm:px-8">
        <p className="text-xs text-cransh-off/40">
          © 2026 Cransh Energy. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
