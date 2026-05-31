import { motion } from "framer-motion";

interface Props {
  size?: number;
  className?: string;
}

/**
 * Wireframe sphere built from concentric ellipses + meridians.
 * Spins slowly and breathes — pure SVG, no canvas.
 */
export function AnimatedSphere({ size = 520, className = "" }: Props) {
  const meridians = Array.from({ length: 9 }, (_, i) => i);
  const parallels = [0.18, 0.36, 0.56, 0.74, 0.88];

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size, maxWidth: "100%" }}
      aria-hidden
    >
      {/* outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.72 0.10 80 / 0.22), transparent 65%)",
          filter: "blur(20px)",
        }}
      />
      <motion.svg
        viewBox="-100 -100 200 200"
        className="absolute inset-0 w-full h-full"
        style={{ animation: "sphere-breathe 9s ease-in-out infinite" }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <radialGradient id="sphereFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.72 0.10 80 / 0.06)" />
            <stop offset="60%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.85 0.10 85 / 0.75)" />
            <stop offset="50%" stopColor="oklch(0.72 0.10 80 / 0.55)" />
            <stop offset="100%" stopColor="oklch(0.50 0.06 70 / 0.4)" />
          </linearGradient>
        </defs>

        <circle cx="0" cy="0" r="90" fill="url(#sphereFill)" />

        {/* outer ring */}
        <circle cx="0" cy="0" r="90" fill="none" stroke="url(#lineGrad)" strokeWidth="0.4" />

        {/* meridians (ellipses rotated) */}
        {meridians.map((i) => {
          const angle = (180 / meridians.length) * i;
          const rx = 90 * Math.abs(Math.cos((i / meridians.length) * Math.PI));
          return (
            <ellipse
              key={`m-${i}`}
              cx="0"
              cy="0"
              rx={Math.max(rx, 4)}
              ry="90"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="0.35"
              transform={`rotate(${angle})`}
            />
          );
        })}

        {/* parallels */}
        {parallels.map((p, i) => (
          <ellipse
            key={`p-${i}`}
            cx="0"
            cy={(-90 + 180 * p)}
            rx={90 * Math.sin(Math.PI * p)}
            ry={90 * Math.sin(Math.PI * p) * 0.18}
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="0.3"
          />
        ))}
      </motion.svg>
    </div>
  );
}
