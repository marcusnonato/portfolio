import MainProject from "../MainProject";

const mainProjects = [
  {
    id: "1",
    title: "SucessoAPP Landing",
    coverImage: "/sucesso-app.png",
    description:
      "A digital platform designed to professionalize the music industry by connecting composers and artists. It provides secure licensing, automated contracts, and transparent royalty management, while also offering analytics for streaming performance. The solution simplifies negotiations, ensures legal protection, and centralizes career management for music professionals.",
    note: "We are a startup with 6 developers and 2 designers (soon expanding by +2) creating a multimedia entertainment platform. The idea was born from the lack of an inclusive and complete place to track everything we enjoy. From movies to manga.",
    startDate: "2025-06",
    finishDate: "Present",
    repoLink: "https://admin.dev.sucessoapp.com/",
    demoLink: "https://admin.dev.sucessoapp.com/",

    images: ["/bruno-1.png", "/bruno-2.png", "/bruno-3.png", "/bruno-4.png"],
    createdAt: "2025-06-01",
    updatedAt: "2025-08-22",
    isInDevelopment: false,
  },
  {
    id: "2",
    title: "Moto Market",
    coverImage: "/moto-market.png",
    description:
      "Moto Market is a platform for motorcycle dealers, allowing them to display inventory and connect customers directly to sellers via WhatsApp quickly and practically. Built with Next.js, Tailwind CSS, TypeScript, Prisma, Shadcn/UI, and PostgreSQL.",
    startDate: "2024-01",
    finishDate: null,
    repoLink: "https://github.com/marcusnonato/Moto-market",
    demoLink: "https://moto-market-navy.vercel.app/",
    images: ["moto-1.png", "moto-2.png", "moto-3.png", "moto-4.png"],
    createdAt: "2024-01-01",
    updatedAt: "2024-12-01",
    isInDevelopment: false,
  },
  {
    id: "3",
    title: "FSW Foods",
    coverImage: "/fsw-foods.png",
    description:
      "Restaurant e-commerce website, similar to iFood, where users can search for restaurants, add food to cart, and complete their orders. Built with Next.js, Tailwind CSS, TypeScript, PostgreSQL, Prisma, Shadcn/UI, and NextAuth.",
    startDate: "2024-01",
    finishDate: null,
    repoLink: "https://github.com/marcusnonato/FSW-Foods",
    demoLink: "https://marcus-fsw-foods.vercel.app/",
    images: ["fsw-1.png", "fsw-2.png", "fsw-3.png", "fsw-4.png"],
    createdAt: "2024-01-01",
    updatedAt: "2024-12-01",
    isInDevelopment: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex h-full min-h-screen flex-col text-white"
    >
      <div className="flex w-full flex-col justify-center">
        {mainProjects.map((project, index) => (
          <MainProject
            project={project}
            key={project.id}
            inverse={index % 2 !== 0}
          />
        ))}

        {/* <div className="mt-16 min-h-screen">
          <div className="animate-fade-up mb-16 px-4 md:px-8 lg:px-36">
            <h2 className="mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Side Projects
            </h2>
            <p className="text-lg text-gray-400">
              Other projects throughout my career
            </p>
          </div>
          <CarouselContainer2 />
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
