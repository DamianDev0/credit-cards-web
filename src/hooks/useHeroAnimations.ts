import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function useHeroAnimations(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Headline chars stagger reveal
      const headlines = container.querySelectorAll("[data-hero-headline] h1");
      if (headlines.length) {
        const split = new SplitText(headlines, {
          type: "chars",
        });

        tl.from(split.chars, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "power4.out",
        });

        // Revert SplitText DOM after animation completes
        tl.call(() => split.revert(), [], "+=0.1");
      }

      // 2. Divider line scales from left
      const divider = container.querySelector("[data-hero-description] .h-px");
      if (divider) {
        tl.from(divider, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.6,
        }, "-=0.4");
      }

      // 3. Description paragraph fades up
      const paragraph = container.querySelector("[data-hero-description] p");
      if (paragraph) {
        tl.from(paragraph, {
          y: 30,
          opacity: 0,
          duration: 0.6,
        }, "-=0.3");
      }

      // 4. CTA fades up
      const cta = container.querySelector("[data-hero-cta]");
      if (cta) {
        tl.from(cta, {
          y: 20,
          opacity: 0,
          duration: 0.5,
        }, "-=0.2");
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
