'use client';

import React from 'react';
import {
  Activity,
  UserCheck,
  FileUp,
  CreditCard,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock
} from 'lucide-react';

export default function ActivityFeed({ leads = [] }) {
  // Generate real activities from latest leads
  const activities = leads.slice(0, 5).map((item, idx) => ({
    id: item._id || idx,
    title: item.status ? `Lead Status: ${item.status.toUpperCase()}` : 'New Lead Received',
    description: `${item.name || 'Anonymous User'} (${item.email || 'No Email'}) submitted via ${item.source || 'Website Form'}.`,
    time: item.createdAt ? new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently',
    icon: Activity,
    color: item.status === 'closed'
      ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
      : item.status === 'qualified'
      ? 'text-blue-400 bg-blue-500/10 border-blue-500/30'
      : 'text-orange-400 bg-orange-500/10 border-orange-500/30',
  }));
  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-400" />
            Real-time Activity Timeline
          </h3>
          <p className="text-xs text-slate-400">Live operational log of leads, payments, and system events</p>
        </div>
        <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> Live Stream
        </span>
      </div>

      <div className="relative pl-6 border-l-2 border-slate-800 space-y-6 pt-2">
        {activities.length === 0 ? (
          <div className="p-4 text-xs text-slate-500 text-center">
            No recent activity recorded. New leads will automatically appear in this feed.
          </div>
        ) : (
          activities.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="relative group">
                {/* Dot Icon */}
                <div className={`absolute -left-[31px] top-0 p-1.5 rounded-full border bg-slate-900 ${item.color}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-all space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-slate-200">{item.title}</span>
                    <span className="text-[10px] text-slate-500">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-400">{item.description}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
