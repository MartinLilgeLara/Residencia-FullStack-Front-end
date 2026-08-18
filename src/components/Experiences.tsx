export default function Experiences(){
    return(
        <section id="experience" className="my-20">
            <h3 className="text-2xl font-bold text-accent-purple mb-6">
                Experiences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card Principal*/}
                <div className="border-2 border-accent-purple rounded-2xl p-6 flex flex-col justify-between md:row-span-3 bg-bg-dark/50">
                    <div>
                        <h4 className="text-accent-orange font-bold text-lg mb-4">
                            Experiencia principal
                        </h4>
                        <div className="w-full h-56 bg-neutral-800 rounded-xl mb-6 overflow-hidden border border-neutral-700 flex items-center justify-center text-neutral-500">
                            <span>Imagem1</span>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            texto explicando oq fiz
                        </p>
                    </div>
                    <div className="text-xs text-accent-orange mt-6">
                        <p>From <strong className="text-neutral-200">XXX</strong></p>
                        <p>Until <strong className="text-neutral-200">now</strong> </p>
                    </div>
                </div>
                {/* Card Lateral 1 */}
                <div className="border-2 border-accent-purple rounded-2xl p-4 flex gap-4 items-center bg-bg-dark/50">
                    <div className="w-24 h-24 bg-neutral-800 rounded-lg shrink-0 border border-neutral-700"></div>
                    <div>
                        <h4 className="text-accent-orange font-bold text-sm">Data Annotator at Outlier.ai</h4>
                        <p className="text-neutral-300 text-xs mt-1">texto explicando oq fiz</p>
                        <p className="text-[10px] text-accent-orange mt-2">From March 16, 2022 · Until Now</p>
                    </div>
                </div>

                {/* Card Lateral 2 */}
                <div className="border-2 border-accent-purple rounded-2xl p-4 flex gap-4 items-center bg-bg-dark/50">
                    <div className="w-24 h-24 bg-neutral-800 rounded-lg shrink-0 border border-neutral-700"></div>
                    <div>
                        <h4 className="text-accent-orange font-bold text-sm">Experiencia</h4>
                        <p className="text-neutral-300 text-xs mt-1">texto explicando oq fiz</p>
                        <p className="text-[10px] text-accent-orange mt-2">From March 16, 2022 · Until Now</p>
                    </div>
                </div>

                {/* Card Lateral 3 */}
                <div className="border-2 border-accent-purple rounded-2xl p-4 flex gap-4 items-center bg-bg-dark/50">
                    <div className="w-24 h-24 bg-neutral-800 rounded-lg shrink-0 border border-neutral-700"></div>
                    <div>
                        <h4 className="text-accent-orange font-bold text-sm">Experiencia</h4>
                        <p className="text-neutral-300 text-xs mt-1">texto explicando oq fiz</p>
                        <p className="text-[10px] text-accent-orange mt-2">From March 16, 2022 · Until Now</p>
                    </div>
                </div>
            </div>

        </section>
    )
}