"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials, company } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;
const avatarGradients = [
  "from-brand-500 to-accent-500",
  "from-accent-400 to-brand-600",
  "from-brand-600 to-accent-500",
  "from-accent-500 to-brand-700",
  "from-brand-400 to-accent-400",
  "from-accent-600 to-brand-500",
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export default function TestimonialCarousel() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = (d: number) => setState(([i]) => [(i + d + count) % count, d]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, count]);

  const t = testimonials[index];

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Aggregate rating */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm">
        <span className="text-lg leading-none text-yellow-400">★★★★★</span>
        <span className="font-semibold text-ink-900">
          {company.rating.score}/5
        </span>
        <span className="text-ink-700/50">
          · Loved by {company.rating.count} brands
        </span>
      </div>

      {/* Card */}
      <div className="relative h-80 sm:h-64">
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
            className="glass absolute inset-0 flex cursor-grab flex-col justify-center overflow-hidden p-8 text-center active:cursor-grabbing md:p-12"
          >
            {/* big decorative quote glyph */}
            <span className="pointer-events-none absolute left-6 top-2 select-none font-display text-[7rem] leading-none text-brand-100">
              &ldquo;
            </span>
            {/* accent glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-brand-300/30 to-accent-300/20 blur-3xl" />

            <div className="relative text-yellow-400">★★★★★</div>
            <blockquote className="relative mx-auto mt-4 max-w-2xl font-display text-xl font-medium leading-snug tracking-tight text-ink-800 sm:text-2xl">
              {t.quote}
            </blockquote>
            <figcaption className="relative mt-6 flex items-center justify-center gap-3">
              <span
                className={`grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${avatarGradients[index % avatarGradients.length]}`}
              >
                {initials(t.name)}
              </span>
              <div className="text-left">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-ink-700/60">{t.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      {/* Avatar navigation */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-brand-200 bg-white/70 text-ink-900 backdrop-blur transition hover:bg-white"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((person, i) => {
            const isActive = i === index;
            return (
              <button
                key={person.name}
                onClick={() => setState([i, i > index ? 1 : -1])}
                aria-label={`View ${person.name}'s testimonial`}
                className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br text-[11px] font-bold text-white transition-all duration-300 ${
                  avatarGradients[i % avatarGradients.length]
                } ${
                  isActive
                    ? "scale-110 ring-2 ring-brand-500 ring-offset-2"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                {initials(person.name)}
              </button>
            );
          })}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-brand-200 bg-white/70 text-ink-900 backdrop-blur transition hover:bg-white"
        >
          →
        </button>
      </div>
    </div>
  );
}
