"use client";

import { type FormEvent, useState } from "react";

import { siteConfig } from "@/data/site-config";

import { SectionShell } from "@/components/layout/section-shell";
import { Heading } from "@/components/ui/heading";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

const fieldClass =
  "w-full rounded-md border border-border bg-surface-raised/90 px-3 py-2.5 text-sm text-fg placeholder:text-muted outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

const labelClass = "block text-sm font-medium text-fg";

const PROJECT_TYPES = [
  { value: "", label: "Type de projet (optionnel)" },
  { value: "architecte", label: "Architecte / bureau d'études" },
  { value: "retail", label: "Retail / franchise" },
  { value: "ingenierie", label: "Ingénierie / chantier" },
  { value: "immobilier", label: "Immobilier tertiaire" },
  { value: "autre", label: "Autre" },
];

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot check (client-side)
    if (data.get("_honeypot")) {
      setStatus("sent");
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      // No endpoint configured: fallback to mailto
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      const subject = encodeURIComponent("Demande de devis Studio Modelis");
      const body = encodeURIComponent(
        `Nom : ${name}\nEmail : ${email}\n\n${message}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus("idle");
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <SectionShell className="pt-44 pb-20 md:pt-48">
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(0,229,255,0.12)] text-accent">
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4,14 10,20 24,8" />
            </svg>
          </div>
          <h1 className="mt-5 font-title text-3xl font-semibold text-fg">
            Message envoyé
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            Merci pour votre demande. Vous recevrez une réponse rapidement.
            Pour un traitement immédiat, écrivez aussi à{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-accent underline underline-offset-4"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell className="pt-14 pb-20 md:pt-20">
      <div className="mx-auto max-w-2xl">
        <Heading
          title="Demander un devis"
          description="Décrivez votre projet pour recevoir une réponse adaptée. Vous pouvez aussi écrire directement par email."
        />

        <form
          className="glass-surface mt-8 space-y-5 rounded-2xl border border-border p-6 md:p-8"
          onSubmit={handleSubmit}
          aria-describedby="form-notice"
          noValidate
        >
          <p id="form-notice" className="text-xs text-muted">
            Les champs marqués * sont requis.
          </p>

          {/* Honeypot anti-spam (hidden from real users) */}
          <div aria-hidden="true" className="hidden">
            <label>
              Ne pas remplir
              <input type="text" name="_honeypot" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className={labelClass}>Nom *</span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className={fieldClass}
                placeholder="Jean Dupont"
              />
            </label>

            <label className="grid gap-2">
              <span className={labelClass}>Téléphone (optionnel)</span>
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                className={fieldClass}
                placeholder="06 xx xx xx xx"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className={labelClass}>Email *</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              className={fieldClass}
              placeholder="vous@entreprise.fr"
            />
          </label>

          <label className="grid gap-2">
            <span className={labelClass}>Type de projet</span>
            <select name="project_type" className={fieldClass}>
              {PROJECT_TYPES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className={labelClass}>Votre besoin *</span>
            <textarea
              name="message"
              required
              rows={5}
              className={fieldClass}
              placeholder="Décrivez votre site, la superficie approximative et votre objectif (relevé, commercialisation, suivi chantier…)"
            />
          </label>

          {status === "error" && (
            <p role="alert" className="text-sm text-red-400">
              Une erreur est survenue. Veuillez réessayer ou écrire directement à{" "}
              <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-2">
                {siteConfig.email}
              </a>
              .
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-cta-fg transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Envoi en cours…" : "Envoyer la demande"}
          </button>
        </form>
      </div>
    </SectionShell>
  );
}
