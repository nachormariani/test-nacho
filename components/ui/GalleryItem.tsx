"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/variants";
import type { GalleryItem as GalleryItemType } from "@/data/content";

interface Props {
  item: GalleryItemType;
}

export function GalleryItem({ item }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      className={`group relative overflow-hidden bg-surface rounded-sm shadow-[0_18px_60px_rgba(31,28,24,0.08)] ${
        item.span ? "col-span-2 row-span-1" : ""
      }`}
      style={{ aspectRatio: item.span ? "16/9" : "3/4" }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes={item.span ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-cream/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Caption */}
      <motion.div
        className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
      >
        <p className="font-sans font-light text-background" style={{ fontSize: "0.8rem" }}>
          {item.caption}
        </p>
      </motion.div>
    </motion.div>
  );
}
