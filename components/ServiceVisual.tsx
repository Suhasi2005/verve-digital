"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard from "@/components/TiltCard";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-80px" } as const;

/**
 * Premium, animated mock visual for each service, with floating glass chips.
 * Wrapped in a tilt + cursor-spotlight card, with subtle scroll parallax.
 */
export default function ServiceVisual({ slug }: { slug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <motion.div ref={ref} style={{ y }} className="relative">
      {/* soft glow */}
      <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-300/30 to-accent-300/20 blur-3xl" />
      <TiltCard
        max={7}
        className="group rounded-[2rem] border border-white/80 bg-gradient-to-br from-haze-100 to-white p-6 shadow-[0_40px_90px_-44px_rgba(13,143,214,0.6)] md:p-8"
      >
        <Mock slug={slug} />
      </TiltCard>
      <Chips slug={slug} />
    </motion.div>
  );
}

function Bars({ values }: { values: number[] }) {
  return (
    <div className="flex h-24 items-end gap-2">
      {values.map((v, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: i * 0.06, ease }}
          style={{ height: `${v}%`, transformOrigin: "bottom" }}
          className="flex-1 rounded-t-md bg-gradient-to-t from-brand-500 to-accent-400"
        />
      ))}
    </div>
  );
}

function Chip({
  className,
  delay = 0,
  children,
}: {
  className: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease }}
      className={`glass absolute z-10 rounded-2xl px-4 py-3 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function Mock({ slug }: { slug: string }) {
  switch (slug) {
    case "seo":
      return (
        <div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-ink-700/70">
              Organic performance
            </span>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
              ▲ +42%
            </span>
          </div>
          <div className="mt-5">
            <Bars values={[32, 46, 40, 60, 54, 74, 92]} />
          </div>
          <div className="mt-5 space-y-2.5">
            {["best marketing agency", "seo services near me", "ppc management"].map(
              (kw, i) => (
                <motion.div
                  key={kw}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease }}
                  className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2 text-xs ring-1 ring-brand-50"
                >
                  <span className="text-ink-700/70">{kw}</span>
                  <span className="font-bold text-brand-600">#{i + 1}</span>
                </motion.div>
              )
            )}
          </div>
        </div>
      );
    case "social-media":
      return (
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-500 to-accent-400" />
            <div className="flex-1">
              <div className="h-2.5 w-24 rounded bg-ink-900/10" />
              <div className="mt-1.5 h-2.5 w-16 rounded bg-ink-900/10" />
            </div>
            <span className="text-xs font-semibold text-brand-600">Follow</span>
          </div>
          <div className="mt-4 h-36 rounded-2xl bg-gradient-to-br from-brand-100 via-accent-100 to-brand-200" />
          <div className="mt-4 flex items-center gap-5 text-sm">
            <span className="text-rose-500">♥ 9.4k</span>
            <span className="text-ink-700/50">💬 312</span>
            <span className="text-ink-700/50">↗ 1.2k</span>
          </div>
        </div>
      );
    case "paid-ads":
      return (
        <div>
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 p-5 text-white">
            <div className="text-[11px] font-semibold uppercase tracking-wide opacity-80">
              Sponsored
            </div>
            <div className="mt-1 font-display text-xl font-bold">
              Summer Sale — 40% off
            </div>
            <div className="mt-3 inline-flex rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-brand-700">
              Shop now →
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between text-xs">
            <span className="text-ink-700/60">Campaign ROAS</span>
            <span className="font-bold text-brand-600">6.1x</span>
          </div>
          <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-brand-100">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "82%" }}
              viewport={viewport}
              transition={{ duration: 0.9, ease }}
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-400"
            />
          </div>
        </div>
      );
    case "branding":
      return (
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-2xl font-bold text-white">
              V
            </div>
            <div>
              <div className="font-display text-lg font-bold">Verve</div>
              <div className="text-[11px] text-ink-700/50">Brand identity</div>
            </div>
          </div>
          <div className="mt-5 flex gap-2.5">
            {["bg-brand-600", "bg-accent-400", "bg-ink-900", "bg-brand-200", "bg-haze-100"].map(
              (c, i) => (
                <motion.div
                  key={c}
                  initial={{ scale: 0, y: 8 }}
                  whileInView={{ scale: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.07, ease }}
                  className={`h-11 w-11 rounded-xl border border-ink-900/5 ${c}`}
                />
              )
            )}
          </div>
          <div className="mt-5 font-display text-4xl font-bold tracking-tight">
            Aa <span className="text-ink-900/30">Bb Cc</span>
          </div>
        </div>
      );
    case "web-design":
      return (
        <div>
          <div className="flex items-center gap-1.5 border-b border-ink-900/10 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 h-3.5 flex-1 rounded bg-ink-900/5" />
          </div>
          <div className="mt-4 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-400" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-14 rounded-xl bg-brand-100" />
            <div className="h-14 rounded-xl bg-brand-100" />
            <div className="h-14 rounded-xl bg-brand-100" />
          </div>
        </div>
      );
    case "analytics":
    default:
      return (
        <div className="flex items-center gap-6">
          <svg viewBox="0 0 36 36" className="h-28 w-28">
            <circle cx="18" cy="18" r="15" fill="none" stroke="#e0f2fe" strokeWidth="5" />
            <motion.circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              stroke="#0d8fd6"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 15}
              initial={{ strokeDashoffset: 2 * Math.PI * 15 }}
              whileInView={{ strokeDashoffset: 2 * Math.PI * 15 * 0.27 }}
              viewport={viewport}
              transition={{ duration: 1, ease }}
              transform="rotate(-90 18 18)"
            />
          </svg>
          <div className="flex-1 space-y-3">
            <div>
              <div className="font-display text-3xl font-bold text-brand-600">
                73%
              </div>
              <div className="text-xs text-ink-700/60">Goal completion</div>
            </div>
            <div className="space-y-2">
              <div className="h-2.5 w-full rounded-full bg-brand-100" />
              <div className="h-2.5 w-2/3 rounded-full bg-brand-100" />
            </div>
          </div>
        </div>
      );
  }
}

function Chips({ slug }: { slug: string }) {
  const map: Record<string, [string, string]> = {
    seo: ["+340%", "Organic traffic"],
    "social-media": ["+48k", "New followers"],
    "paid-ads": ["6.1x", "Return on spend"],
    branding: ["+2.3x", "Brand recall"],
    "web-design": ["98", "Speed score"],
    analytics: ["+27%", "Conversions"],
  };
  const [value, label] = map[slug] ?? map.seo;
  return (
    <>
      <Chip className="-left-4 top-8" delay={0.3}>
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
            ↗
          </span>
          <div>
            <div className="font-display text-lg font-bold leading-none">
              {value}
            </div>
            <div className="text-[11px] text-ink-700/60">{label}</div>
          </div>
        </div>
      </Chip>
      <Chip className="-right-3 bottom-8" delay={0.45}>
        <div className="text-yellow-400">★★★★★</div>
        <div className="mt-0.5 text-[11px] font-medium text-ink-700/70">
          Trusted by 250+ brands
        </div>
      </Chip>
    </>
  );
}
