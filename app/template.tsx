"use client";

import { motion } from "framer-motion";

/**
 * Wraps every route's content and re-mounts on navigation for a quick, light
 * enter transition. Kept short (no blur) so page-to-page nav feels instant.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
