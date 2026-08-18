export default function Header() {
    return (
        <header className="sticky top-0 z-40 flex justify-between items-center py-2 bg-bg-dark/80 backdrop-blur-md">
            <h1 className="text-xl font-bold text-accent-purple">
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
    );
}