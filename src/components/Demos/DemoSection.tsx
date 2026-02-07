import type { ReactNode } from "react";

interface DemoSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  id?: string;
  label?: string;
  glow?: boolean;
}

export function DemoSection({
  title,
  description,
  children,
  id,
  label,
  glow = false,
}: DemoSectionProps) {
  return (
    <section id={id} className="relative flex w-full flex-col gap-10 overflow-hidden px-5 py-16 sm:gap-14 sm:px-10 md:px-16 md:py-24">
      {glow && (
        <div data-section-glow className="pointer-events-none absolute left-1/2 top-1/2 h-75 w-75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6] opacity-[0.07] blur-[120px] sm:h-100 sm:w-100 sm:blur-[160px]" />
      )}
      <div data-section-header className="relative flex max-w-xl flex-col gap-3 sm:gap-4">
        {label && (
          <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-(--color-accent) sm:text-xs">
            {label}
          </span>
        )}
        <h3 data-reveal-title className="font-body text-2xl font-bold tracking-tight text-(--color-text-white) sm:text-3xl md:text-4xl">
          {title}
        </h3>
        <p className="font-body text-sm leading-relaxed text-(--color-text-gray) sm:text-[15px]">
          {description}
        </p>
      </div>
      <div data-section-content className="relative">{children}</div>
    </section>
  );
}
