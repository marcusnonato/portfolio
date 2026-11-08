import { useCallback, useEffect, useRef, useState } from "react";
import { Tag } from "../ui/tag";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";
import ImageLightbox from "../image-lightbox";
import { MainProjectProps } from "@/app/_types";
import { useLanguage } from "@/app/_i18n/LanguageProvider";

interface CaseStudyModalProps {
  project: MainProjectProps;
  onClose: () => void;
}

interface SelectedScreen {
  src: string;
  alt: string;
}

const FOCUSABLE = "a[href], button:not([disabled])";

export default function CaseStudyModal({
  project,
  onClose,
}: CaseStudyModalProps) {
  const { t } = useLanguage();
  const content = t.projects.caseStudies[project.id];
  const sections = project.caseStudy?.sections ?? [];

  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [selected, setSelected] = useState<SelectedScreen | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closeLightbox = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    if (selected) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable =
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, selected]);

  const active = sections.find((section) => section.id === activeId);
  if (!content || !active) return null;

  const activeContent = content.sections[active.id];
  const isPortrait = active.orientation === "portrait";

  const changeSection = (id: string) => {
    setActiveId(id);
    galleryRef.current?.scrollTo({ top: 0 });
  };

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      data-lenis-prevent
      className="scrollbar-dark fixed inset-0 z-[2147483640] animate-[fadeIn_0.3s_ease] overflow-y-auto bg-zinc-950 text-white lg:overflow-hidden"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={t.projects.closeCaseStudy}
        className="fixed top-3 right-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-zinc-900 text-white transition-colors hover:bg-zinc-700"
      >
        <X size={18} />
      </button>

      <div className="flex min-h-full flex-col lg:h-full lg:flex-row">
        <aside className="w-full shrink-0 border-zinc-800 px-6 pt-16 pb-6 lg:h-full lg:w-[400px] lg:overflow-y-auto lg:border-r lg:p-10 xl:w-[440px]">
          <h2 id="case-study-title" className="text-3xl font-bold lg:text-4xl">
            {project.title}
          </h2>
          <p className="mt-3 text-lg leading-snug text-zinc-300">
            {content.subtitle}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {content.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/25 px-3 py-1 text-xs font-semibold tracking-wide uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>

          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border-2 border-white px-4 py-2 font-semibold transition-colors hover:bg-white hover:text-black"
            >
              <ExternalLink size={16} />
              {t.projects.viewSite}
            </a>
          )}

          <h3 className="mt-8 text-xl font-bold">{t.projects.overview}</h3>
          <p className="mt-2 leading-relaxed text-zinc-300">
            {content.overview}
          </p>

          <h3 className="mt-8 text-xl font-bold">{t.projects.keyFeatures}</h3>
          <ul className="mt-2 space-y-3">
            {content.features.map((feature) => (
              <li key={feature.title} className="leading-relaxed text-zinc-300">
                <strong className="font-semibold text-white">
                  {feature.title}:
                </strong>{" "}
                {feature.text}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-400">
            {content.note}
          </p>
        </aside>

        <div
          ref={galleryRef}
          className="min-w-0 flex-1 lg:h-full lg:overflow-y-auto"
        >
          <div className="sticky top-0 z-10 flex gap-2 overflow-x-auto bg-zinc-950/95 py-3 pr-16 pl-6 backdrop-blur lg:pl-10">
            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                aria-pressed={section.id === active.id}
                onClick={() => changeSection(section.id)}
                className={`shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  section.id === active.id
                    ? "border-white bg-white text-black"
                    : "border-white/25 text-white hover:border-white/60"
                }`}
              >
                {content.sections[section.id].label}
              </button>
            ))}
          </div>

          <div className="px-6 pt-4 pb-10 lg:px-10">
            <p className="max-w-3xl leading-relaxed text-zinc-300">
              {activeContent.summary}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {active.stack.map((tech) => (
                <li key={tech}>
                  <Tag className="px-2.5 text-xs">{tech}</Tag>
                </li>
              ))}
            </ul>

            <div
              className={`mt-8 grid gap-x-6 gap-y-8 ${
                isPortrait
                  ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1 xl:grid-cols-2"
              }`}
            >
              {active.screens.map((screen, index) => {
                const caption = activeContent.captions[index];

                return (
                  <figure key={screen}>
                    <button
                      type="button"
                      aria-label={caption}
                      onClick={() => setSelected({ src: screen, alt: caption })}
                      className={`relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-white/10 transition-transform duration-300 hover:scale-[0.98] ${
                        isPortrait
                          ? "aspect-[810/1818]"
                          : active.orientation === "wide"
                            ? "aspect-[2/1]"
                            : "aspect-[3/2]"
                      }`}
                    >
                      <Image
                        src={screen}
                        alt={caption}
                        fill
                        sizes={
                          isPortrait
                            ? "(max-width: 768px) 50vw, 25vw"
                            : "(max-width: 1280px) 100vw, 40vw"
                        }
                        className="object-cover"
                      />
                    </button>
                    <figcaption className="mt-3 text-center text-sm text-zinc-300">
                      {caption}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {selected && (
        <ImageLightbox
          src={selected.src}
          alt={selected.alt}
          onClose={closeLightbox}
        />
      )}
    </div>,
    document.body,
  );
}
