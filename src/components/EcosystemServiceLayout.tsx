import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  ShieldCheck,
  Zap, 
  ArrowUpRight, 
  BookOpen, 
  Search, 
  Code, 
  Database,
  FileText, 
  Info,
  Lock
} from 'lucide-react';
import { Link } from 'react-router-dom';

export interface EcosystemServiceProps {
  name: string;
  oneSentenceExplanation: string;
  definition: string;
  whyExists: {
    assumption: string;
    riskVector: string;
    lackCapability: string;
    enforcementPoint: string;
  };
  howItWorks: {
    steps: { trigger: string; evaluation: string; authorization: string; signature: string; audit: string };
    explanation: string;
  };
  architecture: {
    components: string[];
    trustModel: string[];
  };
  securityModel: {
    properties: string[];
    threats?: string[];
  };
  comparison: {
    feature: string;
    traditional: string;
    service: string;
  }[];
  useCases: {
    name: string;
    problem: string;
    howEnables: string;
    outcome: string;
  }[];
  integration: {
    model: string;
    compatibility: string[];
  };
  relatedContent: {
    guides: { title: string; link: string; summary: string }[];
    comparisons: { title: string; link: string }[];
    research?: { title: string; link: string }[];
    glossary: { term: string; link: string }[];
  };
  faq: { q: string; a: string }[];
}

