import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import LanguageSelector from "./LanguageSelector";


export default function Header() {
    const { language, } = useLanguage();
    const t = translations[language].nav;

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center py-4 bg-bg-dark/80 backdrop-blur-md border-b border-neutral-800/50">
            <a
                href="#home"
                onClick={(e) => scrollToSection(e, "home")}
                className="text-4xl font-bold text-accent-purple hover:text-white transition-colors cursor-pointer"
            >
                {t.logo}
            </a>

            <div className="flex items-center gap-6">
                <nav>
                    <ul className="flex gap-6 text-accent-purple text-sm font-medium">
                        <li>
                            <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="hover:text-white transition-colors">
                                {t.home}
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={(e) => scrollToSection(e, "experience")} className="hover:text-white transition-colors">
                                {t.experience}
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")} className="hover:text-white transition-colors">
                                {t.projects}
                            </a>
                        </li>
                        <li>
                            <a href="#skills" onClick={(e) => scrollToSection(e, "skills")} className="hover:text-white transition-colors">
                                {t.skills}
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="hover:text-white transition-colors">
                                {t.contact}
                            </a>
                        </li>
                    </ul>
                </nav>
                <LanguageSelector />
            </div>
        </header>
    );
}