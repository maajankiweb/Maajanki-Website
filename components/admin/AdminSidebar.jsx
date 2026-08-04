'use client';

import React, { useState } from 'react';
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
  activeTab,
  setActiveTab,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  onLogoutClick
}) {
  const [openSubmenu, setOpenSubmenu] = useState({
    leads: true,
    websiteForms: false,
  });

  const toggleSubmenu = (menu) => {
    setOpenSubmenu((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const navSections = [
    {
      heading: 'MAIN MENU',
      items: [
        { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
        {
          id: 'leads',
          label: 'Lead Management',
          icon: Users,
          badge: 'Live',
          submenu: [
            { id: 'leads-all', label: 'All Leads' },
            { id: 'leads-new', label: 'New Leads' },
            { id: 'leads-contacted', label: 'Contacted' },
            { id: 'leads-qualified', label: 'Qualified' },
            { id: 'leads-closed', label: 'Closed' },
            { id: 'leads-spam', label: 'Spam' },
          ],
        },
        {
          id: 'websiteForms',
          label: 'Website Forms',
          icon: FileSpreadsheet,
          submenu: [
            { id: 'forms-contact', label: 'Contact Form' },
            { id: 'forms-audit', label: 'Audit Form' },
            { id: 'forms-footer', label: 'Footer Popup' },
            { id: 'forms-promo', label: 'Promo Popup' },
            { id: 'forms-chatbot', label: 'AI Chatbot' },
            { id: 'forms-brochure', label: 'Brochure Download' },
            { id: 'forms-newsletter', label: 'Newsletter' },
            { id: 'forms-callback', label: 'Callback Request' },
          ],
        },
      ],
    },
    {
      heading: 'ANALYTICS & AI',
      items: [
        { id: 'ai-insights', label: 'AI Insights', icon: Bot, badge: 'AI' },
        { id: 'maps', label: 'Global Map Analytics', icon: Globe },
        { id: 'customers', label: 'Customers & CRM', icon: Building2 },
      ],
    },
    {
      heading: 'MANAGEMENT',
      items: [
        { id: 'tasks', label: 'Tasks & Kanban', icon: CheckSquare },
        { id: 'calendar', label: 'Calendar & Follow-ups', icon: CalendarIcon },
        { id: 'reports', label: 'Reports & Exports', icon: FileText },
        { id: 'team', label: 'Team Performance', icon: UserCheck },
        { id: 'settings', label: 'Settings & Security', icon: Settings },
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
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white font-black text-base shadow-lg shadow-orange-500/20 shrink-0">
              MJ
            </div>
            {!collapsed && (
              <div className="flex flex-col truncate">
                <span className="font-bold text-slate-100 text-sm tracking-tight">MaaJanki</span>
                <span className="text-[11px] text-orange-400 font-semibold">Web Tech Admin</span>
              </div>
            )}
          </div>

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
                const isActive = activeTab === item.id || (item.submenu && item.submenu.some((s) => s.id === activeTab));
                const hasSubmenu = Boolean(item.submenu);
                const isSubOpen = openSubmenu[item.id];

                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => {
                        if (hasSubmenu) {
                          toggleSubmenu(item.id);
                          if (collapsed) setCollapsed(false);
                        } else {
                          setActiveTab(item.id);
                          setMobileOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                        isActive
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-600/20'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                      }`}
                      title={collapsed ? item.label : undefined}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            isActive ? 'text-white' : 'text-slate-400 group-hover:text-orange-400'
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
                          {hasSubmenu &&
                            (isSubOpen ? (
                              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                            ))}
                        </div>
                      )}
                    </button>

                    {/* Submenu */}
                    {hasSubmenu && !collapsed && isSubOpen && (
                      <div className="pl-8 pr-2 py-1 space-y-1 border-l-2 border-slate-800/80 ml-5">
                        {item.submenu.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => {
                              setActiveTab(sub.id);
                              setMobileOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                              activeTab === sub.id
                                ? 'text-orange-400 bg-orange-500/10 font-bold'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                            }`}
                          >
                            {sub.label}
                          </button>
                        ))}
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
