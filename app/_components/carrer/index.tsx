"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useLenis } from "lenis/react";
import { useLanguage } from "@/app/_i18n/LanguageProvider";
import { SectionHeading } from "../ui/section-heading";
import { Tag } from "../ui/tag";

// vh de scroll reservado para cada experiência no modo pinado (desktop)
const SEGMENT_VH = 50;

const Carrer = () => {
  const { t } = useLanguage();
  const experiences = t.career.experiences;
  const sectionRef = useRef<HTMLElement>(null);
  const lenis = useLenis();
  const [active, setActive] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // No desktop, o scroll controla qual experiência está ativa
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (!isDesktop) return;
    const idx = Math.min(
      experiences.length - 1,
      Math.max(0, Math.floor(p * experiences.length)),
    );
    setActive(idx);
  });

  const handleSelect = (i: number) => {
    if (isDesktop && sectionRef.current) {
      // rola até o segmento correspondente da experiência clicada
      const section = sectionRef.current;
      const scrollRange = section.offsetHeight - window.innerHeight;
      const target =
        section.offsetTop + ((i + 0.5) / experiences.length) * scrollRange;
      if (lenis) lenis.scrollTo(target, { duration: 1 });
      else window.scrollTo({ top: target, behavior: "smooth" });
    } else {
      setActive(i);
    }
  };

  const currentExp = experiences[active];

  return (
    <section
      id="career"
      ref={sectionRef}
      aria-labelledby="career-title"
      className="bg-bg relative text-white"
      style={
        isDesktop
          ? { height: `${experiences.length * SEGMENT_VH + 100}vh` }
          : undefined
      }
    >
      <div className="relative flex flex-col justify-center overflow-hidden px-6 py-24 md:px-12 lg:sticky lg:top-0 lg:h-svh lg:px-36 lg:py-0">
        {/* indicador de progresso do scroll da seção (desktop) */}
        <div className="absolute inset-x-0 top-0 hidden h-1 bg-zinc-800/60 lg:block">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="bg-brand h-full w-full origin-left"
          />
        </div>

        <SectionHeading
          id="career-title"
          className="mb-10 lg:mb-12"
          eyebrow={t.career.eyebrow}
          ghost={t.career.ghost}
          title={t.career.heading}
          subtitle={t.career.subtitle}
        />

        <div className="flex w-full max-w-screen-2xl flex-col items-start justify-between gap-10 lg:flex-row-reverse lg:gap-20">
          <div className="flex w-full flex-col lg:w-auto lg:max-w-md lg:flex-1">
            <p
              id="career-list-label"
              className="font-label mb-4 text-sm tracking-[0.08em] text-zinc-400 uppercase md:text-base"
            >
              {t.career.listHeading}
            </p>

            <div
              role="tablist"
              aria-labelledby="career-list-label"
              aria-orientation="vertical"
              className="flex flex-col"
            >
              {experiences.map((experience, index) => {
                const selected = active === index;
                return (
                  <button
                    key={experience.title}
                    id={`career-tab-${index}`}
                    role="tab"
                    aria-selected={selected}
                    aria-controls="career-panel"
                    onClick={() => handleSelect(index)}
                    className={`relative cursor-pointer border-l-2 px-5 py-4 text-left transition-colors duration-200 ${
                      selected
                        ? "border-brand bg-surface-1"
                        : "border-white/15 hover:border-white/40"
                    }`}
                  >
                    <span
                      className={`flex flex-wrap items-center gap-2 text-base font-semibold transition-colors md:text-lg ${
                        selected ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {experience.title}
                      {experience.current && (
                        <CurrentBadge label={t.career.currentLabel} />
                      )}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-zinc-400">
                      {experience.date}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExp.title}
              id="career-panel"
              role="tabpanel"
              aria-labelledby={`career-tab-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex-1"
            >
              <div className="mb-5">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="m-0 text-2xl font-semibold text-white md:text-3xl">
                    {currentExp.title}
                  </h3>
                  {currentExp.current && (
                    <CurrentBadge label={t.career.currentLabel} />
                  )}
                </div>
                <span className="mt-2 flex items-center gap-2 text-base text-zinc-400">
                  <Calendar size={18} aria-hidden="true" />
                  {currentExp.date}
                </span>
              </div>

              <p className="mb-5 max-w-[65ch] text-base leading-[1.7] text-zinc-300 lg:text-lg">
                {currentExp.description}
              </p>

              {currentExp.highlights.length > 0 && (
                <ul className="mb-6 flex flex-col gap-2">
                  {currentExp.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-relaxed text-white"
                    >
                      <span
                        aria-hidden="true"
                        className="bg-brand mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {currentExp.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

/** Selo verde do cargo atual. */
function CurrentBadge({ label }: { label: string }) {
  return (
    <span className="border-brand/40 font-label text-brand inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs tracking-[0.08em] uppercase">
      <span aria-hidden="true" className="bg-brand h-1.5 w-1.5 rounded-full" />
      {label}
    </span>
  );
}

export default Carrer;
