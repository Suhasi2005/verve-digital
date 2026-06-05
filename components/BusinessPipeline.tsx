"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { businessPlans, type BusinessPlan } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function BusinessPipeline() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-0 h-72 w-72 rounded-full bg-brand-300/30 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[8%] top-24 h-72 w-72 rounded-full bg-accent-300/25 blur-[100px]"
        />
      </div>

      {/* Pipeline row */}
      <div className="relative flex flex-col gap-5 pt-10 lg:flex-row lg:items-stretch lg:gap-4">
        {/* Continuous connector wire + flowing particles (desktop) */}
        <div className="pointer-events-none absolute left-[8%] right-[8%] top-5 hidden lg:block">
          <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-brand-200 via-brand-400 to-accent-300" />
          {[0, 1, 2].map((p) => (
            <motion.span
              key={p}
              className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-500 shadow-[0_0_12px_3px_rgba(13,143,214,0.6)]"
              animate={{ left: ["0%", "100%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: p * 1.3,
              }}
            />
          ))}
        </div>

        {businessPlans.map((plan, i) => (
          <PipelineCard
            key={plan.title}
            plan={plan}
            index={i}
            active={active === i}
            dimmed={active !== -1 && active !== i}
            onActivate={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}

function PipelineCard({
  plan,
  index,
  active,
  dimmed,
  onActivate,
}: {
  plan: BusinessPlan;
  index: number;
  active: boolean;
  dimmed: boolean;
  onActivate: () => void;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);
  const inView = useInView(outerRef, { once: true, margin: "-60px" });

  // Imperative spotlight — no React re-render on mouse move (keeps it smooth).
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = cardRef.current?.getBoundingClientRect();
    const el = spotRef.current;
    if (!r || !el) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    el.style.background = `radial-gradient(220px circle at ${x}% ${y}%, rgba(13,143,214,0.10), transparent 60%)`;
    el.style.opacity = "1";
  }
  function onLeave() {
    if (spotRef.current) spotRef.current.style.opacity = "0";
  }

  return (
    <motion.div
      ref={outerRef}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 30,
        flexGrow: active ? 2.4 : 1,
      }}
      transition={{
        opacity: { duration: 0.5, delay: inView ? index * 0.08 : 0, ease },
        y: { duration: 0.5, delay: inView ? index * 0.08 : 0, ease },
        flexGrow: { duration: 0.55, ease },
      }}
      onMouseEnter={onActivate}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onActivate}
      style={{ flexBasis: 0 }}
      className="relative grow cursor-pointer pt-7 lg:min-w-0"
    >
      {/* Node badge sitting on the wire */}
      <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2">
        <span
          className={`grid h-11 w-11 place-items-center rounded-full border-2 font-display text-sm font-bold transition-all duration-300 ${
            active
              ? "scale-110 border-brand-600 bg-brand-600 text-white shadow-[0_0_24px_5px_rgba(13,143,214,0.45)]"
              : "border-brand-200 bg-white text-ink-900/50"
          }`}
        >
          0{index + 1}
        </span>
      </div>

      <motion.div
        ref={cardRef}
        animate={{
          y: active ? -6 : 0,
          opacity: dimmed ? 0.66 : 1,
        }}
        transition={{ duration: 0.45, ease }}
        className={`relative flex h-full min-h-[21rem] flex-col overflow-hidden rounded-3xl border p-6 ${
          active
            ? "z-10 border-brand-200 bg-white shadow-[0_44px_90px_-40px_rgba(13,143,214,0.65)]"
            : "border-brand-100 bg-white shadow-[0_18px_50px_-30px_rgba(13,143,214,0.4)]"
        }`}
      >
        {/* Top accent bar */}
        <motion.div
          aria-hidden
          animate={{ scaleX: active ? 1 : 0 }}
          transition={{ duration: 0.4, ease }}
          className="absolute left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-brand-500 to-accent-400"
        />

        {/* Cursor spotlight (updated imperatively) */}
        <div
          ref={spotRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        />

        {/* Glow behind active */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-brand-300/50 to-accent-300/40 blur-[70px]"
            />
          )}
        </AnimatePresence>

        <div className="relative flex items-center justify-between">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-100 to-accent-100 text-2xl ring-1 ring-white/60">
            {plan.icon}
          </span>
        </div>

        <h3 className="relative mt-5 font-display text-xl font-bold tracking-tight">
          {plan.title}
        </h3>
        <p className="relative mt-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
          {plan.tagline}
        </p>

        {/* Expanded content (active) */}
        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease }}
              className="relative overflow-hidden"
            >
              <p className="pt-3 text-sm text-ink-700/70">{plan.description}</p>
              <Link
                href="/contact"
                className="group/cta mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
              >
                <span className="relative">
                  Explore
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-brand-600 transition-all duration-300 group-hover/cta:w-full" />
                </span>
                <span className="transition-transform group-hover/cta:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mini visual anchored to bottom */}
        <div className="relative mt-auto pt-5">
          <PlanVisual visual={plan.visual} active={active} />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ----------------------------- Mini visuals ----------------------------- */

