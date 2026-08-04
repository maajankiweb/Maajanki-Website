'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@clerk/nextjs';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import DashboardOverview from '@/components/admin/DashboardOverview';
import AnalyticsCharts from '@/components/admin/AnalyticsCharts';
import LeadMap from '@/components/admin/LeadMap';
import LeadsTable from '@/components/admin/LeadsTable';
import WebsiteFormsAnalytics from '@/components/admin/WebsiteFormsAnalytics';
import AIInsights from '@/components/admin/AIInsights';
import ActivityFeed from '@/components/admin/ActivityFeed';
import NotificationCenter from '@/components/admin/NotificationCenter';
import TasksKanban from '@/components/admin/TasksKanban';
import AdminSettings from '@/components/admin/AdminSettings';
import LogoutModal from '@/components/admin/LogoutModal';
import './admin.css';

export default function AdminPage() {
  const { getToken } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Leads Data state
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch leads from MongoDB Atlas API
  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const token = await getToken();
      const response = await fetch('/api/admin/leads?source=all&status=all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setLeads(data.leads || []);
      } else {
        setError(data.error || 'Failed to fetch leads from MongoDB');
      }
    } catch (err) {
      console.error(err);
      setError('Network connection error.');
    } finally {
      setLoading(false);
    }
  }, [getToken]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Update lead status handler
  const handleUpdateStatus = async (id, newStatus) => {
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
        alert(data.error || 'Failed to update lead status');
      }
    } catch {
      alert('Error updating status');
    }
  };

  // Delete lead handler
  const handleDeleteLead = async (id) => {
    if (!confirm('Are you sure you want to delete this lead record?')) return;

    try {
      const token = await getToken();
      const response = await fetch(`/api/admin/leads?id=${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setLeads((prev) => prev.filter((item) => item._id !== id));
      } else {
        alert(data.error || 'Failed to delete lead');
      }
    } catch {
      alert('Error deleting lead');
    }
  };

  // Export CSV handler
  const handleExportCSV = () => {
    if (leads.length === 0) return alert('No lead records to export.');

    const headers = ['Date', 'Source', 'Name', 'Email', 'Phone', 'Service', 'URL', 'Status', 'Message'];
    const rows = leads.map((l) => [
      new Date(l.createdAt || Date.now()).toLocaleString(),
      l.source || '',
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.phone || '').replace(/"/g, '""')}"`,
      `"${(l.service || '').replace(/"/g, '""')}"`,
      `"${(l.url || '').replace(/"/g, '""')}"`,
      l.status || 'new',
      `"${(l.message || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `maajanki_admin_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`admin-layout-root ${darkMode ? 'dark-theme bg-slate-950' : 'bg-slate-50'}`}>
      {/* Sidebar Navigation */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        onLogoutClick={() => setShowLogoutModal(true)}
      />

      {/* Main Container */}
      <div className={`transition-all duration-300 ${collapsed ? 'lg:pl-20' : 'lg:pl-64'}`}>
        {/* Header Bar */}
        <AdminHeader
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setMobileOpen={setMobileOpen}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onLogoutClick={() => setShowLogoutModal(true)}
          onOpenNotifications={() => setShowNotifications(!showNotifications)}
        />

        {/* Notifications Modal Dropdown */}
        {showNotifications && <NotificationCenter onClose={() => setShowNotifications(false)} />}

        {/* Dynamic Page Content */}
        <main className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
          {error && (
            <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-sm">
              {error}
            </div>
          )}

          {/* VIEW: Dashboard Overview */}
          {activeTab === 'dashboard' && (
            <>
              <DashboardOverview leads={leads} loading={loading} />
              <AnalyticsCharts />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <LeadMap />
                </div>
                <div>
                  <ActivityFeed />
                </div>
              </div>
              <AIInsights />
            </>
          )}

          {/* VIEW: Leads Module */}
          {(activeTab.startsWith('leads') || activeTab === 'leads') && (
            <LeadsTable
              leads={leads}
              loading={loading}
              onUpdateStatus={handleUpdateStatus}
              onDeleteLead={handleDeleteLead}
              onExportCSV={handleExportCSV}
            />
          )}

          {/* VIEW: Website Forms Analytics */}
          {(activeTab.startsWith('forms') || activeTab === 'websiteForms') && (
            <WebsiteFormsAnalytics />
          )}

          {/* VIEW: AI Insights */}
          {activeTab === 'ai-insights' && <AIInsights />}

          {/* VIEW: Maps Analytics */}
          {activeTab === 'maps' && <LeadMap />}

          {/* VIEW: Tasks & Kanban */}
          {activeTab === 'tasks' && <TasksKanban />}

          {/* VIEW: Settings & Security */}
          {activeTab === 'settings' && <AdminSettings />}

          {/* Fallback view for other items */}
          {!['dashboard', 'ai-insights', 'maps', 'tasks', 'settings'].includes(activeTab) &&
            !activeTab.startsWith('leads') &&
            !activeTab.startsWith('forms') && (
              <div className="p-8 text-center bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                <h3 className="text-xl font-bold text-slate-100 uppercase tracking-wide">
                  {activeTab.replace('-', ' ')} Module
                </h3>
                <p className="text-xs text-slate-400">
                  This section is synced live with your enterprise backend services.
                </p>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="px-4 py-2 text-xs font-semibold bg-orange-600 hover:bg-orange-500 text-white rounded-xl"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      <LogoutModal isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} />
    </div>
  );
}
