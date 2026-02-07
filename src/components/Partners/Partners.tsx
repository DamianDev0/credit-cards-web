import visaSvg from "../../assets/credit/visa.svg";
import mastercardSvg from "../../assets/credit/master_card.svg";
import amexSvg from "../../assets/credit/amex.svg";
import discoverSvg from "../../assets/credit/discover.svg";
import jcbSvg from "../../assets/credit/jbc.svg";
import dinersSvg from "../../assets/credit/diners.svg";
import unionpaySvg from "../../assets/credit/discovercup.svg";

const brands = [
  { name: "Visa", logo: visaSvg },
  { name: "Mastercard", logo: mastercardSvg },
  { name: "Amex", logo: amexSvg },
  { name: "Discover", logo: discoverSvg },
  { name: "JCB", logo: jcbSvg },
  { name: "Diners", logo: dinersSvg },
  { name: "UnionPay", logo: unionpaySvg },
];

export function Partners() {
  return (
    <section data-animate-partners className="flex w-full flex-col items-center px-5 py-8 sm:px-10 sm:py-12 md:px-16">
      <div className="h-px w-full bg-(--color-glass-border)" />

      <span data-partner-label className="font-body mt-6 text-[10px] uppercase tracking-[0.25em] text-(--color-text-gray) sm:mt-8 sm:text-[11px]">
        Supported brands
      </span>

      <div className="flex w-full flex-wrap items-center justify-center gap-6 py-6 sm:gap-8 md:gap-12 md:py-8">
        {brands.map((brand, i) => (
          <div key={brand.name} data-partner-item className="flex items-center gap-6 sm:gap-8 md:gap-12">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-5 w-auto max-w-16 object-contain opacity-40 brightness-0 invert sm:h-6 sm:max-w-18 md:h-7 md:max-w-20"
            />
            {i < brands.length - 1 && (
              <div className="hidden h-5 w-px bg-(--color-glass-border) sm:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
