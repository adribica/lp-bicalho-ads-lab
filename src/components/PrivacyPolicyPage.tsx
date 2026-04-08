import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import {
  privacyPolicyContent,
  type PrivacyPolicyLocale,
} from '../privacyPolicyContent';

type PrivacyPolicyPageProps = {
  homePath: string;
  locale: PrivacyPolicyLocale;
};

const PrivacyPolicyPage = ({ homePath, locale }: PrivacyPolicyPageProps) => {
  const content = privacyPolicyContent[locale];

  useEffect(() => {
    document.title = content.metaTitle;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', content.metaDescription);
    }
  }, [content]);

  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(144,92,255,0.18),transparent_68%)]" />
        <div className="absolute right-[-8rem] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(210,188,255,0.24),transparent_72%)]" />
      </div>

      <header className="border-b border-[var(--line)] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href={homePath} className="flex items-center gap-3">
            <img src="/bicalho-logo.png" alt="Bicalho Ads Lab" className="h-11 w-auto" />
          </a>

          <a
            href={homePath}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white px-5 py-3 text-sm font-bold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand-deep)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {content.backLabel}
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <section className="rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_24px_80px_rgba(50,35,86,0.07)] lg:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand)]">{content.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] lg:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--ink-soft)] lg:text-lg">
            {content.intro}
          </p>

          <div className="mt-8 inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--ink)]">
            {content.updatedLabel}: {content.updatedDate}
          </div>
        </section>

        <section className="mt-8 grid gap-6">
          {content.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white p-7 shadow-[0_20px_60px_rgba(50,35,86,0.05)] lg:p-8"
            >
              <h2 className="font-display text-2xl font-bold tracking-[-0.03em]">{section.title}</h2>

              <div className="mt-4 grid gap-4 text-base leading-8 text-[var(--ink-soft)]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.bullets ? (
                <ul className="mt-5 grid gap-3 text-base leading-8 text-[var(--ink-soft)]">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-4"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-[var(--ink-soft)] lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="max-w-2xl">{content.footerNote}</p>
          <p>© {new Date().getFullYear()} Bicalho Ads Lab.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
