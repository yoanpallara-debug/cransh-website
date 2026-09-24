import { BENEFITS } from "../lib/data";
import { Reveal } from "./Reveal";

const ACCENT_MAP = {
  green: {
    text: "text-cransh-green",
    ring: "hover:border-cransh-green/40",
    glow: "rgba(168,255,0,0.16)",
  },
  purple: {
    text: "text-cransh-purple",
    ring: "hover:border-cransh-purple/40",
    glow: "rgba(139,61,255,0.18)",
  },
  yellow: {
    text: "text-cransh-yellow",
    ring: "hover:border-cransh-yellow/40",
    glow: "rgba(255,230,0,0.16)",
  },
};

export function BenefitsSection() {
  return (
    <section id="beneficios" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-cransh-green">
            ¿Por qué Cransh?
          </span>
          <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-cransh-off sm:text-6xl lg:text-7xl">
            ENERGÍA PARA
            <br />
            SEGUIR TU RITMO.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-6">
          {BENEFITS.map((b, i) => {
            const accent = ACCENT_MAP[b.accent];
            const Icon = b.icon;
            const large = i === 0;
            const wide = i === 3;
            return (
              <Reveal
                key={b.title}
                delay={i * 100}
                className={`${large ? "sm:col-span-4 sm:row-span-2" : wide ? "sm:col-span-6" : "sm:col-span-2"}`}
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-500 ${accent.ring} ${
                    large ? "min-h-[280px] sm:p-10" : wide ? "sm:flex sm:items-center sm:justify-between" : "min-h-[220px]"
                  }`}
                >
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full blur-[80px] transition-opacity duration-500 group-hover:opacity-100 opacity-60"
                    style={{ background: accent.glow }}
                  />

                  <div className={wide ? "relative flex items-center gap-4" : "relative"}>
                    <Icon size={large ? 36 : 28} strokeWidth={1.5} className={accent.text} />
                    <h3
                      className={`font-display tracking-wide text-cransh-off ${
                        large
                          ? "mt-6 text-3xl sm:text-4xl"
                          : wide
                            ? "text-2xl sm:text-3xl"
                            : "mt-5 text-2xl"
                      }`}
                    >
                      {b.title}
                    </h3>
                  </div>

                  <p
                    className={`relative text-cransh-off/60 ${
                      large ? "mt-4 max-w-sm text-base sm:text-lg" : wide ? "mt-3 text-sm sm:mt-0 sm:text-base" : "mt-3 text-sm"
                    }`}
                  >
                    {b.desc}
                  </p>

                  {large && (
                    <span className="absolute bottom-6 right-8 font-display text-7xl text-white/[0.04] sm:text-8xl">
                      01
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
