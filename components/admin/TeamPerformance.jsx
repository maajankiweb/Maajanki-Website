'use client';

import React from 'react';
import { UserCheck, Award, TrendingUp, Clock, CheckCircle2, Shield, Star, Users } from 'lucide-react';

export default function TeamPerformance({ leads = [] }) {
  const teamMembers = [
    { name: 'Admin Operations Team', role: 'Lead Qualification Specialist', leadsHandled: 48, conversionRate: '38.5%', avgResponseTime: '12 mins', status: 'Top Performer', rating: '4.9/5' },
    { name: 'MaaJanki Tech Sales', role: 'Enterprise Account Executive', leadsHandled: 32, conversionRate: '42.1%', avgResponseTime: '8 mins', status: 'Active', rating: '5.0/5' },
    { name: 'AI Support Assistant', role: 'Automated Inquiry Qualifier', leadsHandled: 120, conversionRate: '24.0%', avgResponseTime: '< 1 min', status: 'Automated Bot', rating: '4.8/5' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
            <UserCheck className="w-4 h-4" /> Team Performance & Analytics
          </div>
          <h2 className="text-2xl font-black text-slate-100">Team Leaderboard & Sales Velocity</h2>
          <p className="text-xs text-slate-400 mt-1">Track response times, lead conversion rates, and agent efficiency across departments.</p>
        </div>
      </div>

      {/* Metrics overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Avg Response Time</div>
          <div className="text-2xl font-black text-emerald-400 mt-2">14 Mins</div>
          <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> 22% faster than last week
          </div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Overall Conversion</div>
          <div className="text-2xl font-black text-amber-400 mt-2">34.2%</div>
          <div className="text-[11px] text-slate-400 mt-1">Qualified to Closed ratio</div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Active Sales Reps</div>
          <div className="text-2xl font-black text-slate-100 mt-2">5 Agents</div>
          <div className="text-[11px] text-slate-400 mt-1">Full shift coverage</div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Client Satisfaction</div>
          <div className="text-2xl font-black text-indigo-400 mt-2">4.9 / 5.0</div>
          <div className="text-[11px] text-indigo-300 mt-1 flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> High rating
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4">
        <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" /> Agent Leaderboard & Efficiency Breakdown
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
              {teamMembers.map((member, i) => (
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
