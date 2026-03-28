import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Bouton HTML natif minimal requis par les composants shadcn/ui (dialog, etc.)
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "destructive";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-accent text-cta-fg hover:bg-accent-hover",
        variant === "outline" && "border border-border bg-transparent text-fg hover:border-accent2",
        variant === "ghost" && "bg-transparent text-muted hover:text-fg",
        variant === "destructive" && "bg-red-600 text-white hover:bg-red-500",
        className
      )}
      {...props}
    />
  );
}

type ButtonVariant = "primary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        variant === "primary" &&
          "bg-accent text-cta-fg shadow-[0_14px_30px_-16px_rgba(53,213,255,0.75)] hover:-translate-y-0.5 hover:bg-accent-hover",
        variant === "ghost" &&
          "border border-border bg-surface/90 text-fg hover:border-accent2 hover:bg-surface-raised/70 hover:text-fg",
        className
      )}
    >
      {children}
      {variant === "primary" && <ArrowUpRight aria-hidden="true" size={16} />}
    </Link>
  );
}
