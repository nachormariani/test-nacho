"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp } from "@/lib/variants";
import type { GiftItem } from "@/data/content";

interface Props {
  data: GiftItem[];
}

function GiftCardContent({ gift }: { gift: GiftItem }) {
  return (
    <>
      {/* Image area */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <Image
          src={gift.src}
          alt={gift.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          unoptimized={gift.src.startsWith("https://picsum")}
        />
        {/* Tag badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className="font-sans font-light tracking-widest uppercase px-3 py-1.5 rounded-full"
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              background: "rgba(31,28,24,0.72)",
              color: "#d8c76a",
              backdropFilter: "blur(6px)",
            }}
          >
            {gift.tag}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        <h3
          className="font-serif text-cream mb-2 leading-tight"
          style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)" }}
        >
          {gift.title}
        </h3>
        <p
          className="font-sans font-light text-cream-muted leading-relaxed"
          style={{ fontSize: "0.875rem" }}
        >
          {gift.description}
        </p>
      </div>
    </>
  );
}

export function Gifts({ data }: Props) {
  return (
    <section className="px-6 py-28 md:py-36 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(216,199,106,0.09) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <SectionWrapper
          className="flex flex-col items-center text-center mb-16 md:mb-20"
          stagger={0.15}
        >
          <motion.span
            variants={fadeInUp}
            className="font-sans font-light text-cream-muted uppercase mb-4 block"
            style={{ fontSize: "0.65rem", letterSpacing: "0.22em" }}
          >
            Sorpresas
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-cream leading-tight"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              letterSpacing: "-0.015em",
            }}
          >
            Regalitos
          </motion.h2>
        </SectionWrapper>

        {/* Cards */}
        <SectionWrapper
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          stagger={0.13}
          amount={0.08}
        >
          {data.map((gift, i) => (
            <motion.div
              key={gift.id}
              variants={fadeInUp}
              custom={i}
              className="group relative flex flex-col rounded-sm overflow-hidden border border-cream/10 hover:border-cream/25 transition-all duration-500"
              style={{ background: "rgba(251,250,245,0.72)" }}
              whileHover={{
                boxShadow: "0 24px 64px rgba(31,28,24,0.10)",
              }}
            >
              {gift.href ? (
                <a
                  href={gift.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${gift.title} en una nueva pestaña`}
                  className="flex flex-1 flex-col"
                >
                  <GiftCardContent gift={gift} />
                </a>
              ) : (
                <GiftCardContent gift={gift} />
              )}
            </motion.div>
          ))}
        </SectionWrapper>

        {/* Bottom note */}
        <motion.p
          className="text-center font-sans font-light text-cream-muted mt-12"
          style={{ fontSize: "0.8rem", letterSpacing: "0.04em" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Y una última sorpresa que podés elegir vos ↓
        </motion.p>
      </div>
    </section>
  );
}
