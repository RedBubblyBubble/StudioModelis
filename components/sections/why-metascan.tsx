import { valuePillars } from "@/data/home-content";
import { CheckCheck, ClipboardCheck, ScanSearch } from "lucide-react";

import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { MotionReveal } from "@/components/ui/motion-reveal";

const icons = [
  <ScanSearch key="scan" aria-hidden="true" size={22} />,
  <ClipboardCheck key="clock" aria-hidden="true" size={22} />,
  <CheckCheck key="doc" aria-hidden="true" size={22} />,
];

export function WhyMetascan() {
  return (
    <SectionShell>
      <Heading
        eyebrow="Pourquoi MetaScan"
        title="Capture, rigueur, livrables"
        description="Une prestation locale focalisée sur la qualité utile, pas sur l'effet marketing."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {valuePillars.map((pillar, index) => (
          <MotionReveal key={pillar.title} delay={index * 0.07}>
            <Card className="flex flex-col gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(53,213,255,0.1)] text-accent">
                {icons[index]}
              </span>
              <div>
                <h3 className="font-title text-xl font-semibold text-fg">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-light">
                  {pillar.description}
                </p>
              </div>
            </Card>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
