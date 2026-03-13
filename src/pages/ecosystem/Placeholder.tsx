import React from 'react';
import { EcosystemServiceLayout } from '@/components/EcosystemServiceLayout';

export function ComingSoon({ name }: { name: string }) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 pt-32">
      <div className="max-w-xl w-full p-12 rounded-[3rem] border border-white/10 bg-white/[0.02] text-center">
        <h1 className="text-3xl font-serif text-white mb-6 italic">{name}</h1>
        <p className="text-white/60 mb-12 font-light">This ecosystem component is currently under development. Detailed architectural specifications will be published soon.</p>
        <button 
          onClick={() => window.history.back()}
          className="px-8 py-3 bg-primary text-black rounded-full font-medium"
        >
          Return to Ecosystem
        </button>
      </div>
    </div>
  );
}
