import Link from "next/link";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import GsapReveal from "@/components/GsapReveal";
import AnimatedHeading from "@/components/AnimatedHeading";
import ServicesShowcase from "@/components/ServicesShowcase";
import StatsSection from "@/components/StatsSection";
import BusinessPipeline from "@/components/BusinessPipeline";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BlogCard from "@/components/BlogCard";
import Magnetic from "@/components/Magnetic";
import SmartImage from "@/components/SmartImage";
import { posts } from "@/lib/content";

export default function Home() {
  const latest = posts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Services — interactive split-screen showcase (2nd section) */}
      <ServicesShowcase />

      <Reveal className="container-x -mt-6 mb-2 text-center">
        <Magnetic>
          <Link href="/services" className="btn-primary">
            Check Our Services →
          </Link>
        </Magnetic>
      </Reveal>

      {/* Client marquee */}
      <section className="py-8">
        <div className="container-x">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-ink-700/50">
            Trusted by ambitious brands
          </p>
        </div>
        <Marquee />
      </section>

      {/* Statistics */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">By the numbers</span>
            <AnimatedHeading
              as="h2"
              text="Results that speak for themselves"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
          </Reveal>
          <StatsSection />
        </div>
      </section>

      {/* Company Business Plans — ascending roadmap */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Company Business Plans</span>
            <AnimatedHeading
              as="h2"
              text="From strategy to scalable digital growth."
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
            <p className="mt-4 text-ink-700/70">
              Crafting modern digital systems that transform businesses into
              growing brands.
            </p>
          </Reveal>
          <div className="mt-16">
            <BusinessPipeline />
          </div>
        </div>
      </section>

      {/* Testimonials carousel */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">Testimonials</span>
            <AnimatedHeading
              as="h2"
              text="What People Think About Us"
              className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
            />
          </Reveal>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Latest blogs & news */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Blog</span>
              <AnimatedHeading
                as="h2"
                text="Latest Blogs And News"
                className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl"
              />
            </Reveal>
            <Reveal>
              <Link href="/blog" className="btn-ghost">
                View all posts →
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {latest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — Join Us (GSAP scrub reveal) */}
      <section className="px-4 pb-16 md:px-6 md:pb-24">
        <GsapReveal>
          <div className="relative mx-auto grid max-w-[1200px] items-center gap-8 overflow-hidden rounded-[2.5rem] bg-ink-900 p-8 md:grid-cols-2 md:p-14">
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-600/40 blur-[100px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-accent-600/30 blur-[100px]" />
            <div className="absolute inset-0 bg-grid-faint opacity-20" />
            <div className="relative">
              <AnimatedHeading
                as="h2"
                text="Join Us And Achieve Your Business Goals"
                className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
              />
              <p className="mt-5 max-w-md text-white/70">
                Together, we&apos;ll transform your vision into reality and take
                your business to new heights.
              </p>
              <Magnetic className="mt-9">
                <Link href="/contact" className="btn-light">
                  Get started →
                </Link>
              </Magnetic>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-white/5">
              <SmartImage
                src="/images/feature-team.webp"
                alt="Our team collaborating"
                icon="👥"
                label="Add /public/images/feature-team.webp"
                className="h-full w-full"
              />
            </div>
          </div>
        </GsapReveal>
      </section>
    </>
  );
}
