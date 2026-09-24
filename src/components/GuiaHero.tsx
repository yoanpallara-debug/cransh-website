export function GuiaHero() {
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-6 sm:px-8 sm:pb-20">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cransh-green/[0.08] blur-[150px]" />

      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cransh-green/30 bg-cransh-green/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cransh-green">
          Guía digital gratuita
        </span>

        <h1 className="font-display text-5xl leading-[0.92] tracking-tight text-cransh-off sm:text-6xl md:text-7xl">
          ¿QUÉ COMO
          <br />
          ENTRE CLASES?
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg text-cransh-off/70">
          Cómo organizar tus comidas y snacks cuando tu día no te da tiempo.
        </p>

        <p className="mx-auto mt-4 max-w-lg text-sm text-cransh-off/55">
          Sales de casa temprano, pasas horas entre clases, trabajo y entrenamiento, y no
          siempre sabes qué comer entre medio. Esta guía te ayuda a organizarlo, paso a paso.
        </p>
      </div>
    </section>
  );
}
