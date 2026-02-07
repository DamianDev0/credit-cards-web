import type { CreditCardData } from "../../types";
import { CreditCard } from "./CreditCard";

const cards: CreditCardData[] = [
  {
    id: "card-1",
    brand: "VISA",
    cardNumber: "**** **** **** 4829",
    holderName: "Trailor Swift",
    expiry: "12/28",
    variant: "gradient",
  },
  {
    id: "card-2",
    brand: "VISA",
    cardNumber: "**** **** **** 7193",
    holderName: "Trailor Swift",
    expiry: "09/27",
    variant: "dark",
  },
  {
    id: "card-3",
    brand: "VISA",
    cardNumber: "**** **** **** 2461",
    holderName: "Trailor Swift",
    expiry: "03/29",
    variant: "neon",
  },
];

export function CardStack() {
  return (
    <div className="relative w-98.75 h-119.75">
      <CreditCard
        card={cards[0]}
        className="absolute left-20 top-7.5 -rotate-10 z-1 shadow-[0_10px_30px_#00000030]"
      />
      <CreditCard
        card={cards[1]}
        className="absolute left-12.5 top-35 -rotate-6 z-2 shadow-[0_20px_40px_#00000040]"
      />
      <CreditCard
        card={cards[2]}
        className="absolute left-5 top-62.5 -rotate-3 z-3 shadow-[0_30px_50px_#00000050]"
      />
    </div>
  );
}
