"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BonusCard } from "@/components/ui/BonusCard";
import { fadeInUp } from "@/lib/variants";
import type { BonusOption } from "@/data/content";

interface Props {
  data: BonusOption[];
}

export function BonusChoice({ data }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const selectedOption = data.find((o) => o.id === selectedId) ?? null;

  function handleSelect(id: string) {
    if (confirmed) return;
    setSelectedId((prev) => (prev === id ? null : id));
  }

  function handleConfirm() {
    if (!selectedId) return;
    setConfirmed(true);
  }

  return (
    <section className="px-6 py-28 md:py-40 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(200,168,130,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <SectionWrapper
          className="flex flex-col items-center text-center mb-16 md:mb-20"
          stagger={0.15}
        >
          <motion.span
            variants={fadeInUp}
            className="font-sans font-light text-gold tracking-widest uppercase mb-4 block"
            style={{ fontSize: "0.65rem", letterSpacing: "0.22em" }}
          >
            La última sorpresa
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-cream leading-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.015em" }}
          >
            Y ahora sí, te toca elegir
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="font-sans font-light text-cream-muted max-w-md leading-relaxed"
            style={{ fontSize: "0.95rem" }}
          >
            Una última sorpresa. Elegís vos cuál.
          </motion.p>
        </SectionWrapper>

        {/* Cards */}
        <SectionWrapper
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          stagger={0.12}
          amount={0.08}
        >
          {data.map((option) => (
            <motion.div key={option.id} variants={fadeInUp}>
              <BonusCard
                option={option}
                isSelected={selectedId === option.id}
                isDisabled={selectedId !== null && selectedId !== option.id}
                isConfirmed={confirmed}
                onSelect={() => handleSelect(option.id)}
              />
            </motion.div>
          ))}
        </SectionWrapper>

        {/* Confirmation area */}
        <AnimatePresence mode="wait">
          {selectedOption && !confirmed && (
            <motion.div
              key="pre-confirm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center text-center mt-12 gap-5"
            >
              <p className="font-sans font-light text-cream-muted" style={{ fontSize: "0.9rem" }}>
                Elegiste:{" "}
                <span className="text-cream font-normal italic font-serif">
                  {selectedOption.title}
                </span>
              </p>
              <p
                className="font-serif italic text-cream/60 max-w-sm"
                style={{ fontSize: "0.9rem" }}
              >
                {selectedOption.confirmMessage}
              </p>
              <motion.button
                type="button"
                onClick={handleConfirm}
                className="px-8 py-3 bg-gold text-background font-sans font-light tracking-widest uppercase transition-all duration-400 hover:bg-gold/90"
                style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#0c0b09" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Me quedo con esta
              </motion.button>
            </motion.div>
          )}

          {confirmed && selectedOption && (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center text-center mt-12 gap-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
                className="w-10 h-10 rounded-full border border-gold flex items-center justify-center mb-2"
              >
                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true">
                  <path
                    d="M1.5 5L5.5 9L12.5 1.5"
                    stroke="#c8a882"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <p className="font-serif italic text-cream/80" style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}>
                Perfecto.{" "}
                <span className="text-gold">{selectedOption.title}</span>.
              </p>
              <p
                className="font-sans font-light text-cream-muted max-w-sm"
                style={{ fontSize: "0.85rem" }}
              >
                Ya lo sé. Te lo voy a preparar con todo el cuidado del mundo.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
