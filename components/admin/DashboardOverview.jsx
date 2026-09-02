'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  Users, UserPlus, UserCheck, TrendingUp, TrendingDown, Building2, 
  DollarSign, ListTodo, Clock, Plus, FileDown, Brain, ArrowRight, 
  CalendarDays, RefreshCw, Filter, MoreHorizontal, Eye, Edit, Phone,
  Sparkles, CheckCircle2, Shield, Layers, FileSpreadsheet, Calendar,
  X, Check
} from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  Funnel, FunnelChart, LabelList 
} from 'recharts';

const SOURCE_COLORS = ['#FD6A02', '#042544', '#2563eb', '#16a34a', '#d97706', '#94a3b8'];

export default function DashboardOverview({ leads: propLeads }) {
  const [leads, setLeads] = useState(propLeads || []);
  const [loading, setLoading] = useState(!propLeads);
  const [period, setPeriod] = useState('30 Days');
  const [greeting, setGreeting] = useState('Good morning');
  const [refreshing, setRefreshing] = useState(false);
  const [lastSynced, setLastSynced] = useState(Date.now());
  const [syncSecondsAgo, setSyncSecondsAgo] = useState(0);

  // Custom date range state
  const [showCustomPicker, setShowCustomPicker] = useState(false);
  const [customStartDate, setCustomStartDate] = useState(
    new Date(Date.now() - 30 * 86400000).toISOString().slice(0, 10)
  );
  const [customEndDate, setCustomEndDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const fetchLiveLeads = async (isManual = false) => {
    if (isManual) setRefreshing(true);
    else setLoading(true);
    try {
      const res = await fetch('/api/admin/leads');
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
        setLastSynced(Date.now());
      }
    } catch (err) {
      console.error('Failed to fetch dashboard leads:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (propLeads) {
      setLeads(propLeads);
      setLastSynced(Date.now());
    } else {
      fetchLiveLeads();
    }
  }, [propLeads]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  // Update "synced X seconds ago" ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setSyncSecondsAgo(Math.floor((Date.now() - lastSynced) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [lastSynced]);

  // Filter leads dynamically based on selected date range
  const filteredLeads = useMemo(() => {
    const now = new Date();
    
    if (period === 'Today') {
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      return leads.filter(l => {
        const time = l.createdAt ? new Date(l.createdAt).getTime() : 0;
        return time >= startOfDay;
      });
    }

    if (period === '7 Days') {
      const threshold = now.getTime() - 7 * 86400000;
      return leads.filter(l => {
        const time = l.createdAt ? new Date(l.createdAt).getTime() : 0;
        return time >= threshold;
      });
    }

    if (period === '30 Days') {
      const threshold = now.getTime() - 30 * 86400000;
      return leads.filter(l => {
        const time = l.createdAt ? new Date(l.createdAt).getTime() : 0;
        return time >= threshold;
      });
    }

    if (period === '90 Days') {
      const threshold = now.getTime() - 90 * 86400000;
      return leads.filter(l => {
        const time = l.createdAt ? new Date(l.createdAt).getTime() : 0;
        return time >= threshold;
      });
    }

    if (period === 'Custom') {
      const start = new Date(customStartDate + 'T00:00:00').getTime();
      const end = new Date(customEndDate + 'T23:59:59').getTime();
      return leads.filter(l => {
        const time = l.createdAt ? new Date(l.createdAt).getTime() : 0;
        return time >= start && time <= end;
      });
    }

    return leads; // 'All Time'
  }, [leads, period, customStartDate, customEndDate]);

  // Compute live metrics from filtered database records
  const totalLeads = filteredLeads.length;
  const newLeads = filteredLeads.filter(l => (l.status || '').toLowerCase() === 'new').length;
  const contactedLeads = filteredLeads.filter(l => (l.status || '').toLowerCase() === 'contacted').length;
  const qualifiedLeads = filteredLeads.filter(l => (l.status || '').toLowerCase() === 'qualified').length;
  const closedLeads = filteredLeads.filter(l => (l.status || '').toLowerCase() === 'closed').length;
  const spamLeads = filteredLeads.filter(l => (l.status || '').toLowerCase() === 'spam').length;

  const conversionRate = totalLeads > 0 
    ? ((closedLeads / totalLeads) * 100).toFixed(1) + '%' 
    : '0.0%';

  const activeCustomers = closedLeads;
  const totalRevenue = closedLeads > 0 ? (closedLeads * 50000).toLocaleString('en-IN') : '0';

  // Dynamic Funnel Data from filtered leads
  const funnelData = useMemo(() => {
    if (totalLeads === 0) return [];
    return [
      { name: 'All Leads', value: totalLeads, fill: '#042544' },
      { name: 'New', value: newLeads, fill: '#2563eb' },
      { name: 'Contacted', value: contactedLeads, fill: '#d97706' },
      { name: 'Qualified', value: qualifiedLeads, fill: '#FD6A02' },
      { name: 'Closed', value: closedLeads, fill: '#16a34a' }
    ];
  }, [totalLeads, newLeads, contactedLeads, qualifiedLeads, closedLeads]);

  // Dynamic Lead Sources from filtered leads
  const sourceData = useMemo(() => {
    if (totalLeads === 0) return [];
    const counts = {};
    filteredLeads.forEach(l => {
      const src = l.source || 'Website Form';
      counts[src] = (counts[src] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [filteredLeads, totalLeads]);

  // Dynamic trend chart based on selected date range
  const trendData = useMemo(() => {
    const daysCount = period === 'Today' ? 1 : period === '7 Days' ? 7 : period === '90 Days' ? 90 : 30;
    const map = {};
    
    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      map[key] = { date: key, total: 0, qualified: 0 };
    }

    filteredLeads.forEach(lead => {
      if (lead.createdAt) {
        const leadDate = new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        if (map[leadDate]) {
          map[leadDate].total += 1;
          if ((lead.status || '').toLowerCase() === 'qualified' || (lead.status || '').toLowerCase() === 'closed') {
            map[leadDate].qualified += 1;
          }
        }
      }
    });

    return Object.values(map);
  }, [filteredLeads, period]);

  const recentLeads = useMemo(() => {
    return filteredLeads.slice(0, 5);
  }, [filteredLeads]);

  const getStatusBadgeClass = (status) => {
    switch ((status || '').toLowerCase()) {
      case 'new': return 'admin-badge-new';
      case 'contacted': return 'admin-badge-contacted';
      case 'qualified': return 'admin-badge-qualified';
      case 'closed': return 'admin-badge-closed';
      case 'spam': return 'admin-badge-spam';
      default: return 'admin-badge-priority-low';
    }
  };

  return (
    <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* A) GREETING HEADER */}
      <div className="admin-page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h1 className="admin-page-title" style={{ margin: 0 }}>{greeting}, Ashish</h1>
            {/* Real-time Live Badge */}
            <span className="admin-badge admin-badge-closed" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', padding: '2px 8px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', boxShadow: '0 0 6px #22c55e' }} />
              Live Sync
            </span>
          </div>
          <p className="admin-page-desc" style={{ margin: 0 }}>
            Real-time analytics from MongoDB Atlas. Synced {syncSecondsAgo === 0 ? 'just now' : `${syncSecondsAgo}s ago`}.
          </p>
        </div>

        {/* Date Filter Controls */}
        <div className="admin-page-actions" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => fetchLiveLeads(true)}
            disabled={refreshing}
            className="admin-btn admin-btn-outline"
            style={{ fontSize: '13px', padding: '6px 12px' }}
            title="Refresh database records"
          >
            <RefreshCw size={14} style={{ animation: refreshing ? 'spin 1s linear infinite' : 'none' }} />
            {refreshing ? 'Syncing...' : 'Sync Now'}
          </button>

          <div style={{ display: 'flex', gap: '4px', backgroundColor: 'var(--bg-card)', padding: '3px', borderRadius: 'var(--radius-md, 8px)', border: '1px solid var(--border-color, #e5e7eb)' }}>
            {['Today', '7 Days', '30 Days', '90 Days', 'All Time'].map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`admin-btn ${period === p ? 'admin-btn-primary' : 'admin-btn-ghost'}`}
                style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '6px', height: '28px' }}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => {
                setPeriod('Custom');
                setShowCustomPicker(true);
              }}
              className={`admin-btn ${period === 'Custom' ? 'admin-btn-primary' : 'admin-btn-ghost'}`}
              style={{ fontSize: '12px', padding: '4px 10px', borderRadius: '6px', height: '28px', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <Calendar size={12} />
              {period === 'Custom' ? `${customStartDate.slice(5)} to ${customEndDate.slice(5)}` : 'Custom'}
            </button>
          </div>
        </div>
      </div>

      {/* Custom Date Range Picker Modal / Dropdown */}
      {showCustomPicker && (
        <div className="admin-card" style={{ border: '1px solid var(--color-primary)', background: 'var(--bg-card)', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} style={{ color: 'var(--color-primary)' }} />
              <strong style={{ fontSize: '14px' }}>Select Custom Date Range</strong>
            </div>
            <button 
              onClick={() => setShowCustomPicker(false)}
              className="topbar-icon-btn"
              style={{ width: '24px', height: '24px' }}
            >
              <X size={14} />
            </button>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Start Date</label>
              <input
                type="date"
                value={customStartDate}
                onChange={(e) => setCustomStartDate(e.target.value)}
                className="admin-input"
                style={{ padding: '6px 10px', fontSize: '13px' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>End Date</label>
              <input
                type="date"
                value={customEndDate}
                onChange={(e) => setCustomEndDate(e.target.value)}
                className="admin-input"
                style={{ padding: '6px 10px', fontSize: '13px' }}
              />
            </div>

            <button
              onClick={() => {
                setPeriod('Custom');
                setShowCustomPicker(false);
              }}
              className="admin-btn admin-btn-primary"
              style={{ alignSelf: 'flex-end', fontSize: '13px', padding: '7px 14px' }}
            >
              <Check size={14} /> Apply Range
            </button>
          </div>
        </div>
      )}

      {/* B) KPI CARDS */}
      <div className="admin-grid admin-grid-4">
        {/* Card 1: Total Leads */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Total Leads ({period})</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-info-light)', color: 'var(--color-info)' }}>
              <Users size={20} />
            </div>
          </div>
          <div className="kpi-card-value">{totalLeads}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-period">{totalLeads > 0 ? `${totalLeads} in current range` : '0 in selected range'}</span>
          </div>
        </div>

        {/* Card 2: New Leads */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">New Leads</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-success-light)', color: 'var(--color-success)' }}>
              <UserPlus size={20} />
            </div>
          </div>
          <div className="kpi-card-value">{newLeads}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-period">{newLeads > 0 ? 'Awaiting initial contact' : 'Zero lead backlog'}</span>
          </div>
        </div>

        {/* Card 3: Qualified Leads */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Qualified Leads</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
              <UserCheck size={20} />
            </div>
          </div>
          <div className="kpi-card-value">{qualifiedLeads}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-period">High intent proposals</span>
          </div>
        </div>

        {/* Card 4: Conversion Rate */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Conversion Rate</span>
            <div className="kpi-card-icon" style={{ background: 'rgba(124, 58, 237, 0.1)', color: '#7c3aed' }}>
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="kpi-card-value">{conversionRate}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-period">Closed deals ratio</span>
          </div>
        </div>

        {/* Card 5: Active Customers */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Active Customers</span>
            <div className="kpi-card-icon" style={{ background: 'rgba(8, 145, 178, 0.1)', color: '#0891b2' }}>
              <Building2 size={20} />
            </div>
          </div>
          <div className="kpi-card-value">{activeCustomers}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-period">Converted client accounts</span>
          </div>
        </div>

        {/* Card 6: Contract Revenue */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Contracted Revenue</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-success-light)', color: 'var(--color-success)' }}>
              <DollarSign size={20} />
            </div>
          </div>
          <div className="kpi-card-value">₹{totalRevenue}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-period">{closedLeads} Won deals recorded</span>
          </div>
        </div>

        {/* Card 7: Open Tasks */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Open Tasks</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-warning-light)', color: 'var(--color-warning)' }}>
              <ListTodo size={20} />
            </div>
          </div>
          <div className="kpi-card-value">0</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-period">Ready for new sprint</span>
          </div>
        </div>

        {/* Card 8: Pending Follow-ups */}
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Pending Follow-ups</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-danger-light)', color: 'var(--color-danger)' }}>
              <Clock size={20} />
            </div>
          </div>
          <div className="kpi-card-value">{newLeads}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
            <span className="kpi-card-period">{newLeads > 0 ? `${newLeads} Action items` : 'Zero pending follow-ups'}</span>
          </div>
        </div>
      </div>

      {/* AI INSIGHT WIDGET */}
      <div className="admin-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
        <div className="admin-card-body" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ padding: '12px', background: 'var(--color-primary-light)', color: 'var(--color-primary)', borderRadius: '12px' }}>
            <Brain size={24} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>AI ENGINE STATUS</h3>
              <span className="admin-badge admin-badge-closed" style={{ fontSize: '10px' }}>
                <CheckCircle2 size={10} style={{ display: 'inline', marginRight: 2 }} /> Active
              </span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.5', margin: '0 0 12px 0' }}>
              {totalLeads > 0 
                ? `Active CRM monitoring (${period}): ${totalLeads} inquiries in this time window. ${newLeads} pending initial contact.`
                : `Active monitoring for ${period}: No inquiries recorded in this range. Inbound submissions from website forms will appear here instantly.`}
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/admin/agency-agents" className="admin-btn admin-btn-sm admin-btn-primary">
                <Brain size={14} /> Open AI Studio
              </Link>
              <Link href="/admin/ai-insights" className="admin-btn admin-btn-sm admin-btn-outline">
                <Sparkles size={14} /> GSC Rankings
              </Link>
              <Link href="/admin/forms/contact" className="admin-btn admin-btn-sm admin-btn-ghost">
                Forms Capture <ArrowRight size={14} />
              </Link>
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
              <h3 className="admin-card-title">Lead Funnel ({period})</h3>
              <div className="admin-card-subtitle">Conversion tracking across stages</div>
            </div>
          </div>
          <div className="admin-card-body" style={{ height: '300px' }}>
            {totalLeads === 0 ? (
              <div className="admin-empty-state" style={{ height: '100%', justifyContent: 'center' }}>
                <Layers className="admin-empty-state-icon" style={{ width: 32, height: 32 }} />
                <div className="admin-empty-state-title" style={{ fontSize: '14px' }}>No funnel data for {period}</div>
                <div className="admin-empty-state-desc" style={{ fontSize: '12px' }}>Inquiries will automatically build your conversion funnel.</div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <FunnelChart>
                  <Tooltip wrapperStyle={{ borderRadius: '8px', overflow: 'hidden' }} contentStyle={{ border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                  <Funnel dataKey="value" data={funnelData} isAnimationActive>
                    <LabelList position="right" fill="var(--color-text)" stroke="none" dataKey="name" />
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Right: Lead Sources */}
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <h3 className="admin-card-title">Lead Sources ({period})</h3>
              <div className="admin-card-subtitle">Distribution by acquisition channel</div>
            </div>
          </div>
          <div className="admin-card-body" style={{ height: '300px' }}>
            {totalLeads === 0 ? (
              <div className="admin-empty-state" style={{ height: '100%', justifyContent: 'center' }}>
                <FileSpreadsheet className="admin-empty-state-icon" style={{ width: 32, height: 32 }} />
                <div className="admin-empty-state-title" style={{ fontSize: '14px' }}>No lead sources for {period}</div>
                <div className="admin-empty-state-desc" style={{ fontSize: '12px' }}>Traffic channels will populate as forms are submitted.</div>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>

      {/* D) LEADS TREND CHART */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Leads Trend ({period})</h3>
            <div className="admin-card-subtitle">Live daily volume tracking</div>
          </div>
        </div>
        <div className="admin-card-body" style={{ height: '320px', padding: '24px 24px 0 0' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 5, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-light)" />
              <XAxis dataKey="date" stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} dx={-10} allowDecimals={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: 'var(--shadow-md)' }}
                cursor={{ stroke: 'var(--color-border)', strokeWidth: 1, strokeDasharray: '4 4' }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ top: -10, left: 20 }} />
              <Line type="monotone" name="Total Inquiries" dataKey="total" stroke="var(--color-secondary)" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
              <Line type="monotone" name="Qualified Deals" dataKey="qualified" stroke="var(--color-primary)" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* F) QUICK ACTIONS */}
      <div className="admin-card">
        <div className="admin-card-body" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/admin/all-leads" className="admin-btn admin-btn-outline"><Users size={16} /> Manage Leads</Link>
          <Link href="/admin/customers-crm" className="admin-btn admin-btn-outline"><Building2 size={16} /> Customers CRM</Link>
          <Link href="/admin/tasks-kanban" className="admin-btn admin-btn-outline"><ListTodo size={16} /> Tasks & Sprints</Link>
          <Link href="/admin/portfolio" className="admin-btn admin-btn-outline"><Plus size={16} /> Portfolio CMS</Link>
          <Link href="/admin/ai-insights" className="admin-btn admin-btn-outline"><Brain size={16} /> Search Intelligence</Link>
          <Link href="/admin/reports-exports" className="admin-btn admin-btn-outline"><FileDown size={16} /> Reports & Exports</Link>
        </div>
      </div>

      {/* E) RECENT LEADS TABLE */}
      <div className="admin-card">
        <div className="admin-card-header">
          <div>
            <h3 className="admin-card-title">Recent Leads ({period})</h3>
            <div className="admin-card-subtitle">Latest prospects captured across all channels</div>
          </div>
          <Link href="/admin/all-leads" className="admin-btn admin-btn-outline admin-btn-sm">View All Leads</Link>
        </div>
        <div className="admin-table-wrap" style={{ border: 'none', borderRadius: '0 0 var(--radius-lg) var(--radius-lg)' }}>
          {recentLeads.length === 0 ? (
            <div className="admin-empty-state" style={{ padding: '48px 24px' }}>
              <Users className="admin-empty-state-icon" style={{ width: 40, height: 40 }} />
              <div className="admin-empty-state-title">No leads found in this period</div>
              <div className="admin-empty-state-desc">
                When visitors submit forms on your website, inquiries will appear here in real time.
              </div>
            </div>
          ) : (
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
                  <tr key={lead._id || lead.id}>
                    <td style={{ fontWeight: '500' }}>{lead.name}</td>
                    <td>{lead.company || '—'}</td>
                    <td><span className="admin-badge admin-badge-new">{lead.source || 'Website'}</span></td>
                    <td>{lead.service || 'General Inquiry'}</td>
                    <td>
                      <span className={`admin-badge ${getStatusBadgeClass(lead.status)}`}>
                        {lead.status || 'New'}
                      </span>
                    </td>
                    <td style={{ color: 'var(--color-text-muted)', fontSize: '13px' }}>
                      {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'Recent'}
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                        <Link href="/admin/all-leads" className="topbar-icon-btn" style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="View">
                          <Eye size={14} />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

    </div>
  );
}
