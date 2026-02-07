import { CodeBlock } from "../CodeBlock/CodeBlock";
import { DemoSection } from "./DemoSection";

const hookCode = `import { useCreditCard, CreditCard } from "credit-card-ui-react";

function CustomForm() {
  const {
    state, metadata, handlers, formattedCardNumber,
  } = useCreditCard();

  return (
    <div>
      <CreditCard
        cardNumber={formattedCardNumber}
        cardholderName={state.cardholderName}
        expiryDate={state.expiryDate}
        cvv={state.cvv}
        brand={state.brand}
        level={metadata.level}
        isFlipped={state.isFlipped}
      />
      <input
        value={state.cardNumber}
        onChange={(e) => handlers.setCardNumber(e.target.value)}
        onFocus={() => handlers.setFocusedField("cardNumber")}
      />
    </div>
  );
}`;

const validationCode = `import {
  detectBrand, formatCard, maskCard,
  isValidCardNumber, isValidExpiry, isValidCvv,
} from "credit-card-ui-react";

detectBrand("4111111111111111");       // "visa"
detectBrand("5555555555554444");       // "mastercard"
formatCard("4111111111111111");        // "4111 1111 1111 1111"
maskCard("4111111111111111");          // "************1111"
isValidCardNumber("4111111111111111"); // true
isValidExpiry("12/28");                // true
isValidCvv("123");                     // true`;

export function HeadlessDemo() {
  return (
    <DemoSection
      id="headless"
      label="Headless"
      title="Headless API"
      description="Full control with the useCreditCard hook and standalone validation utilities. Build your own UI while keeping all the logic — brand detection, formatting, validation, and state management."
      glow
    >
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
        <CodeBlock
          files={[{ title: "CustomForm.tsx", code: hookCode, language: "tsx" }]}
          className="w-full"
        />
        <CodeBlock
          files={[{ title: "validation.ts", code: validationCode, language: "typescript" }]}
          className="w-full"
        />
      </div>
    </DemoSection>
  );
}
