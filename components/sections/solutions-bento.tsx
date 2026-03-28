import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { verticalCards } from "@/data/home-content";

import { SectionShell } from "@/components/layout/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";

// Grille 3 colonnes : cartes 0 et 3 = larges (2/3), cartes 1 et 2 = étroites (1/3)
const colSpans = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];

export function SolutionsBento() {
  return (
    <SectionShell>
      <Heading
        eyebrow="Solutions"
        title="4 verticales métier"
        description="Des parcours dédiés à vos contraintes opérationnelles."
      />

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {verticalCards.map((card, index) => (
          <MotionReveal key={card.href} delay={index * 0.06} className={colSpans[index]}>
            <Link
              href={card.href}
              className="group relative flex min-h-[260px] overflow-hidden rounded-2xl border border-border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:min-h-[300px]"
            >
              {/* Image background */}
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />

              {/* Overlay dégradé */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-bg/92 via-bg/40 to-transparent transition-opacity duration-300 group-hover:from-bg/80"
              />

              {/* Glow border au hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl opacity-0 ring-1 ring-inset ring-accent/40 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Contenu */}
              <div className="relative flex flex-1 flex-col justify-end gap-3 p-6">
                <Badge
                  variant="outline"
                  className="w-fit border-accent/30 bg-accent/10 text-accent text-xs"
                >
                  Solution métier
                </Badge>
                <div>
                  <h3 className="font-title text-xl font-semibold text-fg">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-light">
                    {card.description}
                  </p>
                </div>
                <p className="flex items-center gap-1.5 text-sm font-medium text-accent">
                  Voir la solution
                  <ArrowRight
                    aria-hidden="true"
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </p>
              </div>
            </Link>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
