"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";

const NAME = "MARCUS VINICIUS";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const lenis = useLenis();

  // trava o scroll enquanto a intro roda
  useEffect(() => {
    document.body.style.overflow = "hidden";
    lenis?.stop();

    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [lenis]);

  // libera o scroll quando a intro termina e faz a "subida" de entrada
  useEffect(() => {
    if (!loading) {
      document.body.style.overflow = "";
      lenis?.start();

      // começa um pouco para baixo e sobe rápido junto com a cortina abrindo
      if (lenis) {
        lenis.scrollTo(800, { immediate: true });
        lenis.scrollTo(0, {
          duration: 1.3,
          easing: (t: number) => 1 - Math.pow(1 - t, 4),
        });
      } else {
        window.scrollTo(0, 800);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [loading, lenis]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-zinc-950"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* nome aparecendo letra por letra */}
          <div className="flex font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[0.35em] text-white md:text-4xl">
            {NAME.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{
                  opacity: char === " " ? 0 : 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25 + i * 0.06,
                  ease: "easeOut",
                }}
                className={char === " " ? "inline-block w-3 md:w-5" : ""}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </div>

          {/* barra de loading verde */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-[#8aee14]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.9, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
