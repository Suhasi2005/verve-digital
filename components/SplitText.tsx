"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Character-level text splitting with a cinematic per-letter reveal
 * (rise + de-blur, staggered). Words stay intact so wrapping/readability
 * is preserved. Best for short, high-impact headings.
 */
export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.025,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span className={className} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {words.map((word, wi) => (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split("").map((char) => {
              charIndex += 1;
              return (
                <span
                  key={charIndex}
                  className="inline-block overflow-hidden align-bottom"
                >
                  <motion.span
                    className="inline-block"
                    variants={{
                      hidden: { y: "100%", opacity: 0, filter: "blur(5px)" },
                      show: {
                        y: "0%",
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: 0.5, ease },
                      },
                    }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
            {wi < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </span>
  );
}
