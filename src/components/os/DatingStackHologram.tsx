'use client';

import React from 'react';
import Image from 'next/image';

export const DatingStackHologram: React.FC = () => {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden my-2 group">
      {/* Background radial purple glow */}
      <div className="absolute w-40 h-40 rounded-full bg-purple-600/20 blur-2xl group-hover:bg-purple-500/35 transition-all duration-700" />

      {/* 3D Stack of Cards */}
      <div 
        className="relative w-52 h-40 flex items-center justify-center"
        style={{ perspective: '600px' }}
      >
        {/* Layer 3 - Back card */}
        <div
          className="absolute w-36 h-38 rounded-2xl bg-purple-950/40 border border-purple-500/30 backdrop-blur-md shadow-lg"
          style={{
            transform: 'translateX(24px) translateY(-4px) rotate(8deg) scale(0.88)',
            zIndex: 1,
            opacity: 0.45,
          }}
        />

        {/* Layer 2 - Middle card */}
        <div
          className="absolute w-36 h-38 rounded-2xl bg-purple-900/40 border border-purple-400/40 backdrop-blur-md shadow-xl"
          style={{
            transform: 'translateX(12px) translateY(-2px) rotate(4deg) scale(0.94)',
            zIndex: 2,
            opacity: 0.75,
          }}
        />

        {/* Layer 1 - Front interactive profile card */}
        <div
          className="relative w-38 h-40 rounded-2xl overflow-hidden border border-purple-400/60 bg-slate-900/90 shadow-[0_0_25px_rgba(168,85,247,0.4)] group-hover:scale-105 transition-all duration-300"
          style={{
            transform: 'rotate(-2deg)',
            zIndex: 3,
          }}
        >
          {/* Profile Photo */}
          <div className="relative w-full h-full">
            <Image
              src="/ananya.jpg"
              alt="Ananya S."
              fill
              className="object-cover brightness-95 contrast-105 group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 150px, 180px"
              priority
            />

            {/* Gradient Scrim for readable text */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Profile Info Overlay */}
            <div className="absolute bottom-2 left-2 right-2 flex flex-col gap-1 z-10">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xs font-bold text-white tracking-wide">
                  Ananya S.
                </span>
              </div>
              <div className="text-[10px] text-purple-200/90 font-medium">
                26, Bangalore
              </div>

              {/* Interest Tags */}
              <div className="flex flex-wrap gap-1 mt-0.5">
                <span className="text-[8px] font-medium px-1.5 py-0.5 rounded-full bg-white/20 border border-white/20 text-white backdrop-blur-md">
                  Design
                </span>
                <span className="text-[8px] font-medium px-1.5 py-0.5 rounded-full bg-white/20 border border-white/20 text-white backdrop-blur-md">
                  Travel
                </span>
                <span className="text-[8px] font-medium px-1.5 py-0.5 rounded-full bg-white/20 border border-white/20 text-white backdrop-blur-md">
                  Coffee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
