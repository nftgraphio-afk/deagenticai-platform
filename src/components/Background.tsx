import React from 'react';

export function Background() {
  return (
    <>
      {/* Background (component) */}
      <div className="aura-background-component top-0 w-full h-screen -z-10 fixed" style={{ maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-background opacity-80" />
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
    </>
  );
}
