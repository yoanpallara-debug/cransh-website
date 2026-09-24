import { FileText } from "lucide-react";
import { GUIDE_CHAPTERS } from "../lib/data";
import { Reveal } from "./Reveal";

export function GuidePreview() {
  return (
    <section className="relative px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
        {/* mockup */}
        <Reveal scale className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-sm -rotate-2 rounded-3xl border border-white/10 bg-gradient-to-br from-[#101410] to-ink p-7 shadow-2xl sm:p-9">
            <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-cransh-green/20 blur-[60px]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cransh-green">
              Guía digital 01
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[0.95] tracking-tight text-cransh-off sm:text-4xl">
              GUÍA <span className="text-cransh-green">CRANSH</span>
            </h2>
            <p className="mt-1 font-display text-xl leading-[0.95] tracking-tight text-cransh-off/90 sm:text-2xl">
              ¿QUÉ COMO ENTRE CLASES?
            </p>
            <div className="mt-6 flex items-center gap-2 text-cransh-off/40">
              <FileText size={16} strokeWidth={1.75} />
              <span className="text-xs font-medium">12 páginas · PDF</span>
            </div>
          </div>
        </Reveal>

        {/* chapters */}
        <div className="lg:col-span-7">
          <Reveal>
            <h3 className="font-display text-2xl tracking-wide text-cransh-off sm:text-3xl">
              QUÉ VAS A ENCONTRAR
            </h3>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {GUIDE_CHAPTERS.map((chapter, i) => {
              const Icon = chapter.icon;
              return (
                <Reveal key={chapter.title} delay={i * 70}>
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
        </div>
      </div>
    </section>
  );
}
