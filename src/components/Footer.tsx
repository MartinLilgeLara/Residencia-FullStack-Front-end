import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";

export default function ContactForm() {
    const { language } = useLanguage();
    const t = translations[language].contact;
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "5a20d472-2e3f-4df0-924d-04d50a7a044d");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
                setTimeout(()=>{
                    setStatus("idle");
                },4000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 4000);
            }
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-3">
            <input
                type="text"
                name="name"
                required
                placeholder={t.namePlaceholder}
                className="px-4 py-2.5 rounded-xl bg-bg-dark border text-white text-sm focus:border-accent-purple outline-none"
            />
            <input
                type="email"
                name="email"
                required
                placeholder={t.emailPlaceholder}
                className="px-4 py-2.5 rounded-xl bg-bg-dark border text-white text-sm focus:border-accent-purple outline-none"
            />
            <textarea
                name="message"
                required
                rows={4}
                placeholder={t.messagePlaceholder}
                className="px-4 py-2.5 rounded-xl bg-bg-dark border text-white text-sm focus:border-accent-purple outline-none resize-none"
            />

            <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-accent-purple hover:bg-accent-purple/80 text-white font-semibold text-sm transition-all cursor-pointer disabled:opacity-50"
            >
                {status === "loading" && <span>{t.sendingButton}</span>}

                {status === "success" && (
                    <>
                        <FiCheck className="text-accent-orange" />
                        <span>{t.successMessage}</span>
                    </>
                )}

                {status === "error" && (
                    <>
                        <FiAlertCircle className="text-red-400" />
                        <span>{t.errorMessage}</span>
                    </>
                )}

                {status === "idle" && (
                    <>
                        <FiSend />
                        <span>{t.sendButton}</span>
                    </>
                )}
            </button>
        </form>
    );
}