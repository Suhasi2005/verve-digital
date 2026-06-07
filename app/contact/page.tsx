import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import GlassOrb from "@/components/GlassOrb";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact — ${company.name}`,
  description: `Get in touch with ${company.name} to start your project.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mesh">
        <div className="absolute inset-0 bg-grid-faint opacity-50" />
        <GlassOrb
          variant="pink"
          className="absolute -right-8 top-12 hidden h-36 w-36 animate-float md:block"
        />
        <div className="container-x relative py-14 md:py-20">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient">Let&apos;s talk about</span>{" "}
              <span className="text-gradient-brand">your growth.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-ink-700/70">
              Tell us a bit about your goals and we&apos;ll get back to you
              within one business day with next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x grid gap-12 md:grid-cols-3">
          <Reveal className="md:col-span-1">
            <h2 className="font-display text-xl font-semibold">Get in touch</h2>
            <p className="mt-2 text-ink-700/70">
              Prefer email or a call? Reach us directly.
            </p>
            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="font-semibold text-ink-900">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-brand-700 hover:underline"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-900">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${company.phone}`}
                    className="text-brand-700 hover:underline"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-900">Office</dt>
                <dd className="mt-1 text-ink-700/70">{company.address}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <div className="glass p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Live map */}
      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-brand-100 shadow-[0_30px_70px_-40px_rgba(13,143,214,0.5)]">
              <iframe
                title={`Map showing ${company.name} office`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  company.address
                )}&z=14&output=embed`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[0.2]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
