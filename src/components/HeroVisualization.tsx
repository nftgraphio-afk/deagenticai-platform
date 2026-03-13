import React from 'react';

export function HeroVisualization() {
  return (
    <div className="lg:w-1/2 lg:h-[800px] flex w-full h-[500px] relative perspective-1000 items-center justify-center">
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" viewBox="0 0 600 600">
        <defs>
          <radialGradient id="center-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connecting Beams */}
        {/* Group 1 */}
        <g>
          <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]"></path>
          <path d="M -50 150 C 100 150, 100 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1.5" className="beam-line animate-beam opacity-60"></path>
        </g>
        {/* Group 2 */}
        <g>
          <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]"></path>
          <path d="M -50 450 C 100 450, 100 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-1s' }}></path>
        </g>
        {/* Group 3 */}
        <g>
          <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]"></path>
          <path d="M 650 100 C 500 100, 500 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-2s' }}></path>
        </g>
        {/* Group 4 */}
        <g>
          <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="white" strokeWidth="1" className="opacity-[0.08]"></path>
          <path d="M 650 500 C 500 500, 500 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1.5" className="beam-line animate-beam opacity-60" style={{ animationDelay: '-1.5s' }}></path>
        </g>

        {/* CENTRAL NODE DETAIL */}
        <g transform="translate(300, 300)">
          {/* Ambient Glow */}
          <circle r="120" fill="url(#center-glow)" className="animate-pulse"></circle>

          {/* Sonar Waves */}
          {/* Note: In React, we need to add the keyframes for sonar-wave in global CSS or tailwind config. 
              I'll assume it's added or use inline styles for animation if needed. 
              The HTML used a custom class .animate-sonar. I need to make sure that class exists. 
              I'll add it to index.css if I haven't, or just simulate it here.
          */}
          <circle r="20" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '3s' }}></circle>
          <circle r="20" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }}></circle>
          <circle r="20" fill="none" stroke="#38BDF8" strokeWidth="1" opacity="0.5" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }}></circle>

          {/* Technical Rings */}
          {/* Outer Dashed Ring Slow */}
          <circle r="65" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="10 20" className="animate-spin-slow"></circle>

          {/* Inner Dashed Ring Reverse */}
          <circle r="45" fill="none" stroke="#38BDF8" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 6" className="animate-spin-slow-reverse"></circle>

          {/* Crosshair Markers */}
          <g className="animate-spin-slow" style={{ animationDuration: '20s' }}>
            <path d="M -80 0 L -70 0" stroke="white" strokeOpacity="0.2"></path>
            <path d="M 80 0 L 70 0" stroke="white" strokeOpacity="0.2"></path>
            <path d="M 0 -80 L 0 -70" stroke="white" strokeOpacity="0.2"></path>
            <path d="M 0 80 L 0 70" stroke="white" strokeOpacity="0.2"></path>
          </g>

          {/* Core */}
          <circle r="8" fill="#0A0A0A" stroke="#38BDF8" strokeWidth="2"></circle>
          <circle r="4" fill="#38BDF8" className="animate-pulse-fast"></circle>
        </g>

      </svg>

      {/* Floating Labels */}
      <div className="absolute top-[20%] lg:top-[25%] left-[10%] lg:left-[15%] flex flex-col items-end">
        <span className="text-xs font-mono text-primary tracking-widest mb-1 opacity-80">ZERO LATENCY</span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-primary to-transparent"></div>
      </div>

      <div className="absolute bottom-[20%] lg:bottom-[25%] right-[10%] lg:right-[15%] flex flex-col items-start">
        <span className="text-xs font-mono text-primary tracking-widest mb-1 opacity-80">DEFI NATIVE</span>
        <div className="h-[1px] w-12 bg-gradient-to-r from-primary to-transparent"></div>
      </div>

      {/* Extra Data Decoration */}
      <div className="absolute top-[50%] right-[15%] hidden lg:flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-white/20"></div>
          <div className="w-1 h-1 bg-white/20"></div>
          <div className="w-1 h-1 bg-primary animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
