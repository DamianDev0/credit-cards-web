import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * Syncs Lenis smooth scroll with GSAP ScrollTrigger.
 * GSAP ticker drives Lenis RAF (autoRaf must be false on ReactLenis).
 */
export function useSmoothScroll(lenis: Lenis | undefined) {
  useEffect(() => {
    if (!lenis) return;

    // When Lenis scrolls, tell ScrollTrigger to update
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP ticker drives Lenis raf (time is in seconds, Lenis expects ms)
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tickerCallback);
    };
  }, [lenis]);
}
