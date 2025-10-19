import MainProject from "../MainProject";
import MobileProjectCard from "../MobileProjectCard";

const mainProjects = [
  {
    id: "1",
    title: "SucessoAPP Landing",
    coverImage: "/sucesso-app.png",
    description:
      "Plataforma que conecta compositores e artistas, oferecendo licenciamento seguro, contratos automatizados, gestão de royalties e análises de streaming. Simplifica negociações e centraliza o gerenciamento de carreira musical.",
    note: "Somos uma startup com 6 desenvolvedores e 2 designers (em breve expandindo em +2) criando uma plataforma de entretenimento multimídia. A ideia nasceu da falta de um lugar inclusivo e completo para acompanhar tudo o que gostamos. De filmes a mangás.",
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
      "Moto Market é uma plataforma para concessionárias de motos, permitindo exibir inventário e conectar clientes diretamente aos vendedores via WhatsApp de forma rápida e prática. Construída com Next.js, Tailwind CSS, TypeScript, Prisma, Shadcn/UI e PostgreSQL.",
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
      "Site de e-commerce para restaurantes, similar ao iFood, onde usuários podem buscar restaurantes, adicionar comidas ao carrinho e finalizar pedidos. Construído com Next.js, Tailwind CSS, TypeScript, PostgreSQL, Prisma, Shadcn/UI e NextAuth.",
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
      className="top-0 flex h-full min-h-screen flex-col text-white"
    >
      <div className="hidden w-full flex-col justify-center lg:flex">
        {mainProjects.map((project, index) => (
          <MainProject
            project={project}
            key={project.id}
            inverse={index % 2 !== 0}
          />
        ))}
      </div>

      <div className="flex w-full flex-col px-4 py-8 lg:hidden">
        <div className="mb-8">
          <h2 className="mb-3 text-4xl font-bold text-white">Projetos</h2>
          <p className="text-lg text-gray-400">
            Confira meus trabalhos em destaque
          </p>
        </div>

        {mainProjects.map((project) => (
          <MobileProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
