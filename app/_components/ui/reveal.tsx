"use client";

import { motion, type HTMLMotionProps } from "motion/react";

/** Entrada padrão do site: fade + 16px, 400ms, ease-out, stagger de 60ms. */
export const ENTRY_TRANSITION = { duration: 0.4, ease: "easeOut" } as const;
export const STAGGER = 0.06;

export const revealProps = (index = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { ...ENTRY_TRANSITION, delay: index * STAGGER },
});

/** Mesma entrada, disparada no mount (conteúdo acima da dobra). */
export const enterProps = (index = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { ...ENTRY_TRANSITION, delay: index * STAGGER },
});

interface RevealProps extends HTMLMotionProps<"div"> {
  /** posição no grupo, usada para o stagger */
  index?: number;
}

export function Reveal({ index = 0, ...props }: RevealProps) {
  return <motion.div {...revealProps(index)} {...props} />;
}
