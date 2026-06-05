"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/content";

/** Sticky pill nav that highlights the service section currently in view. */
export default function ServiceNav() {
  const [active, setActive] = useState(services[0].slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] }
    );
    services.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-30 hidden justify-center py-4 lg:flex">
      <div className="flex items-center gap-1 rounded-full border border-brand-100 bg-white/80 p-1.5 shadow-[0_16px_40px_-24px_rgba(13,143,214,0.5)] backdrop-blur-xl">
        {services.map((s) => {
          const isActive = active === s.slug;
          return (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
            >
              {isActive && (
                <motion.span
                  layoutId="service-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-brand-600"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={isActive ? "text-white" : "text-ink-700/70 hover:text-ink-900"}>
                {s.title.split(" ")[0]}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
