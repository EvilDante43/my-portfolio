import { Code2, Database, LayoutTemplate, Server, Wrench } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { skills } from '../data/content.js';

const icons = { code: Code2, layout: LayoutTemplate, server: Server, db: Database, tools: Wrench };

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.group} delay={i * 0.05} className={i === skills.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <div className="h-full rounded-xl border border-line bg-card p-5">
                <h3 className="mb-4 flex items-center gap-2.5 text-sm font-semibold">
                  <Icon size={16} className="text-accent" aria-hidden="true" /> {g.group}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-md border border-line px-2.5 py-1 text-sm text-muted">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
