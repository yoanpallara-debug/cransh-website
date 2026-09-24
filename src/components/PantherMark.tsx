interface PantherMarkProps {
  className?: string;
  /** Show the two glowing eyes accent — use sparingly, only in the hero and predator moment. */
  eyes?: boolean;
  eyeColor?: string;
}

/**
 * Abstract, watermark-style panther presence — never a literal mascot.
 * A single continuous contour line suggesting ears, brow and jaw, built
 * from hand-authored SVG paths. Used at low opacity as brand texture.
 */
export function PantherMark({
  className = "",
  eyes = false,
  eyeColor = "#a8ff00",
}: PantherMarkProps) {
  return (
    <svg
      viewBox="0 0 600 600"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M120 430 C 90 340 110 250 165 195 C 150 150 165 100 205 70 C 215 110 230 130 255 140 C 275 118 300 110 320 110 C 340 110 365 118 385 140 C 410 130 425 110 435 70 C 475 100 490 150 475 195 C 530 250 550 340 520 430 C 500 500 430 540 320 540 C 210 540 140 500 120 430 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M205 70 C 195 40 200 15 220 5 C 228 35 235 55 255 68"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M435 70 C 445 40 440 15 420 5 C 412 35 405 55 385 68"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <path
        d="M320 250 C 260 250 220 300 230 360 C 238 410 275 445 320 445 C 365 445 402 410 410 360 C 420 300 380 250 320 250 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M320 320 L 300 400 L 320 415 L 340 400 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      {eyes && (
        <>
          <ellipse cx="262" cy="300" rx="13" ry="7" fill={eyeColor} opacity="0.9">
            <animate
              attributeName="opacity"
              values="0.5;0.95;0.5"
              dur="4s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="378" cy="300" rx="13" ry="7" fill={eyeColor} opacity="0.9">
            <animate
              attributeName="opacity"
              values="0.5;0.95;0.5"
              dur="4s"
              repeatCount="indefinite"
            />
          </ellipse>
        </>
      )}
    </svg>
  );
}
