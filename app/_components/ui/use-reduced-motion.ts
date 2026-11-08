"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * prefers-reduced-motion sem quebrar a hidratação: o servidor não conhece a
 * preferência, então o primeiro render (igual ao do servidor) é sempre "false"
 * e a preferência real entra depois de montar.
 */
export function useReducedMotionSafe() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && !!prefersReduced;
}
