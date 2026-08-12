'use client';

import React, { useState, useEffect, useCallback, createContext, useContext, useRef } from 'react';
import { useAuth } from '@clerk/nextjs';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import NotificationCenter from './NotificationCenter';
import LogoutModal from './LogoutModal';
import CompactAdminFooter from './CompactAdminFooter';
import '@/app/admin/admin.css';

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

  // Real-Time States
  const [liveSync, setLiveSync] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [latestToast, setLatestToast] = useState(null);

  // Leads Data state
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const previousLeadCountRef = useRef(0);
  const isInitialMountRef = useRef(true);

  // Play subtle sound alert on new lead arrival
  const playNewLeadChime = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5 note
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5 note

      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch {
      // Audio playback blocked by browser policy until user interacts
    }
  }, [soundEnabled]);

  // Fetch leads from API (support silent background update)
  const fetchLeads = useCallback(async (isSilent = false) => {
    if (!isSilent) {
      setLoading(true);
    }
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
        const fetchedLeads = data.leads || [];

        // Check if new leads arrived during background poll
        if (!isInitialMountRef.current && fetchedLeads.length > previousLeadCountRef.current) {
          const newLeadCount = fetchedLeads.length - previousLeadCountRef.current;
          const newestLead = fetchedLeads[0];

          // Trigger sound chime & toast popup
          playNewLeadChime();
          setLatestToast({
            title: `🔔 ${newLeadCount} New Lead Received!`,
            name: newestLead?.name || 'New Client',
            service: newestLead?.service || 'Inquiry',
            email: newestLead?.email || '',
            timestamp: new Date().toLocaleTimeString(),
          });

          // Auto dismiss toast after 6 seconds
          setTimeout(() => {
            setLatestToast(null);
          }, 6000);
        }

        previousLeadCountRef.current = fetchedLeads.length;
        isInitialMountRef.current = false;
        setLeads(fetchedLeads);
      } else {
        if (!isSilent) setError(data.error || 'Failed to fetch leads');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      if (!isSilent) setError('Network connection error.');
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, [getToken, playNewLeadChime]);

  // Initial mount fetch
  useEffect(() => {
    fetchLeads(false);
  }, [fetchLeads]);

  // Real-time live background sync interval (every 10 seconds)
  useEffect(() => {
    if (!liveSync) return;

    const intervalId = setInterval(() => {
      fetchLeads(true); // Silent poll
    }, 10000);

    return () => clearInterval(intervalId);
  }, [liveSync, fetchLeads]);

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
      l.status || 'New',
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
    liveSync,
    setLiveSync,
    soundEnabled,
    setSoundEnabled,
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
            liveSync={liveSync}
            setLiveSync={setLiveSync}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
          />

          {/* Notifications Modal Dropdown */}
          {showNotifications && (
            <NotificationCenter leads={leads} onClose={() => setShowNotifications(false)} />
          )}

          {/* Real-time Toast Alert Notification Popup */}
          {latestToast && (
            <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-gradient-to-r from-slate-900 to-slate-800 border-2 border-orange-500/80 rounded-2xl shadow-2xl p-4 text-white animate-bounce">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h6 className="font-bold text-orange-400 text-sm">{latestToast.title}</h6>
                  <p className="font-semibold text-slate-100 text-xs mt-1">{latestToast.name} ({latestToast.service})</p>
                  <p className="text-[11px] text-slate-400">{latestToast.email} • {latestToast.timestamp}</p>
                </div>
                <button
                  onClick={() => setLatestToast(null)}
                  className="text-slate-400 hover:text-white text-xs px-1"
                >
                  ✕
                </button>
              </div>
            </div>
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
