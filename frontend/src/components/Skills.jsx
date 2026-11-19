import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills({ data }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-group", {
        opacity: 0,
        y: 24,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      });
      gsap.from(".skill-chip", {
        opacity: 0,
        scale: 0.85,
        stagger: 0.02,
        duration: 0.4,
        ease: "back.out(2)",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const groups = Object.entries(data.skills);

  return (
    <section id="skills" ref={rootRef} className="relative border-y border-white/5 bg-panel/30 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow mb-3">// Systems Loadout</p>
        <h2 className="section-heading mb-14">
          Technical <span className="text-gradient-arc">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(([group, items]) => (
            <div key={group} className="skill-group panel hud-frame relative p-6">
              <span className="hud-tr" />
              <span className="hud-bl" />
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-stark-gold">{group}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="skill-chip rounded-sm border border-arc-cyan/25 bg-arc-cyan/5 px-3 py-1.5 text-sm text-ink-100 transition-colors hover:border-arc-cyan/70 hover:bg-arc-cyan/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
