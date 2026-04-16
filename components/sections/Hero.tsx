"use client";

import { motion } from "framer-motion";
import { heroStagger, fadeInUp, fadeIn } from "@/lib/variants";
import type { HeroContent } from "@/data/content";

interface Props {
  data: HeroContent;
}

export function Hero({ data }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(200,168,130,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow line */}
        <motion.div variants={fadeIn} className="mb-8">
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={fadeInUp}
          className="font-serif text-cream leading-[1.05] tracking-[-0.02em] mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
        >
          {data.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="font-sans font-light text-cream-muted leading-relaxed mb-12"
          style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)" }}
        >
          {data.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={fadeInUp}>
          <a
            href={data.ctaTarget}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-gold/40 text-cream font-sans font-light tracking-widest uppercase text-xs transition-all duration-500 hover:border-gold hover:bg-gold/8 hover:text-cream"
            style={{ letterSpacing: "0.18em" }}
          >
            <span>{data.ctaLabel}</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
