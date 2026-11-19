import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ArcReactor from "./ArcReactor.jsx";

const BOOT_LINES = [
  "INITIALIZING MARK PORTFOLIO OS...",
  "CALIBRATING REPULSOR UI...",
  "LINKING TO STARK MAINFRAME...",
  "SYSTEMS NOMINAL. WELCOME.",
];

export default function BootLoader({ onDone }) {
  const rootRef = useRef(null);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((i) => (i < BOOT_LINES.length - 1 ? i + 1 : i));
    }, 420);

    const timeout = setTimeout(() => {
      gsap.to(rootRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: onDone,
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onDone]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
    >
      <ArcReactor size={140} />
      <div className="mt-8 h-6 font-mono text-xs tracking-[0.3em] text-arc-cyan/80">
        {BOOT_LINES[lineIndex]}
      </div>
      <div className="mt-4 h-[2px] w-56 overflow-hidden bg-white/10">
        <div className="h-full w-full origin-left animate-loadbar bg-gradient-to-r from-arc-cyan to-stark-gold" />
      </div>
    </div>
  );
}
