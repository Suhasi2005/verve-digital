"use client";

import { useState } from "react";

/** Footer email signup with a success state. Wire to a real provider later. */
export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
        🎉 You&apos;re subscribed! Watch your inbox for our next insights.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-2 sm:flex-row"
    >
      <input
        type="email"
        required
        placeholder="Your email"
        className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-400"
      />
      <button
        type="submit"
        className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-500"
      >
        Subscribe
      </button>
    </form>
  );
}
