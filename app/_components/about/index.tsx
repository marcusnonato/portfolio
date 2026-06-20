"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "@/app/_i18n/LanguageProvider";

export function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-200px", "-70px"]);
  const xMobile = useTransform(scrollYProgress, [0, 1], ["-70px", "0px"]);

  return (
    <div
      ref={ref}
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8"
    >
      <motion.h1
        style={{
          x,
        }}
        className="-mb-28 hidden text-3xl font-bold text-white/5 md:block md:text-[10rem]"
      >
        {t.about.watermark}
      </motion.h1>
      <motion.h1
        style={{
          x: xMobile,
        }}
        className="-mb-8 block text-7xl font-bold text-white/5 md:hidden md:text-[10rem]"
      >
        {t.about.watermark}
      </motion.h1>
      <motion.p
        initial={{ transform: "translateY(20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 text-center text-3xl font-semibold md:text-6xl"
      >
        {t.about.heading}
      </motion.p>
      <div className="mt-12 flex flex-col items-center justify-center gap-8 md:mt-32 md:flex-row md:gap-18">
        <motion.div
          initial={{ transform: "scale(0)", opacity: 0 }}
          whileInView={{ transform: "scale(1)", opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative h-64 w-64 overflow-hidden rounded-2xl md:h-96 md:w-96"
        >
          <Image fill src="/me-pixel.png" alt="About Image" />
        </motion.div>
        <div className="max-w-xl text-lg leading-8 font-light text-white md:text-xl">
          <motion.span
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {t.about.intro}
            <br />
            <br />
            <span className="font-bold">{t.about.bold}</span>{" "}
            {t.about.afterBold}
            <br />
            <br />
            {t.about.outro}
          </motion.span>
        </div>
      </div>
    </div>
  );
}
