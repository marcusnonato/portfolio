import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function ScrollCta() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.5, 0.66, 1],
    ["#ffffff", "#000000", "#000000", "#000000", "#ffffff"],
  );

  const lastTextColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.5, 0.66, 1],
    ["#ffffff", "#000000", "#000000", "#000000", "#09090b"],
  );

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.7, 1],
    ["#09090b", "#ffffff", "#ffffff", "#09090b"],
    { ease: easeInOut },
  );

  // Texto 1: "QUER TRANSFORMAR IDEIAS?"
  const text1Opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.33],
    [1, 1, 0, 0],
  );
  const text1Scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.33],
    [1, 1, 0.8, 0.8],
  );

  // Texto 2: "TIRE DO PAPEL"
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.5, 0.58],
    [0, 1, 1, 0],
  );
  const text2Scale = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.5, 0.58],
    [0.8, 1, 1, 0.8],
  );

  // Texto 3: "TRANSFORME EM REALIDADE!"
  const text3Opacity = useTransform(
    scrollYProgress,
    [0.58, 0.66, 1],
    [0, 1, 1],
  );
  const text3Scale = useTransform(
    scrollYProgress,
    [0.58, 0.66, 0.8, 1],
    [0, 1, 1, 100],
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Scroll:", latest);
  });

  return (
    <motion.div
      ref={ref}
      style={{ backgroundColor: backgroundColor }}
      className="relative min-h-[calc(100vh*3)] w-full"
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center overflow-hidden">
        <div className="relative">
          <motion.h1
            style={{
              opacity: text1Opacity,
              scale: text1Scale,
              color: textColor as any,
            }}
            className="absolute inset-0 flex select-none items-center justify-center text-center text-5xl font-bold md:text-7xl lg:text-[9rem]"
          >
            QUER TRANSFORMAR IDEIAS?
          </motion.h1>

          <motion.h1
            style={{
              opacity: text2Opacity,
              scale: text2Scale,
              color: textColor as any,
            }}
            className="absolute inset-0 flex select-none items-center justify-center text-center text-4xl font-bold md:text-6xl lg:text-[8rem]"
          >
            CONHEÇA MEUS
            <br /> TRABALHOS E
          </motion.h1>

          <motion.div className="relative">
            <motion.h1
              style={{
                opacity: text3Opacity,
                scale: text3Scale,
                color: lastTextColor as any,
              }}
              className="select-none text-center text-5xl font-bold md:text-7xl lg:text-[9rem]"
            >
              TRANSFORME EM REALIDADE!
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
