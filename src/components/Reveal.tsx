import type { CSSProperties, ElementType, ReactNode, Ref } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  scale?: boolean;
}

/** Wraps content in the `.reveal` scroll-triggered fade/slide-up treatment. */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  scale = false,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref as Ref<HTMLElement>}
      className={`${scale ? "reveal-scale" : "reveal"} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
