import type { Metadata } from "next";

import { SolutionPageTemplate } from "@/components/sections/solution-page-template";
import { solutionPages } from "@/data/solutions-content";
import { buildMetadata } from "@/lib/seo";

const content = solutionPages.find((item) => item.slug === "ingenierie-et-chantier")!;

export const metadata: Metadata = buildMetadata({
  title: "Solution ingénierie et chantier",
  description:
    "Suivi visuel technique et coordination chantier via capture 3D Matterport et livrables avancés.",
  path: "/solutions/ingenierie-et-chantier",
});

export default function IngenierieSolutionPage() {
  return (
    <SolutionPageTemplate
      content={content}
      imageSrc="/images/device-closeup.png"
      imageAlt="Équipement de scan pour suivi ingénierie"
    />
  );
}
