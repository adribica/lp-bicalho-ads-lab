import Header from './components/Header';
import Footer from './components/Footer';
import LandingHero from './components/LandingHero';
import OfferHighlights from './components/OfferHighlights';
import ProcessSection from './components/ProcessSection';
import SocialProof from './components/SocialProof';
import LeadCaptureForm from './components/LeadCaptureForm';
import { landingContent } from './content';

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname.toLowerCase() : '/';
  const content =
    pathname.startsWith('/br')
      ? landingContent['pt-BR']
      : landingContent.en;

  return (
    <div className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(144,92,255,0.18),transparent_68%)]" />
        <div className="absolute right-[-8rem] top-[20rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(210,188,255,0.3),transparent_72%)]" />
        <div className="absolute left-[-10rem] top-[54rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(167,126,255,0.2),transparent_72%)]" />
      </div>

      <Header content={content} />

      <main>
        <LandingHero content={content} />
        <OfferHighlights content={content} />
        <ProcessSection content={content} />
        <SocialProof content={content} />
        <LeadCaptureForm content={content} />
      </main>

      <Footer content={content} />
    </div>
  );
}

export default App;
