"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { useLanguage } from "@/app/_i18n/LanguageProvider";
import { buttonVariants } from "../ui/button";
import { enterProps } from "../ui/reveal";

/** Lado direito do hero: grid de pontos + glow muito leve do acento (≤ 8%). */
export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block"
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.12)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--brand-rgb)/0.07)_0%,transparent_65%)]" />
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
      {/* ===== Coluna esquerda: rótulo vertical em Mohave ===== */}
      <motion.div
        {...enterProps(0)}
        className="flex shrink-0 flex-col items-start gap-4 lg:gap-8 lg:pt-3"
      >
        <p className="font-label text-xl leading-snug tracking-[0.02em] text-zinc-100 uppercase md:text-2xl md:leading-[1.45]">
          {t.hero.greeting} <br className="hidden lg:block" />
          Marcus
          <br className="hidden lg:block" /> Vinicius
        </p>
      </motion.div>

      {/* ===== Coluna direita: título, valor, CTAs e métricas ===== */}
      <div>
        <motion.h1
          {...enterProps(1)}
          className="text-[2.5rem] leading-[1.08] font-semibold tracking-tight md:text-5xl lg:text-[4rem]"
        >
          <span className="text-white">{t.hero.titleA}</span>
          <br />
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {t.hero.titleB} {t.hero.titleAccent}
          </span>
        </motion.h1>

        <motion.p
          {...enterProps(2)}
          className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 md:mt-6 md:text-lg"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          {...enterProps(3)}
          className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
        >
          <a
            href="#projects"
            className={buttonVariants({ variant: "primary" })}
          >
            {t.hero.ctaProjects}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>
          <a
            href="/MARCUS_NONATO_CURRICULO.pdf"
            download="Marcus-Nonato-CV.pdf"
            className={buttonVariants({ variant: "ghost" })}
          >
            <Download className="h-4 w-4" />
            {t.hero.ctaCv}
          </a>
        </motion.div>

        <motion.ul
          {...enterProps(4)}
          className="font-label mt-8 grid grid-cols-3 gap-4 tracking-[0.04em] uppercase sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-6 sm:gap-y-3 md:mt-10"
        >
          {t.hero.metrics.map((metric, i) => (
            <li
              key={metric.label}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-2"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="mr-4 hidden text-zinc-600 sm:inline"
                >
                  ·
                </span>
              )}
              <span className="text-2xl text-white">{metric.value}</span>
              <span className="text-xs leading-tight text-zinc-400 sm:text-sm">
                {metric.label}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
