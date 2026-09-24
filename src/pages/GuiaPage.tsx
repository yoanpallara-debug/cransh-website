import { GuiaHeader } from "../components/GuiaHeader";
import { GuiaHero } from "../components/GuiaHero";
import { GuideLeadForm } from "../components/GuideLeadForm";
import { GuidePreview } from "../components/GuidePreview";

/**
 * Landing de captación de leads — único objetivo: conseguir los datos del
 * usuario para entregarle la Guía Cransh. A propósito no comparte la
 * estructura de la web principal (sin navegación completa, sin otras
 * secciones de marca): todo aquí conduce al formulario.
 */
export function GuiaPage() {
  return (
    <>
      <GuiaHeader />
      <main>
        <GuiaHero />
        <GuidePreview />

        <section className="relative px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-xl">
            <GuideLeadForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center sm:px-8">
        <p className="text-xs text-cransh-off/40">
          © 2026 Cransh Energy. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
