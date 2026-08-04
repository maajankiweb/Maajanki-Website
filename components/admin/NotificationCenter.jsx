'use client';

import React, { useState } from 'react';
import {
  Bell,
  Check,
  Trash2,
  Filter,
  Shield,
  MessageSquare,
  Sparkles,
  X
} from 'lucide-react';

const initialNotifications = [
  {
    id: 1,
    title: 'High Priority Lead Received',
    message: 'Rahul Gupta submitted Website Audit form with budget > ₹1,00,000.',
    category: 'CRM',
    read: false,
    time: '10m ago'
  },
  {
    id: 2,
    title: 'Security Alert: New Sign-in',
    message: 'Admin logged in from new IP address (103.21.124.50).',
    category: 'Security',
    read: false,
    time: '45m ago'
  },
  {
    id: 3,
    title: 'Milestone Completed',
    message: 'E-Commerce project milestone #2 marked as completed by team.',
    category: 'Projects',
    read: false,
    time: '2h ago'
  },
  {
    id: 4,
    title: 'Weekly Report Ready',
    message: 'SEO & Lead Analytics report for July 2026 is generated.',
    category: 'Marketing',
    read: true,
    time: '1d ago'
  },
];

export default function NotificationCenter({ onClose }) {
  const [items, setItems] = useState(initialNotifications);

  const markAllRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, read: true })));
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="absolute right-4 top-16 w-80 sm:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Bell className="w-4 h-4 text-orange-400" />
          <span className="font-bold text-sm text-slate-100">Notification Center</span>
          <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-orange-500/20 text-orange-400">
            {items.filter((i) => !i.read).length} Unread
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={markAllRead}
            className="text-[11px] text-slate-400 hover:text-orange-400 px-2 py-1 rounded hover:bg-slate-800"
          >
            Mark All Read
          </button>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-200">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body List */}
      <div className="max-h-80 overflow-y-auto divide-y divide-slate-800">
        {items.length === 0 ? (
          <div className="p-6 text-center text-xs text-slate-500">No notifications available</div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className={`p-3.5 flex items-start justify-between gap-3 hover:bg-slate-800/50 transition-colors ${
                !item.read ? 'bg-orange-500/5' : ''
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-1.5 py-0.5 text-[9px] font-bold rounded ${
                      item.category === 'Security'
                        ? 'bg-rose-500/20 text-rose-300'
                        : item.category === 'CRM'
                        ? 'bg-orange-500/20 text-orange-300'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}
                  >
                    {item.category}
                  </span>
                  <span className="font-bold text-xs text-slate-200">{item.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-snug">{item.message}</p>
                <span className="text-[10px] text-slate-500 block">{item.time}</span>
              </div>

              <button
                onClick={() => deleteItem(item.id)}
                className="text-slate-500 hover:text-rose-400 p-1"
                title="Delete"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
