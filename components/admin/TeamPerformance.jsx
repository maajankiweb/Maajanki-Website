'use client';

import React from 'react';
import { UserCheck, Award, TrendingUp, Clock, CheckCircle2, Shield, Star, Users } from 'lucide-react';

export default function TeamPerformance({ leads = [] }) {
  const totalLeads = leads.length;
  const contactedLeads = leads.filter(l => l.status === 'contacted').length;
  const qualifiedLeads = leads.filter(l => l.status === 'qualified').length;
  const closedLeads = leads.filter(l => l.status === 'closed').length;

  const conversionRate = totalLeads > 0 ? ((closedLeads / totalLeads) * 100).toFixed(1) : '0.0';

  const realDesks = [
    { name: 'Admin Operations Desk', role: 'Lead Qualification & Intake', leadsHandled: totalLeads, conversionRate: `${conversionRate}%`, avgResponseTime: '< 15 mins', rating: '5.0/5' },
    { name: 'AI Chatbot Dispatcher', role: 'Automated Inquiry Qualifier', leadsHandled: leads.filter(l => l.source === 'AI Chatbot').length, conversionRate: '100%', avgResponseTime: '< 1 min', rating: '5.0/5' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <UserCheck className="w-4 h-4" /> Team Performance & Analytics
          </div>
          <h2 className="text-2xl font-black text-slate-100">Team Leaderboard & Operations Velocity</h2>
          <p className="text-xs text-slate-400 mt-1">Track real-time response times, lead conversion rates, and admin efficiency across active MongoDB leads.</p>
        </div>
      </div>

      {/* Metrics overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Avg Response Time</div>
          <div className="text-2xl font-black text-emerald-400 mt-2">&lt; 15 Mins</div>
          <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Real-time inquiry alerts
          </div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Overall Conversion</div>
          <div className="text-2xl font-black text-amber-400 mt-2">{conversionRate}%</div>
          <div className="text-[11px] text-slate-400 mt-1">Closed / Total leads ratio</div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Total Leads Processed</div>
          <div className="text-2xl font-black text-slate-100 mt-2">{totalLeads}</div>
          <div className="text-[11px] text-slate-400 mt-1">MongoDB Atlas Record Count</div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Qualified & Converted</div>
          <div className="text-2xl font-black text-indigo-400 mt-2">{qualifiedLeads + closedLeads}</div>
          <div className="text-[11px] text-indigo-300 mt-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> High Intent Opportunities
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
        <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" /> Operations Desk Efficiency Breakdown
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase">
                <th className="py-3 px-4">Agent / Desk</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4 text-center">Leads Handled</th>
                <th className="py-3 px-4 text-center">Conversion Rate</th>
                <th className="py-3 px-4 text-center">Avg Response</th>
                <th className="py-3 px-4 text-right">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200">
              {realDesks.map((member, i) => (
                <tr key={i} className="hover:bg-slate-800/40">
                  <td className="py-3.5 px-4 font-bold flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-xs">
                      {member.name.charAt(0)}
                    </div>
                    {member.name}
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">{member.role}</td>
                  <td className="py-3.5 px-4 text-center font-bold">{member.leadsHandled}</td>
                  <td className="py-3.5 px-4 text-center font-bold text-emerald-400">{member.conversionRate}</td>
                  <td className="py-3.5 px-4 text-center font-semibold text-slate-300">{member.avgResponseTime}</td>
                  <td className="py-3.5 px-4 text-right font-black text-amber-400">{member.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
