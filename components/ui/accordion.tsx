"use client";

import { useMemo, useRef, useState, type KeyboardEvent } from "react";

import { cn } from "@/lib/utils";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  type?: "single" | "multiple";
  defaultOpenItems?: string[];
  className?: string;
};

export function Accordion({
  items,
  type = "single",
  defaultOpenItems = [],
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const openSet = useMemo(() => new Set(openItems), [openItems]);

  const toggleItem = (itemId: string) => {
    setOpenItems((current) => {
      const isOpen = current.includes(itemId);
      if (type === "single") {
        return isOpen ? [] : [itemId];
      }
      return isOpen
        ? current.filter((id) => id !== itemId)
        : [...current, itemId];
    });
  };

  const onTriggerKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const lastIndex = items.length - 1;
    const nextIndexByKey: Record<string, number> = {
      ArrowDown: index === lastIndex ? 0 : index + 1,
      ArrowUp: index === 0 ? lastIndex : index - 1,
      Home: 0,
      End: lastIndex,
    };
    triggerRefs.current[nextIndexByKey[event.key]]?.focus();
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const isOpen = openSet.has(item.id);
        const buttonId = `accordion-trigger-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <section
            key={item.id}
            data-state={isOpen ? "open" : "closed"}
            className={cn(
              "overflow-hidden rounded-2xl border border-border bg-surface/90 shadow-[0_0_0_1px_rgba(41,121,255,0.04)] transition-all duration-300",
              isOpen &&
                "border-border-active bg-surface-raised/95 shadow-[0_14px_40px_-30px_rgba(53,213,255,0.65)]"
            )}
          >
            <h3>
              <button
                ref={(el) => {
                  triggerRefs.current[index] = el;
                }}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                onKeyDown={(event) => onTriggerKeyDown(event, index)}
                className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
              >
                <span className="font-title text-base font-semibold text-fg transition-colors duration-200 group-hover:text-accent-hover md:text-lg">
                  {item.title}
                </span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-bg/60 text-accent transition-all duration-300",
                    isOpen && "rotate-180 border-border-active bg-[rgba(53,213,255,0.08)]"
                  )}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 16 16"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.5 6L8 10.5 12.5 6" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-light md:px-6 md:pb-6 md:text-base">
                  {item.content}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
