import Image from "next/image";
import { motion } from "motion/react";

export function About() {
  return (
    <div
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8"
    >
      <motion.h1
        initial={{ transform: "translateY(20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-2xl font-bold md:text-4xl"
      >
        SOBRE
      </motion.h1>
      <motion.p
        initial={{ transform: "translateY(20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 text-center text-2xl font-semibold md:text-5xl"
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
        <div className="max-w-xl text-base leading-7 font-light text-white md:text-lg">
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
