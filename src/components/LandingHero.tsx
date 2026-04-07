import { motion } from 'framer-motion';
import { ArrowRight, BadgeDollarSign, CheckCircle2, ShieldCheck } from 'lucide-react';

const heroPoints = [
  'We structure and manage the campaigns for you',
  'Commission model designed to reduce upfront cost',
  'Built to generate more leads, calls, and booked jobs',
];

const metrics = [
  { value: 'Lower risk', label: 'Performance-led commercial model' },
  { value: 'Faster launch', label: 'Clear campaign setup and creative direction' },
  { value: 'More qualified leads', label: 'Sharper positioning for paid traffic' },
];

const LandingHero = () => {
  return (
    <section id="top" className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand-deep)]">
          <BadgeDollarSign className="h-4 w-4" />
          Free ad strategy with a performance model
        </div>

        <h1 className="mt-8 max-w-3xl font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-[var(--ink)] md:text-6xl lg:text-7xl">
          Run paid ads with less upfront cost and a sharper path to real results.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-soft)] md:text-xl">
          Bicalho Ads Lab helps U.S. businesses launch a stronger paid traffic system with free campaign
          direction, a commission-based model, and a process focused on profitable growth instead of wasted spend.
        </p>

        <div className="mt-8 grid gap-3 text-sm font-medium text-[var(--ink)]">
          {heroPoints.map((point) => (
            <div key={point} className="flex items-start gap-3 rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-[var(--brand)]" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 py-4 text-base font-bold text-white shadow-[0_18px_48px_rgba(104,57,201,0.2)] transition hover:bg-[var(--brand-deep)]"
          >
            Get My Free Ads Plan
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#results"
            className="inline-flex items-center justify-center rounded-full border border-[var(--line-strong)] bg-white px-7 py-4 text-base font-bold text-[var(--ink)] transition hover:border-[var(--brand)] hover:text-[var(--brand-deep)]"
          >
            See Why It Converts
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(160deg,rgba(168,128,255,0.22),rgba(255,255,255,0.6))] blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line-strong)] bg-white p-7 shadow-[0_30px_100px_rgba(50,35,86,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-deep)]">Campaign Advantage</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em] text-[var(--ink)]">More efficiency, more upside</h2>
            </div>
            <div className="rounded-2xl bg-[var(--surface-tint)] p-3 text-[var(--brand)]">
              <ShieldCheck className="h-8 w-8" />
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {metrics.map((metric) => (
              <div key={metric.value} className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] px-5 py-5">
                <p className="font-display text-3xl font-bold tracking-[-0.04em] text-[var(--ink)]">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-[linear-gradient(135deg,#f4eeff,#ffffff)] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-deep)]">Best fit</p>
            <p className="mt-3 text-base leading-7 text-[var(--ink-soft)]">
              Ideal for service businesses, local brands, and operators who want a professional paid traffic partner
              without the friction of a high fixed monthly burden.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LandingHero;
