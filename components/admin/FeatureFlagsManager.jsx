'use client';

import React, { useState, useEffect } from 'react';
import {
  SlidersHorizontal,
  ToggleLeft,
  ToggleRight,
  Shield,
  Bot,
  Zap,
  Radio,
  Flame,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Search,
  Sparkles,
  Layers,
  Settings
} from 'lucide-react';

export default function FeatureFlagsManager() {
  const [flags, setFlags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [updatingKey, setUpdatingKey] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const fetchFlags = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/feature-flags');
      const data = await res.json();
      if (data.success) {
        setFlags(data.flags || []);
      }
    } catch (err) {
      console.error('Failed to load feature flags:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlags();
  }, []);

  const handleToggle = async (flag) => {
    setUpdatingKey(flag.key);
    const newEnabled = !flag.enabled;

    try {
      const res = await fetch('/api/admin/feature-flags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: flag.key,
          enabled: newEnabled
        })
      });

      const data = await res.json();
      if (data.success) {
        setFlags(data.flags);
        setToastMessage(`✅ ${flag.name} is now ${newEnabled ? 'ACTIVE (Enabled)' : 'DISABLED'}`);
        setTimeout(() => setToastMessage(''), 3000);
      }
    } catch (err) {
      console.error('Toggle failed:', err);
    } finally {
      setUpdatingKey(null);
    }
  };

  const handleRolloutChange = async (flag, newPercentage) => {
    try {
      const res = await fetch('/api/admin/feature-flags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          key: flag.key,
          rolloutPercentage: Number(newPercentage)
        })
      });
      const data = await res.json();
      if (data.success) {
        setFlags(data.flags);
      }
    } catch (err) {
      console.error('Rollout update failed:', err);
    }
  };

  const filteredFlags = flags.filter(f =>
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
            <span className="admin-badge admin-badge-qualified">
              <SlidersHorizontal style={{ width: 12, height: 12 }} /> Configuration Engine
            </span>
          </div>
          <h1 className="admin-page-title">Platform Controls & Dynamic Feature Flags</h1>
          <p className="admin-page-desc">
            Enable or disable platform features, canary rollouts, and operational modes instantly without redeploying code
          </p>
        </div>
        <div className="admin-page-actions">
          <button onClick={fetchFlags} disabled={loading} className="admin-btn admin-btn-primary" style={{ fontSize: '13px' }}>
            <RefreshCw size={14} style={{ animation: loading ? 'spin 1s linear infinite' : 'none' }} />
            <span>Refresh State</span>
          </button>
        </div>
      </div>

      {toastMessage && (
        <div style={{
          padding: '12px 16px',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '8px',
          color: '#16a34a',
          fontSize: '13px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <CheckCircle2 size={16} />
          {toastMessage}
        </div>
      )}

      {/* Flags List Card */}
      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search feature flags by name or key..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="admin-input"
              style={{ width: '100%', paddingLeft: '36px', fontSize: '13px' }}
            />
          </div>

          <span className="admin-badge admin-badge-new" style={{ fontSize: '12px' }}>
            {flags.filter(f => f.enabled).length} of {flags.length} Flags Active
          </span>
        </div>

        {/* Feature Flags Table */}
        <div className="admin-table-wrap" style={{ border: 'none' }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Feature & Environment Key</th>
                <th>Category</th>
                <th>Canary Rollout %</th>
                <th>Status</th>
                <th style={{ textAlign: 'right' }}>Toggle Switch</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '32px' }}>
                    <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite', margin: '0 auto 8px', color: 'var(--color-primary)' }} />
                    <div style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>Loading feature flags...</div>
                  </td>
                </tr>
              ) : filteredFlags.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', padding: '32px', color: 'var(--color-text-muted)' }}>
                    No feature flags match your search query.
                  </td>
                </tr>
              ) : (
                filteredFlags.map(flag => (
                  <tr key={flag.key}>
                    <td>
                      <div>
                        <strong style={{ fontSize: '13px', color: 'var(--color-text)' }}>{flag.name}</strong>
                        <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '2px' }}>{flag.description}</div>
                        <code style={{ fontSize: '10px', fontFamily: 'monospace', color: 'var(--color-primary)', marginTop: '4px', display: 'inline-block' }}>
                          {flag.key}
                        </code>
                      </div>
                    </td>
                    <td>
                      <span className="admin-badge admin-badge-new" style={{ fontSize: '10px' }}>
                        {flag.category}
                      </span>
                    </td>
                    <td style={{ width: '160px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          step="10"
                          disabled={!flag.enabled}
                          value={flag.rolloutPercentage}
                          onChange={e => handleRolloutChange(flag, e.target.value)}
                          style={{ flex: 1, accentColor: 'var(--color-primary)' }}
                        />
                        <span style={{ fontSize: '11px', fontFamily: 'monospace', width: '35px' }}>
                          {flag.rolloutPercentage}%
                        </span>
                      </div>
                    </td>
                    <td>
                      <span className={`admin-badge ${flag.enabled ? 'admin-badge-qualified' : 'admin-badge-spam'}`}>
                        {flag.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button
                        onClick={() => handleToggle(flag)}
                        disabled={updatingKey === flag.key}
                        className="topbar-icon-btn"
                        style={{
                          color: flag.enabled ? 'var(--color-primary)' : 'var(--color-text-muted)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '40px'
                        }}
                        title={flag.enabled ? 'Click to Disable' : 'Click to Enable'}
                      >
                        {flag.enabled ? <ToggleRight size={28} /> : <ToggleLeft size={28} />}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
