'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandHeroProps {
  mediaSrc: string;
  bgImageSrc: string;
  titleTop: string;
  titleBottom: string;
  eyebrow?: string;
  scrollHint?: string;
  children?: ReactNode;
}

export default function ScrollExpandHero({
  mediaSrc,
  bgImageSrc,
  titleTop,
  titleBottom,
  eyebrow,
  scrollHint,
  children,
}: ScrollExpandHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: Event) => {
      const we = e as unknown as WheelEvent;
      if (mediaFullyExpanded && we.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        we.preventDefault();
      } else if (!mediaFullyExpanded) {
        we.preventDefault();
        setScrollProgress(prev => {
          const next = Math.min(Math.max(prev + we.deltaY * 0.001, 0), 1);
          if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.72) setShowContent(false);
          return next;
        });
      }
    };

    const handleTouchStart = (e: Event) => {
      setTouchStartY((e as unknown as TouchEvent).touches[0].clientY);
    };

    const handleTouchMove = (e: Event) => {
      const te = e as unknown as TouchEvent;
      if (!touchStartY) return;
      const deltaY = touchStartY - te.touches[0].clientY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        te.preventDefault();
      } else if (!mediaFullyExpanded) {
        te.preventDefault();
        setScrollProgress(prev => {
          const next = Math.min(Math.max(prev + deltaY * (deltaY < 0 ? 0.009 : 0.006), 0), 1);
          if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.72) setShowContent(false);
          return next;
        });
        setTouchStartY(te.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => setTouchStartY(0);
    const handleScroll = () => { if (!mediaFullyExpanded) window.scrollTo(0, 0); };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  // Photo dimensions
  const startW = isMobile ? 210 : 290;
  const startH = isMobile ? 270 : 380;
  const mediaWidth  = startW  + scrollProgress * (isMobile ? 660 : 1380);
  const mediaHeight = startH  + scrollProgress * (isMobile ? 230 : 410);

  // Title font size
  const titleSize = isMobile
    ? `clamp(1.9rem, 7.5vw, 2.8rem)`
    : `clamp(2.6rem, 5.5vw, 5rem)`;

  // How far titles slide apart horizontally as photo expands
  const slideVw = scrollProgress * (isMobile ? 52 : 44);

  // Titles vertically: they start framing the photo (top/bottom edges) and fade out as photo grows
  const photoHalfH = mediaHeight / 2;
  // offset from vertical center in px — titles hug the photo edges
  const titleGap = 20; // px gap between title and photo edge
  const titleOffsetPx = photoHalfH + titleGap;

  // Background + text opacity fade
  const bgOpacity   = Math.max(1 - scrollProgress * 1.5, 0);
  const textOpacity = Math.max(1 - scrollProgress * 2.2, 0);

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background image */}
          <div
            className="absolute inset-0 z-0"
            style={{ opacity: bgOpacity }}
          >
            <Image
              src={bgImageSrc}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(245,241,232,0.22) 0%, rgba(245,241,232,0.50) 100%)',
              }}
            />
          </div>

          {/* Viewport frame */}
          <div className="relative z-10 flex items-center justify-center w-full h-[100dvh]">

            {/* ── Expanding photo ── */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: `${mediaWidth}px`,
                height: `${mediaHeight}px`,
                maxWidth: '98vw',
                maxHeight: '92vh',
                borderRadius: `${Math.max(14 - scrollProgress * 14, 0)}px`,
                overflow: 'hidden',
                boxShadow: `0 ${10 + scrollProgress * 50}px ${30 + scrollProgress * 90}px rgba(31,28,24,${0.12 + scrollProgress * 0.20})`,
              }}
            >
              <Image
                src={mediaSrc}
                alt="Inesita y Nacho"
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
              {/* Overlay lightens as photo expands */}
              <div
                className="absolute inset-0"
                style={{ background: `rgba(31,28,24,${Math.max(0.22 - scrollProgress * 0.22, 0)})` }}
              />
            </div>

            {/* ── TOP title — frames photo above, slides left ── */}
            <div
              className="absolute z-20 pointer-events-none select-none"
              style={{
                top: `calc(50% - ${titleOffsetPx}px)`,
                left: '50%',
                transform: `translate(calc(-50% - ${slideVw}vw), -100%)`,
                opacity: textOpacity,
              }}
            >
              <span
                className="font-serif text-[#1f1c18] leading-none whitespace-nowrap block"
                style={{ fontSize: titleSize, letterSpacing: '-0.02em' }}
              >
                {titleTop}
              </span>
            </div>

            {/* ── BOTTOM title — frames photo below, slides right ── */}
            <div
              className="absolute z-20 pointer-events-none select-none"
              style={{
                top: `calc(50% + ${titleOffsetPx}px)`,
                left: '50%',
                transform: `translate(calc(-50% + ${slideVw}vw), 0%)`,
                opacity: textOpacity,
              }}
            >
              <span
                className="font-serif italic text-[#1f1c18] leading-none whitespace-nowrap block"
                style={{ fontSize: `calc(${titleSize} * 1.1)`, letterSpacing: '-0.02em' }}
              >
                {titleBottom}
              </span>
            </div>

            {/* ── Eyebrow + hint — fades out early ── */}
            {(eyebrow || scrollHint) && (
              <div
                className="absolute bottom-10 left-0 right-0 z-20 flex items-center justify-center gap-4 pointer-events-none"
                style={{ opacity: Math.max(1 - scrollProgress * 4, 0) }}
              >
                {eyebrow && (
                  <span
                    className="font-sans font-light text-[#1f1c18]/55 tracking-widest uppercase"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.24em' }}
                  >
                    {eyebrow}
                  </span>
                )}
                <div className="w-5 h-px bg-[#8b6b4d]/35" />
                {scrollHint && (
                  <span
                    className="font-sans font-light text-[#1f1c18]/55 tracking-widest uppercase"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.24em' }}
                  >
                    {scrollHint}
                  </span>
                )}
              </div>
            )}

            {/* ── Scroll progress micro-indicator ── */}
            <div
              className="absolute bottom-0 left-0 h-[2px] bg-[#8b6b4d]/40 z-20 pointer-events-none transition-none"
              style={{
                width: `${scrollProgress * 100}%`,
                opacity: textOpacity + 0.3,
              }}
            />
          </div>

          {/* ── Page content revealed after expansion ── */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            {children}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
