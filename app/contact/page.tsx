import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact et devis",
  description:
    "Demandez un devis pour votre projet de capture 3D Matterport. Réponse rapide par email.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactForm />;
}
