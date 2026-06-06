"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animated number that counts up from 0 to the target when it enters view.
 * Parses any leading number out of strings like "250+", "4.2x", "100%"
 * and re-applies the surrounding prefix/suffix.
 */
export default function Counter({
  value,
  duration = 1600,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "-40px" });

  // Parse once per `value` so identity is stable across renders.
  const parsed = useMemo(() => {
    const m = value.match(/([^\d.-]*)(-?[\d.]+)(.*)/);
    if (!m) return null;
    return {
      prefix: m[1] ?? "",
      target: parseFloat(m[2]),
      suffix: m[3] ?? "",
      decimals: m[2].includes(".") ? 1 : 0,
    };
  }, [value]);

  const [display, setDisplay] = useState(
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value
  );

  useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return;
    }

    // Animate when scrolled into view OR already visible on mount. Re-runs
    // whenever `value` changes (e.g. switching projects in the Work showcase).
    const el = ref.current;
    const visibleNow =
      !!el &&
      (() => {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      })();

    if (!inView && !visibleNow) {
      // Not in view yet — show the start value so it counts up later.
      setDisplay(`${parsed.prefix}0${parsed.suffix}`);
      return;
    }

    const { prefix, target, suffix, decimals } = parsed;
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed, value, duration]);

  return <span ref={ref}>{display}</span>;
}
