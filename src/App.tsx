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

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-ink">
        <div className="grain" />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guia" element={<GuiaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
