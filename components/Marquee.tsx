import { clients } from "@/lib/content";

/** Infinite horizontal scroll of client names. */
export default function Marquee() {
  const row = [...clients, ...clients];
  return (
    <div className="mask-fade-x overflow-hidden">
      <div className="flex w-max animate-marquee gap-12 pr-12">
        {row.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-2xl font-semibold text-ink-900/25 transition hover:text-brand-600"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
