"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { values } from "@/lib/content";
import { valueIcon } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Editorial, interactive values list: big typography, hover a row to expand
 * its description while the others dim. Distinct from card grids.
 */
export default function AboutValues() {
  const [active, setActive] = useState(0);

  return (
    <div className="border-t border-ink-900/10">
      {values.map((v, i) => {
        const isActive = i === active;
        return (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease }}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            className="group cursor-pointer border-b border-ink-900/10 py-7"
          >
            <div className="flex items-center gap-5">
              <span
                className={`font-display text-sm font-bold tabular-nums transition-colors ${
                  isActive ? "text-brand-600" : "text-ink-900/30"
                }`}
              >
                0{i + 1}
              </span>
              <span
                className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl ring-1 transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-brand-500 to-accent-400 text-white ring-white/60"
                    : "bg-haze-100 text-brand-600 ring-brand-100"
                }`}
              >
                {(() => {
                  const Icon = valueIcon[i % valueIcon.length];
                  return <Icon className="h-6 w-6" strokeWidth={1.75} />;
                })()}
              </span>
              <h3
                className={`flex-1 font-display text-2xl font-bold tracking-tight transition-all duration-300 md:text-3xl ${
                  isActive
                    ? "translate-x-1 text-ink-900"
                    : "text-ink-900/40 group-hover:text-ink-900/70"
                }`}
              >
                {v.title}
              </h3>
              <motion.span
                aria-hidden
                className="text-xl text-brand-600"
                animate={{ rotate: isActive ? 90 : 0, opacity: isActive ? 1 : 0.3 }}
                transition={{ duration: 0.3, ease }}
              >
                →
              </motion.span>
            </div>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pl-[5.5rem] pt-4 text-ink-700/70">
                    {v.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
