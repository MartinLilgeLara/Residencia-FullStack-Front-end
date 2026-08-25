export interface Experiences {
    id:string;
    role: {
        en:string,
        pt:string,
    };
    company:string;
    period: {
        en:string,
        pt:string,
    };
    description: {
        en: string,
        pt: string,
    }
    tags:string[];
    featured: boolean;
}

export const experiencesData: Experiences[] = [
    {
        id: "1",
        role: {
            pt: "AI Training Specialist",
            en: "AI Training Specialist",
        },
        company: "Outlier",
        period: {
            pt: "2024 — Presente",
            en: "2024 — Present",
        },
        description: {
            pt: "Avaliação técnica de código, validação de lógica computacional e fine-tuning em modelos de linguagem avançados.",
            en: "Technical code evaluation, computational logic assessment, and fine-tuning of advanced language models.",
        },
        tags: ["LLMs", "Python", "Code Review", "Data Analysis"],
        featured: true,
    },
    {
        id: "2",
        role: {
            pt: "Estagiário de Dados & Analytics",
            en: "Data & Analytics Intern",
        },
        company: "Compasso UOL",
        period: {
            pt: "Dez 2022 — Mai 2023",
            en: "Dec 2022 — May 2023",
        },
        description: {
            pt: "Desenvolvimento de rotinas analíticas, modelagem em SQL e estruturação de dashboards para acompanhamento de métricas de negócios.",
            en: "Development of analytical pipelines, SQL data modeling, and dashboard construction for business metric tracking.",
        },
        tags: ["SQL", "Power BI", "ETL"],
        featured: false,
    },
    {
        id: "3",
        role: {
            pt: "Head Coach & Analista",
            en: "Head Coach & Analyst",
        },
        company: "E-sports",
        period: {
            pt: "2021 — 2023",
            en: "2021 — 2023",
        },
        description: {
            pt: "Análise quantitativa de mecânicas de gameplay, estudo de scaling e tomadas de decisão táticas orientadas a métricas.",
            en: "Quantitative analysis of gameplay mechanics, power-scaling studies, and data-driven tactical decision making.",
        },
        tags: ["Data Modeling", "Strategy", "Analytics"],
        featured: false,
    },
];