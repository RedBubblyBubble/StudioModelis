import type { Metadata } from "next";

import { SolutionPageTemplate } from "@/components/sections/solution-page-template";
import { solutionPages } from "@/data/solutions-content";
import { buildMetadata } from "@/lib/seo";

const content = solutionPages.find((item) => item.slug === "retail-et-franchises")!;

export const metadata: Metadata = buildMetadata({
  title: "Solution retail et franchises",
  description:
    "Capture 3D multi-sites pour standardiser audits, déploiements et contrôle qualité dans le retail.",
  path: "/solutions/retail-et-franchises",
});

export default function RetailSolutionPage() {
  return (
    <SolutionPageTemplate
      content={content}
      imageSrc="/images/retail-scan.png"
      imageAlt="Relevé 3D d'un espace retail"
    />
  );
}
