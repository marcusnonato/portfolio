import { Code2, SquareDashedMousePointer } from "lucide-react";
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

interface MobileProjectCardProps {
  project: MainProjectProps;
}

export default function MobileProjectCard({ project }: MobileProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-xl"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.coverImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>

        <p className="mb-6 text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>

        <div className="flex flex-col gap-3">
          {project.demoLink ? (
            <a
              href={project.demoLink}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-4 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-white/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SquareDashedMousePointer size={18} />
              View Demo
            </a>
          ) : (
            <span className="flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border-2 border-zinc-700 bg-zinc-800 px-4 py-3 text-sm font-medium text-zinc-400 opacity-70">
              <SquareDashedMousePointer size={18} />
              No Demo Available
            </span>
          )}

          <a
            href={project.repoLink}
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-white px-4 py-3 font-semibold text-white transition-all hover:bg-white hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code2 size={18} />
            Repository
          </a>
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-2">
            {project.images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className="relative h-24 overflow-hidden rounded-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
