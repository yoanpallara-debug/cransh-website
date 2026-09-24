import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Header minimalista exclusivo de /guia. A propósito NO reutiliza el
 * Navbar principal: esta página tiene un único objetivo (captar el lead)
 * y no debe ofrecer navegación que distraiga de completar el formulario.
 */
export function GuiaHeader() {
  return (
    <header className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-6 sm:px-8">
      <Link to="/" className="flex flex-col leading-[0.85]">
        <span className="font-display text-lg tracking-wide text-cransh-off sm:text-xl">
          CRANSH
        </span>
        <span className="font-display text-lg tracking-wide text-cransh-green sm:text-xl">
          ENERGY
        </span>
      </Link>

      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-cransh-off/50 transition-colors hover:text-cransh-off"
      >
        <ArrowLeft size={14} strokeWidth={2} />
        Volver al inicio
      </Link>
    </header>
  );
}
