'use client';

import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  FunnelChart,
  Funnel,
  LabelList,
  RadialBarChart,
  RadialBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { Maximize2, Download, RefreshCw, Filter } from 'lucide-react';

export default function AnalyticsCharts({ leads = [] }) {
  const [timeFilter, setTimeFilter] = useState('30 Days');

  // Compute lead sources dynamically from real leads data
  const sourceCounts = leads.reduce((acc, lead) => {
    const src = lead.source || 'Website Form';
    acc[src] = (acc[src] || 0) + 1;
    return acc;
  }, {});

  const totalLeads = leads.length;

  const leadSourcesColors = {
    'Contact Form': '#FF6B00',
    'Audit Form': '#3B82F6',
    'AI Chatbot': '#10B981',
    'Footer Popup': '#8B5CF6',
    'Brochure Download': '#F59E0B',
    'Callback Request': '#EC4899',
    'Website Form': '#64748B',
  };

  const leadSourcesData = Object.entries(sourceCounts).map(([name, count]) => ({
    name,
    value: count,
    percentage: totalLeads > 0 ? Math.round((count / totalLeads) * 100) : 0,
    color: leadSourcesColors[name] || '#FF6B00',
  }));

  // If no leads, show clean empty state
  if (leadSourcesData.length === 0) {
    leadSourcesData.push({ name: 'No Leads Yet', value: 1, percentage: 0, color: '#334155' });
  }

  // Dynamic funnel from actual lead statuses
  const newCount = leads.filter((l) => l.status === 'new' || !l.status).length;
  const contactedCount = leads.filter((l) => l.status === 'contacted').length;
  const qualifiedCount = leads.filter((l) => l.status === 'qualified').length;
  const closedCount = leads.filter((l) => l.status === 'closed').length;

  const funnelData = [
    { value: totalLeads, name: 'Total Leads Captured', fill: '#FF6B00' },
    { value: newCount, name: 'New (Pending Follow-up)', fill: '#3B82F6' },
    { value: contactedCount, name: 'Contacted / In Outreach', fill: '#F59E0B' },
    { value: qualifiedCount, name: 'Qualified Prospects', fill: '#8B5CF6' },
    { value: closedCount, name: 'Deals Closed / Converted', fill: '#10B981' },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl shadow-xl text-xs space-y-1">
          <p className="font-bold text-slate-200">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="font-semibold">
              {entry.name}: {typeof entry.value === 'number' && entry.name.toLowerCase().includes('revenue') ? `₹${entry.value.toLocaleString()}` : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Time Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-slate-900 border border-slate-800 rounded-2xl">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-orange-400" />
          <span className="text-xs font-bold text-slate-300">Analytics Range:</span>
        </div>
        <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
          {['Today', '7 Days', '30 Days', '90 Days', '1 Year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeFilter(range)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                timeFilter === range
                  ? 'bg-orange-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Row 1: Revenue Line & Lead Sources Pie */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Revenue Chart (2 cols) */}
        <div className="lg:col-span-2 p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-100">Revenue Trends & Growth</h3>
              <p className="text-xs text-slate-400">Monthly gross sales vs target projections</p>
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg">
              <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#FF6B00" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="month" stroke="#64748B" fontSize={12} />
                <YAxis stroke="#64748B" fontSize={12} tickFormatter={(v) => `₹${v / 1000}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Area type="monotone" dataKey="revenue" name="Actual Revenue" stroke="#FF6B00" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                <Line type="monotone" dataKey="target" name="Target Goal" stroke="#38BDF8" strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Sources Donut Chart */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-100">Lead Source Distribution</h3>
            <p className="text-xs text-slate-400">Inbound channel performance</p>
          </div>

          <div className="h-60 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {leadSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {leadSourcesData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-slate-300 truncate">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Traffic Stacked Bar & Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stacked Traffic Chart */}
        <div className="lg:col-span-2 p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-100">Weekly Traffic Breakdown</h3>
              <p className="text-xs text-slate-400">Organic SEO, Google Ads & Referrals</p>
            </div>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                <XAxis dataKey="day" stroke="#64748B" fontSize={12} />
                <YAxis stroke="#64748B" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="organic" name="Organic SEO" stackId="a" fill="#FF6B00" radius={[0, 0, 4, 4]} />
                <Bar dataKey="paid" name="Google Ads" stackId="a" fill="#3B82F6" />
                <Bar dataKey="referral" name="Social/Referral" stackId="a" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Funnel & Device breakdown */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
          <div>
            <h3 className="text-base font-bold text-slate-100">Conversion Funnel</h3>
            <p className="text-xs text-slate-400">Visitor to Deal conversion flow</p>
          </div>

          <div className="space-y-3 pt-2">
            {funnelData.map((step, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">{step.name}</span>
                  <span className="text-orange-400">{step.value}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${(step.value / funnelData[0].value) * 100}%`,
                      backgroundColor: step.fill,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
