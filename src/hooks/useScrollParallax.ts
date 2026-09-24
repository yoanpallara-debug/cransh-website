import { useEffect, useRef, useState } from "react";

/**
 * Returns a small numeric offset that tracks how far an element's center
 * is from the viewport center, for a subtle scroll-driven parallax drift.
 * `strength` scales the effect; keep it small (0.05–0.2) for subtlety.
 */
export function useScrollParallax<T extends HTMLElement = HTMLDivElement>(
  strength = 0.12
) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const handle = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        setOffset((viewportCenter - center) * strength);
      });
    };

    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return { ref, offset };
}
