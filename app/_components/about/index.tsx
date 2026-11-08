"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "../ui/section-heading";
import { revealProps } from "../ui/reveal";
import { useLanguage } from "@/app/_i18n/LanguageProvider";

/** "**React**" -> tecnologia em branco; o resto herda o zinc-400 do parágrafo. */
function Highlighted({ text }: { text: string }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-white">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="flex flex-col items-center px-6 py-24 md:px-12 lg:px-36 lg:py-32"
    >
      <SectionHeading
        id="about-title"
        align="center"
        eyebrow={t.about.eyebrow}
        ghost={t.about.watermark}
        title={t.about.heading}
      />

      <div className="mt-14 flex flex-col items-center gap-10 md:mt-20 md:flex-row md:items-center md:gap-16">
        <motion.div
          {...revealProps(0)}
          className="relative h-64 w-64 shrink-0 overflow-hidden rounded-2xl md:h-96 md:w-96"
        >
          <Image
            fill
            src="/me-pixel.png"
            alt={t.about.imageAlt}
            sizes="(min-width: 768px) 384px, 256px"
            className="[image-rendering:pixelated]"
          />
        </motion.div>

        <div className="max-w-[65ch]">
          {t.about.paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              {...revealProps(i + 1)}
              className="mb-5 text-lg leading-[1.7] text-zinc-400 first:text-white"
            >
              <Highlighted text={paragraph} />
            </motion.p>
          ))}

          <motion.a
            {...revealProps(t.about.paragraphs.length + 1)}
            href="#contact"
            className="group mt-3 inline-flex items-center gap-2 text-base font-semibold text-white underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-brand"
          >
            {t.about.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
