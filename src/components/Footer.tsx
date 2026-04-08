import type { LandingContent } from '../content';

type FooterProps = {
  content: LandingContent;
};

const Footer = ({ content }: FooterProps) => {
  const privacyHref = content.locale === 'pt-BR' ? '/br/privacy-policy' : '/privacy-policy';
  const privacyLabel = content.locale === 'pt-BR' ? 'Política de Privacidade' : 'Privacy Policy';

  return (
    <footer className="border-t border-[var(--line)] bg-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-[var(--ink-soft)] md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img src="/bicalho-logo.png" alt="Bicalho Ads Lab" className="h-10 w-auto" />
          <p>{content.footerDescription}</p>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <a href={privacyHref} className="font-semibold text-[var(--brand-deep)] transition hover:text-[var(--brand)]">
            {privacyLabel}
          </a>
          <p>© {new Date().getFullYear()} Bicalho Ads Lab. {content.footerRights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
