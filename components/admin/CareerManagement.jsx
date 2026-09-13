'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Briefcase,
  Users,
  Search,
  Filter,
  Download,
  Eye,
  Trash2,
  CheckCircle,
  Clock,
  UserCheck,
  UserX,
  Plus,
  RefreshCw,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  Calendar,
  X,
  Edit,
  Sparkles,
  ChevronDown,
  AlertCircle,
  FileCheck,
  Check,
  Layers,
  MapPin,
  Building,
  DollarSign,
  Maximize2
} from 'lucide-react';
import Swal from 'sweetalert2';

// Status styling configuration
const STATUS_CONFIG = {
  New: { label: 'New', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)', border: '#93c5fd' },
  Reviewing: { label: 'Reviewing', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', border: '#fcd34d' },
  Shortlisted: { label: 'Shortlisted', color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)', border: '#6ee7b7' },
  Interviewed: { label: 'Interviewed', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.1)', border: '#c4b5fd' },
  Rejected: { label: 'Rejected', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)', border: '#fca5a5' },
  Hired: { label: 'Hired', color: '#059669', bg: 'rgba(5, 150, 105, 0.15)', border: '#34d399' }
};

const formatBytes = (bytes) => {
  if (!bytes || bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

const formatDate = (isoString) => {
  if (!isoString) return '—';
  const d = new Date(isoString);
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export default function CareerManagement() {
  const [activeTab, setActiveTab] = useState('applications'); // 'applications' | 'jobs'

  // Applications State
  const [applications, setApplications] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, reviewing: 0, shortlisted: 0, interviewed: 0, rejected: 0, hired: 0 });
  const [positionsList, setPositionsList] = useState([]);
  const [loadingApps, setLoadingApps] = useState(true);

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [positionFilter, setPositionFilter] = useState('All');
  const [selectedAppIds, setSelectedAppIds] = useState(new Set());

  // PDF Preview Modal State
  const [previewApp, setPreviewApp] = useState(null);

  // Details Modal State
  const [detailsApp, setDetailsApp] = useState(null);

  // Jobs State
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [jobCategoryFilter, setJobCategoryFilter] = useState('all');
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [jobForm, setJobForm] = useState({
    title: '',
    category: 'fulltime',
    department: 'Engineering',
    experience: '1–3 Years',
    location: 'Bagaha, Bihar (HQ) / Hybrid',
    salary: 'Competitive',
    openings: 1,
    skills: '',
    qualification: '',
    duration: 'Full-Time position.',
    description: '',
    requirements: '',
    isActive: true
  });

  // Fetch Applications
  const fetchApplications = async () => {
    setLoadingApps(true);
    try {
      let url = `/api/admin/career?status=${encodeURIComponent(statusFilter)}&position=${encodeURIComponent(positionFilter)}`;
      if (searchTerm) url += `&search=${encodeURIComponent(searchTerm)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setApplications(data.applications || []);
        if (data.stats) setStats(data.stats);
        if (data.positions) setPositionsList(data.positions);
      }
    } catch (err) {
      console.error('Error fetching applications:', err);
    } finally {
      setLoadingApps(false);
    }
  };

  // Fetch Jobs
  const fetchJobs = async () => {
    setLoadingJobs(true);
    try {
      const res = await fetch('/api/admin/jobs');
      const data = await res.json();
      if (data.success) {
        setJobs(data.jobs || []);
      }
    } catch (err) {
      console.error('Error fetching jobs:', err);
    } finally {
      setLoadingJobs(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [statusFilter, positionFilter]);

  // Debounced search
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchApplications();
    }, 350);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (activeTab === 'jobs') {
      fetchJobs();
    }
  }, [activeTab]);

  // Handle single status update
  const handleUpdateStatus = async (appId, newStatus) => {
    try {
      const res = await fetch('/api/admin/career', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: appId, status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        setApplications((prev) =>
          prev.map((app) => (app._id === appId ? { ...app, status: newStatus } : app))
        );
        if (detailsApp && detailsApp._id === appId) {
          setDetailsApp((prev) => ({ ...prev, status: newStatus }));
        }
        // Update stats locally
        fetchApplications();
      } else {
        Swal.fire('Error', data.error || 'Failed to update status', 'error');
      }
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
    }
  };

  // Handle bulk status update
  const handleBulkStatusUpdate = async (newStatus) => {
    if (selectedAppIds.size === 0) return;
    const ids = Array.from(selectedAppIds);

    try {
      const res = await fetch('/api/admin/career', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids, status: newStatus })
      });
      const data = await res.json();
      if (data.success) {
        Swal.fire('Updated!', `${ids.length} applications marked as ${newStatus}`, 'success');
        setSelectedAppIds(new Set());
        fetchApplications();
      } else {
        Swal.fire('Error', data.error || 'Bulk update failed', 'error');
      }
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
    }
  };

  // Handle single delete
  const handleDeleteApp = async (app) => {
    const confirm = await Swal.fire({
      title: 'Delete Application?',
      text: `Are you sure you want to permanently delete application for ${app.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Yes, Delete'
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch('/api/admin/career', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: app._id })
      });
      const data = await res.json();
      if (data.success) {
        Swal.fire('Deleted', 'Application removed successfully', 'success');
        if (detailsApp?._id === app._id) setDetailsApp(null);
        if (previewApp?._id === app._id) setPreviewApp(null);
        fetchApplications();
      } else {
        Swal.fire('Error', data.error || 'Failed to delete', 'error');
      }
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
    }
  };

  // Handle bulk delete
  const handleBulkDelete = async () => {
    if (selectedAppIds.size === 0) return;
    const ids = Array.from(selectedAppIds);

    const confirm = await Swal.fire({
      title: `Delete ${ids.length} Applications?`,
      text: 'This action cannot be undone. Resumes and candidate records will be erased.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Yes, Delete Selected'
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch('/api/admin/career', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids })
      });
      const data = await res.json();
      if (data.success) {
        Swal.fire('Deleted', `${data.deletedCount} applications deleted`, 'success');
        setSelectedAppIds(new Set());
        fetchApplications();
      } else {
        Swal.fire('Error', data.error || 'Bulk delete failed', 'error');
      }
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
    }
  };

  // Select all toggle
  const toggleSelectAll = () => {
    if (selectedAppIds.size === applications.length) {
      setSelectedAppIds(new Set());
    } else {
      setSelectedAppIds(new Set(applications.map((a) => a._id)));
    }
  };

  const toggleSelectOne = (id) => {
    const next = new Set(selectedAppIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedAppIds(next);
  };

  // Export to CSV
  const handleExportCSV = () => {
    const dataToExport =
      selectedAppIds.size > 0
        ? applications.filter((a) => selectedAppIds.has(a._id))
        : applications;

    if (dataToExport.length === 0) {
      Swal.fire('No Data', 'No candidate applications available to export.', 'info');
      return;
    }

    const headers = ['Name', 'Email', 'Phone', 'Position', 'Status', 'Applied At', 'Resume Attached', 'Message'];
    const rows = dataToExport.map((a) => [
      `"${(a.name || '').replace(/"/g, '""')}"`,
      `"${(a.email || '').replace(/"/g, '""')}"`,
      `"${(a.phone || '').replace(/"/g, '""')}"`,
      `"${(a.position || '').replace(/"/g, '""')}"`,
      `"${a.status || 'New'}"`,
      `"${a.createdAt ? new Date(a.createdAt).toISOString() : ''}"`,
      `"${a.cvFileName ? 'Yes (' + a.cvFileName + ')' : 'No'}"`,
      `"${(a.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `MaaJanki_Career_Applications_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Jobs Actions
  const handleOpenJobModal = (job = null) => {
    if (job) {
      setEditingJob(job);
      setJobForm({
        title: job.title || '',
        category: job.category || 'fulltime',
        department: job.department || 'Engineering',
        experience: job.experience || '1–3 Years',
        location: job.location || 'Bagaha, Bihar (HQ) / Hybrid',
        salary: job.salary || 'Competitive',
        openings: job.openings || 1,
        skills: job.skills || '',
        qualification: job.qualification || '',
        duration: job.duration || 'Full-Time position.',
        description: job.description || '',
        requirements: Array.isArray(job.requirements) ? job.requirements.join('\n') : job.requirements || '',
        isActive: job.isActive !== undefined ? job.isActive : true
      });
    } else {
      setEditingJob(null);
      setJobForm({
        title: '',
        category: 'fulltime',
        department: 'Engineering',
        experience: '1–3 Years',
        location: 'Bagaha, Bihar (HQ) / Hybrid',
        salary: 'Competitive',
        openings: 1,
        skills: '',
        qualification: '',
        duration: 'Full-Time position.',
        description: '',
        requirements: '',
        isActive: true
      });
    }
    setIsJobModalOpen(true);
  };

  const handleSaveJob = async (e) => {
    e.preventDefault();
    try {
      const url = '/api/admin/jobs';
      const method = editingJob ? 'PATCH' : 'POST';
      const payload = {
        ...(editingJob ? { id: editingJob._id } : {}),
        ...jobForm
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        Swal.fire('Success', editingJob ? 'Job updated successfully' : 'New position posted successfully!', 'success');
        setIsJobModalOpen(false);
        fetchJobs();
      } else {
        Swal.fire('Error', data.error || 'Failed to save job opening', 'error');
      }
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
    }
  };

  const handleToggleJobStatus = async (job) => {
    try {
      const nextActive = !job.isActive;
      const res = await fetch('/api/admin/jobs', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: job._id, isActive: nextActive })
      });
      const data = await res.json();
      if (data.success) {
        setJobs((prev) =>
          prev.map((j) => (j._id === job._id ? { ...j, isActive: nextActive } : j))
        );
      } else {
        Swal.fire('Error', data.error || 'Failed to toggle status', 'error');
      }
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
    }
  };

  const handleDeleteJob = async (job) => {
    const confirm = await Swal.fire({
      title: 'Delete Position?',
      text: `Are you sure you want to remove "${job.title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Yes, Delete'
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch('/api/admin/jobs', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: job._id })
      });
      const data = await res.json();
      if (data.success) {
        Swal.fire('Deleted', 'Job opening removed.', 'success');
        fetchJobs();
      } else {
        Swal.fire('Error', data.error || 'Failed to delete job', 'error');
      }
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
    }
  };

  const filteredJobs = useMemo(() => {
    if (jobCategoryFilter === 'all') return jobs;
    return jobs.filter((j) => j.category === jobCategoryFilter);
  }, [jobs, jobCategoryFilter]);

  return (
    <div style={{ padding: '24px', maxWidth: '1440px', margin: '0 auto', color: 'var(--text-primary, #0f172a)' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: 'rgba(253, 106, 2, 0.12)', padding: '10px', borderRadius: '12px', color: '#FD6A02' }}>
              <Briefcase size={26} />
            </div>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: '700', margin: 0, color: 'var(--text-primary, #0f172a)' }}>
                Careers & Talent Hub
              </h1>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--text-secondary, #64748b)' }}>
                Review candidate applications, preview resumes in-browser, track hiring stages, and manage public job listings.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', background: 'var(--bg-muted, #f1f5f9)', padding: '4px', borderRadius: '10px', gap: '4px' }}>
          <button
            onClick={() => setActiveTab('applications')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '13px',
              background: activeTab === 'applications' ? '#ffffff' : 'transparent',
              color: activeTab === 'applications' ? '#FD6A02' : 'var(--text-secondary, #64748b)',
              boxShadow: activeTab === 'applications' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Users size={16} />
            Applications Pipeline ({stats.total})
          </button>

          <button
            onClick={() => setActiveTab('jobs')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 18px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '13px',
              background: activeTab === 'jobs' ? '#ffffff' : 'transparent',
              color: activeTab === 'jobs' ? '#FD6A02' : 'var(--text-secondary, #64748b)',
              boxShadow: activeTab === 'jobs' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            <Layers size={16} />
            Job Listings ({jobs.length})
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: APPLICATIONS PIPELINE                                              */}
      {/* ========================================================================= */}
      {activeTab === 'applications' && (
        <>
          {/* Summary KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '14px', marginBottom: '24px' }}>
            <div style={{ background: 'var(--bg-card, #ffffff)', border: '1px solid var(--border-color, #e2e8f0)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary, #64748b)', fontWeight: 500 }}>Total Applicants</span>
                <Users size={16} color="#64748b" />
              </div>
              <div style={{ fontSize: '26px', fontWeight: '800', marginTop: '8px', color: 'var(--text-primary, #0f172a)' }}>{stats.total}</div>
            </div>

            <div
              onClick={() => setStatusFilter(statusFilter === 'New' ? 'All' : 'New')}
              style={{
                background: 'var(--bg-card, #ffffff)',
                border: `1px solid ${statusFilter === 'New' ? '#3b82f6' : 'var(--border-color, #e2e8f0)'}`,
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#3b82f6', fontWeight: 600 }}>New Submissions</span>
                <Sparkles size={16} color="#3b82f6" />
              </div>
              <div style={{ fontSize: '26px', fontWeight: '800', marginTop: '8px', color: '#3b82f6' }}>{stats.new}</div>
            </div>

            <div
              onClick={() => setStatusFilter(statusFilter === 'Reviewing' ? 'All' : 'Reviewing')}
              style={{
                background: 'var(--bg-card, #ffffff)',
                border: `1px solid ${statusFilter === 'Reviewing' ? '#f59e0b' : 'var(--border-color, #e2e8f0)'}`,
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 600 }}>Under Review</span>
                <Clock size={16} color="#f59e0b" />
              </div>
              <div style={{ fontSize: '26px', fontWeight: '800', marginTop: '8px', color: '#f59e0b' }}>{stats.reviewing}</div>
            </div>

            <div
              onClick={() => setStatusFilter(statusFilter === 'Shortlisted' ? 'All' : 'Shortlisted')}
              style={{
                background: 'var(--bg-card, #ffffff)',
                border: `1px solid ${statusFilter === 'Shortlisted' ? '#10b981' : 'var(--border-color, #e2e8f0)'}`,
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 600 }}>Shortlisted</span>
                <UserCheck size={16} color="#10b981" />
              </div>
              <div style={{ fontSize: '26px', fontWeight: '800', marginTop: '8px', color: '#10b981' }}>{stats.shortlisted}</div>
            </div>

            <div
              onClick={() => setStatusFilter(statusFilter === 'Interviewed' ? 'All' : 'Interviewed')}
              style={{
                background: 'var(--bg-card, #ffffff)',
                border: `1px solid ${statusFilter === 'Interviewed' ? '#8b5cf6' : 'var(--border-color, #e2e8f0)'}`,
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#8b5cf6', fontWeight: 600 }}>Interviewed</span>
                <Users size={16} color="#8b5cf6" />
              </div>
              <div style={{ fontSize: '26px', fontWeight: '800', marginTop: '8px', color: '#8b5cf6' }}>{stats.interviewed}</div>
            </div>

            <div
              onClick={() => setStatusFilter(statusFilter === 'Rejected' ? 'All' : 'Rejected')}
              style={{
                background: 'var(--bg-card, #ffffff)',
                border: `1px solid ${statusFilter === 'Rejected' ? '#ef4444' : 'var(--border-color, #e2e8f0)'}`,
                borderRadius: '12px',
                padding: '16px',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#ef4444', fontWeight: 600 }}>Rejected</span>
                <UserX size={16} color="#ef4444" />
              </div>
              <div style={{ fontSize: '26px', fontWeight: '800', marginTop: '8px', color: '#ef4444' }}>{stats.rejected}</div>
            </div>
          </div>

          {/* Action Bar (Search, Filters, Bulk, Export) */}
          <div
            style={{
              background: 'var(--bg-card, #ffffff)',
              border: '1px solid var(--border-color, #e2e8f0)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1 1 260px', maxWidth: '400px' }}>
              <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search candidates by name, email, phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color, #cbd5e1)',
                  background: 'var(--bg-input, #f8fafc)',
                  fontSize: '13px',
                  color: 'inherit',
                  outline: 'none'
                }}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Filter Dropdowns */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color, #cbd5e1)',
                  background: 'var(--bg-input, #f8fafc)',
                  fontSize: '13px',
                  color: 'inherit',
                  cursor: 'pointer'
                }}
              >
                <option value="All">All Statuses</option>
                <option value="New">New</option>
                <option value="Reviewing">Reviewing</option>
                <option value="Shortlisted">Shortlisted</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Rejected">Rejected</option>
                <option value="Hired">Hired</option>
              </select>

              <select
                value={positionFilter}
                onChange={(e) => setPositionFilter(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color, #cbd5e1)',
                  background: 'var(--bg-input, #f8fafc)',
                  fontSize: '13px',
                  color: 'inherit',
                  cursor: 'pointer',
                  maxWidth: '200px'
                }}
              >
                <option value="All">All Positions</option>
                {positionsList.map((pos) => (
                  <option key={pos} value={pos}>
                    {pos}
                  </option>
                ))}
              </select>

              <button
                onClick={fetchApplications}
                title="Refresh Applications"
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color, #cbd5e1)',
                  background: 'var(--bg-input, #f8fafc)',
                  cursor: 'pointer',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <RefreshCw size={15} />
              </button>
            </div>

            {/* Bulk Actions & Export */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {selectedAppIds.size > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(253, 106, 2, 0.08)', padding: '4px 8px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#FD6A02' }}>{selectedAppIds.size} selected</span>

                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        handleBulkStatusUpdate(e.target.value);
                        e.target.value = '';
                      }
                    }}
                    defaultValue=""
                    style={{
                      padding: '5px 8px',
                      borderRadius: '6px',
                      border: '1px solid #fdba74',
                      fontSize: '12px',
                      background: '#fff',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="" disabled>Change Status...</option>
                    <option value="New">Mark as New</option>
                    <option value="Reviewing">Mark as Reviewing</option>
                    <option value="Shortlisted">Mark as Shortlisted</option>
                    <option value="Interviewed">Mark as Interviewed</option>
                    <option value="Rejected">Mark as Rejected</option>
                    <option value="Hired">Mark as Hired</option>
                  </select>

                  <button
                    onClick={handleBulkDelete}
                    style={{
                      padding: '5px 8px',
                      borderRadius: '6px',
                      border: '1px solid #fca5a5',
                      background: '#fee2e2',
                      color: '#dc2626',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Trash2 size={13} />
                    Delete
                  </button>
                </div>
              )}

              <button
                onClick={handleExportCSV}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  border: '1px solid #10b981',
                  background: 'rgba(16, 185, 129, 0.08)',
                  color: '#059669',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                <Download size={15} />
                Export CSV {selectedAppIds.size > 0 ? `(${selectedAppIds.size})` : ''}
              </button>
            </div>
          </div>

          {/* Applications Table */}
          <div style={{ background: 'var(--bg-card, #ffffff)', border: '1px solid var(--border-color, #e2e8f0)', borderRadius: '12px', overflow: 'hidden' }}>
            {loadingApps ? (
              <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8' }}>
                <RefreshCw size={28} className="animate-spin" style={{ margin: '0 auto 12px' }} />
                <p>Loading candidate applications...</p>
              </div>
            ) : applications.length === 0 ? (
              <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8' }}>
                <Users size={36} style={{ margin: '0 auto 12px', opacity: 0.5 }} />
                <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 6px', color: 'var(--text-primary, #0f172a)' }}>No applications found</h3>
                <p style={{ fontSize: '13px', margin: 0 }}>Try clearing search or filters to view all submissions.</p>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: 'var(--bg-muted, #f8fafc)', borderBottom: '1px solid var(--border-color, #e2e8f0)', color: 'var(--text-secondary, #64748b)' }}>
                      <th style={{ width: '40px', padding: '12px 14px' }}>
                        <input
                          type="checkbox"
                          checked={applications.length > 0 && selectedAppIds.size === applications.length}
                          onChange={toggleSelectAll}
                          style={{ cursor: 'pointer' }}
                        />
                      </th>
                      <th style={{ padding: '12px 14px', fontWeight: 600 }}>Candidate</th>
                      <th style={{ padding: '12px 14px', fontWeight: 600 }}>Applied Position</th>
                      <th style={{ padding: '12px 14px', fontWeight: 600 }}>Status</th>
                      <th style={{ padding: '12px 14px', fontWeight: 600 }}>Resume / CV</th>
                      <th style={{ padding: '12px 14px', fontWeight: 600 }}>Applied Date</th>
                      <th style={{ padding: '12px 14px', fontWeight: 600, textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => {
                      const statusInfo = STATUS_CONFIG[app.status] || STATUS_CONFIG.New;
                      const hasCv = Boolean(app.cvFileName || app.cvFileSize > 0);
                      const isSelected = selectedAppIds.has(app._id);

                      return (
                        <tr
                          key={app._id}
                          style={{
                            borderBottom: '1px solid var(--border-color, #f1f5f9)',
                            backgroundColor: isSelected ? 'rgba(253, 106, 2, 0.04)' : 'transparent',
                            transition: 'background-color 0.15s ease'
                          }}
                        >
                          <td style={{ padding: '12px 14px' }}>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleSelectOne(app._id)}
                              style={{ cursor: 'pointer' }}
                            />
                          </td>

                          {/* Candidate Name & Contact */}
                          <td style={{ padding: '12px 14px' }}>
                            <div style={{ fontWeight: 600, color: 'var(--text-primary, #0f172a)', fontSize: '14px' }}>
                              {app.name}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '3px', fontSize: '12px', color: 'var(--text-secondary, #64748b)' }}>
                              <a
                                href={`mailto:${app.email}`}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: 'inherit', textDecoration: 'none' }}
                                title="Send Email"
                              >
                                <Mail size={12} /> {app.email}
                              </a>
                              <a
                                href={`tel:${app.phone}`}
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', color: 'inherit', textDecoration: 'none' }}
                                title="Call"
                              >
                                <Phone size={12} /> {app.phone}
                              </a>
                            </div>
                          </td>

                          {/* Applied Position */}
                          <td style={{ padding: '12px 14px' }}>
                            <span
                              style={{
                                display: 'inline-block',
                                padding: '3px 8px',
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: 500,
                                background: 'rgba(253, 106, 2, 0.08)',
                                color: '#FD6A02',
                                maxWidth: '200px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                              }}
                              title={app.position}
                            >
                              {app.position}
                            </span>
                          </td>

                          {/* Status Dropdown */}
                          <td style={{ padding: '12px 14px' }}>
                            <select
                              value={app.status || 'New'}
                              onChange={(e) => handleUpdateStatus(app._id, e.target.value)}
                              style={{
                                padding: '4px 8px',
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: 600,
                                border: `1px solid ${statusInfo.border}`,
                                background: statusInfo.bg,
                                color: statusInfo.color,
                                cursor: 'pointer',
                                outline: 'none'
                              }}
                            >
                              <option value="New">New</option>
                              <option value="Reviewing">Reviewing</option>
                              <option value="Shortlisted">Shortlisted</option>
                              <option value="Interviewed">Interviewed</option>
                              <option value="Rejected">Rejected</option>
                              <option value="Hired">Hired</option>
                            </select>
                          </td>

                          {/* Resume / CV Actions */}
                          <td style={{ padding: '12px 14px' }}>
                            {hasCv ? (
                              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <button
                                  onClick={() => setPreviewApp(app)}
                                  title="In-Browser PDF Preview"
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    padding: '4px 8px',
                                    borderRadius: '6px',
                                    border: '1px solid #3b82f6',
                                    background: 'rgba(59, 130, 246, 0.08)',
                                    color: '#2563eb',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                  }}
                                >
                                  <Eye size={13} />
                                  Preview
                                </button>

                                <a
                                  href={`/api/admin/career/cv/${app._id}?download=1`}
                                  title="Direct Download PDF"
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    padding: '4px 6px',
                                    borderRadius: '6px',
                                    border: '1px solid var(--border-color, #cbd5e1)',
                                    background: 'var(--bg-input, #f8fafc)',
                                    color: 'var(--text-secondary, #64748b)',
                                    cursor: 'pointer',
                                    textDecoration: 'none'
                                  }}
                                >
                                  <Download size={13} />
                                </a>

                                <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                                  {formatBytes(app.cvFileSize)}
                                </span>
                              </div>
                            ) : (
                              <span style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic' }}>
                                Not attached
                              </span>
                            )}
                          </td>

                          {/* Date */}
                          <td style={{ padding: '12px 14px', color: 'var(--text-secondary, #64748b)', fontSize: '12px' }}>
                            <div title={new Date(app.createdAt).toLocaleString()}>{formatDate(app.createdAt)}</div>
                          </td>

                          {/* Row Actions */}
                          <td style={{ padding: '12px 14px', textAlign: 'right' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <button
                                onClick={() => setDetailsApp(app)}
                                title="View Application Details & Notes"
                                style={{
                                  padding: '5px 8px',
                                  borderRadius: '6px',
                                  border: '1px solid var(--border-color, #cbd5e1)',
                                  background: 'var(--bg-input, #f8fafc)',
                                  color: 'var(--text-secondary, #64748b)',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  fontSize: '12px'
                                }}
                              >
                                <FileText size={13} />
                                Details
                              </button>

                              <button
                                onClick={() => handleDeleteApp(app)}
                                title="Delete Application"
                                style={{
                                  padding: '5px 8px',
                                  borderRadius: '6px',
                                  border: '1px solid #fecaca',
                                  background: '#fff',
                                  color: '#ef4444',
                                  cursor: 'pointer',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: JOB OPENINGS MANAGER                                               */}
      {/* ========================================================================= */}
      {activeTab === 'jobs' && (
        <>
          {/* Top Bar for Jobs */}
          <div
            style={{
              background: 'var(--bg-card, #ffffff)',
              border: '1px solid var(--border-color, #e2e8f0)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
              {[
                { id: 'all', label: 'All Listings' },
                { id: 'fulltime', label: 'Full-Time' },
                { id: 'intern', label: 'Internships' },
                { id: 'parttime', label: 'Part-Time' },
                { id: 'contract', label: 'Contract' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setJobCategoryFilter(cat.id)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    background: jobCategoryFilter === cat.id ? '#FD6A02' : 'var(--bg-muted, #f1f5f9)',
                    color: jobCategoryFilter === cat.id ? '#ffffff' : 'var(--text-secondary, #64748b)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={fetchJobs}
                title="Refresh Jobs"
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color, #cbd5e1)',
                  background: 'var(--bg-input, #f8fafc)',
                  cursor: 'pointer',
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <RefreshCw size={15} />
              </button>

              <button
                onClick={() => handleOpenJobModal(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#FD6A02',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(253, 106, 2, 0.3)'
                }}
              >
                <Plus size={16} />
                Add New Position
              </button>
            </div>
          </div>

          {/* Jobs Listing Cards / Table */}
          {loadingJobs ? (
            <div style={{ padding: '60px', textAlign: 'center', color: '#94a3b8' }}>
              <RefreshCw size={28} className="animate-spin" style={{ margin: '0 auto 12px' }} />
              <p>Loading active job openings...</p>
            </div>
          ) : filteredJobs.length === 0 ? (
            <div style={{ padding: '60px', textAlign: 'center', background: '#fff', borderRadius: '12px', border: '1px solid var(--border-color, #e2e8f0)' }}>
              <Briefcase size={36} style={{ margin: '0 auto 12px', opacity: 0.5, color: '#94a3b8' }} />
              <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 6px', color: 'var(--text-primary, #0f172a)' }}>No job positions found</h3>
              <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px' }}>Create a new position or adjust your category filter.</p>
              <button
                onClick={() => handleOpenJobModal(null)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#FD6A02',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                + Add First Position
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '16px' }}>
              {filteredJobs.map((job) => (
                <div
                  key={job._id}
                  style={{
                    background: 'var(--bg-card, #ffffff)',
                    border: `1px solid ${job.isActive ? 'var(--border-color, #e2e8f0)' : '#fca5a5'}`,
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    opacity: job.isActive ? 1 : 0.75,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    {/* Header: Title + Category Pill */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: 'var(--text-primary, #0f172a)' }}>
                        {job.title}
                      </h3>
                      <span
                        style={{
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          background: job.category === 'intern' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(253, 106, 2, 0.1)',
                          color: job.category === 'intern' ? '#2563eb' : '#FD6A02'
                        }}
                      >
                        {job.category}
                      </span>
                    </div>

                    {/* Department & Experience Meta */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', fontSize: '12px', color: 'var(--text-secondary, #64748b)', marginBottom: '12px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Building size={13} /> {job.department || 'General'}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <Briefcase size={13} /> {job.experience}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <MapPin size={13} /> {job.location}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <DollarSign size={13} /> {job.salary}
                      </span>
                    </div>

                    {/* Skills snippet */}
                    {job.skills && (
                      <p style={{ fontSize: '12px', color: 'var(--text-secondary, #64748b)', margin: '0 0 12px', lineHeight: 1.5 }}>
                        <strong>Skills:</strong> {job.skills}
                      </p>
                    )}

                    {/* Applicant count pill */}
                    <div style={{ marginBottom: '16px' }}>
                      <span
                        onClick={() => {
                          setPositionFilter(job.title);
                          setActiveTab('applications');
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'var(--bg-muted, #f1f5f9)',
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#FD6A02',
                          cursor: 'pointer'
                        }}
                      >
                        <Users size={13} />
                        {job.applicantCount || 0} Applicants (View)
                      </span>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div
                    style={{
                      borderTop: '1px solid var(--border-color, #f1f5f9)',
                      paddingTop: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Active/Inactive Toggle */}
                    <label style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
                      <input
                        type="checkbox"
                        checked={job.isActive}
                        onChange={() => handleToggleJobStatus(job)}
                        style={{ cursor: 'pointer' }}
                      />
                      <span style={{ color: job.isActive ? '#10b981' : '#ef4444' }}>
                        {job.isActive ? 'Active on Careers' : 'Hidden / Inactive'}
                      </span>
                    </label>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => handleOpenJobModal(job)}
                        title="Edit Position"
                        style={{
                          padding: '6px 10px',
                          borderRadius: '6px',
                          border: '1px solid var(--border-color, #cbd5e1)',
                          background: 'var(--bg-input, #f8fafc)',
                          color: 'var(--text-secondary, #64748b)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '12px'
                        }}
                      >
                        <Edit size={13} />
                        Edit
                      </button>

                      <button
                        onClick={() => handleDeleteJob(job)}
                        title="Delete Position"
                        style={{
                          padding: '6px 10px',
                          borderRadius: '6px',
                          border: '1px solid #fca5a5',
                          background: '#fff',
                          color: '#ef4444',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ========================================================================= */}
      {/* IN-BROWSER PDF PREVIEW MODAL                                              */}
      {/* ========================================================================= */}
      {previewApp && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '960px',
              height: '90vh',
              background: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                height: '60px',
                padding: '0 20px',
                background: '#0f172a',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #334155'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <FileCheck size={20} color="#FD6A02" />
                <div>
                  <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600 }}>
                    {previewApp.name} &mdash; Resume / CV
                  </h3>
                  <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8' }}>
                    {previewApp.position} &bull; {previewApp.cvFileName || 'Candidate_Resume.pdf'} ({formatBytes(previewApp.cvFileSize)})
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* 1-Click Direct Download */}
                <a
                  href={`/api/admin/career/cv/${previewApp._id}?download=1`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: '#FD6A02',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <Download size={14} />
                  Download PDF
                </a>

                {/* Open in new browser tab */}
                <a
                  href={`/api/admin/career/cv/${previewApp._id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    background: '#1e293b',
                    color: '#cbd5e1',
                    fontSize: '12px',
                    textDecoration: 'none'
                  }}
                  title="Open in new window"
                >
                  <ExternalLink size={14} />
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setPreviewApp(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF iframe */}
            <div style={{ flex: 1, position: 'relative', background: '#e2e8f0' }}>
              <iframe
                src={`/api/admin/career/cv/${previewApp._id}`}
                title={`CV - ${previewApp.name}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CANDIDATE DETAILS MODAL                                                   */}
      {/* ========================================================================= */}
      {detailsApp && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '650px',
              maxHeight: '90vh',
              background: '#ffffff',
              borderRadius: '16px',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              padding: '24px'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    background: 'rgba(253, 106, 2, 0.1)',
                    color: '#FD6A02',
                    marginBottom: '6px'
                  }}
                >
                  {detailsApp.position}
                </span>
                <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary, #0f172a)' }}>
                  {detailsApp.name}
                </h2>
                <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>
                  Applied on {formatDate(detailsApp.createdAt)} &bull; Source: {detailsApp.source || 'careers-page'}
                </p>
              </div>

              <button
                onClick={() => setDetailsApp(null)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Contact Details Box */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px', marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 10px', fontSize: '13px', fontWeight: 600, color: '#334155' }}>Contact Information</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px' }}>
                <div>
                  <span style={{ color: '#64748b', fontSize: '11px', display: 'block' }}>Email Address</span>
                  <a href={`mailto:${detailsApp.email}`} style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none' }}>
                    {detailsApp.email}
                  </a>
                </div>
                <div>
                  <span style={{ color: '#64748b', fontSize: '11px', display: 'block' }}>Phone Number</span>
                  <a href={`tel:${detailsApp.phone}`} style={{ color: '#0f172a', fontWeight: 500, textDecoration: 'none' }}>
                    {detailsApp.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Candidate Cover Note / Message */}
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ margin: '0 0 8px', fontSize: '13px', fontWeight: 600, color: '#334155' }}>Candidate Message / Cover Note</h4>
              <div
                style={{
                  background: '#f1f5f9',
                  padding: '14px',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: '#1e293b',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap',
                  maxHeight: '180px',
                  overflowY: 'auto'
                }}
              >
                {detailsApp.message || 'No additional message was provided with this application.'}
              </div>
            </div>

            {/* Resume / CV Section */}
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ margin: '0 0 8px', fontSize: '13px', fontWeight: 600, color: '#334155' }}>Resume / CV Document</h4>
              {detailsApp.cvFileName ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FileText size={20} color="#FD6A02" />
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600 }}>{detailsApp.cvFileName}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>PDF Document &bull; {formatBytes(detailsApp.cvFileSize)}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => setPreviewApp(detailsApp)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: '1px solid #3b82f6',
                        background: '#eff6ff',
                        color: '#2563eb',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      In-Browser Preview
                    </button>
                    <a
                      href={`/api/admin/career/cv/${detailsApp._id}?download=1`}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: '1px solid #FD6A02',
                        background: '#FD6A02',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecoration: 'none'
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              ) : (
                <p style={{ fontSize: '13px', color: '#94a3b8', fontStyle: 'italic', margin: 0 }}>No resume uploaded with this application.</p>
              )}
            </div>

            {/* Status Pipeline Buttons */}
            <div>
              <h4 style={{ margin: '0 0 10px', fontSize: '13px', fontWeight: 600, color: '#334155' }}>Update Application Stage</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['New', 'Reviewing', 'Shortlisted', 'Interviewed', 'Rejected', 'Hired'].map((st) => {
                  const isActive = detailsApp.status === st;
                  const cfg = STATUS_CONFIG[st];
                  return (
                    <button
                      key={st}
                      onClick={() => handleUpdateStatus(detailsApp._id, st)}
                      style={{
                        padding: '7px 14px',
                        borderRadius: '8px',
                        border: `1px solid ${isActive ? cfg.color : '#cbd5e1'}`,
                        background: isActive ? cfg.color : '#ffffff',
                        color: isActive ? '#ffffff' : '#475569',
                        fontWeight: 600,
                        fontSize: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {isActive && <Check size={12} style={{ display: 'inline', marginRight: '4px' }} />}
                      {st}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ADD / EDIT JOB OPENING MODAL                                              */}
      {/* ========================================================================= */}
      {isJobModalOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              maxHeight: '90vh',
              background: '#ffffff',
              borderRadius: '16px',
              overflowY: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              padding: '24px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
              <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--text-primary, #0f172a)' }}>
                {editingJob ? 'Edit Job Opening' : 'Post New Job / Internship'}
              </h2>
              <button onClick={() => setIsJobModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveJob}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                {/* Title */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Job Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI Automation Engineer, SEO Executive"
                    value={jobForm.title}
                    onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                {/* Category */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Category *
                  </label>
                  <select
                    value={jobForm.category}
                    onChange={(e) => setJobForm({ ...jobForm, category: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  >
                    <option value="fulltime">Full-Time</option>
                    <option value="intern">Internship</option>
                    <option value="parttime">Part-Time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>

                {/* Department */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Department
                  </label>
                  <select
                    value={jobForm.department}
                    onChange={(e) => setJobForm({ ...jobForm, department: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing & SEO">Marketing & SEO</option>
                    <option value="Creative & Design">Creative & Design</option>
                    <option value="Sales & Growth">Sales & Growth</option>
                    <option value="Content & Social">Content & Social</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Experience Required
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 0–1 Years (Freshers Welcome)"
                    value={jobForm.experience}
                    onChange={(e) => setJobForm({ ...jobForm, experience: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                {/* Location */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bagaha, Bihar (HQ) / Hybrid"
                    value={jobForm.location}
                    onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                {/* Salary */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Salary / Stipend
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹25,000 – ₹45,000 / month"
                    value={jobForm.salary}
                    onChange={(e) => setJobForm({ ...jobForm, salary: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                {/* Openings Count */}
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Openings Count
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={jobForm.openings}
                    onChange={(e) => setJobForm({ ...jobForm, openings: Number(e.target.value) })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                {/* Duration */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Duration / Term
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Free Internship – 3 months with official certificate and PPO"
                    value={jobForm.duration}
                    onChange={(e) => setJobForm({ ...jobForm, duration: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                {/* Skills */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Key Skills Required
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next.js 15, React, Node.js, MongoDB, REST APIs"
                    value={jobForm.skills}
                    onChange={(e) => setJobForm({ ...jobForm, skills: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                {/* Qualification */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px', color: '#334155' }}>
                    Qualification
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. B.Tech / BCA / MCA or self-taught with strong portfolio"
                    value={jobForm.qualification}
                    onChange={(e) => setJobForm({ ...jobForm, qualification: e.target.value })}
                    style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '13px' }}
                  />
                </div>

                {/* Active Checkbox */}
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: '#334155' }}>
                    <input
                      type="checkbox"
                      checked={jobForm.isActive}
                      onChange={(e) => setJobForm({ ...jobForm, isActive: e.target.checked })}
                      style={{ cursor: 'pointer' }}
                    />
                    Publish live on public Careers page immediately
                  </label>
                </div>
              </div>

              {/* Modal Actions */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <button
                  type="button"
                  onClick={() => setIsJobModalOpen(false)}
                  style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer', fontSize: '13px' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '8px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#FD6A02',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  {editingJob ? 'Save Changes' : 'Publish Position'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
