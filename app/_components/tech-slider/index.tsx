import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative bottom-0 z-0 w-full overflow-hidden py-10 select-none">
      <div className="animate-tech-scroll flex gap-8">
        {repeatedLogos.map((logo, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <div
                key={`${logo.src}-${index}`}
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl p-3 opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={`Logo ${logo.name}`}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold">{logo.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
