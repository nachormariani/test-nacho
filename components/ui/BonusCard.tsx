"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Music2,
  ShoppingBag,
  Watch,
  type LucideIcon,
} from "lucide-react";
import type { BonusOption } from "@/data/content";

interface Props {
  option: BonusOption;
  isSelected: boolean;
  isDisabled: boolean;
  isConfirmed: boolean;
  onSelect: () => void;
}

const optionIcons: Record<string, LucideIcon> = {
  b1: ShoppingBag,
  b2: Music2,
  b3: Watch,
};

export function BonusCard({
  option,
  isSelected,
  isDisabled,
  isConfirmed,
  onSelect,
}: Props) {
  const ItemIcon = optionIcons[option.id] ?? ShoppingBag;

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
        {/* Card body */}
        <div className="flex flex-col flex-1 px-5 pb-5 pt-6">
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

          {/* Sub-items strip */}
          {option.subItems && option.subItems.length > 0 && (
            <div
              className="mb-4 flex items-center justify-start gap-2 overflow-x-auto no-scrollbar border-t pt-4"
              style={{
                borderColor: "rgba(31,28,24,0.07)",
                scrollbarWidth: "none",
              }}
            >
              {option.subItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full px-3 py-2"
                  style={{
                    background: "rgba(255,255,255,0.56)",
                    border: "1px solid rgba(31,28,24,0.08)",
                    boxShadow: "0 8px 20px rgba(31,28,24,0.04)",
                  }}
                >
                  <ItemIcon
                    className="h-3.5 w-3.5 flex-shrink-0"
                    strokeWidth={1.5}
                    aria-hidden="true"
                    style={{ color: "rgba(139,107,77,0.72)" }}
                  />
                  <span
                    className="font-sans font-light text-cream-muted whitespace-nowrap"
                    style={{ fontSize: "0.68rem", letterSpacing: "0.02em" }}
                  >
                    {item.label}
                  </span>
                  <span className="sr-only">{item.alt}</span>
                </div>
              ))}
            </div>
          )}

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
