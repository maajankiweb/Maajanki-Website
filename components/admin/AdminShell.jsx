'use client';

import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

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
 * Manages sidebar collapse, theme toggle, and mobile drawer state.
 */
export default function AdminShell({ children }) {
  // Sidebar collapse state (persisted)
  const [collapsed, setCollapsed] = useState(false);
  // Mobile sidebar open state
  const [mobileOpen, setMobileOpen] = useState(false);
  // Theme state (persisted)
  const [theme, setTheme] = useState('light');
  // Loading state for initial mount
  const [mounted, setMounted] = useState(false);

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
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    } catch {
      // localStorage not available (SSR)
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

  // Close mobile sidebar on route change or resize
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
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleCollapse = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  const toggleMobileSidebar = useCallback(() => {
    setMobileOpen(prev => !prev);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  const handleNavigate = useCallback((action) => {
    // Close mobile sidebar on navigation
    setMobileOpen(false);
    if (action === 'signout') {
      // Redirect to sign-in page (Clerk handles sign out)
      window.location.href = '/sign-in';
    }
  }, []);

  const contextValue = {
    collapsed,
    mobileOpen,
    theme,
    toggleCollapse,
    toggleMobileSidebar,
    toggleTheme,
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
