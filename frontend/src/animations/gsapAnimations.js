import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Fade in animation
export const fadeIn = (element, delay = 0, duration = 0.8) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
    }
  );
};

// Slide in animation
export const slideIn = (element, direction = "left", delay = 0, duration = 0.8) => {
  const xVal = direction === "left" ? -50 : direction === "right" ? 50 : 0;
  const yVal = direction === "up" ? 50 : direction === "down" ? -50 : 0;

  return gsap.fromTo(
    element,
    { opacity: 0, x: xVal, y: yVal },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
    }
  );
};

// HUD Scanning lines/reveal animation
export const hudReveal = (element, delay = 0) => {
  return gsap.fromTo(
    element,
    { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 },
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      opacity: 1,
      duration: 1.2,
      delay,
      ease: "power4.inOut",
    }
  );
};

// Glow pulse animation
export const glowPulse = (element) => {
  return gsap.to(element, {
    boxShadow: "0 0 15px rgba(0, 240, 255, 0.6), inset 0 0 8px rgba(0, 240, 255, 0.3)",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
};

// Staggered reveal for menu/grids
export const staggerReveal = (elements, delay = 0, stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30, scale: 0.95 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger,
      delay,
      duration: 0.8,
      ease: "back.out(1.2)",
    }
  );
};
