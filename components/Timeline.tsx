"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { milestones } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Clean left-rail journey timeline. A gradient line draws itself as you scroll;
 * milestone nodes sit on the rail and cards slide in to the right.
 */
export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 85%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative mx-auto max-w-2xl">
      {/* base rail */}
      <div className="absolute bottom-3 left-4 top-3 w-0.5 bg-brand-100" />
      {/* animated fill */}
      <motion.div
        style={{ scaleY: fill }}
        className="absolute bottom-3 left-4 top-3 w-0.5 origin-top bg-gradient-to-b from-brand-500 to-accent-400"
      />

      <div className="space-y-8">
        {milestones.map((m, i) => (
          <motion.div
            key={m.year}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease }}
            className="relative pl-16"
          >
            {/* node on the rail */}
            <span className="absolute left-4 top-3 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-4 border-haze-50 bg-gradient-to-br from-brand-500 to-accent-400 font-display text-[10px] font-bold text-white shadow-[0_0_18px_3px_rgba(13,143,214,0.4)]">
              &apos;{m.year.slice(2)}
            </span>

            <div className="glow-border relative rounded-3xl border border-brand-100 bg-white p-6 shadow-[0_18px_50px_-34px_rgba(13,143,214,0.45)]">
              <div className="font-display text-sm font-bold text-brand-600">
                {m.year}
              </div>
              <h3 className="mt-1 font-display text-lg font-bold tracking-tight">
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-ink-700/70">{m.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
