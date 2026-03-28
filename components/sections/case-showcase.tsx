"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/ui/container";
import { MotionReveal } from "@/components/ui/motion-reveal";

const STEPS = [
  {
    number: "01",
    label: "Capture",
    title: "Le scan Matterport sur site",
    description:
      "Intervention en espace commercial. Le scanner Matterport Pro capture chaque mètre carré — volumes, hauteurs, recoins. En quelques heures, l'espace entier existe en jumeau numérique.",
    images: [
      { src: "/images/showcase/scan/scan-01.png", alt: "Vue intérieure du scan 3D" },
      { src: "/images/showcase/scan/scan-02.png", alt: "Couloir capturé en 3D" },
      { src: "/images/showcase/scan/scan-03.png", alt: "Espace principal scanné" },
      { src: "/images/showcase/scan/scan-04.png", alt: "Détail de la capture" },
      { src: "/images/showcase/scan/scan-05.png", alt: "Vue dollhouse du bâtiment" },
    ],
  },
  {
    number: "02",
    label: "Plans",
    title: "Plans extraits du jumeau 3D",
    description:
      "Depuis le modèle Matterport, on extrait des plans 2D précis et exploitables. Chaque pièce, chaque cote, chaque ouverture — sans retour sur site ni mesure manuelle.",
    images: [
      { src: "/images/showcase/plans/plan-01.png", alt: "Plan général extrait" },
      { src: "/images/showcase/plans/plan-02.png", alt: "Plan de masse" },
      { src: "/images/showcase/plans/plan-03.png", alt: "Plan technique détaillé" },
      { src: "/images/showcase/plans/plan-04.png", alt: "Plan coté" },
    ],
  },
  {
    number: "03",
    label: "Aménagement",
    title: "La cellule aménagée sur base des plans",
    description:
      "Les plans extraits servent directement à l'architecte d'intérieur. Ici, la cellule commerciale a été aménagée avec précision — cloisonnements, circulations, implantation — sans erreur de cote.",
    images: [
      { src: "/images/showcase/amenagement/amenagement-01.png", alt: "Plan d'aménagement général" },
      { src: "/images/showcase/amenagement/amenagement-02.png", alt: "Plan de la cellule aménagée" },
      { src: "/images/showcase/amenagement/amenagement-03.png", alt: "Détail aménagement" },
      { src: "/images/showcase/amenagement/amenagement-04.png", alt: "Plan final de la cellule" },
    ],
  },
];

export function CaseShowcase() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-24 border-t border-border">
      <Container>

        {/* ── En-tête ── */}
        <MotionReveal className="mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Étude de cas
          </p>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl italic font-semibold text-fg md:text-5xl"
          >
            Du scan au projet,<br />
            <span className="not-italic">une mission complète.</span>
          </h2>
        </MotionReveal>

        {/* ── Étapes ── */}
        <div className="space-y-20">
          {STEPS.map((step, stepIdx) => (
            <MotionReveal key={step.number} delay={0.05}>
              <div className="grid gap-10 md:grid-cols-[200px_1fr]">

                {/* Numéro + label */}
                <div className="flex flex-row items-start gap-5 md:flex-col md:gap-2 md:pt-1">
                  <span
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-6xl font-bold leading-none text-border md:text-7xl"
                  >
                    {step.number}
                  </span>
                  <div className="mt-1 md:mt-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      {step.label}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-fg">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Galerie */}
                <div
                  className={`grid gap-3 ${
                    step.images.length === 5
                      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-5"
                      : "grid-cols-2 sm:grid-cols-4"
                  }`}
                >
                  {step.images.map((img, imgIdx) => (
                    <motion.button
                      key={img.src}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: imgIdx * 0.07 }}
                      onClick={() => setLightbox(img)}
                      className="group relative overflow-hidden rounded-xl border border-border bg-surface"
                      aria-label={`Agrandir : ${img.alt}`}
                    >
                      <div className="aspect-[4/3]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                        <ZoomIn
                          size={22}
                          className="text-white opacity-0 transition-opacity group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Séparateur entre étapes */}
              {stepIdx < STEPS.length - 1 && (
                <div className="mt-20 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border/40" />
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent/50" aria-hidden="true">
                    <path d="M8 3v10M8 13l-3-3M8 13l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="h-px flex-1 bg-border/40" />
                </div>
              )}
            </MotionReveal>
          ))}
        </div>
      </Container>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1400}
                height={900}
                className="h-auto max-h-[85vh] w-full rounded-xl object-contain shadow-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 flex h-9 w-9 items-center justify-center rounded-full bg-surface border border-border text-fg transition-colors hover:text-accent"
                aria-label="Fermer"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
