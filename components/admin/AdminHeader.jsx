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
  Lock,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  Users,
  Check,
  Trash2,
  ExternalLink,
  PhoneCall,
  Sparkles,
  X
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
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const helpRef = useRef(null);

  // Notifications State
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      type: 'security',
      title: 'Zero-Trust Perimeter Active',
      message: 'All administrative routes & APIs are guarded with Clerk auth and rate limits.',
      time: 'Just now',
      unread: true,
      link: '/admin/settings-security',
      icon: Shield,
      color: '#16a34a'
    },
    {
      id: 'notif-2',
      type: 'system',
      title: 'Real-Time Sync Connected',
      message: 'MongoDB Atlas connection pool active. Real-time form listeners ready.',
      time: '5m ago',
      unread: true,
      link: '/admin/all-leads',
      icon: CheckCircle2,
      color: '#2563eb'
    },
    {
      id: 'notif-3',
      type: 'whatsapp',
      title: 'WhatsApp Dispatcher Configured',
      message: 'Instant lead alerts configured for +91 9006543913.',
      time: '15m ago',
      unread: false,
      link: '/admin/settings-security',
      icon: PhoneCall,
      color: '#FD6A02'
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserDropdownOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
      if (helpRef.current && !helpRef.current.contains(event.target)) {
        setIsHelpOpen(false);
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

      {/* CENTER SECTION: Search */}
      <div className="topbar-search desktop-only-flex" style={{
        position: 'relative',
        width: '100%',
        maxWidth: '360px',
        alignItems: 'center'
      }}>
        <Search className="topbar-search-icon" size={16} style={{
          position: 'absolute',
          left: 'var(--spacing-3, 12px)',
          color: 'var(--text-tertiary, #9ca3af)'
        }} />
        <input
          type="text"
          className="topbar-search-input"
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

        {/* NOTIFICATIONS DROPDOWN */}
        <div ref={notificationRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="topbar-icon-btn"
            aria-label="Notifications"
            title="Notifications & Alerts"
            style={{
              position: 'relative',
              background: isNotificationOpen ? 'var(--bg-elevated)' : 'none',
              border: 'none',
              color: 'var(--text-secondary, #4b5563)',
              cursor: 'pointer',
              padding: 'var(--spacing-2, 8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-full, 9999px)'
            }}
          >
            <Bell size={20} />
            {unreadCount > 0 && (
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
            )}
          </button>

          {isNotificationOpen && (
            <div className="admin-card" style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 'var(--spacing-2, 8px)',
              width: '360px',
              maxWidth: '90vw',
              padding: 0,
              zIndex: 50,
              backgroundColor: 'var(--bg-surface, #ffffff)',
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: 'var(--radius-lg, 12px)',
              boxShadow: 'var(--shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.15))',
              overflow: 'hidden'
            }}>
              {/* Notification Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderBottom: '1px solid var(--border-color, #e5e7eb)',
                backgroundColor: 'var(--bg-card, #ffffff)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Bell size={16} style={{ color: 'var(--color-primary)' }} />
                  <strong style={{ fontSize: '14px', color: 'var(--color-text)' }}>Notifications</strong>
                  {unreadCount > 0 && (
                    <span className="admin-badge admin-badge-new" style={{ fontSize: '10px', padding: '1px 6px' }}>
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-primary)',
                      fontSize: '11px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Mark read
                  </button>
                )}
              </div>

              {/* Notification List */}
              <div style={{ maxHeight: '320px', overflowY: 'auto' }}>
                {notifications.length === 0 ? (
                  <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '13px' }}>
                    <CheckCircle2 size={32} style={{ color: '#16a34a', margin: '0 auto 8px' }} />
                    <div>All caught up!</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>No new alerts or notifications.</div>
                  </div>
                ) : (
                  notifications.map(n => {
                    const IconComponent = n.icon || Bell;
                    return (
                      <Link
                        key={n.id}
                        href={n.link || '/admin'}
                        onClick={() => setIsNotificationOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '12px 16px',
                          borderBottom: '1px solid var(--border-color, #e5e7eb)',
                          backgroundColor: n.unread ? 'var(--bg-elevated, #f9fafb)' : 'transparent',
                          textDecoration: 'none',
                          transition: 'background 0.2s ease'
                        }}
                      >
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: `${n.color}15`,
                          color: n.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <IconComponent size={16} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                            <strong style={{ fontSize: '12px', color: 'var(--color-text)' }}>{n.title}</strong>
                            <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>{n.time}</span>
                          </div>
                          <p style={{ fontSize: '11px', color: 'var(--color-text-secondary)', margin: 0, lineHeight: '1.4' }}>
                            {n.message}
                          </p>
                        </div>
                      </Link>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              {notifications.length > 0 && (
                <div style={{
                  padding: '8px 16px',
                  backgroundColor: 'var(--bg-elevated, #f9fafb)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <Link
                    href="/admin/settings-security"
                    onClick={() => setIsNotificationOpen(false)}
                    style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none' }}
                  >
                    Security Logs →
                  </Link>
                  <button
                    onClick={clearAllNotifications}
                    style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', fontSize: '11px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Trash2 size={11} /> Clear
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Theme Toggle Button */}
        <button className="topbar-icon-btn" onClick={onToggleTheme} aria-label="Toggle Theme" title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"} style={{
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

        {/* HELP DROPDOWN */}
        <div ref={helpRef} style={{ position: 'relative' }}>
          <button
            onClick={() => setIsHelpOpen(!isHelpOpen)}
            className="topbar-icon-btn"
            aria-label="Help"
            title="Help & Quick Support"
            style={{
              background: isHelpOpen ? 'var(--bg-elevated)' : 'none',
              border: 'none',
              color: 'var(--text-secondary, #4b5563)',
              cursor: 'pointer',
              padding: 'var(--spacing-2, 8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-full, 9999px)'
            }}
          >
            <HelpCircle size={20} />
          </button>

          {isHelpOpen && (
            <div className="admin-card" style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 'var(--spacing-2, 8px)',
              width: '280px',
              padding: '16px',
              zIndex: 50,
              backgroundColor: 'var(--bg-surface, #ffffff)',
              border: '1px solid var(--border-color, #e5e7eb)',
              borderRadius: 'var(--radius-lg, 12px)',
              boxShadow: 'var(--shadow-xl)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <HelpCircle size={18} style={{ color: 'var(--color-primary)' }} />
                <strong style={{ fontSize: '14px' }}>MaaJanki Helpdesk</strong>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--color-text)' }}>Admin Support:</div>
                  <div>Phone: +91 90065 43913</div>
                  <div>Email: info@maajankiwebtech.com</div>
                </div>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '8px' }}>
                  <div style={{ fontWeight: '600', color: 'var(--color-text)', marginBottom: '4px' }}>Keyboard Shortcuts:</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-muted)' }}>
                    <span>Global Search</span> <kbd style={{ padding: '1px 5px', background: 'var(--bg-body)', borderRadius: '3px' }}>Ctrl + K</kbd>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Dropdown */}
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
                <Link href="/admin/settings-security" onClick={() => setIsUserDropdownOpen(false)} className="dropdown-item" style={{ textDecoration: 'none' }}><User size={16} /> Profile & Account</Link>
                <Link href="/admin/settings-security" onClick={() => setIsUserDropdownOpen(false)} className="dropdown-item" style={{ textDecoration: 'none' }}><Shield size={16} /> Security & 2FA</Link>
                {onLockSession && (
                  <button onClick={() => { setIsUserDropdownOpen(false); onLockSession(); }} className="dropdown-item">
                    <Lock size={16} /> Lock Session
                  </button>
                )}
                <div style={{ height: '1px', backgroundColor: 'var(--border-color, #e5e7eb)', margin: 'var(--spacing-1, 4px) 0' }}></div>
                <Link href="/sign-in" onClick={() => setIsUserDropdownOpen(false)} className="dropdown-item" style={{ color: 'var(--color-danger, #ef4444)', textDecoration: 'none' }}><LogOut size={16} /> Sign Out</Link>
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
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-2, 8px);
          padding: var(--spacing-2, 8px);
          font-size: var(--font-size-sm, 14px);
          color: var(--text-primary, #111827);
          border-radius: var(--radius-md, 6px);
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }
        .dropdown-item:hover {
          background-color: var(--bg-elevated, #f9fafb);
        }
        @media (max-width: 768px) {
          .mobile-only-flex {
            display: flex;
          }
          .desktop-only-flex {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default AdminHeader;
