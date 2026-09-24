import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMouseParallax } from "../hooks/useMouseParallax";
import { HERO_PRODUCT_IMAGE, NAV_CTA } from "../lib/data";
import { PantherMark } from "./PantherMark";

export function HeroSection() {
  const { ref, pos } = useMouseParallax<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-ink pt-24"
    >
      {/* ---- background depth layers ---- */}
      <div
        className={`absolute inset-0 -z-20 transition-opacity duration-[1400ms] ease-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(168,255,0,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_85%,rgba(139,61,255,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_100%,rgba(255,230,0,0.06),transparent_70%)]" />
      </div>

      {/* abstract panther watermark, barely visible, drifts with cursor */}
      <PantherMark
        eyes
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-[130%] w-auto -translate-y-1/2 text-white/[0.05] transition-transform duration-700 ease-out sm:right-0 md:right-10"
        eyeColor="#a8ff00"
      />

      {/* energy streaks */}
      <div
        className="pointer-events-none absolute right-[8%] top-[18%] -z-10 h-64 w-1 rotate-[24deg] rounded-full bg-gradient-to-b from-transparent via-cransh-yellow/50 to-transparent blur-[2px] animate-drift"
        style={{ transform: `translate(${pos.x * 14}px, ${pos.y * 10}px) rotate(24deg)` }}
      />
      <div
        className="pointer-events-none absolute right-[22%] top-[55%] -z-10 h-40 w-1 rotate-[18deg] rounded-full bg-gradient-to-b from-transparent via-cransh-purple/50 to-transparent blur-[2px] animate-drift"
        style={{ transform: `translate(${pos.x * -10}px, ${pos.y * 14}px) rotate(18deg)` }}
      />

      {/* floating particles / crumbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {[
          { top: "22%", left: "58%", size: 8, color: "bg-cransh-green", delay: "0s" },
          { top: "68%", left: "52%", size: 5, color: "bg-cransh-yellow", delay: "1.2s" },
          { top: "40%", left: "82%", size: 6, color: "bg-cransh-purple", delay: "0.6s" },
          { top: "78%", left: "74%", size: 4, color: "bg-cransh-off", delay: "2s" },
          { top: "15%", left: "78%", size: 5, color: "bg-cransh-green", delay: "0.3s" },
        ].map((p, i) => (
          <span
            key={i}
            className={`absolute rounded-full ${p.color} animate-float-slower`}
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: 0.6,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* grain handled globally */}

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-12 lg:gap-4 lg:pb-0">
        {/* ---- copy column ---- */}
        <div className="relative z-10 lg:col-span-7">
          <div
            className={`mb-5 flex items-center gap-2 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cransh-green" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cransh-off/60">
              Estudia · Trabaja · Muévete · Sigue
            </span>
          </div>

          <h1 className="font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[5.5vw]">
            <span className="block overflow-hidden pt-[0.15em]">
              <span
                className={`block text-cransh-off transition-all duration-[900ms] ease-out ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{ transitionDelay: "150ms" }}
              >
                TU DÍA
              </span>
            </span>
            <span className="block overflow-hidden pt-[0.15em]">
              <span
                className={`text-glow-green block text-cransh-green transition-all duration-[900ms] ease-out ${
                  mounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{ transitionDelay: "320ms" }}
              >
                EXIGE MÁS.
              </span>
            </span>
          </h1>

          <p
            className={`mt-6 max-w-md text-lg text-cransh-off/70 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "520ms" }}
          >
            Aprende a organizar tu energía cuando estudias, trabajas y te mueves.
          </p>

          <div
            className={`mt-9 flex flex-wrap items-center gap-4 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <Link
              to={NAV_CTA.href}
              className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-cransh-green px-7 py-3.5 text-sm font-bold tracking-wide text-ink shadow-[0_0_40px_rgba(168,255,0,0.3)]"
            >
              {NAV_CTA.label}
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <a
              href="#historia"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold tracking-wide text-cransh-off"
            >
              CONOCE CRANSH ↓
            </a>
          </div>
        </div>

        {/* ---- product column ---- */}
        <div className="relative z-10 mx-auto mt-4 w-[70vw] max-w-xs sm:max-w-sm lg:col-span-5 lg:mt-0 lg:w-full lg:max-w-none">
          {/* handwritten campaign phrase */}
          <div
            className={`absolute -top-6 -left-2 z-20 rotate-[-6deg] transition-all duration-700 sm:-top-4 sm:left-0 lg:-left-8 ${
              mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <p className="font-brush text-3xl leading-none text-cransh-yellow sm:text-4xl">
              Despierta
            </p>
            <p className="font-brush text-3xl leading-none text-cransh-yellow sm:text-4xl">
              al depredador.
            </p>
          </div>

          <div
            className={`relative transition-all duration-[1100ms] ease-out ${
              mounted ? "scale-100 opacity-100" : "scale-[0.85] opacity-0"
            }`}
            style={{
              transitionDelay: "250ms",
              transform: `translate(${pos.x * 10}px, ${pos.y * 10}px)`,
            }}
          >
            {/* ambient glow the package appears to float in, echoing the hero's green wash */}
            <div className="absolute inset-0 -z-10 rounded-full bg-cransh-green/25 blur-[90px] animate-pulse-glow" />

            <img
              src={HERO_PRODUCT_IMAGE}
              alt="Empaque de Cransh Energy"
              className="relative mx-auto w-[85%] animate-float-slow drop-shadow-[0_35px_45px_rgba(0,0,0,0.65)] sm:w-[80%] lg:w-[95%] lg:scale-110"
            />
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div
        className={`absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3 transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1100ms" }}
      >
        <span className="text-[10px] font-semibold tracking-[0.4em] text-cransh-off/50">
          SCROLL
        </span>
        <span className="relative h-9 w-5 rounded-full border border-white/25">
          <span
            className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cransh-green"
            style={{ animation: "scroll-dot 1.8s ease-in-out infinite" }}
          />
        </span>
      </div>
    </section>
  );
}
