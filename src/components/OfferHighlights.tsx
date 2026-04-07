import { BarChart3, CircleDollarSign, Megaphone, UsersRound } from 'lucide-react';

const highlights = [
  {
    title: 'Full campaign setup and management',
    description:
      'We build the campaigns, manage the execution, and keep the account focused on profitable growth.',
    icon: Megaphone,
  },
  {
    title: 'Strategic audience and offer positioning',
    description:
      'We shape the message, audience, and sales angle to attract people who are more likely to buy.',
    icon: CircleDollarSign,
  },
  {
    title: 'Continuous performance optimization',
    description:
      'We refine the campaigns based on performance so your results keep moving in the right direction.',
    icon: UsersRound,
  },
  {
    title: 'High-quality leads, not vanity clicks',
    description:
      'The goal is simple: qualified demand and conversions, not empty traffic numbers.',
    icon: BarChart3,
  },
];

const OfferHighlights = () => {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-deep)]">
          A performance-based model built for real results
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-[var(--ink)] md:text-5xl">
          We win when you win.
        </h2>
        <p className="mt-5 text-lg leading-8 text-[var(--ink-soft)]">
          Most agencies get paid no matter what happens. We don&apos;t. That&apos;s why our focus is simple:
          help you grow revenue consistently.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map(({ title, description, icon: Icon }) => (
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
        ))}
      </div>
    </section>
  );
};

export default OfferHighlights;
