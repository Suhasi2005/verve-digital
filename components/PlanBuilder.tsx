"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/content";
import Magnetic from "@/components/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

function verdict(n: number) {
  if (n === 0) return "Select services to start building your plan.";
  if (n <= 2) return "Focused — a sharp, single-channel push.";
  if (n <= 4) return "Balanced — multi-channel growth engine.";
  return "Full-funnel — total digital domination. 🚀";
}

export default function PlanBuilder() {
  const [selected, setSelected] = useState<string[]>(["seo", "social-media"]);

  const toggle = (slug: string) =>
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );

  const coverage = Math.round((selected.length / services.length) * 100);
  const chosen = services.filter((s) => selected.includes(s.slug));

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Selectable services */}
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s) => {
          const on = selected.includes(s.slug);
          return (
            <button
              key={s.slug}
              onClick={() => toggle(s.slug)}
              aria-pressed={on}
              className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 ${
                on
                  ? "-translate-y-0.5 border-brand-300 bg-white shadow-[0_24px_50px_-30px_rgba(13,143,214,0.6)]"
                  : "border-brand-100 bg-white/70 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white"
              }`}
            >
              <span
                className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl text-2xl ring-1 transition-colors duration-300 ${
                  on
                    ? "bg-gradient-to-br from-brand-500 to-accent-400 ring-white/60"
                    : "bg-gradient-to-br from-brand-100 to-accent-100 ring-white/60"
                }`}
              >
                {s.icon}
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-display text-base font-bold tracking-tight">
                  {s.title}
                </div>
                <div className="truncate text-xs text-ink-700/60">{s.short}</div>
              </div>
              {/* toggle check */}
              <span
                className={`grid h-6 w-6 flex-shrink-0 place-items-center rounded-full border-2 text-xs transition-all duration-300 ${
                  on
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-ink-900/15 text-transparent group-hover:border-brand-300"
                }`}
              >
                ✓
              </span>
            </button>
          );
        })}
      </div>

      {/* Live summary panel */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="glass relative overflow-hidden rounded-3xl p-7">
          <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-brand-300/40 to-accent-300/30 blur-[60px]" />

          <div className="relative flex items-center justify-between">
            <h3 className="font-display text-lg font-bold">Your plan</h3>
            <div className="flex items-baseline gap-1">
              <motion.span
                key={selected.length}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease }}
                className="font-display text-2xl font-bold text-brand-600"
              >
                {selected.length}
              </motion.span>
              <span className="text-sm text-ink-700/50">
                / {services.length}
              </span>
            </div>
          </div>

          {/* coverage meter */}
          <div className="relative mt-4">
            <div className="flex justify-between text-[11px] font-medium text-ink-700/50">
              <span>Coverage</span>
              <span>{coverage}%</span>
            </div>
            <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-brand-100">
              <motion.div
                animate={{ width: `${coverage}%` }}
                transition={{ duration: 0.5, ease }}
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400"
              />
            </div>
          </div>

          {/* selected list */}
          <div className="relative mt-5 min-h-[88px]">
            <AnimatePresence mode="popLayout">
              {chosen.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-ink-700/50"
                >
                  No services selected yet — pick the ones you need.
                </motion.p>
              ) : (
                <ul className="flex flex-wrap gap-2">
                  {chosen.map((s) => (
                    <motion.li
                      key={s.slug}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25, ease }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700"
                    >
                      <span>{s.icon}</span>
                      {s.title.split(" ")[0]}
                    </motion.li>
                  ))}
                </ul>
              )}
            </AnimatePresence>
          </div>

          {/* verdict */}
          <div className="relative mt-5 rounded-2xl bg-ink-900/[0.03] p-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={verdict(selected.length)}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease }}
                className="text-sm font-medium text-ink-800"
              >
                {verdict(selected.length)}
              </motion.p>
            </AnimatePresence>
          </div>

          <Magnetic className="mt-6 block">
            <Link
              href={{
                pathname: "/contact",
                query: selected.length ? { services: selected.join(",") } : {},
              }}
              className="btn-primary w-full"
            >
              Get a proposal for these →
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
