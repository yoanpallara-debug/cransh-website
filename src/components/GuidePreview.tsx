import { GUIDE_CHAPTERS } from "../lib/data";
import { Reveal } from "./Reveal";

export function GuidePreview() {
  return (
    <div className="w-full">
      <Reveal>
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-cransh-green">
          Guía digital · 12 páginas · PDF
        </span>
        <h2 className="mt-1.5 font-display text-2xl leading-none tracking-wide text-cransh-off sm:text-3xl">
          QUÉ VAS A ENCONTRAR
        </h2>
      </Reveal>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
        {GUIDE_CHAPTERS.map((chapter, i) => {
          const Icon = chapter.icon;
          return (
            <Reveal key={chapter.title} delay={i * 35}>
              <article className="group h-full rounded-xl border border-white/10 bg-white/[0.025] p-2.5 transition-colors duration-300 hover:border-cransh-green/30 hover:bg-white/[0.04] sm:p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[9px] tracking-wider text-cransh-green/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-cransh-green/20 bg-cransh-green/[0.07] text-cransh-green transition-colors group-hover:bg-cransh-green/15">
                    <Icon size={12} strokeWidth={1.8} />
                  </span>
                </div>
                <h3 className="mt-2 text-[11px] font-semibold leading-snug text-cransh-off sm:text-xs">
                  {chapter.title}
                </h3>
                <p className="mt-1 text-[10px] leading-relaxed text-cransh-off/50">
                  {chapter.desc}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
