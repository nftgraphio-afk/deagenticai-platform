import React from 'react';
import { HeroVisualization } from './HeroVisualization';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <main className="container lg:px-12 lg:pt-0 min-h-[1100px] flex flex-col lg:flex-row z-10 mr-auto ml-auto pt-0 pr-6 pl-6 relative items-center">
      {/* Left Column: Copy */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center pt-12 pb-20 lg:py-0">
        <h4 className="text-xs font-mono tracking-[0.2em] text-white/40 uppercase mb-8 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          System Operational
        </h4>

        <h1 className="lg:text-7xl leading-[1.1] text-primary text-glow text-5xl italic tracking-tight font-serif mb-6">
          The control layer for <br />
          <span className="text-white opacity-90">autonomous AI systems.</span>
        </h1>

        <p className="font-sans text-xl lg:text-2xl font-light text-white/70 leading-relaxed tracking-tight max-w-xl mb-12">
          DeAgenticAI provides the infrastructure for AI agents to operate securely, autonomously, and with absolute precision in Web3.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 gap-x-6 gap-y-6 items-start sm:items-center">
          {/* Animated Shiny CTA Button */}
          <button 
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="shiny-cta focus:outline-none"
          >
            <span>Join Waitlist</span>
          </button>

          {/* Gradient Pill Button with Icon */}
          <button 
            className="hover:bg-white/10 hover:text-white transition-all flex text-sm font-medium text-slate-300 bg-white/5 rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center group relative overflow-hidden"
            style={{ 
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
              '--border-radius-before': '9999px' 
            } as React.CSSProperties}
          >
            <span className="text-sm font-medium tracking-tight">
                View Ecosystem
            </span>
            <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>
      </div>

      {/* Right Column: Abstract UI Visualization with Sonar */}
      <HeroVisualization />
    </main>
  );
}
