'use client';

import React, { useState } from 'react';
import {
  Search,
  Bell,
  Sun,
  Moon,
  Plus,
  FileDown,
  UserPlus,
  Globe,
  ChevronDown,
  Menu,
  Shield,
  User,
  Radio,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { UserButton, useUser } from '@clerk/nextjs';

export default function AdminHeader({
  darkMode,
  setDarkMode,
  setMobileOpen,
  searchTerm,
  setSearchTerm,
  onLogoutClick,
  unreadNotificationsCount = 0,
  onOpenNotifications,
  liveSync = true,
  setLiveSync = () => {},
  soundEnabled = true,
  setSoundEnabled = () => {},
}) {
  const { user } = useUser();
  const [lang, setLang] = useState('EN');
  const [showQuickActions, setShowQuickActions] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-6 bg-slate-900/95 backdrop-blur border-b border-slate-800 text-slate-100 transition-colors">
      {/* Left: Mobile Menu Toggle & Search Bar */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-slate-400 hover:text-slate-100 rounded-lg lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search leads, customers, projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-800/80 border border-slate-700/60 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
          />
        </div>
      </div>

      {/* Right Action Icons & User Dropdown */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Real-Time Live Sync Badge Indicator */}
        <button
          onClick={() => setLiveSync(!liveSync)}
          className={`hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-lg border transition-all ${
            liveSync
              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/20'
              : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
          }`}
          title="Toggle Real-Time Live Background Sync"
        >
          <span className={`w-2 h-2 rounded-full ${liveSync ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
          <Radio className="w-3.5 h-3.5" />
          <span>{liveSync ? 'LIVE SYNC ON' : 'PAUSED'}</span>
        </button>

        {/* Real-Time Sound Alert Toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-xl transition-colors hidden sm:block"
          title={soundEnabled ? 'Mute Lead Sound Alert' : 'Enable Lead Sound Alert'}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
        </button>

        {/* Quick Actions Dropdown */}
        <div className="relative hidden sm:block">
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white rounded-lg shadow-sm shadow-orange-500/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Quick Action</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-80" />
          </button>

          {showQuickActions && (
            <div
              className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-xl py-1 z-50 animate-in fade-in zoom-in-95"
              onClick={() => setShowQuickActions(false)}
            >
              <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700/60 text-left">
                <UserPlus className="w-4 h-4 text-orange-400" />
                <span>Create Lead</span>
              </button>
              <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700/60 text-left">
                <User className="w-4 h-4 text-blue-400" />
                <span>Add Team User</span>
              </button>
              <button className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700/60 text-left">
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span>Generate Report</span>
              </button>
            </div>
          )}
        </div>

        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-xl transition-colors"
          title="Toggle Dark / Light Theme"
        >
          {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-300" />}
        </button>

        {/* Notifications */}
        <button
          onClick={onOpenNotifications}
          className="relative p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-xl transition-colors"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          {unreadNotificationsCount > 0 && (
            <span className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[18px] h-4 px-1 bg-orange-600 text-white font-bold text-[10px] rounded-full border-2 border-slate-900">
              {unreadNotificationsCount}
            </span>
          )}
        </button>

        {/* Language Switcher */}
        <button
          onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')}
          className="hidden md:flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700/50"
        >
          <Globe className="w-3.5 h-3.5 text-orange-400" />
          <span>{lang}</span>
        </button>

        <div className="h-6 w-px bg-slate-800 mx-1 hidden sm:block" />

        {/* Clerk User Button & Details */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-bold text-slate-100 truncate max-w-[120px]">
              {user?.fullName || user?.primaryEmailAddress?.emailAddress?.split('@')[0] || 'Admin User'}
            </span>
            <span className="text-[10px] text-orange-400 font-semibold flex items-center justify-end gap-1">
              <Shield className="w-3 h-3 inline" /> Super Admin
            </span>
          </div>

          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'w-9 h-9 border-2 border-orange-500/50 hover:border-orange-500 transition-colors',
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
