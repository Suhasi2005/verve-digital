"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SmartImage from "@/components/SmartImage";

const ease = [0.22, 1, 0.36, 1] as const;

// Each slide = a presenter pointing to a platform. Drop the images in
// /public/images with these names (prompts provided separately).
const slides = [
  { src: "/images/hero-whatsapp.webp", label: "Add hero-whatsapp", icon: "💬" },
  { src: "/images/hero-instagram.webp", label: "Add hero-instagram", icon: "📸" },
  { src: "/images/hero-seo.webp", label: "Add hero-seo", icon: "🔍" },
];

export default function HeroCarousel() {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = (d: number) =>
    setState(([i]) => [(i + d + count) % count, d]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 4000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, count]);

  const slide = slides[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image frame */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-brand-100 to-accent-100 shadow-[0_40px_80px_-30px_rgba(13,143,214,0.6)]">
        <AnimatePresence custom={dir} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            initial={{ opacity: 0, x: dir >= 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir >= 0 ? -80 : 80 }}
            transition={{ duration: 0.5, ease }}
            className="absolute inset-0"
          >
            <SmartImage
              src={slide.src}
              alt="Marketing strategist presenting a platform"
              icon={slide.icon}
              label={slide.label}
              className="h-full w-full"
            />
          </motion.div>
        </AnimatePresence>

        {/* Controls (bottom-right, Sircles-style) */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/80 p-1.5 backdrop-blur">
          <button
            onClick={() => go(-1)}
            aria-label="Previous"
            className="grid h-9 w-9 place-items-center rounded-full border border-ink-900/10 bg-white text-ink-900 transition hover:bg-haze-100"
          >
            ←
          </button>
          <div className="flex items-center gap-1.5 px-1">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setState([i, i > index ? 1 : -1])}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-5 bg-brand-600" : "w-2 bg-brand-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next"
            className="grid h-9 w-9 place-items-center rounded-full bg-brand-600 text-white transition hover:bg-brand-700"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
