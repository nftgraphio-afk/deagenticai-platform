import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ShieldCheck, Cpu, Database, FileSearch, Lock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ControlPlaneAnimation } from '../components/ecosystem/ControlPlaneAnimation';

export function Ecosystem() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the DeAgenticAI Ecosystem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The DeAgenticAI Ecosystem is a decentralized control plane infrastructure designed for autonomous AI agents in Web3. It provides a modular framework combining distributed MPC custody, cryptographic policy enforcement, and MCP-native delegation to ensure secure, verifiable, and programmable agent operations."
        }
      },
      {
        "@type": "Question",
        "name": "How does MPC improve AI wallet security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Multi-Party Computation (MPC) enhances security by sharding private keys across multiple nodes. This ensures that no single entity or point of failure can access the full key, protecting autonomous agents from unauthorized signature attempts and external breaches."
        }
      },
      {
        "@type": "Question",
        "name": "What is a policy-controlled wallet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A policy-controlled wallet is a digital asset container where spending, delegation, and execution authority are governed by immutable cryptographic rules. These policies are enforced at the signing layer, preventing AI agents from exceeding their pre-defined operational boundaries."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI agents hold private keys safely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional private key management is insecure for autonomous agents. DeAgenticAI solves this by using distributed MPC shards, where the agent never 'holds' a complete key. Instead, the infrastructure validates the agent's intent against cryptographic policies before generating a threshold signature."
        }
      },
      {
        "@type": "Question",
        "name": "How does delegation work for autonomous agents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delegation allows human users or master protocols to grant specific, time-bound, and scoped authority to an AI agent. Using session-based authority and MCP-native protocols, agents can execute transactions on behalf of the delegator within strictly enforced cryptographic limits."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-foreground pt-32 pb-24 selection:bg-primary selection:text-black">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* HERO SECTION */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-medium">Platform Thesis</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-white mb-8">
              The DeAgenticAI <span className="text-white/60 italic">Ecosystem</span>
            </h1>

            <p className="text-2xl md:text-3xl font-light text-white/60 mb-12 leading-tight tracking-tight">
              Infrastructure for Autonomous Agents Operating in Web3
            </p>

            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl mb-12 text-left">
              <p className="text-lg text-white/80 leading-relaxed font-light">
                The DeAgenticAI Ecosystem is a decentralized control plane infrastructure designed specifically for autonomous AI agents in Web3. It provides a modular framework that combines distributed MPC custody, cryptographic policy enforcement, and MCP-native delegation to ensure secure, verifiable, and programmable agent operations across blockchain networks.
              </p>
            </div>

            <button 
              onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-black rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Explore the Architecture <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </section>

        {/* PROBLEM FRAMING SECTION */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-12 text-center">
            Why Agentic AI Needs New Infrastructure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-white/80 leading-relaxed">
                  <span className="font-semibold block mb-1">Execution Shift</span>
                  AI agents are moving from advisory roles to full-scale on-chain execution, requiring real-time settlement capabilities.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-white/80 leading-relaxed">
                  <span className="font-semibold block mb-1">Human-Centric Failure</span>
                  Existing wallets were built for human interaction patterns (mnemonic-based), failing the high-frequency needs of agents.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-white/80 leading-relaxed">
                  <span className="font-semibold block mb-1">Enforcement Gap</span>
                  Traditional API guardrails are advisory only; autonomous systems require immutable cryptographic enforcement at the signing layer.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-white/80 leading-relaxed">
                  <span className="font-semibold block mb-1">Programmable Policy</span>
                  Agents require distributed custody + session-based delegation to operate independently without compromising master account security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTROL PLANE ARCHITECTURE SECTION */}
        <section id="architecture" className="mb-32">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-16 text-center">
            The Agentic Control Plane Architecture
          </h2>
          
          <ControlPlaneAnimation />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-16">
            {[
              { step: "01", title: "Intent Generation", desc: "Autonomous agent generates a transaction intent based on its internal objective function." },
              { step: "02", title: "Policy Evaluation", desc: "Intent is evaluated against the Policy Engine's cryptographic rules and session constraints." },
              { step: "03", title: "Shard Validation", desc: "MPC nodes validate that the request complies with distributed authorization protocols." },
              { step: "04", title: "Threshold Signing", desc: "Cryptographic shards produce a valid on-chain signature without exposing the full key." },
              { step: "05", title: "Immutable Audit", desc: "The transaction, signature, and policy validation are logged to a verifiable audit trail." },
              { step: "06", title: "On-Chain Execution", desc: "Signed transaction is broadcast to the network for immediate finality and execution." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-4xl font-serif italic text-white/5 group-hover:text-primary/10 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed relative z-10 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ECOSYSTEM COMPONENT GRID */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-16 text-center">
            Core Infrastructure Layers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "MPC Wallet Infrastructure",
                desc: "Enterprise-grade key management using distributed Multi-Party Computation shards to eliminate single points of failure for autonomous agent wallets.",
                link: "/ecosystem/mpc-wallet"
              },
              {
                icon: ShieldCheck,
                title: "Policy Engine",
                desc: "A programmable layer that enforces immutable cryptographic constraints on agent spending, contract interactions, and delegation windows.",
                link: "/ecosystem/policy-engine"
              },
              {
                icon: Zap,
                title: "Delegation & Session Authority",
                desc: "Enable secure, time-bound authority transfer from human master accounts to AI agents via cryptographic session signing.",
                link: "/ecosystem/delegation"
              },
              {
                icon: Cpu,
                title: "MCP & Integration Layer",
                desc: "Native support for Model Context Protocol to seamlessly connect DeAgenticAI with LLMs like Claude, GPT-4, and custom frameworks.",
                link: "/ecosystem/integrations"
              },
              {
                icon: FileSearch,
                title: "Compliance & Audit Framework",
                desc: "A complete, verifiable audit trail that logs every signature and policy check for institutional-grade compliance and transparency.",
                link: "/ecosystem/compliance"
              }
            ].map((card, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all duration-500 group flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-white/50 mb-10 leading-relaxed font-light flex-1">{card.desc}</p>
                <Link 
                  to={card.link}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* UNIFIED SYSTEM OPERATION */}
        <section className="mb-32">
          <div className="p-12 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-12">
              Systemic Unity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                  The DeAgenticAI ecosystem operates as a unified system where no single layer functions in isolation. Each component is architected to support a higher-order objective of autonomous agent safety.
                </p>
                <div className="space-y-4">
                  {[
                    "Policy precedes signing, ensuring zero unauthorized intent.",
                    "Signing requires distributed validation from multiple node shards.",
                    "Delegation scopes authority specifically for time and objective.",
                    "Audit preserves verifiability for every state transition."
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
                <div className="relative z-10 border border-white/10 rounded-2xl p-8 bg-black/40 h-full flex flex-col justify-center">
                  <div className="flex flex-col gap-4">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary/40 w-3/4 animate-pulse"></div>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary/40 w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary/40 w-5/6 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="mb-32 overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-16 text-center">
            Comparison Matrix
          </h2>
          <div className="overflow-x-auto border border-white/10 rounded-3xl bg-white/[0.02]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-8 py-6 text-left text-sm font-mono text-white/40 uppercase tracking-widest">Feature</th>
                  <th className="px-8 py-6 text-left text-sm font-mono text-white/40 uppercase tracking-widest">Traditional Wallet</th>
                  <th className="px-8 py-6 text-left text-sm font-mono text-primary uppercase tracking-widest bg-primary/5">DeAgenticAI Ecosystem</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Key Storage Model", traditional: "Single Seed Phrase / Mnemonic", ecosystem: "Distributed MPC Shards (Keysless)" },
                  { feature: "Policy Enforcement", traditional: "None / Advisory Only", ecosystem: "Immutable Cryptographic Layers" },
                  { feature: "Delegation Granularity", traditional: "Binary (All-or-Nothing)", ecosystem: "Scoped Session Authority" },
                  { feature: "Auditability", traditional: "Off-chain / Fragmented", ecosystem: "On-chain / Cryptographic Proofs" },
                  { feature: "AI-Native Design", traditional: "No (Human GUI Focus)", ecosystem: "Yes (Programmatic API/MCP Focus)" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6 text-white font-medium">{row.feature}</td>
                    <td className="px-8 py-6 text-white/50">{row.traditional}</td>
                    <td className="px-8 py-6 text-primary bg-primary/[0.02]">{row.ecosystem}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: "What is the DeAgenticAI Ecosystem?", a: "The DeAgenticAI Ecosystem is a decentralized control plane infrastructure designed for autonomous AI agents in Web3. It provides a modular framework combining distributed MPC custody, cryptographic policy enforcement, and MCP-native delegation to ensure secure, verifiable, and programmable agent operations." },
              { q: "How does MPC improve AI wallet security?", a: "Multi-Party Computation (MPC) enhances security by sharding private keys across multiple nodes. This ensures that no single entity or point of failure can access the full key, protecting autonomous agents from unauthorized signature attempts and external breaches." },
              { q: "What is a policy-controlled wallet?", a: "A policy-controlled wallet is a digital asset container where spending, delegation, and execution authority are governed by immutable cryptographic rules. These policies are enforced at the signing layer, preventing AI agents from exceeding their pre-defined operational boundaries." },
              { q: "Can AI agents hold private keys safely?", a: "Traditional private key management is insecure for autonomous agents. DeAgenticAI solves this by using distributed MPC shards, where the agent never 'holds' a complete key. Instead, the infrastructure validates the agent's intent against cryptographic policies before generating a threshold signature." },
              { q: "How does delegation work for autonomous agents?", a: "Delegation allows human users or master protocols to grant specific, time-bound, and scoped authority to an AI agent. Using session-based authority and MCP-native protocols, agents can execute transactions on behalf of the delegator within strictly enforced cryptographic limits." },
              { q: "Is the ecosystem compatible with multiple blockchains?", a: "Yes, the DeAgenticAI architecture is designed to be chain-agnostic. The MPC signing layer and Policy Engine can produce valid signatures for EVM-compatible networks, Solana, and other major Layer 1 and Layer 2 ecosystems." }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">{faq.q}</h3>
                <p className="text-white/50 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
