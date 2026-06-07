import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import RotatingWord from "@/components/RotatingWord";
import Counter from "@/components/Counter";
import Magnetic from "@/components/Magnetic";
import ServiceFlipCard from "@/components/ServiceFlipCard";
import GlassOrb from "@/components/GlassOrb";
import Marquee from "@/components/Marquee";
import { services, processSteps, stats, company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Services — ${company.name}`,
  description:
    "Full-service digital marketing: SEO, paid ads, social, branding, web design, and analytics — engineered for measurable growth.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ------------------------------- Hero ------------------------------- */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-4 h-80 w-80 animate-blob rounded-full bg-brand-300/25 blur-[120px]" />
          <div className="absolute right-[10%] top-24 h-72 w-72 animate-blob rounded-full bg-accent-300/20 blur-[120px] [animation-delay:3s]" />
        </div>
        <GlassOrb className="absolute -right-10 top-20 hidden h-40 w-40 animate-float md:block" />

        <div className="container-x relative py-24 text-center md:py-32">
          <Reveal>
            <span className="eyebrow mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              What we do
            </span>
          </Reveal>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <AnimatedHeading as="span" text="Services that drive real" />{" "}
            <RotatingWord />
          </h1>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-700/70">
              Pick the services you need today, or let us build an integrated
              strategy across all of them — every engagement engineered around one
              thing: measurable results.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Link href="/contact" className="btn-primary">
                  Get a free proposal <span aria-hidden>→</span>
                </Link>
              </Magnetic>
              <Link href="/work" className="btn-ghost">
                See the results
              </Link>
            </div>
          </Reveal>
        </div>

        {/* trust strip */}
        <div className="relative border-t border-brand-100 bg-white/50 py-8">
          <p className="container-x mb-6 text-center text-xs uppercase tracking-[0.25em] text-ink-700/50">
            Trusted by ambitious brands
          </p>
          <Marquee />
        </div>
      </section>

      {/* ---------------------------- Services grid ---------------------------- */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-6%] top-24 h-72 w-72 rounded-full bg-brand-200/25 blur-[120px]" />
          <div className="absolute bottom-10 right-[-4%] h-72 w-72 rounded-full bg-accent-200/25 blur-[120px]" />
        </div>
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our services</span>
            <AnimatedHeading
              as="h2"
              text="Everything you need to grow"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
            <p className="mt-4 text-ink-700/70">
              Six core services, one integrated team. Each is built to plug into
              your goals and compound results over time.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <ServiceFlipCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-700/50">
            Hover a card to flip it — or tap on mobile.
          </p>
        </div>
      </section>

      {/* ------------------------------ Process ------------------------------ */}
      <section className="border-y border-brand-100 bg-haze-50 py-14 md:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Sticky heading */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <span className="eyebrow">Our process</span>
            <AnimatedHeading
              as="h2"
              text="How an engagement works"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
            <p className="mt-4 max-w-md text-ink-700/70">
              A proven, transparent process that turns your goals into compounding
              results — no black boxes, no surprises.
            </p>
            <Magnetic className="mt-8">
              <Link href="/contact" className="btn-primary">
                Start your project →
              </Link>
            </Magnetic>
          </Reveal>

          {/* Vertical numbered timeline */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute bottom-4 left-6 top-4 w-px bg-brand-200"
            />
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.08}>
                  <div className="group relative flex gap-5">
                    <span className="relative z-10 grid h-12 w-12 flex-shrink-0 place-items-center rounded-full border border-brand-200 bg-white font-display font-bold text-brand-600 shadow-sm transition-colors duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-accent-400 group-hover:text-white">
                      {step.step}
                    </span>
                    <div className="flex-1 rounded-2xl border border-transparent px-1 pt-1.5 transition-colors duration-300 group-hover:border-brand-100 group-hover:bg-white group-hover:px-5 group-hover:py-4 group-hover:shadow-[0_18px_50px_-34px_rgba(13,143,214,0.5)]">
                      <h3 className="font-display text-lg font-bold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-ink-700/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------- Stats ------------------------------- */}
      <section className="py-14 md:py-20">
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
                text="Not sure which service you need?"
                className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
              />
              <p className="mt-5 max-w-md text-white/70">
                Book a free strategy call and we&apos;ll map the fastest path to
                your goals — no obligation.
              </p>
            </div>
            <div className="relative flex md:justify-end">
              <Magnetic>
                <Link href="/contact" className="btn-light">
                  Book a free strategy call →
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
