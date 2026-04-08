export type PrivacyPolicyLocale = 'en' | 'pt-BR';

type PolicySection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type PrivacyPolicyContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  updatedLabel: string;
  updatedDate: string;
  backLabel: string;
  footerNote: string;
  sections: PolicySection[];
};

export const privacyPolicyContent: Record<PrivacyPolicyLocale, PrivacyPolicyContent> = {
  en: {
    metaTitle: 'Privacy Policy | Bicalho Ads Lab',
    metaDescription:
      'Learn how Bicalho Ads Lab collects, uses, and protects personal data submitted through this landing page and related lead generation campaigns.',
    eyebrow: 'Privacy Policy',
    title: 'How Bicalho Ads Lab handles personal data',
    intro:
      'This policy explains how Bicalho Ads Lab collects, uses, stores, and shares information submitted through this landing page and related lead generation campaigns.',
    updatedLabel: 'Last updated',
    updatedDate: 'April 8, 2026',
    backLabel: 'Back to homepage',
    footerNote:
      'For privacy-related requests, use the official contact channel through which Bicalho Ads Lab communicates with you.',
    sections: [
      {
        title: '1. Scope',
        body: [
          'This policy applies to personal data collected through Bicalho Ads Lab landing pages, forms, and campaign experiences used to receive business inquiries and qualification requests.',
          'By submitting your information, you acknowledge that your data may be processed in accordance with this policy and applicable law.',
        ],
      },
      {
        title: '2. Information we collect',
        body: ['The information collected depends on how you interact with the page and the tools enabled for the campaign.'],
        bullets: [
          'Identification and contact data, such as full name, email address, phone number, and business name.',
          'Lead metadata sent with the form, such as campaign source, language, and country context.',
          'Technical and usage data that may be collected through cookies, browser signals, tag management, or analytics tools configured on the page.',
        ],
      },
      {
        title: '3. How we use your information',
        body: ['Bicalho Ads Lab uses the collected data to operate the landing page and respond to commercial interest.'],
        bullets: [
          'Review and qualify your request.',
          'Contact you about services, strategy, onboarding, and follow-up conversations.',
          'Measure campaign performance and improve page experience.',
          'Protect the site, prevent misuse, and comply with legal obligations.',
        ],
      },
      {
        title: '4. Sharing of information',
        body: [
          'Your data may be shared only when reasonably necessary to operate the campaign and business workflow.',
          'This can include hosting providers, automation or CRM tools that receive form submissions, analytics or tag-management vendors configured for the page, and authorities when disclosure is required by law.',
        ],
      },
      {
        title: '5. Retention and security',
        body: [
          'Personal data is retained only for as long as necessary to handle your request, maintain business records, support legitimate business operations, or meet legal obligations.',
          'Bicalho Ads Lab uses reasonable administrative, technical, and organizational measures to protect personal data. However, no internet transmission or storage system can be guaranteed as completely secure.',
          'Please do not submit sensitive personal data through this landing page.',
        ],
      },
      {
        title: '6. Cookies and tracking technologies',
        body: [
          'This page may use cookies, pixels, scripts, or similar technologies to understand traffic, attribute campaigns, and improve marketing performance.',
          'You can control cookies through your browser settings and, where available, platform-specific privacy controls.',
        ],
      },
      {
        title: '7. Your rights and choices',
        body: ['Depending on your location, you may have privacy rights under applicable law.'],
        bullets: [
          'Request access to the personal data held about you.',
          'Request correction, update, or deletion of inaccurate or unnecessary data.',
          'Object to certain processing activities or withdraw consent where consent is the legal basis.',
          'Request more information about how your data is handled.',
        ],
      },
      {
        title: '8. Children',
        body: [
          'This landing page is intended for business and professional inquiries and is not directed to children under 18 years of age.',
          'If you believe personal data from a child was submitted in error, request its removal through the official contact channel used by Bicalho Ads Lab.',
        ],
      },
      {
        title: '9. Updates to this policy',
        body: [
          'This policy may be updated from time to time to reflect operational, legal, or platform changes.',
          'The date shown at the top of this page indicates the latest revision.',
        ],
      },
    ],
  },
  'pt-BR': {
    metaTitle: 'Política de Privacidade | Bicalho Ads Lab',
    metaDescription:
      'Entenda como a Bicalho Ads Lab coleta, usa e protege os dados pessoais enviados por esta landing page e por campanhas de geração de leads.',
    eyebrow: 'Política de Privacidade',
    title: 'Como a Bicalho Ads Lab trata dados pessoais',
    intro:
      'Esta política explica como a Bicalho Ads Lab coleta, utiliza, armazena e compartilha informações enviadas por esta landing page e por campanhas relacionadas de geração de leads.',
    updatedLabel: 'Última atualização',
    updatedDate: '8 de abril de 2026',
    backLabel: 'Voltar para a página inicial',
    footerNote:
      'Para solicitações relacionadas à privacidade, utilize o canal oficial pelo qual a Bicalho Ads Lab se comunica com você.',
    sections: [
      {
        title: '1. Escopo',
        body: [
          'Esta política se aplica aos dados pessoais coletados por landing pages, formulários e experiências de campanha da Bicalho Ads Lab usados para receber contatos comerciais e pedidos de qualificação.',
          'Ao enviar suas informações, você reconhece que seus dados poderão ser tratados de acordo com esta política e com a legislação aplicável.',
        ],
      },
      {
        title: '2. Informações que coletamos',
        body: ['As informações coletadas dependem da forma como você interage com a página e das ferramentas habilitadas na campanha.'],
        bullets: [
          'Dados de identificação e contato, como nome completo, email, telefone e nome da empresa.',
          'Metadados do lead enviados com o formulário, como origem da campanha, idioma e contexto de país.',
          'Dados técnicos e de uso que podem ser coletados por cookies, sinais do navegador, gerenciadores de tags ou ferramentas de analytics configuradas na página.',
        ],
      },
      {
        title: '3. Como usamos suas informações',
        body: ['A Bicalho Ads Lab usa os dados coletados para operar a landing page e responder ao interesse comercial.'],
        bullets: [
          'Analisar e qualificar sua solicitação.',
          'Entrar em contato sobre serviços, estratégia, onboarding e conversas de acompanhamento.',
          'Medir a performance da campanha e melhorar a experiência da página.',
          'Proteger o site, evitar uso indevido e cumprir obrigações legais.',
        ],
      },
      {
        title: '4. Compartilhamento de informações',
        body: [
          'Seus dados podem ser compartilhados apenas quando isso for razoavelmente necessário para operar a campanha e o fluxo comercial.',
          'Isso pode incluir provedores de hospedagem, ferramentas de automação ou CRM que recebem os envios do formulário, fornecedores de analytics ou gerenciamento de tags configurados para a página e autoridades quando a divulgação for exigida por lei.',
        ],
      },
      {
        title: '5. Retenção e segurança',
        body: [
          'Os dados pessoais são mantidos apenas pelo tempo necessário para tratar sua solicitação, manter registros comerciais, apoiar operações legítimas do negócio ou cumprir obrigações legais.',
          'A Bicalho Ads Lab adota medidas administrativas, técnicas e organizacionais razoáveis para proteger os dados pessoais. Ainda assim, nenhuma transmissão pela internet ou sistema de armazenamento pode ser garantido como totalmente seguro.',
          'Não envie dados pessoais sensíveis por esta landing page.',
        ],
      },
      {
        title: '6. Cookies e tecnologias de rastreamento',
        body: [
          'Esta página pode usar cookies, pixels, scripts ou tecnologias similares para entender o tráfego, atribuir campanhas e melhorar a performance de marketing.',
          'Você pode controlar cookies pelas configurações do seu navegador e, quando disponível, por controles de privacidade oferecidos pelas plataformas.',
        ],
      },
      {
        title: '7. Seus direitos e escolhas',
        body: ['Dependendo da sua localização, você pode ter direitos de privacidade previstos na legislação aplicável.'],
        bullets: [
          'Solicitar acesso aos dados pessoais mantidos sobre você.',
          'Solicitar correção, atualização ou exclusão de dados incorretos ou desnecessários.',
          'Se opor a determinados tratamentos ou retirar consentimento quando essa for a base legal.',
          'Solicitar mais informações sobre a forma como seus dados são tratados.',
        ],
      },
      {
        title: '8. Crianças e adolescentes',
        body: [
          'Esta landing page é destinada a contatos empresariais e profissionais e não é direcionada a menores de 18 anos.',
          'Se você acreditar que dados de uma criança ou adolescente foram enviados por engano, solicite a remoção pelo canal oficial usado pela Bicalho Ads Lab.',
        ],
      },
      {
        title: '9. Atualizações desta política',
        body: [
          'Esta política pode ser atualizada periodicamente para refletir mudanças operacionais, legais ou de plataforma.',
          'A data exibida no topo desta página indica a revisão mais recente.',
        ],
      },
    ],
  },
};
