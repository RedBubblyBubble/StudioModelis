import type { Metadata } from "next";

import { ClientCallout } from "@/components/sections/client-callout";
import { ContactBlock } from "@/components/sections/contact-block";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { HeroSection } from "@/components/sections/hero-section";
import { PricingHighlight } from "@/components/sections/pricing-highlight";
import { CaseShowcase } from "@/components/sections/case-showcase";
import { MatterportDemo } from "@/components/sections/matterport-demo";
import { ProofsGallery } from "@/components/sections/proofs-gallery";
import { SolutionsBento } from "@/components/sections/solutions-bento";
import { StatsBand } from "@/components/sections/stats-band";
import { WhyMetascan } from "@/components/sections/why-metascan";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Scan 3D Matterport — Rabat, Casablanca, Témara & Maroc",
  description:
    "Studio Modelis, prestataire scan 3D Matterport basé sur l'axe Rabat – Casablanca – Témara. Tout type de bien immobilier, partout au Maroc. Chiffrage sur devis.",
  path: "/",
  keywords: ["scan 3D Maroc", "Matterport Rabat", "Matterport Casablanca", "visite virtuelle Maroc"],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientCallout />
      <MatterportDemo />
      <CaseShowcase />
      <StatsBand />
      <SolutionsBento />
      <WhyMetascan />
      <PricingHighlight />
      <ProofsGallery />
      <FaqAccordion />
      <ContactBlock />
    </>
  );
}
