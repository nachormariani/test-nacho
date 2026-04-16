"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { TimelineCard } from "@/components/ui/TimelineCard";
import { fadeInUp } from "@/lib/variants";
import type { TimelineItem } from "@/data/content";

interface Props {
  data: TimelineItem[];
}

export function Timeline({ data }: Props) {
  return (
    <section className="px-6 py-28 md:py-36">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <SectionWrapper className="flex flex-col items-center text-center mb-16 md:mb-20" stagger={0.15}>
          <motion.span
            variants={fadeInUp}
            className="font-sans font-light text-gold tracking-widest uppercase mb-4 block"
            style={{ fontSize: "0.65rem", letterSpacing: "0.22em" }}
          >
            Historia
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-cream leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.015em" }}
          >
            Momentos
          </motion.h2>
        </SectionWrapper>

        {/* Timeline grid */}
        <div className="relative">
          {/* Connecting line — horizontal on md, hidden on mobile */}
          <div
            className="hidden md:block absolute top-[7px] left-1 right-1 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(200,168,130,0.2), rgba(200,168,130,0.2), transparent)" }}
            aria-hidden="true"
          />

          <SectionWrapper
            className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6"
            stagger={0.12}
            amount={0.1}
          >
            {data.map((item, i) => (
              <TimelineCard key={item.id} item={item} index={i} />
            ))}
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
