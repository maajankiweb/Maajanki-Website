'use client';

import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { useAuth } from '@clerk/nextjs';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import NotificationCenter from './NotificationCenter';
import LogoutModal from './LogoutModal';
import CompactAdminFooter from './CompactAdminFooter';
import '@/app/admin/admin.css';

// Admin Context to share leads data across all admin sub-pages
const AdminContext = createContext();

export function useAdminContext() {
  return useContext(AdminContext);
}

export default function AdminShell({ children }) {
  const { getToken } = useAuth();
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

  // Fetch leads from API
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
        setError(data.error || 'Failed to fetch leads');
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

  const contextValue = {
    leads,
    loading,
    error,
    fetchLeads,
    handleUpdateStatus,
    handleDeleteLead,
    handleExportCSV,
    searchTerm,
    setSearchTerm,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      <div className={`admin-layout-root ${darkMode ? 'dark-theme bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        {/* Sidebar Navigation */}
        <AdminSidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          onLogoutClick={() => setShowLogoutModal(true)}
        />

        {/* Main Container */}
        <div className={`transition-all duration-300 ${collapsed ? 'lg:pl-20' : 'lg:pl-[280px]'}`}>
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
          {showNotifications && (
            <NotificationCenter leads={leads} onClose={() => setShowNotifications(false)} />
          )}

          {/* Dynamic Page Content */}
          <main className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
            {error && (
              <div className="p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-sm">
                {error}
              </div>
            )}
            {children}

            {/* Logout Confirmation Modal */}
            <LogoutModal isOpen={showLogoutModal} onClose={() => setShowLogoutModal(false)} />

            {/* Compact Admin Footer */}
            <CompactAdminFooter />
          </main>
        </div>
      </div>
    </AdminContext.Provider>
  );
}
