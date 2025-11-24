import Image from "next/image";

const logos = [
  { src: "/reactlogo.png", name: "React" },
  { src: "/nodejs.png", name: "Node.js" },
  { src: "/typescriptlogo.png", name: "TypeScript" },
  { src: "/javascriptlogo.png", name: "JavaScript" },
  { src: "/expressjs.png", name: "Express.js" },
  { src: "/nextjs.png", name: "Next.js" },
  { src: "/postgre.png", name: "PostgreSQL" },
  { src: "/prismalogo.png", name: "Prisma" },
  { src: "/tailwindcss.png", name: "Tailwind CSS" },
  { src: "/styled-c.png", name: "Styled Components" },
];

export const TechSlider = () => {
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative bottom-0 z-0 w-full overflow-hidden py-10 select-none">
      <div className="animate-tech-scroll flex gap-8">
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl p-3 opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100"
          >
            <Image
              src={logo.src}
              alt={`Logo ${logo.name}`}
              width={80}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
