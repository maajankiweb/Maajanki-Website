'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Plus, CheckCircle, AlertCircle, User, PhoneCall, Video, MessageSquare } from 'lucide-react';

export default function CalendarFollowups({ leads = [] }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

  const followupsList = [
    { id: 1, title: 'Discovery Call: Web Architecture Scoping', client: 'Apex Tech Solutions', time: '10:30 AM', type: 'Video', status: 'Scheduled', priority: 'High' },
    { id: 2, title: 'Proposal Review & Pricing Discussion', client: 'Global Logistics Corp', time: '02:00 PM', type: 'PhoneCall', status: 'Pending', priority: 'High' },
    { id: 3, title: 'SEO Strategy Consultation Call', client: 'Dr. R. K. Health Clinic', time: '04:15 PM', type: 'Video', status: 'Completed', priority: 'Medium' },
    { id: 4, title: 'Contract Signing & Onboarding', client: 'Fintech Innovations', time: '05:30 PM', type: 'PhoneCall', status: 'Pending', priority: 'Low' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <div>
          <div className="flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">
            <CalendarIcon className="w-4 h-4" /> Calendar & Follow-ups
          </div>
          <h2 className="text-2xl font-black text-slate-100">Schedule & Lead Meetings Agenda</h2>
          <p className="text-xs text-slate-400 mt-1">Track upcoming calls, consultations, and automated reminders for sales leads.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-orange-600/20 transition-all self-start md:self-auto">
          <Plus className="w-4 h-4" /> Schedule New Follow-up
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Picker Panel */}
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-orange-400" /> Select Agenda Date
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
              <span className="text-slate-400">Total Follow-ups Today:</span>
              <span className="font-bold text-slate-100">4 Calls</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Pending Actions:</span>
              <span className="font-bold text-amber-400">2 Calls</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">Completed Today:</span>
              <span className="font-bold text-emerald-400">1 Call</span>
            </div>
          </div>
        </div>

        {/* Schedule List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-100">Scheduled Touchpoints for {selectedDate}</h3>
            <span className="text-xs text-slate-400">{followupsList.length} Tasks Scheduled</span>
          </div>

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

                  <button className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs transition-colors">
                    Mark Done
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
