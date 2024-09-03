import Navbar from './components/Navbar';
import Hero from './components/Hero';  
import EducationTimeline from './components/Education';
import Technologies from './components/Technologies';
import About from './components/About';
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import { GrTechnology } from 'react-icons/gr';
import Sidebar from './components/Sidebar/Sidebar';


const App = () => {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 scroll-smooth">
            <Sidebar /> 
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            </div>
            <div className="container mx-auto px-8">
                <section id="home">
                    <Navbar />
                    <Hero />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="technologies">
                    <Technologies />
                </section>
                <section id="education">
                    <EducationTimeline />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </div>
    );
};
export default App;
