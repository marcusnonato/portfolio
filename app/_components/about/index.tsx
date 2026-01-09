"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
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
        SOBRE MIM
      </motion.h1>
      <motion.h1
        style={{
          x: xMobile,
        }}
        className="-mb-8 block text-7xl font-bold text-white/5 md:hidden md:text-[10rem]"
      >
        SOBRE MIM
      </motion.h1>
      <motion.p
        initial={{ transform: "translateY(20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 text-center text-3xl font-semibold md:text-6xl"
      >
        Paixão, Criatividade e Código
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
            Olá, sou Marcus Vinicius — Desenvolvedor Fullstack e Mobile do
            Brasil.
            <br />
            <br />
            <span className="font-bold">
              Com 2 anos de experiência, sou especializado em React.js, React
              Native, Node.js e Kotlin com Spring Boot.
            </span>{" "}
            Construo interfaces modernas e responsivas integradas com
            arquiteturas de back-end escaláveis e APIs RESTful de alto
            desempenho.
            <br />
            <br />
            Meu foco em otimização, segurança e boas práticas me permite
            transformar ideias em aplicações robustas. Pronto para criar seu
            próximo projeto de sucesso?
          </motion.span>
        </div>
      </div>
    </div>
  );
}
