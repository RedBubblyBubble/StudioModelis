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
  title: "Capture 3D Matterport locale",
  description:
    "Prestataire local efficace en scan 3D Matterport. Scan à partir de 129€ HT, livrables techniques sur devis.",
  path: "/",
  keywords: ["scan 129€", "capture 3D locale"],
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
