export interface Experiences {
    id:string;
    role:string;
    company:string;
    period:string;
    description:string;
    tags:string[];
    featured: boolean;
}

export const experiencesData: Experiences[] = [
    {
        id: "1",
        role: "AI Training Specialist",
        company: "Outlier",
        period: "2024 — Present",
        description: "Avaliação técnica de código, validação de lógica computacional e fine-tuning em modelos de linguagem avançados.",
        tags: ["LLMs", "Python", "Code Review", "Data Analysis"],
        featured: true,
    },
    {
        id: "2",
        role: "Data & Analytics Intern",
        company: "Compasso UOL",
        period: "Dez 2022 — Mai 2023",
        description: "Desenvolvimento de rotinas analíticas, modelagem em SQL e estruturação de dashboards para acompanhamento de métricas.",
        tags: ["SQL", "Power BI", "ETL"],
        featured: false,
    },
    {
        id: "3",
        role: "Head Coach & Analyst",
        company: "E-sports",
        period: "2021 — 2023",
        description: "Análise quantitativa de mecânicas de gameplay, estudo de scaling e tomadas de decisão táticas orientadas a métricas.",
        tags: ["Data Modeling", "Strategy", "Analytics"],
        featured: false,
    },
];