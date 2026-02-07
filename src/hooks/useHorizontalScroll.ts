import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pins a container and scrolls its inner track horizontally.
 * Only activates on screens >= 1024px; stacks vertically below.
 */
export function useHorizontalScroll(containerRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const track = container.querySelector("[data-h-scroll-track]") as HTMLElement;
    if (!track) return;

    const panels = gsap.utils.toArray<HTMLElement>("[data-h-scroll-panel]", track);
    if (panels.length === 0) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop: horizontal scroll
        "(min-width: 1024px)": () => {
          const totalScroll = track.scrollWidth - window.innerWidth;

          const scrollTween = gsap.to(track, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => `+=${totalScroll}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });

          // Per-panel reveal animation
          panels.forEach((panel) => {
            gsap.fromTo(
              panel,
              { opacity: 0.4, scale: 0.92 },
              {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: scrollTween,
                  start: "left 85%",
                  end: "left 50%",
                  scrub: true,
                },
              }
            );
          });
        },

        // Mobile: vertical fade-up reveals
        "(max-width: 1023px)": () => {
          panels.forEach((panel) => {
            gsap.set(panel, { opacity: 0, y: 60 });
            gsap.to(panel, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                start: "top 85%",
                once: true,
              },
            });
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}
