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

const revenueData = [
  { month: 'Jan', revenue: 240000, target: 200000 },
  { month: 'Feb', revenue: 310000, target: 250000 },
  { month: 'Mar', revenue: 280000, target: 250000 },
  { month: 'Apr', revenue: 420000, target: 350000 },
  { month: 'May', revenue: 390000, target: 350000 },
  { month: 'Jun', revenue: 485000, target: 400000 },
  { month: 'Jul', revenue: 560000, target: 450000 },
];

const leadSourcesData = [
  { name: 'Contact Form', value: 45, color: '#FF6B00' },
  { name: 'Website Audit', value: 25, color: '#3B82F6' },
  { name: 'AI Chatbot', value: 15, color: '#10B981' },
  { name: 'Footer Popup', value: 10, color: '#8B5CF6' },
  { name: 'Direct/Other', value: 5, color: '#64748B' },
];

const trafficData = [
  { day: 'Mon', organic: 1200, paid: 400, referral: 300 },
  { day: 'Tue', organic: 1500, paid: 600, referral: 450 },
  { day: 'Wed', organic: 1800, paid: 750, referral: 500 },
  { day: 'Thu', organic: 1600, paid: 500, referral: 380 },
  { day: 'Fri', organic: 2100, paid: 900, referral: 620 },
  { day: 'Sat', organic: 1300, paid: 350, referral: 250 },
  { day: 'Sun', organic: 1100, paid: 200, referral: 200 },
];

const funnelData = [
  { value: 1000, name: 'Visitors', fill: '#3B82F6' },
  { value: 450, name: 'Form Views', fill: '#8B5CF6' },
  { value: 184, name: 'Leads Generated', fill: '#FF6B00' },
  { value: 92, name: 'Sales Contacted', fill: '#F59E0B' },
  { value: 42, name: 'Deals Closed', fill: '#10B981' },
];

const deviceData = [
  { name: 'Mobile', value: 58, fill: '#FF6B00' },
  { name: 'Desktop', value: 36, fill: '#3B82F6' },
  { name: 'Tablet', value: 6, fill: '#10B981' },
];

export default function AnalyticsCharts() {
  const [timeFilter, setTimeFilter] = useState('30 Days');

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
