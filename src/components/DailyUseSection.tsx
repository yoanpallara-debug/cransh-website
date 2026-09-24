import { useState } from "react";
import { DAILY_USE } from "../lib/data";
import { Reveal } from "./Reveal";

export function DailyUseSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="momentos" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14">
          <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-cransh-off sm:text-6xl lg:text-7xl">
            CRANSH EN TU DÍA.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className="mx-5 flex flex-col gap-3 overflow-hidden rounded-[2rem] sm:mx-8 sm:flex-row sm:gap-0 sm:rounded-[2.5rem]">
          {DAILY_USE.map((panel, i) => {
            const Icon = panel.icon;
            const isHovered = hovered === i;
            return (
              <div
                key={panel.id}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative h-[280px] overflow-hidden transition-[flex-grow] duration-700 ease-out sm:h-[520px]"
                style={{ flexGrow: isHovered ? 1.6 : 1, flexBasis: 0 }}
              >
                {/* environment backdrop */}
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out"
                  style={{
                    background: panel.gradient,
                    transform: isHovered ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="mb-4 text-cransh-green transition-transform duration-500"
                    style={{ transform: isHovered ? "translateY(-4px)" : "none" }}
                  />
                  <h3 className="font-display text-3xl tracking-wide text-cransh-off">
                    {panel.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-[22ch] text-sm text-cransh-off/70 transition-all duration-500 ${
                      isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-80"
                    }`}
                  >
                    {panel.desc}
                  </p>
                </div>

                {i < DAILY_USE.length - 1 && (
                  <div className="absolute right-0 top-0 hidden h-full w-px bg-white/10 sm:block" />
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
