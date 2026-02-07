import type { CreditCardData } from "../../types";

interface CreditCardProps {
  card: CreditCardData;
  className?: string;
}

const variantStyles: Record<CreditCardData["variant"], {
  bg: string;
  brandColor: string;
  textColor: string;
  chipColor: string;
  mutedColor: string;
  borderColor: string;
}> = {
  gradient: {
    bg: "bg-gradient-to-br from-[#2a3a2e] via-[#1a2a1e] to-[#0a1a0e]",
    brandColor: "text-[#FFFFFFDD]",
    textColor: "text-white/90",
    chipColor: "bg-[#E8C47C]",
    mutedColor: "text-[#FFFFFFCC]",
    borderColor: "border-[#FFFFFF1A]",
  },
  dark: {
    bg: "bg-[#1A1F1E]",
    brandColor: "text-[#8A8F8DDD]",
    textColor: "text-[#8A8F8D]/70",
    chipColor: "bg-[#4A4A4A]",
    mutedColor: "text-[#8A8F8DCC]",
    borderColor: "border-[#FFFFFF1A]",
  },
  neon: {
    bg: "bg-(--color-accent)",
    brandColor: "text-[#0B0F0EDD]",
    textColor: "text-[#0B0F0E]",
    chipColor: "bg-[#0B0F0E]",
    mutedColor: "text-[#0B0F0ECC]",
    borderColor: "border-[#0B0F0E1A]",
  },
};

export function CreditCard({ card, className = "" }: CreditCardProps) {
  const styles = variantStyles[card.variant];

  return (
    <div
      className={`relative h-50 w-80 rounded-[20px] border ${styles.borderColor} ${styles.bg} ${className}`}
    >
      {/* Brand */}
      <span
        className={`absolute left-6 top-6 text-xl font-bold italic ${styles.brandColor}`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {card.brand}
      </span>

      {/* Contactless icon */}
      <svg
        className={`absolute right-6 top-6 h-6 w-6 ${styles.mutedColor}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2 6c.6.5 1.2 1.1 1.7 1.7C5.3 9.4 6 11.2 6 13s-.7 3.6-2.3 5.3c-.5.6-1.1 1.2-1.7 1.7" />
        <path d="M7 3c.9.8 1.8 1.6 2.6 2.6C11.8 8.2 13 11 13 13s-1.2 4.8-3.4 7.4c-.8 1-1.7 1.8-2.6 2.6" />
        <path d="M12 0c1.2 1 2.4 2.1 3.4 3.5C18.4 7.2 20 10.6 20 13s-1.6 5.8-4.6 9.5c-1 1.4-2.2 2.5-3.4 3.5" />
      </svg>

      {/* Chip */}
      <div
        className={`absolute left-6 top-15 h-7.5 w-10 rounded ${styles.chipColor}`}
      />

      {/* Card number */}
      <span
        className={`font-mono absolute left-6 top-27.5 text-base font-medium ${styles.mutedColor}`}
      >
        {card.cardNumber}
      </span>

      {/* Expiry */}
      <span
        className={`font-mono absolute left-6 top-33.75 text-xs font-medium ${styles.mutedColor}`}
      >
        {card.expiry}
      </span>

      {/* Holder name */}
      <span
        className={`font-body absolute left-6 top-37.5 text-lg font-semibold ${styles.textColor}`}
      >
        {card.holderName}
      </span>
    </div>
  );
}
