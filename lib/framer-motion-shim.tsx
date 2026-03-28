"use client";

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

type MotionDivProps = HTMLAttributes<HTMLDivElement> & {
  initial?: unknown;
  whileInView?: unknown;
  variants?: unknown;
  viewport?: unknown;
  transition?: unknown;
};

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(function MotionDiv(
  { initial, whileInView, variants, viewport, transition, ...props },
  ref
) {
  void initial;
  void whileInView;
  void variants;
  void viewport;
  void transition;

  return <div ref={ref} {...props} />;
});

export type Variants = Record<string, unknown>;

export const motion = {
  div: MotionDiv,
};
