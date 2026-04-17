"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { fadeInUp } from "@/lib/variants";

export function FinalPhoto() {
  return (
    <section
      id="final-photo"
      className="relative overflow-hidden px-5 py-24 md:px-6 md:py-32"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(222,214,201,0.68) 0%, rgba(251,250,245,0.9) 38%, rgba(245,241,232,1) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8b6b4d]/30 to-transparent"
        aria-hidden="true"
      />

      <SectionWrapper
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
        stagger={0.16}
        amount={0.16}
      >
        <motion.p
          variants={fadeInUp}
          className="mb-4 font-sans text-[0.64rem] font-light uppercase text-cream-muted"
          style={{ letterSpacing: "0.2em" }}
        >
          Para cerrar
        </motion.p>

        <motion.h2
          variants={fadeInUp}
          className="font-serif leading-tight text-cream"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          Feliz cumple, Inesita
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-4 max-w-xl font-serif italic leading-relaxed text-cream/65"
          style={{ fontSize: "clamp(1rem, 1.7vw, 1.18rem)" }}
        >
          Una prueba de que esto ya venía escrito en la pared.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 w-full max-w-[29rem] md:mt-12 md:max-w-[34rem]"
        >
          <div className="relative mx-auto bg-[#fbfaf5] p-3 shadow-[0_26px_70px_rgba(31,28,24,0.16)] ring-1 ring-[#8b6b4d]/18 md:-rotate-[1.2deg] md:p-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#d2c5b4]/35">
              <Image
                src="/photos/final-princesa.jpg"
                alt="Foto frente a una pared que dice Feliz cumple princesa"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 88vw, 34rem"
                priority={false}
              />
            </div>
            <div className="mt-3 flex items-center justify-center gap-3 pb-1">
              <span className="h-px w-12 bg-[#8b6b4d]/35" aria-hidden="true" />
              <span
                className="font-sans text-[0.62rem] font-light uppercase text-cream-muted"
                style={{ letterSpacing: "0.18em" }}
              >
                escrito
              </span>
              <span className="h-px w-12 bg-[#8b6b4d]/35" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
