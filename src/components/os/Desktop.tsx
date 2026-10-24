'use client';

import React, { useState } from 'react';
import { 
  Terminal, 
  Bot, 
  FileText, 
  SunMoon, 
  Volume2
} from 'lucide-react';
import { AppId, ThemeMode } from '@/types/os';
import { sound } from '@/lib/sound';
import { BackgroundCanvas } from '@/components/os/BackgroundCanvas';
import { LeftDock } from '@/components/os/LeftDock';
import { HologramStage } from '@/components/os/HologramStage';
import { RightWidgetStack } from '@/components/os/RightWidgetStack';

interface DesktopProps {
  onOpenApp: (id: AppId) => void;
  onThemeChange: (theme: ThemeMode) => void;
  activeAppId: AppId | null;
  onStartTour: () => void;
}

export const Desktop: React.FC<DesktopProps> = ({
  onOpenApp,
  onThemeChange,
  activeAppId,
  onStartTour,
}) => {
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    sound.playClick();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  const closeContextMenu = () => {
    if (contextMenu) setContextMenu(null);
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={closeContextMenu}
      className="relative flex-1 w-full h-[calc(100vh-4.5rem)] px-4 sm:px-6 pt-2 pb-16 overflow-y-auto lg:overflow-hidden select-none flex flex-col justify-between"
    >
      {/* 1. Deep Space & Twinkling Nebula Starfield Canvas */}
      <BackgroundCanvas />

      {/* 2. Main Neural Workspace Hero Area: Left Dock + Center 3D Holograms + Right Widgets */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between gap-4 w-full h-full max-w-7xl mx-auto">
        {/* Left Vertical App Pill */}
        <div className="hidden md:flex flex-shrink-0">
          <LeftDock onOpenApp={onOpenApp} activeAppId={activeAppId} />
        </div>

        {/* Center: 3 Holographic Project Cards + Pedestal Projectors */}
        <HologramStage onOpenApp={onOpenApp} />

        {/* Right: 3 Glass Widgets */}
        <div className="hidden xl:flex flex-shrink-0">
          <RightWidgetStack onOpenApp={onOpenApp} onStartTour={onStartTour} />
        </div>
      </div>

      {/* Right Click Context Menu */}
      {contextMenu && (
        <div
          style={{ top: contextMenu.y, left: contextMenu.x }}
          className="fixed z-50 w-52 rounded-xl bg-slate-950/95 border border-purple-500/40 p-1.5 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 text-xs text-slate-200 font-sans"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => {
              sound.playClick();
              onOpenApp('terminal');
              closeContextMenu();
            }}
            className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-white/10 flex items-center gap-2 cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-green-400" />
            <span>Launch CLI Terminal</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              onOpenApp('copilot');
              closeContextMenu();
            }}
            className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-white/10 flex items-center gap-2 cursor-pointer"
          >
            <Bot className="w-3.5 h-3.5 text-violet-400" />
            <span>Ask Portfolio Copilot</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              onOpenApp('resume-studio');
              closeContextMenu();
            }}
            className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-white/10 flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>ATS Resume Studio</span>
          </button>
          <div className="border-t border-white/10 my-1" />
          <button
            onClick={() => {
              sound.playClick();
              onThemeChange('cyberpunk');
              closeContextMenu();
            }}
            className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-white/10 flex items-center gap-2 cursor-pointer"
          >
            <SunMoon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Theme: Cyberpunk</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              sound.toggle();
              closeContextMenu();
            }}
            className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-white/10 flex items-center gap-2 cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Toggle SFX</span>
          </button>
        </div>
      )}
    </div>
  );
};
