import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { FiGlobe } from "react-icons/fi";
import { FlagBR, FlagUS } from "./Flags";


export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-1 bg-neutral-900/80 p-1 rounded-full border border-neutral-800">

            <span className="pl-2 pr-1 text-neutral-500 text-xs flex items-center">
        <FiGlobe className="w-3.5 h-3.5" />
      </span>

            <div className="relative flex items-center w-28">

                <motion.div
                    className="absolute top-0 bottom-0 left-0 w-1/2 bg-accent-purple rounded-full shadow-sm"
                    initial={false}
                    animate={{
                        x: language === "pt" ? "0%" : "100%",
                    }}
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />


                <button
                    type="button"
                    onClick={() => setLanguage("pt")}
                    className={`relative z-10 w-1/2 py-1 text-xs font-semibold text-center rounded-full transition-colors cursor-pointer ${
                        language === "pt" ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                    }`}
                    title="Portugues"
                >
                    <FlagBR className="w-3.5 h-3.5" />
                    <span>PT</span>
                </button>


                <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`relative z-10 w-1/2 py-1 text-xs font-semibold text-center rounded-full transition-colors cursor-pointer ${
                        language === "en" ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                    }`}
                    title="English"
                >
                    <FlagUS className="w-3.5 h-3.5" />
                    <span>EN</span>
                </button>
                </div>
        </div>
    );
}