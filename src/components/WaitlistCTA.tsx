import React, { useState } from 'react';
import { blink } from '@/lib/blink';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export function WaitlistCTA() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      await blink.db.waitlist.create({
        email,
        createdAt: new Date().toISOString(),
      });
      toast.success('You have been added to the waitlist!');
      setEmail('');
    } catch (error: any) {
      if (error.message?.includes('UNIQUE constraint failed')) {
        toast.error('This email is already on our waitlist.');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              Join the Future of <span className="text-primary">Agentic Infrastructure</span>
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Our beta is currently invite-only. Join our waiting list to be the first to know when we launch and get early access to our financial tools.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-8 py-4 rounded-full bg-primary text-black font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
            <p className="mt-4 text-xs text-white/30">
              By joining, you agree to receive updates about our platform. No spam, ever.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
