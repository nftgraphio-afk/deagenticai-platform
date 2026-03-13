import React, { useRef } from 'react';
import { Sparkles, Zap, Gem, CreditCard, Network } from 'lucide-react';

export function Features() {
  return (
    <section className="flex flex-col overflow-hidden lg:px-12 z-10 bg-black/50 w-full border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative backdrop-blur-3xl items-center">
      {/* Clean Background Line */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mb-24 relative z-10">
        {/* Hero-Inspired Vertical Beam Animation */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-48 w-6 overflow-hidden flex justify-center">
          <svg className="h-full w-full" viewBox="0 0 6 192" fill="none">
            <path d="M3 0V192" stroke="url(#header-beam)" strokeWidth="1.5" strokeLinecap="round" className="beam-line animate-beam opacity-70"></path>
            <defs>
              <linearGradient id="header-beam" x1="3" y1="0" x2="3" y2="192" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0" />
                <stop offset="0.5" stopColor="#38BDF8" />
                <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-medium">System Capabilities</span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white mb-8">
          Banking intelligence <br />
          <span className="text-white/60">made effortless.</span>
        </h2>

        <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-light tracking-tight">
          Streamline your capital deployment with AI-driven protocols designed to simplify, automate, and enhance your
          wealth architecture.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-10 w-full max-w-7xl relative gap-x-6 gap-y-6">
        <AutomatedExecutionCard />
        <SmartLiquidityCard />
        <EnterpriseIntegrationCard />
      </div>
    </section>
  );
}

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
      className={`spotlight-card group relative flex flex-col p-10 rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 ${className}`}
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

function AutomatedExecutionCard() {
  return (
    <SpotlightCard>
      <h3 className="text-2xl font-semibold tracking-tight text-white mb-4 relative z-10">Automated Execution</h3>
      <p className="text-base text-white/50 leading-relaxed mb-12 relative z-10 font-light">
        Generate high-yield strategies and execute trades in milliseconds with our custodial AI algorithms.
      </p>

      {/* Visual: Chat/Terminal UI */}
      <div className="relative z-10 mt-auto w-full h-72 rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
          <span className="text-xs text-white/30 font-mono">AURA_OS v2.1</span>
        </div>
        {/* Body */}
        <div className="p-6 flex flex-col gap-5 relative h-full">
          {/* User Message */}
          <div className="self-end max-w-[90%] bg-white/10 backdrop-blur-sm rounded-2xl rounded-tr-sm p-4 border border-white/5 animate-fade-in">
            <p className="text-xs text-white/90 font-light leading-relaxed">
              Initialize rebalancing for <span className="text-white font-medium">Portfolio Alpha</span>.
              Target <span className="text-primary">12.5% APY</span>.
            </p>
          </div>

          {/* System Message */}
          <div className="self-start max-w-[90%] bg-white/[0.03] backdrop-blur-md rounded-2xl rounded-tl-sm p-5 border border-white/10 relative overflow-hidden group-hover:border-primary/20 transition-colors duration-500">
            <div className="flex items-center gap-2 mb-3 text-primary font-mono text-[10px] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> DeAgenticAI Protocol
            </div>
            <p className="mb-4 text-xs text-white/80 font-light">Analyzing liquidity depth across 4 exchanges. Optimal route secured.</p>

            {/* Progress Bar */}
            <div className="w-full bg-black/40 rounded-full h-1.5 mb-2 overflow-hidden">
              <div className="bg-primary h-full w-[85%] animate-pulse"></div>
            </div>
            <div className="flex justify-between text-[10px] text-primary/60 font-mono">
              <span>EXECUTING</span>
              <span>$52,400.00</span>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

function SmartLiquidityCard() {
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
      className="spotlight-card relative flex flex-col p-[1px] rounded-[32px] overflow-hidden lg:-mt-8 lg:mb-8 z-20 group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-[32px]"></div>
      <div className="absolute inset-0 bg-[#050505] rounded-[31px] m-[1px] overflow-hidden">
        {/* Inner Spotlight Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)' }}
        ></div>
      </div>

      {/* Spotlight Border Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[32px] border border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50"
        style={{
            maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
            WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)'
        }}
      ></div>

      <div className="relative z-10 flex flex-col h-full p-10 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Zap className="w-6 h-6 text-primary relative z-10" />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-white transition-colors">
            Smart Liquidity
          </h3>
        </div>
        <p className="text-base text-white/50 leading-relaxed mb-12 font-light group-hover:text-white/70 transition-colors">
          Connect to deep liquidity pools across chains to ensure zero-slippage execution on institutional orders.
        </p>

        {/* Visual: Hero-Inspired Orbit & Sonar */}
        <div className="mt-auto relative w-full h-80 flex items-center justify-center perspective-1000">
          {/* Animated Background Noodles & Beams */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0" viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id="smart-beam-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                    <stop offset="50%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                </linearGradient>
            </defs>

            {/* Path 1: Top Right into Center */}
            <path d="M420,40 C320,40 280,160 200,160" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M420,40 C320,40 280,160 200,160" fill="none" stroke="url(#smart-beam-grad)" strokeWidth="1.5" strokeDasharray="100 1000" strokeLinecap="round" className="animate-beam" style={{ animationDuration: '3s' }}></path>

            {/* Path 2: Bottom Left into Center */}
            <path d="M-20,280 C80,280 120,160 200,160" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M-20,280 C80,280 120,160 200,160" fill="none" stroke="url(#smart-beam-grad)" strokeWidth="1.5" strokeDasharray="80 1000" strokeLinecap="round" className="animate-beam" style={{ animationDuration: '4s' }}></path>

            {/* Path 3: Vertical Drop */}
            <path d="M200,0 L200,160" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2 4"></path>
          </svg>

          {/* Clean Sonar Rings */}
          <div className="absolute w-96 h-96 border border-primary/5 rounded-full animate-ping opacity-10" style={{ animationDuration: '4s' }}></div>
          <div className="absolute w-80 h-80 border border-white/5 rounded-full animate-ping opacity-20 delay-700" style={{ animationDuration: '3s' }}></div>

          {/* Outer Rotating Ring with Detail */}
          <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }}>
            <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/2 -left-1 w-2 h-2 bg-white/10 rounded-full"></div>
          </div>

          {/* Middle Rotating Ring */}
          <div className="absolute w-60 h-60 border border-white/10 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}></div>

          {/* Inner Dashed Ring */}
          <div className="absolute w-44 h-44 border border-white/5 rounded-full animate-spin-slow-reverse border-dashed" style={{ animationDuration: '20s' }}></div>

          {/* Active Glow Ring */}
          <div className="absolute w-36 h-36 border border-primary/20 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ animationDuration: '15s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary mt-[-3px] rounded-full shadow-[0_0_10px_rgba(56,189,248,1)]"></div>
          </div>

          {/* Orbiting Elements */}
          <div className="absolute w-60 h-60 animate-spin-slow" style={{ animationDuration: '30s' }}>
            {/* Gem Node */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#050505] p-2.5 rounded-full border border-white/10 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all duration-500">
              <Gem className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
            </div>
            {/* Card Node */}
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 bg-[#050505] p-2.5 rounded-full border border-white/10 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] transition-all duration-500">
              <CreditCard className="w-4 h-4 text-white/40 group-hover:text-primary transition-colors" />
            </div>
          </div>

          {/* Central Hub */}
          <div className="z-10 flex group-hover:border-primary/40 transition-colors duration-500 bg-[#0F110E] w-24 h-24 border-white/10 border rounded-3xl relative items-center justify-center overflow-hidden shadow-2xl">
            <img src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FadfU4VUPZGhEvvxzwuyWLvQ9kCI3%2FDeAgenticAILogo__9f96ad0f.png?alt=media&token=46c4e719-e89c-4325-bce7-acbdef9dfb2a" alt="DeAgenticAI Logo" className="w-12 h-12 object-contain relative z-20 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EnterpriseIntegrationCard() {
  return (
    <SpotlightCard>
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <Network className="w-6 h-6 text-primary relative z-10" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-white transition-colors">
          Enterprise Integration
        </h3>
      </div>
      <p className="text-base text-white/50 leading-relaxed mb-12 font-light group-hover:text-white/70 transition-colors relative z-10">
        Seamlessly integrate with existing infrastructure and scale from prototype to production with confidence.
      </p>

      {/* Visual: Integration Nodes & Scaling */}
      <div className="mt-auto relative w-full h-72 rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden flex flex-col shadow-2xl group/visual">
        {/* Header */}
        <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-2 h-2 rounded-full bg-primary/40"></div>
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
          </div>
          <span className="text-xs text-white/30 font-mono text-right">CLUSTER :: SYNC_ACTIVE</span>
        </div>
        
        {/* Body: Scaling Visualization */}
        <div className="relative flex-1 p-8 flex flex-col justify-center items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover/visual:opacity-100 transition-opacity duration-700"></div>
          
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] group-hover/visual:opacity-[0.07] transition-opacity duration-700" 
               style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          {/* Central Connecting Hub */}
          <div className="relative w-full max-w-[240px] flex justify-between items-center z-10">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 240 100">
              <path d="M40,50 L200,50" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></path>
              <path d="M40,50 L200,50" stroke="url(#node-beam)" strokeWidth="1.5" strokeDasharray="40 160" strokeLinecap="round" className="animate-beam"></path>
              <defs>
                <linearGradient id="node-beam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                  <stop offset="50%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Nodes */}
            <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center relative hover:border-primary/40 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/visual:bg-primary/60 transition-colors"></div>
            </div>
            
            <div className="w-14 h-14 rounded-2xl border border-primary/20 bg-primary/5 flex items-center justify-center relative shadow-[0_0_30px_rgba(56,189,248,0.1)] group-hover/visual:border-primary/40 transition-all duration-500 scale-110">
              <div className="absolute inset-0 bg-primary/10 blur-xl animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
            </div>

            <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center relative hover:border-primary/40 transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/visual:bg-primary/60 transition-colors"></div>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 z-10 w-full max-w-[180px]">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-1 w-full rounded-full bg-white/[0.03] overflow-hidden">
                  <div 
                    className="h-full bg-primary/30 animate-pulse" 
                    style={{ width: `${30 + Math.random() * 60}%`, animationDelay: `${i * 0.15}s` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
