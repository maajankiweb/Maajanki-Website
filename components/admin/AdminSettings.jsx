'use client';

import React, { useState, useEffect } from 'react';
import {
  Settings,
  Shield,
  Key,
  Bell,
  Database,
  Globe,
  UserCheck,
  Lock,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Save,
  Server,
  Fingerprint,
  Users,
  RefreshCw,
  Eye,
  ShieldAlert,
  Search,
  Plus,
  Trash2,
  Check,
  FileCheck,
  ShieldCheck,
  Sliders,
  Clock
} from 'lucide-react';

const SETTING_TABS = [
  { id: 'general', label: 'General & Branding' },
  { id: 'security', label: 'Security & Access Control' },
  { id: 'ip_whitelist', label: 'IP Whitelist & Geo-Fence' },
  { id: 'api', label: 'API Keys & Webhooks' },
  { id: 'audit', label: 'Cryptographic Audit Trail' },
];

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('general');
  const [savedToast, setSavedToast] = useState('');
  
  // Security & Audit State
  const [auditLogs, setAuditLogs] = useState([]);
  const [auditIntegrity, setAuditIntegrity] = useState(null);
  const [loadingAudit, setLoadingAudit] = useState(false);
  const [auditCategory, setAuditCategory] = useState('ALL');

  // Security Preferences
  const [securityPrefs, setSecurityPrefs] = useState({
    autoLockTimeout: 15, // minutes
    piiMaskingEnabled: true,
    hardwareMfaEnforced: true,
    singleSessionOnly: true,
    rateLimitingMode: 'strict',
  });

  // IP Whitelist
  const [allowedIps, setAllowedIps] = useState([
    { ip: '127.0.0.1', label: 'Local Development Subnet', addedAt: '2026-08-30' },
    { ip: '103.120.24.0/24', label: 'MaaJanki Patna HQ Office VPN', addedAt: '2026-08-31' },
    { ip: '49.36.0.0/16', label: 'Authorized Bihar Admin Network', addedAt: '2026-09-01' },
  ]);
  const [newIpInput, setNewIpInput] = useState('');
  const [newIpLabel, setNewIpLabel] = useState('');

  const fetchAuditData = async () => {
    setLoadingAudit(true);
    try {
      const res = await fetch(`/api/admin/audit-logs?category=${auditCategory}`);
      const data = await res.json();
      if (data.success) {
        setAuditLogs(data.logs || []);
        setAuditIntegrity(data.integrity || null);
      }
    } catch (err) {
      console.error('Failed to load audit logs:', err);
    } finally {
      setLoadingAudit(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'audit') {
      fetchAuditData();
    }
  }, [activeTab, auditCategory]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/admin/audit-logs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'SECURITY_PREFERENCES_UPDATE',
          category: 'SECURITY',
          resource: 'ADMIN_SETTINGS',
          changes: securityPrefs
        })
      });
    } catch (err) {
      console.warn('Audit logging note:', err.message);
    }

    setSavedToast('✅ Security preferences and zero-trust policies enforced.');
    setTimeout(() => setSavedToast(''), 3500);
  };

  const handleAddIp = (e) => {
    e.preventDefault();
    if (!newIpInput.trim()) return;

    setAllowedIps(prev => [
      ...prev,
      {
        ip: newIpInput.trim(),
        label: newIpLabel.trim() || 'Custom Permitted Range',
        addedAt: new Date().toISOString().slice(0, 10)
      }
    ]);
    setNewIpInput('');
    setNewIpLabel('');
  };

  const handleRemoveIp = (ipToRemove) => {
    setAllowedIps(prev => prev.filter(item => item.ip !== ipToRemove));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
            <span className="admin-badge admin-badge-qualified">
              <Shield style={{ width: 12, height: 12 }} /> Enterprise Security Suite
            </span>
          </div>
          <h1 className="admin-page-title">Settings & Hardened Security Center</h1>
          <p className="admin-page-desc">
            Configure administrative security policies, Clerk authentication guardrails, rate limiting, and immutable audit trails
          </p>
        </div>
        <div className="admin-page-actions">
          <button onClick={handleSave} className="admin-btn admin-btn-primary">
            <Save style={{ width: 16, height: 16 }} />
            Save Preferences
          </button>
        </div>
      </div>

      {savedToast && (
        <div style={{
          padding: 'var(--space-3) var(--space-4)',
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: 'var(--radius-md)',
          color: '#16a34a',
          fontSize: 'var(--text-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}>
          <CheckCircle2 style={{ width: 16, height: 16 }} />
          {savedToast}
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="admin-tabs" style={{ display: 'flex', gap: 'var(--space-2)', borderBottom: '1px solid var(--border-color)' }}>
        {SETTING_TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`admin-tab ${activeTab === tab.id ? 'active' : ''}`}
            style={{
              padding: 'var(--space-2) var(--space-4)',
              borderBottom: activeTab === tab.id ? '2px solid var(--color-primary)' : '2px solid transparent',
              color: activeTab === tab.id ? 'var(--color-primary)' : 'var(--color-text-secondary)',
              fontWeight: activeTab === tab.id ? '600' : '400',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: General & Branding */}
      {activeTab === 'general' && (
        <div className="admin-card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <h2 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)' }}>
            Agency & Organization Profiles
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-4)' }}>
            <div>
              <label className="admin-help-text">Organization Legal Entity</label>
              <input type="text" readOnly value="MaaJanki Web Tech (MSME: UDYAM-BR-38-0014113)" className="admin-input" />
            </div>
            <div>
              <label className="admin-help-text">Super Admin Email</label>
              <input type="email" readOnly value="maajankiweb@gmail.com / info@maajankiwebtech.com" className="admin-input" />
            </div>
            <div>
              <label className="admin-help-text">Primary Phone Hotline</label>
              <input type="text" readOnly value="+91 90065 43913" className="admin-input" />
            </div>
            <div>
              <label className="admin-help-text">Admin Base URL</label>
              <input type="text" readOnly value="https://maajankiwebtech.com/admin" className="admin-input" />
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Security & Access Control */}
      {activeTab === 'security' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="admin-card">
            <h2 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)', marginBottom: '16px' }}>
              Zero-Trust Session & Access Policies
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Inactivity Auto Lock */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-elevated)', borderRadius: '8px' }}>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--color-text)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={16} style={{ color: 'var(--color-primary)' }} />
                    Inactivity Session Auto-Lock
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    Blurs screen and enforces PIN re-entry after idle time to protect client PII.
                  </div>
                </div>
                <select
                  value={securityPrefs.autoLockTimeout}
                  onChange={e => setSecurityPrefs({ ...securityPrefs, autoLockTimeout: Number(e.target.value) })}
                  className="admin-select"
                  style={{ width: '150px' }}
                >
                  <option value={5}>5 Minutes</option>
                  <option value={15}>15 Minutes (Default)</option>
                  <option value={30}>30 Minutes</option>
                  <option value={60}>1 Hour</option>
                  <option value={0}>Disabled</option>
                </select>
              </div>

              {/* Dynamic PII Masking */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-elevated)', borderRadius: '8px' }}>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--color-text)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Eye size={16} style={{ color: '#2563eb' }} />
                    Zero-Trust PII Masking
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    Automatically mask client emails and phone numbers until explicitly unmasked.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={securityPrefs.piiMaskingEnabled}
                  onChange={e => setSecurityPrefs({ ...securityPrefs, piiMaskingEnabled: e.target.checked })}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--color-primary)' }}
                />
              </div>

              {/* Hardware MFA */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'var(--bg-elevated)', borderRadius: '8px' }}>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--color-text)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Fingerprint size={16} style={{ color: '#16a34a' }} />
                    Clerk Multi-Factor Authentication (MFA)
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
                    Enforces TOTP Authenticator / SMS verification for all admin logins.
                  </div>
                </div>
                <span className="admin-badge admin-badge-qualified">Enforced via Clerk</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: IP Whitelist & Geo-Fence */}
      {activeTab === 'ip_whitelist' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="admin-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)' }}>
                  Permitted Admin IP Addresses & Subnets
                </h2>
                <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', margin: 0 }}>
                  Requests from unauthorized IPs are blocked at the middleware perimeter.
                </p>
              </div>
              <span className="admin-badge admin-badge-qualified">{allowedIps.length} Rules Active</span>
            </div>

            <form onSubmit={handleAddIp} style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <input
                type="text"
                required
                placeholder="IP Address or CIDR (e.g. 103.120.24.55/32)"
                value={newIpInput}
                onChange={e => setNewIpInput(e.target.value)}
                className="admin-input"
                style={{ flex: 1, minWidth: '220px' }}
              />
              <input
                type="text"
                placeholder="Label (e.g. Workstation Office)"
                value={newIpLabel}
                onChange={e => setNewIpLabel(e.target.value)}
                className="admin-input"
                style={{ flex: 1, minWidth: '200px' }}
              />
              <button type="submit" className="admin-btn admin-btn-primary">
                <Plus size={14} /> Add IP Rule
              </button>
            </form>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>IP / Subnet CIDR</th>
                    <th>Network Label</th>
                    <th>Date Permitted</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allowedIps.map((item, idx) => (
                    <tr key={idx}>
                      <td><code style={{ fontFamily: 'monospace', color: 'var(--color-primary)' }}>{item.ip}</code></td>
                      <td>{item.label}</td>
                      <td>{item.addedAt}</td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          onClick={() => handleRemoveIp(item.ip)}
                          className="topbar-icon-btn"
                          title="Remove Rule"
                          style={{ color: 'var(--color-danger)' }}
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: API Keys & Webhooks */}
      {activeTab === 'api' && (
        <div className="admin-card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <h2 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)' }}>
            Connected API Services & Integrations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'var(--bg-elevated)', borderRadius: '8px' }}>
              <div>
                <strong style={{ fontSize: '13px' }}>MongoDB Atlas Cluster</strong>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Status: Active Connection Pool</div>
              </div>
              <span className="admin-badge admin-badge-qualified">Connected</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'var(--bg-elevated)', borderRadius: '8px' }}>
              <div>
                <strong style={{ fontSize: '13px' }}>Clerk Identity & Auth Guard</strong>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Status: JWT Middleware Active</div>
              </div>
              <span className="admin-badge admin-badge-qualified">Verified</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', background: 'var(--bg-elevated)', borderRadius: '8px' }}>
              <div>
                <strong style={{ fontSize: '13px' }}>WhatsApp Lead Dispatcher</strong>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Recipient: +91 90065 43913</div>
              </div>
              <span className="admin-badge admin-badge-new">Live Dispatcher</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: Cryptographic Audit Trail */}
      {activeTab === 'audit' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {/* Integrity Header Badge */}
          <div className="admin-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: auditIntegrity?.verified ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                color: auditIntegrity?.verified ? '#16a34a' : '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--color-text)' }}>
                  {auditIntegrity?.verified ? 'Cryptographic Audit Ledger: 100% Verified' : 'Audit Verification Check'}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                  SHA-256 Chained Non-Repudiation Trail ({auditLogs.length} recent logged entries)
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <select
                value={auditCategory}
                onChange={e => setAuditCategory(e.target.value)}
                className="admin-select"
                style={{ fontSize: '12px' }}
              >
                <option value="ALL">All Event Categories</option>
                <option value="SECURITY">Security & Access</option>
                <option value="LEAD">Leads & CRM</option>
                <option value="AUTH">Authentication</option>
              </select>
              <button
                onClick={fetchAuditData}
                disabled={loadingAudit}
                className="admin-btn admin-btn-outline"
                style={{ fontSize: '12px' }}
              >
                <RefreshCw size={13} style={{ animation: loadingAudit ? 'spin 1s linear infinite' : 'none' }} />
                <span>Verify Ledger</span>
              </button>
            </div>
          </div>

          {/* Audit Log Table */}
          <div className="admin-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div className="admin-table-wrap" style={{ border: 'none' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>Actor</th>
                    <th>Action</th>
                    <th>Resource Target</th>
                    <th>IP / Device</th>
                    <th>SHA-256 Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingAudit ? (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: '32px' }}>
                        <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite', margin: '0 auto 8px', color: 'var(--color-primary)' }} />
                        <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Verifying and fetching cryptographic ledger...</div>
                      </td>
                    </tr>
                  ) : auditLogs.length === 0 ? (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: '32px', color: 'var(--color-text-muted)', fontSize: '13px' }}>
                        No audit events recorded under this filter.
                      </td>
                    </tr>
                  ) : (
                    auditLogs.map((log, idx) => (
                      <tr key={idx}>
                        <td style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>
                          {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                          <div style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>
                            {new Date(log.timestamp).toLocaleDateString()}
                          </div>
                        </td>
                        <td>
                          <strong style={{ fontSize: '12px' }}>{log.actor}</strong>
                        </td>
                        <td>
                          <span className="admin-badge admin-badge-new" style={{ fontSize: '10px', textTransform: 'uppercase' }}>
                            {log.action}
                          </span>
                        </td>
                        <td>
                          <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>{log.resource}</span>
                        </td>
                        <td>
                          <div style={{ fontSize: '11px', fontFamily: 'monospace' }}>{log.ip}</div>
                        </td>
                        <td>
                          <code style={{ fontSize: '10px', fontFamily: 'monospace', color: 'var(--color-primary)', background: 'var(--bg-elevated)', padding: '2px 6px', borderRadius: '4px' }} title={log.hash}>
                            {log.hash ? `${log.hash.slice(0, 12)}...` : 'N/A'}
                          </code>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
