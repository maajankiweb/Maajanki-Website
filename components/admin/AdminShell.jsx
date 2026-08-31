'use client';

import { useState, useEffect, createContext, useContext, useCallback, useRef } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import AdminLockScreen from './AdminLockScreen';

/**
 * Admin Dashboard Context
 * Provides shared state across all admin components
 */
const AdminContext = createContext(null);

export function useAdminContext() {
  const ctx = useContext(AdminContext);
  if (!ctx) {
    throw new Error('useAdminContext must be used within AdminShell');
  }
  return ctx;
}

/**
 * AdminShell — Root layout wrapper for the admin dashboard.
 * Manages sidebar collapse, theme toggle, mobile drawer state, and zero-trust auto-lock.
 */
export default function AdminShell({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const inactivityTimerRef = useRef(null);

  // Inactivity Auto-Lock (15 Minutes)
  const INACTIVITY_TIMEOUT_MS = 15 * 60 * 1000;

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      setIsLocked(true);
    }, INACTIVITY_TIMEOUT_MS);
  }, [INACTIVITY_TIMEOUT_MS]);

  useEffect(() => {
    const handleUserActivity = () => {
      if (!isLocked) {
        resetInactivityTimer();
      }
    };

    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];
    events.forEach(evt => window.addEventListener(evt, handleUserActivity, { passive: true }));
    resetInactivityTimer();

    return () => {
      events.forEach(evt => window.removeEventListener(evt, handleUserActivity));
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [resetInactivityTimer, isLocked]);

  // Load persisted preferences on mount
  useEffect(() => {
    try {
      const savedCollapsed = localStorage.getItem('mj-admin-sidebar-collapsed');
      const savedTheme = localStorage.getItem('mj-admin-theme');

      if (savedCollapsed !== null) {
        setCollapsed(savedCollapsed === 'true');
      }

      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    } catch {
      // localStorage not available
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('mj-admin-theme', theme);
      } catch { /* ignore */ }
    }
  }, [theme, mounted]);

  // Persist sidebar state
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('mj-admin-sidebar-collapsed', String(collapsed));
      } catch { /* ignore */ }
    }
  }, [collapsed, mounted]);

  // Close mobile sidebar on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile sidebar on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileOpen]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen || isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen, isLocked]);

  const toggleCollapse = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  const toggleMobileSidebar = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const lockSession = useCallback(() => {
    setIsLocked(true);
  }, []);

  const unlockSession = useCallback(() => {
    setIsLocked(false);
    resetInactivityTimer();
  }, [resetInactivityTimer]);

  const handleNavigate = useCallback((action) => {
    setMobileOpen(false);
    if (action === 'signout') {
      window.location.href = '/sign-in';
    } else if (action === 'lock') {
      lockSession();
    }
  }, [lockSession]);

  const contextValue = {
    collapsed,
    mobileOpen,
    theme,
    isLocked,
    toggleCollapse,
    toggleMobileSidebar,
    toggleTheme,
    lockSession,
    unlockSession,
    handleNavigate,
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="admin-shell" data-collapsed="false" data-theme="light">
        <div className="admin-sidebar" />
        <div className="admin-topbar" />
        <div className="admin-main">
          <div className="admin-grid admin-grid-4" style={{ marginTop: '24px' }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="admin-skeleton admin-skeleton-card" />
            ))}
          </div>
          <div className="admin-skeleton admin-skeleton-chart" style={{ marginTop: '24px' }} />
        </div>
      </div>
    );
  }

  return (
    <AdminContext.Provider value={contextValue}>
      <div
        className="admin-shell"
        data-collapsed={String(collapsed)}
        data-theme={theme}
      >
        {/* Session Security Lock Overlay */}
        {isLocked && <AdminLockScreen onUnlock={unlockSession} />}

        {/* Mobile Overlay */}
        <div
          className={`admin-sidebar-overlay ${mobileOpen ? 'visible' : ''}`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Sidebar */}
        <AdminSidebar
          collapsed={collapsed}
          onToggle={toggleCollapse}
          onNavigate={handleNavigate}
          mobileOpen={mobileOpen}
        />

        {/* Topbar */}
        <AdminHeader
          collapsed={collapsed}
          onToggleCollapse={toggleCollapse}
          onToggleMobileSidebar={toggleMobileSidebar}
          onToggleTheme={toggleTheme}
          onLockSession={lockSession}
          theme={theme}
        />

        {/* Main Content */}
        <main className="admin-main" role="main">
          {children}
        </main>
      </div>
    </AdminContext.Provider>
  );
}
