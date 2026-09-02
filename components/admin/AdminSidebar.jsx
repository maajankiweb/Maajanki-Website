'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Users, UserPlus, Phone, CheckCircle, XCircle, AlertTriangle,
  FileText, Send, Megaphone, Gift, MessageSquare, BookOpen, Mail, PhoneCall,
  Bot, Brain, Globe, UsersRound, Briefcase, KanbanSquare, CalendarDays, BarChart3,
  Trophy, Settings, LogOut, ChevronRight, ChevronDown, PanelLeftClose, PanelLeft,
  Activity, SlidersHorizontal, Sparkles
} from 'lucide-react';

const MENU_ITEMS = [
  {
    group: 'MAIN MENU',
    items: [
      { label: 'Dashboard', icon: LayoutDashboard, href: '/admin' }
    ]
  },
  {
    group: 'Lead Management',
    collapsible: true,
    icon: Users,
    items: [
      { label: 'All Leads', icon: Users, href: '/admin/all-leads' },
      { label: 'New Leads', icon: UserPlus, href: '/admin/new-leads' },
      { label: 'Contacted', icon: Phone, href: '/admin/contacted-leads' },
      { label: 'Qualified', icon: CheckCircle, href: '/admin/qualified-leads' },
      { label: 'Closed', icon: CheckCircle, href: '/admin/closed-leads' },
      { label: 'Spam', icon: XCircle, href: '/admin/spam-leads' }
    ]
  },
  {
    group: 'Website Forms',
    collapsible: true,
    icon: FileText,
    items: [
      { label: 'Contact Form', icon: Mail, href: '/admin/forms/contact' },
      { label: 'Audit Form', icon: FileText, href: '/admin/forms/audit' },
      { label: 'Footer Popup', icon: Send, href: '/admin/forms/footer' },
      { label: 'Promo Popup', icon: Gift, href: '/admin/forms/promo' },
      { label: 'AI Chatbot', icon: MessageSquare, href: '/admin/forms/chatbot' },
      { label: 'Brochure Download', icon: BookOpen, href: '/admin/forms/brochure' },
      { label: 'Newsletter', icon: Megaphone, href: '/admin/forms/newsletter' },
      { label: 'Callback Request', icon: PhoneCall, href: '/admin/forms/callback' }
    ]
  },
  {
    group: 'ANALYTICS & AI',
    items: [
      { label: 'AI Automation Hub', icon: Sparkles, href: '/admin/automation-hub' },
      { label: 'Agency AI Agents', icon: Bot, href: '/admin/agency-agents' },
      { label: 'AI Insights', icon: Brain, href: '/admin/ai-insights' },
      { label: 'Global Map', icon: Globe, href: '/admin/global-map-analytics' },
      { label: 'Customers & CRM', icon: UsersRound, href: '/admin/customers-crm' },
      { label: 'System Health & APM', icon: Activity, href: '/admin/system-health' }
    ]
  },
  {
    group: 'MANAGEMENT',
    items: [
      { label: 'Portfolio Manager', icon: Briefcase, href: '/admin/portfolio' },
      { label: 'Tasks & Kanban', icon: KanbanSquare, href: '/admin/tasks-kanban' },
      { label: 'Calendar & Follow-ups', icon: CalendarDays, href: '/admin/calendar-followups' },
      { label: 'Reports & Exports', icon: BarChart3, href: '/admin/reports-exports' },
      { label: 'Feature Flags', icon: SlidersHorizontal, href: '/admin/feature-flags' },
      { label: 'Team Performance', icon: Trophy, href: '/admin/team-performance' },
      { label: 'Settings & Security', icon: Settings, href: '/admin/settings-security' }
    ]
  }
];

