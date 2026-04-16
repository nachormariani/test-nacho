"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { staggerContainer } from "@/lib/variants";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  stagger?: number;
  id?: string;
}

export function SectionWrapper({
  children,
  className = "",
  delay = 0,
  amount = 0.12,
  stagger = 0.1,
  id,
}: Props) {
  const { ref, isInView } = useScrollReveal({ amount });

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}
