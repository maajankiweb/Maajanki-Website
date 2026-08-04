'use client';

import React from 'react';
import {
  FileSpreadsheet,
  CheckCircle,
  Eye,
  MousePointerClick,
  TrendingUp,
  Percent,
  Download,
  Bot,
  Mail,
  PhoneCall,
  MessageSquare
} from 'lucide-react';

export default function WebsiteFormsAnalytics({ leads = [] }) {
  // Aggregate real lead submissions by form source
  const sourceCounts = leads.reduce((acc, lead) => {
    const src = lead.source || 'Contact Form';
    acc[src] = (acc[src] || 0) + 1;
    return acc;
  }, {});

  const formsList = [
    { name: 'Contact Form', sourceKey: 'Contact Form', icon: Mail, color: 'border-orange-500/30 text-orange-400 bg-orange-500/10' },
    { name: 'Website Audit Form', sourceKey: 'Website Audit', icon: FileSpreadsheet, color: 'border-blue-500/30 text-blue-400 bg-blue-500/10' },
    { name: 'AI Chatbot', sourceKey: 'AI Chatbot', icon: Bot, color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' },
    { name: 'Footer Popup', sourceKey: 'Footer Popup', icon: MessageSquare, color: 'border-purple-500/30 text-purple-400 bg-purple-500/10' },
    { name: 'Brochure PDF Download', sourceKey: 'Brochure Download', icon: Download, color: 'border-amber-500/30 text-amber-400 bg-amber-500/10' },
    { name: 'Callback Request', sourceKey: 'Callback Request', icon: PhoneCall, color: 'border-rose-500/30 text-rose-400 bg-rose-500/10' },
  ];

  const totalLeadsCount = leads.length;

  const formMetrics = formsList.map((form) => {
    const submissions = sourceCounts[form.sourceKey] || 0;
    const conversion = totalLeadsCount > 0
      ? `${((submissions / totalLeadsCount) * 100).toFixed(1)}%`
      : '0%';
    const status = submissions > 0 ? 'Active' : 'Idle';

    return {
      name: form.name,
      icon: form.icon,
      submissions,
      conversion,
      status,
      color: form.color,
    };
  });
  return (
    <div className="space-y-6">
      <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-orange-400" />
              Website Forms & Conversion Funnel Analytics
            </h3>
            <p className="text-xs text-slate-400">Detailed metric breakdown across all 8 live MaaJanki capture forms</p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 rounded-xl transition-colors self-start sm:self-auto">
            <Download className="w-4 h-4 text-orange-400" />
            Export Form Report
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {formMetrics.map((form, idx) => {
            const Icon = form.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-lg ${form.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-slate-200">{form.name}</span>
                  </div>
                  <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${form.color}`}>
                    {form.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Submissions</span>
                    <strong className="text-orange-400 text-sm font-extrabold">{form.submissions}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Share of Total</span>
                    <strong className="text-emerald-400 text-sm font-extrabold">{form.conversion}</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
