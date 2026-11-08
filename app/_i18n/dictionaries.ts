export type Locale = "pt" | "en";

export interface Experience {
  title: string;
  description: string;
  date: string;
  tags: string[];
  /** cargo atual: recebe o selo verde */
  current?: boolean;
  /** 1–2 impactos concretos do cargo */
  highlights: string[];
}

export interface CaseStudyContent {
  subtitle: string;
  tags: string[];
  overview: string;
  features: { title: string; text: string }[];
  note: string;
  sections: Record<
    string,
    { label: string; summary: string; captions: string[] }
  >;
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
    greeting: string;
    available: string;
    metrics: { value: string; label: string }[];
    techStack: string;
  };
  about: {
    eyebrow: string;
    watermark: string;
    heading: string;
    /** **texto** = tecnologia destacada em branco */
    paragraphs: string[];
    imageAlt: string;
    cta: string;
  };
  career: {
    eyebrow: string;
    ghost: string;
    heading: string;
    subtitle: string;
    listHeading: string;
    currentLabel: string;
    experiences: Experience[];
  };
  projects: {
    eyebrow: string;
    ghost: string;
    heading: string;
    subtitle: string;
    viewDemo: string;
    viewCode: string;
    demoUnavailable: string;
    viewCaseStudy: string;
    viewSite: string;
    closeCaseStudy: string;
    privateRepo: string;
    overview: string;
    keyFeatures: string;
    openGallery: string;
    highlights: Record<string, { label: string; text: string }[]>;
    descriptions: Record<string, string>;
    caseStudies: Record<string, CaseStudyContent>;
  };
  social: {
    eyebrow: string;
    ghost: string;
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
    cta: string;
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
        "4 anos construindo produtos web e mobile de ponta a ponta — de APIs em Kotlin/Spring Boot a apps em React Native.",
      ctaProjects: "Ver projetos",
      ctaCv: "Baixar CV",
      greeting: "Olá, eu sou",
      available: "Disponível para projetos",
      metrics: [
        { value: "4", label: "anos de experiência" },
        { value: "+1.400", label: "commits em produção" },
        { value: "8", label: "produtos entregues" },
      ],
      techStack: "Tecnologias que uso",
    },
    about: {
      eyebrow: "01 — Sobre",
      watermark: "SOBRE MIM",
      heading: "Paixão, Criatividade e Código",
      paragraphs: [
        "Olá, sou Marcus Vinicius — Desenvolvedor Full Stack e Mobile do Brasil.",
        "Com 4 anos de experiência, sou especializado em **React.js**, **React Native**, **Node.js** e **Kotlin com Spring Boot**. Construo interfaces modernas e responsivas integradas com arquiteturas de back-end escaláveis e **APIs RESTful** de alto desempenho.",
        "Meu foco em otimização, segurança e boas práticas me permite transformar ideias em aplicações robustas. Pronto para criar seu próximo projeto de sucesso?",
      ],
      imageAlt: "Ilustração em pixel art do Marcus programando",
      cta: "Vamos conversar",
    },
    career: {
      eyebrow: "03 — Carreira",
      ghost: "CARREIRA",
      heading: "Carreira",
      subtitle: "Onde construí produtos de verdade",
      listHeading: "Experiências Profissionais",
      currentLabel: "Atual",
      experiences: [
        {
          title: "Desenvolvedor de Software - Sidia",
          description:
            "Desenvolvimento full stack de aplicações web internas com ReactJS no front-end e Python com FastAPI no back-end, otimizando fluxos de trabalho corporativos. Criação de scripts de automação em Python para diferentes setores, reduzindo tarefas manuais. Integração de sistemas com bancos de dados SQL e NoSQL, garantindo escalabilidade e alta performance.",
          date: "Jan 2026 - Atualmente",
          current: true,
          highlights: [
            "Scripts de automação em Python que reduziram tarefas manuais em diferentes setores.",
            "Aplicações web internas full stack com ReactJS e FastAPI.",
          ],
          tags: ["ReactJS", "Python", "FastAPI", "Automação", "SQL", "NoSQL"],
        },
        {
          title: "Desenvolvedor de Software - Sucesso.APP",
          description:
            "Construção de uma plataforma de marketplace musical escalável e de alta performance, atuando no front-end com Next.js e TypeScript e no back-end com Kotlin e Spring Boot. Liderança técnica na migração completa da aplicação web de Angular para Next.js, resultando em ganhos expressivos de velocidade, estrutura de código e manutenibilidade. Modelagem e integração de sistemas com PostgreSQL utilizando Prisma como ORM, garantindo transações seguras e arquitetura limpa.",
          date: "Jan 2024 - Jan 2026",
          highlights: [
            "Mais de 1.400 commits entre o front (Next.js) e o back (Kotlin/Spring Boot).",
            "Liderança técnica na migração completa de Angular para Next.js.",
          ],
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
          highlights: [
            "Ecossistema Smarteduca construído do zero, com app web e mobile.",
            "Banco em tempo real e autenticação com Firebase.",
          ],
          tags: ["React", "React Native", "Vite", "Next.js", "Firebase"],
        },
        {
          title: "Estagiário Dev Web/Mobile - Uninorte",
          description:
            "Criação de protótipo web e mobile feito no Figma. Criação da estrutura e arquitetura base do projeto (HTML, CSS e JavaScript para web). Android Studio para desenvolvimento de App Mobile.",
          date: "Ago 2023 - Dez 2023",
          highlights: [
            "Protótipo web e mobile desenhado no Figma.",
            "Estrutura e arquitetura base do projeto web.",
          ],
          tags: ["HTML", "CSS", "JavaScript", "Android Studio", "Figma"],
        },
      ],
    },
    projects: {
      eyebrow: "02 — Projetos",
      ghost: "PROJETOS",
      heading: "Projetos",
      subtitle: "Confira meus trabalhos em destaque",
      viewDemo: "Ver Demo",
      viewCode: "Ver código",
      demoUnavailable: "Demo Indisponível",
      viewCaseStudy: "Ver estudo de caso",
      viewSite: "Ver site",
      closeCaseStudy: "Fechar estudo de caso",
      privateRepo: "Repositório privado",
      overview: "Visão geral",
      keyFeatures: "Principais funcionalidades",
      openGallery: "Ampliar imagem",
      highlights: {
        "1": [
          {
            label: "O que fiz",
            text: "Full stack com mais de 1.400 commits: APIs de audições, playlists, assinaturas e BI no backend; painel admin e checkout com Pix no front.",
          },
          {
            label: "Stack",
            text: "Kotlin, Spring Boot, PostgreSQL, Next.js e React Query.",
          },
          {
            label: "Resultado",
            text: "Marketplace em produção conectando compositores, artistas, editoras e gravadoras, com times de web, backend, Android e iOS.",
          },
        ],
        "7": [
          {
            label: "O que fiz",
            text: "SaaS multi-loja do zero: subdomínio por loja, cardápio digital, checkout com Pix e entrega com CEP automático.",
          },
          {
            label: "Stack",
            text: "Next.js 16, React 19, Prisma, PostgreSQL, Better Auth e Vercel Blob.",
          },
          {
            label: "Resultado",
            text: "Painel com PDV, cozinha em tempo real, estoque e fechamento de caixa, em dois planos e com console de Super Admin.",
          },
        ],
      },
      descriptions: {
        "8": "TCC usando a Uninorte como exemplo de instituição: um sistema que une a cantina à rotina acadêmica. O aluno pede e paga pelo app, a cantina recebe o pedido em tempo real e o aluno acompanha o preparo até retirar com um código. Inclui painéis web para cantina, professores e coordenação, além de previsão de demanda. Construído com NestJS, PostgreSQL, Socket.IO, Expo, React Native e Next.js.",
        "1": "Marketplace musical que conecta compositores, artistas, editoras e gravadoras para licenciar músicas inéditas. Como full stack, com mais de 1.400 commits, construí no backend (Kotlin e Spring Boot) as APIs de guias, audições, playlists colaborativas, editoras, assinaturas e do BI gerencial, e no front (Next.js e React Query) o painel administrativo, o Gerencial de Gravadoras, o checkout de licenças e planos com Pix e as landing pages de captação.",
        "7": "Plataforma SaaS multi-loja para restaurantes e confeitarias. Cada loja ganha um subdomínio próprio com cardápio digital, checkout com Pix (AbacatePay) e entrega com CEP automático, além de um painel com Balcão (PDV), cozinha em tempo real, estoque, histórico, fechamento de caixa e previsão de produção. Conta com dois planos (Cardápio e Completo) e um console de Super Admin com auditoria. Construída com Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Better Auth, Tailwind CSS, Shadcn/UI e Vercel Blob.",
        "3": "Site de e-commerce para restaurantes, similar ao iFood, onde usuários podem buscar restaurantes, adicionar comidas ao carrinho e finalizar pedidos. Construído com Next.js, Tailwind CSS, TypeScript, PostgreSQL, Prisma, Shadcn/UI e NextAuth.",
        "4": "App de agendamento para barbearias: o cliente busca por barbearia ou serviço, escolhe o dia e um horário livre e recebe a reserva como um cartão de horário. Tem avaliações reais depois do atendimento, cancelamento, horários que somem quando alguém reserva e ações protegidas pela sessão no servidor. Construído com Next.js 16, TypeScript, Prisma, PostgreSQL, NextAuth (Google), Tailwind CSS e Shadcn/UI.",
        "5": "E-commerce de roupas de moda e streetwear, onde usuários podem buscar produtos, adicionar ao carrinho e finalizar pedidos. Construído com Next.js, Tailwind CSS, TypeScript, PostgreSQL, Drizzle, Shadcn/UI e Better Auth.",
        "6": "App de finanças pessoais que fecha o mês como um extrato: mostra quanto sobrou, uma régua dividida entre o que foi gasto, investido e guardado, e para onde foi o dinheiro por categoria. O extrato é agrupado por dia, com filtros por tipo, categoria e busca, e dá para navegar mês a mês. No Premium, a IA (GPT) lê o mês e aponta onde dá para economizar. O plano grátis tem limite de 10 lançamentos por mês e a assinatura é pelo Stripe. Construído com Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Clerk, Stripe e AI SDK.",
        "2": "Vitrine para lojas de motos multimarcas: cada modelo tem página própria com ficha técnica, foto e plaqueta com cilindrada, preço e parcela. Tem simulador de financiamento que manda a simulação pelo WhatsApp, filtros por categoria e marca, busca, ordenação e comparação lado a lado de até 3 motos. Construída com Next.js 16, React 19, TypeScript, Prisma, PostgreSQL e Tailwind CSS.",
      },
      caseStudies: {
        "1": {
          subtitle: "Marketplace musical para licenciar músicas inéditas",
          tags: ["Full stack", "Marketplace", "Pagamentos", "Arquitetura"],
          overview:
            "O SucessoAPP conecta compositores, artistas, editoras e gravadoras para licenciar músicas inéditas. Atuei como full stack, com mais de 1.400 commits entre o painel web e o backend.",
          features: [
            {
              title: "Backend modular",
              text: "monolito em Kotlin e Spring Boot dividido por domínio, com contratos entre os módulos e adapters para integrações externas.",
            },
            {
              title: "Guias e audições",
              text: "upload, curtidas, histórico de reprodução, audições com encerramento automático e playlists colaborativas.",
            },
            {
              title: "Mercado da música",
              text: "editoras, contratos, participação nas vendas, assinaturas, benefícios e relatórios financeiros em PDF.",
            },
            {
              title: "Web",
              text: "áreas para administração, artistas, editoras e gravadoras, com BI, checkout com Pix e player de áudio com HLS.",
            },
          ],
          note: "Produto privado de um cliente. Por isso, o portfólio mostra apenas a landing page pública e uma visão geral da arquitetura. Os apps Android e iOS são de outros times.",
          sections: {
            landing: {
              label: "Landing page",
              summary:
                "Página pública do produto, que apresenta a plataforma para compositores e artistas.",
              captions: [
                "Início da landing page",
                "Plataforma completa",
                "Radar de talentos",
                "Recursos para compositores",
              ],
            },
            arquitetura: {
              label: "Arquitetura",
              summary:
                "Monolito modular em Kotlin e Spring Boot, com um banco PostgreSQL separado por domínio, eventos assíncronos com Kafka, cache e busca. A web em Next.js consome a mesma API dos apps.",
              captions: ["Visão geral da arquitetura"],
            },
          },
        },
        "7": {
          subtitle: "SaaS multi-loja para restaurantes e confeitarias",
          tags: ["SaaS", "Multi-tenant", "Pagamentos", "Full stack"],
          overview:
            "Cada loja ganha um subdomínio próprio com cardápio digital, e o dono administra tudo em um painel, do pedido ao fechamento de caixa. Um console de Super Admin acompanha todas as lojas da plataforma.",
          features: [
            {
              title: "Multi-loja",
              text: "subdomínio por loja, com dois planos: Cardápio e Completo.",
            },
            {
              title: "Pedido online",
              text: "cardápio digital, checkout com Pix pela AbacatePay e entrega com CEP automático.",
            },
            {
              title: "Operação",
              text: "balcão (PDV), cozinha em tempo real, estoque, histórico, fechamento de caixa e previsão de produção.",
            },
            {
              title: "Super Admin",
              text: "visão de todas as lojas, com console de gestão e auditoria.",
            },
          ],
          note: "A Mundo Doce é uma loja de demonstração, criada para mostrar a plataforma.",
          sections: {
            loja: {
              label: "Loja",
              summary:
                "Cardápio digital que o cliente acessa pelo subdomínio da loja.",
              captions: ["Cardápio e sacola", "Categorias do cardápio"],
            },
            painel: {
              label: "Painel",
              summary:
                "Painel do dono da loja, com indicadores, previsão de produção e venda no balcão.",
              captions: [
                "Painel da loja",
                "Balcão (PDV)",
                "Histórico de pedidos",
              ],
            },
            admin: {
              label: "Super Admin",
              summary: "Console que acompanha as lojas da plataforma.",
              captions: ["Visão geral do SaaS", "Restaurantes da plataforma"],
            },
          },
        },
        "3": {
          subtitle: "Delivery de comida inspirado no iFood",
          tags: ["Full stack", "E-commerce", "Pagamentos"],
          overview:
            "Site de delivery onde o usuário busca restaurantes, navega por categorias, monta a sacola e finaliza o pedido.",
          features: [
            {
              title: "Descoberta",
              text: "busca, categorias, restaurantes e pedidos recomendados.",
            },
            {
              title: "Pedido",
              text: "sacola por restaurante e pagamento com Stripe.",
            },
            {
              title: "Conta",
              text: "login com NextAuth, restaurantes favoritos e histórico de pedidos.",
            },
          ],
          note: "Projeto pessoal, com restaurantes e dados fictícios.",
          sections: {
            restaurantes: {
              label: "Restaurantes",
              summary: "Busca e navegação por restaurantes e categorias.",
              captions: [
                "Página inicial",
                "Restaurantes recomendados",
                "Página do restaurante",
              ],
            },
            pedido: {
              label: "Pedido",
              summary:
                "Produtos com desconto, detalhes e acompanhamentos sugeridos.",
              captions: ["Pedidos recomendados", "Detalhe do produto"],
            },
          },
        },
        "4": {
          subtitle: "Agendamento online para barbearias",
          tags: ["Full stack", "Agendamento", "Autenticação"],
          overview:
            "O cliente busca por barbearia ou serviço, escolhe o dia e um horário livre e recebe a reserva como um cartão de horário. O visual escuro se inspira em cadeira de barbeiro, com couro e latão.",
          features: [
            {
              title: "Reserva",
              text: "horários livres de 45 em 45 minutos, das 9h às 21h.",
            },
            {
              title: "Sem conflito",
              text: "reservas e cancelamentos usam a sessão do servidor, sem horário duplicado.",
            },
            {
              title: "Avaliações",
              text: "de 1 a 5 estrelas com comentário depois do atendimento, e a barbearia mostra a média.",
            },
          ],
          note: "Projeto pessoal, com barbearias e dados fictícios.",
          sections: {
            descoberta: {
              label: "Descoberta",
              summary:
                "Busca por barbearia ou serviço, com a avaliação de cada uma.",
              captions: [
                "Página inicial",
                "Lista de barbearias",
                "Resultados da busca",
              ],
            },
            agendamento: {
              label: "Agendamento",
              summary: "Da escolha do serviço até os agendamentos do cliente.",
              captions: [
                "Página da barbearia",
                "Escolha de dia e horário",
                "Meus agendamentos",
              ],
            },
          },
        },
        "5": {
          subtitle: "E-commerce de moda e streetwear",
          tags: ["Full stack", "E-commerce", "Pagamentos"],
          overview:
            "Loja de roupas com vitrine por categoria, página de produto com variações de cor, sacola e checkout. Inclui área de pedidos para o cliente e painel administrativo.",
          features: [
            {
              title: "Catálogo",
              text: "categorias, produtos e variações de cor.",
            },
            {
              title: "Compra",
              text: "sacola, identificação, endereço de entrega e pagamento com Stripe.",
            },
            {
              title: "Gestão",
              text: "meus pedidos para o cliente e painel admin com produtos, categorias e pedidos.",
            },
          ],
          note: "Projeto pessoal, sem vínculo com as marcas exibidas. As imagens são apenas para demonstração.",
          sections: {
            vitrine: {
              label: "Vitrine",
              summary: "Página inicial e navegação por categorias.",
              captions: [
                "Página inicial",
                "Categoria de acessórios",
                "Categoria de camisetas",
              ],
            },
            compra: {
              label: "Compra",
              summary: "Do produto até os dados de entrega.",
              captions: [
                "Página do produto",
                "Sacola",
                "Identificação e entrega",
              ],
            },
          },
        },
        "6": {
          subtitle: "Finanças pessoais que fecham o mês como um extrato",
          tags: ["Full stack", "IA", "Assinaturas"],
          overview:
            "O app mostra quanto sobrou no mês, uma régua dividida entre gasto, investido e o que sobrou, e para onde foi o dinheiro por categoria.",
          features: [
            {
              title: "Extrato",
              text: "lançamentos agrupados por dia, com filtros por tipo, categoria e busca pelo nome, e navegação mês a mês.",
            },
            {
              title: "Relatório com IA",
              text: "no Premium, resume o mês com até 3 pontos de atenção e 3 sugestões de economia.",
            },
            {
              title: "Planos",
              text: "o grátis tem limite de 10 lançamentos por mês, checado no servidor, e a assinatura é pelo Stripe.",
            },
            {
              title: "Privacidade",
              text: "cada usuário só vê e altera os próprios lançamentos.",
            },
          ],
          note: "Projeto pessoal. Os valores das telas são de demonstração.",
          sections: {
            resumo: {
              label: "Resumo",
              summary: "Apresentação do produto e resumo do mês por categoria.",
              captions: ["Página inicial", "Para onde foi o dinheiro"],
            },
            extrato: {
              label: "Extrato",
              summary: "Lançamentos do mês, com filtros e cadastro.",
              captions: ["Extrato do mês", "Novo lançamento"],
            },
          },
        },
        "2": {
          subtitle: "Vitrine para lojas de motos multimarcas",
          tags: ["Full stack", "Vitrine", "Simulador"],
          overview:
            "Cada modelo tem página própria com ficha técnica, foto e uma plaqueta com cilindrada, preço à vista e parcela estimada. O cliente simula o financiamento e envia pelo WhatsApp.",
          features: [
            {
              title: "Simulador",
              text: "sistema Price, com entrada de 0 a 60% e prazo de 12 a 60 vezes, enviado pelo WhatsApp.",
            },
            {
              title: "Catálogo",
              text: "filtros por categoria e marca, busca e ordenação por preço ou cilindrada.",
            },
            { title: "Comparação", text: "até 3 motos lado a lado." },
          ],
          note: "Projeto pessoal. Preços e parcelas são de demonstração.",
          sections: {
            catalogo: {
              label: "Catálogo",
              summary: "Destaques da loja e catálogo com filtros.",
              captions: [
                "Página inicial",
                "Catálogo com filtros",
                "Chegaram na loja",
              ],
            },
            modelo: {
              label: "Modelo",
              summary: "Ficha técnica, simulação de parcela e comparação.",
              captions: [
                "Página do modelo",
                "Ficha e simulador",
                "Comparação lado a lado",
              ],
            },
          },
        },
        "8": {
          subtitle: "Cantina e rotina acadêmica em um só sistema",
          tags: ["Full stack", "Mobile", "Tempo real", "Pagamentos", "TCC"],
          overview:
            "Filas na cantina nos intervalos e informações acadêmicas espalhadas em vários sistemas motivaram o projeto. O Uni-Snack junta as duas pontas: o aluno resolve o lanche e a vida acadêmica no mesmo app, enquanto a cantina, os professores e a coordenação têm painéis próprios ligados à mesma API.",
          features: [
            {
              title: "Pedido de ponta a ponta",
              text: "pagamento por Pix ou cartão, fila, preparo, pronto e entrega confirmada por código.",
            },
            {
              title: "Tempo real",
              text: "o painel da cantina e o app atualizam por WebSocket, e uma notificação push avisa quando o pedido fica pronto.",
            },
            {
              title: "Previsão de demanda",
              text: "combina presença, 8 semanas de vendas e o calendário acadêmico, com margem de segurança de 15%.",
            },
            {
              title: "Presença diária",
              text: "une a chamada do professor e a localização do app para estimar quem está no campus.",
            },
            {
              title: "Pagamentos confiáveis",
              text: "webhooks assinados e idempotentes, com baixa de estoque em transação.",
            },
          ],
          note: "TCC de Engenharia da Computação. Desenvolvi todas as aplicações do sistema: API, app e painéis web. A Uninorte foi usada apenas como exemplo de instituição para demonstrar o sistema. Os módulos acadêmicos são simulados, e as telas foram capturadas em ambiente local com dados de demonstração.",
          sections: {
            app: {
              label: "App do aluno",
              summary:
                "App em Expo e React Native onde o aluno faz o pedido, acompanha o preparo e consulta matérias, notas, horários, calendário e mensalidades.",
              captions: [
                "Início com pedido em andamento",
                "Cardápio por categoria",
                "Detalhe do produto",
                "Sacola",
                "Andamento e código de entrega",
                "Histórico de pedidos",
                "Matérias do semestre",
                "Notas, frequência e avisos da matéria",
                "Mensalidades com Pix e cartão",
                "Calendário acadêmico",
                "Horários da semana",
                "Perfil do aluno",
                "Solicitações acadêmicas",
                "Menu lateral",
                "Modo escuro",
              ],
            },
            cantina: {
              label: "Cantina",
              summary:
                "Painel web que recebe os pedidos em tempo real e cobre cozinha, venda no balcão, previsão de demanda e fechamento.",
              captions: [
                "Cozinha em colunas por etapa",
                "Pedidos ativos",
                "Painel com previsão de demanda",
                "Venda no balcão (PDV)",
                "Fechamento do período",
              ],
            },
            academico: {
              label: "Professor e coordenação",
              summary:
                "Painel web com áreas separadas: o professor registra chamada e avisos, e a coordenação gerencia turmas e alunos.",
              captions: [
                "Início do professor",
                "Diário de classe",
                "Mural de avisos",
                "Turmas da coordenação",
                "Alunos da coordenação",
              ],
            },
            api: {
              label: "API",
              summary:
                "API em NestJS que concentra as regras do sistema: máquina de estados do pedido, pagamentos, tempo real, previsão e módulos acadêmicos. Autenticação com JWT e refresh tokens rotativos, quatro perfis de acesso e testes unitários em pedidos e pagamentos.",
              captions: ["Fluxo do pedido", "Documentação no Swagger"],
            },
          },
        },
      },
    },
    social: {
      eyebrow: "04 — Contato",
      ghost: "CONTATO",
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
      cta: "Ver projetos",
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
        "4 years building web and mobile products end to end — from Kotlin/Spring Boot APIs to React Native apps.",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
      greeting: "Hey, I'm",
      available: "Available for projects",
      metrics: [
        { value: "4", label: "years of experience" },
        { value: "+1,400", label: "production commits" },
        { value: "8", label: "products shipped" },
      ],
      techStack: "Technologies I use",
    },
    about: {
      eyebrow: "01 — About",
      watermark: "ABOUT ME",
      heading: "Passion, Creativity and Code",
      paragraphs: [
        "Hi, I'm Marcus Vinicius — a Full Stack and Mobile Developer from Brazil.",
        "With 4 years of experience, I specialize in **React.js**, **React Native**, **Node.js** and **Kotlin with Spring Boot**. I build modern, responsive interfaces integrated with scalable back-end architectures and high-performance **RESTful APIs**.",
        "My focus on optimization, security and best practices lets me turn ideas into robust applications. Ready to build your next successful project?",
      ],
      imageAlt: "Pixel art illustration of Marcus coding",
      cta: "Let's talk",
    },
    career: {
      eyebrow: "03 — Career",
      ghost: "CAREER",
      heading: "Career",
      subtitle: "Where I've built real products",
      listHeading: "Professional Experience",
      currentLabel: "Current",
      experiences: [
        {
          title: "Software Developer - Sidia",
          description:
            "Full stack development of internal web applications with ReactJS on the front-end and Python with FastAPI on the back-end, optimizing corporate workflows. Built Python automation scripts for different departments, reducing manual tasks. Integrated systems with SQL and NoSQL databases, ensuring scalability and high performance.",
          date: "Jan 2026 - Present",
          current: true,
          highlights: [
            "Python automation scripts that cut manual work across departments.",
            "Full stack internal web apps with ReactJS and FastAPI.",
          ],
          tags: ["ReactJS", "Python", "FastAPI", "Automation", "SQL", "NoSQL"],
        },
        {
          title: "Software Developer - Sucesso.APP",
          description:
            "Built a scalable, high-performance music marketplace platform, working on the front-end with Next.js and TypeScript and on the back-end with Kotlin and Spring Boot. Technical lead on the full migration of the web app from Angular to Next.js, resulting in major gains in speed, code structure and maintainability. Modeled and integrated systems with PostgreSQL using Prisma as ORM, ensuring secure transactions and clean architecture.",
          date: "Jan 2024 - Jan 2026",
          highlights: [
            "Over 1,400 commits across the front end (Next.js) and back end (Kotlin/Spring Boot).",
            "Technical lead on the full migration from Angular to Next.js.",
          ],
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
          highlights: [
            "Built the Smarteduca ecosystem from scratch, with web and mobile apps.",
            "Real-time database and authentication with Firebase.",
          ],
          tags: ["React", "React Native", "Vite", "Next.js", "Firebase"],
        },
        {
          title: "Web/Mobile Dev Intern - Uninorte",
          description:
            "Created web and mobile prototypes in Figma. Built the base structure and architecture of the project (HTML, CSS and JavaScript for web). Used Android Studio for mobile app development.",
          date: "Aug 2023 - Dec 2023",
          highlights: [
            "Web and mobile prototype designed in Figma.",
            "Base structure and architecture of the web project.",
          ],
          tags: ["HTML", "CSS", "JavaScript", "Android Studio", "Figma"],
        },
      ],
    },
    projects: {
      eyebrow: "02 — Projects",
      ghost: "PROJECTS",
      heading: "Projects",
      subtitle: "Check out my featured work",
      viewDemo: "View Demo",
      viewCode: "View Code",
      demoUnavailable: "Demo Unavailable",
      viewCaseStudy: "View case study",
      viewSite: "Visit site",
      closeCaseStudy: "Close case study",
      privateRepo: "Private repository",
      overview: "Overview",
      keyFeatures: "Key features",
      openGallery: "Enlarge image",
      highlights: {
        "1": [
          {
            label: "What I did",
            text: "Full stack with over 1,400 commits: backend APIs for auditions, playlists, subscriptions and BI; admin dashboard and Pix checkout on the front end.",
          },
          {
            label: "Stack",
            text: "Kotlin, Spring Boot, PostgreSQL, Next.js and React Query.",
          },
          {
            label: "Outcome",
            text: "A marketplace in production connecting songwriters, artists, publishers and labels, with web, backend, Android and iOS teams.",
          },
        ],
        "7": [
          {
            label: "What I did",
            text: "A multi-tenant SaaS built from scratch: a subdomain per store, digital menu, Pix checkout and delivery with ZIP code autofill.",
          },
          {
            label: "Stack",
            text: "Next.js 16, React 19, Prisma, PostgreSQL, Better Auth and Vercel Blob.",
          },
          {
            label: "Outcome",
            text: "A dashboard with POS, real-time kitchen, stock and cash closing, across two plans and with a Super Admin console.",
          },
        ],
      },
      descriptions: {
        "8": "A capstone project using Uninorte as an example institution: a system that connects the campus cafeteria to academic life. Students order and pay in the app, the cafeteria receives the order in real time, and students follow it until they pick it up with a code. It includes web panels for the cafeteria, professors and coordinators, plus demand forecasting. Built with NestJS, PostgreSQL, Socket.IO, Expo, React Native and Next.js.",
        "1": "A music marketplace that connects songwriters, artists, publishers and record labels to license unreleased songs. As a full stack developer with over 1,400 commits, I built the backend APIs (Kotlin and Spring Boot) for demos, auditions, collaborative playlists, publishers, subscriptions and the management BI, and on the frontend (Next.js and React Query) the admin dashboard, the record label portal, the Pix checkout for licenses and plans, and the lead generation landing pages.",
        "7": "A multi-tenant SaaS platform for restaurants and bakeries. Each store gets its own subdomain with a digital menu, Pix checkout (AbacatePay) and delivery with ZIP code autofill, plus a dashboard with a point of sale (POS), real-time kitchen, stock, sales history, cash closing and production forecast. It offers two plans (Menu and Full) and a Super Admin console with an audit log. Built with Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Better Auth, Tailwind CSS, Shadcn/UI and Vercel Blob.",
        "3": "An e-commerce site for restaurants, similar to iFood, where users can search restaurants, add food to the cart and place orders. Built with Next.js, Tailwind CSS, TypeScript, PostgreSQL, Prisma, Shadcn/UI and NextAuth.",
        "4": "A booking app for barbershops: customers search by shop or service, pick a day and a free time slot, and get the booking as an appointment card. It has real ratings after each visit, cancellation, slots that disappear once taken, and server actions protected by the session. Built with Next.js 16, TypeScript, Prisma, PostgreSQL, NextAuth (Google), Tailwind CSS and Shadcn/UI.",
        "5": "A fashion and streetwear clothing e-commerce, where users can browse products, add to cart and place orders. Built with Next.js, Tailwind CSS, TypeScript, PostgreSQL, Drizzle, Shadcn/UI and Better Auth.",
        "6": "A personal finance app that closes each month like a bank statement: it shows how much is left, a bar split into what was spent, invested and saved, and where the money went by category. The statement is grouped by day, with filters by type, category and search, and you can browse month by month. On Premium, AI (GPT) reads the month and points out where to save. The free plan allows 10 entries per month and the subscription runs on Stripe. Built with Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Clerk, Stripe and the AI SDK.",
        "2": "A storefront for multi-brand motorcycle dealers: each model has its own page with specs, photo and a showroom plate showing displacement, price and installment. It includes a financing simulator that sends the quote over WhatsApp, filters by category and brand, search, sorting and side-by-side comparison of up to 3 bikes. Built with Next.js 16, React 19, TypeScript, Prisma, PostgreSQL and Tailwind CSS.",
      },
      caseStudies: {
        "1": {
          subtitle: "Music marketplace to license unreleased songs",
          tags: ["Full stack", "Marketplace", "Payments", "Architecture"],
          overview:
            "SucessoAPP connects songwriters, artists, publishers and record labels to license unreleased songs. I worked as a full stack developer, with over 1,400 commits across the web panel and the backend.",
          features: [
            {
              title: "Modular backend",
              text: "a Kotlin and Spring Boot monolith split by domain, with contracts between modules and adapters for external integrations.",
            },
            {
              title: "Demos and auditions",
              text: "upload, likes, playback history, auditions that close automatically and collaborative playlists.",
            },
            {
              title: "Music business",
              text: "publishers, contracts, sales shares, subscriptions, benefits and PDF financial reports.",
            },
            {
              title: "Web",
              text: "areas for admins, artists, publishers and labels, with BI, Pix checkout and an HLS audio player.",
            },
          ],
          note: "A private client product, so the portfolio only shows the public landing page and an architecture overview. The Android and iOS apps belong to other teams.",
          sections: {
            landing: {
              label: "Landing page",
              summary:
                "Public product page that presents the platform to songwriters and artists.",
              captions: [
                "Landing page hero",
                "Complete platform",
                "Talent radar",
                "Features for songwriters",
              ],
            },
            arquitetura: {
              label: "Architecture",
              summary:
                "Modular monolith in Kotlin and Spring Boot, with one PostgreSQL database split by domain, asynchronous events with Kafka, cache and search. The Next.js web app uses the same API as the mobile apps.",
              captions: ["Architecture overview"],
            },
          },
        },
        "7": {
          subtitle: "Multi-tenant SaaS for restaurants and bakeries",
          tags: ["SaaS", "Multi-tenant", "Payments", "Full stack"],
          overview:
            "Each store gets its own subdomain with a digital menu, and the owner runs everything from one panel, from orders to closing the register. A Super Admin console follows every store on the platform.",
          features: [
            {
              title: "Multi-store",
              text: "one subdomain per store, with two plans: Menu and Complete.",
            },
            {
              title: "Online ordering",
              text: "digital menu, Pix checkout through AbacatePay and delivery with automatic postal code lookup.",
            },
            {
              title: "Operations",
              text: "counter sales (POS), real-time kitchen, stock, history, register closing and production forecast.",
            },
            {
              title: "Super Admin",
              text: "a view of every store, with a management console and audit trail.",
            },
          ],
          note: "Mundo Doce is a demo store created to show the platform.",
          sections: {
            loja: {
              label: "Store",
              summary: "Digital menu customers open on the store's subdomain.",
              captions: ["Menu and cart", "Menu categories"],
            },
            painel: {
              label: "Panel",
              summary:
                "Store owner's panel, with metrics, production forecast and counter sales.",
              captions: ["Store panel", "Counter sales (POS)", "Order history"],
            },
            admin: {
              label: "Super Admin",
              summary: "Console that follows the stores on the platform.",
              captions: ["SaaS overview", "Platform restaurants"],
            },
          },
        },
        "3": {
          subtitle: "Food delivery inspired by iFood",
          tags: ["Full stack", "E-commerce", "Payments"],
          overview:
            "A delivery site where users search restaurants, browse categories, build a cart and place an order.",
          features: [
            {
              title: "Discovery",
              text: "search, categories, and recommended restaurants and products.",
            },
            {
              title: "Ordering",
              text: "a cart per restaurant and payment with Stripe.",
            },
            {
              title: "Account",
              text: "NextAuth login, favorite restaurants and order history.",
            },
          ],
          note: "Personal project with fictional restaurants and data.",
          sections: {
            restaurantes: {
              label: "Restaurants",
              summary: "Search and browsing by restaurant and category.",
              captions: [
                "Home page",
                "Recommended restaurants",
                "Restaurant page",
              ],
            },
            pedido: {
              label: "Ordering",
              summary: "Discounted products, details and suggested sides.",
              captions: ["Recommended products", "Product details"],
            },
          },
        },
        "4": {
          subtitle: "Online booking for barbershops",
          tags: ["Full stack", "Booking", "Authentication"],
          overview:
            "Customers search by shop or service, pick a day and a free time slot, and get the booking as a time card. The dark look is inspired by a barber's chair, with leather and brass.",
          features: [
            {
              title: "Booking",
              text: "free slots every 45 minutes, from 9am to 9pm.",
            },
            {
              title: "No conflicts",
              text: "bookings and cancellations use the server session, with no double booking.",
            },
            {
              title: "Reviews",
              text: "1 to 5 stars with a comment after the service, and each shop shows its average.",
            },
          ],
          note: "Personal project with fictional barbershops and data.",
          sections: {
            descoberta: {
              label: "Discovery",
              summary: "Search by shop or service, with each shop's rating.",
              captions: ["Home page", "Barbershop list", "Search results"],
            },
            agendamento: {
              label: "Booking",
              summary: "From choosing a service to the customer's bookings.",
              captions: [
                "Barbershop page",
                "Picking a day and time",
                "My bookings",
              ],
            },
          },
        },
        "5": {
          subtitle: "Fashion and streetwear e-commerce",
          tags: ["Full stack", "E-commerce", "Payments"],
          overview:
            "A clothing store with category pages, product pages with color variants, cart and checkout. It includes an orders area for customers and an admin panel.",
          features: [
            {
              title: "Catalog",
              text: "categories, products and color variants.",
            },
            {
              title: "Checkout",
              text: "cart, identification, delivery address and payment with Stripe.",
            },
            {
              title: "Management",
              text: "my orders for customers and an admin panel for products, categories and orders.",
            },
          ],
          note: "Personal project with no ties to the brands shown. The images are for demonstration only.",
          sections: {
            vitrine: {
              label: "Storefront",
              summary: "Home page and category browsing.",
              captions: [
                "Home page",
                "Accessories category",
                "T-shirts category",
              ],
            },
            compra: {
              label: "Checkout",
              summary: "From the product to the delivery details.",
              captions: ["Product page", "Cart", "Identification and delivery"],
            },
          },
        },
        "6": {
          subtitle: "Personal finance that closes the month like a statement",
          tags: ["Full stack", "AI", "Subscriptions"],
          overview:
            "The app shows how much is left in the month, a bar split between spent, invested and left, and where the money went by category.",
          features: [
            {
              title: "Statement",
              text: "entries grouped by day, with filters by type, category and name, and month-by-month navigation.",
            },
            {
              title: "AI report",
              text: "on Premium, it sums up the month with up to 3 points of attention and 3 saving tips.",
            },
            {
              title: "Plans",
              text: "the free plan is limited to 10 entries a month, checked on the server, and subscriptions run on Stripe.",
            },
            {
              title: "Privacy",
              text: "each user only sees and changes their own entries.",
            },
          ],
          note: "Personal project. The values on screen are demo data.",
          sections: {
            resumo: {
              label: "Summary",
              summary: "Product intro and the month's summary by category.",
              captions: ["Home page", "Where the money went"],
            },
            extrato: {
              label: "Statement",
              summary:
                "The month's entries, with filters and a new entry form.",
              captions: ["Monthly statement", "New entry"],
            },
          },
        },
        "2": {
          subtitle: "Storefront for multi-brand motorcycle dealers",
          tags: ["Full stack", "Storefront", "Simulator"],
          overview:
            "Each model has its own page with specs, a photo and a plate showing engine size, cash price and estimated installment. Customers simulate financing and send it through WhatsApp.",
          features: [
            {
              title: "Simulator",
              text: "Price amortization, 0 to 60% down payment and 12 to 60 installments, sent through WhatsApp.",
            },
            {
              title: "Catalog",
              text: "filters by category and brand, search and sorting by price or engine size.",
            },
            { title: "Comparison", text: "up to 3 motorcycles side by side." },
          ],
          note: "Personal project. Prices and installments are demo data.",
          sections: {
            catalogo: {
              label: "Catalog",
              summary: "Store highlights and the filterable catalog.",
              captions: ["Home page", "Catalog with filters", "New arrivals"],
            },
            modelo: {
              label: "Model",
              summary: "Specs, installment simulation and comparison.",
              captions: [
                "Model page",
                "Specs and simulator",
                "Side-by-side comparison",
              ],
            },
          },
        },
        "8": {
          subtitle: "Cafeteria and academic life in one system",
          tags: ["Full stack", "Mobile", "Real time", "Payments", "Capstone"],
          overview:
            "Cafeteria lines during breaks and academic information scattered across several systems motivated the project. Uni-Snack brings both together: students handle their snack and academic life in one app, while the cafeteria, professors and coordinators have their own panels connected to the same API.",
          features: [
            {
              title: "End-to-end ordering",
              text: "Pix or card payment, queue, preparation, ready and delivery confirmed by a code.",
            },
            {
              title: "Real time",
              text: "the cafeteria panel and the app update over WebSocket, and a push notification says when the order is ready.",
            },
            {
              title: "Demand forecasting",
              text: "combines attendance, 8 weeks of sales and the academic calendar, with a 15% safety margin.",
            },
            {
              title: "Daily attendance",
              text: "merges the professor's roll call and the app's location to estimate who is on campus.",
            },
            {
              title: "Reliable payments",
              text: "signed, idempotent webhooks, with stock reduced inside a transaction.",
            },
          ],
          note: "Computer Engineering capstone project. I built every application in the system: API, app and web panels. Uninorte was used only as an example institution to demonstrate the system. The academic modules are simulated, and the screens were captured locally with demo data.",
          sections: {
            app: {
              label: "Student app",
              summary:
                "Expo and React Native app where students order, follow preparation and check subjects, grades, schedules, the calendar and tuition.",
              captions: [
                "Home with an active order",
                "Menu by category",
                "Product details",
                "Cart",
                "Progress and delivery code",
                "Order history",
                "Semester subjects",
                "Subject grades, attendance and notices",
                "Tuition with Pix and card",
                "Academic calendar",
                "Weekly schedule",
                "Student profile",
                "Academic requests",
                "Side menu",
                "Dark mode",
              ],
            },
            cantina: {
              label: "Cafeteria",
              summary:
                "Web panel that receives orders in real time and covers the kitchen, counter sales, demand forecasting and closing reports.",
              captions: [
                "Kitchen board by stage",
                "Active orders",
                "Dashboard with demand forecast",
                "Counter sales (POS)",
                "Period closing report",
              ],
            },
            academico: {
              label: "Professors and coordinators",
              summary:
                "Web panel with separate areas: professors record roll call and notices, and coordinators manage classes and students.",
              captions: [
                "Professor home",
                "Class diary",
                "Notice board",
                "Coordinator classes",
                "Coordinator students",
              ],
            },
            api: {
              label: "API",
              summary:
                "NestJS API that holds the system's rules: order state machine, payments, real time, forecasting and academic modules. Authentication with JWT and rotating refresh tokens, four access roles and unit tests for orders and payments.",
              captions: ["Order flow", "Swagger documentation"],
            },
          },
        },
      },
    },
    social: {
      eyebrow: "04 — Contact",
      ghost: "CONTACT",
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
      cta: "View projects",
    },
    footer: {
      rights: "© 2025 Marcus Nonato. Full Stack & Mobile Developer",
    },
  },
};
