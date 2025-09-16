import Image from "next/image";
import { motion } from "motion/react";

export function About() {
  return (
    <div id="about" className="mt-20 flex flex-col items-center">
      <motion.h1
        initial={{ transform: "translateY(20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl font-bold"
      >
        ABOUT
      </motion.h1>
      <motion.p
        initial={{ transform: "translateY(20px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0)", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="mt-4 text-5xl font-semibold"
      >
        Passion, Creativity and Code
      </motion.p>
      <div className="mt-32 flex items-center justify-center gap-18">
        <motion.div
          initial={{ transform: "scale(0)", opacity: 0 }}
          whileInView={{ transform: "scale(1)", opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative h-96 w-96 overflow-hidden rounded-2xl"
        >
          <Image fill src="/me-pixel.png" alt="About Image" />
        </motion.div>
        <p className="max-w-xl text-lg leading-7 font-light text-white">
          <motion.span
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Hi, I'm Marcus Nonato—a Fullstack and Mobile Developer from Brazil.
            <br />
            <span className="font-bold">
              With 2 years of experience and strong specialization in React.js,
              React Native, Node.js, and
            </span>
            <br />
            <span className="font-bold"> Kotlin with Spring Boot</span>, I blend
            modern interface development with
            <br />
            high-performance back-end architecture to craft complete and
            scalable
            <br />
            digital solutions. I specialize in building modern, responsive
            <br />
            interfaces and high-performance RESTful APIs.
          </motion.span>
          <br />
          <br />
          <motion.span
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.27 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            My focus on best practices for optimization, security, and
            scalability allows me to
            <br />
            transform ideas into robust and performant applications for both web
            and mobile.
          </motion.span>
          <br />
          <br />
          <motion.span
            initial={{ transform: "translateY(20px)", opacity: 0 }}
            whileInView={{ transform: "translateY(0)", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            By combining efficient front-end and back-end integration
            <br />
            with a strong command of database modeling, I deliver solutions
            <br />
            aligned with the best practices in the market. Let's collaborate to
            <br />
            build something exceptional.
          </motion.span>
        </p>
      </div>
    </div>
  );
}
