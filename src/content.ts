export type NavItem = {
  label: string;
  href: string;
};

export type LandingContent = {
  locale: 'en' | 'pt-BR';
  country: 'eua' | 'brasil';
  navItems: NavItem[];
  ctaLabel: string;
  footerDescription: string;
  footerRights: string;
  hero: {
    badge: string;
    title: string;
    description: string;
    points: string[];
    secondaryCta: string;
    panelEyebrow: string;
    panelTitle: string;
    metrics: Array<{ value: string; label: string }>;
    riskEyebrow: string;
    riskText: string;
  };
  highlights: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Array<{ number: string; title: string; description: string }>;
  };
  socialProof: {
    eyebrow: string;
    title: string;
    stats: Array<{ value: string; label: string }>;
    quotes: Array<{ quote: string; person: string }>;
  };
  form: {
    source: string;
    successMessage: string;
    errorMessage: string;
    invalidMessage: string;
    submittingMessage: string;
    eyebrow: string;
    title: string;
    description: string;
    callouts: string[];
    labels: {
      name: string;
      phone: string;
      email: string;
      business: string;
    };
    placeholders: {
      name: string;
      phone: string;
      email: string;
      business: string;
    };
    submitLabel: string;
    helper: string;
  };
};

export const landingContent: Record<'en' | 'pt-BR', LandingContent> = {
  en: {
    locale: 'en',
    country: 'eua',
    navItems: [
      { label: 'How it Works', href: '#process' },
      { label: 'Results', href: '#results' },
      { label: 'Apply', href: '#apply' },
    ],
    ctaLabel: 'Get My Free Plan',
    footerDescription: 'Performance-first advertising for U.S. businesses ready to scale.',
    footerRights: 'All rights reserved.',
    hero: {
      badge: 'Paid Ads With No Fixed Fee',
      title: 'You Only Pay When You Make Sales',
      description:
        'Stop wasting money on ads with no guarantee of return. We create the strategy, creatives, launch, and management with no fixed management fee. You still invest in ad spend.',
      points: [
        'No expensive monthly retainers',
        'No agencies profiting without performance',
        '100% aligned with your growth',
      ],
      secondaryCta: 'See Why This Works',
      panelEyebrow: "Here's the key difference",
      panelTitle: 'We only get paid when you generate results.',
      metrics: [
        {
          value: 'Zero upfront management cost',
          label: 'You only invest in ad spend while we handle strategy, creatives, execution, and optimization.',
        },
        {
          value: 'Results-first compensation',
          label: 'We only get paid when you generate results.',
        },
        {
          value: 'Sales-focused growth',
          label: 'Built to generate real demand, qualified leads, and more revenue opportunities.',
        },
      ],
      riskEyebrow: 'Risk reversal',
      riskText:
        "Most agencies get paid no matter what happens. We don't. If you don't make sales, we don't make money.",
    },
    highlights: {
      eyebrow: 'A performance-based model built for real results',
      title: 'We win when you win.',
      description:
        "Most agencies get paid no matter what happens. We don't. That's why our focus is simple: help you grow revenue consistently.",
      items: [
        {
          title: 'Full campaign setup and management',
          description:
            'We build the campaigns, manage the execution, and keep the account focused on profitable growth.',
        },
        {
          title: 'Strategic audience and offer positioning',
          description:
            'We shape the message, audience, and sales angle to attract people who are more likely to buy.',
        },
        {
          title: 'Continuous performance optimization',
          description:
            'We refine the campaigns based on performance so your results keep moving in the right direction.',
        },
        {
          title: 'High-quality leads, not vanity clicks',
          description: 'The goal is simple: qualified demand and conversions, not empty traffic numbers.',
        },
      ],
    },
    process: {
      eyebrow: 'How It Works',
      title: 'Simple process. Clear strategy. Performance-based execution.',
      steps: [
        { number: '01', title: 'Tell us about your business', description: 'We understand your offer, market, and goals.' },
        { number: '02', title: 'We map your ad strategy', description: 'Built to generate real demand and qualified leads.' },
        { number: '03', title: 'We launch and optimize', description: 'And scale based on performance.' },
      ],
    },
    socialProof: {
      eyebrow: 'Why This Works Better',
      title: 'Lower risk. Better alignment. Stronger performance focus.',
      stats: [
        { value: 'Aligned incentives', label: 'We grow together.' },
        { value: 'Lower risk', label: 'No paying for empty promises.' },
        { value: 'Sales-driven strategy', label: 'Not just traffic, but conversions.' },
      ],
      quotes: [
        { quote: 'For the first time, running ads actually felt low-risk.', person: 'Local business owner' },
        { quote: 'They were focused on results, not just charging a fee.', person: 'Service provider' },
      ],
    },
    form: {
      source: 'lp-en-bicalho-adslab',
      successMessage: 'Thanks. Your request has been received and the team can review your business.',
      errorMessage: 'We could not send your request right now. Please try again in a moment.',
      invalidMessage: 'Please enter a valid name, business, email, and phone number.',
      submittingMessage: 'Submitting your information...',
      eyebrow: 'Get Your Free Ad Strategy Plan',
      title: 'See how you can attract customers daily with a model where you only pay when you win.',
      description:
        "Leave your details and we'll review your business, map the opportunity, and show you how this performance-based model can work for your growth.",
      callouts: [
        'Limited spots available.',
        'No fixed fees.',
        'No unnecessary risk. Just performance-driven growth.',
      ],
      labels: {
        name: 'Full name',
        phone: 'Phone',
        email: 'Email',
        business: 'Business name',
      },
      placeholders: {
        name: 'John Smith',
        phone: '(555) 123-4567',
        email: 'you@company.com',
        business: 'Your company',
      },
      submitLabel: 'Get My Free Plan',
      helper: 'We only ask for the four fields needed to qualify and contact the lead.',
    },
  },
  'pt-BR': {
    locale: 'pt-BR',
    country: 'brasil',
    navItems: [
      { label: 'Como Funciona', href: '#process' },
      { label: 'Resultados', href: '#results' },
      { label: 'Quero Aplicar', href: '#apply' },
    ],
    ctaLabel: 'Quero Meu Plano Gratuito',
    footerDescription: 'Publicidade orientada por performance para empresas brasileiras prontas para escalar.',
    footerRights: 'Todos os direitos reservados.',
    hero: {
      badge: 'Tráfego Pago Sem Taxa Fixa',
      title: 'Você Só Paga Quando Faz Vendas',
      description:
        'Pare de desperdiçar dinheiro com anúncios sem garantia de retorno. Nós criamos a estratégia, os criativos, o lançamento e a gestão sem taxa fixa de gerenciamento. O investimento em tráfego continua sendo seu.',
      points: [
        'Sem mensalidades caras',
        'Sem agências lucrando sem performance',
        '100% alinhado com o seu crescimento',
      ],
      secondaryCta: 'Entenda Como Funciona',
      panelEyebrow: 'Aqui está a grande diferença',
      panelTitle: 'Nós só recebemos quando você gera resultado.',
      metrics: [
        {
          value: 'Zero custo de gestão antecipado',
          label: 'Você investe apenas no tráfego enquanto nós cuidamos da estratégia, dos criativos, da execução e da otimização.',
        },
        {
          value: 'Remuneração por resultado',
          label: 'Nós só ganhamos quando você gera resultado.',
        },
        {
          value: 'Crescimento com foco em vendas',
          label: 'Estruturado para gerar demanda real, leads qualificados e mais oportunidades de faturamento.',
        },
      ],
      riskEyebrow: 'Reversão de risco',
      riskText:
        'A maioria das agências recebe independentemente do que aconteça. Nós não. Se você não vender, nós não ganhamos.',
    },
    highlights: {
      eyebrow: 'Um modelo baseado em performance para gerar resultados reais',
      title: 'A gente cresce quando você cresce.',
      description:
        'A maioria das agências recebe independentemente do resultado. Nós não. Por isso nosso foco é simples: ajudar você a aumentar o faturamento com consistência.',
      items: [
        {
          title: 'Configuração e gestão completa das campanhas',
          description:
            'Nós estruturamos as campanhas, gerenciamos a execução e mantemos a conta focada em crescimento lucrativo.',
        },
        {
          title: 'Posicionamento estratégico de público e oferta',
          description:
            'Ajustamos mensagem, público e ângulo comercial para atrair pessoas com maior chance de compra.',
        },
        {
          title: 'Otimização contínua de performance',
          description:
            'Refinamos as campanhas com base nos dados para que os resultados evoluam na direção certa.',
        },
        {
          title: 'Leads qualificados, não cliques de vaidade',
          description: 'O foco é simples: demanda qualificada e conversão, não números vazios de tráfego.',
        },
      ],
    },
    process: {
      eyebrow: 'Como Funciona',
      title: 'Processo simples. Estratégia clara. Execução orientada por performance.',
      steps: [
        { number: '01', title: 'Você nos fala sobre o seu negócio', description: 'Entendemos sua oferta, mercado e objetivos.' },
        { number: '02', title: 'Nós desenhamos sua estratégia de tráfego', description: 'Pensada para gerar demanda real e leads qualificados.' },
        { number: '03', title: 'Nós lançamos e otimizamos', description: 'E escalamos com base em performance.' },
      ],
    },
    socialProof: {
      eyebrow: 'Por Que Isso Funciona Melhor',
      title: 'Menor risco. Melhor alinhamento. Mais foco em performance.',
      stats: [
        { value: 'Incentivos alinhados', label: 'A gente cresce junto.' },
        { value: 'Menor risco', label: 'Sem pagar por promessas vazias.' },
        { value: 'Estratégia orientada a vendas', label: 'Não é só tráfego, é conversão.' },
      ],
      quotes: [
        { quote: 'Pela primeira vez, rodar tráfego realmente pareceu de baixo risco.', person: 'Empresário local' },
        { quote: 'Eles estavam focados em resultado, não apenas em cobrar uma taxa.', person: 'Prestador de serviço' },
      ],
    },
    form: {
      source: 'lp-br-bicalho-adslab',
      successMessage: 'Recebemos sua solicitação. Nossa equipe vai analisar seu negócio.',
      errorMessage: 'Não foi possível enviar agora. Tente novamente em instantes.',
      invalidMessage: 'Preencha nome, empresa, email e telefone corretamente.',
      submittingMessage: 'Enviando suas informações...',
      eyebrow: 'Receba Seu Plano Gratuito de Tráfego',
      title: 'Descubra como atrair clientes todos os dias com um modelo em que você só paga quando ganha.',
      description:
        'Deixe seus dados e vamos analisar o seu negócio, mapear a oportunidade e mostrar como esse modelo baseado em performance pode funcionar para o seu crescimento.',
      callouts: [
        'Vagas limitadas.',
        'Sem taxa fixa.',
        'Sem risco desnecessário. Só crescimento orientado por performance.',
      ],
      labels: {
        name: 'Nome completo',
        phone: 'Telefone',
        email: 'Email',
        business: 'Nome da empresa',
      },
      placeholders: {
        name: 'Seu nome',
        phone: '(11) 99999-9999',
        email: 'voce@empresa.com',
        business: 'Sua empresa',
      },
      submitLabel: 'Quero Meu Plano Gratuito',
      helper: 'Pedimos apenas os quatro dados necessários para qualificar e entrar em contato.',
    },
  },
};
