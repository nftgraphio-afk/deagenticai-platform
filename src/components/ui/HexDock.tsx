import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { 
  BrainCircuit, 
  ShieldCheck, 
  Scale, 
  Radar, 
  KeyRound, 
  TowerControl 
} from 'lucide-react';

const STEPS = [
  { label: "INTENT GENERATION", icon: BrainCircuit },
  { label: "INTENT SANITIZATION", icon: ShieldCheck },
  { label: "POLICY EVALUATION", icon: Scale },
  { label: "FRAUD DETECTION", icon: Radar },
  { label: "MPC MECHANISM", icon: KeyRound },
  { label: "CHAIN BROADCAST", icon: TowerControl }
];

interface HexDockProps {
  activeStep?: string;
  className?: string;
}

export function HexDock({ activeStep, className }: HexDockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className={`flex flex-col items-center gap-24 py-32 ${className}`}>
      <div className="text-center space-y-5">
        <h3 className="text-5xl font-serif text-white tracking-tight">The Agentic Lifecycle</h3>
        <p className="text-primary font-mono text-[12px] uppercase tracking-[0.6em] font-bold opacity-90 animate-pulse">Happy Path Protocol Active</p>
      </div>

      <div className="relative group/dock w-full max-w-7xl px-8">
        {/* Animated Background Beam Layer with Sparkles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <defs>
            <linearGradient id="dock-beam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <filter id="dock-glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Moving Sparkle Beams */}
          {[0, 1, 2].map((i) => (
            <React.Fragment key={i}>
              <motion.path
                d="M 0 200 L 1200 200"
                stroke="url(#dock-beam)"
                strokeWidth="3"
                fill="none"
                strokeDasharray="150 1200"
                filter="url(#dock-glow)"
                animate={{
                  strokeDashoffset: [1350, -1350]
                }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2
                }}
                style={{ 
                  vectorEffect: 'non-scaling-stroke',
                  transform: `translateY(${(i - 1) * 4}px)`
                }}
              />
              {/* Individual Sparkle Dots following the beam */}
              <motion.circle
                r="2"
                fill="white"
                className="filter blur-[1px]"
                animate={{
                  cx: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2
                }}
                style={{ cy: "50%", transform: `translateY(${(i - 1) * 4}px)` }}
              />
            </React.Fragment>
          ))}
        </svg>

        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="flex items-center justify-center gap-6 px-16 py-12 rounded-[5rem] border border-white/10 bg-white/[0.01] backdrop-blur-[40px] relative z-10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)]"
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

  // Massive sizes for "bigger" feel: Base 120px, Max 220px
  const widthSync = useTransform(distance, [-300, 0, 300], [120, 220, 120]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square relative group flex items-center justify-center cursor-pointer"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          <defs>
            <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={isActive ? "0.6" : "0.2"} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={isActive ? "0.2" : "0.05"} />
            </linearGradient>
          </defs>
          
          {/* Internal Glow Path */}
          <motion.path
            d="M50 8 L87 30 L87 70 L50 92 L13 70 L13 30 Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            className="opacity-20"
          />

          {/* Active Aura / Ripple */}
          {isActive && (
            <motion.circle 
              cx="50" cy="50" r="49" 
              fill="none" 
              stroke="hsl(var(--primary)/0.3)" 
              strokeWidth="1"
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          {/* Main Hexagon Border - Enhanced stroke and glow */}
          <motion.path
            d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z"
            fill={`url(#grad-${label})`}
            stroke={isActive ? "hsl(var(--primary))" : "hsl(var(--primary)/0.5)"}
            strokeWidth={isActive ? "3" : "1.8"}
            className="transition-all duration-700 group-hover:fill-primary/30 group-hover:stroke-primary group-hover:stroke-[2.5]"
            animate={isActive ? {
              strokeWidth: [3, 4.5, 3],
              filter: [
                "drop-shadow(0 0 5px rgba(56,189,248,0.4))",
                "drop-shadow(0 0 15px rgba(56,189,248,0.8))",
                "drop-shadow(0 0 5px rgba(56,189,248,0.4))"
              ]
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </div>
      
      <div className={`relative z-10 flex flex-col items-center gap-1 transition-all duration-700 ${isActive ? 'scale-125' : 'group-hover:-translate-y-4'}`}>
        <Icon className={`w-[35%] h-[35%] ${isActive ? 'text-primary' : 'text-primary/50 group-hover:text-primary'} transition-colors duration-700 drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]`} />
      </div>

      {/* Label Tooltip - Production Grade Glass */}
      <div className={`absolute -top-24 left-1/2 -translate-x-1/2 transition-all duration-700 pointer-events-none z-20 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0'}`}>
        <div className={`px-6 py-2.5 rounded-2xl border ${isActive ? 'bg-primary text-black border-primary' : 'bg-black/95 text-primary border-primary/30'} backdrop-blur-2xl text-[12px] font-bold uppercase tracking-[0.3em] whitespace-nowrap shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] border-t-white/10`}>
          {label}
        </div>
        <div className={`w-4 h-4 rotate-45 mx-auto -mt-2 border-r border-b ${isActive ? 'bg-primary border-primary' : 'bg-black/95 border-primary/30'}`} />
      </div>

      {/* Persistent Technical Glow for Active */}
      {isActive && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_20px_rgba(56,189,248,1)] animate-pulse" />
          <div className="w-px h-4 bg-gradient-to-b from-primary to-transparent" />
        </div>
      )}
    </motion.div>
  );
}
