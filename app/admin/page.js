'use client';

import React, { useState, useEffect } from 'react';
import { useAuth, UserButton } from '@clerk/nextjs';
import './admin.css';

export default function AdminDashboard() {
  const { getToken } = useAuth();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Filters & Search
  const [activeSource, setActiveSource] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchLeads = React.useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const token = await getToken();
      const url = `/api/admin/leads?source=${activeSource}&status=${activeStatus}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setLeads(data.leads || []);
      } else {
        setError(data.error || 'Failed to fetch leads');
      }
    } catch (err) {
      console.error(err);
      setError('Network connection error.');
    } finally {
      setLoading(false);
    }
  }, [getToken, activeSource, activeStatus]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const updateLeadStatus = async (id, newStatus) => {
    try {
      const token = await getToken();
      const response = await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setLeads((prev) =>
          prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item))
        );
      } else {
        alert(data.error || 'Failed to update status');
      }
    } catch (err) {
      alert('Error updating lead status.');
    }
  };

  const deleteLead = async (id) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;

    try {
      const token = await getToken();
      const response = await fetch(`/api/admin/leads?id=${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setLeads((prev) => prev.filter((item) => item._id !== id));
      } else {
        alert(data.error || 'Failed to delete lead');
      }
    } catch (err) {
      alert('Error deleting lead.');
    }
  };

  const exportToCSV = () => {
    if (leads.length === 0) return alert('No leads to export.');

    const headers = ['Date', 'Source', 'Name', 'Email', 'Phone', 'Service', 'URL', 'Status', 'Message'];
    const rows = filteredLeads.map((l) => [
      new Date(l.createdAt).toLocaleString(),
      l.source,
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.phone || '').replace(/"/g, '""')}"`,
      `"${(l.service || '').replace(/"/g, '""')}"`,
      `"${(l.url || '').replace(/"/g, '""')}"`,
      l.status,
      `"${(l.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `maajanki_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((lead) => {
    const term = searchTerm.toLowerCase();
    return (
      (lead.name && lead.name.toLowerCase().includes(term)) ||
      (lead.email && lead.email.toLowerCase().includes(term)) ||
      (lead.phone && lead.phone.toLowerCase().includes(term)) ||
      (lead.service && lead.service.toLowerCase().includes(term)) ||
      (lead.message && lead.message.toLowerCase().includes(term))
    );
  });

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div>
          <h1>MaaJanki Lead Dashboard</h1>
          <p>Centralized MongoDB Atlas Lead Collection</p>
        </div>
        <div className="admin-header-actions">
          <button onClick={exportToCSV} className="admin-btn-outline">
            📥 Export CSV ({filteredLeads.length})
          </button>
          <button onClick={fetchLeads} className="admin-btn-outline" title="Refresh leads">
            🔄 Refresh
          </button>
          {/* Clerk UserButton — shows avatar + sign out */}
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>

      {/* STATS OVERVIEW */}
      <div className="admin-stats-grid">
        <div className="stat-card">
          <h3>{leads.length}</h3>
          <span>Total Leads</span>
        </div>
        <div className="stat-card stat-new">
          <h3>{leads.filter((l) => l.status === 'new').length}</h3>
          <span>New Leads</span>
        </div>
        <div className="stat-card stat-contacted">
          <h3>{leads.filter((l) => l.status === 'contacted').length}</h3>
          <span>Contacted</span>
        </div>
        <div className="stat-card stat-closed">
          <h3>{leads.filter((l) => l.status === 'closed').length}</h3>
          <span>Closed</span>
        </div>
      </div>

      {/* FILTERS & SEARCH BAR */}
      <div className="admin-toolbar">
        <div className="source-tabs">
          <button className={activeSource === 'all' ? 'active' : ''} onClick={() => setActiveSource('all')}>
            All Sources
          </button>
          <button className={activeSource === 'contact-page' ? 'active' : ''} onClick={() => setActiveSource('contact-page')}>
            Contact Form
          </button>
          <button className={activeSource === 'website-audit' ? 'active' : ''} onClick={() => setActiveSource('website-audit')}>
            Audit Form
          </button>
          <button className={activeSource === 'footer-popup' ? 'active' : ''} onClick={() => setActiveSource('footer-popup')}>
            Footer Popup
          </button>
          <button className={activeSource === 'homepage-promo-popup' ? 'active' : ''} onClick={() => setActiveSource('homepage-promo-popup')}>
            Promo Popup
          </button>
          <button className={activeSource === 'chatbot' ? 'active' : ''} onClick={() => setActiveSource('chatbot')}>
            AI Chatbot
          </button>
          <button className={activeSource === 'brochure' ? 'active' : ''} onClick={() => setActiveSource('brochure')}>
            Brochures
          </button>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search leads by name, email, phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Error display */}
      {error && <div className="admin-error" style={{ margin: '16px 0', padding: '12px', borderRadius: '8px' }}>{error}</div>}

      {/* LEADS TABLE */}
      {loading ? (
        <div className="admin-loading">Loading MongoDB Atlas Leads...</div>
      ) : filteredLeads.length === 0 ? (
        <div className="admin-empty">No lead records found for selected filter.</div>
      ) : (
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Source</th>
                <th>Name / Contact</th>
                <th>Service & URL</th>
                <th>Message</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead._id}>
                  <td style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>
                    {new Date(lead.createdAt).toLocaleDateString()}
                    <br />
                    <small style={{ color: '#888' }}>{new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small>
                  </td>
                  <td>
                    <span className={`badge badge-source badge-${lead.source}`}>
                      {lead.source}
                    </span>
                  </td>
                  <td>
                    <strong>{lead.name}</strong>
                    {lead.email !== 'N/A' && <div style={{ fontSize: '13px' }}>📧 {lead.email}</div>}
                    {lead.phone !== 'N/A' && <div style={{ fontSize: '13px' }}>📞 {lead.phone}</div>}
                  </td>
                  <td>
                    <div style={{ fontWeight: '500' }}>{lead.service}</div>
                    {lead.url && (
                      <a href={lead.url.startsWith('http') ? lead.url : `https://${lead.url}`} target="_blank" rel="noreferrer" style={{ fontSize: '12px', color: '#ff1493' }}>
                        🌐 {lead.url}
                      </a>
                    )}
                  </td>
                  <td style={{ maxWidth: '280px', fontSize: '13px', color: '#444' }}>
                    {lead.message || <em style={{ color: '#aaa' }}>No message</em>}
                  </td>
                  <td>
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                      className={`status-select status-${lead.status}`}
                    >
                      <option value="new">🔴 New</option>
                      <option value="contacted">🟡 Contacted</option>
                      <option value="closed">🟢 Closed</option>
                      <option value="archived">⚪ Archived</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={() => deleteLead(lead._id)} className="btn-icon-delete" title="Delete Lead">
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
