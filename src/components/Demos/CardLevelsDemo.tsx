import { CreditCard } from "credit-card-ui-react";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { DemoSection } from "./DemoSection";

const code = `import { CreditCard } from "credit-card-ui-react";

// 8 card levels available:
// classic · gold · platinum · signature
// infinite · black · business · corporate

<CreditCard
  cardNumber="4532 0151 1283 0366"
  cardholderName="JOHN DOE"
  expiryDate="12/28"
  cvv="123"
  brand="visa"
  level="platinum"
/>`;

const levels = [
  { level: "platinum" as const, number: "5200 8282 8282 8210", brand: "mastercard" as const, flipped: false },
  { level: "black" as const, number: "5555 5555 5555 4444", brand: "mastercard" as const, flipped: true },
] as const;

export function CardLevelsDemo() {
  return (
    <DemoSection
      id="levels"
      label="Levels"
      title="Card Levels"
      description="8 distinct card levels with unique visual effects — from classic to corporate. Each level applies premium styling, chip finishes, and background treatments automatically."
      glow
    >
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <CodeBlock
          className="order-2 lg:order-0"
          files={[{ title: "CardLevels.tsx", code, language: "tsx" }]}
        />

        <div className="order-1 flex flex-col items-center gap-6 sm:gap-8 lg:order-0">
          {levels.map(({ level, number, brand, flipped }) => (
            <div key={level} className="flex w-full flex-col items-center gap-2">
              <CreditCard
                cardNumber={number}
                cardholderName="JOHN DOE"
                expiryDate="12/28"
                cvv="123"
                brand={brand}
                level={level}
                size="md"
                isFlipped={flipped}
              />
              <span className="font-mono text-[10px] capitalize text-white/30">
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </DemoSection>
  );
}
