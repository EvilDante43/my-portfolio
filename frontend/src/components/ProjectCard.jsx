import { ExternalLink } from 'lucide-react';
import Preview from './Preview.jsx';
import Button, { external } from './Button.jsx';

const Tags = ({ items }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.map((t) => (
      <li key={t} className="rounded border border-line px-2 py-0.5 text-xs text-muted">{t}</li>
    ))}
  </ul>
);

const Links = ({ links }) => (
  <div className="flex flex-wrap gap-2">
    {links.map((l) => (
      <Button key={l.href} href={l.href} icon={ExternalLink} variant="secondary" {...external}>{l.label}</Button>
    ))}
  </div>
);

const Features = ({ items }) => (
  <ul className="grid gap-x-6 gap-y-1.5 text-sm text-muted sm:grid-cols-2">
    {items.map((f) => (
      <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{f}</li>
    ))}
  </ul>
);

export default function ProjectCard({ project, featured = false }) {
  const { title, description, features, stack, links, related } = project;
  return (
    <article className="group flex h-full flex-col rounded-xl border border-line bg-card p-4 transition hover:border-fg/25 sm:p-5">
      <Preview project={project} />
      <div className="mt-5 flex flex-1 flex-col gap-4">
        <h3 className={`font-semibold tracking-tight ${featured ? 'text-xl' : 'text-lg'}`}>{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        {features && <Features items={features} />}
        <Tags items={stack} />
        <div className="mt-auto pt-1"><Links links={links} /></div>

        {related && (
          <div className="mt-2 flex flex-col gap-4 border-t border-line pt-5">
            <h4 className="text-base font-semibold tracking-tight">{related.title}</h4>
            <p className="text-sm leading-relaxed text-muted">{related.description}</p>
            <Features items={related.features} />
            <Tags items={related.stack} />
            <Links links={related.links} />
          </div>
        )}
      </div>
    </article>
  );
}
