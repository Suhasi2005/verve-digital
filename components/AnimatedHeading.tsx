"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";

type Props = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Reveals a heading word-by-word with a staggered blur-to-clear rise
 * when it scrolls into view.
 */
export default function AnimatedHeading({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
}: Props) {
  const words = text.split(" ");
  const reduce = useReducedMotion();
  if (reduce) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.06, delayChildren: delay }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden pb-[0.12em] align-bottom"
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0, filter: "blur(6px)" },
                show: {
                  y: "0%",
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease },
                },
              }}
            >
              {word}
              {i < words.length - 1 && " "}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
