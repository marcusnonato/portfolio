"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionSafe } from "./use-reduced-motion";
import { cn } from "@/app/_lib/utils";
import { revealProps } from "./reveal";

interface SectionHeadingProps {
  /** rótulo em Mohave caixa alta, ex.: "02 — PROJETOS" */
  eyebrow: string;
  /** texto gigante "fantasma" atrás do título (decorativo) */
  ghost: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  /** id do h2, para aria-labelledby da seção */
  id?: string;
}

/** Padrão único de título de seção: eyebrow + fantasma + h2 (+ subtítulo). */
export function SectionHeading({
  eyebrow,
  ghost,
  title,
  subtitle,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // o fantasma desliza devagar enquanto a seção atravessa a tela
  const x = useTransform(scrollYProgress, [0, 1], ["-6%", "4%"]);

  const centered = align === "center";

  return (
    <div
      ref={ref}
      className={cn(
        "relative isolate",
        centered ? "text-center" : "text-left",
        className,
      )}
    >
      <motion.span
        aria-hidden="true"
        style={{ x: reduceMotion ? 0 : x }}
        className={cn(
          "pointer-events-none absolute top-1/2 -z-10 -translate-y-1/2 leading-none font-bold whitespace-nowrap text-white/5 uppercase select-none",
          "text-[clamp(4rem,15vw,10rem)]",
          centered ? "left-1/2 -translate-x-1/2" : "-left-2 md:-left-6",
        )}
      >
        {ghost}
      </motion.span>

      <motion.p
        {...revealProps(0)}
        className="font-label text-sm tracking-[0.08em] text-zinc-400 uppercase md:text-base"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        {...revealProps(1)}
        id={id}
        className="mt-3 text-4xl leading-[1.1] font-semibold tracking-tight text-white md:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          {...revealProps(2)}
          className={cn(
            "mt-4 max-w-2xl text-lg text-zinc-400",
            centered && "mx-auto",
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
