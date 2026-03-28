import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "@/components/ui/container";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionShell({ children, className, id }: SectionShellProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}
