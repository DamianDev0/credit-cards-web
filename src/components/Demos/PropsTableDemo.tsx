import { DemoSection } from "./DemoSection";

interface PropRow {
  name: string;
  type: string;
  default: string;
  description: string;
}

const cardProps: PropRow[] = [
  { name: "cardNumber", type: "string", default: "required", description: "Card number to display" },
  { name: "cardholderName", type: "string", default: "required", description: "Cardholder name" },
  { name: "expiryDate", type: "string", default: "required", description: "Expiry date (MM/YY)" },
  { name: "cvv", type: "string", default: "required", description: "CVV/CVC code" },
  { name: "brand", type: "CardBrand", default: "required", description: "Card brand" },
  { name: "level", type: "CardLevel", default: '"unknown"', description: "Card level for visual effects" },
  { name: "isFlipped", type: "boolean", default: "false", description: "Show back of card" },
  { name: "focusedField", type: "CardField", default: "null", description: "Currently focused field" },
  { name: "bankName", type: "string", default: "—", description: "Bank name to display" },
  { name: "size", type: "CardSize", default: '"lg"', description: "Size preset (sm, md, lg, xl)" },
  { name: "width", type: "number | string", default: "—", description: "Custom card width" },
  { name: "gradient", type: "CardGradientConfig", default: "—", description: "Gradient customization" },
  { name: "visibility", type: "CardVisibilityConfig", default: "—", description: "Element visibility" },
  { name: "classNames", type: "CardClassNames", default: "—", description: "CSS class overrides" },
];

const formProps: PropRow[] = [
  { name: "layout", type: "FormLayout", default: '"vertical"', description: "Layout orientation" },
  { name: "onSubmit", type: "function", default: "—", description: "Submit handler" },
  { name: "onCardChange", type: "function", default: "—", description: "Card change handler" },
  { name: "isSubmitting", type: "boolean", default: "—", description: "Loading state" },
  { name: "submitLabel", type: "string", default: '"Submit"', description: "Button text" },
  { name: "showBankName", type: "boolean", default: "false", description: "Show bank name field" },
  { name: "showAddress", type: "boolean", default: "false", description: "Show address fields" },
  { name: "customFields", type: "CustomField[]", default: "[]", description: "Additional form fields" },
  { name: "initialValues", type: "object", default: "—", description: "Initial form values" },
  { name: "cardGradient", type: "CardGradientConfig", default: "—", description: "Card gradient config" },
  { name: "formInputLabels", type: "FormInputLabels", default: "—", description: "Form field labels" },
  { name: "formProps", type: "FormStyleProps", default: "—", description: "Form styling props" },
  { name: "renderHeader", type: "() => ReactNode", default: "—", description: "Custom header" },
  { name: "renderFooter", type: "() => ReactNode", default: "—", description: "Custom footer" },
];

function PropsTable({ title, rows }: { title: string; rows: PropRow[] }) {
  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <h4 className="font-mono text-xs font-medium text-white/90 sm:text-sm">{title}</h4>
      <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.02]">
        <table className="w-full min-w-120 text-left text-sm">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="px-3 py-2.5 font-mono text-[11px] font-medium text-white/40 sm:px-4 sm:py-3 sm:text-xs">Prop</th>
              <th className="px-3 py-2.5 font-mono text-[11px] font-medium text-white/40 sm:px-4 sm:py-3 sm:text-xs">Type</th>
              <th className="hidden px-3 py-2.5 font-mono text-[11px] font-medium text-white/40 sm:table-cell sm:px-4 sm:py-3 sm:text-xs">Default</th>
              <th className="px-3 py-2.5 font-mono text-[11px] font-medium text-white/40 sm:px-4 sm:py-3 sm:text-xs">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-b border-white/[0.03] last:border-0">
                <td className="whitespace-nowrap px-3 py-2 font-mono text-[11px] text-(--color-accent) sm:px-4 sm:py-2.5 sm:text-xs">{row.name}</td>
                <td className="whitespace-nowrap px-3 py-2 font-mono text-[11px] text-white/50 sm:px-4 sm:py-2.5 sm:text-xs">{row.type}</td>
                <td className="hidden whitespace-nowrap px-3 py-2 font-mono text-[11px] text-white/30 sm:table-cell sm:px-4 sm:py-2.5 sm:text-xs">{row.default}</td>
                <td className="px-3 py-2 text-[11px] text-white/50 sm:px-4 sm:py-2.5 sm:text-xs">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function PropsTableDemo() {
  return (
    <DemoSection
      id="props"
      label="API"
      title="Props Reference"
      description="Complete API reference for both the CreditCard display component and the CreditCardWithForm payment form component."
    >
      <div className="flex flex-col gap-8 sm:gap-12">
        <PropsTable title="CreditCard" rows={cardProps} />
        <PropsTable title="CreditCardWithForm" rows={formProps} />
      </div>
    </DemoSection>
  );
}
