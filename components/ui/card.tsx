import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "glass-surface rounded-2xl border border-border/90 p-6 shadow-[0_18px_45px_-28px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
