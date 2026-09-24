import { INGREDIENTS, PRODUCT_BADGES } from "../lib/data";
import { Reveal } from "./Reveal";

export function IngredientsSection() {
  return (
    <section id="ingredientes" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cransh-green/[0.07] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-cransh-green">
            Conoce Cransh
          </span>
          <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-cransh-off sm:text-6xl lg:text-7xl">
            ENERGÍA REAL
            <br />
            EN CADA BOCADO.
          </h2>
          <p className="mt-6 max-w-md text-lg text-cransh-off/70">
            Ingredientes naturales. Sin conservantes ni colorantes artificiales.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INGREDIENTS.map((ingredient, i) => (
            <Reveal key={ingredient.name} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors duration-500 hover:border-cransh-green/40">
                <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-cransh-green/10 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <img
                    src={`${import.meta.env.BASE_URL}${ingredient.image}`}
                    alt={ingredient.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                </div>
                <div className="relative p-7 pt-5">
                  <h3 className="font-display text-xl tracking-wide text-cransh-off">
                    {ingredient.name}
                  </h3>
                  <p className="mt-2 text-sm text-cransh-off/60">{ingredient.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-8 flex flex-wrap gap-3">
            {PRODUCT_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cransh-off/70"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
