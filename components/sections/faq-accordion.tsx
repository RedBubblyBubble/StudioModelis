import { faqItems } from "@/data/home-content";

import { SectionShell } from "@/components/layout/section-shell";
import { Heading } from "@/components/ui/heading";
import { Accordion } from "@/components/ui/accordion";

export function FaqAccordion() {
  return (
    <SectionShell id="faq">
      <Heading
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Réponses aux questions les plus courantes sur nos conditions d'intervention, nos délais et nos livrables."
      />
      <Accordion
        items={faqItems}
        type="multiple"
        defaultOpenItems={[faqItems[0].id]}
        className="mt-8"
      />
    </SectionShell>
  );
}
