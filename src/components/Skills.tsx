export default function Skills(){
    const skillsList = [
        {name: "JavaScript\nTypeScript"},
        {name: "HTML\nCSS"},
        {name: "Python"},
        {name: "MySQL"},
        {name: "Java"},
        {name: "Git"},
    ]
    return (
        <section id="skills" className="my-20 scroll-mt-24">

            <div className="mb-8">
                <span className="text-accent-purple text-lg block font-semibold">My</span>
                <h3 className="text-5xl font-black text-accent-purple tracking-wider">
                    SKILLS
                </h3>
            </div>


            <div className="flex flex-wrap gap-8 items-start">
                {skillsList.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center w-20 group">

                        <div className="w-16 h-16 bg-[#d2db96] rounded-2xl flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 cursor-pointer">

                            <div className="w-8 h-8 bg-neutral-800/40 rounded-full"></div>

                        </div>

                        <span className="text-accent-orange text-xs font-bold text-center mt-3 leading-tight whitespace-pre-line">
              {skill.name}
            </span>

                    </div>
                ))}
            </div>
        </section>
    );

}