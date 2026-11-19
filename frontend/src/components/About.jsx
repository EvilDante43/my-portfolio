import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About({ data }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={rootRef} className="relative mx-auto max-w-6xl px-6 py-28">
      <p className="about-reveal eyebrow mb-3">// Dossier 01</p>
      <h2 className="about-reveal section-heading mb-14">
        About the <span className="text-gradient-arc">Engineer</span>
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr]">
        <div className="about-reveal panel hud-frame relative p-8">
          <span className="hud-tr" />
          <span className="hud-bl" />
          <p className="font-mono text-xs uppercase tracking-widest text-stark-gold">Bio Readout</p>
          <p className="mt-4 font-body text-base leading-relaxed text-ink-300">{data.summary}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 font-mono text-xs text-ink-500">
            <p>
              EMAIL <br />
              <span className="text-ink-100">{data.contact.email}</span>
            </p>
            <p>
              PHONE <br />
              <span className="text-ink-100">{data.contact.phone}</span>
            </p>
          </div>
        </div>

        <div className="about-reveal">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-stark-gold">Education Log</p>
          <ol className="relative border-l border-arc-cyan/25 pl-8">
            {data.education.map((edu, i) => (
              <li key={i} className="mb-10 last:mb-0">
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-arc-cyan shadow-arc" />
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-500">{edu.period}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink-100">{edu.degree}</h3>
                <p className="text-sm text-ink-300">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-stark-goldBright">{edu.score}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
