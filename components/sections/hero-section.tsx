"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { heroContent } from "@/data/home-content";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const VIDEO_SRC = "/videos/hero.mp4";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* ── Vidéo fond plein écran (autoplay, loop, muted) ── */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />

      {/* ── Fallback image si vidéo non dispo ── */}
      <Image
        src={heroContent.imageSrc}
        alt=""
        fill
        className="absolute inset-0 -z-10 object-cover object-center"
        priority
        sizes="100vw"
        aria-hidden="true"
      />

      {/* ── Overlay dégradé sombre ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30"
      />

      {/* ── Contenu positionné en bas ── */}
      <Container className="relative flex min-h-screen flex-col justify-end pb-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {["Architectes", "Agences immobilières", "Aménageurs"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Titre serif italic massif */}
          <h1
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl italic font-semibold leading-[1.05] text-white md:text-5xl lg:text-6xl"
          >
            Une visite.<br />
            <span className="not-italic font-bold text-accent">Vos plans, votre esquisse visuelle.</span><br />
            <span className="not-italic font-bold">Livrés en 48h.</span>
          </h1>

          {/* Sous-titre */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Scan Matterport professionnel — visite virtuelle 360°, plans DWG,
            nuage de points. Fini les relevés manuels.
          </p>

          {/* Prix */}
          <p className="mt-3 text-sm font-medium text-accent/80">
            À partir de <span className="text-accent font-bold text-base">129€ HT</span> · Devis gratuit sous 24h
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink href={heroContent.ctaHref}>
              Demander un devis gratuit
            </ButtonLink>
            <ButtonLink href="/technologie" variant="ghost">
              Voir la technologie
            </ButtonLink>
          </div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/40">
              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
