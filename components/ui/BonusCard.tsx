"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { BonusOption } from "@/data/content";

interface Props {
  option: BonusOption;
  isSelected: boolean;
  isDisabled: boolean;
  isConfirmed: boolean;
  onSelect: () => void;
}

export function BonusCard({
  option,
  isSelected,
  isDisabled,
  isConfirmed,
  onSelect,
}: Props) {
  return (
    <motion.div
      layout
      animate={{
        opacity: isDisabled ? 0.32 : 1,
        scale: isSelected ? 1.02 : 1,
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative flex flex-col h-full"
      style={{ pointerEvents: isDisabled || isConfirmed ? "none" : "auto" }}
    >
      <motion.div
        className="flex-1 flex flex-col rounded-sm border transition-all duration-400 cursor-pointer overflow-hidden"
        style={{
          background: isSelected
            ? "rgba(216,199,106,0.18)"
            : "rgba(251,250,245,0.80)",
          borderColor: isSelected
            ? "rgba(139,107,77,0.60)"
            : "rgba(31,28,24,0.12)",
          boxShadow: isSelected
            ? "0 8px 32px rgba(139,107,77,0.12)"
            : "none",
        }}
        onClick={onSelect}
        whileTap={{ scale: 0.99 }}
      >
        {/* Sub-items image strip */}
        {option.subItems && option.subItems.length > 0 && (
          <div
            className="flex items-center justify-start gap-3 px-5 pt-5 pb-3 overflow-x-auto no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {option.subItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 flex flex-col items-center gap-1.5"
              >
                <div
                  className="relative rounded-full overflow-hidden bg-white flex items-center justify-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(31,28,24,0.08)",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain p-1.5"
                    sizes="40px"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Separator */}
        <div
          className="mx-5 mb-4"
          style={{ height: "1px", background: "rgba(31,28,24,0.07)" }}
        />

        {/* Card body */}
        <div className="flex flex-col flex-1 px-5 pb-5">
          {/* Title row */}
          <div className="flex items-start justify-between mb-3">
            <h3
              className="font-serif text-cream leading-tight flex-1"
              style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
            >
              {option.title}
            </h3>
            <AnimatePresence>
              {isSelected && (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-shrink-0 ml-3 flex items-center justify-center w-5 h-5 rounded-full"
                  style={{ border: "1.5px solid #8b6b4d" }}
                >
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 3L3 5.5L7 1"
                      stroke="#8b6b4d"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Description */}
          <p
            className="font-sans font-light text-cream-muted leading-relaxed mb-3 flex-1"
            style={{ fontSize: "0.875rem" }}
          >
            {option.description}
          </p>

          {/* Microdetail */}
          <p
            className="font-sans font-light italic mb-5"
            style={{ fontSize: "0.76rem", color: "rgba(139,107,77,0.65)" }}
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
              fontSize: "0.65rem",
              letterSpacing: "0.18em",
              borderColor: isSelected
                ? "rgba(139,107,77,0.70)"
                : "rgba(31,28,24,0.16)",
              color: isSelected
                ? "#5f4632"
                : "rgba(31,28,24,0.55)",
              background: isSelected
                ? "rgba(216,199,106,0.12)"
                : "transparent",
            }}
            whileHover={
              !isSelected
                ? {
                    borderColor: "rgba(139,107,77,0.45)",
                    color: "rgba(31,28,24,0.85)",
                  }
                : {}
            }
          >
            {isSelected ? "Elegida ✓" : "Elegir esta"}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
