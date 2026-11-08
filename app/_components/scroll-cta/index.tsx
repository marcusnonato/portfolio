"use client";

import { easeInOut, motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionSafe } from "../ui/use-reduced-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/app/_i18n/LanguageProvider";
import { buttonVariants } from "../ui/button";

const DARK = [9, 9, 11]; // --bg
const LIGHT = [255, 255, 255];
const DARK_HEX = "#09090b";
const LIGHT_HEX = "#ffffff";

const mixChannel = (from: number, to: number, t: number) =>
  Math.round(from + (to - from) * t);

const mixRgb = (t: number) => DARK.map((c, i) => mixChannel(c, LIGHT[i], t));

// luminância relativa (WCAG 2.x)
const luminance = ([r, g, b]: number[]) => {
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};

/*
 * Abaixo de L≈0.179 o branco tem mais contraste que o preto; acima, o contrário.
 * Trocar a cor do texto exatamente nesse ponto garante ≥ 4.5:1 em todo frame
 * da transição (o pior caso, no ponto de troca, fica em ~4.6:1).
 */
const textFor = (t: number) =>
  luminance(mixRgb(t)) > 0.179 ? DARK_HEX : LIGHT_HEX;

const giant =
  "text-center text-5xl leading-[1.05] font-bold tracking-tight uppercase select-none md:text-7xl lg:text-[8.5rem]";

export function ScrollCta() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const reduceMotion = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 0 = fundo escuro, 1 = fundo branco
  const level = useTransform(scrollYProgress, [0, 0.35], [0, 1], {
    ease: easeInOut,
  });
  const backgroundColor = useTransform(
    level,
    (v) => `rgb(${mixRgb(v).join(" ")})`,
  );
  const text1Color = useTransform(level, textFor);

  /*
   * As frases trocam por "cortina" (clip-path) em vez de fade: o texto nunca
   * fica semitransparente, então o contraste se mantém em todos os frames.
   */
  const out1 = useTransform(scrollYProgress, [0.32, 0.42], [0, 100], {
    ease: easeInOut,
  });
  const in2 = useTransform(scrollYProgress, [0.4, 0.5], [100, 0], {
    ease: easeInOut,
  });
  const out2 = useTransform(scrollYProgress, [0.6, 0.68], [0, 100], {
    ease: easeInOut,
  });
  const in3 = useTransform(scrollYProgress, [0.66, 0.76], [100, 0], {
    ease: easeInOut,
  });

  // 1: "QUER TRANSFORMAR IDEIAS?" — sai recolhendo para cima
  const clip1 = useTransform(out1, (v) => `inset(0 0 ${v}% 0)`);
  const y1 = useTransform(out1, [0, 100], [0, -40]);
  // 2: "CONHEÇA MEUS TRABALHOS E" — entra de baixo e sai para cima
  const clip2 = useTransform(
    [in2, out2] as const,
    ([a, b]: number[]) => `inset(${a}% 0 ${b}% 0)`,
  );
  const y2 = useTransform(
    [in2, out2] as const,
    ([a, b]: number[]) => a * 0.4 - b * 0.4,
  );
  // 3: "TRANSFORME EM REALIDADE!" + CTA
  const clip3 = useTransform(in3, (v) => `inset(${v}% 0 -40px 0)`);
  const y3 = useTransform(in3, [100, 0], [40, 0]);
  const ctaVisibility = useTransform(in3, (v) =>
    v < 95 ? "visible" : "hidden",
  );

  const finalFrame = (
    <>
      <p aria-hidden="true" className={giant}>
        {t.scrollCta.text3}
      </p>
      <a
        href="#projects"
        className={`${buttonVariants({ variant: "inverse" })} mt-10`}
      >
        {t.scrollCta.cta}
        <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      </a>
    </>
  );

  // versão estática: só o quadro final, sem scroll longo
  if (reduceMotion) {
    return (
      <div
        ref={ref}
        className="text-bg flex min-h-svh w-full flex-col items-center justify-center bg-white px-4 py-24"
      >
        {finalFrame}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor }}
      className="relative h-[220vh] w-full"
    >
      <div className="sticky top-0 grid h-svh place-items-center overflow-hidden px-4">
        <motion.p
          aria-hidden="true"
          style={{ clipPath: clip1, y: y1, color: text1Color }}
          className={`${giant} [grid-area:1/1]`}
        >
          {t.scrollCta.text1}
        </motion.p>

        <motion.p
          aria-hidden="true"
          style={{ clipPath: clip2, y: y2 }}
          className={`${giant} text-bg [grid-area:1/1]`}
        >
          {t.scrollCta.text2[0]}
          <br /> {t.scrollCta.text2[1]}
        </motion.p>

        <motion.div
          style={{ clipPath: clip3, y: y3, visibility: ctaVisibility }}
          className="text-bg flex flex-col items-center [grid-area:1/1]"
        >
          {finalFrame}
        </motion.div>
      </div>
    </motion.div>
  );
}
