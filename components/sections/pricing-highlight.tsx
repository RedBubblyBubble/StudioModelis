import { pricingInfo } from "@/data/home-content";

import { SectionShell } from "@/components/layout/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function PricingHighlight() {
  return (
    <SectionShell>
      <MotionReveal>
        <div className="rounded-2xl border border-border-active bg-[linear-gradient(140deg,rgba(53,213,255,0.16),rgba(59,130,246,0.1),rgba(16,25,44,0.96))] p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Tarification
              </p>
              <div className="flex items-baseline gap-3">
                <span className="font-title text-5xl font-semibold text-fg md:text-6xl">
                  {pricingInfo.priceAmount}
                </span>
                <span className="text-base text-muted">HT / mission</span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-light">
                {pricingInfo.baseDescription}
              </p>
            </div>

            <div className="md:max-w-xs">
              <div className="mb-5 h-px bg-border md:hidden" />
              <p className="text-sm leading-relaxed text-muted">
                {pricingInfo.customDescription}
              </p>
              <div className="mt-5">
                <ButtonLink href="/contact">Obtenir un devis</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
