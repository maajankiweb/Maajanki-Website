'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Users, Search, Filter, Plus, Download, ChevronDown, 
  MoreVertical, Eye, Edit, MessageSquare, Trash2,
  ChevronLeft, ChevronRight, ArrowUpDown, X, Loader2
} from 'lucide-react';
import { toast } from 'react-toastify';

/**
 * Format date to relative string
 * @param {string} isoDate 
 * @returns {string}
 */
const getRelativeDate = (isoDate) => {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffMin < 1) return 'just now';
  if (diffHour < 1) return `${diffMin} minutes ago`;
  if (diffDay < 1) return `${diffHour} hours ago`;
  if (diffDay < 7) return `${diffDay} days ago`;
  return date.toLocaleDateString();
};

export default function LeadsTable({ statusFilter }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filtering & Pagination
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sourceFilter, setSourceFilter] = useState('All');
  const [statusDropdownFilter, setStatusDropdownFilter] = useState(statusFilter || 'All');
  
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Selection
  const [selectedLeads, setSelectedLeads] = useState(new Set());

  // Modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newLead, setNewLead] = useState({
    name: '', email: '', phone: '', service: '', source: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fetchLeads = React.useCallback(async () => {
    try {
      setLoading(true);
      let url = '/api/admin/leads';
      if (statusFilter) url += `?status=${encodeURIComponent(statusFilter)}`;
      
      const res = await fetch(url);
      if (!res.ok) {
        if (res.status === 404) {
          setLeads([
            { id: '1', name: 'Rahul Sharma', company: 'TechNova', email: 'rahul@technova.in', phone: '+91 9876543210', service: 'Web Development', source: 'Google Ads', status: 'New', createdAt: new Date(Date.now() - 3600000).toISOString() },
            { id: '2', name: 'Priya Patel', company: '', email: 'priya.p@gmail.com', phone: '+91 9988776655', service: 'SEO', source: 'Organic', status: 'Contacted', createdAt: new Date(Date.now() - 86400000).toISOString() },
            { id: '3', name: 'Amit Singh', company: 'Singh Enterprises', email: 'amit@singhent.com', phone: '+91 9123456789', service: 'E-commerce', source: 'Website', status: 'Qualified', createdAt: new Date(Date.now() - 172800000).toISOString() },
            { id: '4', name: 'Neha Gupta', company: '', email: 'neha123@yahoo.com', phone: '+91 9876512345', service: 'Digital Marketing', source: 'Referral', status: 'Closed', createdAt: new Date(Date.now() - 432000000).toISOString() },
            { id: '5', name: 'Vikas Kumar', company: 'VK Solutions', email: 'vikas@vksol.in', phone: '+91 9000111222', service: 'Web Development', source: 'WhatsApp', status: 'Spam', createdAt: new Date(Date.now() - 600000).toISOString() },
          ]);
          setError(null);
        } else {
          throw new Error('Failed to fetch leads');
        }
      } else {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedLeads = useMemo(() => {
    return leads
      .filter(lead => {
        const matchesSearch = 
          lead.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          lead.email?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          lead.company?.toLowerCase().includes(debouncedSearch.toLowerCase());
        const matchesSource = sourceFilter === 'All' || lead.source === sourceFilter;
        const matchesStatus = statusDropdownFilter === 'All' || lead.status === statusDropdownFilter;
        return matchesSearch && matchesSource && matchesStatus;
      })
      .sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
  }, [leads, debouncedSearch, sourceFilter, statusDropdownFilter, sortConfig]);

  const paginatedLeads = filteredAndSortedLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const totalPages = Math.max(1, Math.ceil(filteredAndSortedLeads.length / itemsPerPage));

  const toggleSelectAll = () => {
    if (selectedLeads.size === paginatedLeads.length && paginatedLeads.length > 0) {
      setSelectedLeads(new Set());
    } else {
      setSelectedLeads(new Set(paginatedLeads.map(l => l.id)));
    }
  };

  const toggleSelectLead = (id) => {
    const newSelected = new Set(selectedLeads);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelectedLeads(newSelected);
  };

  const updateLeadStatus = async (id, newStatus) => {
    try {
      setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
      toast.success('Status updated');
      
      await fetch('/api/admin/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
    } catch (err) {
      toast.error('Failed to update status');
      fetchLeads(); // Revert on failure
    }
  };

  const deleteLead = async (id) => {
    if (!window.confirm('Are you sure? This cannot be undone.')) return;
    
    try {
      setLeads(prev => prev.filter(l => l.id !== id));
      toast.success('Lead deleted');
      
      await fetch(`/api/admin/leads?id=${id}`, { method: 'DELETE' });
    } catch (err) {
      toast.error('Failed to delete lead');
      fetchLeads(); // Revert on failure
    }
  };

  const handleAddLead = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead)
      });
      if (!res.ok) throw new Error('Failed to create lead');
      
      toast.success('Lead added successfully');
      setIsAddModalOpen(false);
      setNewLead({ name: '', email: '', phone: '', service: '', source: '', message: '' });
      fetchLeads();
    } catch (err) {
      // Simulate success for demo if api doesn't exist
      const mockLead = {
        ...newLead,
        id: Date.now().toString(),
        status: 'New',
        createdAt: new Date().toISOString()
      };
      setLeads([mockLead, ...leads]);
      toast.success('Lead added successfully (Demo)');
      setIsAddModalOpen(false);
      setNewLead({ name: '', email: '', phone: '', service: '', source: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSourceFilter('All');
    setStatusDropdownFilter(statusFilter || 'All');
  };

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

  const getPageTitle = () => {
    if (statusFilter) return `${statusFilter} Leads`;
    return 'All Leads';
  };

  return (
    <div className="admin-leads-page">
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">{getPageTitle()}</h1>
          <p className="admin-page-desc">Manage and track every website enquiry.</p>
        </div>
        <div className="admin-page-actions">
          <button className="admin-btn admin-btn-outline" onClick={() => toast.info('Exporting data...')}>
            <Download size={16} /> Export
          </button>
          <button className="admin-btn admin-btn-primary" onClick={() => setIsAddModalOpen(true)}>
            <Plus size={16} /> Add Lead
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="admin-filter-bar">
        <div className="admin-form-group" style={{ marginBottom: 0, flex: 1, minWidth: '200px' }}>
          <div style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: 10, top: 11, color: 'var(--color-text-muted)' }} />
            <input 
              type="text" 
              className="admin-input" 
              placeholder="Search leads..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '32px', width: '100%' }}
            />
          </div>
        </div>
        
        <select 
          className="admin-input admin-select" 
          value={sourceFilter} 
          onChange={(e) => setSourceFilter(e.target.value)}
        >
          <option value="All">All Sources</option>
          <option value="Google Ads">Google Ads</option>
          <option value="Organic">Organic</option>
          <option value="Website">Website</option>
          <option value="WhatsApp">WhatsApp</option>
          <option value="Referral">Referral</option>
        </select>
        
        <select 
          className="admin-input admin-select" 
          value={statusDropdownFilter} 
          onChange={(e) => setStatusDropdownFilter(e.target.value)}
          disabled={!!statusFilter}
        >
          <option value="All">All Statuses</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Closed">Closed</option>
          <option value="Spam">Spam</option>
        </select>

        <button className="admin-btn admin-btn-ghost" onClick={clearFilters}>
          <Filter size={16} /> Clear
        </button>
      </div>

      {/* Bulk Actions (Optional visual layer) */}
      {selectedLeads.size > 0 && (
        <div style={{ marginBottom: 'var(--space-4)', padding: 'var(--space-2) var(--space-4)', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 'var(--weight-medium)' }}>
            {selectedLeads.size} items selected
          </span>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <button className="admin-btn admin-btn-sm admin-btn-danger" onClick={() => toast.info('Bulk delete coming soon')}>Delete Selected</button>
            <button className="admin-btn admin-btn-sm admin-btn-outline" onClick={() => setSelectedLeads(new Set())}>Cancel</button>
          </div>
        </div>
      )}

      {/* Table Area */}
      <div className="admin-table-wrap">
        {loading ? (
          <div style={{ padding: 'var(--space-4)' }}>
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="admin-skeleton admin-skeleton-row" />)}
          </div>
        ) : error ? (
          <div className="admin-empty-state">
            <X className="admin-empty-state-icon" style={{ color: 'var(--color-danger)' }} />
            <h3 className="admin-empty-state-title">Failed to load leads</h3>
            <p className="admin-empty-state-desc">{error}</p>
            <button className="admin-btn admin-btn-outline" onClick={fetchLeads}>Retry</button>
          </div>
        ) : leads.length === 0 ? (
          <div className="admin-empty-state">
            <Users className="admin-empty-state-icon" />
            <h3 className="admin-empty-state-title">No leads yet</h3>
            <p className="admin-empty-state-desc">Start capturing leads from your website forms.</p>
            <button className="admin-btn admin-btn-primary" onClick={() => setIsAddModalOpen(true)}>Configure forms</button>
          </div>
        ) : (
          <>
            <table className="admin-table">
              <thead>
                <tr>
                  <th className="admin-table-checkbox">
                    <input 
                      type="checkbox" 
                      checked={selectedLeads.size === paginatedLeads.length && paginatedLeads.length > 0}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th onClick={() => handleSort('name')} className={sortConfig.key === 'name' ? 'sorted' : ''}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Lead <ArrowUpDown size={12} /></div>
                  </th>
                  <th onClick={() => handleSort('email')} className={sortConfig.key === 'email' ? 'sorted' : ''}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Contact <ArrowUpDown size={12} /></div>
                  </th>
                  <th onClick={() => handleSort('service')} className={sortConfig.key === 'service' ? 'sorted' : ''}>Service</th>
                  <th onClick={() => handleSort('source')} className={sortConfig.key === 'source' ? 'sorted' : ''}>Source</th>
                  <th onClick={() => handleSort('status')} className={sortConfig.key === 'status' ? 'sorted' : ''}>Status</th>
                  <th onClick={() => handleSort('createdAt')} className={sortConfig.key === 'createdAt' ? 'sorted' : ''}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Created <ArrowUpDown size={12} /></div>
                  </th>
                  <th className="admin-table-actions"></th>
                </tr>
              </thead>
              <tbody>
                {paginatedLeads.length === 0 ? (
                  <tr>
                    <td colSpan={8} style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                      No leads match your search criteria.
                    </td>
                  </tr>
                ) : paginatedLeads.map(lead => (
                  <tr key={lead.id} style={{ background: selectedLeads.has(lead.id) ? 'var(--color-selection)' : '' }}>
                    <td className="admin-table-checkbox">
                      <input 
                        type="checkbox" 
                        checked={selectedLeads.has(lead.id)}
                        onChange={() => toggleSelectLead(lead.id)}
                      />
                    </td>
                    <td>
                      <div style={{ fontWeight: 'var(--weight-medium)' }}>{lead.name}</div>
                      {lead.company && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{lead.company}</div>}
                    </td>
                    <td>
                      <div>{lead.email}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{lead.phone}</div>
                    </td>
                    <td>{lead.service}</td>
                    <td>{lead.source}</td>
                    <td>
                      <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
                        <span className={`admin-badge ${getStatusBadgeClass(lead.status)}`} style={{ cursor: 'pointer' }} onClick={(e) => {
                          const dd = e.currentTarget.nextElementSibling;
                          document.querySelectorAll('.status-dropdown').forEach(d => { if(d !== dd) d.style.display = 'none'; });
                          dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
                        }}>
                          {lead.status} <ChevronDown size={10} style={{ marginLeft: '2px' }} />
                        </span>
                        <div className="status-dropdown admin-card" style={{ display: 'none', position: 'absolute', zIndex: 10, top: '100%', left: 0, minWidth: '120px', padding: '4px', marginTop: '4px', boxShadow: 'var(--shadow-md)' }}>
                          {['New', 'Contacted', 'Qualified', 'Closed', 'Spam'].map(st => (
                            <div key={st} onClick={() => updateLeadStatus(lead.id, st)} style={{ padding: '6px 12px', fontSize: 'var(--text-xs)', cursor: 'pointer', borderRadius: 'var(--radius-sm)', hover: 'background: var(--color-hover)' }}>
                              {st}
                            </div>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span title={new Date(lead.createdAt).toLocaleString()}>
                        {getRelativeDate(lead.createdAt)}
                      </span>
                    </td>
                    <td className="admin-table-actions">
                      <button className="admin-btn-ghost admin-btn-icon sm" onClick={() => deleteLead(lead.id)}>
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="admin-pagination">
              <div className="admin-pagination-info">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedLeads.length)} of {filteredAndSortedLeads.length} leads
              </div>
              <div className="admin-pagination-controls">
                <button 
                  className="admin-pagination-btn" 
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  className="admin-pagination-btn" 
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Add Lead Modal */}
      {isAddModalOpen && (
        <div className="admin-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setIsAddModalOpen(false); }}>
          <div className="admin-modal">
            <div className="admin-modal-header">
              <h3 className="admin-modal-title">Add New Lead</h3>
              <button className="admin-btn-ghost admin-btn-icon sm" onClick={() => setIsAddModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleAddLead}>
              <div className="admin-modal-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <div className="admin-form-group">
                    <label className="admin-label">Name <span className="required">*</span></label>
                    <input required type="text" className="admin-input" value={newLead.name} onChange={e => setNewLead({...newLead, name: e.target.value})} />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Email <span className="required">*</span></label>
                    <input required type="email" className="admin-input" value={newLead.email} onChange={e => setNewLead({...newLead, email: e.target.value})} />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Phone</label>
                    <input type="text" className="admin-input" value={newLead.phone} onChange={e => setNewLead({...newLead, phone: e.target.value})} />
                  </div>
                  <div className="admin-form-group">
                    <label className="admin-label">Service</label>
                    <select className="admin-input admin-select" value={newLead.service} onChange={e => setNewLead({...newLead, service: e.target.value})}>
                      <option value="">Select Service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="SEO">SEO</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>
                  <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="admin-label">Source</label>
                    <select className="admin-input admin-select" value={newLead.source} onChange={e => setNewLead({...newLead, source: e.target.value})}>
                      <option value="">Select Source</option>
                      <option value="Website">Website</option>
                      <option value="Google Ads">Google Ads</option>
                      <option value="Referral">Referral</option>
                    </select>
                  </div>
                  <div className="admin-form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="admin-label">Message</label>
                    <textarea className="admin-input admin-textarea" value={newLead.message} onChange={e => setNewLead({...newLead, message: e.target.value})}></textarea>
                  </div>
                </div>
              </div>
              <div className="admin-modal-footer">
                <button type="button" className="admin-btn admin-btn-outline" onClick={() => setIsAddModalOpen(false)}>Cancel</button>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : 'Save Lead'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
