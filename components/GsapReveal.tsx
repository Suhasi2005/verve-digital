"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * GSAP ScrollTrigger scrub reveal: the element's entrance is tied directly to
 * scroll position (cinematic, scrubbed) rather than a one-shot trigger.
 * Safe-by-default — if reduced motion is on, it renders normally.
 */
export default function GsapReveal({
  children,
  className,
  y = 70,
  scale = 0.96,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  scale?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        scale,
        autoAlpha: 0,
        filter: "blur(10px)",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "top 50%",
          scrub: 0.6,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [y, scale]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
