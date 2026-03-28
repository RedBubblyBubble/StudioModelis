import Image from "next/image";

import { proofItems } from "@/data/home-content";

import { SectionShell } from "@/components/layout/section-shell";
import { Heading } from "@/components/ui/heading";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function ProofsGallery() {
  return (
    <SectionShell>
      <Heading
        eyebrow="Livrables"
        title="Des rendus immédiatement exploitables"
        description="Chaque mission produit un support concret pour vos décisions techniques et opérationnelles."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {proofItems.map((item, index) => (
          <MotionReveal key={item.title} delay={index * 0.06}>
            <article className="glass-surface overflow-hidden rounded-xl border border-border">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="font-title text-lg font-semibold text-fg">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-light">
                  {item.description}
                </p>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
