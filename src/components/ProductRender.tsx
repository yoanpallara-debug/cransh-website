type Flavor = "chocolate" | "vainilla" | "fresa";

interface ProductRenderProps {
  flavor?: Flavor;
  className?: string;
  /** Extra floating crumb/particle decoration around the product. */
  particles?: boolean;
}

const FLAVOR_THEME: Record<
  Flavor,
  { base: [string, string, string]; glow: string; crumb: string; label: string }
> = {
  chocolate: {
    base: ["#3a2417", "#1c120a", "#0a0704"],
    glow: "rgba(168,255,0,0.35)",
    crumb: "#5c3a22",
    label: "CHOCOLATE",
  },
  vainilla: {
    base: ["#e9d9ad", "#c4a35f", "#7a5a28"],
    glow: "rgba(255,230,0,0.35)",
    crumb: "#e2c98a",
    label: "VAINILLA",
  },
  fresa: {
    base: ["#e85a7a", "#a0234a", "#4a0f24"],
    glow: "rgba(139,61,255,0.35)",
    crumb: "#f08aa6",
    label: "FRESA",
  },
};

/**
 * A stylized, code-drawn stand-in for CRANSH's product photography — a
 * layered "energy bar" render built from gradients, glow and floating
 * crumb particles. Swap for real photography/3D renders when available;
 * the composition (rim light, tilt, particles) is designed to carry over.
 */
export function ProductRender({
  flavor = "chocolate",
  className = "",
  particles = true,
}: ProductRenderProps) {
  const theme = FLAVOR_THEME[flavor];

  return (
    <div className={`relative ${className}`}>
      {/* ambient glow behind product */}
      <div
        className="absolute inset-0 -z-10 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: theme.glow }}
      />

      {/* the bar itself */}
      <div
        className="relative aspect-[3/4] w-full rotate-[-6deg] rounded-[2.5rem] shadow-2xl animate-float-slow"
        style={{
          background: `linear-gradient(155deg, ${theme.base[0]} 0%, ${theme.base[1]} 55%, ${theme.base[2]} 100%)`,
          boxShadow: `0 40px 80px -20px rgba(0,0,0,0.8), inset 0 2px 0 rgba(255,255,255,0.15), inset 0 -30px 60px rgba(0,0,0,0.4)`,
        }}
      >
        {/* sheen */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[2.5rem] opacity-70"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.22) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.06) 100%)",
          }}
        />

        {/* texture chunks */}
        {[...Array(7)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${10 + (i % 3) * 6}px`,
              height: `${10 + (i % 3) * 6}px`,
              top: `${15 + i * 10}%`,
              left: `${20 + ((i * 37) % 60)}%`,
              background: theme.crumb,
              opacity: 0.5,
              filter: "blur(0.5px)",
            }}
          />
        ))}

        {/* wordmark label band */}
        <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-1">
          <span className="font-display text-2xl tracking-wide text-cransh-off/90 sm:text-3xl">
            CRANSH
          </span>
          <span className="text-[10px] font-semibold tracking-[0.3em] text-cransh-off/60">
            {theme.label}
          </span>
        </div>

        {/* rim light edge */}
        <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10" />
      </div>

      {/* floating crumb particles */}
      {particles && (
        <>
          <span
            className="absolute -left-6 top-6 h-4 w-4 rounded-full animate-float-slower"
            style={{ background: theme.crumb, opacity: 0.8 }}
          />
          <span
            className="absolute -right-4 top-1/3 h-3 w-3 rounded-full animate-float-slow"
            style={{ background: theme.crumb, opacity: 0.7 }}
          />
          <span
            className="absolute -right-8 bottom-10 h-5 w-5 rounded-full animate-float-slower"
            style={{ background: theme.crumb, opacity: 0.6 }}
          />
          <span
            className="absolute left-2 -bottom-4 h-3 w-3 rounded-full animate-float-slow"
            style={{ background: theme.crumb, opacity: 0.75 }}
          />
        </>
      )}
    </div>
  );
}
