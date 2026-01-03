"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
}: RevealProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y:
        direction === "fade"
          ? 0
          : direction === "up"
          ? 60
          : direction === "down"
          ? -60
          : 0,
      x:
        direction === "fade"
          ? 0
          : direction === "left"
          ? 60
          : direction === "right"
          ? -60
          : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
