'use client';

import React from 'react';
import { Sparkles, Code2, Calendar, ArrowRight } from 'lucide-react';
import { AppId } from '@/types/os';
import { sound } from '@/lib/sound';

interface RightWidgetStackProps {
  onOpenApp: (id: AppId) => void;
  onStartTour: () => void;
}

export const RightWidgetStack: React.FC<RightWidgetStackProps> = ({
  onOpenApp,
  onStartTour,
}) => {
  return (
    <aside className="relative z-30 flex flex-col gap-3 w-56">
      {/* Widget 1: Note for Recruiters */}
      <div
        onClick={() => {
          sound.playOpen();
          onStartTour();
        }}
        className="group p-3.5 rounded-2xl bg-slate-950/70 border border-purple-500/30 hover:border-purple-400/70 backdrop-blur-2xl shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="w-4 h-4 text-purple-300 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xs font-semibold text-white tracking-tight">
            Note for Recruiters
          </span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed font-sans mb-3">
          I build systems that scale ideas and solve real problems.
        </p>
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
          <span>Tap to open</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Widget 2: Engineering Core */}
      <div
        onClick={() => {
          sound.playOpen();
          onOpenApp('tech-radar');
        }}
        className="group p-3.5 rounded-2xl bg-slate-950/70 border border-cyan-500/30 hover:border-cyan-400/70 backdrop-blur-2xl shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <Code2 className="w-4 h-4 text-cyan-300 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs font-semibold text-white tracking-tight">
            Engineering Core
          </span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed font-sans mb-3">
          Clean Code. Scalable Systems. Impact First.
        </p>
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
          <span>Tap to open</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Widget 3: Discovery Call */}
      <div
        onClick={() => {
          sound.playOpen();
          onOpenApp('contact');
        }}
        className="group p-3.5 rounded-2xl bg-slate-950/70 border border-purple-500/30 hover:border-purple-400/70 backdrop-blur-2xl shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <Calendar className="w-4 h-4 text-purple-300 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs font-semibold text-white tracking-tight">
            Discovery Call
          </span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed font-sans mb-3">
          Let&apos;s build something meaningful together.
        </p>
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
          <span>Tap to open</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </aside>
  );
};
