import { FormEvent, useMemo, useState } from 'react';
import { ArrowRight, Mail, Phone, BriefcaseBusiness, UserRound } from 'lucide-react';

type FormState = {
  name: string;
  phone: string;
  email: string;
  business: string;
};

const initialState: FormState = {
  name: '',
  phone: '',
  email: '',
  business: '',
};

const fieldStyles =
  'w-full rounded-2xl border border-[var(--line-strong)] bg-white px-4 py-4 text-base text-[var(--ink)] outline-none transition placeholder:text-[var(--ink-faint)] focus:border-[var(--brand)] focus:ring-4 focus:ring-[rgba(137,94,230,0.14)]';

const LeadCaptureForm = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const phoneDigits = form.phone.replace(/\D/g, '').length;
    return Boolean(form.name.trim() && form.business.trim() && emailOk && phoneDigits >= 10);
  }, [form]);

  const updateField = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      setStatus('error');
      setFeedback('Please enter a valid name, business, email, and phone number.');
      return;
    }

    setStatus('loading');
    setFeedback('Submitting your information...');

    try {
      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            business: form.business.trim(),
            source: 'us-paid-traffic-landing-page',
          }),
        });

        if (!response.ok) {
          throw new Error('Webhook request failed.');
        }
      }

      setStatus('success');
      setFeedback(
        webhookUrl
          ? 'Thanks. Your request has been received and the team can review your business.'
          : 'The page is ready. Add VITE_WEBHOOK_URL to capture submissions in your CRM or automation flow.',
      );
      setForm(initialState);
    } catch {
      setStatus('error');
      setFeedback('We could not send your request right now. Please try again in a moment.');
    }
  };

  return (
    <section id="apply" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
      <div className="grid gap-8 rounded-[2rem] border border-[var(--line)] bg-white p-8 shadow-[0_24px_80px_rgba(50,35,86,0.07)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#24183f,#38255f)] p-8 text-white">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/60">Lead capture</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em]">Tell us about your business and we’ll map the next move.</h2>
          <p className="mt-5 text-base leading-8 text-white/72">
            This form is built for prospects who prefer a direct professional contact flow. Leave your details and
            your business name so the team can evaluate fit and reach out with the right next step.
          </p>

          <div className="mt-8 grid gap-4 text-sm text-white/75">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">Short form built to reduce drop-off from cold traffic.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">Best used with a webhook, CRM, or automation destination.</div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">Professional intake for users who do not want to use WhatsApp.</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-[var(--ink)]">Full name</span>
            <div className="relative">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--brand)]" />
              <input
                type="text"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="John Smith"
                className={`${fieldStyles} pl-12`}
              />
            </div>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[var(--ink)]">Phone</span>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--brand)]" />
              <input
                type="tel"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                placeholder="(555) 123-4567"
                className={`${fieldStyles} pl-12`}
              />
            </div>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[var(--ink)]">Email</span>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--brand)]" />
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                placeholder="you@company.com"
                className={`${fieldStyles} pl-12`}
              />
            </div>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-[var(--ink)]">Business name</span>
            <div className="relative">
              <BriefcaseBusiness className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--brand)]" />
              <input
                type="text"
                value={form.business}
                onChange={(event) => updateField('business', event.target.value)}
                placeholder="Your company"
                className={`${fieldStyles} pl-12`}
              />
            </div>
          </label>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 py-4 text-base font-bold text-white transition hover:bg-[var(--brand-deep)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? 'Submitting...' : 'Request My Free Ads Plan'}
            <ArrowRight className="h-4 w-4" />
          </button>

          <p
            className={`text-sm leading-6 ${
              status === 'error'
                ? 'text-red-600'
                : status === 'success'
                  ? 'text-[var(--brand-deep)]'
                  : 'text-[var(--ink-soft)]'
            }`}
          >
            {feedback || 'We only ask for the four fields needed to qualify and contact the lead.'}
          </p>
        </form>
      </div>
    </section>
  );
};

export default LeadCaptureForm;
