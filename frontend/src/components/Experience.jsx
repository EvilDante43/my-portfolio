import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience({ data }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-reveal", {
        opacity: 0,
        x: -24,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={rootRef} className="relative border-y border-white/5 bg-panel/30 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-3">// Deployment History</p>
        <h2 className="section-heading mb-14">
          Field <span className="text-gradient-arc">Experience</span>
        </h2>

        <div className="space-y-8">
          {data.experience.map((exp, i) => (
            <div key={i} className="exp-reveal panel hud-frame relative grid gap-6 p-8 md:grid-cols-[0.8fr_2fr]">
              <span className="hud-tr" />
              <span className="hud-bl" />
              <div>
                <h3 className="font-display text-xl font-bold text-ink-100">{exp.role}</h3>
                <p className="mt-1 text-sm text-arc-cyan">{exp.company}</p>
                <p className="mt-3 inline-block rounded-sm border border-stark-gold/30 px-3 py-1 font-mono text-[11px] tracking-wider text-stark-goldBright">
                  {exp.period}
                </p>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stark-red" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
