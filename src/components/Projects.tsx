export default function Projects(){
    const projectsList: ({ title: string; desc: string; tags: string[] }[]) = [
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

    return(
            <section id="projects" className="my-20 scroll-mt-24">


                <h3 className="text-2xl font-bold text-[#6c5ce7] mb-6">
                    Projects
                </h3>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {projectsList.map((project, index) => (
                        <div
                            key={index}
                            className="border-2 border-[#6c5ce7] rounded-2xl p-4 flex flex-col justify-between bg-[#1a1a1a]/50 hover:border-[#e67e22] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                        >
                            <div>

                                <div className="w-full aspect-video bg-neutral-800 rounded-xl mb-3 border border-neutral-700 overflow-hidden flex items-center justify-center text-neutral-500 text-xs">
                                    <span>Preview</span>
                                </div>


                                <h4 className="text-[#e67e22] font-bold text-sm mb-1 leading-snug">
                                    {project.title}
                                </h4>


                                <p className="text-neutral-300 text-xs leading-relaxed line-clamp-3 mb-3">
                                    {project.desc}
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

                        </div>
                    ))}
                </div>
            </section>

    )
}