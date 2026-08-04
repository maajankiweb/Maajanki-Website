'use client';

import React from 'react';
import { Settings, Shield, Key, Bell, Database, Globe, UserCheck, Lock, Cpu } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-6">
      <div>
        <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <Settings className="w-5 h-5 text-orange-400" />
          Enterprise System Settings & Security
        </h3>
        <p className="text-xs text-slate-400">Configure global admin preferences, API webhooks, and database policies</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Branding & Appearance */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
            <Globe className="w-4 h-4" /> Branding & Localization
          </div>
          <div className="space-y-2 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Company Name</label>
              <input type="text" defaultValue="MaaJanki Web Tech" className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200" />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Primary Color Accent</label>
              <input type="text" defaultValue="#FF6B00" className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200" />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">Timezone</label>
              <select className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200">
                <option>(GMT+05:30) Asia/Kolkata (IST)</option>
                <option>(GMT+04:00) Asia/Dubai (GST)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security & Access */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
            <Shield className="w-4 h-4" /> Security & Clerk Auth Rules
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-300">Enforce 2-Factor Auth (2FA)</span>
              <input type="checkbox" defaultChecked className="accent-orange-500" />
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-300">Auto Session Timeout (15m)</span>
              <input type="checkbox" defaultChecked className="accent-orange-500" />
            </div>
            <div className="flex items-center justify-between p-2 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-slate-300">Allowed Email Patterns</span>
              <span className="text-[10px] font-mono text-orange-400">@maajankiwebtech.com</span>
            </div>
          </div>
        </div>

        {/* API & Webhooks */}
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Key className="w-4 h-4" /> MongoDB Atlas & Webhook Keys
          </div>
          <div className="space-y-2 text-xs">
            <div>
              <label className="text-slate-400 block mb-1">Live Endpoint API Secret</label>
              <input type="password" defaultValue="mj_live_sec_key_9948123" className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200" />
            </div>
            <div>
              <label className="text-slate-400 block mb-1">WhatsApp Lead Notification Webhook</label>
              <input type="text" defaultValue="https://api.maajankiwebtech.com/wh/leads" className="w-full p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-200" />
            </div>
            <button className="w-full py-2 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg transition-colors">
              Save Settings Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
