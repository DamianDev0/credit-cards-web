import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { HeroHeadline } from "./HeroHeadline";
import { HeroCTA } from "./HeroCTA";
import { useHeroAnimations } from "../../hooks/useHeroAnimations";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  useHeroAnimations(sectionRef);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden px-5 pt-14 pb-8 sm:px-10 md:min-h-[85vh] md:px-16 md:pt-20">
      {/* Purple glow */}
      <div data-parallax-speed="0.3" className="pointer-events-none absolute right-[5%] top-[20%] h-60 w-60 rounded-full bg-[#8B5CF6] opacity-15 blur-[120px] sm:h-80 sm:w-80 md:h-125 md:w-125 md:blur-[180px]" />
      <div data-parallax-speed="0.5" className="pointer-events-none absolute left-[20%] top-[60%] h-40 w-40 rounded-full bg-[#6D28D9] opacity-10 blur-[100px] md:h-80 md:w-80 md:blur-[150px]" />

      {/* Headline */}
      <div className="relative z-10 max-w-[55%] sm:max-w-[50%]">
        <HeroHeadline />
      </div>

      {/* Description + CTA */}
      <div data-hero-description className="relative z-10 mt-8 flex max-w-[55%] flex-col gap-4 sm:mt-10 sm:max-w-105 sm:gap-5">
        <div className="h-px w-14 bg-(--color-accent)/30" />
        <p className="font-body text-sm leading-[1.7] text-(--color-text-gray) sm:text-[15px]">
          The most complete React library for credit card UIs. Real-time brand
          detection, animated 3D flip effects, mesh &amp; grain gradients, full
          form validation, and a headless API — all with TypeScript and Tailwind
          support.
        </p>
        <div data-hero-cta>
          <HeroCTA />
        </div>
      </div>

      {/* Spline 3D — always on the right */}
      <div className="pointer-events-none absolute right-0 top-0 z-5 h-full w-[55%] overflow-hidden opacity-0 md:pointer-events-auto md:opacity-100">
        <Spline
          scene="https://prod.spline.design/wHYQXxFgErUNOP0t/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-(--color-bg-dark-primary) to-transparent" />
    </section>
  );
}
