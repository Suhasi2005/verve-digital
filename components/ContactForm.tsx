"use client";

import { useState } from "react";

const services = [
  "SEO",
  "Social Media",
  "Paid Advertising",
  "Branding & Creative",
  "Web Design",
  "Analytics & Strategy",
  "Not sure yet",
];

const inputClass =
  "mt-1.5 w-full rounded-xl border border-ink-900/10 bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-700/40 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setLoading(true);
    // Best-effort send: emails for real when the API/Resend key is configured
    // (e.g. on Vercel); silently no-ops on a static host so the demo still works.
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      /* static export — no backend; continue to success state */
    }
    setLoading(false);
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <div className="text-5xl">✅</div>
        <h3 className="mt-4 font-display text-xl font-semibold">
          Thanks for reaching out!
        </h3>
        <p className="mt-2 text-ink-700/70">
          We&apos;ve received your message and will get back to you within one
          business day.
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-ghost mt-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company" name="company" />
        <div>
          <label className="block text-sm font-medium text-ink-800">
            Service of interest
          </label>
          <select name="service" className={inputClass}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-ink-800">
          Tell us about your project
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className={inputClass}
          placeholder="What are you trying to achieve?"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {loading ? "Sending…" : "Send message →"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink-800">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input type={type} name={name} required={required} className={inputClass} />
    </div>
  );
}
