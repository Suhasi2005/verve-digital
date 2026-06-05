"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function TestimonialCarousel() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = (d: number) =>
    setState(([i]) => [(i + d + count) % count, d]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, count]);

  const t = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-72 sm:h-60">
        <AnimatePresence custom={dir} mode="wait">
          <motion.figure
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir >= 0 ? -60 : 60 }}
            transition={{ duration: 0.45, ease }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1);
              else if (info.offset.x > 80) go(-1);
            }}
            className="glass absolute inset-0 flex cursor-grab flex-col justify-center p-10 text-center active:cursor-grabbing"
          >
            <div className="text-yellow-400">★★★★★</div>
            <blockquote className="mx-auto mt-4 max-w-2xl text-lg text-ink-800 sm:text-xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div className="text-left">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-ink-700/60">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 bg-white/70 text-ink-900 backdrop-blur transition hover:bg-white"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-600" : "w-2 bg-brand-200"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-200 bg-white/70 text-ink-900 backdrop-blur transition hover:bg-white"
        >
          →
        </button>
      </div>
    </div>
  );
}
