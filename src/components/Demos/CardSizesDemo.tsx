import { CreditCard } from "credit-card-ui-react";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { DemoSection } from "./DemoSection";

const code = `import { CreditCard } from "credit-card-ui-react";

// Built-in size presets
<CreditCard size="sm" ... />  // Small
<CreditCard size="md" ... />  // Medium
<CreditCard size="lg" ... />  // Large
<CreditCard size="xl" ... />  // Extra large

// Or use a custom width
<CreditCard width={400} ... />
<CreditCard width="100%" ... />`;

export function CardSizesDemo() {
  return (
    <DemoSection
      id="sizes"
      label="Sizes"
      title="Responsive Sizes"
      description="Four built-in size presets that scale proportionally, or pass a custom width for pixel-perfect control. Works great in any layout."
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Code — left */}
        <CodeBlock
          files={[{ title: "Sizes.tsx", code, language: "tsx" }]}
        />

        {/* Cards — right, sizes comparison */}
        <div className="flex items-end justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <CreditCard
              cardNumber="4111 1111 1111 1111"
              cardholderName="JOHN DOE"
              expiryDate="12/28"
              cvv="123"
              brand="visa"
              level="gold"
              size="sm"
            />
            <span className="font-mono text-[10px] text-white/30">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CreditCard
              cardNumber="5200 8282 8282 8210"
              cardholderName="JANE SMITH"
              expiryDate="06/27"
              cvv="456"
              brand="mastercard"
              level="platinum"
              size="md"
            />
            <span className="font-mono text-[10px] text-white/30">md</span>
          </div>
        </div>
      </div>
    </DemoSection>
  );
}
