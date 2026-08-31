'use client';

import React, { useState, useMemo } from 'react';
import {
  Building2,
  Search,
  Filter,
  Mail,
  Phone,
  ExternalLink,
  ShieldCheck,
  DollarSign,
  Tag,
  UserPlus,
  ArrowUpRight,
  User,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  Plus,
  Download,
  Eye,
  FileText
} from 'lucide-react';

const TABS = [
  { id: 'customers', label: 'All Customers' },
  { id: 'companies', label: 'Companies' },
  { id: 'deals', label: 'Deals & Pipeline' },
  { id: 'activities', label: 'Activities & Touchpoints' },
];

export default function CustomersCRM({ leads = [] }) {
  const [activeTab, setActiveTab] = useState('customers');
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('all');
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Derive CRM customer records from leads or sample database records
  const customerList = useMemo(() => {
    if (leads && leads.length > 0) {
      return leads.map((l, idx) => ({
        id: l._id || `cust-${idx}`,
        name: l.name || 'Enterprise Client',
        company: l.company || `${l.name ? l.name.split(' ')[0] : 'Client'} Enterprises`,
        email: l.email || 'client@company.in',
        phone: l.phone || '+91 98000 00000',
        service: l.service || 'Web Development & SEO',
        status: l.status || 'New',
        dealValue: l.status === 'Closed' || l.status === 'closed' ? 150000 : l.status === 'Qualified' || l.status === 'qualified' ? 75000 : 25000,
        tier: (l.status || '').toLowerCase() === 'closed' ? 'VIP Enterprise' : (l.status || '').toLowerCase() === 'qualified' ? 'Growth Client' : 'Prospect',
        createdAt: l.createdAt || new Date().toISOString(),
        notes: l.message || 'Client inquired via website form for customized digital solutions.',
      }));
    }

    // Realistic demo CRM accounts
    return [
      {
        id: 'cust-1',
        name: 'Ashok Singhania',
        company: 'Singhania Logistics Ltd.',
        email: 'ashok@singhanialogistics.com',
        phone: '+91 98350 44556',
        service: 'Next.js Custom SaaS & ERP',
        status: 'Closed',
        dealValue: 240000,
        tier: 'VIP Enterprise',
        createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
        notes: 'Signed 12-month enterprise SaaS development & cloud hosting contract.',
      },
      {
        id: 'cust-2',
        name: 'Dr. Manish Jha',
        company: 'Patliputra Diagnostics Hub',
        email: 'drjha@patliputradiagnostics.in',
        phone: '+91 94312 88990',
        service: 'Local SEO & Google Ads',
        status: 'Qualified',
        dealValue: 85000,
        tier: 'Growth Client',
        createdAt: new Date(Date.now() - 86400000 * 12).toISOString(),
        notes: 'Monthly retainer for high-intent medical clinic lead generation across Bihar.',
      },
      {
        id: 'cust-3',
        name: 'Ritu Agarwal',
        company: 'Agarwal Sarees & Silks',
        email: 'ritu@agarwalsarees.com',
        phone: '+91 91223 34455',
        service: 'InvoBill GST Billing Software',
        status: 'Closed',
        dealValue: 45000,
        tier: 'VIP Enterprise',
        createdAt: new Date(Date.now() - 86400000 * 20).toISOString(),
        notes: '3-store license for InvoBill GST invoicing and thermal printer setup.',
      },
      {
        id: 'cust-4',
        name: 'Deepak Choudhary',
        company: 'Champaran Agrotech Co.',
        email: 'deepak@champaranagro.in',
        phone: '+91 97711 22334',
        service: 'E-Commerce Website Development',
        status: 'Contacted',
        dealValue: 60000,
        tier: 'Prospect',
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        notes: 'Requested proposal for B2B agricultural equipment product listing.',
      },
      {
        id: 'cust-5',
        name: 'Kavita Mishra',
        company: 'Mishra Academy & Coaching',
        email: 'kavita@mishraacademy.org',
        phone: '+91 90065 11223',
        service: 'Branding & Social Media (SMO)',
        status: 'Qualified',
        dealValue: 50000,
        tier: 'Growth Client',
        createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
        notes: 'Looking for full Instagram & YouTube branding and digital lead funnels.',
      }
    ];
  }, [leads]);

  const filteredCustomers = useMemo(() => {
    return customerList.filter(c => {
      const q = searchTerm.toLowerCase();
      const matchesSearch = !q ||
        c.name.toLowerCase().includes(q) ||
        c.company.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.service.toLowerCase().includes(q);

      const matchesTier = tierFilter === 'all' || c.tier.toLowerCase().includes(tierFilter.toLowerCase());
      return matchesSearch && matchesTier;
    });
  }, [customerList, searchTerm, tierFilter]);

  const totalClosedValue = customerList
    .filter(c => c.tier === 'VIP Enterprise')
    .reduce((sum, c) => sum + c.dealValue, 0);

  const totalPipelineValue = customerList.reduce((sum, c) => sum + c.dealValue, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
            <span className="admin-badge admin-badge-qualified">
              <Building2 style={{ width: 12, height: 12 }} /> Enterprise CRM
            </span>
          </div>
          <h1 className="admin-page-title">Client Accounts & Deal Pipeline</h1>
          <p className="admin-page-desc">
            Manage customer accounts, contract values, project deliverables, and communications
          </p>
        </div>
        <div className="admin-page-actions">
          <button
            onClick={() => {
              const headers = ['Account ID', 'Client Name', 'Company', 'Email', 'Phone', 'Service', 'Tier', 'Deal Value'];
              const rows = filteredCustomers.map(c => [
                c.id,
                `"${c.name}"`,
                `"${c.company}"`,
                `"${c.email}"`,
                `"${c.phone}"`,
                `"${c.service}"`,
                `"${c.tier}"`,
                `"₹${c.dealValue.toLocaleString('en-IN')}"`
              ]);
              const csv = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
              const link = document.createElement('a');
              link.href = encodeURI(csv);
              link.download = `maajanki_crm_clients_${new Date().toISOString().slice(0, 10)}.csv`;
              link.click();
            }}
            className="admin-btn admin-btn-outline"
          >
            <Download style={{ width: 16, height: 16 }} />
            Export CSV
          </button>
        </div>
      </div>

      {/* KPI Metrics */}
      <div className="admin-grid admin-grid-4">
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Total Accounts</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
              <User style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="kpi-card-value">{customerList.length}</div>
          <span className="kpi-card-period">Active in MongoDB Atlas</span>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Closed Deal Value</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-success-light)', color: 'var(--color-success)' }}>
              <DollarSign style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="kpi-card-value">₹{totalClosedValue.toLocaleString('en-IN')}</div>
          <span className="kpi-card-trend up">
            <ArrowUpRight style={{ width: 12, height: 12 }} /> Contracted Revenue
          </span>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Total Pipeline</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-info-light)', color: 'var(--color-info)' }}>
              <Briefcase style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="kpi-card-value">₹{totalPipelineValue.toLocaleString('en-IN')}</div>
          <span className="kpi-card-period">Active Deals in Progress</span>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">VIP Enterprise Tier</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-warning-light)', color: 'var(--color-warning)' }}>
              <ShieldCheck style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="kpi-card-value">{customerList.filter(c => c.tier.includes('VIP')).length}</div>
          <span className="kpi-card-trend up">Retainer Accounts</span>
        </div>
      </div>

      {/* Tabs & Search Card */}
      <div className="admin-card">
        <div style={{
          display: 'flex',
          gap: 'var(--space-2)',
          padding: 'var(--space-4)',
          borderBottom: '1px solid var(--color-border)',
          overflowX: 'auto'
        }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filter Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-4) var(--space-6)',
          borderBottom: '1px solid var(--color-border-light)',
          flexWrap: 'wrap',
          gap: 'var(--space-4)'
        }}>
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <Search style={{
              position: 'absolute',
              left: 12,
              top: '50%',
              transform: 'translateY(-50%)',
              width: 16,
              height: 16,
              color: 'var(--color-text-muted)'
            }} />
            <input
              type="text"
              placeholder="Search clients by name, company, or service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="admin-input"
              style={{ width: '100%', paddingLeft: 36 }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value)}
              className="admin-input admin-select"
              style={{ width: '160px' }}
            >
              <option value="all">All Tiers</option>
              <option value="VIP">VIP Enterprise</option>
              <option value="Growth">Growth Client</option>
              <option value="Prospect">Prospect</option>
            </select>
          </div>
        </div>

        {/* Customer Directory Table */}
        <div className="admin-table-wrap" style={{ border: 'none', borderRadius: 0 }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Client & Company</th>
                <th>Contact Details</th>
                <th>Engagement / Service</th>
                <th>Deal Value</th>
                <th>Account Tier</th>
                <th>Onboarded</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={7}>
                    <div className="admin-empty-state">
                      <Building2 className="admin-empty-state-icon" />
                      <div className="admin-empty-state-title">No client accounts found</div>
                      <div className="admin-empty-state-desc">
                        {searchTerm ? 'Try refining your search keyword.' : 'Convert qualified leads or add accounts to start building your CRM.'}
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredCustomers.map(cust => (
                  <tr key={cust.id}>
                    <td>
                      <div>
                        <div style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)' }}>{cust.name}</div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{cust.company}</div>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: 'var(--text-xs)' }}>
                        <a href={`mailto:${cust.email}`} style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                          {cust.email}
                        </a>
                        <div style={{ color: 'var(--color-primary)', fontWeight: 'var(--weight-medium)', marginTop: 2 }}>
                          {cust.phone}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)' }}>{cust.service}</div>
                    </td>
                    <td>
                      <strong style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
                        ₹{cust.dealValue.toLocaleString('en-IN')}
                      </strong>
                    </td>
                    <td>
                      <span className={`admin-badge ${
                        cust.tier === 'VIP Enterprise' ? 'admin-badge-qualified' :
                        cust.tier === 'Growth Client' ? 'admin-badge-contacted' : 'admin-badge-new'
                      }`}>
                        {cust.tier}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                        {new Date(cust.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        onClick={() => setSelectedCustomer(cust)}
                        className="admin-btn admin-btn-outline admin-btn-sm"
                      >
                        <Eye style={{ width: 14, height: 14 }} />
                        Profile
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Profile Modal */}
      {selectedCustomer && (
        <div className="admin-modal-overlay" onClick={() => setSelectedCustomer(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="admin-modal-header">
              <div className="admin-modal-title" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Building2 style={{ color: 'var(--color-primary)', width: 20, height: 20 }} />
                Customer Account Profile
              </div>
              <button onClick={() => setSelectedCustomer(null)} className="admin-btn admin-btn-ghost admin-btn-sm">
                ✕
              </button>
            </div>

            <div className="admin-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--space-4)',
                background: 'var(--color-bg)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-md)'
              }}>
                <div>
                  <label className="admin-help-text">Primary Contact</label>
                  <div style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)' }}>{selectedCustomer.name}</div>
                </div>
                <div>
                  <label className="admin-help-text">Organization</label>
                  <div style={{ fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)' }}>{selectedCustomer.company}</div>
                </div>
                <div>
                  <label className="admin-help-text">Email</label>
                  <div><a href={`mailto:${selectedCustomer.email}`} style={{ color: 'var(--color-primary)' }}>{selectedCustomer.email}</a></div>
                </div>
                <div>
                  <label className="admin-help-text">Phone</label>
                  <div><a href={`tel:${selectedCustomer.phone}`} style={{ color: 'var(--color-primary)' }}>{selectedCustomer.phone}</a></div>
                </div>
              </div>

              <div>
                <label className="admin-help-text">Contract Value & Tier</label>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-3) var(--space-4)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
                    ₹{selectedCustomer.dealValue.toLocaleString('en-IN')}
                  </span>
                  <span className="admin-badge admin-badge-qualified">{selectedCustomer.tier}</span>
                </div>
              </div>

              <div>
                <label className="admin-help-text">Account Notes & AI Summary</label>
                <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--color-text)', lineHeight: 'var(--leading-relaxed)' }}>
                  {selectedCustomer.notes}
                </div>
              </div>
            </div>

            <div className="admin-modal-footer">
              <button onClick={() => setSelectedCustomer(null)} className="admin-btn admin-btn-outline">
                Close
              </button>
              <a href={`mailto:${selectedCustomer.email}`} className="admin-btn admin-btn-primary">
                <Mail style={{ width: 14, height: 14 }} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
