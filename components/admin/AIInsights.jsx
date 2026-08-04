'use client';

import React from 'react';
import {
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Clock,
  Target,
  AlertTriangle,
  Bot
} from 'lucide-react';

export default function AIInsights({ leads = [] }) {
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === 'new' || !l.status).length;
  const closedLeads = leads.filter((l) => l.status === 'closed').length;

  const topSource = leads.length > 0
    ? Object.entries(
        leads.reduce((acc, l) => {
          const src = l.source || 'Website Form';
          acc[src] = (acc[src] || 0) + 1;
          return acc;
        }, {})
      ).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Website Form'
    : 'None';

  const insights = [
    {
      title: 'Top Performing Conversion Source',
      category: 'Channel Intelligence',
      score: `${totalLeads} Total Leads`,
      description: `The highest volume of inbound inquiries originates from ${topSource}. Recommend focusing ad spend and CTA optimization on this channel.`,
      action: 'Filter Channel Leads',
      color: 'border-orange-500/30 text-orange-400 bg-orange-500/10'
    },
    {
      title: 'Pending Follow-up Backlog',
      category: 'Lead Velocity',
      score: `${newLeads} Pending`,
      description: newLeads > 0
        ? `You have ${newLeads} new leads waiting for initial contact. Responding within 15 minutes increases conversion rates by up to 300%.`
        : 'All incoming leads have been reviewed or contacted. Great job maintaining zero backlog!',
      action: 'Review Pending Leads',
      color: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
    },
    {
      title: 'Conversion Pipeline Performance',
      category: 'Pipeline Health',
      score: `${closedLeads} Closed`,
      description: closedLeads > 0
        ? `Successfully converted ${closedLeads} leads into closed clients. Keep nurturing qualified leads in the outreach queue.`
        : 'No closed deals recorded yet. Move qualified leads to "Closed" status to track revenue conversions.',
      action: 'View Closed Deals',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
    },
  ];
  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Bot className="w-5 h-5 text-orange-400" />
            AI Smart Recommendations & Lead Intelligence
          </h3>
          <p className="text-xs text-slate-400">Automated predictions powered by MaaJanki AI Engine</p>
        </div>
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-orange-600 to-amber-500 text-white shadow-sm flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 inline" /> AI Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        {insights.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${item.color}`}>
                  {item.category}
                </span>
                <span className="text-xs font-bold text-orange-400">{item.score}</span>
              </div>
              <h4 className="font-bold text-slate-200 text-sm">{item.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </div>

            <button className="w-full py-2 px-3 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-center">
              {item.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
