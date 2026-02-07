import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function useHeroAnimations(containerRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const headline = container.querySelector("[data-hero-headline]") as HTMLElement;
      const description = container.querySelector("[data-hero-description]") as HTMLElement;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onStart: () => {
          // Make elements visible right when animation begins
          if (headline) headline.style.visibility = "visible";
          if (description) description.style.visibility = "visible";
        },
      });

      // 1. Headline words stagger reveal (words instead of chars for snappier feel)
      const headlines = container.querySelectorAll("[data-hero-headline] h1");
      if (headlines.length) {
        const split = new SplitText(headlines, { type: "words,chars" });

        tl.from(split.chars, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.015,
          ease: "power4.out",
        });

        tl.call(() => split.revert(), [], "+=0.05");
      }

      // 2. Divider line scales from left
      const divider = container.querySelector("[data-hero-description] .h-px");
      if (divider) {
        tl.from(divider, {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.5,
        }, "-=0.3");
      }

      // 3. Description paragraph fades up
      const paragraph = container.querySelector("[data-hero-description] p");
      if (paragraph) {
        tl.from(paragraph, {
          y: 20,
          opacity: 0,
          duration: 0.5,
        }, "-=0.2");
      }

      // 4. CTA fades up
      const cta = container.querySelector("[data-hero-cta]");
      if (cta) {
        tl.from(cta, {
          y: 15,
          opacity: 0,
          duration: 0.4,
        }, "-=0.15");
      }
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
