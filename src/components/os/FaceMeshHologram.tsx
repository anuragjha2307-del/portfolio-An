'use client';

import React from 'react';
import { Fingerprint } from 'lucide-react';

export const FaceMeshHologram: React.FC = () => {
  return (
    <div className="relative w-full h-44 flex items-center justify-between px-2 overflow-hidden my-2 group">
      {/* Background radial emerald glow */}
      <div className="absolute left-6 w-36 h-36 rounded-full bg-emerald-500/20 blur-2xl group-hover:bg-emerald-400/35 transition-all duration-700" />

      {/* Cybernetic Wireframe Head & Face Mesh */}
      <div className="relative w-36 h-40 flex items-center justify-center">
        {/* Subtle sweeping scanline */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_#10b981] animate-scanline opacity-75" />
        </div>

        <svg
          viewBox="0 0 160 190"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]"
        >
          <defs>
            <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Cranium outline */}
          <path
            d="M 40 70 C 40 25, 120 25, 120 70 C 120 100, 115 130, 95 155 C 80 168, 65 155, 45 130 C 40 100, 40 70, 40 70 Z"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Forehead horizontal latitude lines */}
          <path d="M 46 50 Q 80 40 114 50" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.6" />
          <path d="M 42 65 Q 80 55 118 65" fill="none" stroke="#10b981" strokeWidth="1.2" opacity="0.7" />
          <path d="M 42 80 Q 80 72 118 80" fill="none" stroke="#10b981" strokeWidth="1.2" opacity="0.7" />

          {/* Brow and eye socket meshes */}
          {/* Left brow/eye */}
          <polygon points="50,78 62,72 75,76 72,85 58,85" fill="none" stroke="#34d399" strokeWidth="1.2" />
          <circle cx="63" cy="80" r="2.5" fill="#a7f3d0" />

          {/* Right brow/eye */}
          <polygon points="85,76 98,72 110,78 102,85 88,85" fill="none" stroke="#34d399" strokeWidth="1.2" />
          <circle cx="97" cy="80" r="2.5" fill="#a7f3d0" />

          {/* Nose bridge & polygon cartography */}
          <line x1="80" y1="72" x2="80" y2="108" stroke="#34d399" strokeWidth="1.5" />
          <polygon points="80,78 74,102 80,108 86,102" fill="none" stroke="#10b981" strokeWidth="1.2" />
          <line x1="74" y1="102" x2="86" y2="102" stroke="#10b981" strokeWidth="1" />

          {/* Cheekbones triangulated mesh */}
          {/* Left cheek */}
          <polygon points="42,80 50,78 58,85 70,105 50,118 42,95" fill="none" stroke="#059669" strokeWidth="1" opacity="0.7" />
          {/* Right cheek */}
          <polygon points="118,80 110,78 102,85 90,105 110,118 118,95" fill="none" stroke="#059669" strokeWidth="1" opacity="0.7" />

          {/* Lips & philtrum */}
          <polygon points="70,122 80,118 90,122 80,128" fill="none" stroke="#34d399" strokeWidth="1.2" />
          <polygon points="72,126 80,132 88,126" fill="none" stroke="#10b981" strokeWidth="1" />

          {/* Jawline & chin mesh */}
          <polygon points="50,118 65,140 80,150 95,140 110,118 80,132" fill="none" stroke="#10b981" strokeWidth="1.2" opacity="0.8" />
          <line x1="80" y1="150" x2="80" y2="168" stroke="#059669" strokeWidth="1.2" />
          <path d="M 60 168 Q 80 178 100 168" fill="none" stroke="#059669" strokeWidth="1.2" opacity="0.6" />

          {/* Key landmark biometric points */}
          {[
            { cx: 80, cy: 38 },
            { cx: 62, cy: 72 },
            { cx: 98, cy: 72 },
            { cx: 80, cy: 108 },
            { cx: 70, cy: 122 },
            { cx: 90, cy: 122 },
            { cx: 80, cy: 150 },
            { cx: 50, cy: 118 },
            { cx: 110, cy: 118 },
            { cx: 42, cy: 80 },
            { cx: 118, cy: 80 },
          ].map((pt, i) => (
            <circle
              key={i}
              cx={pt.cx}
              cy={pt.cy}
              r="2.2"
              fill="#ffffff"
              className="animate-pulse"
              style={{ animationDelay: `${(i * 0.2).toFixed(1)}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Verified Biometrics Badge on the right */}
      <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.3)]">
        <div className="relative w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center mb-1.5 shadow-[0_0_15px_rgba(16,185,129,0.6)]">
          <Fingerprint className="w-7 h-7 text-emerald-300 animate-pulse" />
          <div className="absolute inset-0 rounded-full border border-dashed border-emerald-300 animate-spin-clockwise opacity-50" />
        </div>
        <div className="text-[11px] font-bold font-mono tracking-wider text-emerald-300">
          VERIFIED
        </div>
        <div className="text-[9px] text-emerald-400/80 whitespace-nowrap">
          Identity Confirmed
        </div>
      </div>
    </div>
  );
};
