"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    // reducedMotion="user": com prefers-reduced-motion, o motion pula transforms
    // e mantém só a opacidade das entradas
    <MotionConfig reducedMotion="user">
      {reduceMotion ? (
        children
      ) : (
        <ReactLenis root options={{ duration: 1.2 }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}
