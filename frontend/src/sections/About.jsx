import { Download } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Button, { resumeProps } from '../components/Button.jsx';
import { about, education, profile } from '../data/content.js';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="max-w-prose space-y-4 leading-relaxed text-muted">
          {about.map((p) => <p key={p}>{p}</p>)}
          <div className="pt-3">
            <Button {...resumeProps(profile)} variant="secondary" icon={Download}>Download Resume</Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mb-6 text-base font-semibold">Education</h3>
          <ol className="space-y-7 border-l border-line pl-6">
            {education.map((e) => (
              <li key={e.title} className="relative">
                <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent" />
                <p className="font-medium">{e.title}</p>
                <p className="mt-0.5 text-sm text-muted">{e.place}</p>
                <p className="mt-1 text-sm text-muted">{e.period} &middot; {e.detail}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
