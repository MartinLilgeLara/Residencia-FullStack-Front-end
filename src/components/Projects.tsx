import{motion} from "framer-motion";
import{projectsData} from "../data/projects.ts";
import {useLanguage} from "../context/LanguageContext.tsx";
import { translations } from "../data/translations";

export default function Projects(){
    const{language}= useLanguage();
    const t = translations[language].sections

    return(
            <section id="projects" className="my-20 scroll-mt-24">


                <h3 className="text-2xl font-bold text-accent-purple mb-6">
                    {t.projectsTitle}
                </h3>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y:30}}
                            whileInView={{opacity: 1, y:0}}
                            viewport={{once:true}}
                            transition={{duration:1, delay: index * 0.2}}
                            className="border-2 border-accent-purple rounded-2xl p-4 flex flex-col justify-between bg-bg-dark/50 hover:border-accent-orange hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        >
                            <div>

                                <div className="w-full aspect-video bg-neutral-800 rounded-xl mb-3 border border-neutral-700 overflow-hidden flex items-center justify-center text-neutral-500 text-xs">
                                    <span>Preview</span>
                                </div>


                                <h4 className="text-accent-orange font-bold text-sm mb-1 leading-snug">
                                    {project.title[language]}
                                </h4>


                                <p className="text-neutral-300 text-xs leading-relaxed line-clamp-3 mb-3">
                                    {project.desc[language]}
                                </p>
                            </div>


                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-800">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="text-[10px] bg-neutral-900 text-neutral-400 px-2 py-0.5 rounded-md border border-neutral-800"
                                    >
                  {tag}
                </span>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>
            </section>

    )
}