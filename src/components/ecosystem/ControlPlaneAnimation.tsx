import React, { useRef, useMemo } from 'react';
import { motion, useTime, useTransform, useInView } from 'framer-motion';

// --- Constants ---
const SVG_WIDTH = 800;
const SVG_HEIGHT = 800;
const CENTER_X = SVG_WIDTH / 2;
const CENTER_Y = SVG_HEIGHT / 2;
const BASE_HEX_SIZE = 64; // Increased size by ~20%
const COMPONENT_COUNT = 6; 
const SPIRAL_TURNS = 1.0; // How many times they spin during convergence - reduced for cleaner connection

const LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FadfU4VUPZGhEvvxzwuyWLvQ9kCI3%2FDeAgenticAILogo__9f96ad0f.png?alt=media&token=46c4e719-e89c-4325-bce7-acbdef9dfb2a";

// Helper to calculate hexagon points
const getHexPoints = (size: number) => {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    points.push(`${size * Math.cos(angle)},${size * Math.sin(angle)}`);
  }
  return points.join(' ');
};

const COMPONENT_LABELS = [
  "MPC Shards",
  "Policy Engine",
  "Delegation",
  "Audit Log",
  "MCP Protocol",
  "Session Auth"
];

export const ControlPlaneAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2 });
  
  const time = useTime();
  const loopDuration = 24000; // Increased to 24s total loop
  const pauseDuration = 2000; // 2s pause at state endpoints
  const transitionDuration = (loopDuration - 2 * pauseDuration) / 2; // 10s transitions

  // Smooth harmonic loop phase (0 to 1 and back to 0)
  // We use sin to get a perfectly smooth acceleration/deceleration
  const loopPhase = useTransform(time, (t) => {
    if (!isInView) return 0;
    const progressMs = t % loopDuration;
    
    // 0 -> transitionDuration: Convergence (0 to 1)
    if (progressMs < transitionDuration) {
      const p = progressMs / transitionDuration;
      return (1 - Math.cos(p * Math.PI)) / 2;
    }
    // transitionDuration -> transitionDuration + pauseDuration: Stay at 1 (Connected)
    if (progressMs < transitionDuration + pauseDuration) {
      return 1;
    }
    // transitionDuration + pauseDuration -> 2 * transitionDuration + pauseDuration: Expansion (1 to 0)
    if (progressMs < 2 * transitionDuration + pauseDuration) {
      const p = (progressMs - (transitionDuration + pauseDuration)) / transitionDuration;
      return (1 + Math.cos(p * Math.PI)) / 2;
    }
    // Final segment: Stay at 0 (Orbiting)
    return 0;
  });

  // Convergence state (0 = Orbit, 1 = Hive)
  const convergence = loopPhase;

  // Visual state mappings
  const logoScale = useTransform(convergence, [0, 1], [1, 1.1]); 
  const logoGlowOpacity = useTransform(convergence, [0, 1], [0.1, 0.6]);
  const hiveLinesOpacity = useTransform(convergence, [0.85, 1], [0, 0.4]);

  const nodes = useMemo(() => {
    return Array.from({ length: COMPONENT_COUNT }).map((_, i) => {
      const baseAngle = (i / COMPONENT_COUNT) * Math.PI * 2;
      const orbitRadius = 320; 
      const hiveDistance = BASE_HEX_SIZE * 1.5; // Reduced from 2.15 to connect to logo
      
      return {
        id: i,
        label: COMPONENT_LABELS[i],
        baseAngle,
        orbitRadius,
        hiveDistance
      };
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.3, 1],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.08),transparent_50%)]" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1.3, 1, 1.3],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,hsl(var(--primary)/0.05),transparent_50%)]" 
        />
      </div>

      <div className="relative w-full h-full flex items-center justify-center px-4 overflow-visible">
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          className="w-full max-w-4xl h-full"
          preserveAspectRatio="xMidYMid meet"
          style={{ overflow: 'visible' }}
        >
          {/* Subtle Hive Interconnections */}
          <motion.g style={{ opacity: hiveLinesOpacity }}>
            {nodes.map((node, i) => {
              const nextNode = nodes[(i + 1) % nodes.length];
              const hiveAngle = node.baseAngle;
              const nextHiveAngle = nextNode.baseAngle;
              
              const x1 = CENTER_X + node.hiveDistance * 1.2 * Math.cos(hiveAngle);
              const y1 = CENTER_Y + node.hiveDistance * 1.2 * Math.sin(hiveAngle);
              const x2 = CENTER_X + nextNode.hiveDistance * 1.2 * Math.cos(nextHiveAngle);
              const y2 = CENTER_Y + nextNode.hiveDistance * 1.2 * Math.sin(nextHiveAngle);

              return (
                <React.Fragment key={`lines-${i}`}>
                  <line x1={CENTER_X} y1={CENTER_Y} x2={x1} y2={y1} stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--primary))" strokeWidth="0.5" strokeDasharray="4 4" />
                </React.Fragment>
              );
            })}
          </motion.g>

          {/* Central Logo Focal Point */}
          <motion.g style={{ scale: logoScale }}>
            <motion.circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={BASE_HEX_SIZE * 2}
              fill="hsl(var(--primary))"
              style={{ opacity: logoGlowOpacity }}
              className="filter blur-[80px]"
            />
            <g transform={`translate(${CENTER_X}, ${CENTER_Y})`}>
              <foreignObject
                x={-BASE_HEX_SIZE}
                y={-BASE_HEX_SIZE}
                width={BASE_HEX_SIZE * 2}
                height={BASE_HEX_SIZE * 2}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" />
                </div>
              </foreignObject>
            </g>
          </motion.g>

          {/* Harmonic Spiral Nodes */}
          {nodes.map((node) => (
            <SpiralHexNode
              key={node.id}
              node={node}
              convergence={convergence}
              time={time}
              isInView={isInView}
            />
          ))}
        </svg>

        {/* Status Indicators */}
        <div className="absolute bottom-12 w-full text-center pointer-events-none">
          <div className="max-w-md mx-auto relative h-6">
            <motion.div
              style={{ opacity: useTransform(convergence, [0, 0.2, 0.4], [1, 1, 0]) }}
              className="absolute inset-0 text-white/20 font-mono text-[9px] uppercase tracking-[0.5em]"
            >
              System Modularity Initialized
            </motion.div>
            <motion.div
              style={{ opacity: useTransform(convergence, [0.4, 0.6, 0.8], [0, 1, 0]) }}
              className="absolute inset-0 text-white/20 font-mono text-[9px] uppercase tracking-[0.5em]"
            >
              Harmonizing Architectural Shards
            </motion.div>
            <motion.div
              style={{ opacity: useTransform(convergence, [0.8, 1], [0, 1]) }}
              className="absolute inset-0 text-primary font-mono text-[10px] uppercase tracking-[0.6em] font-bold"
            >
              Unified Control Plane Active
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SpiralHexNode = ({ node, convergence, time, isInView }: any) => {
  // Constant idle rotation when orbiting
  const loopDuration = 24000; // Match parent loop duration for consistent speed
  const idleRotation = useTransform(time, (t) => {
    if (!isInView) return 0;
    return (t / loopDuration) * Math.PI * 2;
  });

  // Calculate position using spiral logic
  // As convergence goes 0 -> 1:
  // - Radius goes from orbitRadius -> hiveDistance
  // - Angle adds a spiral rotation
  const x = useTransform(convergence, (c) => {
    const currentRadius = node.orbitRadius * (1 - c) + (node.hiveDistance * 1.2) * c;
    const spiralAngle = node.baseAngle + idleRotation.get() * (1 - c) + (c * SPIRAL_TURNS * Math.PI * 2);
    return CENTER_X + currentRadius * Math.cos(spiralAngle);
  });

  const y = useTransform(convergence, (c) => {
    const currentRadius = node.orbitRadius * (1 - c) + (node.hiveDistance * 1.2) * c;
    const spiralAngle = node.baseAngle + idleRotation.get() * (1 - c) + (c * SPIRAL_TURNS * Math.PI * 2);
    return CENTER_Y + currentRadius * Math.sin(spiralAngle);
  });

  const scale = useTransform(convergence, [0, 1], [0.8, 1.15]); // Scale up by 15% in hive
  const textOpacity = useTransform(convergence, [0.85, 1], [0, 1]);

  return (
    <motion.g style={{ x, y, scale }}>
      {/* Individual Node Glow */}
      <motion.circle
        r={BASE_HEX_SIZE * 0.8}
        fill="hsl(var(--primary))"
        style={{ opacity: useTransform(convergence, [0.7, 1], [0.02, 0.2]) }}
        className="filter blur-[20px]"
      />
      
      {/* Hexagon - sized to match logo scale */}
      <polygon
        points={getHexPoints(BASE_HEX_SIZE * 0.85)}
        fill="rgba(255,255,255,0.02)"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        className="backdrop-blur-md transition-colors duration-700"
      />

      {/* Label */}
      <motion.text
        y={BASE_HEX_SIZE + 20}
        textAnchor="middle"
        className="fill-white/40 font-mono"
        style={{ 
          fontSize: 8, 
          letterSpacing: '0.2em',
          opacity: textOpacity,
          fontWeight: 500
        }}
      >
        {node.label}
      </motion.text>
    </motion.g>
  );
};
