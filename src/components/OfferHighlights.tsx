import { BarChart3, CircleDollarSign, Megaphone, UsersRound } from 'lucide-react';

const highlights = [
  {
    title: 'Free strategic ad setup',
    description: 'We define the ad direction, audience logic, and campaign structure so your launch starts with intent.',
    icon: Megaphone,
  },
  {
    title: 'Commission-based alignment',
    description: 'Our model is built to keep cost pressure lower while aligning our incentives with the outcomes you want.',
    icon: CircleDollarSign,
  },
  {
    title: 'Lead quality over vanity metrics',
    description: 'The goal is not random clicks. The goal is qualified demand, stronger inquiries, and better close opportunities.',
    icon: UsersRound,
  },
  {
    title: 'Performance-minded optimization',
    description: 'We keep refining message, offer, and traffic angles to move toward efficient, repeatable growth.',
    icon: BarChart3,
  },
];

const OfferHighlights = () => {
  return (
    <section id="results" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-12">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--brand-deep)]">Why this offer works</p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] text-[var(--ink)] md:text-5xl">
          A paid traffic model that feels more practical for growing businesses.
        </h2>
        <p className="mt-5 text-lg leading-8 text-[var(--ink-soft)]">
          This page is built for prospects who prefer email and phone over WhatsApp. The message is simple: spend
          smarter, launch cleaner, and scale with a team that is tied to performance.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_18px_50px_rgba(50,35,86,0.04)]">
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
