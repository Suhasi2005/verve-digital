"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
  /** Show a soft spotlight that follows the cursor. */
  spotlight?: boolean;
};

/**
 * Wraps content in a subtle 3D tilt that follows the cursor, with an optional
 * radial spotlight. Falls back gracefully (no tilt) on touch devices since
 * there's no pointer hover.
 */
export default function TiltCard({
  children,
  className = "",
  max = 8,
  spotlight = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 20,
  });

  const spotX = useTransform(mx, (v) => `${v * 100}%`);
  const spotY = useTransform(my, (v) => `${v * 100}%`);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function onLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      className={`relative [transform-style:preserve-3d] ${className}`}
    >
      {spotlight && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 [mask:linear-gradient(#000,#000)] group-hover:opacity-100"
          style={{
            background: useTransform(
              [spotX, spotY],
              ([px, py]: string[]) =>
                `radial-gradient(220px circle at ${px} ${py}, rgba(255,255,255,0.35), transparent 60%)`
            ),
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
