import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import{projectsData} from "../data/projects.ts";
import {useLanguage} from "../context/LanguageContext.tsx";
import { translations } from "../data/translations";
import {FiX} from "react-icons/fi";

type ProjectItem = typeof projectsData[number];

export default function Projects(){
    const{language}= useLanguage();
    const t = translations[language].sections
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const handleSelect = (project: ProjectItem) => {
        setSelectedProject((prev) => (prev?.id === project.id ? null : project));
    };

    return(
            <section id="projects" className="my-20 scroll-mt-24">


                <h3 className="text-2xl font-bold text-accent-purple mb-6">
                    {t.projectsTitle}
                </h3>


                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {projectsData.map((project, index) => {
                        const isSelected= selectedProject?.id === project.id;
                    return(
                        <motion.div
                            key={project.id}
                            initial={{opacity: 0, y:30}}
                            whileInView={{opacity: 1, y:0}}
                            viewport={{once:true}}
                            transition={{duration:1, delay: index * 0.2}}
                            whileHover={{y: -4}}
                            onClick={() =>handleSelect(project)}
                            className={`border-2 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 cursor-pointer group ${
                                isSelected
                                    ? "border-accent-orange bg-bg-dark shadow-lg shadow-accent-orange/15"
                                    : "border-accent-purple bg-bg-dark/50 hover:border-accent-orange"
                            }`}
                        >
                            <div>

                                <div className="w-full aspect-video bg-neutral-800 rounded-xl mb-3 border border-neutral-700 overflow-hidden flex items-center justify-center text-neutral-500 text-xs">
                                    <span>Preview</span>
                                </div>


                                <h4 className="text-accent-orange font-bold text-sm mb-1 leading-snug">
                                    {project.title[language]}
                                </h4>


                                <p className="text-neutral-300 text-xs leading-relaxed line-clamp-3 mb-3">
                                    {project.shortDesc[language]}
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
                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-800/60 text-[10px] text-neutral-500 font-medium">
                                <span>{t.expandHint}</span>
                                    <span className={isSelected ? "text-accent-orange font-bold" : "text-neutral-400"}>
                                    {isSelected ? "▲" : "▼"}
                                    </span>
                                </div>

                            </motion.div>
                            );
                        })}
                    </div>
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            key={selectedProject.id}
                            initial={{ opacity: 0, y: 20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: 15, height: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="overflow-hidden mt-6"
                        >
                            <div className="border-2 border-accent-orange bg-bg-dark rounded-2xl p-6 md:p-8 relative shadow-2xl">

                                <button
                                    type="button"
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                                    title={language === "pt" ? "Fechar detalhes" : "Close details"}
                                >
                                    <FiX className="w-5 h-5" />
                                </button>

                                <div className="max-w-3xl">
                                    <span className="text-xs uppercase tracking-wider text-accent-orange font-semibold">
                                      {t.featuredBadge}
                                    </span>

                                    <h4 className="text-2xl font-bold text-white mt-1 mb-3">
                                        {selectedProject.title[language]}
                                    </h4>

                                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                                        {selectedProject.longDesc[language]}
                                    </p>


                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-neutral-900 text-neutral-300 border border-neutral-700 px-3 py-1 rounded-md"
                                            >
                                            {tag}
                                            </span>
                                            ))}
                                    </div>


                                    </div>
                                </div>

                        </motion.div>
                    )}
                </AnimatePresence>
                </section>

    )
}