import React, { useRef } from 'react';
import { Network, Rocket, Building2, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card group relative flex flex-col p-8 md:p-10 rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 ${className}`}
    >
      {/* Spotlight Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)' }}
      ></div>
      {/* Spotlight Border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[32px] border border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
            maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
            WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)'
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {children}
    </div>
  );
}

export function UseCases() {
  return (
    <section id="use-cases" className="flex flex-col overflow-hidden lg:px-12 z-10 bg-black/80 w-full border-white/5 border-t pt-32 pr-6 pb-40 pl-6 relative backdrop-blur-3xl items-center">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-4xl mb-24 relative z-10">
        <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-medium">Who We're Building For</span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white mb-8">
          The control layer for <br />
          <span className="text-white/60">autonomous AI systems</span>
        </h2>

        <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-light tracking-tight">
          DeAgenticAI provides the infrastructure for AI agents to operate securely and autonomously in Web3.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-10 w-full max-w-7xl relative">
        <AIInfrastructureCard />
        <Web3StartupsCard />
        <CryptoEnterprisesCard />
      </div>
    </section>
  );
}

function AIInfrastructureCard() {
  const points = [
    "Policy-enforced agent wallets",
    "Deterministic permission layers",
    "Secure delegation & session control",
    "Auditable agent transaction logic"
  ];

  return (
    <SpotlightCard>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
          <Network className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">For AI Infrastructure Teams</h3>
      </div>
      
      <div className="space-y-4 mb-10">
        {points.map((point, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-primary/60 mt-0.5 shrink-0" />
            <span className="text-sm text-white/60 font-light leading-relaxed">{point}</span>
          </motion.div>
        ))}
      </div>

      <Link 
        to="/for-ai-infrastructure-teams"
        className="mt-auto group/btn flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
      >
        <span className="text-xs font-medium text-white/80 group-hover/btn:text-white transition-colors">Explore Solution</span>
        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/btn:text-primary transition-all group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </Link>
    </SpotlightCard>
  );
}

function Web3StartupsCard() {
  const points = [
    "Plug-and-play AI wallet layer",
    "MPC-based custody models",
    "Faster go-to-market for AI agents",
    "Built-in compliance primitives"
  ];

  return (
    <SpotlightCard>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
          <Rocket className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">For Web3 Startups</h3>
      </div>
      
      <div className="space-y-4 mb-10">
        {points.map((point, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-primary/60 mt-0.5 shrink-0" />
            <span className="text-sm text-white/60 font-light leading-relaxed">{point}</span>
          </motion.div>
        ))}
      </div>

      <Link 
        to="/for-web3-startups"
        className="mt-auto group/btn flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
      >
        <span className="text-xs font-medium text-white/80 group-hover/btn:text-white transition-colors">Explore Solution</span>
        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/btn:text-primary transition-all group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </Link>
    </SpotlightCard>
  );
}

function CryptoEnterprisesCard() {
  const points = [
    "Institutional-grade MPC architecture",
    "AI governance & control enforcement",
    "Enterprise compliance alignment",
    "Risk-aware agent execution"
  ];

  return (
    <SpotlightCard>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">For Crypto Enterprises</h3>
      </div>
      
      <div className="space-y-4 mb-10">
        {points.map((point, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-primary/60 mt-0.5 shrink-0" />
            <span className="text-sm text-white/60 font-light leading-relaxed">{point}</span>
          </motion.div>
        ))}
      </div>

      <Link 
        to="/for-crypto-enterprises"
        className="mt-auto group/btn flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
      >
        <span className="text-xs font-medium text-white/80 group-hover/btn:text-white transition-colors">Explore Solution</span>
        <ArrowUpRight className="w-4 h-4 text-white/40 group-hover/btn:text-primary transition-all group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      </Link>
    </SpotlightCard>
  );
}
