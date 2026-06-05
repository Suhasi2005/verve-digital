"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen
                ? "border-brand-200 bg-white shadow-[0_20px_50px_-24px_rgba(244,98,58,0.4)]"
                : "border-ink-900/10 bg-white/60 hover:border-brand-200"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display font-semibold text-ink-900">
                {item.q}
              </span>
              <span
                className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full text-lg transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 bg-brand-600 text-white"
                    : "bg-brand-50 text-brand-600"
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-6 pb-6 text-ink-700/70">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
