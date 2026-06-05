import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import type { Post } from "@/lib/content";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-30px_rgba(244,98,58,0.5)]"
    >
      <div className="relative h-48 overflow-hidden">
        <SmartImage
          src={post.image}
          alt={post.title}
          fallbackGradient={post.gradient}
          className="h-full w-full transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-700 backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="text-xs font-medium uppercase tracking-wide text-ink-700/40">
          {post.date}
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug transition group-hover:text-brand-700">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-ink-700/70">{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition group-hover:gap-2">
          Read more <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
