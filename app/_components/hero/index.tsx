"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/_i18n/LanguageProvider";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

type CodeValue =
  | { kind: "literal"; items: string[] }
  | { kind: "string"; items: string[] }
  | { kind: "array"; items: string[] };

function renderValue(value: CodeValue) {
  if (value.kind === "literal") {
    return <span className="text-[#8aee14]">{value.items[0]}</span>;
  }
  if (value.kind === "string") {
    return <span className="text-lime-300">{`'${value.items[0]}'`}</span>;
  }
  return (
    <>
      [
      {value.items.map((item, i) => (
        <Fragment key={item}>
          <span className="text-lime-300">{`'${item}'`}</span>
          {i < value.items.length - 1 ? ", " : ""}
        </Fragment>
      ))}
      ]
    </>
  );
}

export function Hero() {
  const { t } = useLanguage();

  const codeLines: { key: string; value: CodeValue }[] = [
    { key: t.hero.code.name, value: { kind: "string", items: ["Marcus Vinicius"] } },
    {
      key: t.hero.code.focus,
      value: { kind: "array", items: ["web", "mobile", "backend"] },
    },
    {
      key: t.hero.code.frontend,
      value: { kind: "array", items: ["React", "React Native", "Next.js"] },
    },
    {
      key: t.hero.code.backend,
      value: { kind: "array", items: ["Node.js", "Python", "Kotlin"] },
    },
    {
      key: t.hero.code.databases,
      value: { kind: "array", items: ["PostgreSQL", "MongoDB"] },
    },
    { key: t.hero.code.years, value: { kind: "literal", items: ["4"] } },
    { key: t.hero.code.open, value: { kind: "literal", items: ["true"] } },
  ];

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 pt-28 pb-16 font-[family-name:var(--font-display)] md:gap-12 md:pt-0 md:pb-0 lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-11">
      {/* ===== Coluna esquerda ===== */}
      <div>
        {/* avatar + nome (mobile/contexto) */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.4 }}
          className="mb-6 flex items-center gap-3"
        >
          <Image
            width={44}
            height={44}
            alt="Marcus Vinicius"
            className="rounded-full ring-2 ring-white/10"
            src="/me.jpg"
          />
          <span className="font-mono text-xs tracking-[0.18em] text-zinc-400 uppercase">
            Marcus Vinicius
          </span>
        </motion.div>

        {/* título */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.45, delay: 0.12 }}
          className="text-4xl leading-[1.03] font-bold tracking-tight md:text-5xl lg:text-[3.4rem]"
        >
          {t.hero.titleA}
          <br />
          {t.hero.titleB}{" "}
          <span className="text-[#8aee14]">{t.hero.titleAccent}</span>
        </motion.h1>

        {/* tagline */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-5 max-w-[44ch] text-base leading-relaxed text-zinc-400 md:text-lg"
        >
          {t.hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.45, delay: 0.28 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#8aee14] px-5 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(138,238,20,0.4)]"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="/MARCUS_NONATO_CURRICULO.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:border-[#8aee14] hover:text-[#8aee14]"
          >
            {t.hero.ctaCv}
          </a>
        </motion.div>

      </div>

      {/* ===== Coluna direita: janela de código ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative"
      >
        <div className="animate-pulse-glow pointer-events-none absolute -inset-6 bg-[radial-gradient(circle_at_60%_40%,rgba(138,238,20,0.16),transparent_60%)] blur-xl" />
        <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-[#0c0c0f] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
          <div className="flex items-center gap-2 border-b border-zinc-800/80 bg-[#101013] px-3.5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#8aee14]" />
            <span className="font-mono text-xs text-zinc-500">marcus.ts</span>
          </div>
          <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.85] text-zinc-200">
            <code>
              <span className="text-zinc-600">1 </span>
              <span className="text-[#8aee14]">const</span> dev{" "}
              <span className="text-zinc-500">=</span> {"{"}
              {codeLines.map((line, i) => (
                <Fragment key={line.key}>
                  {"\n"}
                  <span className="text-zinc-600">{`${i + 2} `}</span>
                  {"  "}
                  {line.key}
                  <span className="text-zinc-500">:</span> {renderValue(line.value)},
                </Fragment>
              ))}
              {"\n"}
              <span className="text-zinc-600">{`${codeLines.length + 2} `}</span>
              {"}"}
              <span className="animate-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-[#8aee14]" />
            </code>
          </pre>
        </div>
      </motion.div>
    </div>
  );
}
