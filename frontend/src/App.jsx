import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Achievements from './sections/Achievements.jsx';
import Contact from './sections/Contact.jsx';
import useActiveSection from './hooks/useActiveSection.js';
import { navItems } from './data/content.js';

const ids = navItems.map((n) => n.id);

export default function App() {
  const active = useActiveSection(ids);
  return (
    <MotionConfig reducedMotion="user">
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
