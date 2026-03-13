import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu, MessageSquare, Send, CheckCircle2, ArrowRight, Building2, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { scrollToWaitlist } from '@/lib/scrollToWaitlist';
import { blink } from '@/lib/blink';

export function About() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // In a real app, you might have a 'contacts' table
      // For now, we'll use the waitlist logic or just simulate a success for UI purposes
      // since the specific table might not exist yet.
      await blink.db.waitlist.create({
        email: formData.email,
        metadata: JSON.stringify({
          name: formData.name,
          company: formData.company,
          message: formData.message,
          type: 'contact_form'
        }),
        createdAt: new Date().toISOString()
      });
      
      toast.success('Message sent successfully! Our team will contact you shortly.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 selection:bg-primary selection:text-black">
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
              <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-medium">About DeAgenticAI</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-white mb-8">
              Pioneering the <span className="text-white/60 italic">Control Layer</span> for AI
            </h1>

            <p className="text-xl md:text-2xl font-light text-white/60 mb-12 leading-relaxed tracking-tight max-w-3xl">
              We are building the cryptographic infrastructure that enables autonomous AI agents to operate securely and transparently in the decentralized economy.
            </p>
          </motion.div>
        </section>

        {/* VISION & MISSION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl font-serif font-medium text-white mb-6">Our Mission</h3>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              To provide AI agents with the world's most secure and programmable delegation layer, ensuring that autonomy never comes at the cost of safety or ownership. We bridge the gap between model reasoning and immutable chain execution.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all duration-500 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-3xl font-serif font-medium text-white mb-6">Our Vision</h3>
            <p className="text-white/50 text-lg leading-relaxed font-light">
              A future where billions of autonomous agents manage complex financial, social, and technical operations on behalf of humans, governed by transparent, cryptographic policies that prevent unauthorized intent and ensure systemic stability.
            </p>
          </motion.div>
        </section>

        {/* EFFORTS & DESCRIPTION */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-8">
                Building the <span className="text-white/60">Autonomous Infrastructure</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed font-light mb-8">
                DeAgenticAI is focused on solving the three critical bottlenecks of agentic autonomy: **Custody**, **Policy**, and **Delegation**.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Distributed MPC Custody", icon: Lock, desc: "Eliminating single points of failure by sharding agent keys across distributed nodes." },
                  { title: "Programmatic Policy Enforcement", icon: Cpu, desc: "Building a DSL for defining immutable boundaries for agent transaction intents." },
                  { title: "Institutional Compliance", icon: Building2, desc: "Aligning autonomous operations with corporate governance and audit requirements." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-1">{item.title}</h4>
                      <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 w-full aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 w-full p-1 border border-white/10 rounded-[3rem] bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 p-8 h-full">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                    <Globe className="w-6 h-6 text-primary/60" />
                    <span className="text-xs font-mono text-white/40 tracking-widest uppercase">Global Nodes</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30 flex flex-col justify-between">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-xs font-mono text-white/80 tracking-widest uppercase">Validated</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                    <Cpu className="w-6 h-6 text-primary/60" />
                    <span className="text-xs font-mono text-white/40 tracking-widest uppercase">Agent Engine</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                    <Shield className="w-6 h-6 text-primary/60" />
                    <span className="text-xs font-mono text-white/40 tracking-widest uppercase">Policy Layer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="max-w-4xl mx-auto mb-32">
          <div className="p-12 md:p-16 rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl pointer-events-none" />
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-serif font-medium text-white mb-4">Get in Touch</h2>
              <p className="text-white/50 font-light">
                Have questions about our infrastructure or looking to integrate? <br />
                Our architecture team is ready to discuss your use case.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-4">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-4">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-4">Company / Project</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="DeAgentic AI Systems"
                  className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest pl-4">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your architectural needs..."
                  className="w-full px-6 py-5 rounded-[2rem] bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-primary text-black py-8 text-lg font-bold hover:bg-white transition-all shadow-xl shadow-primary/10 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                    />
                    Transmitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Transmission
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </section>

        {/* STRATEGIC CTA */}
        <section className="border-t border-white/5 pt-32 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-12">Ready to secure your agents?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              onClick={() => scrollToWaitlist(navigate)}
              className="rounded-full bg-white text-black px-10 py-7 text-lg font-semibold hover:bg-primary transition-all"
            >
              Join Early Access
            </Button>
            <Button 
              variant="outline"
              className="rounded-full border-white/10 bg-white/5 px-10 py-7 text-lg font-semibold hover:bg-white/10"
            >
              Read the Documentation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}
