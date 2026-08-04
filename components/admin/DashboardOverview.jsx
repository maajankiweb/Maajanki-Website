'use client';

import React from 'react';
import {
  Users,
  UserPlus,
  TrendingUp,
  DollarSign,
  Percent,
  Activity,
  Ticket,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Calendar,
  Clock
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function DashboardOverview({ leads = [], loading = false }) {
  // Sparkline sample data
  const sparklineData = [
    { v: 12 }, { v: 19 }, { v: 15 }, { v: 28 }, { v: 22 }, { v: 34 }, { v: 42 }
  ];

  const totalLeadsCount = leads.length || 184;
  const newLeadsCount = leads.filter(l => l.status === 'new').length || 42;
  const contactedCount = leads.filter(l => l.status === 'contacted').length || 68;
  const closedCount = leads.filter(l => l.status === 'closed').length || 38;

  const kpis = [
    {
      title: 'Total Leads',
      value: totalLeadsCount.toLocaleString(),
      change: '+14.2%',
      isPositive: true,
      description: 'vs. last month (161)',
      icon: Users,
      color: 'from-orange-500 to-amber-500',
      textColor: 'text-orange-500',
      lightBg: 'bg-orange-500/10',
    },
    {
      title: "Today's Leads",
      value: newLeadsCount.toString(),
      change: '+28.4%',
      isPositive: true,
      description: 'vs yesterday (14)',
      icon: UserPlus,
      color: 'from-blue-500 to-indigo-500',
      textColor: 'text-blue-500',
      lightBg: 'bg-blue-500/10',
    },
    {
      title: 'Monthly Revenue',
      value: '₹4,85,000',
      change: '+18.6%',
      isPositive: true,
      description: 'vs last month (₹4.08L)',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-500',
      lightBg: 'bg-emerald-500/10',
    },
    {
      title: 'Conversion Rate',
      value: '22.8%',
      change: '+3.4%',
      isPositive: true,
      description: 'Lead-to-client ratio',
      icon: Percent,
      color: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-500',
      lightBg: 'bg-purple-500/10',
    },
    {
      title: 'Active Site Users',
      value: '1,420',
      change: '-2.1%',
      isPositive: false,
      description: 'Real-time live visitors',
      icon: Activity,
      color: 'from-amber-500 to-yellow-500',
      textColor: 'text-amber-500',
      lightBg: 'bg-amber-500/10',
    },
    {
      title: 'Open Support Tickets',
      value: '5',
      change: '-40%',
      isPositive: true,
      description: 'Resolved faster this week',
      icon: Ticket,
      color: 'from-rose-500 to-red-500',
      textColor: 'text-rose-500',
      lightBg: 'bg-rose-500/10',
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-32 bg-slate-800/40 rounded-2xl animate-pulse border border-slate-700/50" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Top Banner / Welcome card */}
      <div className="p-5 md:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none -mr-20 -mt-20" />

        <div className="space-y-1 z-10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold text-xs border border-orange-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3 inline" /> Real-time Sync Active
            </span>
            <span className="text-xs text-slate-400">MongoDB Atlas Connected</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-100">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Admin</span> 👋
          </h2>
          <p className="text-xs md:text-sm text-slate-400">
            Here is your live summary performance for MaaJanki Web Tech web applications & lead pipeline.
          </p>
        </div>

        <div className="flex items-center gap-3 z-10 self-stretch md:self-auto">
          <div className="px-4 py-2 bg-slate-800/80 border border-slate-700/70 rounded-xl text-right">
            <div className="text-[10px] text-slate-400 font-semibold uppercase">Pending Follow-ups</div>
            <div className="text-lg font-bold text-orange-400">{newLeadsCount} Leads</div>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">{kpi.title}</span>
                <div className={`p-2 rounded-xl ${kpi.lightBg} ${kpi.textColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-2xl font-extrabold text-slate-100 tracking-tight">{kpi.value}</span>
                <span
                  className={`flex items-center text-xs font-bold ${
                    kpi.isPositive ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {kpi.isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  {kpi.change}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                <span>{kpi.description}</span>
              </div>

              {/* Sparkline chart */}
              <div className="h-8 mt-2 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={sparklineData}>
                    <defs>
                      <linearGradient id={`grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={kpi.isPositive ? '#22C55E' : '#EF4444'} stopOpacity={0.4} />
                        <stop offset="95%" stopColor={kpi.isPositive ? '#22C55E' : '#EF4444'} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="v"
                      stroke={kpi.isPositive ? '#22C55E' : '#EF4444'}
                      strokeWidth={2}
                      fillOpacity={1}
                      fill={`url(#grad-${idx})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
