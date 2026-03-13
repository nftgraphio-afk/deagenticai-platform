import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Data Collection",
      content: "We collect information necessary to provide our infrastructure services, including wallet addresses, transaction metadata, and agent configuration parameters. We do not collect private keys or personal identification unless voluntarily provided via contact forms."
    },
    {
      title: "2. Use of Information",
      content: "The data collected is used to optimize protocol performance, enforce cryptographic policies, and maintain the security of the DeAgenticAI ecosystem. We may also use your email to provide critical system updates if you have joined our waitlist."
    },
    {
      title: "3. Cryptographic Privacy",
      content: "DeAgenticAI utilizes MPC (Multi-Party Computation) to ensure that your sensitive cryptographic material is never stored in a central location. Key shards are distributed, ensuring that no single entity—including DeAgenticAI—can reconstruct your full private key."
    },
    {
      title: "4. Third-Party Sharing",
      content: "We do not sell your data to third parties. We may share anonymized, aggregated transaction data with research partners or ecosystem developers to improve the autonomous agent landscape."
    },
    {
      title: "5. Security Measures",
      content: "We implement industry-standard security protocols, including end-to-end encryption and regular architectural audits, to protect our infrastructure from unauthorized access."
    },
    {
      title: "6. Your Rights",
      content: "You have the right to request the deletion of your contact information and any off-chain metadata associated with your project. On-chain transaction records, however, are immutable and cannot be deleted."
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
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-white mb-6">
            Privacy <span className="text-white/60 italic">Policy</span>
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
            Concerned about your cryptographic privacy? Read our technical documentation on MPC.
          </p>
          <Link to="/ecosystem/mpc-wallet">
            <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-primary transition-colors">
              Explore Tech Stack
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
