'use client';

import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { PedestalRings } from '@/components/os/PedestalRings';
import { BrainHologram } from '@/components/os/BrainHologram';
import { FaceMeshHologram } from '@/components/os/FaceMeshHologram';
import { DatingStackHologram } from '@/components/os/DatingStackHologram';
import {
  PythonIcon,
  PyTorchIcon,
  StreamlitIcon,
  OpenCVIcon,
  HaversineIcon,
  TOTPIcon,
  ReactNativeIcon,
  ExpoIcon,
  ReanimatedIcon,
} from '@/components/common/TechBadges';
import { AppId } from '@/types/os';
import { sound } from '@/lib/sound';

interface HologramStageProps {
  onOpenApp: (id: AppId) => void;
}

export const HologramStage: React.FC<HologramStageProps> = ({ onOpenApp }) => {
  return (
    <div className="relative z-20 flex-1 flex items-center justify-center px-2 sm:px-4 py-2 w-full max-w-7xl mx-auto">
      <div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-end w-full"
        style={{ perspective: '1200px' }}
      >
        {/* ============================================================ */}
        {/* CARD 1: AI Research Assistant Suite (Cyan / Blue Hologram) */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center group">
          <div
            onClick={() => {
              sound.playOpen();
              onOpenApp('ai-assistant');
            }}
            className="w-full max-w-[340px] rounded-3xl p-5 bg-slate-950/75 border border-cyan-400/40 backdrop-blur-2xl shadow-[0_0_35px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] group-hover:border-cyan-300 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[450px]"
            style={{
              transform: 'rotateY(6deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Header */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans">
                AI Research Assistant Suite
              </h2>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Advanced. Autonomous. Always On.
              </p>
            </div>

            {/* Visual: Neural Brain Hologram */}
            <BrainHologram />

            {/* Metrics & Badges */}
            <div className="flex items-center justify-between gap-2 pt-2 border-t border-cyan-500/20">
              {/* Circular Gauge: 99.9% Uptime */}
              <div className="flex items-center gap-2">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="#0f172a"
                      strokeWidth="3"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="15"
                      fill="none"
                      stroke="#00f0ff"
                      strokeWidth="3"
                      strokeDasharray="94"
                      strokeDashoffset="2"
                      strokeLinecap="round"
                      className="drop-shadow-[0_0_6px_#00f0ff]"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] font-bold text-white font-mono leading-none">
                      99.9%
                    </span>
                    <span className="text-[6px] font-mono text-cyan-300 leading-none mt-0.5">
                      UPTIME
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex items-center gap-1.5 flex-wrap justify-end">
                <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-[10px] text-slate-200">
                  <PythonIcon className="w-3 h-3" />
                  <span>Python</span>
                </span>
                <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-[10px] text-slate-200">
                  <PyTorchIcon className="w-3 h-3" />
                  <span>PyTorch</span>
                </span>
                <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 text-[10px] text-slate-200">
                  <StreamlitIcon className="w-3 h-3" />
                  <span>Streamlit</span>
                </span>
              </div>
            </div>

            {/* Action button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                sound.playOpen();
                onOpenApp('ai-assistant');
              }}
              className="mt-3 w-full py-2.5 px-4 rounded-2xl bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-400/50 hover:border-cyan-300 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-200 cursor-pointer"
            >
              <span>Launch Sandbox</span>
              <ArrowRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Underneath: Holographic Projection Pedestal */}
          <PedestalRings color="cyan" />
        </div>

        {/* ============================================================ */}
        {/* CARD 2: Smart Presence (Emerald Green Hologram) */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center group">
          <div
            onClick={() => {
              sound.playOpen();
              onOpenApp('smart-presence');
            }}
            className="w-full max-w-[340px] rounded-3xl p-5 bg-slate-950/75 border border-emerald-400/40 backdrop-blur-2xl shadow-[0_0_35px_rgba(16,185,129,0.25)] group-hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] group-hover:border-emerald-300 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[450px]"
            style={{
              transform: 'rotateY(0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Header */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans">
                Smart Presence
              </h2>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Adaptive. Secure. Truly You.
              </p>
            </div>

            {/* Visual: Wireframe Head Mesh Hologram */}
            <FaceMeshHologram />

            {/* Tech Badges */}
            <div className="flex items-center justify-center gap-2 pt-3 border-t border-emerald-500/20">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 font-medium shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                <OpenCVIcon className="w-3.5 h-3.5" />
                <span>OpenCV</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 font-medium shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                <HaversineIcon className="w-3.5 h-3.5" />
                <span>Haversine</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200 font-medium shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                <TOTPIcon className="w-3.5 h-3.5" />
                <span>TOTP</span>
              </span>
            </div>

            {/* Action button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                sound.playOpen();
                onOpenApp('smart-presence');
              }}
              className="mt-3 w-full py-2.5 px-4 rounded-2xl bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-400/50 hover:border-emerald-300 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-200 cursor-pointer"
            >
              <span>Biometric Scanner</span>
              <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Underneath: Holographic Projection Pedestal */}
          <PedestalRings color="green" />
        </div>

        {/* ============================================================ */}
        {/* CARD 3: Spark Dating App (Neon Purple Hologram) */}
        {/* ============================================================ */}
        <div className="flex flex-col items-center group">
          <div
            onClick={() => {
              sound.playOpen();
              onOpenApp('spark-mobile');
            }}
            className="w-full max-w-[340px] rounded-3xl p-5 bg-slate-950/75 border border-purple-400/40 backdrop-blur-2xl shadow-[0_0_35px_rgba(168,85,247,0.25)] group-hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] group-hover:border-purple-300 transition-all duration-300 cursor-pointer flex flex-col justify-between h-[450px] relative"
            style={{
              transform: 'rotateY(-6deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Top Right: 60 FPS Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-900/60 border border-purple-400/50 text-[10px] font-mono text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.4)]">
              <Zap className="w-3 h-3 text-purple-300" />
              <span>60 FPS</span>
            </div>

            {/* Header */}
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight font-sans">
                Spark Dating App
              </h2>
              <p className="text-xs text-slate-400 font-sans mt-0.5">
                Real connections. Real time.
              </p>
            </div>

            {/* Visual: Stacked 3D Profile Cards */}
            <DatingStackHologram />

            {/* Tech Badges */}
            <div className="flex items-center justify-center gap-2 pt-3 border-t border-purple-500/20">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/40 text-[11px] text-purple-200 font-medium shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <ReactNativeIcon className="w-3.5 h-3.5" />
                <span>React Native</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/40 text-[11px] text-purple-200 font-medium shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <ExpoIcon className="w-3.5 h-3.5" />
                <span>Expo</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/40 text-[11px] text-purple-200 font-medium shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                <ReanimatedIcon className="w-3.5 h-3.5" />
                <span>Reanimated</span>
              </span>
            </div>

            {/* Action button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                sound.playOpen();
                onOpenApp('spark-mobile');
              }}
              className="mt-3 w-full py-2.5 px-4 rounded-2xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-400/50 hover:border-purple-300 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.25)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-200 cursor-pointer"
            >
              <span>Launch Mobile Sim</span>
              <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Underneath: Holographic Projection Pedestal */}
          <PedestalRings color="purple" />
        </div>
      </div>
    </div>
  );
};
