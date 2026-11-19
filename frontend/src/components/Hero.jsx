import { useEffect, useRef } from "react";
import gsap from "gsap";
import ArcReactor from "./ArcReactor.jsx";

export default function Hero({ data }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 14, duration: 0.6 })
        .from(".hero-name-line", { opacity: 0, y: 40, stagger: 0.12, duration: 0.8 }, "-=0.2")
        .from(".hero-tagline", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-cta", { opacity: 0, y: 16, stagger: 0.1, duration: 0.5 }, "-=0.3")
        .from(".hero-reactor", { opacity: 0, scale: 0.7, duration: 1, ease: "back.out(1.4)" }, "-=0.9")
        .from(".hero-stat", { opacity: 0, y: 12, stagger: 0.08, duration: 0.5 }, "-=0.4");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const name = data.name.split(" ");

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-lines bg-[size:44px_44px] pt-24"
    >
      <div className="pointer-events-none absolute inset-0 scanline-overlay" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-stark-red/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="hero-eyebrow eyebrow mb-5">// {data.role}</p>

          <h1 className="font-display font-black leading-[0.95] text-ink-100">
            {name.map((word, i) => (
              <span key={i} className="hero-name-line block text-5xl sm:text-6xl md:text-7xl">
                {i === name.length - 1 ? <span className="text-gradient-arc">{word}</span> : word}
              </span>
            ))}
          </h1>

          <p className="hero-tagline mt-6 max-w-xl font-body text-lg text-ink-300">{data.summary}</p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="hero-cta btn-repulsor">
              View Projects
            </a>
            <a href="#contact" className="hero-cta btn-ghost">
              Open Channel
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            <div className="hero-stat">
              <p className="font-display text-2xl font-extrabold text-arc-cyan">8.25</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">CGPA / 10</p>
            </div>
            <div className="hero-stat">
              <p className="font-display text-2xl font-extrabold text-arc-cyan">250+</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">DSA Solved</p>
            </div>
            <div className="hero-stat">
              <p className="font-display text-2xl font-extrabold text-arc-cyan">Top 5%</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">NPTEL Java</p>
            </div>
          </div>
        </div>

        <div className="hero-reactor flex justify-center md:justify-end">
          <ArcReactor size={320} />
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-ink-500 hover:text-arc-cyan"
      >
        SCROLL ↓
      </a>
    </section>
  );
}
