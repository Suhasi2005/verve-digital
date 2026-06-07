import Link from "next/link";
import GlassOrb from "@/components/GlassOrb";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-mesh">
      <div className="absolute inset-0 bg-grid-faint opacity-50" />
      <GlassOrb className="absolute -right-10 top-16 hidden h-40 w-40 animate-float md:block" />
      <div className="container-x relative py-24 text-center">
        <div className="font-display text-7xl font-bold text-shimmer md:text-9xl">
          404
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
          This page took a wrong turn.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-700/70">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Back to home →
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
