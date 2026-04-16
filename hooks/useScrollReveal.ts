"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface Options {
  amount?: number;
  once?: boolean;
}

export function useScrollReveal({ amount = 0.15, once = true }: Options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount, once });
  return { ref, isInView };
}
