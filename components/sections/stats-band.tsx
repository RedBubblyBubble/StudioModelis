"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { statsItems } from "@/data/home-content";
import { Container } from "@/components/ui/container";

function AnimatedCounter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const steps = 44;
    const duration = 1100;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

export function StatsBand() {
  return (
    <div className="border-y border-border/40 bg-surface/30 backdrop-blur-sm">
      <Container>
        <div className="grid grid-cols-2 gap-px bg-border/25 md:grid-cols-4">
          {statsItems.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 bg-bg/80 px-6 py-8 text-center"
            >
              <p className="font-title text-3xl font-semibold text-fg md:text-4xl">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
