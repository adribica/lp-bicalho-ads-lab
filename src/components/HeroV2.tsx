import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Activity, Rocket } from 'lucide-react';

const HeroV2: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToJarvis = () => {
        const element = document.getElementById('jarvis-experience');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative w-full min-h-[100svh] pt-28 pb-10 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between max-w-[1440px] mx-auto z-20 overflow-hidden">

            {/* Background Glows Subtis - Fundo Preto Profundo V3 */}
            <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-dark/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 -right-1/4 w-[500px] h-[500px] bg-magenta-dim blur-[150px] rounded-full pointer-events-none -z-10"></div>

            {/* LADO ESQUERDO: COPY FORTE E CLARA */}
            <div className="w-full lg:w-1/2 flex flex-col items-start z-10 relative mt-10 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-gold-main animate-pulse-fast"></div>
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-gold-light uppercase">Análise Estratégica Gratuita</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-6"
                >
                    Auditoria Completa do Seu Negócio<br />
                    <span className="text-white/60 text-3xl md:text-4xl lg:text-5xl">Descubra Onde Está Perdendo Vendas</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg text-white/50 font-medium leading-relaxed mb-10 max-w-xl"
                >
                    Vamos analisar <strong className="text-white">posicionamento, oferta, comunicação, conversão e tráfego.</strong> Você recebe um diagnóstico estratégico personalizado.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
                >
                    <button
                        onClick={scrollToJarvis}
                        className="w-full sm:w-auto group relative px-8 py-5 rounded-xl bg-white text-black font-black text-sm md:text-base overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.15)] whitespace-nowrap active:scale-[0.98]"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-magenta-neon/10 to-gold-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            RECEBER AUDITORIA GRATUITA
                            <Search className="w-4 h-4" />
                        </span>
                    </button>

                    <button
                        className="w-full sm:w-auto text-sm font-semibold text-white/50 hover:text-white transition-colors flex items-center justify-center gap-2 group"
                        onClick={() => {
                            const auditSection = document.getElementById('auditoria-grid');
                            auditSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Ver o que será analisado
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>
            </div>

            {/* LADO DIREITO: PAINEL 3D DE AUDITORIA (MUITO FORTE VISUALMENTE) */}
            <div className="w-full lg:w-1/2 mt-20 lg:mt-0 relative perspective-1000 h-[550px] hidden md:block">

                <motion.div
                    className="absolute inset-0 w-full h-full flex flex-col justify-center gap-6 pl-10"
                    animate={{
                        rotateX: mousePosition.y * -15,
                        rotateY: mousePosition.x * 15,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Card 1: Posicionamento */}
                    <div
                        className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-2xl overflow-hidden group ml-12"
                        style={{ transform: 'translateZ(60px)' }}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gold-main/50"></div>
                        {/* Animating Scanline */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gold-main/5 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>

                        <div className="flex items-center gap-4 mb-2">
                            <Search className="w-5 h-5 text-gold-main" />
                            <h3 className="text-white font-bold text-lg tracking-wide">Posicionamento</h3>
                        </div>
                        <div className="flex items-center justify-between pl-9 text-xs">
                            <span className="text-white/40 font-medium uppercase tracking-wider">Status</span>
                            <span className="text-gold-light font-bold flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse"></span>
                                Em Análise
                            </span>
                        </div>
                    </div>

                    {/* Card 2: Estrutura de Conversão */}
                    <div
                        className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-2xl overflow-hidden group ml-0"
                        style={{ transform: 'translateZ(80px)' }}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-magenta-neon/50"></div>
                        {/* Animating Scanline */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-magenta-neon/5 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite_0.5s]"></div>

                        <div className="flex items-center gap-4 mb-2">
                            <Activity className="w-5 h-5 text-magenta-neon" />
                            <h3 className="text-white font-bold text-lg tracking-wide">Estrutura de Conversão</h3>
                        </div>
                        <div className="flex items-center justify-between pl-9 text-xs">
                            <span className="text-white/40 font-medium uppercase tracking-wider">Status</span>
                            <span className="text-magenta-neon font-bold flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-magenta-neon animate-pulse"></span>
                                Verificando Pontos de Fricção
                            </span>
                        </div>
                    </div>

                    {/* Card 3: Estratégia de Aquisição */}
                    <div
                        className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-2xl overflow-hidden group ml-6"
                        style={{ transform: 'translateZ(40px)' }}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary-neon/50"></div>
                        {/* Animating Scanline */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary-neon/5 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite_1s]"></div>

                        <div className="flex items-center gap-4 mb-2">
                            <Rocket className="w-5 h-5 text-primary-neon" />
                            <h3 className="text-white font-bold text-lg tracking-wide">Estratégia de Aquisição</h3>
                        </div>
                        <div className="flex items-center justify-between pl-9 text-xs">
                            <span className="text-white/40 font-medium uppercase tracking-wider">Status</span>
                            <span className="text-primary-neon font-bold flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-neon animate-pulse"></span>
                                Avaliando Performance
                            </span>
                        </div>
                    </div>

                    {/* Holograma Gráfico Abstrato de Fundo */}
                    <div
                        className="absolute top-1/4 right-0 w-64 h-64 border border-white/5 rounded-full border-dashed opacity-20 pointer-events-none"
                        style={{ transform: 'translateZ(10px) rotateX(60deg)' }}
                    ></div>
                    <div
                        className="absolute top-1/4 right-8 w-48 h-48 border border-magenta-neon/20 rounded-full border-dashed opacity-30 pointer-events-none animate-[spin_10s_linear_infinite]"
                        style={{ transform: 'translateZ(20px) rotateX(60deg)' }}
                    ></div>

                </motion.div>
            </div>
        </section>
    );
};

export default HeroV2;
