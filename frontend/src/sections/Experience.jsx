import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { experience as x } from '../data/content.js';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <Reveal>
        <div className="relative border-l border-line pl-6 sm:pl-8">
          <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-lg font-semibold tracking-tight">{x.role}</h3>
            <p className="text-sm text-muted">{x.period}</p>
          </div>
          <p className="mt-1 text-sm text-muted">{x.company} &middot; {x.location}</p>
          <ul className="mt-5 max-w-3xl space-y-3 text-muted">
            {x.points.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed"><span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />{p}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
