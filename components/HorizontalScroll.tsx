"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Panel = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  big?: string;
  tags?: string[];
  cta?: boolean;
};

const panels: Panel[] = [
  {
    index: "01",
    eyebrow: "Our philosophy",
    title: "Marketing that moves the needle.",
    body: "We chase revenue and retention — not likes, not impressions, not vanity metrics.",
  },
  {
    index: "02",
    eyebrow: "The proof",
    title: "Return, not just reach.",
    body: "Across 250+ campaigns, our clients see an average return on ad spend of",
    big: "4.2x",
  },
  {
    index: "03",
    eyebrow: "The team",
    title: "Six disciplines. One obsessive team.",
    body: "Strategy, SEO, paid, social, branding and analytics — woven into a single growth engine.",
    tags: ["SEO", "Paid", "Social", "Branding", "Web", "Analytics"],
  },
  {
    index: "04",
    eyebrow: "Let's go",
    title: "Your growth, engineered.",
    body: "Tell us where you want to be. We'll build the system that gets you there.",
    cta: true,
  },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      // Pinned horizontal scroll on desktop only.
      mm.add("(min-width: 1024px)", () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;
        const distance = () => track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (progressRef.current) {
                progressRef.current.style.transform = `scaleX(${self.progress})`;
              }
            },
          },
        });
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink-900 text-white"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent-600/25 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-10" />

      <div
        ref={trackRef}
        className="flex flex-col lg:h-screen lg:flex-row lg:flex-nowrap"
      >
        {panels.map((p) => (
          <article
            key={p.index}
            className="hpanel relative flex min-h-[80vh] w-full flex-shrink-0 items-center px-6 py-20 lg:h-full lg:min-h-0 lg:w-screen lg:px-24"
          >
            {/* giant index watermark */}
            <span className="pointer-events-none absolute right-6 top-10 select-none font-display text-[9rem] font-bold leading-none text-white/5 md:text-[16rem] lg:right-24">
              {p.index}
            </span>

            <div className="relative max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                {p.eyebrow}
              </span>

              <h3 className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                {p.title}
              </h3>

              <p className="mt-6 max-w-xl text-lg text-white/60">{p.body}</p>

              {p.big && (
                <div className="mt-4 bg-gradient-to-r from-brand-400 to-accent-300 bg-clip-text font-display text-7xl font-bold text-transparent lg:text-8xl">
                  {p.big}
                </div>
              )}

              {p.tags && (
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {p.cta && (
                <Link href="/contact" className="btn-light mt-9">
                  Start a project →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* desktop progress bar */}
      <div className="absolute bottom-10 left-24 right-24 hidden lg:block">
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Scroll
          </span>
          <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              ref={progressRef}
              className="h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-400 to-accent-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
