export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  category: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "Education" | "Venture" | "Impact";
}

export const translations = {
  en: {
    hero: "High-end engineering meets purposeful design.",
    works: "Selected Works",
    all: "All",
    projects: [
      {
        id: 1,
        title: "MeFunnyMe",
        description: "A high-engagement social ecosystem for micro-content sharing, featuring real-time reaction engines.",
        tags: ["Next.js", "Socket.io", "Tailwind"],
        category: "Full-Stack",
        link: "https://mefunnyme.com"
      },
      {
        id: 2,
        title: "Linguist Bridge",
        description: "Neural translation application bridging English and Ghanaian local dialects using AI.",
        tags: ["React", "Python", "NLP"],
        category: "Data Analysis",
        link: "#"
      },
      {
        id: 3,
        title: "Prospixel Digital",
        description: "Official agency platform for high-performance UI/UX design and enterprise software solutions.",
        tags: ["Figma", "Framer", "TypeScript"],
        category: "UI/UX",
        link: "https://prospixel.digital"
      },
      {
        id: 4,
        title: "CheesyBlog",
        description: "A minimalist blog engine focused on clean typography and content-first architecture.",
        tags: ["Next.js", "Sanity.io", "Tailwind"],
        category: "Full-Stack",
        link: "https://cheesyblog.com"
      }
    ]
  },
  fr: {
    hero: "L'ingénierie haut de gamme rencontre le design réfléchi.",
    works: "Travaux Sélectionnés",
    all: "Tout",
    projects: [
      {
        id: 1,
        title: "MeFunnyMe",
        description: "Un écosystème social à fort engagement pour le partage de micro-contenus.",
        tags: ["Next.js", "Socket.io", "Tailwind"],
        category: "Full-Stack",
        link: "https://mefunnyme.com"
      },
      {
        id: 2,
        title: "Linguist Bridge",
        description: "Application de traduction neuronale reliant l'anglais et les dialectes locaux ghanéens.",
        tags: ["React", "Python", "NLP"],
        category: "Analyse de Données",
        link: "#"
      },
      {
        id: 3,
        title: "Prospixel Digital",
        description: "Plateforme d'agence officielle pour le design UI/UX et les solutions logicielles d'entreprise.",
        tags: ["Figma", "Framer", "TypeScript"],
        category: "UI/UX",
        link: "https://prospixel.digital"
      },
      {
        id: 4,
        title: "CheesyBlog",
        description: "Moteur de blog minimaliste axé sur la typographie et le contenu.",
        tags: ["Next.js", "Sanity.io", "Tailwind"],
        category: "Full-Stack",
        link: "https://cheesyblog.com"
      }
    ]
  },
  es: {
    hero: "La ingeniería de alto nivel se une al diseño con propósito.",
    works: "Proyectos Seleccionados",
    all: "Todos",
    projects: [
      {
        id: 1,
        title: "MeFunnyMe",
        description: "Un ecosistema social de alto compromiso para compartir microcontenidos.",
        tags: ["Next.js", "Socket.io", "Tailwind"],
        category: "Full-Stack",
        link: "https://mefunnyme.com"
      },
      {
        id: 2,
        title: "Linguist Bridge",
        description: "Aplicación de traducción neuronal que une el inglés y los dialectos locales de Ghana.",
        tags: ["React", "Python", "NLP"],
        category: "Análisis de Datos",
        link: "#"
      },
      {
        id: 3,
        title: "Prospixel Digital",
        description: "Plataforma oficial de agencia para diseño UI/UX y soluciones de software empresarial.",
        tags: ["Figma", "Framer", "TypeScript"],
        category: "UI/UX",
        link: "https://prospixel.digital"
      },
      {
        id: 4,
        title: "CheesyBlog",
        description: "Motor de blog minimalista centrado en la tipografía y el contenido.",
        tags: ["Next.js", "Sanity.io", "Tailwind"],
        category: "Full-Stack",
        link: "https://cheesyblog.com"
      }
    ]
  },
  de: {
    hero: "High-End-Engineering trifft auf zielgerichtetes Design.",
    works: "Ausgewählte Arbeiten",
    all: "Alle",
    projects: [
      {
        id: 1,
        title: "MeFunnyMe",
        description: "Ein soziales Ökosystem für das Teilen von Mikro-Inhalten mit Echtzeit-Reaktionen.",
        tags: ["Next.js", "Socket.io", "Tailwind"],
        category: "Full-Stack",
        link: "https://mefunnyme.com"
      },
      {
        id: 2,
        title: "Linguist Bridge",
        description: "Neuronale Übersetzungsanwendung für Englisch und ghanaische lokale Dialekte.",
        tags: ["React", "Python", "NLP"],
        category: "Datenanalyse",
        link: "#"
      },
      {
        id: 3,
        title: "Prospixel Digital",
        description: "Agenturplattform für UI/UX-Design und Unternehmenssoftwarelösungen.",
        tags: ["Figma", "Framer", "TypeScript"],
        category: "UI/UX",
        link: "https://prospixel.digital"
      },
      {
        id: 4,
        title: "CheesyBlog",
        description: "Minimalistische Blog-Engine mit Fokus auf Typografie und Inhalt.",
        tags: ["Next.js", "Sanity.io", "Tailwind"],
        category: "Full-Stack",
        link: "https://cheesyblog.com"
      }
    ]
  },
  zh: {
    hero: "高端工程与有意义的设计相结合。",
    works: "精选作品",
    all: "全部",
    projects: [
      {
        id: 1,
        title: "MeFunnyMe",
        description: "用于微内容共享的高参与度社交生态系统，具有实时反应引擎。",
        tags: ["Next.js", "Socket.io", "Tailwind"],
        category: "全栈开发",
        link: "https://mefunnyme.com"
      },
      {
        id: 2,
        title: "Linguist Bridge",
        description: "使用人工智能桥接英语和加纳本地方言的神经翻译应用程序。",
        tags: ["React", "Python", "NLP"],
        category: "数据分析",
        link: "#"
      },
      {
        id: 3,
        title: "Prospixel Digital",
        description: "用于高性能 UI/UX 设计和企业软件解决方案的官方机构平台。",
        tags: ["Figma", "Framer", "TypeScript"],
        category: "UI/UX",
        link: "https://prospixel.digital"
      },
      {
        id: 4,
        title: "CheesyBlog",
        description: "专注于干净排版和内容优先架构的极简博客引擎。",
        tags: ["Next.js", "Sanity.io", "Tailwind"],
        category: "全栈开发",
        link: "https://cheesyblog.com"
      }
    ]
  }
};

