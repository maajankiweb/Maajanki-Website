'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, UserPlus, UserCheck, TrendingUp, TrendingDown, Building2, 
  DollarSign, ListTodo, Clock, Plus, FileDown, Brain, ArrowRight, 
  CalendarDays, RefreshCw, Filter, MoreHorizontal, Eye, Edit, Phone 
} from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  Funnel, FunnelChart, LabelList 
} from 'recharts';

// --- DEMO DATA START ---
const leadsTrendData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  return {
    date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    total: Math.floor(Math.random() * 20) + 10,
    qualified: Math.floor(Math.random() * 10) + 2,
  };
});

const funnelData = [
  { name: 'All Leads', value: 1250, fill: '#042544' },
  { name: 'New', value: 850, fill: '#2563eb' },
  { name: 'Contacted', value: 600, fill: '#d97706' },
  { name: 'Qualified', value: 300, fill: '#FD6A02' },
  { name: 'Closed', value: 100, fill: '#16a34a' }
];

const sourceData = [
  { name: 'Google Ads', value: 45 },
  { name: 'Organic Search', value: 25 },
  { name: 'Website', value: 15 },
  { name: 'WhatsApp', value: 10 },
  { name: 'Referral', value: 3 },
  { name: 'Other', value: 2 }
];
const SOURCE_COLORS = ['#FD6A02', '#042544', '#2563eb', '#16a34a', '#d97706', '#94a3b8'];

const recentLeads = [
  { id: 1, name: 'Rahul Sharma', company: 'ABC Coaching', source: 'Google Ads', service: 'Web Development', status: 'New', created: '2 hours ago' },
  { id: 2, name: 'Priya Singh', company: 'Bihar Digital', source: 'Organic Search', service: 'SEO Services', status: 'Contacted', created: '5 hours ago' },
  { id: 3, name: 'Amit Kumar', company: 'Tech Startup', source: 'Website', service: 'Performance Marketing', status: 'Qualified', created: '1 day ago' },
  { id: 4, name: 'Neha Verma', company: 'Local Business', source: 'WhatsApp', service: 'Branding', status: 'Closed', created: '2 days ago' },
  { id: 5, name: 'Vikash Jha', company: 'E-Commerce Store', source: 'Referral', service: 'Web Development', status: 'New', created: '3 days ago' },
];
// --- DEMO DATA END ---

