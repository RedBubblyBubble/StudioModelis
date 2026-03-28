import Image from "next/image";
import { Check } from "lucide-react";

import type { SolutionPageContent } from "@/types/content";

import { SectionShell } from "@/components/layout/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionReveal } from "@/components/ui/motion-reveal";

type SolutionPageTemplateProps = {
  content: SolutionPageContent;
  imageSrc: string;
  imageAlt: string;
};

function CheckIcon() {
  return (
    <Check aria-hidden="true" className="mt-0.5 shrink-0 text-accent" size={16} />
  );
}

export function SolutionPageTemplate({
  content,
  imageSrc,
  imageAlt,
}: SolutionPageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <SectionShell className="pt-44 md:pt-48">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <MotionReveal>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Solution métier
              </p>
              <h1 className="font-title text-4xl font-semibold leading-tight text-fg md:text-5xl">
                {content.title}
              </h1>
              <p className="text-base leading-relaxed text-muted-light md:text-lg">
                {content.intro}
              </p>
              <ButtonLink href="/contact">Demander un devis</ButtonLink>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </MotionReveal>
        </div>
      </SectionShell>

      {/* Challenges + Deliverables */}
      <SectionShell>
        <div className="grid gap-5 md:grid-cols-2">
          <MotionReveal>
            <Card className="h-full">
              <h2 className="font-title text-2xl font-semibold text-fg">
                Enjeux adressés
              </h2>
              <ul className="mt-5 space-y-3" role="list">
                {content.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-3 text-sm leading-relaxed text-muted-light">
                    <CheckIcon />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <Card className="h-full">
              <h2 className="font-title text-2xl font-semibold text-fg">
                Livrables possibles
              </h2>
              <ul className="mt-5 space-y-3" role="list">
                {content.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3 text-sm leading-relaxed text-muted-light">
                    <CheckIcon />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </MotionReveal>
        </div>
      </SectionShell>

      {/* Bottom CTA */}
      <SectionShell className="pb-20">
        <MotionReveal>
          <div className="rounded-2xl border border-border-active bg-[linear-gradient(140deg,rgba(53,213,255,0.16),rgba(59,130,246,0.1),rgba(16,25,44,0.96))] p-8 md:p-10">
            <h2 className="font-title text-2xl font-semibold text-fg md:text-3xl">
              {content.ctaText}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-light md:text-base">
              Scan à partir de 129€ HT. Livrables avancés (DWG, nuage de points, IFC) sur devis selon surface et complexité.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact">Demander un devis</ButtonLink>
              <ButtonLink href="/technologie" variant="ghost">
                En savoir plus
              </ButtonLink>
            </div>
          </div>
        </MotionReveal>
      </SectionShell>
    </>
  );
}
