import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, Network, CheckCircle2, AlertTriangle, Cpu, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SegmentLandingTemplateProps {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problem: {
    title: string;
    blocks: { title: string; desc: string }[];
  };
  capabilities: {
    title: string;
    blocks: { title: string; desc: string }[];
  };
  scenarios: {
    title: string;
    items: { title: string; desc: string }[];
  };
  strategicCTA: {
    title: string;
    buttonText: string;
  };
}

export function SegmentLandingTemplate(props: SegmentLandingTemplateProps) {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      {/* 1. Hero Section */}
      <section className="container px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight mb-8"
        >
          {props.hero.headline}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mb-12"
        >
          {props.hero.subheadline}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-white text-black px-8 py-6 text-sm font-semibold hover:bg-primary transition-colors"
          >
            {props.hero.ctaPrimary}
          </Button>
          <Button 
            variant="outline"
            className="rounded-full border-white/10 bg-white/5 px-8 py-6 text-sm font-semibold hover:bg-white/10"
          >
            {props.hero.ctaSecondary}
          </Button>
        </motion.div>
      </section>

      {/* 2. The Problem Section */}
      <section className="container px-6 lg:px-12 py-32 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6">{props.problem.title}</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.problem.blocks.map((block, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-red-500/20 transition-colors"
            >
              <AlertTriangle className="w-6 h-6 text-red-500/60 mb-6" />
              <h3 className="text-lg font-semibold mb-3 text-white">{block.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-light">{block.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Architectural Fit (Universal for all segments) */}
      <section className="container px-6 lg:px-12 py-32 border-t border-white/5">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">Architectural Fit</h2>
            <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
              Our infrastructure plugs directly into your AI agent stack, providing a deterministic control plane between model reasoning and chain execution.
            </p>
            <div className="space-y-6">
              {[
                { title: "Agent Layer", icon: Cpu, desc: "Connect any model or framework (LangChain, AutoGPT, custom)." },
                { title: "Policy Layer", icon: Shield, desc: "Define granular rules for transaction size, frequency, and intent." },
                { title: "MPC Execution Layer", icon: Layers, desc: "Distributed key shares ensure no single point of failure." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-white/50 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full aspect-square relative flex items-center justify-center">
             <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
             <div className="relative z-10 w-full max-w-md p-10 rounded-[40px] border border-white/10 bg-[#050505] shadow-2xl">
                <div className="flex flex-col gap-6">
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Model Layer</span>
                    <div className="mt-2 text-white font-medium">Reasoning & Intent</div>
                  </div>
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                  </div>
                  <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 text-center ring-1 ring-primary/20">
                    <span className="text-xs font-mono text-primary uppercase tracking-widest">DeAgenticAI Policy Layer</span>
                    <div className="mt-2 text-white font-medium">Control & Safety Enforcement</div>
                  </div>
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                  </div>
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">MPC Execution Layer</span>
                    <div className="mt-2 text-white font-medium">Final Distributed Settlement</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities */}
      <section className="container px-6 lg:px-12 py-32 border-t border-white/5 bg-white/[0.01]">
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-center mb-20">{props.capabilities.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {props.capabilities.blocks.map((block, i) => (
            <div key={i} className="p-10 rounded-3xl border border-white/10 bg-black hover:border-primary/30 transition-all duration-300">
              <CheckCircle2 className="w-8 h-8 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-white">{block.title}</h3>
              <p className="text-white/60 leading-relaxed font-light">{block.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Use Case Scenarios */}
      <section className="container px-6 lg:px-12 py-32 border-t border-white/5">
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-20">{props.scenarios.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.scenarios.items.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed font-light mb-8">{item.desc}</p>
              <div className="mt-auto pt-6 border-t border-white/5">
                 <span className="text-[10px] font-mono text-primary uppercase tracking-widest">Active Implementation</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Why Not Existing Solutions? (Universal) */}
      <section className="container px-6 lg:px-12 py-32 border-t border-white/5 bg-white/[0.01]">
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-center mb-20">The Infrastructure Gap</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: "Multisig ≠ Agent Control", desc: "Multisigs require human latency. Agents need deterministic, autonomous enforcement based on programmatic policies." },
            { title: "Smart Contracts ≠ Policy Governance", desc: "Policies must be dynamic and off-chain aware, not just rigid on-chain logic that's expensive to upgrade." },
            { title: "Traditional MPC ≠ AI-Aware Enforcement", desc: "Generic MPC doesn't understand agent reasoning. We build AI-specific session and policy management into the key share logic." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
               <div className="w-12 h-12 rounded-full border border-red-500/20 flex items-center justify-center mb-6">
                 <div className="w-6 h-0.5 bg-red-500/40"></div>
               </div>
               <h4 className="text-xl font-medium mb-4">{item.title}</h4>
               <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Integration Model (Universal) */}
      <section className="container px-6 lg:px-12 py-32 border-t border-white/5">
        <div className="p-12 md:p-20 rounded-[48px] border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8">Seamless Integration</h2>
            <p className="text-xl text-white/60 mb-12 font-light">
              Architected for developer experience and institutional security.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { label: "SDK", value: "Native TypeScript & Python SDKs" },
                { label: "API", value: "RESTful endpoints for policy management" },
                { label: "MPC Backend", value: "Distributed signer infrastructure" },
                { label: "Deployment", value: "Cloud-hosted or On-prem options" }
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2">{item.label}</div>
                  <div className="text-lg text-white/80">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Strategic CTA */}
      <section className="container px-6 lg:px-12 py-40 border-t border-white/5">
         <div className="flex flex-col items-center text-center">
            <h2 className="text-5xl md:text-7xl font-serif font-medium mb-12">{props.strategicCTA.title}</h2>
            <Button 
              onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-full bg-primary text-black px-12 py-8 text-lg font-bold hover:bg-white transition-all shadow-2xl shadow-primary/20"
            >
              {props.strategicCTA.buttonText}
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Link to="/" className="mt-8 text-white/40 hover:text-white transition-colors text-sm">Return to Command Center</Link>
         </div>
      </section>
    </div>
  );
}
