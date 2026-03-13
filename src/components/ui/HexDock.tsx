import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { Zap, ShieldCheck, Shield, Search, Lock, Rocket } from 'lucide-react';

const STEPS = [
  { label: "INTENT GENERATION", icon: Zap },
  { label: "INTENT SANITIZATION", icon: ShieldCheck },
  { label: "POLICY EVALUATION", icon: Shield },
  { label: "FRAUD DETECTION", icon: Search },
  { label: "MPC MECHANISM", icon: Lock },
  { label: "CHAIN BROADCAST", icon: Rocket }
];

interface HexDockProps {
  activeStep?: string;
  className?: string;
}

export function HexDock({ activeStep, className }: HexDockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className={`flex flex-col items-center gap-20 py-28 ${className}`}>
      <div className="text-center space-y-4">
        <h3 className="text-4xl font-serif text-white tracking-tight">The Agentic Lifecycle</h3>
        <p className="text-primary font-mono text-[11px] uppercase tracking-[0.5em] font-bold opacity-80">Autonomous Flow Protocol</p>
      </div>

      <div className="relative group/dock w-full max-w-6xl px-4">
        {/* Animated Background Beam Layer */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dock-beam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Static subtle line */}
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.05" />
          
          {/* Moving Sparkle Beams */}
          {[0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d="M 0 400 L 800 400"
              stroke="url(#dock-beam)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="100 800"
              filter="url(#glow)"
              animate={{
                strokeDashoffset: [800, -800]
              }}
              transition={{
                duration: 5 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.5
              }}
              style={{ 
                vectorEffect: 'non-scaling-stroke',
                transform: `translateY(${(i - 1) * 2}px)`
              }}
            />
          ))}
        </svg>

        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="flex items-center justify-center gap-4 px-12 py-10 rounded-[4rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative z-10 shadow-2xl"
        >
          {STEPS.map((step, i) => (
            <HexItem 
              key={i} 
              mouseX={mouseX} 
              Icon={step.icon} 
              label={step.label}
              isActive={activeStep === step.label}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function HexItem({ mouseX, Icon, label, isActive }: { mouseX: MotionValue; Icon: any; label: string; isActive: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Bigger sizes: Base 100px, Max 180px
  const widthSync = useTransform(distance, [-250, 0, 250], [100, 180, 100]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 180, damping: 18 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square relative group flex items-center justify-center cursor-pointer"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={isActive ? "0.5" : "0.15"} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={isActive ? "0.2" : "0.05"} />
            </linearGradient>
            <filter id={`glow-${label}`}>
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Active Aura */}
          {isActive && (
            <motion.circle 
              cx="50" cy="50" r="48" 
              fill="none" 
              stroke="hsl(var(--primary)/0.2)" 
              strokeWidth="1"
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}

          <motion.path
            d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z"
            fill={`url(#grad-${label})`}
            stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--primary)/0.3)"}
            strokeWidth={isActive ? "2.5" : "1.2"}
            className="transition-all duration-700 group-hover:fill-primary/25 group-hover:stroke-primary"
            animate={isActive ? {
              strokeWidth: [2.5, 4, 2.5],
              filter: ["none", "drop-shadow(0 0 8px rgba(56,189,248,0.5))", "none"]
            } : {}}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </svg>
      </div>
      
      <div className={`relative z-10 flex flex-col items-center gap-1 transition-all duration-700 ${isActive ? 'scale-125' : 'group-hover:-translate-y-3'}`}>
        <Icon className={`w-1/3 h-1/3 ${isActive ? 'text-primary' : 'text-primary/40 group-hover:text-primary'} transition-colors duration-700`} />
      </div>

      {/* Label Tooltip - Enhanced with Glassmorphism */}
      <div className={`absolute -top-20 left-1/2 -translate-x-1/2 transition-all duration-500 pointer-events-none z-20 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
        <div className={`px-5 py-2 rounded-2xl border ${isActive ? 'bg-primary text-black border-primary' : 'bg-black/80 text-primary border-primary/20'} backdrop-blur-xl text-[11px] font-bold uppercase tracking-[0.25em] whitespace-nowrap shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]`}>
          {label}
        </div>
        <div className={`w-3 h-3 rotate-45 mx-auto -mt-1.5 border-r border-b ${isActive ? 'bg-primary border-primary' : 'bg-black/80 border-primary/20'}`} />
      </div>

      {/* Persistent Glow for Active */}
      {isActive && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_rgba(56,189,248,1)] animate-pulse" />
      )}
    </motion.div>
  );
}
