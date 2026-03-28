import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <SectionShell className="py-24 md:py-28">
      <div className="space-y-5 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="font-title text-4xl font-semibold text-fg md:text-5xl">
          Page introuvable
        </h1>
        <p className="mx-auto max-w-xl text-sm text-muted md:text-base">
          Le contenu demandé n&apos;existe pas ou a été déplacé.
        </p>
        <div className="flex items-center justify-center gap-3">
          <ButtonLink href="/">Retour accueil</ButtonLink>
          <Link
            href="/contact"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Contacter MetaScan
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
