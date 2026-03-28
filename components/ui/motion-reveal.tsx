"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const stillVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function MotionReveal({ children, className, delay = 0 }: MotionRevealProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? stillVariants : revealVariants;

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8%" }}
      transition={
        prefersReduced
          ? { duration: 0 }
          : { duration: 0.45, ease: "easeOut", delay }
      }
    >
      {children}
    </motion.div>
  );
}
