import { useState } from "react";
import { CreditCard, type CreditCardProps } from "credit-card-ui-react";

export function HoverCard(props: CreditCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <CreditCard
      {...props}
      isFlipped={flipped}
      className={`${props.className ?? ""}`}
      classNames={{
        ...props.classNames,
        root: `hover-flip-wrapper ${props.classNames?.root ?? ""}`,
      }}
    />
  );
}

export function HoverCardWrapper({
  children,
  onHover,
}: {
  children: React.ReactNode;
  onHover: (hovered: boolean) => void;
}) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {children}
    </div>
  );
}
