import { useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';
import { navItems, profile } from '../data/content.js';
import Button, { resumeProps } from './Button.jsx';

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const ThemeIcon = theme === 'dark' ? Sun : Moon;
  const themeBtn = (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="grid h-10 w-10 place-items-center rounded-md text-muted hover:bg-fg/5 hover:text-fg"
    >
      <ThemeIcon size={18} aria-hidden="true" />
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/95">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-sm font-semibold tracking-tight">{profile.name}</a>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? 'true' : undefined}
                className={`relative py-1 text-sm ${active === n.id ? 'text-fg' : 'text-muted hover:text-fg'}`}
              >
                {n.label}
                {active === n.id && <span className="absolute inset-x-0 -bottom-[17px] h-px bg-accent" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          {themeBtn}
          <Button {...resumeProps(profile)} icon={Download} className="ml-1 hidden !min-h-[36px] sm:inline-flex">Resume</Button>
          <button
            className="grid h-10 w-10 place-items-center rounded-md text-muted hover:bg-fg/5 hover:text-fg lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg lg:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 text-base ${active === n.id ? 'text-fg' : 'text-muted'}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Button {...resumeProps(profile)} icon={Download} className="w-full">Download Resume</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
