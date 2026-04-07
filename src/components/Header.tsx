import type { LandingContent } from '../content';

type HeaderProps = {
  content: LandingContent;
};

const Header = ({ content }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src="/bicalho-logo.png" alt="Bicalho Ads Lab" className="h-11 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[var(--ink-soft)] md:flex">
          {content.navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--ink)]">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#apply"
          className="rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_40px_rgba(104,57,201,0.18)] transition hover:bg-[var(--brand-deep)]"
        >
          {content.ctaLabel}
        </a>
      </div>
    </header>
  );
};

export default Header;
