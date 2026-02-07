import { CreditCardWithForm } from "credit-card-ui-react";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { DemoSection } from "./DemoSection";

const code = `import { useState } from "react";
import {
  CreditCardWithForm,
  type FormSubmitData,
} from "credit-card-ui-react";

function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: FormSubmitData) => {
    setIsSubmitting(true);
    console.log("Payment data:", data);
    setIsSubmitting(false);
  };

  return (
    <CreditCardWithForm
      layout="vertical"
      onSubmit={handleSubmit}
      onCardChange={(data) =>
        console.log(data.brand, data.metadata?.level)
      }
      isSubmitting={isSubmitting}
      submitLabel="Pay $99.00"
      showBankName
      showAddress
      initialValues={{
        bankName: "BBVA",
        cardholderName: "JOHN DOE",
      }}
      customFields={[
        {
          id: "email",
          label: "Email",
          type: "email",
          placeholder: "john@example.com",
          required: true,
        },
      ]}
      customFieldsPosition="before"
      cardSize="lg"
      cardGradient={{
        type: "grain",
        colors: ["#7300ff", "#eba8ff",
                 "#00bfff", "#2b00ff"],
        softness: 0.5,
        intensity: 0.5,
        noise: 0.25,
      }}
      cardAnimation={{
        flipDuration: 0.6,
        gradientTransitionDuration: 0.5,
      }}
      cardVisibility={{
        chip: true,
        contactless: true,
        brandLogo: true,
        bankName: true,
      }}
      cardStyle={{
        borderRadius: "1rem",
        shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      }}
      cardLabels={{
        customerService: "1-800-123-4567",
        authorizedSignature: "AUTHORIZED SIGNATURE",
      }}
      formProps={{
        classNames: {
          submitButton: "bg-white/10 backdrop-blur",
          input: "text-white bg-white/5",
          label: "text-white/70",
        },
      }}
      renderHeader={() => (
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">
            Secure Payment
          </h2>
        </div>
      )}
      renderFooter={() => (
        <p className="text-xs text-gray-500 text-center mt-4">
          Secured with 256-bit SSL encryption.
        </p>
      )}
    />
  );
}`;

export function FullExampleDemo() {
  return (
    <DemoSection
      id="full-example"
      label="Example"
      title="Full Checkout"
      description="A complete checkout form with gradient effects, bank name, address fields, custom fields, and custom initial values. Everything you need for a production payment flow."
      glow
    >
      <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <CodeBlock
          className="order-2 lg:order-0"
          files={[{ title: "Checkout.tsx", code, language: "tsx" }]}
        />

        <div className="order-1 mx-auto w-full max-w-xs overflow-hidden sm:max-w-md lg:order-0">
          <CreditCardWithForm
            layout="vertical"
            onSubmit={(data) => console.log(data)}
            submitLabel="Pay $99.00"
            showBankName
            showAddress
            initialValues={{
              bankName: "BBVA",
              cardholderName: "JOHN DOE",
            }}
            customFields={[
              {
                id: "email",
                label: "Email",
                type: "email",
                placeholder: "john@example.com",
                required: true,
              },
            ]}
            customFieldsPosition="before"
            cardGradient={{
              type: "grain",
              colors: ["#7300ff", "#eba8ff", "#00bfff", "#2b00ff"],
              softness: 0.5,
              intensity: 0.5,
              noise: 0.25,
            }}
            cardAnimation={{
              flipDuration: 0.6,
              gradientTransitionDuration: 0.5,
            }}
            cardVisibility={{
              chip: true,
              contactless: true,
              brandLogo: true,
              bankName: true,
            }}
            cardStyle={{
              borderRadius: "1rem",
              shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
            }}
            cardLabels={{
              customerService: "1-800-123-4567",
              authorizedSignature: "AUTHORIZED SIGNATURE",
            }}
            renderHeader={() => (
              <div className="mb-4 text-center">
                <h2 className="text-xl font-bold text-white">Secure Payment</h2>
              </div>
            )}
            renderFooter={() => (
              <p className="mt-4 text-center text-xs text-white/40">
                Secured with 256-bit SSL encryption.
              </p>
            )}
          />
        </div>
      </div>
    </DemoSection>
  );
}
