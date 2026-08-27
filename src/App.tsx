import Header from "./components/Header";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import {LanguageProvider} from "./context/LanguageContext.tsx";
import Background from "./components/Background.tsx";
import ContactForm from "./components/ContactForm.tsx"
export default function App() {
  return (
      <LanguageProvider>
          <div className="relative min-h-screen text-white font-sans overflow-x-hidden">
              {/* Camada 3D do Vanta.js (atrás de tudo) */}
              <Background />
          <div className="max-w-6xl mx-auto px-6 md:px-20 py-6 flex flex-col min-h-screen">
            <Header />
            <main>
                <Hero />
                <Experiences />
                <Skills />
                <Projects />
                <ContactForm />
            </main>
              <Footer />
          </div>
          </div>
      </LanguageProvider>
  );
}