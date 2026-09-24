import { useState } from "react";
import { DAILY_USE } from "../lib/data";
import { Reveal } from "./Reveal";

/** Per-moment identity color, applied to the icon and the image color-wash. */
const ACCENT_MAP = {
  green: { text: "text-cransh-green", tint: "rgba(168,255,0,0.16)" },
  yellow: { text: "text-cransh-yellow", tint: "rgba(255,230,0,0.14)" },
  purple: { text: "text-cransh-purple", tint: "rgba(139,61,255,0.18)" },
  blue: { text: "text-cransh-blue", tint: "rgba(56,189,248,0.16)" },
};

/** True on touch/coarse-pointer devices — where hover can't drive the expand effect. */
function isTouchDevice() {
  return typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
}

export function DailyUseSection() {
  const [active, setActive] = useState<number | null>(null);

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
            const accent = ACCENT_MAP[panel.accent];
            const isActive = active === i;
            return (
              <div
                key={panel.id}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => {
                  if (isTouchDevice()) setActive((prev) => (prev === i ? null : i));
                }}
                className="relative h-[280px] shrink-0 overflow-hidden transition-[flex-grow] duration-700 ease-out sm:h-[520px] sm:basis-0"
                style={{ flexGrow: isActive ? 1.6 : 1 }}
              >
                {/* photo backdrop — dark and subtle at rest, revealed on hover/tap */}
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out"
                  style={{
                    background: panel.gradient,
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}${panel.image}`}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 ease-out"
                    style={{
                      opacity: isActive ? 0.85 : 0.35,
                      filter: isActive
                        ? "brightness(1) saturate(1.05)"
                        : "brightness(0.55) saturate(0.7)",
                    }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-700 ease-out"
                    style={{
                      background: `radial-gradient(130% 100% at 10% 100%, ${accent.tint}, transparent 65%)`,
                      opacity: isActive ? 0.9 : 0.65,
                    }}
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className={`mb-4 transition-transform duration-500 ${accent.text}`}
                    style={{ transform: isActive ? "translateY(-4px)" : "none" }}
                  />
                  <h3 className="font-display text-3xl tracking-wide text-cransh-off">
                    {panel.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-[22ch] text-sm text-cransh-off/70 transition-all duration-500 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-80"
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
