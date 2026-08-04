'use client';

import React from 'react';
import { AlertTriangle, LogOut, X } from 'lucide-react';
import { useClerk } from '@clerk/nextjs';

export default function LogoutModal({ isOpen, onClose }) {
  const { signOut } = useClerk();

  if (!isOpen) return null;

  const handleConfirmLogout = async () => {
    // Clear tokens, session, local storage
    if (typeof window !== 'undefined') {
      localStorage.clear();
      sessionStorage.clear();
    }
    await signOut({ redirectUrl: '/' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-4 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-200">
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Confirm Sign Out</h3>
            <p className="text-xs text-slate-400">Are you sure you want to end your admin session?</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800 leading-relaxed">
          Signing out will invalidate your current session credentials and redirect you to the main public website.
        </p>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-slate-800 rounded-xl transition-colors border border-slate-700"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmLogout}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white rounded-xl shadow-lg shadow-rose-600/20 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Yes, Sign Out Now
          </button>
        </div>
      </div>
    </div>
  );
}
