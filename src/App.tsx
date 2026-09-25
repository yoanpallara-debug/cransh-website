import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { GuiaPage } from "./pages/GuiaPage";
import { HomePage } from "./pages/HomePage";

/** React Router no restaura el scroll entre rutas por defecto — lo forzamos
 * al inicio en cada navegación, salvo cuando la URL trae un anchor (#). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

/** Sustituye a `scroll-behavior: smooth` (quitado por conflicto con GSAP
 * ScrollTrigger): intercepta clics en anchors de la misma página y hace el
 * scroll suave en JS. Las posiciones ya incluyen el pin-spacer del Hero. */
function SmoothAnchors() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element).closest?.('a[href^="#"]');
      const id = link?.getAttribute("href")?.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY,
        behavior: reduce ? "auto" : "smooth",
      });
      history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="relative min-h-screen bg-ink">
        <div className="grain" />
        <ScrollToTop />
        <SmoothAnchors />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guia" element={<GuiaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
