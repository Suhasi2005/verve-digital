import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: `Terms of Service — ${company.name}`,
  description: `The terms governing your use of the ${company.name} website.`,
};

const sections = [
  {
    h: "Acceptance of terms",
    p: `By accessing this website you agree to these terms. If you don't agree, please don't use the site.`,
  },
  {
    h: "Use of the site",
    p: "You may use this site for lawful purposes only. You agree not to misuse it, attempt to disrupt it, or access it in ways that could damage or impair the service.",
  },
  {
    h: "Intellectual property",
    p: `All content, branding, and design on this site are the property of ${company.name} unless otherwise stated, and may not be reused without permission.`,
  },
  {
    h: "Disclaimers",
    p: "The site and its content are provided “as is.” Results referenced are illustrative and do not guarantee specific outcomes for any engagement.",
  },
  {
    h: "Limitation of liability",
    p: `To the fullest extent permitted by law, ${company.name} is not liable for any indirect or consequential damages arising from your use of the site.`,
  },
  {
    h: "Changes & contact",
    p: `We may update these terms from time to time. Questions? Email us at ${company.email}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-mesh">
        <div className="absolute inset-0 bg-grid-faint opacity-50" />
        <div className="container-x relative py-14 md:py-20">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl text-ink-700/70">
            Last updated: June 2026. This is a general template — have it reviewed
            for your jurisdiction before going live.
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
