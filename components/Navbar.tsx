"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import SocialIcons from "@/components/SocialIcons";
import { company } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-100 bg-haze-50/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between py-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-display text-lg font-bold"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/30 transition group-hover:scale-105 group-hover:rotate-6">
            {company.name.charAt(0)}
          </span>
          {company.name}
        </Link>

        <div
          className="hidden items-center md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((l) => {
            const active = pathname === l.href;
            const isHot = hovered === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onMouseEnter={() => setHovered(l.href)}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                {/* Hover pill */}
                {isHot && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={
                    active ? "text-brand-700" : "text-ink-700/80 hover:text-ink-900"
                  }
                >
                  {l.label}
                </span>
                {/* Active sliding underline */}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
          {/* Rating badge */}
          <span className="ml-3 hidden items-center gap-1.5 rounded-full border border-brand-200 bg-white/70 px-3 py-1.5 text-xs font-semibold text-ink-900 backdrop-blur lg:inline-flex">
            <span className="text-yellow-400">★</span>
            {company.rating.score}
            <span className="text-ink-700/50">· {company.rating.count}</span>
          </span>
          <SocialIcons className="ml-2 hidden xl:flex" />
          <Magnetic className="ml-3">
            <Link href="/contact" className="btn-primary">
              Get a proposal
            </Link>
          </Magnetic>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-ink-900/10 bg-white/60 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink-900" />
            <span className="block h-0.5 w-5 bg-ink-900" />
            <span className="block h-0.5 w-5 bg-ink-900" />
          </div>
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="overflow-hidden border-t border-brand-100 bg-haze-50/95 backdrop-blur-xl md:hidden"
        >
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-white ${
                  pathname === l.href ? "text-brand-700" : "text-ink-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Get a proposal
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