export function EcosystemServiceLayout(props: EcosystemServiceProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": props.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
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
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-medium">Ecosystem Component</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-white mb-8">
              {props.name} <span className="text-white/60 italic">for Agents</span>
            </h1>

            <p className="text-2xl font-light text-white/60 mb-12 leading-tight tracking-tight">
              {props.oneSentenceExplanation}
            </p>

            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl mb-12 text-left w-full">
              <p className="text-lg text-white/80 leading-relaxed font-light">
                {props.definition}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-black rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform">
                View Architecture <Zap className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 border border-white/10 text-white rounded-full font-medium flex items-center gap-2 hover:bg-white/5 transition-colors">
                Request Access <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </section>

        {/* SECTION 1 — Why It Exists */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-12">
            Why {props.name} Is Necessary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Market Assumption", content: props.whyExists.assumption, icon: Shield },
              { label: "Risk Vector", content: props.whyExists.riskVector, icon: Zap },
              { label: "Capability Gap", content: props.whyExists.lackCapability, icon: Info },
              { label: "Enforcement Layer", content: props.whyExists.enforcementPoint, icon: Lock }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/5 flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-primary text-xs font-mono uppercase tracking-widest mb-2">{item.label}</h4>
                  <p className="text-white/80 leading-relaxed font-light">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 — How It Works */}
        <section className="mb-32">
          <div className="p-12 rounded-[3rem] border border-white/10 bg-white/[0.02]">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-16 text-center">
              How It Works
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
              {[
                { step: "Trigger", title: props.howItWorks.steps.trigger },
                { step: "Evaluation", title: props.howItWorks.steps.evaluation },
                { step: "Authorization", title: props.howItWorks.steps.authorization },
                { step: "Signature", title: props.howItWorks.steps.signature },
                { step: "Audit", title: props.howItWorks.steps.audit }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-black border border-primary/40 flex items-center justify-center mb-4 z-10 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                    <span className="text-primary font-mono text-sm">{i + 1}</span>
                  </div>
                  <h4 className="text-white font-medium mb-1">{item.step}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest leading-tight">{item.title}</p>
                </div>
              ))}
            </div>
            <p className="text-white/60 text-center max-w-3xl mx-auto leading-relaxed font-light">
              {props.howItWorks.explanation}
            </p>
          </div>
        </section>

        {/* SECTION 3 — Architecture Model */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-8">
              Architecture Overview
            </h2>
            <div className="space-y-8">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h4 className="text-primary text-xs font-mono uppercase tracking-widest mb-4">Core Components</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {props.architecture.components.map((c, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm font-light">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <h4 className="text-primary text-xs font-mono uppercase tracking-widest mb-4">Trust Model</h4>
                <ul className="grid grid-cols-1 gap-3">
                  {props.architecture.trustModel.map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                      <span className="text-sm font-light">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[400px] border border-white/10 bg-white/[0.03] rounded-3xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20"></div>
            <img src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FadfU4VUPZGhEvvxzwuyWLvQ9kCI3%2FDeAgenticAILogo__9f96ad0f.png?alt=media&token=46c4e719-e89c-4325-bce7-acbdef9dfb2a" alt="DeAgenticAI Logo" className="w-24 h-24 object-contain text-primary/20 animate-pulse" />
          </div>
        </section>

        {/* SECTION 4 — Security Model */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-12 text-center">
            Security Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {props.securityModel.properties.map((p, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.03] text-center">
                <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="text-white text-sm font-light leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — Comparison */}
        <section className="mb-32 overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-16 text-center">
            The Agentic Advantage
          </h2>
          <div className="overflow-x-auto border border-white/10 rounded-3xl bg-white/[0.02]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-8 py-6 text-left text-sm font-mono text-white/40 uppercase tracking-widest">Feature</th>
                  <th className="px-8 py-6 text-left text-sm font-mono text-white/40 uppercase tracking-widest">Traditional Model</th>
                  <th className="px-8 py-6 text-left text-sm font-mono text-primary uppercase tracking-widest bg-primary/5">{props.name}</th>
                </tr>
              </thead>
              <tbody>
                {props.comparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-6 text-white font-medium">{row.feature}</td>
                    <td className="px-8 py-6 text-white/50">{row.traditional}</td>
                    <td className="px-8 py-6 text-primary bg-primary/[0.02]">{row.service}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6 — Use Cases */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-16 text-center">
            Primary Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {props.useCases.map((uc, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] border border-white/10 bg-white/5 hover:border-primary/20 transition-all duration-500">
                <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-primary transition-colors">{uc.name}</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1 block">Problem</span>
                    <p className="text-xs text-white/60 font-light leading-relaxed">{uc.problem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1 block">Solution</span>
                    <p className="text-xs text-primary/80 font-light leading-relaxed">{uc.howEnables}</p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs text-white/80 italic">Outcome: {uc.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — Integration & Deployment */}
        <section className="mb-32 p-12 rounded-[3rem] bg-gradient-to-br from-primary/10 to-transparent border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-8">
                Integration Model
              </h2>
              <p className="text-lg text-white/70 font-light leading-relaxed mb-8">
                {props.integration.model}
              </p>
              <div className="flex flex-wrap gap-3">
                {props.integration.compatibility.map((c, i) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/60">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Developer SDK", icon: Code },
                { label: "REST API", icon: Zap },
                { label: "Cloud Hosted", icon: Database },
                { label: "Enterprise On-Prem", icon: Shield }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-black/40 flex flex-col items-center justify-center text-center group">
                  <item.icon className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors mb-3" />
                  <span className="text-xs font-medium text-white/80">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 — Related Knowledge & Supporting Content */}
        <section className="mb-32">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-8">
            Related Guides & Research
          </h2>
          <p className="text-white/60 mb-12 font-light">
            The following resources provide deeper technical and conceptual background related to {props.name}.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-primary flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Technical Guides
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {props.relatedContent.guides.map((g, i) => (
                  <Link key={i} to={g.link} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] group transition-all">
                    <h5 className="text-white font-medium mb-2 group-hover:text-primary transition-colors">{g.title}</h5>
                    <p className="text-xs text-white/40 font-light">{g.summary}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-primary flex items-center gap-2">
                <Search className="w-4 h-4" /> Comparisons
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {props.relatedContent.comparisons.map((c, i) => (
                  <Link key={i} to={c.link} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-primary/20 transition-all text-xs text-white/70">
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-primary flex items-center gap-2">
                <FileText className="w-4 h-4" /> Glossary
              </h4>
              <div className="flex flex-wrap gap-2">
                {props.relatedContent.glossary.map((term, i) => (
                  <Link key={i} to={term.link} className="px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-[10px] text-white/40 hover:text-primary transition-colors">
                    {term.term}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — FAQ */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {props.faq.map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">{faq.q}</h3>
                <p className="text-white/50 leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10 — Ecosystem Context Block */}
        <section className="p-12 rounded-[3rem] border border-primary/20 bg-primary/[0.02] text-center">
          <h2 className="text-2xl font-serif font-medium text-white mb-6">
            Part of the DeAgenticAI Ecosystem
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            {props.name} integrates natively with the broader control plane infrastructure, working in sync with our Policy Engine, Delegation layer, and Audit framework.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { name: "MPC Wallet", link: "/ecosystem/mpc-wallet" },
              { name: "Policy Engine", link: "/ecosystem/policy-engine" },
              { name: "Delegation", link: "/ecosystem/delegation" },
              { name: "Integrations", link: "/ecosystem/integrations" },
              { name: "Compliance", link: "/ecosystem/compliance" }
            ].filter(comp => comp.name !== props.name).map((comp, i) => (
              <Link 
                key={i} 
                to={comp.link}
                className="px-6 py-2 rounded-full border border-white/10 bg-black text-xs text-white/40 hover:text-primary hover:border-primary/40 transition-all"
              >
                {comp.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
