import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements({ data }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".log-entry", {
        opacity: 0,
        x: -20,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={rootRef} className="relative mx-auto max-w-6xl px-6 py-28">
      <p className="eyebrow mb-3">// Mission Log</p>
      <h2 className="section-heading mb-14">
        Achievements <span className="text-gradient-arc">& Recognition</span>
      </h2>

      <div className="panel hud-frame relative divide-y divide-white/5 p-2">
        <span className="hud-tr" />
        <span className="hud-bl" />
        {data.achievements.map((item, i) => (
          <div key={i} className="log-entry flex items-start gap-4 p-6">
            <span className="font-mono text-xs text-arc-cyan/70">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-sm leading-relaxed text-ink-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
