import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * The signature element of the site: an animated arc reactor.
 * Outer ring rotates slowly, inner triangles rotate opposite,
 * and the core pulses like it's idling — powering the whole page.
 */
export default function ArcReactor({ size = 280 }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const coreRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(outerRef.current, {
        rotation: 360,
        duration: 22,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
      gsap.to(innerRef.current, {
        rotation: -360,
        duration: 14,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
      gsap.to(coreRef.current, {
        scale: 1.08,
        opacity: 0.85,
        duration: 1.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full blur-3xl bg-arc-cyan/20" />
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <circle cx="100" cy="100" r="96" fill="#0c0d13" stroke="rgba(79,216,255,0.15)" strokeWidth="1" />

        <g ref={outerRef}>
          {Array.from({ length: 12 }).map((_, i) => (
            <rect
              key={i}
              x="98.5"
              y="8"
              width="3"
              height="14"
              rx="1"
              fill="#4fd8ff"
              opacity={i % 3 === 0 ? 0.9 : 0.35}
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="78" fill="none" stroke="#4fd8ff" strokeWidth="1.5" opacity="0.5" />
        </g>

        <g ref={innerRef}>
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2="42"
              stroke="#ffc857"
              strokeWidth="2"
              opacity="0.55"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="46" fill="none" stroke="#ffc857" strokeWidth="2" opacity="0.7" />
        </g>

        <circle cx="100" cy="100" r="30" fill="#0c0d13" stroke="#4fd8ff" strokeWidth="1" />
        <g ref={coreRef}>
          <circle cx="100" cy="100" r="22" fill="url(#coreGlow)" />
          <circle cx="100" cy="100" r="10" fill="#eafcff" />
        </g>

        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#4fd8ff" />
            <stop offset="100%" stopColor="#1c5f73" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
