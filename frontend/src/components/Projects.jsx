import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ data }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 82%" },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={rootRef} className="relative mx-auto max-w-6xl px-6 py-28">
      <p className="eyebrow mb-3">// Suit Archive</p>
      <h2 className="section-heading mb-14">
        Featured <span className="text-gradient-arc">Builds</span>
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {data.projects.map((project, i) => (
          <article
            key={i}
            className="project-card hud-frame group relative overflow-hidden border border-white/5 bg-panel/60 p-8 transition-colors hover:border-arc-cyan/30"
          >
            <span className="hud-tr" />
            <span className="hud-bl" />
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-stark-red/10 blur-3xl transition-opacity group-hover:opacity-80" />

            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink-100">{project.title}</h3>
                <p className="text-sm text-arc-cyan">{project.subtitle}</p>
              </div>
              <span className="font-mono text-[11px] tracking-wider text-ink-500">{project.period}</span>
            </div>

            <ul className="mb-6 space-y-2">
              {project.points.map((point, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stark-gold" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mb-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-sm border border-white/10 bg-void/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="border-t border-white/10 pt-4 font-mono text-[11px] text-ink-500">
              {project.deployment}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
