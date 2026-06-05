"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { services } from "@/lib/content";
import SmartImage from "@/components/SmartImage";

const ease = [0.22, 1, 0.36, 1] as const;

// Accent gradient per service (cool blue/cyan family).
const accents: Record<string, string> = {
  seo: "from-brand-500 to-accent-400",
  "social-media": "from-accent-400 to-brand-600",
  "paid-ads": "from-brand-600 to-accent-500",
  branding: "from-accent-500 to-brand-500",
  "web-design": "from-brand-400 to-brand-700",
  analytics: "from-accent-400 to-brand-500",
};

export default function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const current = services[active];

  // Mouse parallax (-0.5 .. 0.5) for the preview stage
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const px = useSpring(rawX, { stiffness: 120, damping: 18 });
  const py = useSpring(rawY, { stiffness: 120, damping: 18 });

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
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Services We Provide
          </h2>
          <p className="mt-4 text-ink-700/70">
            Hover a service to preview how we move the needle for your brand.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* LEFT — service list */}
          <motion.ul
            className="flex flex-col lg:sticky lg:top-28 lg:self-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
          >
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <motion.li
                  key={s.slug}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease },
                    },
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
                    <span
                      className={`font-display text-2xl font-bold tracking-tight transition-all duration-300 md:text-3xl ${
                        isActive
                          ? "translate-x-1 text-ink-900"
                          : "text-ink-900/35 group-hover:text-ink-900/60"
                      }`}
                    >
                      {s.title}
                    </span>
                    <motion.span
                      aria-hidden
                      className="ml-auto text-xl text-brand-600"
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -8,
                      }}
                      transition={{ duration: 0.3, ease }}
                    >
                      →
                    </motion.span>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* RIGHT — dynamic preview stage */}
          <div
            ref={stageRef}
            onMouseMove={onMove}
            onMouseLeave={reset}
            className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-haze-100 to-white p-6 shadow-[0_30px_80px_-40px_rgba(13,143,214,0.5)] md:p-10"
          >
            {/* animated background blob (color per service) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`blob-${current.slug}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.5, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5, ease }}
                className={`pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gradient-to-br ${
                  accents[current.slug] ?? "from-brand-400 to-accent-400"
                } blur-[90px]`}
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-40" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease }}
                className="relative flex h-full flex-col"
              >
                <div className="relative flex-1">
                  <Preview slug={current.slug} px={px} py={py} />
                </div>

                {/* Description */}
                <div className="relative mt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-600">
                    <span className="text-lg">{current.icon}</span>
                    {current.title}
                  </div>
                  <p className="mt-2 max-w-md text-sm text-ink-700/70">
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Preview visuals ---------------------------- */

function Preview({
  slug,
  px,
  py,
}: {
  slug: string;
  px: MotionValue<number>;
  py: MotionValue<number>;
}) {
  // Layered parallax: main panel moves a little, floating cards move more.
  const mainX = useTransform(px, (v) => v * 14);
  const mainY = useTransform(py, (v) => v * 14);
  const f1X = useTransform(px, (v) => v * 34);
  const f1Y = useTransform(py, (v) => v * 34);
  const f2X = useTransform(px, (v) => v * -26);
  const f2Y = useTransform(py, (v) => v * -26);

  const float = {
    animate: { y: [0, -10, 0] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  };

  return (
    <div className="relative grid h-full min-h-[280px] place-items-center [perspective:1200px]">
      {/* Main glass panel */}
      <motion.div
        style={{ x: mainX, y: mainY }}
        className="relative w-full max-w-sm rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_24px_60px_-30px_rgba(13,143,214,0.6)] backdrop-blur-xl"
      >
        <MainVisual slug={slug} />
      </motion.div>

      {/* Floating card 1 (top-right) */}
      <motion.div
        style={{ x: f1X, y: f1Y }}
        className="absolute right-0 top-2 z-10"
        {...float}
      >
        <FloatCardA slug={slug} />
      </motion.div>

      {/* Floating card 2 (bottom-left) */}
      <motion.div
        style={{ x: f2X, y: f2Y }}
        className="absolute bottom-2 left-0 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <FloatCardB slug={slug} />
      </motion.div>
    </div>
  );
}

function chipClass() {
  return "rounded-xl border border-white/70 bg-white/90 px-3 py-2 shadow-[0_16px_40px_-24px_rgba(13,143,214,0.6)] backdrop-blur";
}

/* Bars that grow on mount */
function Bars({ values }: { values: number[] }) {
  return (
    <div className="flex h-20 items-end gap-1.5">
      {values.map((v, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: i * 0.06, ease }}
          style={{ height: `${v}%`, transformOrigin: "bottom" }}
          className="w-3 rounded-t bg-gradient-to-t from-brand-500 to-accent-400"
        />
      ))}
    </div>
  );
}

function MainVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "seo":
    case "analytics":
      return (
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-ink-700/60">
              {slug === "seo" ? "Organic traffic" : "Live dashboard"}
            </span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
              ▲ +42%
            </span>
          </div>
          <div className="mt-3">
            <Bars values={[35, 50, 42, 65, 58, 80, 95]} />
          </div>
          <div className="mt-3 h-1.5 w-2/3 rounded-full bg-brand-100" />
          <div className="mt-2 h-1.5 w-1/2 rounded-full bg-brand-100" />
        </div>
      );
    case "social-media":
      return (
        <div>
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-400 text-[11px] font-bold text-white">
              V
            </div>
            <div className="leading-tight">
              <div className="text-xs font-semibold text-ink-900">
                vervedigital
              </div>
              <div className="text-[10px] text-ink-700/50">Sponsored</div>
            </div>
          </div>
          <div className="mt-3 h-28 overflow-hidden rounded-xl">
            <SmartImage
              src="/images/showcase-post.webp"
              alt="Social media post"
              fallbackGradient="from-brand-100 to-accent-100"
              className="h-full w-full"
            />
          </div>
          <div className="mt-3 flex items-center gap-4 text-sm">
            <span className="text-rose-500">♥ 9.4k</span>
            <span className="text-ink-700/50">💬 312</span>
            <span className="text-ink-700/50">↗ 1.2k</span>
          </div>
        </div>
      );
    case "paid-ads":
      return (
        <div>
          <div className="rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 p-4 text-white">
            <div className="text-[10px] font-semibold uppercase tracking-wide opacity-80">
              Sponsored
            </div>
            <div className="mt-1 font-display text-lg font-bold">
              Summer Sale — 40% off
            </div>
            <div className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700">
              Shop now →
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-ink-700/60">Campaign ROAS</span>
            <span className="font-bold text-brand-600">6.1x</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-brand-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82%" }}
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
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-xl font-bold text-white">
              L
            </div>
            <div>
              <div className="font-display text-lg font-bold">Verve</div>
              <div className="text-[11px] text-ink-700/50">Brand identity</div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            {["bg-brand-600", "bg-accent-400", "bg-ink-900", "bg-brand-200", "bg-white"].map(
              (c) => (
                <div
                  key={c}
                  className={`h-10 w-10 rounded-xl border border-ink-900/5 ${c}`}
                />
              )
            )}
          </div>
          <div className="mt-4 font-display text-3xl font-bold tracking-tight">
            Aa <span className="text-ink-900/30">Bb Cc</span>
          </div>
        </div>
      );
    case "web-design":
      return (
        <div>
          <div className="flex items-center gap-1.5 border-b border-ink-900/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 h-3 flex-1 rounded bg-ink-900/5" />
          </div>
          <div className="mt-3 h-20 overflow-hidden rounded-xl">
            <SmartImage
              src="/images/showcase-web.webp"
              alt="Website hero"
              fallbackGradient="from-brand-500 to-accent-400"
              className="h-full w-full"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((n) => (
              <div
                key={n}
                className="rounded-lg bg-gradient-to-br from-brand-100 to-accent-100 p-2"
              >
                <div className="h-1.5 w-3/4 rounded-full bg-brand-300/70" />
                <div className="mt-1 h-1.5 w-1/2 rounded-full bg-brand-200" />
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return <Bars values={[40, 60, 50, 75, 90]} />;
  }
}

function FloatCardA({ slug }: { slug: string }) {
  const map: Record<string, { label: string; value: string; icon: string }> = {
    seo: { label: "Keyword rank", value: "#1", icon: "🏆" },
    "social-media": { label: "New followers", value: "+48k", icon: "👥" },
    "paid-ads": { label: "Cost / acq.", value: "-38%", icon: "🎯" },
    branding: { label: "Brand recall", value: "+2.3x", icon: "✨" },
    "web-design": { label: "Page score", value: "98", icon: "⚡" },
    analytics: { label: "Conversion", value: "+27%", icon: "📈" },
  };
  const d = map[slug] ?? map.seo;
  return (
    <div className={chipClass()}>
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-base">
          {d.icon}
        </span>
        <div>
          <div className="font-display text-base font-bold leading-none">
            {d.value}
          </div>
          <div className="text-[10px] text-ink-700/60">{d.label}</div>
        </div>
      </div>
    </div>
  );
}

function FloatCardB({ slug }: { slug: string }) {
  const map: Record<string, { label: string; value: string }> = {
    seo: { label: "Organic traffic", value: "+340%" },
    "social-media": { label: "Total reach", value: "9.4M" },
    "paid-ads": { label: "Return on spend", value: "6.1x" },
    branding: { label: "Launch sold out", value: "72h" },
    "web-design": { label: "Bounce rate", value: "-41%" },
    analytics: { label: "Email revenue", value: "5.3x" },
  };
  const d = map[slug] ?? map.seo;
  return (
    <div className={chipClass()}>
      <div className="text-yellow-400">★★★★★</div>
      <div className="mt-1 font-display text-base font-bold leading-none text-brand-600">
        {d.value}
      </div>
      <div className="text-[10px] text-ink-700/60">{d.label}</div>
    </div>
  );
}
