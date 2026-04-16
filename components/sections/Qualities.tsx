"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { QualityCard } from "@/components/ui/QualityCard";
import { fadeInUp } from "@/lib/variants";
import type { QualityItem } from "@/data/content";

interface Props {
  data: QualityItem[];
}

export function Qualities({ data }: Props) {
  return (
    <section className="px-6 py-28 md:py-36 bg-surface/40">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionWrapper className="flex flex-col items-center text-center mb-16 md:mb-20" stagger={0.15}>
          <motion.span
            variants={fadeInUp}
            className="font-sans font-light text-gold tracking-widest uppercase mb-4 block"
            style={{ fontSize: "0.65rem", letterSpacing: "0.22em" }}
          >
            Lo que más admiro de vos
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-cream leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.015em" }}
          >
            Seis cosas,{" "}
            <span className="italic text-cream/70">entre muchas</span>
          </motion.h2>
        </SectionWrapper>

        {/* Cards grid */}
        <SectionWrapper
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.09}
          amount={0.08}
        >
          {data.map((item) => (
            <QualityCard key={item.id} item={item} />
          ))}
        </SectionWrapper>
      </div>
    </section>
  );
}
