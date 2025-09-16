import { Code2, SquareDashedMousePointer } from "lucide-react";
import MediaGallery from "../MediaGallery";
import { motion } from "motion/react";

interface MainProjectProps {
  id: string;
  title: string;
  coverImage: string;
  description: string;
  note?: string;
  startDate: string;
  finishDate?: string | null;
  repoLink: string;
  demoLink?: string | null;
  images: string[];
  createdAt: string;
  updatedAt: string;
  isInDevelopment?: boolean;
}

interface MainProps {
  project: MainProjectProps;
  inverse?: Boolean;
}

export default function MainProject({ project, inverse }: MainProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-950 to-black px-4 py-16 text-white shadow-[0_10px_25px_rgba(0,0,0,0.7)] before:pointer-events-none before:absolute before:-top-px before:left-0 before:z-20 before:h-36 before:w-full before:bg-gradient-to-t before:from-transparent before:to-black before:content-[''] lg:px-36 lg:pt-36 lg:before:z-0">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-top opacity-40 blur-sm"
        style={{ backgroundImage: `url(${project.coverImage})` }}
      />

      <div
        className={`relative z-0 flex h-full flex-col items-center justify-center gap-8 ${inverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:gap-12`}
      >
        <div className="flex w-full flex-1 flex-col lg:w-1/2">
          <div
            className={`mb-4 flex items-start ${inverse ? "justify-end" : ""} gap-1`}
          >
            <motion.h1
              initial={{ transform: "translateY(20px)", opacity: 0 }}
              whileInView={{ transform: "translateY(0)", opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-3xl font-bold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.8)] lg:text-5xl"
            >
              {project.title}
            </motion.h1>
          </div>

          {project.description && (
            <motion.p
              initial={{ transform: "translateY(20px)", opacity: 0 }}
              whileInView={{ transform: "translateY(0)", opacity: 1.2 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              className={`mb-6 max-w-2xl ${inverse ? "self-end text-end" : ""} text-xl leading-relaxed text-gray-300`}
            >
              {project.description}
            </motion.p>
          )}

          <div
            className={`mt-6 flex w-fit flex-col gap-2 ${inverse ? "self-end" : ""} sm:flex-row`}
          >
            {project.demoLink ? (
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.7 }}
                href={project.demoLink}
                className="inline-flex origin-bottom items-center justify-center rounded-2xl border-2 border-b-8 border-white px-6 py-3 font-semibold text-white transition-all duration-150 hover:scale-y-95 hover:border-b-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SquareDashedMousePointer size={18} />
                Demonstration
              </motion.a>
            ) : (
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.7 }}
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-gray-400 opacity-70"
              >
                <SquareDashedMousePointer size={18} />
                No Demonstration
              </motion.span>
            )}

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.9 }}
              href={project.repoLink}
              className="inline-flex origin-bottom items-center justify-center rounded-2xl border-2 border-b-8 border-white px-6 py-3 font-semibold text-white transition-all duration-150 hover:scale-y-95 hover:border-b-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code2 size={18} />
              Repository
            </motion.a>
          </div>

          <div
            className={`mt-6 flex flex-col ${inverse ? "self-end" : ""} text-xs text-gray-500 md:flex-row md:justify-between`}
          >
            <span>Recent project created +2 months ago</span>
          </div>
        </div>

        <div className="w-full flex-1 lg:w-1/2">
          <MediaGallery images={project.images} />
        </div>
      </div>
    </section>
  );
}
