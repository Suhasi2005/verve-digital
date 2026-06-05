"use client";

import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import { homeStats } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Stat cards whose numbers "pop out of the box" (rise + scale in) and then
 * count up from 1 to the target as they enter view.
 */
export default function StatsSection() {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.15 }}
    >
      {homeStats.map((s) => (
        <motion.div
          key={s.label}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
          }}
          className="glass relative overflow-hidden rounded-3xl p-8 text-center"
        >
          <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-300/30 blur-2xl" />
          {/* "out of the box" reveal mask */}
          <div className="relative overflow-hidden">
            <motion.div
              variants={{
                hidden: { y: "120%", scale: 0.5, opacity: 0 },
                show: {
                  y: "0%",
                  scale: 1,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 220, damping: 18 },
                },
              }}
              className="font-display text-6xl font-bold text-brand-600"
            >
              <Counter value={s.value} />
            </motion.div>
          </div>
          <div className="mt-3 text-sm font-medium uppercase tracking-wide text-ink-700/60">
            {s.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
