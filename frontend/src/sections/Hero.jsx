import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Button, { external, resumeProps } from '../components/Button.jsx';
import { profile } from '../data/content.js';

const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };
const iconLink = 'grid h-11 w-11 place-items-center rounded-md border border-line text-muted hover:text-fg hover:border-fg/30';

export default function Hero() {
  return (
    <section id="home" className="flex min-h-[100svh] scroll-mt-14 items-center pb-16 pt-24">
      <motion.div
        className="mx-auto w-full max-w-6xl px-5 sm:px-8"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.09 } } }}
      >
        <motion.p variants={item} className="text-sm tracking-widest text-muted">HELLO, I&apos;M</motion.p>
        <motion.h1 variants={item} className="mt-4 text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-7xl lg:text-8xl">
          Soumya Shukla.
        </motion.h1>
        <motion.h2 variants={item} className="mt-4 text-xl font-medium tracking-tight text-muted sm:text-3xl">
          Full Stack Developer &amp; Software Engineer.
        </motion.h2>
        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          I&apos;m a Computer Science undergraduate passionate about building scalable web applications, solving challenging
          problems, and creating clean, user-friendly digital experiences.
        </motion.p>

        <motion.p variants={item} className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Open to Software Development Opportunities
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Button href="#projects">View My Work</Button>
          <Button {...resumeProps(profile)} variant="secondary" icon={Download}>Download Resume</Button>
          <Button href="#contact" variant="ghost" icon={Mail}>Contact Me</Button>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex gap-2">
          <a href={profile.github} aria-label="GitHub profile" className={iconLink} {...external}><Github size={18} /></a>
          <a href={profile.linkedin} aria-label="LinkedIn profile" className={iconLink} {...external}><Linkedin size={18} /></a>
        </motion.div>
      </motion.div>
    </section>
  );
}
