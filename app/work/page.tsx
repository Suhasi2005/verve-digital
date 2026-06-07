import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import RotatingWord from "@/components/RotatingWord";
import Counter from "@/components/Counter";
import Magnetic from "@/components/Magnetic";
import GlassOrb, { GlassRing } from "@/components/GlassOrb";
import SmartImage from "@/components/SmartImage";
import WorkShowcase from "@/components/WorkShowcase";
import { projects, stats, industries, company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Our Work — ${company.name}`,
  description: "Case studies and measurable results from our client campaigns.",
};

export default function WorkPage() {
  return (
    <>
      {/* ------------------------------- Hero ------------------------------- */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-4 h-80 w-80 animate-blob rounded-full bg-brand-300/25 blur-[120px]" />
          <div className="absolute right-[10%] top-24 h-72 w-72 animate-blob rounded-full bg-accent-300/20 blur-[120px] [animation-delay:3s]" />
        </div>
        <GlassOrb className="absolute -right-10 top-20 hidden h-40 w-40 animate-float md:block" />
        <GlassRing className="absolute left-[6%] top-[58%] hidden h-24 w-24 animate-float [animation-delay:0.6s] lg:block" />

        <div className="container-x relative py-24 text-center md:py-32">
          <Reveal>
            <span className="eyebrow mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Our work
            </span>
          </Reveal>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <AnimatedHeading as="span" text="Campaigns that drive real" />{" "}
            <RotatingWord
              words={["results.", "revenue.", "growth.", "ROI."]}
            />
          </h1>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-700/70">
              Every project started with a goal and ended with measurable growth.
              Here&apos;s a look at how we did it — and the numbers to prove it.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Link href="/contact" className="btn-primary">
                  Start your project <span aria-hidden>→</span>
                </Link>
              </Magnetic>
              <Link href="/services" className="btn-ghost">
                Explore services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- Work showcase --------------------------- */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-6%] top-24 h-72 w-72 rounded-full bg-brand-200/25 blur-[120px]" />
          <div className="absolute bottom-10 right-[-4%] h-72 w-72 rounded-full bg-accent-200/25 blur-[120px]" />
        </div>
        <div className="container-x relative">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">Featured case studies</span>
            <AnimatedHeading
              as="h2"
              text="Results we're proud of"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
            <p className="mt-4 text-ink-700/70">
              Hover a client to preview the campaign, the story, and the numbers.
            </p>
          </Reveal>
          <WorkShowcase />
        </div>
      </section>

      {/* ----------------------------- All projects ----------------------------- */}
      <section className="border-y border-brand-100 bg-haze-50 py-14 md:py-20">
        <div className="container-x">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">All work</span>
            <AnimatedHeading
              as="h2"
              text="Every project, every result"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <Link
                  href={`/work/${p.slug}`}
                  className="group glow-border relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-[0_18px_50px_-34px_rgba(13,143,214,0.5)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-38px_rgba(13,143,214,0.55)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <SmartImage
                      src={p.image}
                      alt={p.title}
                      fallbackGradient={p.gradient}
                      className="h-full w-full transition duration-500 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink-700/40">
                      {p.client}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold leading-snug tracking-tight transition group-hover:text-brand-700">
                      {p.title}
                    </h3>
                    <div className="mt-auto grid grid-cols-3 gap-3 border-t border-brand-50 pt-5">
                      {p.results.map((r) => (
                        <div key={r.label}>
                          <div className="font-display text-lg font-bold text-brand-600">
                            <Counter value={r.value} />
                          </div>
                          <div className="text-[11px] text-ink-700/50">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------- Industries --------------------------- */}
      <section className="py-14 md:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Industries</span>
            <AnimatedHeading
              as="h2"
              text="Growth, across every industry"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
            <p className="mt-4 max-w-md text-ink-700/70">
              Our process adapts to any market because it&apos;s built on research,
              testing, and data — not a one-size-fits-all playbook.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {industries.map((name, i) => (
                <span
                  key={name}
                  className="group glow-border relative cursor-default rounded-2xl border border-brand-100 bg-white px-5 py-3 font-display text-lg font-semibold text-ink-900/70 shadow-[0_12px_30px_-22px_rgba(13,143,214,0.5)] transition-all duration-300 hover:-translate-y-1 hover:text-ink-900"
                >
                  <span className="mr-2 font-bold text-brand-600/40 transition-colors group-hover:text-brand-600">
                    0{i + 1}
                  </span>
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- Stats ------------------------------- */}
      <section className="border-y border-brand-100 bg-haze-50 py-14 md:py-20">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glow-border relative h-full rounded-3xl border border-brand-100 bg-white p-8 text-center shadow-[0_18px_50px_-34px_rgba(13,143,214,0.45)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-38px_rgba(13,143,214,0.55)]">
                  <div className="font-display text-4xl font-bold text-brand-600 md:text-5xl">
                    <Counter value={s.value} />
                  </div>
                  <div className="mt-2 text-sm text-ink-700/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <Reveal>
          <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 overflow-hidden rounded-[2.5rem] bg-ink-900 p-8 md:grid-cols-2 md:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/40 blur-[100px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-600/30 blur-[100px]" />
            <div className="relative">
              <AnimatedHeading
                as="h2"
                text="Your project could be next."
                className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
              />
              <p className="mt-5 max-w-md text-white/70">
                Let&apos;s build a case study together. Tell us your goals and
                we&apos;ll map the path to measurable growth.
              </p>
            </div>
            <div className="relative flex md:justify-end">
              <Magnetic>
                <Link href="/contact" className="btn-light">
                  Start your project →
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
