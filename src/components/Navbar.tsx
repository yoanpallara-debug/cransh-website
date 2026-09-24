import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled";
import { NAV_CTA, NAV_LINKS } from "../lib/data";

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <a href="#inicio" className="group flex flex-col leading-[0.85]">
          <span className="font-display text-xl tracking-wide text-cransh-off sm:text-2xl">
            CRANSH
          </span>
          <span className="font-display text-xl tracking-wide text-cransh-green sm:text-2xl">
            ENERGY
          </span>
        </a>

        {/* Center nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-cransh-off/70 transition-colors hover:text-cransh-off after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-cransh-green after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to={NAV_CTA.href}
          className="btn-magnetic hidden items-center gap-2 rounded-full bg-cransh-green px-5 py-2.5 text-sm font-bold tracking-wide text-ink shadow-[0_0_30px_rgba(168,255,0,0.25)] lg:inline-flex"
        >
          {NAV_CTA.label}
          <ArrowRight size={16} strokeWidth={2.5} />
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-full border border-white/15 p-2.5 text-cransh-off lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-cransh-off/80 transition-colors hover:bg-white/5 hover:text-cransh-off"
            >
              {link.label}
            </a>
          ))}
          <Link
            to={NAV_CTA.href}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cransh-green px-5 py-3 text-sm font-bold text-ink"
          >
            {NAV_CTA.label}
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
