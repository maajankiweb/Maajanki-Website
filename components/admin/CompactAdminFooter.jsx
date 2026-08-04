'use client';

import React from 'react';

export default function CompactAdminFooter() {
  return (
    <footer className="mt-8 py-4 px-6 border-t border-slate-800/80 bg-slate-950/40 text-slate-400 text-xs flex flex-col sm:flex-row items-center justify-between gap-2">
      <div className="flex items-center gap-3">
        <span className="font-bold text-slate-300">MaaJanki Web Tech Admin</span>
        <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 text-[10px] font-mono font-bold border border-orange-500/20">
          v2.4.0-PROD
        </span>
        <span className="text-[11px] text-slate-500 hidden md:inline">
          Build #2026.08.04
        </span>
      </div>

      <div className="flex items-center gap-4 text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-slate-300 font-medium">MongoDB Atlas Online</span>
        </div>
        <span>&copy; {new Date().getFullYear()} MaaJanki Web Tech</span>
      </div>
    </footer>
  );
}
