import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { featured, projects } from '../data/content.js';

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}><ProjectCard project={p} featured /></Reveal>
        ))}
      </div>
      <h3 className="mb-6 mt-16 text-lg font-semibold tracking-tight">More projects</h3>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.06}><ProjectCard project={p} /></Reveal>
        ))}
      </div>
    </Section>
  );
}
