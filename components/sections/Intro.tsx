"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp } from "@/lib/variants";
import type { IntroContent } from "@/data/content";

interface Props {
  data: IntroContent;
}

export function Intro({ data }: Props) {
  return (
    <section id="intro" className="px-6 py-32 md:py-40">
      <SectionWrapper className="max-w-2xl mx-auto flex flex-col items-center text-center" stagger={0.15}>
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="gold-line mx-auto" />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="font-serif italic text-cream/80 leading-[1.75]"
          style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)" }}
        >
          {data.paragraph}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-8">
          <div className="gold-line mx-auto" />
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
