"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowUpRight, LayoutPanelLeft, Lock } from "lucide-react";
import MediaGallery from "../media-gallery";
import { Tag } from "../ui/tag";
import { buttonVariants } from "../ui/button";
import { revealProps } from "../ui/reveal";
import { MainProjectProps } from "@/app/_types";
import { useLanguage } from "@/app/_i18n/LanguageProvider";
import { blurFor } from "@/app/_lib/blur-data";
import { cn } from "@/app/_lib/utils";
import { projectStack } from "../projects/stack";

interface FeaturedProjectProps {
  project: MainProjectProps;
  /** posição do projeto na lista completa (1-based) */
  position: number;
  total: number;
  inverse?: boolean;
  onOpenCaseStudy: () => void;
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Projeto em destaque: card em tela cheia que empilha (sticky) sobre o anterior. */
export default function FeaturedProject({
  project,
  position,
  total,
  inverse,
  onOpenCaseStudy,
}: FeaturedProjectProps) {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  // No mobile o card pode ser mais alto que a tela: ele só "gruda" quando a
  // base encosta no rodapé (top negativo), assim nada fica escondido sob o próximo.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      el.style.setProperty("--card-h", `${entry.borderBoxSize[0].blockSize}px`);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const caseStudy = t.projects.caseStudies[project.id];
  const highlights = t.projects.highlights[project.id] ?? [];
  const stack = projectStack(project).slice(0, 5);

  return (
    <motion.article
      ref={ref}
      style={{ scale: reduceMotion ? 1 : scale }}
      aria-labelledby={`project-${project.id}`}
      className="border-line bg-bg sticky top-[min(1rem,calc(100svh-var(--card-h,0px)-5rem))] mx-4 mb-6 overflow-hidden rounded-2xl border md:mx-12 lg:top-0 lg:mx-0 lg:mb-0 lg:flex lg:h-svh lg:items-center lg:rounded-none lg:border-0"
    >
      {/* screenshot de fundo (desktop) + overlay escuro consistente para contraste AA */}
      <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
        <Image
          src={project.coverImage}
          alt=""
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurFor(project.coverImage)}
          className="scale-105 object-cover object-top blur-sm"
        />
        <div
          className={cn(
            "from-bg/95 via-bg/85 to-bg/60 absolute inset-0",
            inverse ? "bg-gradient-to-l" : "bg-gradient-to-r",
          )}
        />
      </div>

      {/* capa 16:10 (mobile/tablet) */}
      <div className="relative aspect-[16/9] w-full lg:hidden">
        <Image
          src={project.coverImage}
          alt=""
          fill
          sizes="(min-width: 768px) 90vw, 100vw"
          placeholder="blur"
          blurDataURL={blurFor(project.coverImage)}
          className="object-cover object-top"
        />
        <div className="from-bg absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      <div
        className={cn(
          "relative flex w-full flex-col gap-10 px-5 pt-2 pb-6 lg:gap-16 lg:px-36 lg:py-24",
          inverse ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <div className="flex flex-1 flex-col">
          <motion.p
            {...revealProps(0)}
            className="font-label text-sm tracking-[0.08em] text-zinc-400 uppercase md:text-base"
          >
            {pad(position)} / {pad(total)}
          </motion.p>
          <motion.h3
            {...revealProps(1)}
            id={`project-${project.id}`}
            className="mt-2 text-3xl font-semibold tracking-tight text-white lg:text-5xl"
          >
            {project.title}
          </motion.h3>
          {caseStudy?.subtitle && (
            <motion.p
              {...revealProps(2)}
              className="mt-3 text-base text-zinc-300 lg:text-xl"
            >
              {caseStudy.subtitle}
            </motion.p>
          )}

          {highlights.length > 0 && (
            <motion.dl
              {...revealProps(3)}
              className="mt-5 flex max-w-xl flex-col gap-3 lg:mt-8 lg:gap-4"
            >
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  // no mobile a stack já aparece nas tags
                  className={cn(
                    "border-line border-l-2 pl-4",
                    i === 1 && "hidden lg:block",
                  )}
                >
                  <dt className="font-label text-xs tracking-[0.08em] text-zinc-400 uppercase lg:text-sm">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-zinc-200 lg:text-base">
                    {item.text}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}

          <motion.div
            {...revealProps(4)}
            className="mt-5 flex flex-wrap gap-2 lg:mt-8"
          >
            {stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </motion.div>

          <motion.div
            {...revealProps(5)}
            className="mt-6 flex flex-wrap items-center gap-4 lg:mt-10"
          >
            <button
              type="button"
              onClick={onOpenCaseStudy}
              className={buttonVariants({ variant: "primary" })}
            >
              <LayoutPanelLeft size={16} />
              {t.projects.viewCaseStudy}
            </button>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "ghost" })}
              >
                {t.projects.viewSite}
                <ArrowUpRight size={16} />
              </a>
            )}
            {!project.repoLink && (
              <span className="inline-flex items-center gap-1.5 text-sm text-zinc-400">
                <Lock size={14} aria-hidden="true" />
                {t.projects.privateRepo}
              </span>
            )}
          </motion.div>
        </div>

        <div className="hidden flex-1 lg:block">
          <MediaGallery images={project.images} />
        </div>
      </div>
    </motion.article>
  );
}
