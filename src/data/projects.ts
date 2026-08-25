export interface Projects{
    id:string;
    title:{
        pt:string;
        en:string;
    };
    shortDesc:{
        pt:string;
        en:string;
    };
    longDesc:{
        pt:string;
        en:string;
    };
    tags:string[];
    link:string;
}

export const projectsData: ({ title: {pt:string; en:string;}; shortDesc: {pt:string; en:string;}; tags: string[]; longDesc: {pt:string; en:string;}; id:string;}[]) = [
    {
        id: "flood-sim",
        title: {
            en: "Flood Simulation",
            pt: "Simulação de enchente"
        },
        shortDesc: {
            en: "Fluid simulation of 2024 Canoas flooding",
            pt: "Simulação de fluidos da enchente de 2024 em Canoas"
        },
        tags: ["Python", "Numpy"],
        longDesc: {
            pt: "Projeto desenvolvido para modelagem hidrológica e simulação visual da propagação de água com base em dados topográficos. Implementa matrizes NumPy para computação vetorial de fluxo e renderização com Matplotlib.",
            en: "Developed for hydrological modeling and visual simulation of water propagation based on topographic data. Uses NumPy matrices for vectorized flow computation and Matplotlib for rendering.",
        },
    },
    {
        id: "data-platform",
        title:{
            en: "Data Analytics Platform",
            pt: "Plataforma de análise de dados"
        },
        shortDesc: {
            pt: "Dashboard para visualização de métricas e ETL.",
            en: "Dashboard for business metrics and ETL pipelines.",
        },
        longDesc: {
            pt: "Estruturação de pipelines de dados em SQL com consolidação de métricas comerciais, modelagem dimensional e relatórios executivos interativos via Power BI.",
            en: "Structured SQL data pipelines consolidating core business metrics, dimensional data modeling, and interactive executive reporting via Power BI.",
        },
        tags:["PowerBI", "SQL","ETL"],
    },
    {
        id: "damage-calc",
        title:{
            en: "Damage Calculator",
            pt: "Calculadora de Danos"
        },
        shortDesc: {
            pt: "Modelagem de banco de dados e cálculo de scaling para e-sports.",
            en: "Database modeling and scaling calculations for e-sports.",
        },
        longDesc: {
            pt: "Modelagem relacional em PostgreSQL e rotinas em Python para simulação de curvas de scaling, tempo de recarga e dano efetivo em cenários competitivos de e-sports.",
            en: "Relational database modeling in PostgreSQL and Python routines to simulate scaling curves, cooldown states, and effective damage in competitive e-sports scenarios.",
        },
        tags:["PostgreSQL", "Python"],
    },
    {
        id: "ecommerce-app",
        title:{
            en: "E-commerce Website",
            pt: "Website E-commerce"
        },
        shortDesc: {
            pt: "Catálogo dinâmico, autenticação e fluxo de checkout.",
            en: "Dynamic catalog, authentication, and checkout flow.",
        },
        longDesc: {
            pt: "Aplicação web full-stack com catálogo de produtos, gerenciamento de estado global no carrinho, integração de autenticação de usuários e interface responsiva otimizada.",
            en: "Full-stack web application featuring product catalog, global cart state management, user authentication integration, and responsive optimized interface.",
        },

        tags:["React","TypeScript"]
    },
    {
        id: "game-engine",
        title:{
            en: "Game Engine Prototype",
            pt: "Protótipo de Game Engine"
        },
        shortDesc: {
            pt: "Arquitetura orientada a objetos para mecânicas de gameplay.",
            en: "Object-oriented architecture for gameplay mechanics.",
        },
        longDesc: {
            pt: "Arquitetura modular orientada a objetos desenvolvida para gerenciamento desacoplado de entidades, ciclo de vida de objetos e sistemas de eventos em tempo real.",
            en: "Modular object-oriented architecture built for decoupled entity management, object lifecycle, and real-time event systems.",
        },
        tags:["C++", "Godot"]
    },
];