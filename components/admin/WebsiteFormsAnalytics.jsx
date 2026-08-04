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

const formMetrics = [
  {
    name: 'Contact Page Form',
    icon: Mail,
    views: 4850,
    submissions: 184,
    conversion: '3.79%',
    bounce: '42%',
    status: 'Optimal',
    color: 'border-orange-500/30 text-orange-400 bg-orange-500/10'
  },
  {
    name: 'Free Website Audit Form',
    icon: FileSpreadsheet,
    views: 3120,
    submissions: 142,
    conversion: '4.55%',
    bounce: '38%',
    status: 'High Performer',
    color: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
  },
  {
    name: 'AI Chatbot Integration',
    icon: Bot,
    views: 6400,
    submissions: 295,
    conversion: '4.61%',
    bounce: '25%',
    status: 'Top Lead Driver',
    color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
  },
  {
    name: 'Footer Quote Popup',
    icon: MessageSquare,
    views: 8900,
    submissions: 98,
    conversion: '1.10%',
    bounce: '68%',
    status: 'Average',
    color: 'border-purple-500/30 text-purple-400 bg-purple-500/10'
  },
  {
    name: 'Brochure PDF Download',
    icon: Download,
    views: 1850,
    submissions: 124,
    conversion: '6.70%',
    bounce: '18%',
    status: 'Exceptional',
    color: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
  },
  {
    name: 'Callback Request',
    icon: PhoneCall,
    views: 2400,
    submissions: 65,
    conversion: '2.70%',
    bounce: '51%',
    status: 'Needs A/B Test',
    color: 'border-rose-500/30 text-rose-400 bg-rose-500/10'
  },
];

export default function WebsiteFormsAnalytics() {
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
                    <span className="text-slate-400 block text-[10px]">Total Impressions</span>
                    <strong className="text-slate-200 text-sm font-extrabold">{form.views.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Submissions</span>
                    <strong className="text-orange-400 text-sm font-extrabold">{form.submissions}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Conversion Rate</span>
                    <strong className="text-emerald-400 text-sm font-extrabold">{form.conversion}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Drop-off / Bounce</span>
                    <strong className="text-slate-400 text-sm font-extrabold">{form.bounce}</strong>
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
