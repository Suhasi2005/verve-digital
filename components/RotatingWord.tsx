"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Cycles through words with a vertical slide + shimmer gradient. */
export default function RotatingWord({
  words = ["growth.", "revenue.", "more leads.", "loyalty."],
  interval = 2200,
}: {
  words?: string[];
  interval?: number;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-shimmer inline-block pb-[0.12em]"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
