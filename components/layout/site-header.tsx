"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigationItems } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}
      className={`h-16 md:h-40 overflow-hidden transition-colors duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md"
          : "bg-gradient-to-b from-black/80 via-black/50 to-transparent"
      }`}
    >
      <Container className="relative flex h-full items-center justify-between">

        {/* ── Nav gauche (desktop) ── */}
        <nav
          className="hidden flex-1 items-center gap-1 md:flex"
          aria-label="Navigation principale"
        >
          {navigationItems.slice(0, 3).map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                  active ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Logo : gauche sur mobile, centré sur desktop ── */}
        <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link
            href="/"
            aria-label="Studio Modelis — accueil"
            className="block transition-opacity hover:opacity-70"
          >
            <Image
              src="/images/logo-white.png"
              alt="Studio Modelis"
              width={677}
              height={369}
              className="h-16 w-auto md:h-36 lg:h-40"
              priority
            />
          </Link>
        </div>

        {/* ── Droite : nav + CTA (desktop) + hamburger (mobile) ── */}
        <div className="flex flex-1 items-center justify-end gap-1">
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.slice(3).map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
                    active ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="ml-3">
              <ButtonLink href="/contact">Devis</ButtonLink>
            </div>
          </div>
          <div className="md:hidden">
            <MobileNav items={navigationItems} />
          </div>
        </div>

      </Container>
    </header>
  );
}
