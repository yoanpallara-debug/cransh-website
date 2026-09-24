import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { FLAVORS, type FlavorId } from "../lib/data";
import { ProductRender } from "./ProductRender";
import { Reveal } from "./Reveal";

export function FlavorsSection() {
  const [active, setActive] = useState<FlavorId>("chocolate");
  const activeFlavor = FLAVORS.find((f) => f.id === active)!;

  return (
    <section id="sabores" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      {/* dynamic background glow, crossfades per active flavor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {FLAVORS.map((f) => (
          <div
            key={f.id}
            className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] transition-opacity duration-700"
            style={{ background: f.accentSoft, opacity: active === f.id ? 1 : 0 }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-cransh-green">
            Nuestros sabores
          </span>
          <h2 className="font-display text-5xl leading-[0.9] tracking-tight text-cransh-off sm:text-6xl lg:text-7xl">
            EL MISMO IMPULSO.
            <br />
            <span style={{ color: activeFlavor.accent }} className="transition-colors duration-500">
              DISTINTAS EXPERIENCIAS.
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
          {FLAVORS.map((flavor, i) => {
            const isActive = active === flavor.id;
            return (
              <Reveal key={flavor.id} delay={i * 120}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(flavor.id)}
                  onFocus={() => setActive(flavor.id)}
                  onClick={() => setActive(flavor.id)}
                  className={`group relative w-full overflow-hidden rounded-3xl border p-7 text-left transition-all duration-500 ${
                    isActive
                      ? "border-white/15 bg-white/[0.04]"
                      : "border-white/5 bg-white/[0.015] opacity-70"
                  }`}
                >
                  <div
                    className={`mx-auto w-[55%] transition-transform duration-500 ${
                      isActive ? "scale-110" : "scale-95"
                    }`}
                  >
                    <ProductRender flavor={flavor.id} particles={isActive} />
                  </div>

                  <div className="mt-8 flex items-end justify-between">
                    <div>
                      <p
                        className="text-[11px] font-semibold uppercase tracking-[0.25em]"
                        style={{ color: flavor.accent }}
                      >
                        {flavor.tag}
                      </p>
                      <h3 className="mt-1 font-display text-2xl tracking-wide text-cransh-off sm:text-3xl">
                        {flavor.name}
                      </h3>
                      <p
                        className={`mt-2 max-w-[20ch] text-sm text-cransh-off/60 transition-all duration-500 ${
                          isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                        }`}
                      >
                        {flavor.desc}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className={`shrink-0 transition-all duration-500 ${
                        isActive ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-1 translate-y-1 opacity-0"
                      }`}
                      style={{ color: flavor.accent }}
                    />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
