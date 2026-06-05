"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Staggered list with checkmarks that pop in on scroll. */
export default function CheckList({ items }: { items: string[] }) {
  return (
    <motion.ul
      className="mt-8 space-y-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.12 }}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          className="flex items-center gap-3"
          variants={{
            hidden: { opacity: 0, x: -16 },
            show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
          }}
        >
          <motion.span
            className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-brand-600 text-sm text-white"
            variants={{
              hidden: { scale: 0, rotate: -45 },
              show: {
                scale: 1,
                rotate: 0,
                transition: { type: "spring", stiffness: 400, damping: 14 },
              },
            }}
          >
            ✓
          </motion.span>
          <span className="font-medium text-ink-900">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
