import React, { useRef } from 'react';
import { Shield, ShieldCheck, Cpu, Database, FileSearch, Rocket, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Architecture() {
  const cards = [
    {
      title: "Distributed MPC Custody",
      description: "Threshold signing with cryptographic key shards distributed across nodes. No single point of failure.",
      icon: Lock,
      delay: 0.1
    },
    {
      title: "Policy Enforcement",
      description: "Cryptographic policies are enforced at the signing layer. Immutable rules for agent spending and delegation.",
      icon: ShieldCheck,
      delay: 0.2
    },
    {
      title: "MCP-Native Delegation",
      description: "Built for Model Context Protocol. Seamless integration with Claude, GPT, and custom agentic frameworks.",
      icon: Cpu,
      delay: 0.3
    },
    {
      title: "Self-Hostable Infrastructure",
      description: "Deploy on your own infrastructure. Full control over key material and signing nodes.",
      icon: Database,
      delay: 0.4
    },
    {
      title: "Enterprise Auditability",
      description: "Complete audit trails. Every signature, every policy check, every delegation logged cryptographically.",
      icon: FileSearch,
      delay: 0.5
    },
    {
      title: "Production-Ready",
      description: "Battle-tested at scale. SOC 2 Type II compliant. Infrastructure-grade reliability.",
      icon: Rocket,
      delay: 0.6
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-medium">Architecture</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white mb-8"
          >
            Built for <span className="text-white/60 italic">Autonomous</span> <br />
            Intelligence.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 leading-relaxed max-w-2xl font-light tracking-tight"
          >
            DeAgenticAI combines distributed MPC custody with cryptographic policy enforcement at the signing layer. 
            Built specifically for autonomous AI agents in Web3.
          </motion.p>
        </div>

        {/* Central Platform Animation */}
        <div className="relative mb-32 h-[400px] flex items-center justify-center">
          <PlatformCore />
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <ArchitectureCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformCore() {
  return (
    <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
      {/* Central Hub */}
      <div className="relative z-20 w-32 h-32 rounded-[2rem] border border-primary/40 bg-black shadow-[0_0_50px_rgba(56,189,248,0.2)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent"></div>
        <img src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FadfU4VUPZGhEvvxzwuyWLvQ9kCI3%2FDeAgenticAILogo__9f96ad0f.png?alt=media&token=46c4e719-e89c-4325-bce7-acbdef9dfb2a" alt="DeAgenticAI Logo" className="w-16 h-16 object-contain relative z-20 animate-pulse" />
        
        {/* Animated Inner Rings */}
        <div className="absolute inset-0 border-2 border-primary/10 rounded-[1.8rem] animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-2 border border-primary/5 rounded-[1.5rem] animate-[spin_15s_linear_infinite_reverse]"></div>
      </div>

      {/* Orbiting Elements & Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 800 400">
        <defs>
          <linearGradient id="core-beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Connection Paths */}
        {[
          "M400,200 L150,100", // Top Left
          "M400,200 L650,100", // Top Right
          "M400,200 L150,300", // Bottom Left
          "M400,200 L650,300", // Bottom Right
          "M400,200 L150,200", // Mid Left
          "M400,200 L650,200", // Mid Right
        ].map((path, i) => (
          <React.Fragment key={i}>
            <path d={path} stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
            <motion.path 
              d={path} 
              stroke="url(#core-beam)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="50 400"
              animate={{
                strokeDashoffset: [450, -450]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }}
            />
          </React.Fragment>
        ))}
      </svg>

      {/* Floating Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <Node position="top-[15%] left-[10%]" icon={Lock} label="MPC" />
        <Node position="top-[15%] right-[10%]" icon={ShieldCheck} label="Policy" />
        <Node position="top-[45%] left-[5%]" icon={Cpu} label="MCP" />
        <Node position="top-[45%] right-[5%]" icon={Zap} label="Realtime" />
        <Node position="bottom-[15%] left-[10%]" icon={Database} label="Storage" />
        <Node position="bottom-[15%] right-[10%]" icon={FileSearch} label="Audit" />
      </div>

      {/* Pulsing Sonar Rings */}
      <div className="absolute w-[300px] h-[300px] border border-primary/5 rounded-full animate-[ping_4s_linear_infinite] opacity-20"></div>
      <div className="absolute w-[500px] h-[500px] border border-primary/5 rounded-full animate-[ping_6s_linear_infinite] opacity-10"></div>
    </div>
  );
}

function Node({ position, icon: Icon, label }: { position: string, icon: any, label: string }) {
  return (
    <div className={`absolute ${position} flex flex-col items-center gap-2 group`}>
      <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.1)]">
        <Icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
      </div>
      <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest group-hover:text-primary/60 transition-colors">
        {label}
      </span>
    </div>
  );
}

function ArchitectureCard({ title, description, icon: Icon, delay }: { title: string, description: string, icon: any, delay: number }) {
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
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative flex flex-col p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500"
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)' }}
      ></div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-500">
          {title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </motion.div>
  );
}
