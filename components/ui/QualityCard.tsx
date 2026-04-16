"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/variants";
import type { QualityItem } from "@/data/content";

interface Props {
  item: QualityItem;
}

export function QualityCard({ item }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative p-6 md:p-7 border-t border-gold/20 hover:border-gold/50 transition-all duration-500 cursor-default"
      style={{
        background: "transparent",
      }}
      whileHover={{
        backgroundColor: "rgba(200,168,130,0.025)",
      }}
    >
      {/* Large faded number behind content */}
      <span
        className="absolute top-3 right-4 font-serif text-gold select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-20"
        style={{ fontSize: "4.5rem", opacity: 0.09, lineHeight: 1 }}
        aria-hidden="true"
      >
        {item.number}
      </span>

      <div className="relative">
        <h3
          className="font-serif text-cream mb-2 leading-tight"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
        >
          {item.title}
        </h3>
        <p className="font-sans font-light text-cream-muted leading-relaxed" style={{ fontSize: "0.875rem" }}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
