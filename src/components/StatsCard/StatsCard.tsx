import type { StatsCardData } from "../../types";

interface StatsCardProps extends StatsCardData {
  className?: string;
}

export function StatsCard({ value, description, className = "" }: StatsCardProps) {
  return (
    <div
      className={`flex flex-col gap-3 rounded-2xl border border-(--color-glass-border) bg-(--color-glass-bg) p-6 backdrop-blur-[12px] w-[167px] ${className}`}
    >
      <span className="font-body text-5xl font-bold text-(--color-text-white)">
        {value}
      </span>
      <p className="font-body text-xs leading-[1.4] text-(--color-text-gray) whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
