import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Cpu, Lock, FileSearch, ArrowRight } from 'lucide-react';

const ICONS = [Shield, Lock, Cpu, Zap, FileSearch, CheckCircle2, ArrowRight];
const LABELS = ["Security", "Custody", "Compute", "Speed", "Audit", "Success", "Launch"];

export function HexDock() {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="flex flex-col items-center gap-12 py-20">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-serif text-white">The Happy Path</h3>
        <p className="text-white/40 font-mono text-xs uppercase tracking-[0.2em]">Magnification Protocol Active</p>
      </div>

      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-center gap-2 px-8 py-6 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <HexItem 
            key={i} 
            i={i} 
            mouseX={mouseX} 
            Icon={ICONS[i]} 
            label={LABELS[i]}
          />
        ))}
      </motion.div>
    </div>
  );
}

function HexItem({ i, mouseX, Icon, label }: { i: number; mouseX: MotionValue; Icon: any; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [60, 100, 60]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square relative group flex items-center justify-center cursor-pointer"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <motion.path
            d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z"
            fill={`url(#grad-${i})`}
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            className="transition-colors duration-300 group-hover:fill-primary/20"
          />
        </svg>
      </div>
      
      <div className="relative z-10 flex flex-col items-center gap-1 transition-transform duration-300 group-hover:-translate-y-1">
        <Icon className="w-1/3 h-1/3 text-primary" />
      </div>

      {/* Label Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="px-3 py-1 rounded-full bg-primary text-black text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
          {label}
        </div>
        <div className="w-2 h-2 bg-primary rotate-45 mx-auto -mt-1" />
      </div>
    </motion.div>
  );
}
