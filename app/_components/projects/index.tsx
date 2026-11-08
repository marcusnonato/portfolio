"use client";

import { useState } from "react";
import CaseStudyModal from "../case-study-modal";
import FeaturedProject from "../featured-project";
import ProjectCard from "../project-card";
import { SectionHeading } from "../ui/section-heading";
import { useLanguage } from "@/app/_i18n/LanguageProvider";
import { MainProjectProps } from "@/app/_types";

const mainProjects: MainProjectProps[] = [
  {
    id: "1",
    title: "SucessoAPP",
    coverImage: "/sucesso-landing-1.png",
    description:
      "Marketplace musical que conecta compositores, artistas, editoras e gravadoras para licenciar músicas inéditas. Como full stack, com mais de 1.400 commits, construí no backend (Kotlin e Spring Boot) as APIs de guias, audições, playlists colaborativas, editoras, assinaturas e do BI gerencial, e no front (Next.js e React Query) o painel administrativo, o Gerencial de Gravadoras, o checkout de licenças e planos com Pix e as landing pages de captação.",
    note: "Startup de tecnologia para o mercado da música, com times de web, backend, Android e iOS.",
    startDate: "2024-01",
    finishDate: "2026-01",
    repoLink: null,
    demoLink: "https://sucessoapp.com",

    images: [
      "/sucesso-landing-1.png",
      "/sucesso-landing-2.png",
      "/sucesso-landing-3.png",
      "/sucesso-landing-4.png",
    ],
    createdAt: "2025-06-01",
    updatedAt: "2025-08-22",
    isInDevelopment: false,
    caseStudy: {
      sections: [
        {
          id: "landing",
          orientation: "landscape",
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          screens: [
            "/sucesso-landing-1.png",
            "/sucesso-landing-2.png",
            "/sucesso-landing-3.png",
            "/sucesso-landing-4.png",
          ],
        },
        {
          id: "arquitetura",
          orientation: "landscape",
          stack: [
            "Kotlin",
            "Spring Boot",
            "PostgreSQL",
            "Kafka",
            "Redis",
            "Elasticsearch",
            "Next.js",
            "TanStack Query",
          ],
          screens: ["/sucesso-arquitetura.png"],
        },
      ],
    },
  },
  {
    id: "8",
    title: "Uni-Snack",
    coverImage: "/unisnack-cover.png",
    description:
      "TCC usando a Uninorte como exemplo de instituição: um sistema que une a cantina à rotina acadêmica. O aluno pede e paga pelo app, a cantina recebe o pedido em tempo real e o aluno acompanha o preparo até retirar com um código. Inclui painéis web para cantina, professores e coordenação, além de previsão de demanda. Construído com NestJS, PostgreSQL, Socket.IO, Expo, React Native e Next.js.",
    startDate: "2026-04",
    finishDate: null,
    repoLink: null,
    demoLink: null,
    images: [
      "/unisnack-app-home.png",
      "/unisnack-cantina-1.png",
      "/unisnack-cantina-3.png",
      "/unisnack-academico-2.png",
    ],
    createdAt: "2026-04-16",
    updatedAt: "2026-11-06",
    isInDevelopment: false,
    caseStudy: {
      sections: [
        {
          id: "app",
          orientation: "portrait",
          stack: [
            "Expo",
            "React Native",
            "Expo Router",
            "TanStack Query",
            "Socket.IO",
          ],
          screens: [
            "/unisnack-app-1.png",
            "/unisnack-app-2.png",
            "/unisnack-app-3.png",
            "/unisnack-app-4.png",
            "/unisnack-app-5.png",
            "/unisnack-app-6.png",
            "/unisnack-app-7.png",
            "/unisnack-app-8.png",
            "/unisnack-app-9.png",
            "/unisnack-app-10.png",
            "/unisnack-app-11.png",
            "/unisnack-app-12.png",
            "/unisnack-app-13.png",
            "/unisnack-app-14.png",
            "/unisnack-app-15.png",
          ],
        },
        {
          id: "cantina",
          orientation: "landscape",
          stack: ["Next.js", "React", "Tailwind CSS", "Recharts", "Socket.IO"],
          screens: [
            "/unisnack-cantina-1.png",
            "/unisnack-cantina-2.png",
            "/unisnack-cantina-3.png",
            "/unisnack-cantina-4.png",
            "/unisnack-cantina-5.png",
          ],
        },
        {
          id: "academico",
          orientation: "landscape",
          stack: ["Next.js", "React", "Tailwind CSS", "Base UI", "Tiptap"],
          screens: [
            "/unisnack-academico-1.png",
            "/unisnack-academico-2.png",
            "/unisnack-academico-3.png",
            "/unisnack-academico-4.png",
            "/unisnack-academico-5.png",
          ],
        },
        {
          id: "api",
          orientation: "landscape",
          stack: [
            "NestJS",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Socket.IO",
            "JWT",
            "AbacatePay",
            "Swagger",
          ],
          screens: ["/unisnack-api-1.png", "/unisnack-api-2.png"],
        },
      ],
    },
  },
  {
    id: "7",
    title: "Cardápio",
    coverImage: "/pedidos-loja-1.png",
    description:
      "Plataforma SaaS multi-loja para restaurantes e confeitarias. Cada loja ganha um subdomínio próprio com cardápio digital, checkout com Pix (AbacatePay) e entrega com CEP automático, além de um painel com Balcão (PDV), cozinha em tempo real, estoque, histórico, fechamento de caixa e previsão de produção. Conta com dois planos (Cardápio e Completo) e um console de Super Admin com auditoria. Construída com Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Better Auth, Tailwind CSS, Shadcn/UI e Vercel Blob.",
    startDate: "2025-12",
    finishDate: "Present",
    repoLink: null,
    demoLink: "https://mundo-doce.pedidos.marcusnonato.app",
    images: [
      "/pedidos-loja-1.png",
      "/pedidos-painel-1.png",
      "/pedidos-painel-2.png",
      "/pedidos-admin-1.png",
    ],
    createdAt: "2025-12-15",
    updatedAt: "2026-11-02",
    isInDevelopment: false,
    caseStudy: {
      sections: [
        {
          id: "loja",
          orientation: "wide",
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          screens: ["/pedidos-loja-1.png", "/pedidos-loja-2.png"],
        },
        {
          id: "painel",
          orientation: "landscape",
          stack: ["Next.js", "Prisma", "PostgreSQL", "Better Auth", "Recharts"],
          screens: [
            "/pedidos-painel-1.png",
            "/pedidos-painel-2.png",
            "/pedidos-painel-3.png",
          ],
        },
        {
          id: "admin",
          orientation: "landscape",
          stack: ["Next.js", "Prisma", "PostgreSQL"],
          screens: ["/pedidos-admin-1.png", "/pedidos-admin-2.png"],
        },
      ],
    },
  },
  {
    id: "3",
    title: "FSW Foods",
    coverImage: "/fsw-foods.png",
    description:
      "Site de e-commerce para restaurantes, similar ao iFood, onde usuários podem buscar restaurantes, adicionar comidas ao carrinho e finalizar pedidos. Construído com Next.js, Tailwind CSS, TypeScript, PostgreSQL, Prisma, Shadcn/UI e NextAuth.",
    startDate: "2024-01",
    finishDate: null,
    repoLink: null,
    demoLink: "https://marcus-fsw-foods.vercel.app/",
    images: ["/fsw-1.png", "/fsw-2.png", "/fsw-3.png", "/fsw-4.png"],
    createdAt: "2024-01-01",
    updatedAt: "2024-12-01",
    isInDevelopment: false,
    caseStudy: {
      sections: [
        {
          id: "restaurantes",
          orientation: "landscape",
          stack: ["Next.js", "React", "Tailwind CSS", "Shadcn/UI"],
          screens: ["/fsw-5.png", "/fsw-6.png", "/fsw-7.png"],
        },
        {
          id: "pedido",
          orientation: "landscape",
          stack: ["Prisma", "PostgreSQL", "NextAuth", "Stripe"],
          screens: ["/fsw-8.png", "/fsw-9.png"],
        },
      ],
    },
  },
  {
    id: "4",
    title: "MV Barber",
    coverImage: "/mvbarber-cover.png",
    description:
      "App de agendamento para barbearias: o cliente busca por barbearia ou serviço, escolhe o dia e um horário livre e recebe a reserva como um cartão de horário. Tem avaliações reais depois do atendimento, cancelamento, horários que somem quando alguém reserva e ações protegidas pela sessão no servidor. Construído com Next.js 16, TypeScript, Prisma, PostgreSQL, NextAuth (Google), Tailwind CSS e Shadcn/UI.",
    startDate: "2024-01",
    finishDate: null,
    repoLink: null,
    demoLink: "https://mv-barber-blond.vercel.app/",
    images: [
      "/mvbarber-1.png",
      "/mvbarber-2.png",
      "/mvbarber-3.png",
      "/mvbarber-4.png",
    ],
    createdAt: "2024-01-01",
    updatedAt: "2024-12-01",
    isInDevelopment: false,
    caseStudy: {
      sections: [
        {
          id: "descoberta",
          orientation: "landscape",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
          screens: ["/mvbarber-5.png", "/mvbarber-1.png", "/mvbarber-6.png"],
        },
        {
          id: "agendamento",
          orientation: "landscape",
          stack: ["Prisma", "PostgreSQL", "NextAuth"],
          screens: ["/mvbarber-2.png", "/mvbarber-3.png", "/mvbarber-4.png"],
        },
      ],
    },
  },
  {
    id: "5",
    title: "BEWEAR",
    coverImage: "/bewear-cover.png",
    description:
      "E-commerce de roupas de moda e streetwear, onde usuários podem buscar produtos, adicionar ao carrinho e finalizar pedidos. Construído com Next.js, Tailwind CSS, TypeScript, PostgreSQL, Drizzle, Shadcn/UI e Better Auth.",
    startDate: "2024-01",
    finishDate: null,
    repoLink: null,
    demoLink: "https://bewear-brown.vercel.app/",
    images: [
      "/bewear-1.png",
      "/bewear-2.png",
      "/bewear-3.png",
      "/bewear-4.png",
    ],
    createdAt: "2024-01-01",
    updatedAt: "2024-12-01",
    isInDevelopment: false,
    caseStudy: {
      sections: [
        {
          id: "vitrine",
          orientation: "landscape",
          stack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
          screens: ["/bewear-5.png", "/bewear-6.png", "/bewear-1.png"],
        },
        {
          id: "compra",
          orientation: "landscape",
          stack: [
            "Drizzle",
            "PostgreSQL",
            "Better Auth",
            "Stripe",
            "TanStack Query",
          ],
          screens: ["/bewear-2.png", "/bewear-3.png", "/bewear-4.png"],
        },
      ],
    },
  },
  {
    id: "6",
    title: "Finance AI",
    coverImage: "/financeai-cover.png",
    description:
      "App de finanças pessoais que fecha o mês como um extrato: mostra quanto sobrou, uma régua dividida entre o que foi gasto, investido e guardado, e para onde foi o dinheiro por categoria. O extrato é agrupado por dia, com filtros por tipo, categoria e busca, e dá para navegar mês a mês. No Premium, a IA (GPT) lê o mês e aponta onde dá para economizar. O plano grátis tem limite de 10 lançamentos por mês e a assinatura é pelo Stripe. Construído com Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Clerk, Stripe e AI SDK.",
    startDate: "2024-01",
    finishDate: null,
    repoLink: null,
    demoLink: "https://finance-ai-beta-five.vercel.app/",
    images: [
      "/financeai-1.png",
      "/financeai-2.png",
      "/financeai-3.png",
      "/financeai-4.png",
    ],
    createdAt: "2024-01-01",
    updatedAt: "2024-12-01",
    isInDevelopment: false,
    caseStudy: {
      sections: [
        {
          id: "resumo",
          orientation: "landscape",
          stack: ["Next.js", "React", "Tailwind CSS", "AI SDK"],
          screens: ["/financeai-1.png", "/financeai-2.png"],
        },
        {
          id: "extrato",
          orientation: "landscape",
          stack: ["Prisma", "PostgreSQL", "Clerk", "Stripe"],
          screens: ["/financeai-3.png", "/financeai-4.png"],
        },
      ],
    },
  },
  {
    id: "2",
    title: "Moto Market",
    coverImage: "/motomarket-cover.png",
    description:
      "Vitrine para lojas de motos multimarcas: cada modelo tem página própria com ficha técnica, foto e plaqueta com cilindrada, preço e parcela. Tem simulador de financiamento que manda a simulação pelo WhatsApp, filtros por categoria e marca, busca, ordenação e comparação lado a lado de até 3 motos. Construída com Next.js 16, React 19, TypeScript, Prisma, PostgreSQL e Tailwind CSS.",
    startDate: "2024-01",
    finishDate: null,
    repoLink: null,
    demoLink: "https://moto-market-navy.vercel.app/",
    images: [
      "/motomarket-1.png",
      "/motomarket-2.png",
      "/motomarket-3.png",
      "/motomarket-4.png",
    ],
    createdAt: "2024-01-01",
    updatedAt: "2024-12-01",
    isInDevelopment: false,
    caseStudy: {
      sections: [
        {
          id: "catalogo",
          orientation: "landscape",
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
          screens: [
            "/motomarket-5.png",
            "/motomarket-1.png",
            "/motomarket-4.png",
          ],
        },
        {
          id: "modelo",
          orientation: "landscape",
          stack: ["Prisma", "PostgreSQL"],
          screens: [
            "/motomarket-6.png",
            "/motomarket-2.png",
            "/motomarket-3.png",
          ],
        },
      ],
    },
  },
];

