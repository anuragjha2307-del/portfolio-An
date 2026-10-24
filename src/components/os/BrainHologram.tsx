'use client';

import React from 'react';

export const BrainHologram: React.FC = () => {
  // Pre-calculated anatomical 2D coordinates for left/right brain hemispheres & frontal/cerebellar lobes
  const nodes = [
    // Center stem / core
    { x: 140, y: 155, r: 4.5, core: true },
    { x: 160, y: 155, r: 4.5, core: true },
    { x: 150, y: 130, r: 5, core: true },
    { x: 150, y: 100, r: 4 },
    { x: 150, y: 70, r: 3.5 },

    // Left hemisphere - frontal & parietal
    { x: 125, y: 65, r: 3.5 },
    { x: 100, y: 68, r: 3 },
    { x: 80, y: 80, r: 4 },
    { x: 65, y: 102, r: 4 },
    { x: 62, y: 125, r: 3.5 },
    { x: 75, y: 145, r: 3.5 },
    { x: 95, y: 160, r: 4 },
    { x: 120, y: 170, r: 3.5 },
    
    // Left inner cortex
    { x: 105, y: 92, r: 4 },
    { x: 125, y: 95, r: 3.5 },
    { x: 90, y: 118, r: 3.5 },
    { x: 115, y: 122, r: 4.5 },
    { x: 130, y: 138, r: 4 },
    { x: 108, y: 142, r: 3 },

    // Right hemisphere - frontal & parietal
    { x: 175, y: 65, r: 3.5 },
    { x: 200, y: 68, r: 3 },
    { x: 220, y: 80, r: 4 },
    { x: 235, y: 102, r: 4 },
    { x: 238, y: 125, r: 3.5 },
    { x: 225, y: 145, r: 3.5 },
    { x: 205, y: 160, r: 4 },
    { x: 180, y: 170, r: 3.5 },

    // Right inner cortex
    { x: 195, y: 92, r: 4 },
    { x: 175, y: 95, r: 3.5 },
    { x: 210, y: 118, r: 3.5 },
    { x: 185, y: 122, r: 4.5 },
    { x: 170, y: 138, r: 4 },
    { x: 192, y: 142, r: 3 },

    // Temporal & Occipital lobes
    { x: 75, y: 170, r: 3 },
    { x: 90, y: 182, r: 3.5 },
    { x: 115, y: 192, r: 4 },
    { x: 138, y: 190, r: 3.5 },

    { x: 225, y: 170, r: 3 },
    { x: 210, y: 182, r: 3.5 },
    { x: 185, y: 192, r: 4 },
    { x: 162, y: 190, r: 3.5 },
  ];

  // Pre-generate connection synapses between proximate nodes
  const connections: [number, number][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 42) {
        connections.push([i, j]);
      }
    }
  }

  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden my-2 group">
      {/* Background radial glow */}
      <div className="absolute w-40 h-40 rounded-full bg-cyan-500/20 blur-2xl group-hover:bg-cyan-400/35 transition-all duration-700" />
      <div className="absolute w-20 h-20 rounded-full bg-blue-400/30 blur-xl" />

      {/* SVG Brain Network */}
      <svg
        viewBox="40 45 220 160"
        className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(0,240,255,0.7)]"
      >
        <defs>
          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="synapse-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Synapse Lines */}
        <g stroke="url(#synapse-cyan)" strokeWidth="1.2">
          {connections.map(([i, j], idx) => (
            <line
              key={idx}
              x1={nodes[i].x}
              y1={nodes[i].y}
              x2={nodes[j].x}
              y2={nodes[j].y}
              className="opacity-60 hover:opacity-100 transition-opacity"
            />
          ))}
        </g>

        {/* Active Neural Synapse Pulses */}
        <g>
          {connections.slice(0, 14).map(([i, j], idx) => {
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY = (nodes[i].y + nodes[j].y) / 2;
            return (
              <circle
                key={`pulse-${idx}`}
                cx={midX}
                cy={midY}
                r="1.8"
                fill="#ffffff"
                className="animate-ping-slow"
                style={{ animationDelay: `${(idx * 0.25).toFixed(2)}s` }}
              />
            );
          })}
        </g>

        {/* Synaptic Nodes */}
        {nodes.map((node, idx) => (
          <g key={idx} filter="url(#glow-cyan)">
            {/* Outer halo */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 1.5}
              fill="rgba(0, 240, 255, 0.2)"
            />
            {/* Core dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.core ? '#ffffff' : '#00f0ff'}
              className={node.core ? 'animate-pulse' : ''}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
