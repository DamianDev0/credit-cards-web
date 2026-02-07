import { CreditCard } from "credit-card-ui-react";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { DemoSection } from "./DemoSection";

const code = `import { CreditCard } from "credit-card-ui-react";

// 10+ brands auto-detected:
// Visa · Mastercard · Amex · Discover
// JCB · Diners · UnionPay · Maestro

<CreditCard
  cardNumber="3530 1113 3330 0000"
  cardholderName="ALEX CHEN"
  expiryDate="03/29"
  cvv="123"
  brand="jcb"
/>`;

export function BrandDetectionDemo() {
  return (
    <DemoSection
      id="brands"
      label="Brands"
      title="Brand Detection"
      description="Real-time brand detection from card numbers. Supports Visa, Mastercard, Amex, Discover, JCB, Diners, UnionPay, Maestro, Elo, and Hipercard — with correct logos, formatting, and validation rules."
      glow
    >
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex w-full flex-col items-center gap-2">
            <CreditCard
              cardNumber="3530 1113 3330 0000"
              cardholderName="ALEX CHEN"
              expiryDate="03/29"
              cvv="123"
              brand="jcb"
              size="md"
            />
            <span className="font-mono text-[10px] text-white/30">JCB</span>
          </div>
          <div className="flex w-full flex-col items-center gap-2">
            <CreditCard
              cardNumber="6011 1111 1111 1117"
              cardholderName="ALEX CHEN"
              expiryDate="03/29"
              cvv="123"
              brand="discover"
              level="classic"
              size="md"
              isFlipped
            />
            <span className="font-mono text-[10px] text-white/30">Discover</span>
          </div>
        </div>
        <CodeBlock
          files={[{ title: "BrandDetection.tsx", code, language: "tsx" }]}
        />
      </div>
    </DemoSection>
  );
}
