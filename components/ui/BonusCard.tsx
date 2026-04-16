"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { BonusOption } from "@/data/content";

interface Props {
  option: BonusOption;
  isSelected: boolean;
  isDisabled: boolean;
  isConfirmed: boolean;
  onSelect: () => void;
}

export function BonusCard({ option, isSelected, isDisabled, isConfirmed, onSelect }: Props) {
  return (
    <motion.div
      layout
      animate={{
        opacity: isDisabled ? 0.35 : 1,
        scale: isSelected ? 1.02 : 1,
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col"
      style={{ pointerEvents: isDisabled || isConfirmed ? "none" : "auto" }}
    >
      <motion.div
        className="flex-1 flex flex-col p-7 md:p-8 rounded-sm border transition-colors duration-400 cursor-pointer"
        style={{
          background: isSelected
            ? "rgba(216,199,106,0.2)"
            : "rgba(251,250,245,0.72)",
          borderColor: isSelected
            ? "rgba(139,107,77,0.55)"
            : "rgba(31,28,24,0.12)",
        }}
        onClick={onSelect}
        whileTap={{ scale: 0.99 }}
      >
        {/* Icon + Selected checkmark */}
        <div className="flex items-start justify-between mb-6">
          <span style={{ fontSize: "1.6rem" }} aria-hidden="true">
            {option.icon}
          </span>

          <AnimatePresence>
            {isSelected && (
              <motion.div
                key="check"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex items-center justify-center w-6 h-6 rounded-full border border-gold"
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                  <path
                    d="M1 3.5L3.8 6.5L9 1"
                    stroke="#8b6b4d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Title */}
        <h3
          className="font-serif text-cream leading-tight mb-3"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)" }}
        >
          {option.title}
        </h3>

        {/* Description */}
        <p
          className="font-sans font-light text-cream-muted leading-relaxed mb-5 flex-1"
          style={{ fontSize: "0.9rem" }}
        >
          {option.description}
        </p>

        {/* Microdetail */}
        <p
          className="font-sans font-light text-gold/60 italic mb-6"
          style={{ fontSize: "0.78rem" }}
        >
          {option.microdetail}
        </p>

        {/* Select button */}
        <motion.button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="w-full py-3 border font-sans font-light uppercase transition-all duration-400"
          style={{
            fontSize: "0.72rem",
            borderColor: isSelected
              ? "rgba(139,107,77,0.7)"
              : "rgba(31,28,24,0.18)",
            color: isSelected ? "#5f4632" : "rgba(31,28,24,0.62)",
            background: isSelected ? "rgba(216,199,106,0.14)" : "transparent",
          }}
          whileHover={!isSelected ? { borderColor: "rgba(139,107,77,0.45)", color: "rgba(31,28,24,0.9)" } : {}}
        >
          {isSelected ? "Elegida ✓" : "Elegir esta"}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
