export interface CreditCardData {
  id: string;
  brand: string;
  cardNumber: string;
  holderName: string;
  expiry: string;
  variant: "gradient" | "dark" | "neon";
}
