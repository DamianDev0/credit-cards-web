import { CreditCardWithForm } from "credit-card-ui-react";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { DemoSection } from "./DemoSection";

const code = `import { useState } from "react";
import {
  CreditCardWithForm,
  type FormSubmitData,
} from "credit-card-ui-react";

function PaymentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: FormSubmitData) => {
    setIsSubmitting(true);

    await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setIsSubmitting(false);
  };

  return (
    <CreditCardWithForm
      layout="vertical"
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      submitLabel="Pay Now"
      showBankName
    />
  );
}`;

export function PaymentFormDemo() {
  return (
    <DemoSection
      id="form"
      label="Form"
      title="Payment Form"
      description="A complete payment form with built-in validation, real-time brand detection, animated card preview, and customizable layout. Supports vertical and horizontal orientations."
      glow
    >
      <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto w-full max-w-xs overflow-hidden sm:max-w-md">
          <CreditCardWithForm
            layout="vertical"
            onSubmit={(data) => console.log(data)}
            submitLabel="Pay Now"
            showBankName
          />
        </div>
        <CodeBlock
          files={[{ title: "PaymentForm.tsx", code, language: "tsx" }]}
        />
      </div>
    </DemoSection>
  );
}
