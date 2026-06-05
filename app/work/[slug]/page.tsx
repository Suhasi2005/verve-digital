import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import SmartImage from "@/components/SmartImage";
import { projects, company } from "@/lib/content";

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

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.45),transparent_50%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-haze-50 to-transparent" />
        <div className="container-x relative py-24 md:py-28">
          <Link
            href="/work"
            className="text-sm font-medium text-white/90 transition hover:text-white"
          >
            ← Back to all work
          </Link>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
            {project.client} · {project.category}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container-x grid grid-cols-1 gap-6 sm:grid-cols-3">
          {project.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.08}>
              <div className="glass p-8 text-center">
                <div className="font-display text-5xl font-bold text-brand-700">
                  <Counter value={r.value} />
                </div>
                <div className="mt-2 text-sm text-ink-700/60">{r.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="pb-20">
        <div className="container-x grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold">The challenge</h2>
            <p className="mt-4 leading-relaxed text-ink-700/70">
              {project.challenge}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-2xl font-bold">What we did</h2>
            <p className="mt-4 leading-relaxed text-ink-700/70">
              {project.solution}
            </p>
          </Reveal>
        </div>

        <div className="container-x mt-12 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* More work */}
      <section className="border-y border-brand-100 bg-white/50 py-20">
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
      <section className="py-20">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Want results like these?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-700/70">
              Let&apos;s talk about how we can help you hit your goals.
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
