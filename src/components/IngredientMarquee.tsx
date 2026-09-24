import { INGREDIENTS } from "../lib/data";
import { Reveal } from "./Reveal";

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16">
      {INGREDIENTS.map((item) => (
        <div key={item.name} className="flex shrink-0 items-center gap-4">
          <span className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
            <img
              src={`${import.meta.env.BASE_URL}${item.image}`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="font-display text-2xl tracking-wide text-cransh-off/80 sm:text-3xl">
            {item.name}
          </span>
          <span className="ml-8 h-1.5 w-1.5 rounded-full bg-white/20" />
        </div>
      ))}
    </div>
  );
}

export function IngredientMarquee() {
  return (
    <section className="relative border-y border-white/10 bg-ink py-14">
      <Reveal>
        <p className="mb-10 text-center font-display text-2xl uppercase tracking-wide text-cransh-off sm:text-3xl">
          Naturaleza que impulsa tu ritmo.
        </p>
      </Reveal>

      <div className="mask-fade-x relative flex overflow-hidden">
        <div className="flex animate-marquee">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
