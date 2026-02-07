import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies scroll-linked parallax to any element with data-parallax-speed.
 * Speed value: 0.1 = subtle, 1.0 = strong movement.
 */
export function useParallax() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray<HTMLElement>("[data-parallax-speed]");

      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed || "0.5");
        const yDistance = speed * 200;

        gsap.fromTo(
          el,
          { y: -yDistance / 2 },
          {
            y: yDistance / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
}
