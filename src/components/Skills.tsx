import {motion} from "framer-motion";
import {skillsData} from "../data/skills.ts";

export default function Skills(){

    return (
        <section id="skills" className="my-20 scroll-mt-24">

            <div className="mb-8">
                <span className="text-accent-purple text-lg block font-semibold">My</span>
                <h3 className="text-5xl font-black text-accent-purple tracking-wider">
                    SKILLS
                </h3>
            </div>


            <div className="flex flex-wrap gap-8 items-start">
                {skillsData.map((skill, index) => {
                    const IconComponent = skill.Icon
                    return (
                        <motion.div
                            key={index}
                            initial={{opacity:0, scale: 0.9}}
                            whileInView={{opacity:1, scale:1}}
                            viewport={{once:true}}
                            transition={{duration: 0.3, delay: index * 0.05}}
                            whileHover={{scale:1.05, y:-4}}
                            className="border border-neutral-800 hover:border-accent-purple bg-bg-dark p-4 rounded-2xl flex flex-col items-center justify-center gap-3 transitions-colors cursor-pointer group"
                            >
                            <div className={"w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-accent-purple transition-colors"}>
                                <IconComponent className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors"/>
                            </div>
                            <span className="text-xs font-semibold text-neutral-300 group-hover:text-accent-orange transitions-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );

}