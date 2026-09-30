import { GuidePreview } from "./GuidePreview";

export function GuiaHero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-14 pt-6 sm:px-8 sm:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/fondos/FONFOGUIA.png`}
          alt=""
          className="h-full w-full object-cover object-center opacity-70"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/25 via-ink/55 to-ink" />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 z-[1] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cransh-green/[0.08] blur-[150px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="text-center md:text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cransh-green/30 bg-cransh-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cransh-green">
            Guía digital gratuita
          </span>

          <h1 className="font-display text-5xl leading-[0.92] tracking-tight text-cransh-off sm:text-6xl md:text-7xl">
            ¿QUÉ COMO
            <br />
            <span className="text-cransh-green">ENTRE CLASES?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg text-cransh-off/70 md:mx-0">
            Cómo organizar tus comidas y snacks cuando tu día no te da tiempo.
          </p>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-cransh-off/55 md:mx-0">
            Sales de casa temprano, pasas horas entre clases, trabajo y entrenamiento, y no
            siempre sabes qué comer entre medio. Esta guía te ayuda a organizarlo, paso a paso.
          </p>
        </div>

        <GuidePreview />
      </div>
    </section>
  );
}
