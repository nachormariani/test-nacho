"use client";

import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import type { GalleryItem as GalleryItemType } from "@/data/content";

interface Props {
  data: GalleryItemType[];
}

export function Gallery({ data }: Props) {
  return (
    <section className="px-0 py-20 md:py-32">
      <InteractiveBentoGallery
        mediaItems={data}
        title="Fotos"
        description="Pedacitos nuestros, elegidos para que respiren lindo."
      />
    </section>
  );
}
