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

const insights = [
  {
    title: 'High Conversion Window Detected',
    category: 'Optimization',
    score: '94% Probability',
    description: 'Leads submitting audit requests between 10:00 AM - 1:00 PM IST convert 3.2x faster. Recommend scheduling automated outreach calls during this window.',
    action: 'Schedule Auto-Call',
    color: 'border-orange-500/30 text-orange-400 bg-orange-500/10'
  },
  {
    title: 'Spam Pattern Mitigated',
    category: 'Security & Spam',
    score: '99.8% Accuracy',
    description: 'AI Filter automatically isolated 14 promotional spam submissions matching known SEO spam link backlists without polluting the main CRM.',
    action: 'View Isolated Leads',
    color: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
  },
  {
    title: 'Upsell Opportunity: E-Commerce Services',
    category: 'Revenue Predictor',
    score: '88% Score',
    description: '3 leads requesting website redesigns have existing Shopify/WooCommerce stores. Potential cross-sell value: ₹1,80,000.',
    action: 'View Qualified Leads',
    color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
  },
];

export default function AIInsights() {
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
