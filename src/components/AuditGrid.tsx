import React from 'react';
import { Target, ShieldCheck, LayoutTemplate, Flame, BarChart3, TrendingUp } from 'lucide-react';

const auditItems = [
    {
        id: 1,
        title: "Clareza da Oferta",
        icon: <Target className="w-6 h-6 text-gold-main" />,
        colorClass: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:border-gold-main/30"
    },
    {
        id: 2,
        title: "Autoridade da Marca",
        icon: <ShieldCheck className="w-6 h-6 text-magenta-neon" />,
        colorClass: "group-hover:shadow-[0_0_30px_rgba(255,0,255,0.2)] group-hover:border-magenta-neon/30"
    },
    {
        id: 3,
        title: "Estrutura da Página",
        icon: <LayoutTemplate className="w-6 h-6 text-primary-neon" />,
        colorClass: "group-hover:shadow-[0_0_30px_rgba(138,43,226,0.3)] group-hover:border-primary-neon/30"
    },
    {
        id: 4,
        title: "Geração de Desejo",
        icon: <Flame className="w-6 h-6 text-magenta-neon" />,
        colorClass: "group-hover:shadow-[0_0_30px_rgba(255,0,255,0.2)] group-hover:border-magenta-neon/30"
    },
    {
        id: 5,
        title: "Estratégia de Tráfego",
        icon: <BarChart3 className="w-6 h-6 text-primary-neon" />,
        colorClass: "group-hover:shadow-[0_0_30px_rgba(138,43,226,0.3)] group-hover:border-primary-neon/30"
    },
    {
        id: 6,
        title: "Oportunidades de Escala",
        icon: <TrendingUp className="w-6 h-6 text-gold-main" />,
        colorClass: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:border-gold-main/30"
    }
];

const AuditGrid: React.FC = () => {
    return (
        <section id="auditoria-grid" className="relative w-full py-24 px-6 z-20">

            {/* Glow Subtil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-1/2 bg-primary-dark/10 blur-[100px] pointer-events-none -z-10"></div>

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                        O Que Nossa Auditoria <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta-neon to-primary-neon">Vai Revelar</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {auditItems.map((item) => (
                        <div
                            key={item.id}
                            className={`group flex items-center gap-4 p-6 bg-[#0a0a0a] rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-1 ${item.colorClass}`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors shrink-0">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-bold text-lg">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AuditGrid;
