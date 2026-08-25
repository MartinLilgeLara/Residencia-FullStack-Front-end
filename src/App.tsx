import Header from "./components/Header";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import {LanguageProvider} from "./context/LanguageContext.tsx";


export default function App() {
  return (
      <LanguageProvider>
          <div className="min-h-screen bg-bg-dark text-white font-sans px-6 md:px-20 py-6 max-w-6xl mx-auto">
            <Header />
            <main>
                <Hero />
                <Experiences />
                <Skills />
                <Projects />
            </main>
              <Footer />
          </div>
      </LanguageProvider>
  );
}