import type { Metadata } from "next";

import { SolutionPageTemplate } from "@/components/sections/solution-page-template";
import { solutionPages } from "@/data/solutions-content";
import { buildMetadata } from "@/lib/seo";

const content = solutionPages.find(
  (item) => item.slug === "architectes-et-bureaux-detudes"
)!;

export const metadata: Metadata = buildMetadata({
  title: "Solution architectes et bureaux d'études",
  description:
    "Relevé 3D Matterport pour fiabiliser l'existant, accélérer les études et limiter les retours terrain.",
  path: "/solutions/architectes-et-bureaux-detudes",
});

export default function ArchitectesSolutionPage() {
  return (
    <SolutionPageTemplate
      content={content}
      imageSrc="/images/dollhouse.png"
      imageAlt="Vue dollhouse utilisée pour les études architecturales"
    />
  );
}
