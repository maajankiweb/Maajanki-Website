'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Search,
  Bell,
  Sun,
  Moon,
  HelpCircle,
  ChevronDown,
  Menu,
  Command,
  User,
  Settings,
  Shield,
  LogOut,
  PanelLeft,
  PanelLeftClose,
  Lock
} from 'lucide-react';

/**
 * AdminHeader Component
 * Premium top navigation bar for MaaJanki Web Tech admin dashboard.
 */
const AdminHeader = ({
  collapsed = false,
  onToggleCollapse = () => {},
  onToggleMobileSidebar = () => {},
  onToggleTheme = () => {},
  onLockSession = () => {},
  theme = 'light'
}) => {
  const pathname = usePathname();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const generateBreadcrumbs = (path) => {
    if (!path || path === '/admin') {
      return [{ label: 'Dashboard', isCurrent: true }];
    }

    const breadcrumbs = [{ label: 'Dashboard', isCurrent: false }];

    if (path.includes('/all-leads')) {
      breadcrumbs.push({ label: 'Lead Management', isCurrent: false });
      breadcrumbs.push({ label: 'All Leads', isCurrent: true });
    } else if (path.includes('/forms/contact')) {
      breadcrumbs.push({ label: 'Website Forms', isCurrent: false });
      breadcrumbs.push({ label: 'Contact Form', isCurrent: true });
    } else if (path.includes('/agency-agents')) {
      breadcrumbs.push({ label: 'Analytics & AI', isCurrent: false });
      breadcrumbs.push({ label: 'Agency AI Agents', isCurrent: true });
    } else {
      const segments = path.split('/').filter(Boolean);
      segments.forEach((seg, index) => {
        if (seg === 'admin') return;
        const label = seg.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        breadcrumbs.push({ label, isCurrent: index === segments.length - 1 });
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <header className="admin-header" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 'var(--header-height, 64px)',
      padding: '0 var(--spacing-4, 16px)',
      backgroundColor: 'var(--bg-surface, #ffffff)',
      borderBottom: '1px solid var(--border-color, #e5e7eb)',
      position: 'sticky',
      top: 0,
      zIndex: 40
    }}>
      {/* LEFT SECTION */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4, 16px)' }}>
        {/* Mobile Hamburger */}
        <button
          className="topbar-icon-btn mobile-only-flex"
          onClick={onToggleMobileSidebar}
          aria-label="Toggle Mobile Menu"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary, #4b5563)',
            cursor: 'pointer',
            padding: 'var(--spacing-2, 8px)',
            borderRadius: 'var(--radius-md, 6px)'
          }}
        >
          <Menu size={20} />
        </button>

        {/* Desktop Collapse/Expand */}
        <button
          className="topbar-icon-btn desktop-only-flex"
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            color: 'var(--text-secondary, #4b5563)',
            cursor: 'pointer',
            padding: 'var(--spacing-2, 8px)',
            borderRadius: 'var(--radius-md, 6px)',
            transition: 'color 0.2s ease, background 0.2s ease'
          }}
        >
          {collapsed ? <PanelLeft size={20} /> : <PanelLeftClose size={20} />}
        </button>

        {/* Breadcrumbs */}
        <nav className="topbar-breadcrumb desktop-only-flex" aria-label="Breadcrumb" style={{ alignItems: 'center', gap: 'var(--spacing-2, 8px)', fontSize: 'var(--font-size-sm, 14px)' }}>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <span className={crumb.isCurrent ? 'topbar-breadcrumb-current' : ''} style={{
                color: crumb.isCurrent ? 'var(--text-primary, #111827)' : 'var(--text-secondary, #4b5563)',
                fontWeight: crumb.isCurrent ? '500' : '400'
              }}>
                {crumb.label}
              </span>
              {index < breadcrumbs.length - 1 && (
                <span className="topbar-breadcrumb-sep" style={{ color: 'var(--text-tertiary, #9ca3af)' }}>/</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* CENTER SECTION */}
      <div className="topbar-search desktop-only-flex" style={{
        alignItems: 'center',
        position: 'relative',
        maxWidth: '400px',
        width: '100%',
        margin: '0 var(--spacing-4, 16px)'
      }}>
        <Search className="topbar-search-icon" size={18} style={{
          position: 'absolute',
          left: 'var(--spacing-3, 12px)',
          color: 'var(--text-tertiary, #9ca3af)'
        }} />
        <input
          type="text"
          className="topbar-search-input admin-input"
          placeholder="Search leads, customers, projects..."
          style={{
            width: '100%',
            padding: 'var(--spacing-2, 8px) var(--spacing-3, 12px)',
            paddingLeft: 'var(--spacing-9, 36px)',
            paddingRight: 'var(--spacing-12, 48px)',
            borderRadius: 'var(--radius-md, 6px)',
            border: '1px solid var(--border-color, #e5e7eb)',
            backgroundColor: 'var(--bg-elevated, #f9fafb)',
            color: 'var(--text-primary, #111827)',
            outline: 'none',
            fontSize: 'var(--font-size-sm, 14px)'
          }}
        />
        <div className="topbar-search-shortcut" style={{
          position: 'absolute',
          right: 'var(--spacing-3, 12px)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-1, 4px)',
          color: 'var(--text-tertiary, #9ca3af)',
          fontSize: 'var(--font-size-xs, 12px)',
          backgroundColor: 'var(--bg-body, #f3f4f6)',
          padding: '2px 6px',
          borderRadius: 'var(--radius-sm, 4px)',
          border: '1px solid var(--border-color, #e5e7eb)'
        }}>
          <Command size={12} />
          <span>K</span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3, 12px)' }}>
        {/* Live Indicator Badge */}
        <div className="desktop-only-flex" style={{
          alignItems: 'center',
          gap: '6px',
          padding: '4px 10px',
          borderRadius: 'var(--radius-full, 9999px)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          color: '#16a34a',
          fontSize: '11px',
          fontWeight: '600'
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#22c55e',
            display: 'inline-block',
            boxShadow: '0 0 6px #22c55e'
          }}></span>
          <span>Live</span>
        </div>

        <button className="topbar-icon-btn" aria-label="Notifications" style={{
          position: 'relative',
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary, #4b5563)',
          cursor: 'pointer',
          padding: 'var(--spacing-2, 8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-full, 9999px)'
        }}>
          <Bell size={20} />
          <span className="badge-dot" style={{
            position: 'absolute',
            top: '4px',
            right: '6px',
            width: '8px',
            height: '8px',
            backgroundColor: 'var(--color-danger, #ef4444)',
            borderRadius: '50%',
            border: '2px solid var(--bg-surface, #ffffff)'
          }}></span>
        </button>

        <button className="topbar-icon-btn" onClick={onToggleTheme} aria-label="Toggle Theme" style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary, #4b5563)',
          cursor: 'pointer',
          padding: 'var(--spacing-2, 8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-full, 9999px)'
        }}>
          {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button className="topbar-icon-btn" aria-label="Help" style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary, #4b5563)',
          cursor: 'pointer',
          padding: 'var(--spacing-2, 8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'var(--radius-full, 9999px)'
        }}>
          <HelpCircle size={20} />
        </button>

        {/* User Dropdown */}
        <div className="topbar-user" ref={dropdownRef} style={{ position: 'relative', marginLeft: 'var(--spacing-2, 8px)' }}>
          <button
            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2, 8px)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 'var(--spacing-1, 4px)'
            }}
          >
            <div className="topbar-avatar" style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-full, 9999px)',
              backgroundColor: 'var(--color-primary, #FD6A02)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: 'var(--font-size-sm, 14px)'
            }}>
              AK
            </div>
            <div className="topbar-user-info desktop-only-flex" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <span className="topbar-user-name" style={{ fontSize: 'var(--font-size-sm, 14px)', fontWeight: '600', color: 'var(--text-primary, #111827)' }}>Ashish Kumar</span>
              <span className="topbar-user-role" style={{ fontSize: 'var(--font-size-xs, 12px)', color: 'var(--text-tertiary, #9ca3af)' }}>Super Admin</span>
            </div>
            <ChevronDown size={16} style={{ color: 'var(--text-tertiary, #9ca3af)' }} />
          </button>

          {isUserDropdownOpen && (
            <div className="admin-card" style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 'var(--spacing-2, 8px)',
              width: '200px',
              padding: 'var(--spacing-2, 8px)',
              zIndex: 50,
              backgroundColor: 'var(--bg-surface, #ffffff)',
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: 'var(--radius-lg, 8px)',
              boxShadow: 'var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1))'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-1, 4px)' }}>
                <Link href="/admin/settings-security" className="dropdown-item" style={{ textDecoration: 'none' }}><User size={16} /> Profile & Account</Link>
                <Link href="/admin/settings-security" className="dropdown-item" style={{ textDecoration: 'none' }}><Shield size={16} /> Security & 2FA</Link>
                {onLockSession && (
                  <button onClick={() => { setIsUserDropdownOpen(false); onLockSession(); }} className="dropdown-item">
                    <Lock size={16} /> Lock Session
                  </button>
                )}
                <div style={{ height: '1px', backgroundColor: 'var(--border-color, #e5e7eb)', margin: 'var(--spacing-1, 4px) 0' }}></div>
                <Link href="/sign-in" className="dropdown-item" style={{ color: 'var(--color-danger, #ef4444)', textDecoration: 'none' }}><LogOut size={16} /> Sign Out</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .mobile-only-flex {
          display: none;
        }
        .desktop-only-flex {
          display: flex;
        }
        
        @media (max-width: 768px) {
          .mobile-only-flex {
            display: flex;
          }
          .desktop-only-flex {
            display: none !important;
          }
        }
        
        .topbar-icon-btn:hover {
          background-color: var(--bg-hover, #f3f4f6);
        }
        
        .dropdown-item {
          display: flex;
          alignItems: center;
          gap: var(--spacing-2, 8px);
          padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          border-radius: var(--radius-sm, 4px);
          cursor: pointer;
          font-size: var(--font-size-sm, 14px);
          color: var(--text-secondary, #4b5563);
        }
        
        .dropdown-item:hover {
          background-color: var(--bg-hover, #f3f4f6);
        }
      `}</style>
    </header>
  );
};

export default AdminHeader;
