"use client";

import Link from "next/link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Container } from "@/components/ui/container";

const TARGETS = [
  {
    emoji: "🏛",
    label: "Architectes & BET",
    pain: "Relevés manuels imprécis qui coûtent des heures",
    gain: "Plans DWG + nuage de points livrés en 48h",
  },
  {
    emoji: "🏠",
    label: "Agences immobilières",
    pain: "Des biens qui peinent à se vendre à distance",
    gain: "Visite virtuelle immersive 360° prête à partager",
  },
  {
    emoji: "🛋",
    label: "Architectes d'intérieur",
    pain: "Retourner sur site plusieurs fois pour mesurer",
    gain: "Toutes les cotes exactes dès la première visite",
  },
];

export function ClientCallout() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 md:py-28">
      {/* Fond décoratif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,150,74,0.08) 0%, transparent 70%)",
        }}
      />

      <Container>
        {/* Accroche principale */}
        <MotionReveal className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Scan 3D professionnel · Livraison 48h · Devis gratuit
          </p>
          <h2
            className="mb-5 text-2xl font-bold leading-[1.1] text-fg md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Votre espace scanné.{" "}
            <em className="not-italic text-accent">Vos plans livrés.</em>
            <br />
            Vous ne revenez plus jamais mesurer.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-muted-light md:text-lg">
            Une seule intervention suffit. Studio Modelis capture chaque
            centimètre de vos espaces et vous livre les fichiers techniques
            prêts à l'emploi — visite virtuelle, plans DWG, nuage de points.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-cta-fg shadow-[0_20px_40px_-12px_rgba(201,150,74,0.5)] transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_24px_48px_-12px_rgba(201,150,74,0.6)] md:px-8 md:py-4"
            >
              Demander un devis gratuit
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link
              href="/technologie"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3.5 text-base font-medium text-muted-light transition-all hover:border-accent hover:text-accent md:px-8 md:py-4"
            >
              Voir la technologie
            </Link>
          </div>
        </MotionReveal>

        {/* Cartes métier */}
        <div className="mt-10 grid gap-3 md:mt-20 md:grid-cols-3">
          {TARGETS.map((t, i) => (
            <MotionReveal key={t.label} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:bg-surface-raised md:p-8">
                {/* Accent glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(201,150,74,0.06) 0%, transparent 70%)",
                  }}
                />
                <div className="mb-4 text-4xl">{t.emoji}</div>
                <h3 className="mb-3 text-lg font-bold text-fg">{t.label}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  <span className="line-through opacity-60">{t.pain}</span>
                </p>
                <p className="flex items-start gap-2 text-sm font-medium text-accent">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  {t.gain}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
