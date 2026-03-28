import type { Metadata } from "next";

import { TechnologyOverview } from "@/components/sections/technology-overview";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Technologie Matterport",
  description:
    "Comprendre la chaîne de capture, de traitement et de livraison Studio Modelis.",
  path: "/technologie",
});

export default function TechnologiePage() {
  return <TechnologyOverview />;
}
