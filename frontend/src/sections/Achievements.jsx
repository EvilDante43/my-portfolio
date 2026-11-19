import { Code2, Medal, Users } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { achievements } from '../data/content.js';

const icons = { medal: Medal, code: Code2, users: Users };

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[a.icon];
          return (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-line bg-card p-5">
                <Icon size={20} className="text-accent" aria-hidden="true" />
                <h3 className="mt-4 font-semibold tracking-tight">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
