import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import SplitText from "@/components/SplitText";
import Counter from "@/components/Counter";
import Magnetic from "@/components/Magnetic";
import GlassOrb, { GlassRing } from "@/components/GlassOrb";
import AboutValues from "@/components/AboutValues";
import Timeline from "@/components/Timeline";
import { company, team, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: `About — ${company.name}`,
  description: `Learn about ${company.name}, our values, our journey, and the team behind the work.`,
};

export default function AboutPage() {
  return (
    <>
      {/* ------------------------------- Hero ------------------------------- */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 top-4 h-80 w-80 animate-blob rounded-full bg-brand-300/25 blur-[120px]" />
          <div className="absolute right-[10%] top-24 h-72 w-72 animate-blob rounded-full bg-accent-300/20 blur-[120px] [animation-delay:3s]" />
        </div>
        <GlassOrb className="absolute -right-10 top-20 hidden h-40 w-40 animate-float md:block" />
        <GlassRing className="absolute left-[7%] top-[58%] hidden h-24 w-24 animate-float [animation-delay:0.7s] lg:block" />

        <div className="container-x relative py-24 text-center md:py-32">
          <Reveal>
            <span className="eyebrow mx-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              About us
            </span>
          </Reveal>
          <h1 className="mx-auto mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <SplitText text="A team obsessed" className="block text-ink-900" delay={0.15} />
            <span className="block text-shimmer">with your growth.</span>
          </h1>
          <Reveal delay={0.5}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-700/70">
              {company.name} was founded on a simple idea: marketing should be
              measurable, honest, and built around real business results — not
              vanity metrics.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Story ------------------------------ */}
      <section className="py-14 md:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-40}>
            <span className="eyebrow">Our story</span>
            <AnimatedHeading
              as="h2"
              text="Big-agency thinking, without the bloat"
              className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-ink-700/70">
              <p>
                We started {company.name} because we were tired of watching great
                brands waste budget on marketing that looked good in slides but
                didn&apos;t move the business.
              </p>
              <p>
                Today we&apos;re a tight-knit team of strategists, creatives, and
                data nerds who treat every client&apos;s budget like our own — small
                teams, clear communication, and a relentless focus on results.
              </p>
            </div>
            <Magnetic className="mt-8">
              <Link href="/contact" className="btn-primary">
                Work with us →
              </Link>
            </Magnetic>
          </Reveal>

          {/* Editorial pull-quote panel */}
          <Reveal x={40} delay={0.1}>
            <div className="relative">
              <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-300/30 to-accent-300/20 blur-3xl" />
              <div className="glass relative rounded-[2rem] p-9">
                <div className="font-display text-5xl leading-none text-brand-400">
                  &ldquo;
                </div>
                <blockquote className="-mt-3 font-display text-xl font-semibold leading-snug tracking-tight text-ink-900">
                  Likes are nice. Revenue is better. We measure everything that
                  matters and ignore everything that doesn&apos;t.
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-brand-100 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-400 text-sm font-bold text-white">
                    {team[0].initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{team[0].name}</div>
                    <div className="text-xs text-ink-700/50">{team[0].role}</div>
                  </div>
                </div>
              </div>
              <GlassOrb className="absolute -right-5 -top-5 h-20 w-20 animate-float" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ Stats ------------------------------ */}
      <section className="border-y border-brand-100 bg-haze-50 py-16 md:py-20">
        <div className="container-x grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glow-border relative h-full rounded-3xl border border-brand-100 bg-white p-7 text-center shadow-[0_18px_50px_-34px_rgba(13,143,214,0.45)]">
                <div className="font-display text-4xl font-bold text-brand-600 md:text-5xl">
                  <Counter value={s.value} />
                </div>
                <div className="mt-2 text-sm text-ink-700/60">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------ Values ------------------------------ */}
      <section className="py-14 md:py-20">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">What we believe</span>
            <AnimatedHeading
              as="h2"
              text="The values behind the work"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
            <p className="mt-4 text-ink-700/70">
              Hover a value to read what it means in practice.
            </p>
          </Reveal>
          <AboutValues />
        </div>
      </section>

      {/* ------------------------------ Journey ------------------------------ */}
      <section className="border-y border-brand-100 bg-haze-50 py-14 md:py-20">
        <div className="container-x">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow">Our journey</span>
            <AnimatedHeading
              as="h2"
              text="From one client to category leaders"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
          </Reveal>
          <Timeline />
        </div>
      </section>

      {/* ------------------------------- Team ------------------------------- */}
      <section className="py-14 md:py-20">
        <div className="container-x">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">The people</span>
            <AnimatedHeading
              as="h2"
              text="Meet the team"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="group glow-border relative h-full overflow-hidden rounded-3xl border border-brand-100 bg-white p-7 text-center shadow-[0_18px_50px_-34px_rgba(13,143,214,0.45)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-38px_rgba(13,143,214,0.55)]">
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-400 transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-400 font-display text-2xl font-bold text-white shadow-lg shadow-brand-500/30 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    {member.initials}
                  </div>
                  <h3 className="mt-5 font-display font-semibold">{member.name}</h3>
                  <p className="text-sm text-ink-700/50">{member.role}</p>
                  <div className="mt-4 flex justify-center gap-2 opacity-0 transition group-hover:opacity-100">
                    {["in", "X", "✉"].map((s) => (
                      <span
                        key={s}
                        className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-xs font-semibold text-brand-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------- */}
      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <Reveal>
          <div className="relative mx-auto overflow-hidden rounded-[2.5rem] bg-ink-900 p-10 text-center md:p-20">
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/40 blur-[100px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-600/30 blur-[100px]" />
            <div className="absolute inset-0 bg-grid-faint opacity-20" />
            <h2 className="relative font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
              Let&apos;s build something great
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-white/70">
              Whether you&apos;re scaling a startup or reinventing an established
              brand, we&apos;d love to hear what you&apos;re working on.
            </p>
            <Magnetic className="relative mt-9">
              <Link href="/contact" className="btn-light">
                Start a conversation →
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}
