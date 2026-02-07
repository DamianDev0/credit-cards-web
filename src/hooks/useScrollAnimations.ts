import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // -----------------------------------------
      // 1. Section reveals (data-animate)
      //    Title slides from left, content from right
      // -----------------------------------------
      const sections = gsap.utils.toArray<HTMLElement>("[data-animate]");
      sections.forEach((section) => {
        const sectionEl = section.querySelector("section") || section;
        const header = sectionEl.querySelector("[data-section-header]");
        const content = sectionEl.querySelector("[data-section-content]");
        const glow = sectionEl.querySelector("[data-section-glow]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            once: true,
          },
        });

        if (header) {
          gsap.set(header, { opacity: 0, x: -60 });
          tl.to(header, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        }

        if (content) {
          gsap.set(content, { opacity: 0, x: 60 });
          tl.to(content, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          }, "-=0.5");
        }

        // Fallback: no split markers → classic fade-up
        if (!header && !content) {
          gsap.set(sectionEl, { opacity: 0, y: 60 });
          tl.to(sectionEl, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          });
        }

        // Glow parallax (continuous scrub)
        if (glow) {
          gsap.to(glow, {
            y: -80,
            scrollTrigger: {
              trigger: sectionEl,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      });

      // -----------------------------------------
      // 2. Partners stagger animation
      // -----------------------------------------
      const partnersSection = document.querySelector("[data-animate-partners]");
      if (partnersSection) {
        const label = partnersSection.querySelector("[data-partner-label]");
        const items = gsap.utils.toArray<HTMLElement>("[data-partner-item]");
        const divider = partnersSection.querySelector(".h-px");

        // Set initial hidden states immediately
        if (divider) gsap.set(divider, { scaleX: 0, transformOrigin: "left" });
        if (label) gsap.set(label, { opacity: 0, y: 20 });
        if (items.length) gsap.set(items, { opacity: 0, y: 30 });

        const ptl = gsap.timeline({
          scrollTrigger: {
            trigger: partnersSection,
            start: "top 85%",
            once: true,
          },
        });

        if (divider) {
          ptl.to(divider, { scaleX: 1, duration: 0.6 });
        }
        if (label) {
          ptl.to(label, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2");
        }
        if (items.length) {
          ptl.to(items, {
            y: 0,
            opacity: 1,
            stagger: 0.07,
            duration: 0.5,
            ease: "power3.out",
          }, "-=0.1");
        }
      }

      // -----------------------------------------
      // 3. Section title clip-path reveals
      // -----------------------------------------
      const titles = gsap.utils.toArray<HTMLElement>("[data-reveal-title]");
      titles.forEach((title) => {
        gsap.set(title, { clipPath: "inset(0 0 100% 0)" });
        gsap.to(title, {
          clipPath: "inset(0 0 0% 0)",
          duration: 0.8,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}
