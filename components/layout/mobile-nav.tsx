"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import type { NavItem } from "@/types/content";

type MobileNavProps = {
  items: NavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  function close() {
    setOpen(false);
  }

  // Close on ESC + restore focus to trigger
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus trap within panel
  useEffect(() => {
    if (!open || !panelRef.current) return;

    const focusables = panelRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    first?.focus();

    function onTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [open]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Burger / Close trigger */}
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-fg transition-colors hover:border-accent2"
      >
        {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
          onClick={close}
        />
      )}

      {/* Slide-in panel */}
      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-label="Navigation mobile"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col border-l border-border glass-surface shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <span className="font-title text-sm font-semibold text-fg">Studio Modelis</span>
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={close}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:text-accent"
          >
            <X aria-hidden="true" size={16} />
          </button>
        </div>

        <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-1" role="list">
            {items.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-[#0f1f3a] text-accent"
                        : "text-fg hover:bg-surface-raised/80 hover:text-accent"
                    }`}
                  >
                    {active && (
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    )}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-border px-4 py-5">
          <Link
            href="/contact"
            onClick={close}
            className="flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-cta-fg transition-colors hover:bg-accent-hover"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
}
