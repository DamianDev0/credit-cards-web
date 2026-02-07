export function HeroHeadline() {
  return (
    <div data-hero-headline className="flex flex-col">
      <h1 className="font-body text-4xl font-black leading-none tracking-tight text-(--color-text-white) sm:text-5xl md:text-[7vw]">
        The smartest way
      </h1>
      <h1 className="font-body text-4xl font-black leading-none tracking-tight text-(--color-text-white) sm:text-5xl md:text-[7vw]">
        to build <span className="text-(--color-accent)">cards.</span>
      </h1>
    </div>
  );
}
