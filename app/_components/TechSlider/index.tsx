const logos = [
  "/reactlogo.png",
  "/nodejs.png",
  "/typescriptlogo.png",
  "/javascriptlogo.png",
  "/expressjs.png",
  "/nextjs.png",
  "/postgre.png",
  "/prismalogo.png",
  "/tailwindcss.png",
  "/styled-c.png",
];

export const TechSlider = () => {
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative bottom-0 z-0 w-full overflow-hidden py-10 select-none">
      <div className="animate-tech-scroll flex gap-8">
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-20 flex-shrink-0 items-center justify-center rounded-xl bg-gray-200 p-3 opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100"
          >
            <img
              src={logo}
              alt={`tech-logo-${index}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
