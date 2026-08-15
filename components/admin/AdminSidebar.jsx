'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Building2,
  FolderKanban,
  FileText,
  FileSpreadsheet,
  Globe,
  Calendar as CalendarIcon,
  UserCheck,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  CheckSquare,
  Bot
} from 'lucide-react';

export default function AdminSidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  onLogoutClick
}) {
  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = useState({
    leads: true,
    websiteForms: true,
  });

  // Automatically expand submenu if active pathname belongs to it
  useEffect(() => {
    if (pathname.includes('/leads')) {
      setOpenSubmenu((prev) => ({ ...prev, leads: true }));
    }
    if (pathname.includes('/forms') || pathname.includes('form') || pathname.includes('newsletter') || pathname.includes('callback') || pathname.includes('brochure') || pathname.includes('popup') || pathname.includes('chatbot')) {
      setOpenSubmenu((prev) => ({ ...prev, websiteForms: true }));
    }
  }, [pathname]);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const navSections = [
    {
      heading: 'MAIN MENU',
      items: [
        { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard, href: '/admin' },
        {
          id: 'leads',
          label: 'Lead Management',
          icon: Users,
          badge: 'Live',
          href: '/admin/all-leads',
          submenu: [
            { id: 'leads-all', label: 'All Leads', href: '/admin/all-leads' },
            { id: 'leads-new', label: 'New Leads', href: '/admin/new-leads' },
            { id: 'leads-contacted', label: 'Contacted', href: '/admin/contacted-leads' },
            { id: 'leads-qualified', label: 'Qualified', href: '/admin/qualified-leads' },
            { id: 'leads-closed', label: 'Closed', href: '/admin/closed-leads' },
            { id: 'leads-spam', label: 'Spam', href: '/admin/spam-leads' },
          ],
        },
        {
          id: 'websiteForms',
          label: 'Website Forms',
          icon: FileSpreadsheet,
          href: '/admin/forms/contact',
          submenu: [
            { id: 'forms-contact', label: 'Contact Form', href: '/admin/forms/contact' },
            { id: 'forms-audit', label: 'Audit Form', href: '/admin/forms/audit' },
            { id: 'forms-footer', label: 'Footer Popup', href: '/admin/forms/footer' },
            { id: 'forms-promo', label: 'Promo Popup', href: '/admin/forms/promo' },
            { id: 'forms-chatbot', label: 'AI Chatbot', href: '/admin/forms/chatbot' },
            { id: 'forms-brochure', label: 'Brochure Download', href: '/admin/forms/brochure' },
            { id: 'forms-newsletter', label: 'Newsletter', href: '/admin/forms/newsletter' },
            { id: 'forms-callback', label: 'Callback Request', href: '/admin/forms/callback' },
          ],
        },
      ],
    },
    {
      heading: 'ANALYTICS & AI',
      items: [
        { id: 'ai-insights', label: 'AI Insights', icon: Bot, badge: 'AI', href: '/admin/ai-insights' },
        { id: 'maps', label: 'Global Map Analytics', icon: Globe, href: '/admin/global-map-analytics' },
        { id: 'customers', label: 'Customers & CRM', icon: Building2, href: '/admin/customers-crm' },
      ],
    },
    {
      heading: 'MANAGEMENT',
      items: [
        { id: 'portfolio-mgr', label: 'Portfolio Manager', icon: FolderKanban, badge: 'New', href: '/admin/portfolio' },
        { id: 'tasks', label: 'Tasks & Kanban', icon: CheckSquare, href: '/admin/tasks-kanban' },
        { id: 'calendar', label: 'Calendar & Follow-ups', icon: CalendarIcon, href: '/admin/calendar-followups' },
        { id: 'reports', label: 'Reports & Exports', icon: FileText, href: '/admin/reports-exports' },
        { id: 'team', label: 'Team Performance', icon: UserCheck, href: '/admin/team-performance' },
        { id: 'settings', label: 'Settings & Security', icon: Settings, href: '/admin/settings-security' },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-slate-900 border-r border-slate-800/80 text-slate-200 transition-all duration-300 ${
          collapsed ? 'w-20' : 'w-[280px]'
        } ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Top Workspace Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-slate-800/80 bg-slate-950/40">
          <Link href="/admin" className="flex items-center gap-3 overflow-hidden">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-black text-base shadow-lg shadow-orange-500/20 shrink-0">
              MJ
            </div>
            {!collapsed && (
              <div className="flex flex-col truncate">
                <span className="font-bold text-slate-100 text-sm tracking-tight">MaaJanki</span>
                <span className="text-[11px] text-orange-400 font-semibold">Web Tech Admin</span>
              </div>
            )}
          </Link>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            <Menu className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {navSections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-1">
              {!collapsed && (
                <div className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                  {section.heading}
                </div>
              )}

              {section.items.map((item) => {
                const Icon = item.icon;
                const hasSubmenu = Boolean(item.submenu);
                const isSubOpen = openSubmenu[item.id];
                
                const isItemActive = hasSubmenu
                  ? item.submenu.some((sub) => pathname === sub.href)
                  : pathname === item.href;

                return (
                  <div key={item.id} className="space-y-1">
                    {hasSubmenu ? (
                      <button
                        onClick={() => {
                          toggleSubmenu(item.id);
                          if (collapsed) setCollapsed(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                          isItemActive
                            ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/20'
                            : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                        }`}
                        title={collapsed ? item.label : undefined}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <Icon
                            className={`w-4 h-4 shrink-0 transition-colors ${
                              isItemActive ? 'text-white' : 'text-slate-400 group-hover:text-orange-400'
                            }`}
                          />
                          {!collapsed && <span className="truncate">{item.label}</span>}
                        </div>

                        {!collapsed && (
                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <span
                                className={`px-2 py-0.5 text-[9px] font-extrabold rounded-full ${
                                  item.badge === 'AI'
                                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                    : 'bg-orange-500/20 text-orange-300'
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                            {isSubOpen ? (
                              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                            )}
                          </div>
                        )}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                          isItemActive
                            ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/20'
                            : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                        }`}
                        title={collapsed ? item.label : undefined}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <Icon
                            className={`w-4 h-4 shrink-0 transition-colors ${
                              isItemActive ? 'text-white' : 'text-slate-400 group-hover:text-orange-400'
                            }`}
                          />
                          {!collapsed && <span className="truncate">{item.label}</span>}
                        </div>

                        {!collapsed && item.badge && (
                          <span
                            className={`px-2 py-0.5 text-[9px] font-extrabold rounded-full ${
                              item.badge === 'AI'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-orange-500/20 text-orange-300'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )}

                    {/* Submenu */}
                    {hasSubmenu && !collapsed && isSubOpen && (
                      <div className="pl-8 pr-2 py-1 space-y-1 border-l-2 border-slate-800/80 ml-5">
                        {item.submenu.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.id}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className={`block w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                isSubActive
                                  ? 'text-orange-400 bg-orange-500/10 font-bold'
                                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Sidebar Footer Logout */}
        <div className="p-3 border-t border-slate-800/80 bg-slate-950/30">
          <button
            onClick={onLogoutClick}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors"
            title={collapsed ? 'Logout' : undefined}
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!collapsed && <span>Sign Out</span>}
          </button>
        </div>
      </aside>
    </>
  );
}
