"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { projects } from "@/lib/content";
import Counter from "@/components/Counter";
import SmartImage from "@/components/SmartImage";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkShowcase() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  // Mouse parallax for the preview image
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 120, damping: 18 });
  const py = useSpring(rawY, { stiffness: 120, damping: 18 });
  const imgX = useTransform(px, (v) => v * 16);
  const imgY = useTransform(py, (v) => v * 16);

  const stageRef = useRef<HTMLDivElement>(null);
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = stageRef.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set((e.clientX - (r.left + r.width / 2)) / r.width);
    rawY.set((e.clientY - (r.top + r.height / 2)) / r.height);
  }
  function reset() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
      {/* LEFT — project list */}
      <motion.ul
        className="flex flex-col lg:sticky lg:top-28 lg:self-start"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ staggerChildren: 0.08 }}
      >
        {projects.map((p, i) => {
          const isActive = i === active;
          return (
            <motion.li
              key={p.slug}
              variants={{
                hidden: { opacity: 0, x: -24 },
                show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
              }}
            >
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-center gap-4 border-b border-ink-900/10 py-5 text-left"
              >
                <span
                  className={`font-display text-sm font-bold transition-colors ${
                    isActive ? "text-brand-600" : "text-ink-900/30"
                  }`}
                >
                  0{i + 1}
                </span>
                <span className="flex-1">
                  <span
                    className={`block font-display text-lg font-bold tracking-tight transition-all duration-300 md:text-xl ${
                      isActive
                        ? "translate-x-1 text-ink-900"
                        : "text-ink-900/40 group-hover:text-ink-900/70"
                    }`}
                  >
                    {p.client}
                  </span>
                  <span className="text-xs text-ink-700/50">{p.category}</span>
                </span>
                <motion.span
                  aria-hidden
                  className="text-xl text-brand-600"
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                  transition={{ duration: 0.3, ease }}
                >
                  →
                </motion.span>
              </button>
            </motion.li>
          );
        })}
      </motion.ul>

      {/* RIGHT — dynamic preview */}
      <div
        ref={stageRef}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="relative"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease }}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_40px_90px_-44px_rgba(13,143,214,0.6)]">
              <motion.div style={{ x: imgX, y: imgY }} className="h-72 md:h-80">
                <SmartImage
                  src={current.image}
                  alt={current.title}
                  fallbackGradient={current.gradient}
                  className="h-full w-full scale-110"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.35),transparent_55%)]" />
              <span className="absolute left-6 top-6 rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {current.category}
              </span>
              {/* floating top-result chip */}
              <div className="glass absolute bottom-5 right-5 rounded-2xl px-4 py-3">
                <div className="font-display text-xl font-bold text-brand-600">
                  {current.results[0].value}
                </div>
                <div className="text-[11px] text-ink-700/60">
                  {current.results[0].label}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-700/40">
                {current.client}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
                {current.title}
              </h3>
              <p className="mt-3 max-w-xl text-ink-700/70">{current.summary}</p>

              <div
                key={current.slug}
                className="mt-6 grid max-w-md grid-cols-3 gap-4 border-t border-brand-50 pt-6"
              >
                {current.results.map((r) => (
                  <div key={r.label}>
                    <div className="font-display text-2xl font-bold text-brand-600">
                      <Counter value={r.value} />
                    </div>
                    <div className="text-xs text-ink-700/50">{r.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={`/work/${current.slug}`}
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
                >
                  <span className="relative">
                    View case study
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-brand-600 transition-all duration-300 group-hover:w-full" />
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
