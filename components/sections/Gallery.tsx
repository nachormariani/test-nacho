"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GalleryItem } from "@/components/ui/GalleryItem";
import { fadeInUp } from "@/lib/variants";
import type { GalleryItem as GalleryItemType } from "@/data/content";

interface Props {
  data: GalleryItemType[];
}

export function Gallery({ data }: Props) {
  return (
    <section className="px-6 py-28 md:py-36">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <SectionWrapper className="flex flex-col items-center text-center mb-14 md:mb-16" stagger={0.15}>
          <motion.span
            variants={fadeInUp}
            className="font-sans font-light text-gold tracking-widest uppercase mb-4 block"
            style={{ fontSize: "0.65rem", letterSpacing: "0.22em" }}
          >
            Nosotros
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-cream leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.015em" }}
          >
            Algunos recuerdos
          </motion.h2>
        </SectionWrapper>

        {/* Asymmetric grid */}
        <SectionWrapper
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          stagger={0.1}
          amount={0.08}
        >
          {data.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </SectionWrapper>

        <motion.p
          className="text-center font-sans font-light text-cream-muted mt-6"
          style={{ fontSize: "0.75rem", letterSpacing: "0.08em" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Reemplazá las fotos en{" "}
          <code className="text-gold/60 font-mono" style={{ fontSize: "0.7rem" }}>
            data/content.ts
          </code>
        </motion.p>
      </div>
    </section>
  );
}
