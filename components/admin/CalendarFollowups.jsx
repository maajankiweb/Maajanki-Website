'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Plus, CheckCircle, AlertCircle, User, PhoneCall, Video, MessageSquare } from 'lucide-react';

export default function CalendarFollowups({ leads = [] }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

  // Dynamically map active leads into touchpoint follow-ups
  const followupsList = leads.map((l, idx) => ({
    id: l._id || idx,
    title: `Follow-up: ${l.service || 'Website Inquiry'}`,
    client: l.name || 'Inbound Prospect',
    time: new Date(l.createdAt || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: idx % 2 === 0 ? 'Video' : 'PhoneCall',
    status: l.status === 'closed' ? 'Completed' : l.status === 'contacted' ? 'In Progress' : 'Pending',
    priority: l.status === 'new' ? 'High' : 'Normal',
  }));

  const pendingCount = followupsList.filter((f) => f.status === 'Pending').length;
  const completedCount = followupsList.filter((f) => f.status === 'Completed').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <div>
          <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
            <CalendarIcon className="w-4 h-4" /> Calendar & Follow-ups
          </div>
          <h2 className="text-2xl font-black text-slate-100">Schedule & Lead Meetings Agenda</h2>
          <p className="text-xs text-slate-400 mt-1">Track upcoming calls, consultations, and automated reminders for MongoDB Atlas leads.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Picker Panel */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-orange-400" /> Agenda Date Picker
          </h3>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-orange-500"
          />

          <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-xl space-y-3">
            <div className="text-xs font-bold text-slate-300">Agenda Summary</div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Total Follow-ups:</span>
              <span className="font-bold text-slate-100">{followupsList.length} Touchpoints</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Pending Actions:</span>
              <span className="font-bold text-amber-400">{pendingCount} Pending</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Completed:</span>
              <span className="font-bold text-emerald-400">{completedCount} Closed</span>
            </div>
          </div>
        </div>

        {/* Schedule List or Empty State */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100">Scheduled Touchpoints ({selectedDate})</h3>
            <span className="text-xs text-slate-400">{followupsList.length} Tasks Total</span>
          </div>

          {followupsList.length === 0 ? (
            <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
              <CalendarIcon className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-200">No Scheduled Follow-ups</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                No active follow-ups or meetings scheduled for this date. Lead follow-ups submitted from website capture forms will automatically appear here.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {followupsList.map((item) => (
                <div key={item.id} className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-700 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      item.type === 'Video' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    }`}>
                      {item.type === 'Video' ? <Video className="w-4 h-4" /> : <PhoneCall className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
                      <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                        <User className="w-3 h-3 text-slate-500" /> {item.client}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:justify-end">
                    <div className="text-right">
                      <div className="text-xs font-bold text-slate-200 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-orange-400" /> {item.time}
                      </div>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full mt-1 inline-block ${
                        item.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
