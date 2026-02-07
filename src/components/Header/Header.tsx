export function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-6 w-full">
      <nav className="flex items-center gap-8">
        <a
          href="#features"
          className="font-body text-sm font-medium text-(--color-text-white) hover:text-(--color-neon-green) transition-colors"
        >
          Features
        </a>
        <a
          href="#pricing"
          className="font-body text-sm font-medium text-(--color-text-white) hover:text-(--color-neon-green) transition-colors"
        >
          Pricing
        </a>
        <a
          href="#faq"
          className="font-body text-sm font-medium text-(--color-text-white) hover:text-(--color-neon-green) transition-colors"
        >
          FAQ
        </a>
      </nav>

      <span className="font-heading text-2xl font-bold text-(--color-neon-green)">
        Ora.
      </span>

      <button className="flex items-center gap-2 rounded-3xl border border-white px-6 py-3 hover:bg-white/5 transition-colors">
        <span className="font-body text-sm font-medium text-(--color-text-white)">
          Register
        </span>
        <span className="font-body text-xs text-(--color-text-muted)">
          - it's free
        </span>
      </button>
    </header>
  );
}
