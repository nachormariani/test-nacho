"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/variants";

export function FinalPhoto() {
  return (
    <motion.div
      id="final-photo"
      variants={fadeInUp}
      className="mt-12 w-full max-w-[19rem] md:mt-14 md:max-w-[23rem]"
    >
      <div className="relative mx-auto bg-[#fbfaf5] p-2.5 pb-8 shadow-[0_22px_58px_rgba(31,28,24,0.17)] ring-1 ring-[#8b6b4d]/18 md:-rotate-[1.4deg] md:p-3 md:pb-10">
        <div
          className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 rotate-[-2deg] bg-[#d8c76a]/30 shadow-sm backdrop-blur-[1px]"
          aria-hidden="true"
        />
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#d2c5b4]/35">
          <Image
            src="/photos/final-princesa.jpg"
            alt="Foto frente a una pared que dice Feliz cumple princesa"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 76vw, 23rem"
            priority={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
