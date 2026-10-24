'use client';

import React from 'react';
import { Terminal, Search, Activity, ClipboardList, Settings, Sparkles } from 'lucide-react';
import { AppId } from '@/types/os';
import { sound } from '@/lib/sound';

interface BottomDockProps {
  openApps: AppId[];
  activeAppId: AppId | null;
  onOpenApp: (id: AppId) => void;
  onOpenCommandPalette: () => void;
}

export const BottomDock: React.FC<BottomDockProps> = ({
  openApps,
  activeAppId,
  onOpenApp,
  onOpenCommandPalette,
}) => {
  const items = [
    {
      id: 'terminal' as AppId,
      label: 'Terminal',
      action: () => onOpenApp('terminal'),
      icon: <Terminal className="w-5 h-5 text-cyan-300" />,
    },
    {
      id: 'copilot' as AppId,
      label: 'AI Command',
      action: () => onOpenApp('copilot'),
      icon: (
        <div className="w-6 h-6 rounded-full border border-purple-400/80 flex items-center justify-center text-[10px] font-black text-purple-300 font-mono">
          AI
        </div>
      ),
    },
    {
      id: 'search',
      label: 'Search Workspace',
      action: () => onOpenCommandPalette(),
      icon: (
        <div className="relative">
          <Sparkles className="w-5 h-5 text-cyan-300" />
        </div>
      ),
    },
    {
      id: 'system-health' as AppId,
      label: 'System Monitor',
      action: () => onOpenApp('system-health'),
      icon: <Activity className="w-5 h-5 text-cyan-300" />,
    },
    {
      id: 'resume-studio' as AppId,
      label: 'Neural Clipboard',
      action: () => onOpenApp('resume-studio'),
      icon: <ClipboardList className="w-5 h-5 text-cyan-300" />,
    },
    {
      id: 'tech-radar' as AppId,
      label: 'Workflows',
      action: () => onOpenApp('tech-radar'),
      icon: <Settings className="w-5 h-5 text-purple-300" />,
    },
  ];

  return (
    <footer className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 max-w-full px-2">
      <nav
        aria-label="System Bottom Dock"
        className="flex items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2.5 rounded-2xl bg-slate-950/80 border border-purple-500/30 backdrop-blur-2xl shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-400/50 transition-all duration-300"
      >
        {items.map((item, idx) => {
          const isApp = item.id !== 'search';
          const isOpen = isApp && openApps.includes(item.id as AppId);
          const isActive = isApp && activeAppId === item.id;

          return (
            <button
              key={idx}
              onClick={() => {
                sound.playClick();
                item.action();
              }}
              className={`group flex flex-col items-center justify-center px-2 py-1 rounded-xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white/15 scale-105'
                  : 'hover:bg-white/10 hover:scale-105'
              }`}
            >
              <div className="relative flex items-center justify-center w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.7)] transition-all">
                {item.icon}
              </div>

              <span className="text-[10px] font-medium text-slate-300 group-hover:text-white mt-1 whitespace-nowrap tracking-tight">
                {item.label}
              </span>

              {/* Running indicator line */}
              <div className="h-1 w-full flex items-center justify-center mt-0.5">
                {isOpen && (
                  <span
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      isActive ? 'w-4 bg-cyan-400 shadow-[0_0_6px_#22d3ee]' : 'w-1.5 bg-white/50'
                    }`}
                  />
                )}
              </div>
            </button>
          );
        })}
      </nav>
    </footer>
  );
};
