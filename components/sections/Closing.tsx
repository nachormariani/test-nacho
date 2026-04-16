"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp, fadeIn } from "@/lib/variants";
import type { ClosingContent } from "@/data/content";

interface Props {
  data: ClosingContent;
}

export function Closing({ data }: Props) {
  return (
    <section className="px-6 py-40 md:py-56">
      {/* Top divider */}
      <motion.div
        className="w-px h-16 bg-gradient-to-b from-transparent via-gold/30 to-transparent mx-auto mb-20"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <SectionWrapper
        className="max-w-xl mx-auto flex flex-col items-center text-center"
        stagger={0.2}
        delay={0.05}
        amount={0.2}
      >
        <motion.h2
          variants={fadeInUp}
          className="font-serif text-cream leading-tight mb-8"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)", letterSpacing: "-0.015em" }}
        >
          {data.heading}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="font-serif italic text-cream/60 mb-12 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)" }}
        >
          {data.message}
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-3">
          <div className="gold-line" />
          <span className="font-sans font-light text-gold tracking-widest uppercase text-xs" style={{ letterSpacing: "0.2em" }}>
            {data.signature}
          </span>
        </motion.div>
      </SectionWrapper>

      {/* Bottom subtle gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(12,11,9,0.6), transparent)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