function PlanVisual({
  visual,
  active,
}: {
  visual: BusinessPlan["visual"];
  active: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/70 bg-gradient-to-br from-haze-100 to-white p-4 shadow-inner">
      <Inner visual={visual} active={active} />
    </div>
  );
}

function Bars({ values, active }: { values: number[]; active: boolean }) {
  return (
    <div className="flex h-14 items-end gap-1.5">
      {values.map((v, i) => (
        <motion.div
          key={i}
          animate={{ scaleY: active ? 1 : 0.55 }}
          transition={{ duration: 0.5, delay: i * 0.05, ease }}
          style={{ height: `${v}%`, transformOrigin: "bottom" }}
          className="w-2.5 rounded-t bg-gradient-to-t from-brand-500 to-accent-400"
        />
      ))}
    </div>
  );
}

function Inner({
  visual,
  active,
}: {
  visual: BusinessPlan["visual"];
  active: boolean;
}) {
  switch (visual) {
    case "roadmap":
      return (
        <div>
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-brand-100" />
            {[0, 1, 2, 3].map((n) => (
              <motion.span
                key={n}
                animate={{ scale: active ? 1 : 0.85 }}
                transition={{ duration: 0.3, delay: n * 0.06 }}
                className={`relative h-3 w-3 rounded-full ${
                  n === 3 ? "bg-accent-500" : "bg-brand-500"
                }`}
              />
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-brand-100" />
            <div className="h-2 w-1/2 rounded-full bg-brand-100" />
          </div>
        </div>
      );
    case "branding":
      return (
        <div>
          <div className="flex gap-1.5">
            {["bg-brand-600", "bg-accent-400", "bg-ink-900", "bg-brand-200"].map(
              (c, i) => (
                <motion.div
                  key={c}
                  animate={{ y: active ? 0 : 4, opacity: active ? 1 : 0.6 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className={`h-7 w-7 rounded-lg ${c}`}
                />
              )
            )}
          </div>
          <div className="mt-3 font-display text-2xl font-bold">
            Aa <span className="text-ink-900/30">Bb</span>
          </div>
        </div>
      );
    case "social":
      return (
        <div>
          <div className="h-12 rounded-lg bg-gradient-to-br from-brand-100 to-accent-100" />
          <div className="mt-2 flex items-center gap-3 text-xs">
            <span className="text-rose-500">♥ 9.4k</span>
            <span className="text-ink-700/50">💬 312</span>
          </div>
        </div>
      );
    case "growth":
      return (
        <div>
          <svg viewBox="0 0 100 44" className="h-14 w-full">
            <motion.polyline
              points="2,40 22,30 42,33 62,18 82,20 98,4"
              fill="none"
              stroke="#0d8fd6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: active ? 1 : 0.4 }}
              transition={{ duration: 0.9, ease }}
            />
          </svg>
          <div className="mt-1 text-xs font-bold text-emerald-600">▲ +212%</div>
        </div>
      );
    case "analytics":
      return (
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 36 36" className="h-14 w-14">
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
              animate={{
                strokeDashoffset: 2 * Math.PI * 15 * (active ? 0.27 : 0.7),
              }}
              transition={{ duration: 0.9, ease }}
              transform="rotate(-90 18 18)"
            />
          </svg>
          <div>
            <div className="font-display text-lg font-bold text-brand-600">
              73%
            </div>
            <div className="text-[10px] text-ink-700/60">Goal hit</div>
          </div>
        </div>
      );
    default:
      return <Bars values={[40, 60, 50, 75]} active={active} />;
  }
}