// produção real e maior impacto: ganham o stacking em tela cheia
const FEATURED_IDS = ["1", "7"];

const Projects = () => {
  const { t } = useLanguage();
  const [caseStudyId, setCaseStudyId] = useState<string | null>(null);

  const localizedProjects = mainProjects.map((project) => ({
    ...project,
    description: t.projects.descriptions[project.id] ?? project.description,
  }));

  // destaques primeiro, depois a grade, numerados nessa ordem
  const featured = FEATURED_IDS.map(
    (id) => localizedProjects.find((project) => project.id === id)!,
  );
  const others = localizedProjects.filter(
    (project) => !FEATURED_IDS.includes(project.id),
  );
  const total = localizedProjects.length;

  const caseStudyProject = localizedProjects.find(
    (project) => project.id === caseStudyId,
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-bg relative rounded-t-[2.5rem] text-white lg:rounded-t-[5rem]"
    >
      <div className="px-6 pt-24 pb-12 md:px-12 lg:px-36 lg:pt-32 lg:pb-16">
        <SectionHeading
          id="projects-title"
          eyebrow={t.projects.eyebrow}
          ghost={t.projects.ghost}
          title={t.projects.heading}
          subtitle={t.projects.subtitle}
        />
      </div>

      {/* destaques empilhados (sticky) — uma única lista, adaptada por CSS */}
      <div>
        {featured.map((project, index) => (
          <FeaturedProject
            key={project.id}
            project={project}
            position={index + 1}
            total={total}
            inverse={index % 2 !== 0}
            onOpenCaseStudy={() => setCaseStudyId(project.id)}
          />
        ))}
      </div>

      <div className="bg-bg relative grid gap-6 px-6 pt-12 pb-24 md:grid-cols-2 md:px-12 lg:grid-cols-3 lg:px-36 lg:pt-24 lg:pb-32">
        {others.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            position={featured.length + index + 1}
            total={total}
            index={index % 3}
            onOpenCaseStudy={() => setCaseStudyId(project.id)}
          />
        ))}
      </div>

      {caseStudyProject && (
        <CaseStudyModal
          project={caseStudyProject}
          onClose={() => setCaseStudyId(null)}
        />
      )}
    </section>
  );
};

export default Projects;
