import Header from "./components/Header";
import Hero from "./components/Hero";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
      <div className="min-h-screen bg-bg-dark text-white font-sans px-6 md:px-20 py-6 max-w-6xl mx-auto">
        <Header />
        <main>
            <Hero />
            <Experiences />
            <Skills />
        </main>
          <Footer />
      </div>
  );
}