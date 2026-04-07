import React from 'react';
import { Database, Zap, MessageCircle } from 'lucide-react';

const processSteps = [
    {
        id: 1,
        title: "Etapa 1",
        subtitle: "Coleta de Informação",
        description: "Você envia os dados base do seu negócio através do nosso formulário auditável.",
        icon: <Database className="w-6 h-6 text-white" />,
        colorGlow: "shadow-[0_0_30px_rgba(255,255,255,0.2)] border-white/30"
    },
    {
        id: 2,
        title: "Etapa 2",
        subtitle: "A Análise do Laboratório",
        description: "Nós analisamos todos os pontos estratégicos do seu funil (Branding, Landing Page e Criativos).",
        icon: <Zap className="w-6 h-6 text-magenta-neon" />,
        colorGlow: "shadow-[0_0_30px_rgba(255,0,255,0.3)] border-magenta-neon/50"
    },
    {
        id: 3,
        title: "Etapa 3",
        subtitle: "O Veredito Final",
        description: "Você recebe o diagnóstico completo, direto no seu WhatsApp, contendo a Engenharia Reversa de Escala.",
        icon: <MessageCircle className="w-6 h-6 text-gold-main" />,
        colorGlow: "shadow-[0_0_30px_rgba(212,175,55,0.3)] border-gold-main/50"
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section className="relative w-full py-32 px-6 z-10 bg-[#020202]" id="como-funciona">

            {/* Background Dim */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.03)_0,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Como Funciona o <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-neon to-primary-neon">Processo</span>
                    </h2>
                    <p className="mt-4 text-white/50 text-lg">Três passos simples que separam sua marca da previsibilidade de vendas.</p>
                </div>

                {/* Linha Neon Conectora (Apenas Web) */}
                <div className="absolute left-1/2 top-[200px] bottom-[100px] w-0.5 bg-gradient-to-b from-white/10 via-magenta-neon/50 to-gold-main/10 hidden md:block -ml-[1px]"></div>

                <div className="flex flex-col gap-12 relative z-10">
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 !== 0;
                        return (
                            <div key={step.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>

                                {/* Espaçador Flexível D/E */}
                                <div className="flex-1 hidden md:block w-full">
                                    <div className={`flex flex-col ${isEven ? 'items-start text-left' : 'items-end text-right'}`}>
                                        <h4 className="text-2xl font-black text-white">{step.subtitle}</h4>
                                        <p className="text-white/50 mt-2 max-w-sm">{step.description}</p>
                                    </div>
                                </div>

                                {/* Nó Central (Circle + Icon) com Hover Scale */}
                                <div className="relative group shrink-0">
                                    <div className={`w-20 h-20 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center relative z-20 group-hover:scale-110 transition-transform duration-500 ease-out group-hover:${step.colorGlow}`}>
                                        {step.icon}
                                    </div>
                                    {/* Etiqueta Passo Mobile/Web */}
                                    <div className={`absolute top-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 rounded-full border border-white/5 text-[10px] font-bold tracking-widest uppercase text-white backdrop-blur-md whitespace-nowrap hidden md:block ${isEven ? '-left-24' : '-right-24'}`}>
                                        {step.title}
                                    </div>
                                </div>

                                {/* Conteúdo Mobile/Alternativo */}
                                <div className="flex-1 md:hidden text-center">
                                    <span className="text-xs font-bold text-magenta-neon uppercase tracking-widest">{step.title}</span>
                                    <h4 className="text-2xl font-black text-white mt-1 mb-2">{step.subtitle}</h4>
                                    <p className="text-white/50">{step.description}</p>
                                </div>

                                {/* Placeholder para balancear Flexbox Desq/Esq no Desktop */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
