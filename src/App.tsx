import "credit-card-ui-react/styles.css";
import { useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { Hero } from "./components/Hero/Hero";
import { Partners } from "./components/Partners/Partners";
import { CardLevelsDemo } from "./components/Demos/CardLevelsDemo";
import { BrandDetectionDemo } from "./components/Demos/BrandDetectionDemo";
import { GradientDemo } from "./components/Demos/GradientDemo";
import { PaymentFormDemo } from "./components/Demos/PaymentFormDemo";
import { FullExampleDemo } from "./components/Demos/FullExampleDemo";
import { HeadlessDemo } from "./components/Demos/HeadlessDemo";
import { PropsTableDemo } from "./components/Demos/PropsTableDemo";
import { Footer } from "./components/Footer/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { useScrollAnimations } from "./hooks/useScrollAnimations";
import { useParallax } from "./hooks/useParallax";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

function AppContent() {
  const lenis = useLenis();
  const horizontalRef = useRef<HTMLDivElement>(null);

  useSmoothScroll(lenis);
  useScrollAnimations();
  useParallax();
  useHorizontalScroll(horizontalRef);

  return (
    <div className="flex min-h-screen w-full flex-col bg-(--color-bg-dark-primary)">
      <Hero />
      <Partners />

      {/* Horizontal scroll: Brand Detection + Card Levels */}
      <div ref={horizontalRef} className="relative z-10 overflow-hidden bg-(--color-bg-dark-primary)">
        <div data-h-scroll-track className="flex flex-col lg:flex-row">
          <div data-h-scroll-panel className="w-full shrink-0 lg:flex lg:h-screen lg:w-screen lg:items-center lg:justify-center lg:px-16">
            <BrandDetectionDemo />
          </div>
          <div data-h-scroll-panel className="w-full shrink-0 lg:flex lg:h-screen lg:w-screen lg:items-center lg:justify-center lg:px-16">
            <CardLevelsDemo />
          </div>
        </div>
      </div>

      {/* Remaining vertical sections */}
      <div className="flex flex-col">
        <div data-animate><GradientDemo /></div>
        <div data-animate><PaymentFormDemo /></div>
        <div data-animate><FullExampleDemo /></div>
        <div data-animate><HeadlessDemo /></div>
      </div>

      <div data-animate>
        <PropsTableDemo />
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, autoRaf: false }}>
      <AppContent />
    </ReactLenis>
  );
}

export default App;
