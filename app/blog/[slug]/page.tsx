import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import SmartImage from "@/components/SmartImage";
import { posts, company } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} — ${company.name}` : `Blog — ${company.name}`,
    description: post?.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero image */}
      <section className="relative overflow-hidden">
        <div className="container-x py-12 md:py-16">
          <Link
            href="/blog"
            className="text-sm font-medium text-brand-700 hover:underline"
          >
            ← Back to blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-700/60">
            <span className="rounded-full border border-brand-200 bg-white/70 px-3 py-1 font-semibold text-brand-700">
              {post.category}
            </span>
            <span>{post.date}</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <div className="relative mt-10 aspect-[16/7] overflow-hidden rounded-[2rem] border border-white/60">
            <SmartImage
              src={post.image}
              alt={post.title}
              fallbackGradient={post.gradient}
              className="h-full w-full"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20">
        <div className="container-x max-w-3xl">
          <article className="space-y-5 text-lg leading-relaxed text-ink-700/80">
            {post.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p>{para}</p>
              </Reveal>
            ))}
          </article>

          <div className="mt-12 rounded-3xl bg-ink-900 p-8 text-center text-white">
            <h2 className="font-display text-2xl font-bold">
              Want results like our clients?
            </h2>
            <Link href="/contact" className="btn-light mt-6">
              Start a project →
            </Link>
          </div>
        </div>
      </section>

      {/* More posts */}
      <section className="pb-24">
        <div className="container-x">
          <h2 className="mb-8 font-display text-2xl font-bold">More reading</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {more.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
