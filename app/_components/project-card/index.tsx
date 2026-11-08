"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Tag } from "../ui/tag";
import { revealProps } from "../ui/reveal";
import { MainProjectProps } from "@/app/_types";
import { useLanguage } from "@/app/_i18n/LanguageProvider";
import { blurFor } from "@/app/_lib/blur-data";
import { projectStack } from "../projects/stack";

interface ProjectCardProps {
  project: MainProjectProps;
  position: number;
  total: number;
  /** posição na grade, para o stagger */
  index: number;
  onOpenCaseStudy: () => void;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Card compacto da grade de projetos. O card inteiro abre o estudo de caso. */
export default function ProjectCard({
  project,
  position,
  total,
  index,
  onOpenCaseStudy,
}: ProjectCardProps) {
  const { t } = useLanguage();
  const subtitle = t.projects.caseStudies[project.id]?.subtitle;
  const stack = projectStack(project).slice(0, 4);

  return (
    <motion.article
      {...revealProps(index)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-1 transition-[translate,border-color] duration-300 ease-out focus-within:border-brand/40 hover:-translate-y-1 hover:border-brand/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.coverImage}
          alt=""
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          placeholder="blur"
          blurDataURL={blurFor(project.coverImage)}
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-label text-sm tracking-[0.08em] text-zinc-400 uppercase">
          {pad(position)} / {pad(total)}
        </p>
        <h3 className="mt-1 text-xl font-semibold text-white">
          {/* o ::after estende a área clicável para o card inteiro */}
          <button
            type="button"
            onClick={onOpenCaseStudy}
            aria-label={`${project.title} — ${t.projects.viewCaseStudy}`}
            className="cursor-pointer text-left after:absolute after:inset-0 after:content-['']"
          >
            {project.title}
          </button>
        </h3>
        {subtitle && (
          <p className="mt-1 line-clamp-1 text-sm text-zinc-400">{subtitle}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Tag key={tech} className="px-2.5 text-xs">
              {tech}
            </Tag>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-5 text-sm">
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1.5 font-semibold text-white"
          >
            {t.projects.viewCaseStudy}
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-white"
            >
              {t.projects.viewSite}
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
