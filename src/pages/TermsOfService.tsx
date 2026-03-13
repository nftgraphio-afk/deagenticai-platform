import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, Lock, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using the DeAgenticAI platform, infrastructure, or services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must immediately cease all use of our services."
    },
    {
      title: "2. Description of Service",
      content: "DeAgenticAI provides a decentralized control plane infrastructure for autonomous AI agents, including MPC-based custody, policy enforcement, and delegation protocols. Our services are provided 'as-is' and may evolve over time."
    },
    {
      title: "3. User Responsibilities",
      content: "You are responsible for maintaining the security of your accounts and any delegated authority granted to AI agents. DeAgenticAI is not responsible for losses resulting from compromised private keys, unauthorized agent configurations, or protocol-level exploits outside our direct control."
    },
    {
      title: "4. Autonomous Agent Operations",
      content: "When you delegate authority to an AI agent via our platform, you acknowledge that the agent will execute transactions based on its internal logic and the policies you define. You accept full responsibility for all transactions executed by agents under your delegation."
    },
    {
      title: "5. Intellectual Property",
      content: "All rights, title, and interest in and to the DeAgenticAI platform, including its software, logos, and trademarks, are and will remain the exclusive property of DeAgenticAI and its licensors."
    },
    {
      title: "6. Limitation of Liability",
      content: "To the maximum extent permitted by law, DeAgenticAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 selection:bg-primary selection:text-black">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Scale className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-white mb-6">
            Terms of <span className="text-white/60 italic">Service</span>
          </h1>
          <p className="text-white/40 font-mono text-xs uppercase tracking-widest">
            Last Updated: March 03, 2026
          </p>
        </motion.div>

        <div className="space-y-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-white/5 to-transparent hidden md:block" />
          
          {sections.map((section, i) => (
            <motion.section 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative md:pl-12"
            >
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary hidden md:block shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
              <h2 className="text-2xl font-serif font-medium text-white mb-4">{section.title}</h2>
              <p className="text-white/60 leading-relaxed font-light">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-8 rounded-3xl border border-white/10 bg-white/5 text-center"
        >
          <p className="text-white/50 mb-6 font-light">
            Questions regarding our terms? Contact our legal and architecture team.
          </p>
          <Link to="/about#contact">
            <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-primary transition-colors">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
