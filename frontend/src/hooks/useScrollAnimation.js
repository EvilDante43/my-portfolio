import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (ref, animationType = "fadeIn", delay = 0) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let anim;

    if (animationType === "fadeIn") {
      anim = gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    } else if (animationType === "slideLeft") {
      anim = gsap.fromTo(
        el,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    } else if (animationType === "slideRight") {
      anim = gsap.fromTo(
        el,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    } else if (animationType === "hudReveal") {
      anim = gsap.fromTo(
        el,
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", opacity: 0 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          opacity: 1,
          duration: 1.2,
          delay,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      if (anim) {
        if (anim.scrollTrigger) anim.scrollTrigger.kill();
        anim.kill();
      }
    };
  }, [ref, animationType, delay]);
};

export default useScrollAnimation;
