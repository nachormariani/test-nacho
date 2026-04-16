"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/variants";
import type { TimelineItem } from "@/data/content";

interface Props {
  item: TimelineItem;
  index: number;
}

export function TimelineCard({ item, index }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      className="relative flex flex-col md:flex-1"
    >
      {/* Node */}
      <div className="flex items-center gap-4 mb-5">
        <div className="relative flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-gold" />
          <div className="absolute inset-0 rounded-full bg-gold/30 scale-[2.5] animate-pulse" style={{ animationDuration: "3s" }} />
        </div>
        <span
          className="font-sans font-light text-cream-muted uppercase"
          style={{ fontSize: "0.72rem" }}
        >
          {item.label}
        </span>
      </div>

      {/* Card body */}
      <div
        className="flex-1 bg-background/70 border border-cream/10 rounded-sm p-6 md:p-7 transition-all duration-500 hover:border-cream/25 hover:shadow-[0_20px_50px_rgba(31,28,24,0.08)]"
      >
        <h3
          className="font-serif text-cream mb-3 leading-tight"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
        >
          {item.title}
        </h3>
        <p className="font-sans font-light text-cream-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
