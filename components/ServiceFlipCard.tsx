"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Service } from "@/lib/content";
import { serviceIcon } from "@/components/icons";
import { Search } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Premium 3D flip card. Front = icon + title + tagline; on hover (desktop) or
 * tap (touch) it flips to a gradient back face with the full feature list + CTA.
 */
export default function ServiceFlipCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const show = hovered || flipped;
  const Icon = serviceIcon[service.slug] ?? Search;

  const faceBase =
    "absolute inset-0 flex flex-col rounded-3xl p-8 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]";

  return (
    <div
      className="group h-[23rem] [perspective:1600px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: show ? 180 : 0 }}
        transition={{ duration: 0.7, ease }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* ------------------------------- FRONT ------------------------------- */}
        <div
          className={`${faceBase} glow-border border border-brand-100 bg-white shadow-[0_18px_50px_-34px_rgba(13,143,214,0.5)]`}
        >
          <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-t-3xl bg-gradient-to-r from-brand-500 to-accent-400 transition-transform duration-300 group-hover:scale-x-100" />

          <div className="flex items-center justify-between">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400 text-white ring-1 ring-white/60 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <span className="font-display text-sm font-bold text-ink-900/20">
              0{index + 1}
            </span>
          </div>

          <h3 className="mt-7 font-display text-2xl font-bold tracking-tight">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
            {service.short}
          </p>

          <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-brand-600">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50">
              ↻
            </span>
            Hover to explore
          </div>
        </div>

        {/* ------------------------------- BACK ------------------------------- */}
        <div
          className={`${faceBase} [transform:rotateY(180deg)] overflow-hidden border border-brand-300 bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_30px_70px_-34px_rgba(13,143,214,0.8)]`}
        >
          {/* soft light + grid */}
          <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
          <div className="relative flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            <span>0{index + 1}</span>
            <span className="h-px flex-1 bg-white/30" />
          </div>
          <h3 className="relative mt-3 font-display text-xl font-bold tracking-tight">
            {service.title}
          </h3>

          <ul className="relative mt-4 space-y-2.5">
            {service.features.map((f, fi) => (
              <motion.li
                key={f}
                initial={false}
                animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: show ? 0.25 + fi * 0.07 : 0, ease }}
                className="flex items-center gap-2.5 text-sm text-white/90"
              >
                <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-white/20 text-[10px] font-bold">
                  ✓
                </span>
                {f}
              </motion.li>
            ))}
          </ul>

          <div className="relative mt-auto pt-5">
            <Link
              href="/contact"
              onClick={(e) => e.stopPropagation()}
              className="group/cta inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:gap-3"
            >
              Get started
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
