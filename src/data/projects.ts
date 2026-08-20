export interface Projects{
    title:string;
    desc:string;
    tags:string[];
    link:string;
}

export const projectsData: ({ title: string; desc: string; tags: string[] }[]) = [
    {
        title:"Flood Simulation",
        desc:"Fluid simulation of 2024 Canoas flooding",
        tags:["Python","Numpy"],
    },
    {
        title:"Data Analytics Platform",
        desc:"Dashboard for metrics visualization and ETL",
        tags:["PowerBI", "SQL"],
    },
    {
        title:"Damage Calculator",
        desc:"Dynamic damage calculator using a database",
        tags:["PostgreSQL", "Python"],
    },
    {
        title:"E-commerce Website",
        desc:"Complete web application with dynamic catalog and checkout",
        tags:["React","TypeScript"]
    },
    {
        title:"Game engine prototype",
        desc:"Object oriented architecture for game mechanics",
        tags:["C++", "Godot"]
    },
];