export default function AdminSidebar({ collapsed, onToggle, onNavigate }) {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState({
    'Lead Management': true,
    'Website Forms': false
  });

  const toggleGroup = (groupName) => {
    if (collapsed) {
      if (onToggle) onToggle(false);
      setExpandedGroups((prev) => ({ ...prev, [groupName]: true }));
    } else {
      setExpandedGroups((prev) => ({
        ...prev,
        [groupName]: !prev[groupName]
      }));
    }
  };

  const isActive = (href) => pathname === href || pathname?.startsWith(href + '/');

  return (
    <aside 
      className={`admin-sidebar ${collapsed ? 'collapsed' : ''}`}
      style={{
        width: collapsed ? '72px' : '260px',
        transition: 'width 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'var(--bg-card, #ffffff)',
        borderRight: '1px solid var(--border-color, #e5e7eb)',
        position: 'sticky',
        top: 0,
        zIndex: 40
      }}
    >
      <div 
        className="sidebar-header" 
        style={{ 
          height: '64px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: collapsed ? 'center' : 'space-between',
          padding: collapsed ? '0' : '0 20px',
          borderBottom: '1px solid var(--border-color, #e5e7eb)'
        }}
      >
        {!collapsed ? (
          <Link href="/admin" className="sidebar-logo flex items-center">
            <Image 
              src="/images/MaaJanki-Web-Tech-Logo.webp" 
              alt="MaaJanki Web Tech" 
              width={140} 
              height={28} 
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
        ) : (
          <Link href="/admin" className="sidebar-logo flex items-center justify-center font-bold text-xl" style={{ color: 'var(--color-primary, #FD6A02)' }}>
            MJ
          </Link>
        )}
      </div>

      <nav className="sidebar-nav" style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '16px 0' }}>
        {MENU_ITEMS.map((section, idx) => {
          if (section.collapsible) {
            const isExpanded = expandedGroups[section.group];
            const hasActiveChild = section.items.some(item => isActive(item.href));
            const GroupIcon = section.icon;

            return (
              <div key={idx} className="sidebar-group" style={{ marginBottom: '8px' }}>
                <button 
                  onClick={() => toggleGroup(section.group)}
                  className={`sidebar-group-toggle flex items-center w-full ${hasActiveChild && collapsed ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: collapsed ? 'center' : 'space-between',
                    padding: collapsed ? '12px 0' : '10px 20px',
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: hasActiveChild && collapsed ? 'var(--color-primary, #FD6A02)' : 'var(--text-secondary, #4b5563)',
                    fontWeight: 500,
                    fontSize: '14px',
                    position: 'relative'
                  }}
                  title={collapsed ? section.group : undefined}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <GroupIcon size={20} className="sidebar-item-icon" />
                    {!collapsed && <span>{section.group}</span>}
                  </div>
                  {!collapsed && (
                    isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />
                  )}
                </button>

                {!collapsed && isExpanded && (
                  <div className="sidebar-sub-items" style={{ padding: '4px 0 4px 44px' }}>
                    {section.items.map((item, itemIdx) => {
                      const ItemIcon = item.icon;
                      const active = isActive(item.href);
                      return (
                        <Link 
                          key={itemIdx} 
                          href={item.href}
                          className={`sidebar-item flex items-center ${active ? 'active' : ''}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '8px 12px',
                            color: active ? 'var(--color-primary, #FD6A02)' : 'var(--text-secondary, #4b5563)',
                            textDecoration: 'none',
                            fontSize: '14px',
                            borderRadius: '6px',
                            marginRight: '12px',
                            backgroundColor: active ? 'var(--bg-primary-light, rgba(253, 106, 2, 0.1))' : 'transparent',
                            fontWeight: active ? 500 : 400
                          }}
                        >
                          <ItemIcon size={16} />
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <div key={idx} className="sidebar-section" style={{ marginBottom: '16px' }}>
              {!collapsed && (
                <div 
                  className="sidebar-section-label"
                  style={{
                    padding: '0 20px',
                    fontSize: '11px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: 'var(--text-muted, #9ca3af)',
                    marginBottom: '8px',
                    letterSpacing: '0.05em'
                  }}
                >
                  {section.group}
                </div>
              )}
              {section.items.map((item, itemIdx) => {
                const ItemIcon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link 
                    key={itemIdx} 
                    href={item.href}
                    className={`sidebar-item flex items-center ${active ? 'active' : ''}`}
                    title={collapsed ? item.label : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: collapsed ? 'center' : 'flex-start',
                      gap: collapsed ? '0' : '12px',
                      padding: collapsed ? '12px 0' : '10px 20px',
                      color: active ? 'var(--color-primary, #FD6A02)' : 'var(--text-secondary, #4b5563)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      position: 'relative',
                      borderLeft: active && !collapsed ? '3px solid var(--color-primary, #FD6A02)' : '3px solid transparent',
                      backgroundColor: active && !collapsed ? 'var(--bg-primary-light, rgba(253, 106, 2, 0.05))' : 'transparent',
                      fontWeight: active ? 500 : 400
                    }}
                  >
                    <ItemIcon size={20} className="sidebar-item-icon" />
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </nav>

      <div 
        className="sidebar-footer"
        style={{
          borderTop: '1px solid var(--border-color, #e5e7eb)',
          padding: collapsed ? '12px 0' : '16px 20px'
        }}
      >
        <button
          onClick={() => onNavigate && onNavigate('signout')}
          className="sidebar-item flex items-center w-full"
          title={collapsed ? "Sign Out" : undefined}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            gap: collapsed ? '0' : '12px',
            padding: collapsed ? '8px 0' : '8px 0',
            color: 'var(--text-secondary, #4b5563)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            width: '100%',
            textAlign: 'left'
          }}
        >
          <LogOut size={20} />
          {!collapsed && <span>Sign Out</span>}
        </button>
        
        {!collapsed && (
          <div style={{ marginTop: '16px', fontSize: '11px', color: 'var(--text-muted, #9ca3af)', textAlign: 'center' }}>
            &copy; {new Date().getFullYear()} MaaJanki Web Tech.<br/>
            Admin V1.0
          </div>
        )}
      </div>
    </aside>
  );
}
