"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/app/_i18n/LanguageProvider";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 py-24 font-[family-name:var(--font-display)] md:py-0 lg:flex-row lg:items-center lg:gap-20">
      {/* ===== Coluna esquerda: avatar + saudação ===== */}
      <motion.div
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.4 }}
        className="flex shrink-0 flex-col items-start gap-6 lg:gap-8 lg:self-start lg:pt-2"
      >
        <Image
          width={44}
          height={44}
          alt="Marcus Vinicius"
          className="rounded-full ring-2 ring-white/15"
          src="/me.jpg"
        />
        <p className="font-[family-name:var(--font-condensed)] text-xl leading-snug tracking-[0.02em] text-zinc-100 uppercase md:text-2xl md:leading-[1.45]">
          {t.hero.greeting} <br className="hidden lg:block" />
          Marcus
          <br className="hidden lg:block" /> Vinicius
        </p>
      </motion.div>

      {/* ===== Coluna direita: título + CTA ===== */}
      <div>
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.45, delay: 0.12 }}
          className="text-[2.5rem] leading-[1.08] font-semibold tracking-tight md:text-5xl lg:text-[4rem]"
        >
          <span className="text-white">{t.hero.titleA}</span>
          <br />
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            {t.hero.titleB} {t.hero.titleAccent}
          </span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.45, delay: 0.24 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 rounded-xl border-2 border-white bg-zinc-950 px-5 py-3 text-sm font-semibold tracking-wide text-white uppercase shadow-[0_6px_0_0_#fff] transition-[transform,box-shadow] duration-300 ease-out hover:translate-y-[3px] hover:shadow-[0_3px_0_0_#fff]"
          >
            {t.hero.ctaProjects}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </a>
          <a
            href="/MARCUS_NONATO_CURRICULO.pdf"
            download
            className="text-sm text-zinc-400 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            {t.hero.ctaCv}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
