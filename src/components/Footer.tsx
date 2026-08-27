import { useLanguage } from "../context/LanguageContext";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "GitHub", href: "https://github.com/SEU_USUARIO", icon: <FiGithub className="w-5 h-5" /> },
        { name: "LinkedIn", href: "https://linkedin.com/in/SEU_USUARIO", icon: <FiLinkedin className="w-5 h-5" /> },
        { name: "X (Twitter)", href: "https://x.com/SEU_USUARIO", icon: <FaXTwitter className="w-5 h-5" /> },
    ];

    return (
        <footer className="mt-16 border-t border-neutral-800/80 py-10 text-center flex flex-col items-center justify-center gap-5">
            <div className="flex items-center gap-4">
                {socialLinks.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-accent-orange hover:border-accent-purple/60 hover:-translate-y-1 transition-all duration-300 shadow-md"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>

            <p className="text-xs md:text-sm text-neutral-500">
                © {currentYear} •{" "}
                {language === "pt"
                    ? "Desenvolvido com React, TypeScript & Tailwind CSS"
                    : "Built with React, TypeScript & Tailwind CSS"}
            </p>
        </footer>
    );
}