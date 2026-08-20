import type {IconType} from "react-icons";
import {
    SiPython,
    SiReact,
    SiTypescript,
    SiPostgresql,
    SiCplusplus,
    SiTailwindcss,
    SiGit,
    SiNodedotjs
} from "react-icons/si";

export interface Skill {
    name:string;
    Icon: IconType;
}

export const skillsData: Skill[]=[
    {name: "Python", Icon: SiPython},
    {name: "React", Icon: SiReact},
    {name: "TypeScript", Icon: SiTypescript},
    {name: "PostgreSQL", Icon: SiPostgresql},
    {name: "C++", Icon: SiCplusplus},
    {name: "Tailwind", Icon: SiTailwindcss},
    {name: "Git", Icon: SiGit},
    {name:"Node.js", Icon: SiNodedotjs},

]