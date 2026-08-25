import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiencesData } from "../data/experiences";
import {useLanguage} from "../context/LanguageContext.tsx";
import { translations } from "../data/translations";

export default function Experiences() {

    const{language}= useLanguage();
    const t = translations[language].sections
    const [selectedId, setSelectedId] = useState<string>(experiencesData[0]?.id || "1");
    const featured = experiencesData.find((exp) => exp.id === selectedId) || experiencesData[0];
    const secondary = experiencesData.filter((exp) => exp.id !== selectedId);

    if (!featured) return null;

    return (
        <section id="experience" className="my-20 scroll-mt-24">
            <h3 className="text-2xl font-bold text-accent-purple mb-6">
                {t.experienceTitle}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                <AnimatePresence mode="wait">
                    <motion.div
                        key={featured.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="md:col-span-2 border-2 border-accent-purple bg-bg-dark/80 rounded-2xl p-6 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                <div>
                  <span className="text-xs uppercase tracking-wider text-accent-orange font-semibold">
                    {t.featuredBadge}
                  </span>
                                    <h4 className="text-xl font-bold text-white mt-1">
                                        {featured.role[language]}
                                    </h4>
                                    <p className="text-sm text-accent-purple font-medium">
                                        {featured.company}
                                    </p>
                                </div>
                                <span className="text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                  {featured.period[language]}
                </span>
                            </div>

                            <p className="text-neutral-300 text-sm leading-relaxed mt-4">
                                {featured.description[language]}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-neutral-800">
                            {featured.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-neutral-900 text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-800"
                                >
                  {tag}
                </span>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>


                <div className="flex flex-col gap-4">
                    {secondary.map((exp) => (
                        <motion.div
                            key={exp.id}
                            layout
                            whileHover={{ scale: 1.02, x: -4 }}
                            onClick={() => setSelectedId(exp.id)}
                            className="border border-neutral-800 hover:border-accent-orange bg-bg-dark/40 hover:bg-bg-dark rounded-2xl p-4 flex flex-col justify-between transition-colors cursor-pointer group"
                        >
                            <div>
                                <div className="flex justify-between items-start gap-2 mb-1">
                                    <h4 className="text-sm font-bold text-white group-hover:text-accent-orange transition-colors">
                                        {exp.role[language]}
                                    </h4>
                                    <span className="text-[10px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-full whitespace-nowrap">
                    {exp.period[language]}
                  </span>
                                </div>
                                <p className="text-xs text-accent-purple font-medium mb-2">
                                    {exp.company}
                                </p>
                                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                                    {exp.description[language]}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-800/60 text-[10px] text-neutral-500">
                                <span>{t.expandHint}</span>
                                <span className="text-accent-orange font-bold">→</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}