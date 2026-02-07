import { CreditCard } from "credit-card-ui-react";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { DemoSection } from "./DemoSection";

const meshCode = `import { CreditCard } from "credit-card-ui-react";

<CreditCard
  cardNumber="5555 5555 5555 4444"
  cardholderName="JANE SMITH"
  expiryDate="09/27"
  cvv="456"
  brand="mastercard"
  level="black"
  gradient={{
    type: "mesh",
    colors: [
      "#f6f5f0",
      "#eeeae2",
      "#e6e1d7",
      "#d8d2c6",
    ],
  }}
/>`;

const grainCode = `import { CreditCard } from "credit-card-ui-react";

<CreditCard
  cardNumber="5200 8282 8282 8210"
  cardholderName="ALEX CHEN"
  expiryDate="03/29"
  cvv="789"
  brand="mastercard"
  level="platinum"
  gradient={{
    type: "grain",
    colors: [
      "#1a0f05",
      "#2b1707",
      "#3d2009",
      "#ff8a00",
    ],
    softness: 0.55,
    intensity: 0.42,
    noise: 0.22,
  }}
/>`;

export function GradientDemo() {
  return (
    <DemoSection
      id="gradients"
      label="Effects"
      title="Gradient Effects"
      description="Choose between MeshGradient for smooth fluid animations or GrainGradient for a textured premium look. Fully customizable colors, speed, and intensity."
      glow
    >
      <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <CodeBlock
            className="order-2 lg:order-0"
            files={[{ title: "MeshGradient.tsx", code: meshCode, language: "tsx" }]}
          />
          <div className="order-1 flex flex-col items-center justify-center gap-3 lg:order-0">
            <CreditCard
              cardNumber="5555 5555 5555 4444"
              cardholderName="JANE SMITH"
              expiryDate="09/27"
              cvv="456"
              brand="mastercard"
              level="black"
              gradient={{
                type: "mesh",
                colors: ["#f6f5f0", "#eeeae2", "#e6e1d7", "#d8d2c6"],
              }}
            />
            <span className="font-mono text-xs text-white/30">Mesh Gradient</span>
          </div>
        </div>

        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-center justify-center gap-3">
            <CreditCard
              cardNumber="5200 8282 8282 8210"
              cardholderName="ALEX CHEN"
              expiryDate="03/29"
              cvv="789"
              brand="mastercard"
              level="platinum"
              gradient={{
                type: "grain",
                colors: ["#1a0f05", "#2b1707", "#3d2009", "#ff8a00"],
                softness: 0.55,
                intensity: 0.42,
                noise: 0.22,
              }}
            />
            <span className="font-mono text-xs text-white/30">Grain Gradient</span>
          </div>
          <CodeBlock
            files={[{ title: "GrainGradient.tsx", code: grainCode, language: "tsx" }]}
          />
        </div>
      </div>
    </DemoSection>
  );
}
