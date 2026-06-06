"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { company } from "@/lib/content";
import GlassOrb, { GlassRing } from "@/components/GlassOrb";
import HeroCarousel from "@/components/HeroCarousel";
import Magnetic from "@/components/Magnetic";
import SplitText from "@/components/SplitText";

const ease = [0.22, 1, 0.36, 1] as const;

const chip = (delay: number) => ({
  initial: { opacity: 0, y: 16, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.6, delay, ease },
});

export default function Hero() {
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, -70]);

  return (
    <section className="relative overflow-hidden">
      <div className="container-x relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Best digital marketing agency
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <SplitText
              text="We build digital"
              className="block text-ink-900"
              delay={0.15}
              stagger={0.03}
            />
            <motion.span
              className="block text-shimmer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
            >
              growth strategies.
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-lg text-ink-700/70"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            Driving growth, engagement, and conversions with expert digital
            tactics — {company.name} turns ambitious brands into category
            leaders.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
          >
            <Magnetic>
              <Link href="/contact" className="btn-primary">
                Start a project <span aria-hidden>→</span>
              </Link>
            </Magnetic>
            <Link href="/about" className="btn-ghost">
              Learn more
            </Link>
          </motion.div>

          {/* Social proof row — staggers in left → right */}
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.09, delayChildren: 0.45 }}
          >
            <div className="flex -space-x-3">
              {[
                { i: "SC", c: "from-brand-500 to-accent-500" },
                { i: "MR", c: "from-accent-400 to-brand-600" },
                { i: "AO", c: "from-brand-600 to-accent-500" },
                { i: "JB", c: "from-accent-500 to-brand-700" },
              ].map((a) => (
                <motion.span
                  key={a.i}
                  variants={{
                    hidden: { opacity: 0, x: -18, scale: 0.6 },
                    show: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: { type: "spring", stiffness: 320, damping: 20 },
                    },
                  }}
                  className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-gradient-to-br ${a.c} text-xs font-bold text-white`}
                >
                  {a.i}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="text-sm"
              variants={{
                hidden: { opacity: 0, x: -14 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease },
                },
              }}
            >
              <div className="font-semibold text-ink-900">2,000+ brands</div>
              <div className="text-ink-700/60">trust us to grow</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: person + floating UI chips */}
        <motion.div
          className="relative mx-auto w-full max-w-md"
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <div className="absolute inset-0 -z-10 m-auto h-72 w-72 rounded-full bg-brand-400/30 blur-3xl" />

          {/* Carousel: woman pointing to each platform */}
          <HeroCarousel />

          <GlassOrb className="absolute -left-6 -top-6 h-20 w-20 animate-float" />
          <GlassRing className="absolute -bottom-4 right-10 h-16 w-16 animate-float [animation-delay:0.8s]" />

          {/* Metric chip — top right */}
          <motion.div
            {...chip(0.7)}
            className="glass absolute -right-4 top-10 z-10 rounded-2xl px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-600">
                ↗
              </span>
              <div>
                <div className="font-display text-lg font-bold leading-none">
                  +340%
                </div>
                <div className="text-[11px] text-ink-700/60">Organic traffic</div>
              </div>
            </div>
          </motion.div>

          {/* Review chip — bottom left */}
          <motion.div
            {...chip(0.9)}
            className="glass absolute -left-4 bottom-20 z-10 rounded-2xl px-4 py-3"
          >
            <div className="text-yellow-400">★★★★★</div>
            <div className="mt-0.5 text-[11px] font-medium text-ink-700/70">
              250+ projects delivered
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
