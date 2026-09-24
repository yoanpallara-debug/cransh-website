import { Camera, Music2, Play } from "lucide-react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { label: "Conoce Cransh", href: "#historia" },
  { label: "Ingredientes", href: "#ingredientes" },
  { label: "Momentos", href: "#momentos" },
  { label: "Recursos", href: "#recursos" },
];

const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/cransh.energy", icon: Camera },
  { label: "TikTok", href: "#", icon: Music2 },
  { label: "YouTube", href: "#", icon: Play },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-12 pb-12 sm:flex-row sm:justify-between">
          <div>
            <div className="flex flex-col leading-[0.85]">
              <span className="font-display text-2xl tracking-wide text-cransh-off">CRANSH</span>
              <span className="font-display text-2xl tracking-wide text-cransh-green">ENERGY</span>
            </div>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.25em] text-cransh-off/50">
              Energía que se come.
            </p>
          </div>

          <nav className="flex flex-col gap-3 sm:items-end">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-cransh-off/60 transition-colors hover:text-cransh-green"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/guia"
              className="text-sm font-bold text-cransh-green transition-colors hover:text-cransh-off"
            >
              Quiero la guía
            </Link>
          </nav>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-cransh-off/40">
            © 2026 Cransh Energy. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-cransh-off/60 transition-colors hover:border-cransh-green/40 hover:text-cransh-green"
              >
                <s.icon size={16} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
