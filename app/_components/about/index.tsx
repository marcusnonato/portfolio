"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { SectionHeading } from "../ui/section-heading";
import { useLanguage } from "@/app/_i18n/LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <div
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8"
    >
      <SectionHeading
        align="center"
        eyebrow={t.about.eyebrow}
        ghost={t.about.watermark}
        title={t.about.heading}
      />
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
