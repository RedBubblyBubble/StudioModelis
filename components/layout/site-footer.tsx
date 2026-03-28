import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, ShieldCheck } from "lucide-react";

import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";

import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-footer">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-5">
            <Link href="/" aria-label="Studio Modelis — accueil">
              <Image
                src="/images/logo-white.png"
                alt="Studio Modelis"
                width={677}
                height={369}
                className="h-36 w-auto"
              />
            </Link>
            <p className="max-w-[28ch] text-sm leading-relaxed text-muted">
              Prestataire local de capture 3D Matterport pour vos projets métier.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-muted-light transition-colors hover:text-accent"
              >
                <Mail aria-hidden="true" size={14} />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2 text-muted-light">
                <MapPin aria-hidden="true" size={14} />
                Intervention locale en France
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Solutions
            </p>
            <ul className="space-y-2.5" role="list">
              {navigationItems
                .filter((item) => item.href.startsWith("/solutions"))
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Informations
            </p>
            <ul className="space-y-2.5" role="list">
              <li>
                <Link
                  href="/technologie"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Technologie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Contact &amp; devis
                </Link>
              </li>
              <li className="pt-2">
                <p className="flex items-center gap-2 text-sm text-muted">
                  <ShieldCheck aria-hidden="true" size={14} />
                  Processus qualité orienté livrables
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}
