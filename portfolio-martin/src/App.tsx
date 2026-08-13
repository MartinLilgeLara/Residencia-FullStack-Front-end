export default function App() {
  return (
      <div className="min-h-screen bg-bg-dark text-white font-sans px-8 md:px-20 py-8">


        <header className="flex justify-between items-center py-6">
          <h1 className="text-2xl font-bold text-accent-purple">
            My Portfolio
          </h1>
          <nav>
            <ul className="flex gap-6 text-accent-purple font-medium">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>
        </header>


        <main className="my-16">
          <section id="home" className="space-y-4">
            <h2 className="text-5xl font-extrabold text-accent-orange leading-tight">
              Martin<br />Lara
            </h2>
            <p className="text-xl text-accent-orange font-medium">
              Junior Web Developer &<br />Data Scientist
            </p>
          </section>


          <section id="experience" className="mt-20">
            <h3 className="text-xl text-accent-purple font-semibold">Experiences</h3>

          </section>
        </main>

      </div>
  )
}