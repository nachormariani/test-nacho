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
          className="font-sans font-light text-gold tracking-widest uppercase"
          style={{ fontSize: "0.65rem", letterSpacing: "0.22em" }}
        >
          {item.label}
        </span>
      </div>

      {/* Card body */}
      <div
        className="flex-1 bg-surface border border-gold/10 rounded-sm p-6 md:p-7 transition-all duration-500 hover:border-gold/25 hover:shadow-[0_0_30px_rgba(200,168,130,0.04)]"
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
