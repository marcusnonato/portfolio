import { useState } from "react";
import { Calendar, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const Carrer = () => {
  const experiences = [
    {
      title: "Full Stack Developer - Sucesso.APP",
      description:
        "Full stack developer working with Next.js and Kotlin/Springboot. Participated in the development of a musical marketplace platform. Integration with SQL/NoSQL databases. Complete refactoring of the site from Angular to NextJS. Working in an agile environment.",
      date: "Jan 2025 - Present",
      highlight: "Full Stack",
      tags: [
        "Next.js",
        "TypeScript",
        "Kotlin",
        "Spring Boot",
        "SQL",
        "PostgreSQL",
        "Docker",
      ],
    },
    {
      title: "Web/Mobile Dev Intern - Feira da Tecnologia e Inovação",
      description:
        "Creation of Smarteduca website/app. Parental management application. Developed using React, React Native, Vite, NextJS and Firebase to create innovative solutions in the educational area.",
      date: "Jun 2024 - Nov 2024",
      highlight: "Mobile",
      tags: ["React", "React Native", "Vite", "Next.js", "Firebase"],
    },
    {
      title: "Web/Mobile Dev Intern - Uninorte",
      description:
        "Creation of web and mobile prototype made in Figma. Creation of the structure and base architecture of the project (HTML, CSS and JavaScript for web). Android Studio for Mobile App development.",
      date: "Aug 2023 - Dec 2023",
      highlight: "Mobile",
      tags: ["HTML", "CSS", "JavaScript", "Android Studio", "Figma"],
    },
  ];

  const [currentExperience, setCurrentExperience] = useState<string>(
    experiences[0].description,
  );
  const currentExp = experiences.find(
    (exp) => exp.description === currentExperience,
  );

  return (
    <section
      id="carrer"
      className="relative flex min-h-screen flex-col overflow-hidden bg-zinc-950 px-4 pt-36 text-white lg:px-36 lg:pt-36 [&>*]:relative [&>*]:z-30"
    >
      <div className="mb-15">
        <motion.h2
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.7 }}
          className="mb-2 text-5xl font-bold text-white md:text-3xl"
        >
          Career
        </motion.h2>
        <motion.p
          initial={{ transform: "translateY(20px)", opacity: 0 }}
          whileInView={{ transform: "translateY(0)", opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, amount: 0.7 }}
          className="m-0 text-lg text-white"
        >
          Full Stack & Mobile Developer
        </motion.p>
      </div>

      <div className="flex w-full max-w-screen-2xl flex-col items-start justify-between gap-20 lg:flex-row lg:gap-20">
        {currentExp && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentExp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex-1"
            >
              <div className="mb-8 flex items-center gap-5">
                <div>
                  <motion.h3
                    initial={{ transform: "translateY(20px)", opacity: 0 }}
                    whileInView={{ transform: "translateY(0)", opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.7 }}
                    className="m-0 text-3xl font-semibold text-white"
                  >
                    {currentExp.title}
                  </motion.h3>
                  <motion.span
                    initial={{ transform: "translateY(20px)", opacity: 0 }}
                    whileInView={{ transform: "translateY(0)", opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.7 }}
                    className="mt-2 flex items-center gap-2 text-base text-gray-400"
                  >
                    <Calendar size={20} />
                    {currentExp.date}
                  </motion.span>
                </div>
              </div>

              <motion.p
                initial={{ transform: "translateY(13px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0)", opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.34 }}
                viewport={{ once: true, amount: 0.7 }}
                className="mb-8 text-xl leading-relaxed text-gray-200"
              >
                {currentExperience}
              </motion.p>

              {currentExp.tags && (
                <div className="mb-10 flex flex-wrap gap-3">
                  {currentExp.tags.map((tag, index) => (
                    <motion.span
                      initial={{ transform: "translateY(20px)", opacity: 0 }}
                      whileInView={{ transform: "translateY(0)", opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
                      viewport={{ once: true, amount: 0.7 }}
                      key={index}
                      className="origin-bottom rounded-xl border border-b-4 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-y-95 hover:border-b-2"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
        <div className="flex flex-1 flex-col">
          <h3 className="mb-5 text-2xl font-semibold text-white">
            Experiences
          </h3>

          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => setCurrentExperience(experience.description)}
              className={`relative cursor-pointer overflow-hidden border-l-2 px-6 py-6 transition-all duration-500 before:absolute before:top-0 before:left-0 before:h-full before:w-0.5 before:transition-all before:duration-500 before:content-[''] ${
                currentExperience === experience.description
                  ? "border-l border-white bg-gradient-to-br from-transparent to-gray-600/10"
                  : "border-l border-gray-400/40 bg-transparent"
              }`}
            >
              <div className="mb-4 flex items-center gap-4">
                <h4 className="m-0 text-lg font-semibold text-white">
                  {experience.title}
                </h4>
              </div>
              <span className="text-xs font-medium text-gray-300">
                {experience.date.split(" - ")[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carrer;
