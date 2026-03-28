import Image from "next/image";

import { technologyFeatures } from "@/data/technology-content";

import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function TechnologyOverview() {
  return (
    <>
      <SectionShell className="pt-44 md:pt-48">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <MotionReveal>
            <Heading
              eyebrow="Technologie"
              title="Matterport au service des décisions terrain"
              description="Une chaîne de capture et de livraison conçue pour être rapide, robuste et lisible par toutes les parties prenantes."
            />
          </MotionReveal>
          <MotionReveal delay={0.12}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/device-closeup.png"
                alt="Équipement de capture 3D Matterport en situation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </MotionReveal>
        </div>
      </SectionShell>

      <SectionShell className="pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {technologyFeatures.map((feature, index) => (
            <MotionReveal key={feature.title} delay={index * 0.07}>
              <Card>
                <h3 className="font-title text-xl font-semibold text-fg">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-light">
                  {feature.description}
                </p>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
