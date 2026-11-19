import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/content.js';
import { external } from './Button.jsx';

const iconLink = 'grid h-10 w-10 place-items-center rounded-md text-muted hover:bg-fg/5 hover:text-fg';

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">Designed and developed with care.</p>
          <a href={`mailto:${profile.email}`} className="mt-3 inline-block text-sm text-muted hover:text-fg">{profile.email}</a>
          <p className="mt-4 text-xs text-muted">&copy; {new Date().getFullYear()} {profile.name}</p>
        </div>
        <div className="flex items-center gap-1">
          <a href={profile.github} aria-label="GitHub" className={iconLink} {...external}><Github size={18} /></a>
          <a href={profile.linkedin} aria-label="LinkedIn" className={iconLink} {...external}><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}><Mail size={18} /></a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ml-2 inline-flex min-h-[40px] items-center gap-2 rounded-md border border-line px-3 text-sm text-muted hover:text-fg"
          >
            <ArrowUp size={16} aria-hidden="true" /> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