export const experience: Record<string, ExperienceItem[]> = {
  en: [
    {
      year: "2023 — Present",
      title: "Founder & Creative Lead",
      company: "Prospixel Digital",
      description: "Directing a boutique agency providing high-end UI/UX and engineering solutions for global clients.",
      type: "Venture"
    },
    {
      year: "2024 — Active",
      title: "Founding Director",
      company: "The Laptop Project (NGO)",
      description: "Equipping underprivileged students with hardware and digital skills to bridge the educational divide.",
      type: "Impact"
    },
    {
      year: "2023 — 2027",
      title: "BSc. Information Technology",
      company: "UPSA, Accra",
      description: "Enterprise system architecture and software engineering studies.",
      type: "Education"
    }
  ],
  fr: [
    {
      year: "2023 — Présent",
      title: "Fondateur et Directeur Créatif",
      company: "Prospixel Digital",
      description: "Direction d'une agence boutique fournissant des solutions UI/UX et d'ingénierie haut de gamme.",
      type: "Venture"
    },
    {
      year: "2024 — Actif",
      title: "Directeur Fondateur",
      company: "The Laptop Project (ONG)",
      description: "Équiper les étudiants défavorisés en matériel et compétences numériques.",
      type: "Impact"
    },
    {
      year: "2023 — 2027",
      title: "Licence en TI",
      company: "UPSA, Accra",
      description: "Études en architecture de systèmes d'entreprise et génie logiciel.",
      type: "Education"
    }
  ],
  es: [
    {
      year: "2023 — Presente",
      title: "Fundador y Director Creativo",
      company: "Prospixel Digital",
      description: "Dirigiendo una agencia boutique que ofrece soluciones de ingeniería y UI/UX de alto nivel.",
      type: "Venture"
    },
    {
      year: "2024 — Activo",
      title: "Director Fundador",
      company: "The Laptop Project (ONG)",
      description: "Equipando a estudiantes desfavorecidos con hardware y habilidades digitales.",
      type: "Impact"
    },
    {
      year: "2023 — 2027",
      title: "Licenciatura en TI",
      company: "UPSA, Accra",
      description: "Arquitectura de sistemas empresariales e ingeniería de software.",
      type: "Education"
    }
  ],
  de: [
    {
      year: "2023 — Heute",
      title: "Gründer & Creative Lead",
      company: "Prospixel Digital",
      description: "Leitung einer Boutique-Agentur für High-End UI/UX- und Engineering-Lösungen.",
      type: "Venture"
    },
    {
      year: "2024 — Aktiv",
      title: "Gründungsdirektor",
      company: "The Laptop Project (NGO)",
      description: "Hardware und digitale Kompetenzen für benachteiligte Studierende.",
      type: "Impact"
    },
    {
      year: "2023 — 2027",
      title: "BSc. Informationstechnologie",
      company: "UPSA, Accra",
      description: "Unternehmenssystemarchitektur und Software-Engineering.",
      type: "Education"
    }
  ],
  zh: [
    {
      year: "2023 — 至今",
      title: "创始人兼创意总监",
      company: "Prospixel Digital",
      description: "指导一家为全球客户提供高端 UI/UX 和工程解决方案的精品代理机构。",
      type: "Venture"
    },
    {
      year: "2024 — 活跃",
      title: "创始董事",
      company: "The Laptop Project (NGO)",
      description: "为贫困学生配备硬件和数字技能，缩小教育差距。",
      type: "Impact"
    },
    {
      year: "2023 — 2027",
      title: "信息技术学士",
      company: "UPSA, Accra",
      description: "企业系统架构和软件工程研究。",
      type: "Education"
    }
  ]
};