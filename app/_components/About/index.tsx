import Image from "next/image";
import { motion } from "motion/react";

export function About() {
  return (
    <div id="about" className="mt-20 flex flex-col items-center px-4 md:px-8">
      <motion.h1
        initial={{ transform: "translateY(20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-2xl font-bold md:text-4xl"
      >
        ABOUT
      </motion.h1>
      <motion.p
        initial={{ transform: "translateY(20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 text-center text-2xl font-semibold md:text-5xl"
      >
        Passion, Creativity and Code
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
            <span className="font-bold">
              Com 2 anos de experiência e forte especialização em React.js,
              React Native, Node.js e
            </span>
            <br />
            <span className="font-bold"> Kotlin com Spring Boot</span>, eu uno o
            desenvolvimento de interfaces modernas com
            <br />
            uma arquitetura de back-end de alta performance para criar soluções
            digitais
            <br />
            completas e escaláveis. Sou especialista na construção de interfaces
            modernas,
            <br />
            responsivas e em APIs RESTful de alto desempenho.
          </motion.span>
          <br />
          <br />
          <motion.span
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.27 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Meu foco nas melhores práticas de otimização, segurança e
            escalabilidade me permite
            <br />
            transformar ideias em aplicações robustas e performáticas, tanto
            para web quanto para mobile.
          </motion.span>
          <br />
          <br />
          <motion.span
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Combinando uma integração eficiente entre front-end e back-end
            <br />
            com um sólido domínio em modelagem de bancos de dados, entrego
            soluções
            <br />
            alinhadas às melhores práticas do mercado. Vamos colaborar para
            <br />
            construir algo excepcional.
          </motion.span>
        </div>
      </div>
    </div>
  );
}
