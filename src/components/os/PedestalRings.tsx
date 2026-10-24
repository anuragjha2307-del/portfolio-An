'use client';

import React from 'react';

interface PedestalRingsProps {
  color: 'cyan' | 'green' | 'purple';
}

export const PedestalRings: React.FC<PedestalRingsProps> = ({ color }) => {
  const configs = {
    cyan: {
      ringBorder: 'border-cyan-400',
      ringGlow: 'shadow-[0_0_30px_rgba(6,182,212,0.8)]',
      beamGradient: 'from-cyan-400/30 via-cyan-500/10 to-transparent',
      centerGlow: 'bg-cyan-400',
      lightCone: 'rgba(6,182,212,0.25)',
      accentSvg: '#00f0ff',
      dimSvg: '#0891b2',
    },
    green: {
      ringBorder: 'border-emerald-400',
      ringGlow: 'shadow-[0_0_30px_rgba(16,185,129,0.8)]',
      beamGradient: 'from-emerald-400/30 via-emerald-500/10 to-transparent',
      centerGlow: 'bg-emerald-400',
      lightCone: 'rgba(16,185,129,0.25)',
      accentSvg: '#10b981',
      dimSvg: '#059669',
    },
    purple: {
      ringBorder: 'border-purple-400',
      ringGlow: 'shadow-[0_0_30px_rgba(168,85,247,0.8)]',
      beamGradient: 'from-purple-400/30 via-purple-500/10 to-transparent',
      centerGlow: 'bg-purple-400',
      lightCone: 'rgba(168,85,247,0.25)',
      accentSvg: '#c084fc',
      dimSvg: '#9333ea',
    },
  };

  const cfg = configs[color];

  return (
    <div className="relative w-full h-24 flex items-center justify-center pointer-events-none select-none -mt-4">
      {/* Upward holographic projection cone beam */}
      <div
        className="absolute bottom-6 w-56 h-36 opacity-70 blur-xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${cfg.lightCone} 0%, transparent 70%)`,
        }}
      />

      {/* 3D Perspective Elliptical Platform */}
      <div 
        className="relative w-64 h-24 flex items-center justify-center"
        style={{
          transform: 'perspective(450px) rotateX(68deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outermost solid glowing ring */}
        <div
          className={`absolute w-60 h-60 rounded-full border-2 ${cfg.ringBorder} ${cfg.ringGlow} opacity-60`}
        />

        {/* Second ring with fine dashes rotating clockwise */}
        <svg
          viewBox="0 0 200 200"
          className="absolute w-52 h-52 animate-spin-clockwise opacity-80"
        >
          <circle
            cx="100"
            cy="100"
            r="94"
            fill="none"
            stroke={cfg.accentSvg}
            strokeWidth="1.5"
            strokeDasharray="6 8 18 8"
          />
          <circle
            cx="100"
            cy="100"
            r="86"
            fill="none"
            stroke={cfg.dimSvg}
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>

        {/* Middle ring with segmented ticks rotating counter */}
        <svg
          viewBox="0 0 200 200"
          className="absolute w-44 h-44 animate-spin-counter opacity-90"
        >
          <circle
            cx="100"
            cy="100"
            r="75"
            fill="none"
            stroke={cfg.accentSvg}
            strokeWidth="2"
            strokeDasharray="12 14"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke={cfg.dimSvg}
            strokeWidth="1.2"
            strokeDasharray="2 10"
          />
        </svg>

        {/* Inner high-intensity emitter ring */}
        <div
          className={`absolute w-28 h-28 rounded-full border-2 ${cfg.ringBorder} ${cfg.ringGlow} opacity-90`}
        />

        {/* Center intense emitter core */}
        <div
          className={`absolute w-12 h-12 rounded-full ${cfg.centerGlow} blur-sm opacity-95 animate-ping-slow`}
        />
        <div
          className="absolute w-4 h-4 rounded-full bg-white blur-[1px] opacity-100"
        />
      </div>
    </div>
  );
};
