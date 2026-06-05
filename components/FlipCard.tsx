"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  icon: string;
  title: string;
  /** Shown on the back when you hover/flip. */
  description: string;
  index: number;
  href: string;
};

const fronts = [
  "from-brand-50 to-white",
  "from-accent-50 to-white",
  "from-sky-50 to-white",
  "from-brand-50 to-white",
  "from-accent-50 to-white",
  "from-sky-50 to-white",
];

/**
 * A 3D flip card: front shows the service icon + name. It flips on hover
 * (desktop) and on tap (mobile — no hover available), revealing what the
 * service does + a link.
 */
export default function FlipCard({ icon, title, description, index, href }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group h-72 [perspective:1400px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-[700ms] [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 flex flex-col justify-between rounded-3xl border border-white/70 bg-gradient-to-br ${fronts[index % fronts.length]} p-7 shadow-[0_20px_50px_-24px_rgba(244,98,58,0.35)] [backface-visibility:hidden]`}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-sm font-bold text-ink-900/40">
              0{index + 1}
            </span>
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-3xl shadow-sm">
              {icon}
            </span>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm font-medium text-brand-700">
              Tap or hover to learn more →
            </p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600 to-ink-900 p-7 text-white shadow-[0_30px_60px_-24px_rgba(244,98,58,0.6)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div>
            <div className="text-2xl">{icon}</div>
            <h3 className="mt-2 font-display text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {description}
            </p>
          </div>
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-300 transition hover:gap-2"
          >
            View service <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
