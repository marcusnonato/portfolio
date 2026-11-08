"use client";

import Image from "next/image";
import { useLanguage } from "@/app/_i18n/LanguageProvider";

const logos = [
  { src: "/react-logo.svg", name: "React" },
  { src: "/nodejs.svg", name: "Node.js" },
  { src: "/typescript-logo.svg", name: "TypeScript" },
  { src: "/javascript-logo.svg", name: "JavaScript" },
  { src: "/express.svg", name: "Express.js" },
  { src: "/nextjs.svg", name: "Next.js" },
  { src: "/postgresql-xxl.png", name: "PostgreSQL" },
  { src: "/prism.png", name: "Prisma" },
  { src: "/spring.svg", name: "Spring Boot" },
  { src: "/java.svg", name: "Java" },
  { src: "/kotlin.svg", name: "Kotlin" },
  { src: "/tailwind_css.png", name: "Tailwind CSS" },
  { src: "/styled-components-svgrepo-com.svg", name: "Styled Components" },
];

export const TechSlider = () => {
  const { t } = useLanguage();
  // 3 cópias para o loop contínuo; só a primeira é lida por leitores de tela
  const copies = [0, 1, 2];

  return (
    <div className="group border-line relative z-10 w-full overflow-hidden border-t py-6 select-none md:py-8">
      <p className="sr-only">
        {t.hero.techStack}: {logos.map((logo) => logo.name).join(", ")}
      </p>
      <div
        aria-hidden="true"
        className="animate-tech-scroll flex w-max gap-8 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {copies.map((copy) =>
          logos.map((logo) => (
            <div
              key={`${copy}-${logo.src}`}
              title={logo.name}
              className="flex h-14 w-14 flex-shrink-0 items-center justify-center p-3 opacity-60 transition-opacity duration-300 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt=""
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
};