export default function DashboardOverview() {
  const [period, setPeriod] = useState('30 Days');
  const [greeting, setGreeting] = useState('Good morning');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'New': return 'admin-badge-new';
      case 'Contacted': return 'admin-badge-contacted';
      case 'Qualified': return 'admin-badge-qualified';
      case 'Closed': return 'admin-badge-closed';
      case 'Spam': return 'admin-badge-spam';
      default: return 'admin-badge-priority-low';
    }
  };

  return (
    <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* A) GREETING HEADER */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">{greeting}, Ashish</h1>
          <p className="admin-page-desc">Here's what's happening across MaaJanki Web Tech.</p>
        </div>
        <div className="admin-page-actions" style={{ display: 'flex', gap: '8px' }}>
          {['Today', '7 Days', '30 Days', '90 Days', 'Custom'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`admin-btn ${period === p ? 'admin-btn-primary' : 'admin-btn-outline'}`}
              style={{ fontSize: '13px', padding: '6px 12px' }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* B) KPI CARDS */}
      <div className="admin-grid admin-grid-4">
        {/* Card 1 */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Total Leads</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-info-light)', color: 'var(--color-info)' }}>
              <Users size={20} />
            </div>
          </div>
          <div className="kpi-card-value">47</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-trend up"><TrendingUp size={14} /> +12.3%</span>
            <span className="kpi-card-period">vs previous 30 days</span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">New Leads</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-success-light)', color: 'var(--color-success)' }}>
              <UserPlus size={20} />
            </div>
          </div>
          <div className="kpi-card-value">18</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-trend up"><TrendingUp size={14} /> +23.5%</span>
            <span className="kpi-card-period">vs previous 30 days</span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Qualified Leads</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
              <UserCheck size={20} />
            </div>
          </div>
          <div className="kpi-card-value">12</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-trend up"><TrendingUp size={14} /> +8.7%</span>
            <span className="kpi-card-period">vs previous 30 days</span>
          </div>
        </div>
        {/* Card 4 */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Conversion Rate</span>
            <div className="kpi-card-icon" style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed' }}>
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="kpi-card-value">25.5%</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-trend up"><TrendingUp size={14} /> +3.2%</span>
            <span className="kpi-card-period">vs previous 30 days</span>
          </div>
        </div>
        {/* Card 5 */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Active Customers</span>
            <div className="kpi-card-icon" style={{ background: 'rgba(8, 145, 178, 0.1)', color: '#0891b2' }}>
              <Building2 size={20} />
            </div>
          </div>
          <div className="kpi-card-value">23</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-trend up"><TrendingUp size={14} /> +4.5%</span>
            <span className="kpi-card-period">vs previous 30 days</span>
          </div>
        </div>
        {/* Card 6 */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Revenue</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-success-light)', color: 'var(--color-success)' }}>
              <DollarSign size={20} />
            </div>
          </div>
          <div className="kpi-card-value">₹4.8L</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-trend up"><TrendingUp size={14} /> +15.2%</span>
            <span className="kpi-card-period">vs previous 30 days</span>
          </div>
        </div>
        {/* Card 7 */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Open Tasks</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-warning-light)', color: 'var(--color-warning)' }}>
              <ListTodo size={20} />
            </div>
          </div>
          <div className="kpi-card-value">8</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-trend down"><TrendingDown size={14} /> -2</span>
            <span className="kpi-card-period">vs last week</span>
          </div>
        </div>
        {/* Card 8 */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Pending Follow-ups</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-danger-light)', color: 'var(--color-danger)' }}>
              <Clock size={20} />
            </div>
          </div>
          <div className="kpi-card-value">5</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-trend down" style={{ background: 'var(--color-warning-light)', color: 'var(--color-warning)' }}><TrendingUp size={14} /> +3</span>
            <span className="kpi-card-period">due this week</span>
          </div>
        </div>
      </div>

      {/* G) AI INSIGHT WIDGET */}
      <div className="admin-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
        <div className="admin-card-body" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ padding: '12px', background: 'var(--color-primary-light)', color: 'var(--color-primary)', borderRadius: '12px' }}>
            <Brain size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>AI INSIGHT</h3>
              <span className="admin-badge admin-badge-new" style={{ fontSize: '10px' }}>AI Generated</span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.5', margin: '0 0 12px 0' }}>
              Lead volume increased 23% this month. Google Ads is currently generating the highest number of qualified leads. Recommendation: Review the landing page conversion rate before increasing ad spend.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="admin-btn admin-btn-sm admin-btn-primary"><Brain size={14} /> Generate Insight</button>
              <button className="admin-btn admin-btn-sm admin-btn-outline"><RefreshCw size={14} /> Refresh</button>
              <button className="admin-btn admin-btn-sm admin-btn-ghost">View Details <ArrowRight size={14} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* C) CHARTS ROW */}
      <div className="admin-grid admin-grid-2">
        {/* Left: Lead Funnel */}
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <h3 className="admin-card-title">Lead Funnel</h3>
              <div className="admin-card-subtitle">Conversion tracking across stages</div>
            </div>
          </div>
          <div className="admin-card-body" style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <FunnelChart>
                <Tooltip wrapperStyle={{ borderRadius: '8px', overflow: 'hidden' }} contentStyle={{ border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                <Funnel dataKey="value" data={funnelData} isAnimationActive>
                  <LabelList position="right" fill="var(--color-text)" stroke="none" dataKey="name" />
                </Funnel>
              </FunnelChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Lead Sources */}
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <h3 className="admin-card-title">Lead Sources</h3>
              <div className="admin-card-subtitle">Distribution by acquisition channel</div>
            </div>
          </div>
          <div className="admin-card-body" style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={SOURCE_COLORS[index % SOURCE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip wrapperStyle={{ borderRadius: '8px', overflow: 'hidden' }} contentStyle={{ border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* D) LEADS TREND CHART */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Leads Trend</h3>
            <div className="admin-card-subtitle">Total vs Qualified leads over last 30 days</div>
          </div>
        </div>
        <div className="admin-card-body" style={{ height: '320px', padding: '24px 24px 0 0' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={leadsTrendData} margin={{ top: 5, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-light)" />
              <XAxis dataKey="date" stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }}
                cursor={{ stroke: 'var(--color-border)', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ top: -10, left: 20 }} />
              <Line type="monotone" name="Total Leads" dataKey="total" stroke="var(--color-secondary)" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
              <Line type="monotone" name="Qualified Leads" dataKey="qualified" stroke="var(--color-primary)" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* F) QUICK ACTIONS */}
      <div className="admin-card">
        <div className="admin-card-body" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button className="admin-btn admin-btn-outline"><Plus size={16} /> Add Lead</button>
          <button className="admin-btn admin-btn-outline"><Building2 size={16} /> Add Customer</button>
          <button className="admin-btn admin-btn-outline"><ListTodo size={16} /> Create Task</button>
          <button className="admin-btn admin-btn-outline"><Plus size={16} /> Add Portfolio Project</button>
          <button className="admin-btn admin-btn-outline"><Brain size={16} /> Generate AI Insight</button>
          <button className="admin-btn admin-btn-outline"><FileDown size={16} /> Create Report</button>
        </div>
      </div>

      {/* E) RECENT LEADS TABLE */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Recent Leads</h3>
            <div className="admin-card-subtitle">Latest prospects captured across all channels</div>
          </div>
          <button className="admin-btn admin-btn-outline admin-btn-sm">View All</button>
        </div>
        <div className="admin-table-wrap" style={{ border: 'none', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Source</th>
                <th>Service</th>
                <th>Status</th>
                <th>Created</th>
                <th className="admin-table-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentLeads.map((lead) => (
                <tr key={lead.id}>
                  <td style={{ fontWeight: '500' }}>{lead.name}</td>
                  <td>{lead.company}</td>
                  <td>{lead.source}</td>
                  <td>{lead.service}</td>
                  <td>
                    <span className={`admin-badge ${getStatusBadgeClass(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>{lead.created}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                      <button className="topbar-icon-btn" style={{ width: '28px', height: '28px' }} title="View">
                        <Eye size={14} />
                      </button>
                      <button className="topbar-icon-btn" style={{ width: '28px', height: '28px' }} title="Edit">
                        <Edit size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
