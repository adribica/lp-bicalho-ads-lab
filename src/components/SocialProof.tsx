import { Quote, Star } from 'lucide-react';

const proofItems = [
  {
    quote: 'The structure felt more professional from the first conversation, and the ad direction made the spend feel much safer.',
    person: 'Service business owner',
  },
  {
    quote: 'What stood out was the clarity. Instead of vague promises, we got a very direct plan tied to lead generation.',
    person: 'Local business operator',
  },
  {
    quote: 'The commission logic made the model easier to consider because it felt connected to outcomes, not just a fixed fee.',
    person: 'Growth-focused founder',
  },
];

const stats = [
  { value: 'U.S. market ready', label: 'Messaging adapted for non-WhatsApp traffic' },
  { value: '4 required fields', label: 'Low-friction lead capture for faster submissions' },
  { value: 'Professional positioning', label: 'Built to increase trust before the first call' },
];

const SocialProof = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-[var(--ink)] p-8 text-white md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/60">Social proof</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">Positioned to feel credible before the lead form.</h2>
          <div className="mt-8 grid gap-4">
            {stats.map((stat) => (
              <div key={stat.value} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="font-display text-2xl font-bold tracking-[-0.04em] text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-7 text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {proofItems.map((item) => (
            <article key={item.person} className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[0_18px_50px_rgba(50,35,86,0.05)]">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-[var(--brand)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-[var(--brand)]" />
              </div>
              <p className="mt-5 text-base leading-8 text-[var(--ink-soft)]">“{item.quote}”</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--ink)]">{item.person}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
