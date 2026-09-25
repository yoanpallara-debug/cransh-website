import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "../lib/gsap";

/**
 * Scopes a GSAP setup function (timelines, ScrollTriggers) to `scopeRef`'s
 * subtree via `gsap.context()`, and reverts everything on cleanup — kills
 * ScrollTriggers/tweens so nothing leaks across remounts or HMR. Mirrors
 * the cleanup pattern already used by the site's other scroll hooks
 * (`useReveal`, `useScrollParallax`).
 */
export function useGsapContext<T extends Element = HTMLElement>(
  scopeRef: RefObject<T | null>,
  setup: (context: gsap.Context) => void,
  deps: unknown[] = []
) {
  useLayoutEffect(() => {
    if (!scopeRef.current) return;
    const ctx = gsap.context(setup, scopeRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
