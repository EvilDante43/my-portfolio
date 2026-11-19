import { useState } from 'react';
import { Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Button from '../components/Button.jsx';
import { profile } from '../data/content.js';

const API = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');
const empty = { name: '', email: '', subject: '', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your full name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject of at least 3 characters.';
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.';
  return e;
}

function Field({ id, label, error, as: Tag = 'input', ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <Tag
        id={id}
        name={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className="w-full rounded-md border border-line bg-bg px-3 py-2.5 text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none aria-[invalid=true]:border-red-500"
        {...props}
      />
      {error && <p id={`${id}-err`} className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'loading') return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('loading');
    try {
      const res = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setValues(empty);
        setStatus('success');
        return;
      }
      const data = await res.json().catch(() => ({}));
      if (res.status === 400 && data.errors) setErrors(data.errors);
      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  const info = [
    { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, text: profile.location },
  ];

  return (
    <Section id="contact" title="Get in touch">
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <p className="max-w-sm leading-relaxed text-muted">
            Have a role, project or question in mind? Send a message and it lands straight in my inbox.
          </p>
          <ul className="mt-8 space-y-4">
            {info.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-center gap-3 text-sm">
                <Icon size={16} className="text-accent" aria-hidden="true" />
                {href ? <a href={href} className="break-all hover:underline">{text}</a> : text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-3">
          <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-xl border border-line bg-card p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="name" label="Full Name" autoComplete="name" value={values.name} onChange={onChange} error={errors.name} />
              <Field id="email" label="Email Address" type="email" autoComplete="email" value={values.email} onChange={onChange} error={errors.email} />
            </div>
            <Field id="subject" label="Subject" value={values.subject} onChange={onChange} error={errors.subject} />
            <Field id="message" label="Message" as="textarea" rows={6} value={values.message} onChange={onChange} error={errors.message} />

            <Button type="submit" disabled={status === 'loading'} icon={status === 'loading' ? Loader2 : Send} spin={status === 'loading'} className="w-full sm:w-auto">
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>

            <div aria-live="polite">
              {status === 'success' && (
                <p role="status" className="rounded-md border border-emerald-500/40 bg-emerald-500/10 px-3 py-2.5 text-sm text-emerald-600 dark:text-emerald-400">
                  Thanks for reaching out! Your message has been sent successfully.
                </p>
              )}
              {status === 'error' && (
                <p role="alert" className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2.5 text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again later.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
