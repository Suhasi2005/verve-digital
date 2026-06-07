import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Privacy Policy — ${company.name}`,
  description: `How ${company.name} collects, uses, and protects your information.`,
};

const sections = [
  {
    h: "Information we collect",
    p: "When you submit our contact form or subscribe to our newsletter, we collect the details you provide — such as your name, email address, company, and message. We also collect basic, anonymous usage data (such as pages visited) to improve the site.",
  },
  {
    h: "How we use your information",
    p: "We use your information to respond to enquiries, deliver the services you request, send updates you've opted into, and improve our website. We do not sell your personal information.",
  },
  {
    h: "Cookies & analytics",
    p: "We may use privacy-friendly analytics to understand how visitors use the site. You can disable cookies in your browser settings at any time without affecting core functionality.",
  },
  {
    h: "Third-party services",
    p: "We rely on trusted third parties (for example, hosting and email delivery providers) to operate the site. These providers process data only as needed to provide their services.",
  },
  {
    h: "Your rights",
    p: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. We'll respond within a reasonable timeframe.",
  },
  {
    h: "Contact",
    p: `Questions about this policy? Email us at ${company.email}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mesh">
        <div className="absolute inset-0 bg-grid-faint opacity-50" />
        <div className="container-x relative py-20 md:py-24">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-ink-700/70">
            Last updated: June 2026. This is a general policy template — replace
            it with language reviewed for your jurisdiction before going live.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-x max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold tracking-tight">
                {s.h}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-700/75">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
