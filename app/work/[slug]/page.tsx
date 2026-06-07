import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SmartImage from "@/components/SmartImage";
import { projects, caseStudyDetails, company } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.client} — ${company.name}`
      : `Case study — ${company.name}`,
    description: project?.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const detail = caseStudyDetails[slug];
  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  const meta = [
    { label: "Client", value: project.client },
    { label: "Industry", value: detail?.industry ?? project.category },
    { label: "Timeline", value: detail?.duration ?? "—" },
    { label: "Services", value: project.tags.join(", ") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.45),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-haze-50 to-transparent" />
        <div className="container-x relative py-14 md:py-20">
          <Link
            href="/work"
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            ← Back to all work
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            {project.client} · {detail?.industry ?? project.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-b border-brand-100">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label}>
              <div className="text-xs font-semibold uppercase tracking-wide text-ink-700/40">
                {m.label}
              </div>
              <div className="mt-1 font-display font-semibold text-ink-900">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature image */}
      <section className="py-12 md:py-16">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_40px_90px_-44px_rgba(13,143,214,0.6)]">
              <div className="aspect-[16/9] w-full">
                <SmartImage
                  src={project.image}
                  alt={`${project.client} case study`}
                  fallbackGradient={project.gradient}
                  className="h-full w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="pb-4">
        <div className="container-x grid grid-cols-1 gap-6 sm:grid-cols-3">
          {project.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.08}>
              <div className="glass p-8 text-center">
                <div className="font-display text-4xl font-bold text-brand-700 md:text-5xl">
                  <Counter value={r.value} />
                </div>
                <div className="mt-2 text-sm text-ink-700/60">{r.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <Reveal>
            <span className="eyebrow">The challenge</span>
            <p className="mt-5 text-lg leading-relaxed text-ink-700/80">
              {project.challenge}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="eyebrow">The outcome</span>
            <p className="mt-5 text-lg leading-relaxed text-ink-700/80">
              {project.solution}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach steps */}
      {detail && (
        <section className="border-y border-brand-100 bg-white/50 py-16 md:py-24">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">How we did it</span>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Our approach
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {detail.approach.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div className="group glow-border relative h-full rounded-3xl border border-brand-100 bg-white p-7 transition hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-38px_rgba(13,143,214,0.55)]">
                    <div className="font-display text-4xl font-bold text-brand-200 transition group-hover:text-brand-400">
                      0{i + 1}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-700/70">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client quote */}
      {detail && (
        <section className="py-16 md:py-24">
          <div className="container-x">
            <Reveal>
              <figure className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] bg-ink-900 p-10 text-center md:p-16">
                <div className="pointer-events-none absolute -left-16 top-0 h-60 w-60 rounded-full bg-brand-600/40 blur-[90px]" />
                <div className="pointer-events-none absolute -right-16 bottom-0 h-60 w-60 rounded-full bg-accent-600/30 blur-[90px]" />
                <div className="relative font-display text-5xl leading-none text-brand-400">
                  &ldquo;
                </div>
                <blockquote className="relative -mt-4 font-display text-xl font-semibold leading-snug text-white md:text-2xl">
                  {detail.quote.text}
                </blockquote>
                <figcaption className="relative mt-6 text-sm text-white/70">
                  <span className="font-semibold text-white">
                    {detail.quote.author}
                  </span>{" "}
                  · {detail.quote.role}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* More work */}
      <section className="border-y border-brand-100 bg-white/50 py-16 md:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold">More work</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group block overflow-hidden rounded-3xl border border-brand-100 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-32 overflow-hidden">
                  <SmartImage
                    src={p.image}
                    alt={p.title}
                    fallbackGradient={p.gradient}
                    className="h-full w-full transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wide text-ink-700/40">
                    {p.client}
                  </p>
                  <h3 className="mt-1 font-display font-semibold transition group-hover:text-brand-700">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Want results like {project.client.split(" ")[0]}&apos;s?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-700/70">
              Tell us your goals and we&apos;ll map the fastest path to hitting
              them.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Start a conversation →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
