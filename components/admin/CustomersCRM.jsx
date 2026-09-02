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
  FileText,
  Send,
  X,
  Check
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
  const [customAccounts, setCustomAccounts] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [draftingEmail, setDraftingEmail] = useState(false);

  // Add customer form state
  const [newCust, setNewCust] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Web Development & SEO',
    tier: 'Growth Client',
    dealValue: 50000,
    notes: '',
  });

  // Combine database leads with user-added custom accounts
  const customerList = useMemo(() => {
    const derivedFromLeads = (leads || []).map((l, idx) => ({
      id: l._id || `cust-${idx}`,
      name: l.name || 'Enterprise Client',
      company: l.company || `${l.name ? l.name.split(' ')[0] : 'Client'} Enterprises`,
      email: l.email || '',
      phone: l.phone || '',
      service: l.service || 'Web Development & SEO',
      status: l.status || 'New',
      dealValue: (l.status || '').toLowerCase() === 'closed' ? 150000 : (l.status || '').toLowerCase() === 'qualified' ? 75000 : 25000,
      tier: (l.status || '').toLowerCase() === 'closed' ? 'VIP Enterprise' : (l.status || '').toLowerCase() === 'qualified' ? 'Growth Client' : 'Prospect',
      createdAt: l.createdAt || new Date().toISOString(),
      notes: l.message || 'Inquiry captured via website form.',
    }));

    return [...customAccounts, ...derivedFromLeads];
  }, [leads, customAccounts]);

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

  const handleAddCustomerSubmit = (e) => {
    e.preventDefault();
    if (!newCust.name.trim() || !newCust.email.trim()) return;

    const created = {
      id: `cust-custom-${Date.now()}`,
      name: newCust.name.trim(),
      company: newCust.company.trim() || `${newCust.name.trim()} Corp`,
      email: newCust.email.trim(),
      phone: newCust.phone.trim() || '+91 90000 00000',
      service: newCust.service,
      status: 'Qualified',
      dealValue: Number(newCust.dealValue) || 25000,
      tier: newCust.tier,
      createdAt: new Date().toISOString(),
      notes: newCust.notes.trim() || 'Directly created client record in CRM.',
    };

    setCustomAccounts(prev => [created, ...prev]);
    setShowAddModal(false);
    setNewCust({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: 'Web Development & SEO',
      tier: 'Growth Client',
      dealValue: 50000,
      notes: '',
    });
  };

  const handleSendAiDraftEmail = async (cust) => {
    setDraftingEmail(true);
    try {
      const res = await fetch('/api/admin/ai-draft-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientName: cust.name,
          recipientEmail: cust.email,
          company: cust.company,
          serviceRequested: cust.service,
          notes: cust.notes,
          status: cust.status,
        })
      });

      const data = await res.json();
      if (data.success && data.gmailUrl) {
        window.open(data.gmailUrl, '_blank', 'noopener,noreferrer');
      } else {
        // Fallback to standard mailto
        window.location.href = `mailto:${cust.email}?subject=MaaJanki%20Web%20Tech%20Follow-up`;
      }
    } catch (err) {
      console.warn('AI draft email notice:', err.message);
      window.location.href = `mailto:${cust.email}`;
    } finally {
      setDraftingEmail(false);
    }
  };

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
        <div className="admin-page-actions" style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setShowAddModal(true)}
            className="admin-btn admin-btn-primary"
            style={{ fontSize: '13px' }}
          >
            <Plus size={14} /> Add Customer
          </button>
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
                c.dealValue
              ]);
              const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
              const link = document.createElement('a');
              link.href = encodeURI(csvContent);
              link.download = `maajanki_crm_export_${new Date().toISOString().slice(0, 10)}.csv`;
              link.click();
            }}
            className="admin-btn admin-btn-outline"
            style={{ fontSize: '13px' }}
          >
            <Download size={14} /> Export CRM
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="admin-grid admin-grid-4">
        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Total Accounts</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-info-light)', color: 'var(--color-info)' }}>
              <Building2 style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="kpi-card-value">{customerList.length}</div>
          <span className="kpi-card-period">Live client accounts</span>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">VIP Enterprise Accounts</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-success-light)', color: 'var(--color-success)' }}>
              <ShieldCheck style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="kpi-card-value">
            {customerList.filter(c => c.tier === 'VIP Enterprise').length}
          </div>
          <span className="kpi-card-period">High-value contracts</span>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Closed Deal Value</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
              <DollarSign style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="kpi-card-value">
            ₹{totalClosedValue.toLocaleString('en-IN')}
          </div>
          <span className="kpi-card-period">Won contracts</span>
        </div>

        <div className="kpi-card">
          <div className="kpi-card-header">
            <span className="kpi-card-label">Total Pipeline</span>
            <div className="kpi-card-icon" style={{ background: 'var(--color-warning-light)', color: 'var(--color-warning)' }}>
              <Sparkles style={{ width: 20, height: 20 }} />
            </div>
          </div>
          <div className="kpi-card-value">
            ₹{totalPipelineValue.toLocaleString('en-IN')}
          </div>
          <span className="kpi-card-period">Active opportunity value</span>
        </div>
      </div>

      {/* Main CRM Table Container */}
      <div className="admin-card">
        {/* Search & Filter Bar */}
        <div className="admin-filter-bar">
          <div style={{ position: 'relative', flex: 1, minWidth: 260 }}>
            <Search style={{ position: 'absolute', left: 'var(--space-3)', top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search by client name, company, email, or service..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="admin-input"
              style={{ paddingLeft: 'var(--space-8)' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Filter style={{ width: 14, height: 14, color: 'var(--color-text-muted)' }} />
            <select
              value={tierFilter}
              onChange={e => setTierFilter(e.target.value)}
              className="admin-select"
            >
              <option value="all">All Account Tiers</option>
              <option value="vip">VIP Enterprise</option>
              <option value="growth">Growth Client</option>
              <option value="prospect">Prospect</option>
            </select>
          </div>
        </div>

        {/* Data Table */}
        <div className="admin-table-wrap" style={{ border: 'none', borderRadius: 0 }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Account & Company</th>
                <th>Primary Contact</th>
                <th>Primary Service</th>
                <th>Estimated Value</th>
                <th>Account Tier</th>
                <th>Added Date</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length === 0 ? (
                <tr>
                  <td colSpan={7}>
                    <div className="admin-empty-state" style={{ padding: '48px 24px' }}>
                      <Building2 className="admin-empty-state-icon" style={{ width: 40, height: 40 }} />
                      <div className="admin-empty-state-title">No client accounts found</div>
                      <div className="admin-empty-state-desc" style={{ marginBottom: '16px' }}>
                        {searchTerm ? 'Try adjusting your search keywords.' : 'Add your first customer account or qualify leads from the dashboard.'}
                      </div>
                      <button onClick={() => setShowAddModal(true)} className="admin-btn admin-btn-primary admin-btn-sm">
                        <Plus size={14} /> Add Customer
                      </button>
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
                          {cust.email || 'No email'}
                        </a>
                        <div style={{ color: 'var(--color-primary)', fontWeight: 'var(--weight-medium)', marginTop: 2 }}>
                          {cust.phone || 'No phone'}
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
                      <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                        <button
                          onClick={() => handleSendAiDraftEmail(cust)}
                          disabled={draftingEmail}
                          className="admin-btn admin-btn-primary admin-btn-sm"
                          title="Generate AI Email Draft and open Gmail compose"
                        >
                          <Sparkles size={12} />
                          <span>AI Email</span>
                        </button>
                        <button
                          onClick={() => setSelectedCustomer(cust)}
                          className="admin-btn admin-btn-outline admin-btn-sm"
                        >
                          <Eye size={12} />
                          <span>Profile</span>
                        </button>
                      </div>
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
              <button onClick={() => setSelectedCustomer(null)} className="topbar-icon-btn" style={{ width: 28, height: 28 }}>
                <X size={16} />
              </button>
            </div>

            <div className="admin-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--space-4)',
                background: 'var(--bg-elevated)',
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-3) var(--space-4)', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)' }}>
                  <span style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>
                    ₹{selectedCustomer.dealValue.toLocaleString('en-IN')}
                  </span>
                  <span className="admin-badge admin-badge-qualified">{selectedCustomer.tier}</span>
                </div>
              </div>

              <div>
                <label className="admin-help-text">Account Notes & AI Summary</label>
                <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--color-text)', lineHeight: 'var(--leading-relaxed)' }}>
                  {selectedCustomer.notes}
                </div>
              </div>
            </div>

            <div className="admin-modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button onClick={() => setSelectedCustomer(null)} className="admin-btn admin-btn-outline">
                Close
              </button>
              <button
                onClick={() => handleSendAiDraftEmail(selectedCustomer)}
                disabled={draftingEmail}
                className="admin-btn admin-btn-primary"
              >
                <Sparkles size={14} />
                <span>{draftingEmail ? 'Drafting...' : 'AI Email Draft (Gmail)'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Customer Modal */}
      {showAddModal && (
        <div className="admin-modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div className="admin-modal-header">
              <div className="admin-modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <UserPlus size={18} style={{ color: 'var(--color-primary)' }} />
                Add New Client Account
              </div>
              <button onClick={() => setShowAddModal(false)} className="topbar-icon-btn" style={{ width: 28, height: 28 }}>
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleAddCustomerSubmit}>
              <div className="admin-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label className="admin-help-text">Client / Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={newCust.name}
                    onChange={e => setNewCust({ ...newCust, name: e.target.value })}
                    className="admin-input"
                  />
                </div>

                <div>
                  <label className="admin-help-text">Company / Brand Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Chandra Diagnostics Hub"
                    value={newCust.company}
                    onChange={e => setNewCust({ ...newCust, company: e.target.value })}
                    className="admin-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label className="admin-help-text">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="client@company.com"
                      value={newCust.email}
                      onChange={e => setNewCust({ ...newCust, email: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div>
                    <label className="admin-help-text">Phone Number</label>
                    <input
                      type="text"
                      placeholder="+91 98765 43210"
                      value={newCust.phone}
                      onChange={e => setNewCust({ ...newCust, phone: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label className="admin-help-text">Service</label>
                    <select
                      value={newCust.service}
                      onChange={e => setNewCust({ ...newCust, service: e.target.value })}
                      className="admin-select"
                    >
                      <option value="Web Development & SEO">Web Development & SEO</option>
                      <option value="Next.js SaaS & ERP">Next.js SaaS & ERP</option>
                      <option value="Performance Marketing (Google Ads)">Performance Marketing (Google Ads)</option>
                      <option value="Local SEO & Citations">Local SEO & Citations</option>
                      <option value="InvoBill GST Billing Software">InvoBill GST Software</option>
                      <option value="Branding & UI/UX Design">Branding & UI/UX Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="admin-help-text">Account Tier</label>
                    <select
                      value={newCust.tier}
                      onChange={e => setNewCust({ ...newCust, tier: e.target.value })}
                      className="admin-select"
                    >
                      <option value="VIP Enterprise">VIP Enterprise</option>
                      <option value="Growth Client">Growth Client</option>
                      <option value="Prospect">Prospect</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="admin-help-text">Estimated Deal Value (₹ INR)</label>
                  <input
                    type="number"
                    placeholder="50000"
                    value={newCust.dealValue}
                    onChange={e => setNewCust({ ...newCust, dealValue: e.target.value })}
                    className="admin-input"
                  />
                </div>

                <div>
                  <label className="admin-help-text">Project Scope & Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Client objectives, requirements, deliverables..."
                    value={newCust.notes}
                    onChange={e => setNewCust({ ...newCust, notes: e.target.value })}
                    className="admin-input"
                  />
                </div>
              </div>

              <div className="admin-modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button type="button" onClick={() => setShowAddModal(false)} className="admin-btn admin-btn-outline">
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  <Check size={14} /> Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
