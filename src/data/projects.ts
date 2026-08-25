export interface Projects{
    title:{
        pt:string;
        en:string;
    };
    desc:{
        pt:string;
        en:string;
    };
    tags:string[];
    link:string;
}

export const projectsData: ({ title: {pt:string; en:string;}; desc: {pt:string; en:string;}; tags: string[] }[]) = [
    {
        title:{
            en: "Flood Simulation",
            pt: "Simulação de enchente"
        },
        desc:{
            en: "Fluid simulation of 2024 Canoas flooding",
            pt: "Simulação de fluidos da enchente de 2024 em Canoas"
        },
        tags:["Python","Numpy"],
    },
    {
        title:{
            en: "Data Analytics Platform",
            pt: "Plataforma de análise de dados"
        },
        desc: {
            pt: "Dashboard interativo para visualização de métricas de negócios, relatórios e processos de ETL.",
            en: "Interactive dashboard for business metrics visualization, reporting, and ETL workflows.",
        },
        tags:["PowerBI", "SQL","ETL"],
    },
    {
        title:{
            en: "Damage Calculator",
            pt: "Calculadora de Danos"
        },
        desc: {
            pt: "Modelagem de banco de dados e cálculo dinâmico de dano e scaling para e-sports competitivos.",
            en: "Database modeling and dynamic damage and scaling calculations for competitive e-sports.",
        },
        tags:["PostgreSQL", "Python"],
    },
    {
        title:{
            en: "E-commerce Website",
            pt: "Website E-commerce"
        },
        desc: {
            pt: "Aplicação web completa com catálogo dinâmico de produtos, autenticação e fluxo de checkout.",
            en: "Full-stack web application featuring dynamic catalog, user authentication, and checkout flow.",
        },
        tags:["React","TypeScript"]
    },
    {
        title:{
            en: "Game Engine Prototype",
            pt: "Protótipo de Game Engine"
        },
        desc: {
            pt: "Arquitetura orientada a objetos para gerenciamento de entidades e mecânicas de gameplay.",
            en: "Object-oriented architecture for entity management and core gameplay mechanics.",
        },
        tags:["C++", "Godot"]
    },
];