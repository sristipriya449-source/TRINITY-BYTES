import React from 'react';
import { BrainCircuit, Sparkles, Circle } from 'lucide-react';

function Navbar({ title = 'Operational Intelligence' }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
            <BrainCircuit className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-400">
              OrgMind Nexus
            </p>
            <h1 className="truncate text-sm font-semibold text-white sm:text-base">
              {title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 sm:flex">
            <Circle className="h-2.5 w-2.5 fill-emerald-400 text-emerald-400" />
            AI Engine Active
          </div>

          <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="hidden sm:inline">Live Insights</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
