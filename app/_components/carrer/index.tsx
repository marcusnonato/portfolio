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

// vh de scroll reservado para cada experiência no modo pinado (desktop)
const SEGMENT_VH = 100;

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
        section.offsetTop +
        ((i + 0.5) / experiences.length) * scrollRange;
      if (lenis) lenis.scrollTo(target, { duration: 1 });
      else window.scrollTo({ top: target, behavior: "smooth" });
    } else {
      setActive(i);
    }
  };

  const currentExp = experiences[active];

  return (
    <section
      id="carrer"
      ref={sectionRef}
      className="relative bg-zinc-950 text-white"
      style={isDesktop ? { height: `${experiences.length * SEGMENT_VH}vh` } : undefined}
    >
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-36 pb-16 lg:sticky lg:top-0 lg:h-screen lg:px-36 lg:pt-0 lg:pb-0">
        {/* indicador de progresso do scroll da seção (desktop) */}
        <div className="absolute inset-x-0 top-0 hidden h-1 bg-zinc-800/60 lg:block">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full w-full origin-left bg-[#8aee14]"
          />
        </div>

        <div className="mb-10 lg:mb-14">
          <motion.h2
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.7 }}
            className="mb-2 text-5xl font-bold text-white md:text-6xl"
          >
            {t.career.heading}
          </motion.h2>
          <motion.p
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, amount: 0.7 }}
            className="m-0 text-xl text-white"
          >
            {t.career.subtitle}
          </motion.p>
        </div>

        <div className="flex w-full max-w-screen-2xl flex-col items-start justify-between gap-14 lg:flex-row lg:gap-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <div className="mb-6 flex items-center gap-5">
                <div>
                  <h3 className="m-0 text-3xl font-semibold text-white md:text-4xl">
                    {currentExp.title}
                  </h3>
                  <span className="mt-2 flex items-center gap-2 text-lg text-gray-400">
                    <Calendar size={20} />
                    {currentExp.date}
                  </span>
                </div>
              </div>

              <p className="mb-8 text-lg leading-relaxed text-gray-200 md:text-xl">
                {currentExp.description}
              </p>

              {currentExp.tags && (
                <div className="flex flex-wrap gap-3">
                  {currentExp.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="origin-bottom rounded-xl border border-b-4 px-4 py-2 text-base font-medium text-white transition-all duration-300 select-none hover:scale-y-95 hover:border-b-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex w-full flex-1 flex-col lg:w-auto">
            <h3 className="mb-5 text-2xl font-semibold text-white md:text-3xl">
              {t.career.listHeading}
            </h3>

            {experiences.map((experience, index) => (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                className={`relative cursor-pointer overflow-hidden border-l px-6 py-6 text-left transition-all duration-500 ${
                  active === index
                    ? "border-[#8aee14] bg-gradient-to-br from-transparent to-gray-600/10"
                    : "border-gray-400/40 bg-transparent hover:border-gray-300/70"
                }`}
              >
                <div className="mb-3 flex items-center gap-4">
                  <h4
                    className={`m-0 text-lg font-semibold transition-colors md:text-xl ${
                      active === index ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {experience.title}
                  </h4>
                </div>
                <span className="text-sm font-medium text-gray-400">
                  {experience.date}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carrer;
