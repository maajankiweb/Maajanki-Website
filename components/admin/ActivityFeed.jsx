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

const activities = [
  {
    id: 1,
    title: 'New High Priority Lead',
    description: 'Vikram Sharma submitted Website Audit Form for digital marketing.',
    time: '5 mins ago',
    icon: Activity,
    color: 'text-orange-400 bg-orange-500/10 border-orange-500/30'
  },
  {
    id: 2,
    title: 'Status Updated to Closed',
    description: 'Lead #MJ-402 (Ananya Roy - E-Commerce App) status updated to Closed.',
    time: '25 mins ago',
    icon: UserCheck,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
  },
  {
    id: 3,
    title: 'Payment Received',
    description: 'Received ₹75,000 milestone payment for Project Redesign.',
    time: '1 hour ago',
    icon: CreditCard,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/30'
  },
  {
    id: 4,
    title: 'Brochure Downloaded',
    description: 'Corporate PDF Brochure downloaded by info@techcorp.in',
    time: '2 hours ago',
    icon: FileUp,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
  },
  {
    id: 5,
    title: 'New AI Chatbot Lead',
    description: 'AI Chatbot qualified lead asking about Custom CRM integrations.',
    time: '3 hours ago',
    icon: MessageSquare,
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/30'
  },
];

export default function ActivityFeed() {
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
        {activities.map((item) => {
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
        })}
      </div>
    </div>
  );
}
