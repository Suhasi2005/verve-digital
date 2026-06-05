/**
 * Decorative translucent "3D glass" sphere, crafted purely in CSS
 * (no image assets). Use the `variant` to switch between violet and pink.
 */
export default function GlassOrb({
  className = "",
  variant = "violet",
}: {
  className?: string;
  variant?: "violet" | "pink";
}) {
  return (
    <div
      aria-hidden
      className={`${variant === "pink" ? "glass-orb-pink" : "glass-orb"} ${className}`}
    />
  );
}

/** A glass ring / donut shape for layered decoration. */
export function GlassRing({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`rounded-full border-[10px] border-brand-300/40 bg-white/10 shadow-[inset_0_4px_16px_rgba(255,255,255,0.6),0_24px_50px_-18px_rgba(244,98,58,0.4)] backdrop-blur-sm ${className}`}
    />
  );
}
