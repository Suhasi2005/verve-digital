import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BlogCard from "@/components/BlogCard";
import GlassOrb from "@/components/GlassOrb";
import { posts, company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Blog — ${company.name}`,
  description: "Marketing insights, trends, and strategies from our team.",
};

export default function BlogPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <GlassOrb className="absolute -right-8 top-12 hidden h-36 w-36 animate-float md:block" />
        <div className="container-x relative py-24 md:py-28">
          <Reveal>
            <span className="eyebrow">Blog & News</span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient">Insights to help you</span>{" "}
              <span className="text-gradient-brand">grow faster.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-700/70">
              Trends, playbooks, and lessons from the campaigns we run every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
