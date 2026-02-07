import { CreditCard } from "credit-card-ui-react";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { DemoSection } from "./DemoSection";

const code = `import { CreditCard } from "credit-card-ui-react";
import "credit-card-ui-react/styles.css";

<CreditCard
  cardNumber="4111 1111 1111 1111"
  cardholderName="JOHN DOE"
  expiryDate="12/28"
  cvv="123"
  brand="visa"
  level="gold"
/>`;

export function BasicCardDemo() {
  return (
    <DemoSection
      id="basic"
      label="Component"
      title="Basic Card"
      description="Drop in a fully styled credit card with real-time brand detection, chip, contactless icon, and card level effects — all in a single component."
      glow
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <CodeBlock
          files={[{ title: "App.tsx", code, language: "tsx" }]}
        />
        <div className="flex items-center justify-center">
          <CreditCard
            cardNumber="4111 1111 1111 1111"
            cardholderName="JOHN DOE"
            expiryDate="12/28"
            cvv="123"
            brand="visa"
            level="gold"
          />
        </div>
      </div>
    </DemoSection>
  );
}
