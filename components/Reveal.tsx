"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  /** Vertical offset to animate from (px). */
  y?: number;
  /** Horizontal offset to animate from (px). Use for slide-in-from-side. */
  x?: number;
  /** Start slightly scaled for a subtle "pop". */
  scale?: boolean;
  className?: string;
};

/** Fades + slides its children into view on scroll. */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  scale = false,
  className,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale: scale ? 0.94 : 1 }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
