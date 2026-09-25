import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * True when the visitor prefers reduced motion. Scroll-driven timelines
 * should check this before pinning/scrubbing and fall back to showing
 * their end state directly — same convention as `useMouseParallax`.
 */
export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export { gsap, ScrollTrigger };
