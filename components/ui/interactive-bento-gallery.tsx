"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export interface MediaItemType {
  id: number;
  type: "image" | "video";
  title: string;
  desc: string;
  url: string;
  span: string;
  mimeType?: string;
}

const MediaItem = ({
  item,
  className,
  onClick,
}: {
  item: MediaItemType;
  className?: string;
  onClick?: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isBuffering, setIsBuffering] = useState(item.type === "video");

  useEffect(() => {
    if (item.type !== "video") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsInView(entry.isIntersecting));
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0.1,
      },
    );

    const video = videoRef.current;
    if (video) observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, [item.type]);

  useEffect(() => {
    if (item.type !== "video") return;

    let mounted = true;
    const video = videoRef.current;

    const handleVideoPlay = async () => {
      if (!video || !isInView || !mounted) return;

      try {
        if (video.readyState >= 3) {
          setIsBuffering(false);
          await video.play();
          return;
        }

        setIsBuffering(true);
        await new Promise((resolve) => {
          video.oncanplay = resolve;
        });

        if (mounted) {
          setIsBuffering(false);
          await video.play();
        }
      } catch (error) {
        console.warn("Video playback failed:", error);
      }
    };

    if (isInView) {
      handleVideoPlay();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }

    return () => {
      mounted = false;
      if (video) {
        video.pause();
      }
    };
  }, [isInView, item.type]);

  if (item.type === "video") {
    return (
      <div className={`${className ?? ""} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          onClick={onClick}
          playsInline
          muted
          loop
          preload="metadata"
          style={{
            opacity: isBuffering ? 0.82 : 1,
            transition: "opacity 0.2s",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          <source src={item.url} type={item.mimeType ?? "video/mp4"} />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-cream/10">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-background/40 border-t-background" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${className ?? ""} relative block cursor-pointer overflow-hidden`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      aria-label={item.title}
      onKeyDown={(event) => {
        if (!onClick) return;
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
    >
      <Image
        src={item.url}
        alt={item.title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </div>
  );
};

interface GalleryModalProps {
  selectedItem: MediaItemType;
  isOpen: boolean;
  onClose: () => void;
  setSelectedItem: (item: MediaItemType | null) => void;
  mediaItems: MediaItemType[];
}

const GalleryModal = ({
  selectedItem,
  isOpen,
  onClose,
  setSelectedItem,
  mediaItems,
}: GalleryModalProps) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

  if (!isOpen) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-cream/20 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="fixed inset-x-3 top-1/2 z-50 mx-auto h-[82vh] max-w-6xl -translate-y-1/2 overflow-hidden rounded-sm border border-background/35 bg-background/80 shadow-[0_28px_110px_rgba(31,28,24,0.22)] backdrop-blur-xl sm:inset-x-8"
      >
        <div className="flex h-full flex-col">
          <div className="flex flex-1 items-center justify-center bg-surface/35 p-3 sm:p-5 md:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                className="relative h-full max-h-[70vh] w-full max-w-5xl overflow-hidden rounded-sm bg-cream/10 shadow-[0_18px_70px_rgba(31,28,24,0.18)]"
                initial={{ y: 20, scale: 0.97 }}
                animate={{
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.5,
                  },
                }}
                exit={{
                  y: 20,
                  scale: 0.97,
                  transition: { duration: 0.15 },
                }}
              >
                <MediaItem
                  item={selectedItem}
                  className="h-full w-full"
                  onClick={onClose}
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-cream/35 to-transparent" />
                  <h3 className="relative font-serif text-xl text-background sm:text-2xl md:text-3xl">
                    {selectedItem.title}
                  </h3>
                  <p className="relative mt-1 max-w-xl text-sm font-light text-background/78 sm:text-base">
                    {selectedItem.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          type="button"
          aria-label="Cerrar galería"
          className="absolute right-3 top-3 rounded-full bg-background/85 p-2 text-cream shadow-sm backdrop-blur-sm transition-colors hover:bg-background"
          onClick={onClose}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <X className="h-4 w-4" />
        </motion.button>
      </motion.div>

      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        initial={false}
        animate={{ x: dockPosition.x, y: dockPosition.y }}
        onDragEnd={(_, info) => {
          setDockPosition((prev) => ({
            x: prev.x + info.offset.x,
            y: prev.y + info.offset.y,
          }));
        }}
        className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 touch-none"
      >
        <motion.div className="relative cursor-grab rounded-sm border border-background/20 bg-background/75 shadow-[0_18px_60px_rgba(31,28,24,0.18)] backdrop-blur-xl active:cursor-grabbing">
          <div className="flex items-center -space-x-2 px-3 py-2">
            {mediaItems.map((item, index) => (
              <motion.button
                type="button"
                key={item.id}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedItem(item);
                }}
                style={{
                  zIndex:
                    selectedItem.id === item.id ? 30 : mediaItems.length - index,
                }}
                className={`relative h-10 w-10 flex-shrink-0 cursor-pointer overflow-hidden rounded-sm sm:h-11 sm:w-11 md:h-12 md:w-12 ${
                  selectedItem.id === item.id
                    ? "ring-2 ring-cream/70"
                    : "hover:ring-2 hover:ring-cream/30"
                }`}
                initial={{ rotate: index % 2 === 0 ? -8 : 8 }}
                animate={{
                  scale: selectedItem.id === item.id ? 1.16 : 1,
                  rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -8 : 8,
                  y: selectedItem.id === item.id ? -8 : 0,
                }}
                whileHover={{
                  scale: 1.24,
                  rotate: 0,
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                aria-label={item.title}
              >
                <MediaItem
                  item={item}
                  className="h-full w-full"
                  onClick={() => setSelectedItem(item)}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/30" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

interface InteractiveBentoGalleryProps {
  mediaItems: MediaItemType[];
  title: string;
  description: string;
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
  mediaItems,
  title,
  description,
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
  const [items, setItems] = useState(mediaItems);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setItems(mediaItems);
  }, [mediaItems]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14">
      <div className="mb-10 text-center">
        <motion.h2
          className="font-serif text-cream"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.6rem)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-xl text-sm font-light leading-relaxed text-cream-muted sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>

      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={items}
          />
        ) : (
          <motion.div
            className="grid grid-cols-1 auto-rows-[250px] gap-3 sm:grid-cols-3 sm:auto-rows-[130px] md:grid-cols-4 md:auto-rows-[150px] lg:auto-rows-[172px]"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`media-${item.id}`}
                className={`relative overflow-hidden rounded-sm border border-background/20 bg-surface shadow-[0_22px_70px_rgba(31,28,24,0.10)] ${item.span}`}
                onClick={() => !isDragging && setSelectedItem(item)}
                variants={{
                  hidden: { y: 50, scale: 0.94, opacity: 0 },
                  visible: {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                      delay: index * 0.03,
                    },
                  },
                }}
                whileHover={{ scale: 1.015 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.45}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(_, info) => {
                  setIsDragging(false);
                  const moveDistance = info.offset.x + info.offset.y;
                  if (Math.abs(moveDistance) > 50) {
                    const newItems = [...items];
                    const draggedItem = newItems[index];
                    const targetIndex =
                      moveDistance > 0
                        ? Math.min(index + 1, items.length - 1)
                        : Math.max(index - 1, 0);
                    newItems.splice(index, 1);
                    newItems.splice(targetIndex, 0, draggedItem);
                    setItems(newItems);
                  }
                }}
              >
                <MediaItem
                  item={item}
                  className="absolute inset-0 h-full w-full"
                  onClick={() => !isDragging && setSelectedItem(item)}
                />
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/82 via-cream/35 to-transparent" />
                  <h3 className="relative truncate font-serif text-lg text-background sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="relative mt-1 line-clamp-2 text-xs font-light leading-relaxed text-background/75 sm:text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveBentoGallery;
