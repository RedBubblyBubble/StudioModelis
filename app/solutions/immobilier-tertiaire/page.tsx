import type { Metadata } from "next";

import { SolutionPageTemplate } from "@/components/sections/solution-page-template";
import { solutionPages } from "@/data/solutions-content";
import { buildMetadata } from "@/lib/seo";

const content = solutionPages.find((item) => item.slug === "immobilier-tertiaire")!;

export const metadata: Metadata = buildMetadata({
  title: "Solution immobilier tertiaire",
  description:
    "Visites 3D professionnelles pour valoriser, commercialiser et exploiter les actifs tertiaires.",
  path: "/solutions/immobilier-tertiaire",
});

export default function ImmobilierSolutionPage() {
  return (
    <SolutionPageTemplate
      content={content}
      imageSrc="/images/measurements.png"
      imageAlt="Mesures relevées dans un espace tertiaire"
    />
  );
}
