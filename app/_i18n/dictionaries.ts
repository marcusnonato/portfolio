export type Locale = "pt" | "en";

export interface Experience {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    projects: string;
    social: string;
  };
  hero: {
    titleA: string;
    titleB: string;
    titleAccent: string;
    tagline: string;
    ctaProjects: string;
    ctaCv: string;
    code: {
      name: string;
      focus: string;
      frontend: string;
      backend: string;
      databases: string;
      years: string;
      open: string;
    };
  };
  about: {
    watermark: string;
    heading: string;
    intro: string;
    bold: string;
    afterBold: string;
    outro: string;
  };
  career: {
    heading: string;
    subtitle: string;
    listHeading: string;
    experiences: Experience[];
  };
  projects: {
    heading: string;
    subtitle: string;
    viewDemo: string;
    viewCode: string;
    demoUnavailable: string;
    descriptions: Record<string, string>;
  };
  social: {
    heading: string;
    subtitle: string;
    githubDesc: string;
    linkedinDesc: string;
    whatsappDesc: string;
  };
  scrollCta: {
    text1: string;
    text2: [string, string];
    text3: string;
  };
  footer: {
    rights: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  pt: {
    nav: {
      home: "Home",
      about: "Sobre",
      projects: "Projetos",
      social: "Redes Sociais",
    },
    hero: {
      titleA: "Desenvolvedor",
      titleB: "Full Stack",
      titleAccent: "& Mobile",
      tagline:
        "Construo interfaces rápidas e back-ends que escalam — do React Native ao Spring Boot. 4 anos transformando ideia em produto.",
      ctaProjects: "Ver projetos →",
      ctaCv: "Baixar CV",
      code: {
        name: "nome",
        focus: "foco",
        frontend: "frontend",
        backend: "backend",
        databases: "bancos",
        years: "anos",
        open: "aberto",
      },
    },
    about: {
      watermark: "SOBRE MIM",
      heading: "Paixão, Criatividade e Código",
      intro:
        "Olá, sou Marcus Vinicius — Desenvolvedor Fullstack e Mobile do Brasil.",
      bold: "Com 4 anos de experiência, sou especializado em React.js, React Native, Node.js e Kotlin com Spring Boot.",
      afterBold:
        "Construo interfaces modernas e responsivas integradas com arquiteturas de back-end escaláveis e APIs RESTful de alto desempenho.",
      outro:
        "Meu foco em otimização, segurança e boas práticas me permite transformar ideias em aplicações robustas. Pronto para criar seu próximo projeto de sucesso?",
    },
    career: {
      heading: "Carreira",
      subtitle: "Desenvolvedor Full Stack & Mobile",
      listHeading: "Experiências Profissionais",
      experiences: [
        {
          title: "Desenvolvedor de Software - Sidia",
          description:
            "Desenvolvimento full stack de aplicações web internas com ReactJS no front-end e Python com FastAPI no back-end, otimizando fluxos de trabalho corporativos. Criação de scripts de automação em Python para diferentes setores, reduzindo tarefas manuais. Integração de sistemas com bancos de dados SQL e NoSQL, garantindo escalabilidade e alta performance.",
          date: "Jan 2026 - Atualmente",
          tags: ["ReactJS", "Python", "FastAPI", "Automação", "SQL", "NoSQL"],
        },
        {
          title: "Desenvolvedor de Software - Sucesso.APP",
          description:
            "Construção de uma plataforma de marketplace musical escalável e de alta performance, atuando no front-end com Next.js e TypeScript e no back-end com Kotlin e Spring Boot. Liderança técnica na migração completa da aplicação web de Angular para Next.js, resultando em ganhos expressivos de velocidade, estrutura de código e manutenibilidade. Modelagem e integração de sistemas com PostgreSQL utilizando Prisma como ORM, garantindo transações seguras e arquitetura limpa.",
          date: "Jan 2024 - Jan 2026",
          tags: [
            "Next.js",
            "TypeScript",
            "Kotlin",
            "Spring Boot",
            "PostgreSQL",
            "Prisma",
            "Docker",
          ],
        },
        {
          title: "Estagiário Dev Web/Mobile - Feira da Tecnologia e Inovação",
          description:
            "Criação do ecossistema Smarteduca, desenvolvendo do zero uma solução completa de gestão parental tanto para ambiente web quanto para dispositivos móveis. Atuação no front-end com React.js (Vite e Next.js) para interfaces web rápidas e responsivas, além de React Native para o app mobile. Implementação e consumo de serviços na nuvem com Firebase para banco de dados em tempo real, autenticação e regras de negócio.",
          date: "Jun 2024 - Nov 2024",
          tags: ["React", "React Native", "Vite", "Next.js", "Firebase"],
        },
        {
          title: "Estagiário Dev Web/Mobile - Uninorte",
          description:
            "Criação de protótipo web e mobile feito no Figma. Criação da estrutura e arquitetura base do projeto (HTML, CSS e JavaScript para web). Android Studio para desenvolvimento de App Mobile.",
          date: "Ago 2023 - Dez 2023",
          tags: ["HTML", "CSS", "JavaScript", "Android Studio", "Figma"],
        },
      ],
    },
    projects: {
      heading: "Projetos",
      subtitle: "Confira meus trabalhos em destaque",
      viewDemo: "Ver Demo",
      viewCode: "Ver código",
      demoUnavailable: "Demo Indisponível",
      descriptions: {
        "1": "Marketplace musical que conecta compositores, artistas, editoras e gravadoras para licenciar músicas inéditas. Como full stack, com mais de 1.400 commits, construí no backend (Kotlin e Spring Boot) as APIs de guias, audições, playlists colaborativas, editoras, assinaturas e do BI gerencial, e no front (Next.js e React Query) o painel administrativo, o Gerencial de Gravadoras, o checkout de licenças e planos com Pix e as landing pages de captação.",
        "7": "Plataforma SaaS multi-loja para restaurantes e confeitarias. Cada loja ganha um subdomínio próprio com cardápio digital, checkout com Pix (AbacatePay) e entrega com CEP automático, além de um painel com Balcão (PDV), cozinha em tempo real, estoque, histórico, fechamento de caixa e previsão de produção. Conta com dois planos (Cardápio e Completo) e um console de Super Admin com auditoria. Construída com Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Better Auth, Tailwind CSS, Shadcn/UI e Vercel Blob.",
        "3": "Site de e-commerce para restaurantes, similar ao iFood, onde usuários podem buscar restaurantes, adicionar comidas ao carrinho e finalizar pedidos. Construído com Next.js, Tailwind CSS, TypeScript, PostgreSQL, Prisma, Shadcn/UI e NextAuth.",
        "4": "App de agendamento para barbearias: o cliente busca por barbearia ou serviço, escolhe o dia e um horário livre e recebe a reserva como um cartão de horário. Tem avaliações reais depois do atendimento, cancelamento, horários que somem quando alguém reserva e ações protegidas pela sessão no servidor. Construído com Next.js 16, TypeScript, Prisma, PostgreSQL, NextAuth (Google), Tailwind CSS e Shadcn/UI.",
        "5": "E-commerce de roupas de moda e streetwear, onde usuários podem buscar produtos, adicionar ao carrinho e finalizar pedidos. Construído com Next.js, Tailwind CSS, TypeScript, PostgreSQL, Drizzle, Shadcn/UI e Better Auth.",
        "6": "App de finanças pessoais que fecha o mês como um extrato: mostra quanto sobrou, uma régua dividida entre o que foi gasto, investido e guardado, e para onde foi o dinheiro por categoria. O extrato é agrupado por dia, com filtros por tipo, categoria e busca, e dá para navegar mês a mês. No Premium, a IA (GPT) lê o mês e aponta onde dá para economizar. O plano grátis tem limite de 10 lançamentos por mês e a assinatura é pelo Stripe. Construído com Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Clerk, Stripe e AI SDK.",
        "2": "Vitrine para lojas de motos multimarcas: cada modelo tem página própria com ficha técnica, foto e plaqueta com cilindrada, preço e parcela. Tem simulador de financiamento que manda a simulação pelo WhatsApp, filtros por categoria e marca, busca, ordenação e comparação lado a lado de até 3 motos. Construída com Next.js 16, React 19, TypeScript, Prisma, PostgreSQL e Tailwind CSS.",
      },
    },
    social: {
      heading: "Redes Sociais",
      subtitle: "Encontre-me nas redes sociais e acompanhe meu trabalho",
      githubDesc: "Meus projetos e código",
      linkedinDesc: "Carreira e networking",
      whatsappDesc: "Converse diretamente comigo!",
    },
    scrollCta: {
      text1: "QUER TRANSFORMAR IDEIAS?",
      text2: ["CONHEÇA MEUS", "TRABALHOS E"],
      text3: "TRANSFORME EM REALIDADE!",
    },
    footer: {
      rights: "© 2025 Marcus Nonato. Desenvolvedor Full Stack & Mobile",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      social: "Social",
    },
    hero: {
      titleA: "Full Stack",
      titleB: "& Mobile",
      titleAccent: "Developer",
      tagline:
        "I build fast interfaces and back-ends that scale — from React Native to Spring Boot. 4 years turning ideas into products.",
      ctaProjects: "View projects →",
      ctaCv: "Download CV",
      code: {
        name: "name",
        focus: "focus",
        frontend: "frontend",
        backend: "backend",
        databases: "databases",
        years: "years",
        open: "open",
      },
    },
    about: {
      watermark: "ABOUT ME",
      heading: "Passion, Creativity and Code",
      intro:
        "Hi, I'm Marcus Vinicius — a Fullstack and Mobile Developer from Brazil.",
      bold: "With 4 years of experience, I specialize in React.js, React Native, Node.js and Kotlin with Spring Boot.",
      afterBold:
        "I build modern, responsive interfaces integrated with scalable back-end architectures and high-performance RESTful APIs.",
      outro:
        "My focus on optimization, security and best practices lets me turn ideas into robust applications. Ready to build your next successful project?",
    },
    career: {
      heading: "Career",
      subtitle: "Full Stack & Mobile Developer",
      listHeading: "Professional Experience",
      experiences: [
        {
          title: "Software Developer - Sidia",
          description:
            "Full stack development of internal web applications with ReactJS on the front-end and Python with FastAPI on the back-end, optimizing corporate workflows. Built Python automation scripts for different departments, reducing manual tasks. Integrated systems with SQL and NoSQL databases, ensuring scalability and high performance.",
          date: "Jan 2026 - Present",
          tags: ["ReactJS", "Python", "FastAPI", "Automation", "SQL", "NoSQL"],
        },
        {
          title: "Software Developer - Sucesso.APP",
          description:
            "Built a scalable, high-performance music marketplace platform, working on the front-end with Next.js and TypeScript and on the back-end with Kotlin and Spring Boot. Technical lead on the full migration of the web app from Angular to Next.js, resulting in major gains in speed, code structure and maintainability. Modeled and integrated systems with PostgreSQL using Prisma as ORM, ensuring secure transactions and clean architecture.",
          date: "Jan 2024 - Jan 2026",
          tags: [
            "Next.js",
            "TypeScript",
            "Kotlin",
            "Spring Boot",
            "PostgreSQL",
            "Prisma",
            "Docker",
          ],
        },
        {
          title: "Web/Mobile Dev Intern - Feira da Tecnologia e Inovação",
          description:
            "Created the Smarteduca ecosystem, building from scratch a complete parental-management solution for both web and mobile. Worked on the front-end with React.js (Vite and Next.js) for fast, responsive web interfaces, plus React Native for the mobile app. Implemented and consumed cloud services with Firebase for real-time database, authentication and business rules.",
          date: "Jun 2024 - Nov 2024",
          tags: ["React", "React Native", "Vite", "Next.js", "Firebase"],
        },
        {
          title: "Web/Mobile Dev Intern - Uninorte",
          description:
            "Created web and mobile prototypes in Figma. Built the base structure and architecture of the project (HTML, CSS and JavaScript for web). Used Android Studio for mobile app development.",
          date: "Aug 2023 - Dec 2023",
          tags: ["HTML", "CSS", "JavaScript", "Android Studio", "Figma"],
        },
      ],
    },
    projects: {
      heading: "Projects",
      subtitle: "Check out my featured work",
      viewDemo: "View Demo",
      viewCode: "View Code",
      demoUnavailable: "Demo Unavailable",
      descriptions: {
        "1": "A music marketplace that connects songwriters, artists, publishers and record labels to license unreleased songs. As a full stack developer with over 1,400 commits, I built the backend APIs (Kotlin and Spring Boot) for demos, auditions, collaborative playlists, publishers, subscriptions and the management BI, and on the frontend (Next.js and React Query) the admin dashboard, the record label portal, the Pix checkout for licenses and plans, and the lead generation landing pages.",
        "7": "A multi-tenant SaaS platform for restaurants and bakeries. Each store gets its own subdomain with a digital menu, Pix checkout (AbacatePay) and delivery with ZIP code autofill, plus a dashboard with a point of sale (POS), real-time kitchen, stock, sales history, cash closing and production forecast. It offers two plans (Menu and Full) and a Super Admin console with an audit log. Built with Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Better Auth, Tailwind CSS, Shadcn/UI and Vercel Blob.",
        "3": "An e-commerce site for restaurants, similar to iFood, where users can search restaurants, add food to the cart and place orders. Built with Next.js, Tailwind CSS, TypeScript, PostgreSQL, Prisma, Shadcn/UI and NextAuth.",
        "4": "A booking app for barbershops: customers search by shop or service, pick a day and a free time slot, and get the booking as an appointment card. It has real ratings after each visit, cancellation, slots that disappear once taken, and server actions protected by the session. Built with Next.js 16, TypeScript, Prisma, PostgreSQL, NextAuth (Google), Tailwind CSS and Shadcn/UI.",
        "5": "A fashion and streetwear clothing e-commerce, where users can browse products, add to cart and place orders. Built with Next.js, Tailwind CSS, TypeScript, PostgreSQL, Drizzle, Shadcn/UI and Better Auth.",
        "6": "A personal finance app that closes each month like a bank statement: it shows how much is left, a bar split into what was spent, invested and saved, and where the money went by category. The statement is grouped by day, with filters by type, category and search, and you can browse month by month. On Premium, AI (GPT) reads the month and points out where to save. The free plan allows 10 entries per month and the subscription runs on Stripe. Built with Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Clerk, Stripe and the AI SDK.",
        "2": "A storefront for multi-brand motorcycle dealers: each model has its own page with specs, photo and a showroom plate showing displacement, price and installment. It includes a financing simulator that sends the quote over WhatsApp, filters by category and brand, search, sorting and side-by-side comparison of up to 3 bikes. Built with Next.js 16, React 19, TypeScript, Prisma, PostgreSQL and Tailwind CSS.",
      },
    },
    social: {
      heading: "Social",
      subtitle: "Find me on social media and follow my work",
      githubDesc: "My projects and code",
      linkedinDesc: "Career and networking",
      whatsappDesc: "Chat with me directly!",
    },
    scrollCta: {
      text1: "GOT AN IDEA?",
      text2: ["CHECK OUT MY", "WORK AND"],
      text3: "MAKE IT REAL!",
    },
    footer: {
      rights: "© 2025 Marcus Nonato. Full Stack & Mobile Developer",
    },
  },
};
