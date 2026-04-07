import { BarChart3, CircleDollarSign, Megaphone, UsersRound } from 'lucide-react';
import type { LandingContent } from '../content';

const icons = [Megaphone, CircleDollarSign, UsersRound, BarChart3];

type OfferHighlightsProps = {
  content: LandingContent;
};

const OfferHighlights = ({ content }: OfferHighlightsProps) => {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-deep)]">
          {content.highlights.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-[var(--ink)] md:text-5xl">
          {content.highlights.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-[var(--ink-soft)]">
          {content.highlights.description}
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {content.highlights.items.map(({ title, description }, index) => {
          const Icon = icons[index];
          return (
            <article
              key={title}
              className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_18px_50px_rgba(50,35,86,0.04)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-tint)] text-[var(--brand)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-[-0.03em] text-[var(--ink)]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default OfferHighlights;
