"use client";

import { useState, type ReactNode } from "react";

type Props = {
  /** Path under /public, e.g. "/images/hero-person.png". */
  src?: string;
  alt: string;
  /** Classes applied to the <img> and the fallback box (control size here). */
  className?: string;
  /** If set, the fallback is this gradient (e.g. "from-amber-500 to-rose-500"). */
  fallbackGradient?: string;
  /** Custom fallback node (e.g. initials avatar) shown when no image. */
  fallback?: ReactNode;
  /** Text shown on the default placeholder telling you which file to drop in. */
  label?: string;
  /** Emoji/icon shown on the default placeholder. */
  icon?: string;
};

/**
 * Renders an image if the file exists; otherwise shows a styled placeholder.
 * This lets you drop real images into /public/images later with the documented
 * filenames — they appear automatically with no code changes.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  fallbackGradient,
  fallback,
  label,
  icon = "🖼️",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={src}
        alt={alt}
        onError={() => setFailed(true)}
        className={`object-cover ${className}`}
      />
    );
  }

  if (fallback) return <>{fallback}</>;

  if (fallbackGradient) {
    return (
      <div className={`bg-gradient-to-br ${fallbackGradient} ${className}`} />
    );
  }

  return (
    <div
      className={`grid place-items-center bg-gradient-to-br from-brand-200 via-haze-200 to-accent-200 ${className}`}
    >
      <div className="px-3 text-center text-brand-700/70">
        <div className="text-3xl">{icon}</div>
        {label && (
          <div className="mt-1.5 text-[11px] font-semibold leading-tight">
            {label}
          </div>
        )}
      </div>
    </div>
  );
}
