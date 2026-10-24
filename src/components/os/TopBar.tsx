'use client';

import React, { useState, useEffect } from 'react';
import { Rocket, Volume2, VolumeX, Sparkles, Terminal, Activity, SunMoon } from 'lucide-react';
import { sound } from '@/lib/sound';
import { ThemeMode, AppId } from '@/types/os';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface TopBarProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenApp: (id: AppId) => void;
  onStartTour: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentTheme,
  onThemeChange,
  onOpenApp,
  onStartTour,
}) => {
  const [time, setTime] = useState<string>('21:42:07');
  const [date, setDate] = useState<string>('May 24, 2025');
  const [isMuted, setIsMuted] = useState<boolean>(!sound.isEnabled());
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setIsMuted(!sound.isEnabled());
    const unsub = sound.subscribe((enabled) => {
      setIsMuted(!enabled);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
      );
      setDate(
        now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative z-40 w-full px-4 sm:px-6 pt-3 pb-1 flex items-center justify-between select-none">
      {/* Left: OS Branding Capsule Pill */}
      <div className="relative">
        <div 
          onClick={() => setShowMenu(!showMenu)}
          className="group flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-950/75 border border-purple-500/30 backdrop-blur-2xl shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-400/60 transition-all duration-200 cursor-pointer"
        >
          {/* Glowing 3D Isometric Purple Cube */}
          <div className="relative w-6 h-6 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-6 h-6 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
              {/* Top face */}
              <polygon points="12,2 22,7.5 12,13 2,7.5" fill="#a855f7" />
              {/* Left face */}
              <polygon points="2,7.5 12,13 12,23 2,17.5" fill="#7e22ce" />
              {/* Right face */}
              <polygon points="12,13 22,7.5 22,17.5 12,23" fill="#9333ea" />
              {/* Core highlight dot */}
              <circle cx="12" cy="13" r="1.5" fill="#ffffff" />
            </svg>
          </div>

          {/* OS Title */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm sm:text-base tracking-tight font-sans">
              AnuragOS v3.0
            </span>
            <span className="text-slate-400 font-sans text-xs sm:text-sm hidden sm:inline">
              | — Neural Workspace
            </span>
          </div>

          {/* Online Indicator */}
          <div className="flex items-center gap-1.5 ml-1 pl-2 border-l border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </span>
            <span className="text-[11px] font-semibold text-emerald-400 tracking-wider font-mono">
              ONLINE
            </span>
          </div>
        </div>

        {/* Dropdown Menu when clicked */}
        {showMenu && (
          <div
            className="absolute left-0 top-12 w-64 rounded-xl bg-slate-950/95 border border-purple-500/40 p-2 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in zoom-in-95 text-xs text-slate-200"
            onMouseLeave={() => setShowMenu(false)}
          >
            <div className="px-3 py-2 border-b border-white/10 mb-1">
              <div className="font-semibold text-white text-sm">{PERSONAL_INFO.name}</div>
              <div className="text-[11px] text-purple-300">{PERSONAL_INFO.title}</div>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                sound.toggle();
                setIsMuted(!sound.isEnabled());
              }}
              className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/10 flex items-center gap-2 cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
              <span>{isMuted ? 'Enable Sound Effects' : 'Mute Sound Effects'}</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                const themes: ThemeMode[] = ['cyberpunk', 'oled', 'corporate'];
                const next = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
                onThemeChange(next);
              }}
              className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/10 flex items-center gap-2 cursor-pointer"
            >
              <SunMoon className="w-4 h-4 text-amber-400" />
              <span>Theme: {currentTheme.toUpperCase()}</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onOpenApp('terminal');
                setShowMenu(false);
              }}
              className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/10 flex items-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-green-400" />
              <span>Launch Terminal</span>
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onOpenApp('system-health');
                setShowMenu(false);
              }}
              className="w-full text-left px-2.5 py-2 rounded-lg hover:bg-white/10 flex items-center gap-2 cursor-pointer"
            >
              <Activity className="w-4 h-4 text-cyan-400" />
              <span>DevOps Telemetry</span>
            </button>
          </div>
        )}
      </div>

      {/* Center-Right: Digital Clock and Date */}
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex flex-col items-end font-mono">
          <div className="text-base sm:text-lg font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            {time}
          </div>
          <div className="text-[11px] text-slate-400 font-medium">
            {date}
          </div>
        </div>

        {/* Far Right: Start 60s Tour Button */}
        <button
          onClick={() => {
            sound.playClick();
            onStartTour();
          }}
          className="group relative flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-purple-950/60 hover:bg-purple-900/80 border border-purple-500/60 hover:border-purple-400 text-white font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all duration-200 cursor-pointer active:scale-95"
        >
          <Rocket className="w-4 h-4 text-purple-300 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
          <span className="tracking-tight whitespace-nowrap">Start 60s Tour</span>
        </button>
      </div>
    </header>
  );
};
