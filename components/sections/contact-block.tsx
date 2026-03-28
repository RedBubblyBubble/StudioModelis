import { siteConfig } from "@/data/site-config";

import { SectionShell } from "@/components/layout/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { MotionReveal } from "@/components/ui/motion-reveal";

export function ContactBlock() {
  return (
    <SectionShell id="contact" className="pb-20">
      <MotionReveal>
        <div className="glass-surface rounded-2xl border border-border p-8 text-center md:p-12">
          <h2 className="font-title text-3xl font-semibold text-fg md:text-4xl">
            Parlons de votre besoin
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-light md:text-base">
            Décrivez votre site, votre objectif et votre échéance. Réponse rapide par un interlocuteur local.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">Demander un devis</ButtonLink>
            <ButtonLink href={`mailto:${siteConfig.email}`} variant="ghost">
              {siteConfig.email}
            </ButtonLink>
          </div>
        </div>
      </MotionReveal>
    </SectionShell>
  );
}
