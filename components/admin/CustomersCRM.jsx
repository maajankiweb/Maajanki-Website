'use client';

import React, { useState } from 'react';
import { Building2, Search, Filter, Mail, Phone, ExternalLink, ShieldCheck, DollarSign, Tag, UserPlus, ArrowUpRight } from 'lucide-react';

export default function CustomersCRM({ leads = [] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [tierFilter, setTierFilter] = useState('all');

  // Convert leads to customer profiles or use CRM leads
  const customerList = (leads.length > 0 ? leads : [
    { _id: '1', name: 'Apex Tech Solutions', email: 'contact@apextech.io', phone: '+91 98765 43210', service: 'Full Stack Web & Mobile App', status: 'closed', createdAt: '2026-07-15', dealValue: '₹2,50,000', tier: 'VIP Enterprise' },
    { _id: '2', name: 'Global Logistics Corp', email: 'info@globallogistics.com', phone: '+1 (555) 234-5678', service: 'Custom ERP & AI Automation', status: 'qualified', createdAt: '2026-07-20', dealValue: '₹4,80,000', tier: 'Enterprise' },
    { _id: '3', name: 'Dr. R. K. Health Clinic', email: 'dr.rkhealth@gmail.com', phone: '+91 91234 56789', service: 'SEO & Healthcare Web Portal', status: 'closed', createdAt: '2026-07-28', dealValue: '₹1,20,000', tier: 'Growth' },
    { _id: '4', name: 'Fintech Innovations', email: 'hello@fintechinno.com', phone: '+44 20 7946 0912', service: 'Cloud Infrastructure & Security', status: 'contacted', createdAt: '2026-08-01', dealValue: '₹3,50,000', tier: 'VIP Enterprise' },
  ]).map((l, idx) => ({
    id: l._id || idx,
    name: l.name || 'Enterprise Client',
    email: l.email || 'client@business.com',
    phone: l.phone || 'N/A',
    service: l.service || 'Web Development & Digital Growth',
    status: l.status || 'closed',
    createdAt: new Date(l.createdAt || Date.now()).toLocaleDateString(),
    dealValue: l.dealValue || '₹1,50,000',
    tier: l.tier || (idx % 2 === 0 ? 'VIP Enterprise' : 'Growth Client'),
    contactPerson: l.name || 'Primary Executive',
  }));

  const filteredCustomers = customerList.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = tierFilter === 'all' || c.tier.toLowerCase().includes(tierFilter.toLowerCase());
    return matchesSearch && matchesTier;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Building2 className="w-4 h-4" /> Customers & CRM Module
          </div>
          <h2 className="text-2xl font-black text-slate-100">Client Directory & Account Management</h2>
          <p className="text-xs text-slate-400 mt-1">Manage active enterprise accounts, contract value history, and client contacts.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-orange-600/20 transition-all self-start md:self-auto">
          <UserPlus className="w-4 h-4" /> Add New Client Account
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Total Clients</div>
          <div className="text-2xl font-black text-slate-100 mt-2">{customerList.length}</div>
          <div className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" /> +14% active accounts this month
          </div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Pipeline Deal Value</div>
          <div className="text-2xl font-black text-amber-400 mt-2">₹12,00,000+</div>
          <div className="text-[11px] text-slate-400 mt-1">Across active lead contracts</div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">Retention Rate</div>
          <div className="text-2xl font-black text-emerald-400 mt-2">94.8%</div>
          <div className="text-[11px] text-emerald-400 font-semibold mt-1">High satisfaction score</div>
        </div>
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
          <div className="text-xs font-bold text-slate-400 uppercase">VIP Enterprise Clients</div>
          <div className="text-2xl font-black text-indigo-400 mt-2">{customerList.filter(c => c.tier.includes('VIP')).length}</div>
          <div className="text-[11px] text-slate-400 mt-1">Priority SLA Accounts</div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-900 p-4 border border-slate-800 rounded-2xl">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search clients by name, email, or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value)}
            className="px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-orange-500 w-full sm:w-auto"
          >
            <option value="all">All Tiers</option>
            <option value="VIP">VIP Enterprise</option>
            <option value="Growth">Growth Client</option>
          </select>
        </div>
      </div>

      {/* Client Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCustomers.map((client) => (
          <div key={client.id} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 hover:border-slate-700 transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2.5 py-0.5 text-[10px] font-extrabold bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full">
                  {client.tier}
                </span>
                <h3 className="text-base font-bold text-slate-100 mt-2">{client.name}</h3>
                <p className="text-xs text-slate-400">{client.service}</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500">Contract Value</span>
                <div className="text-sm font-black text-emerald-400">{client.dealValue}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <a href={`mailto:${client.email}`} className="hover:text-orange-400 truncate">{client.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <a href={`tel:${client.phone}`} className="hover:text-orange-400">{client.phone}</a>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[11px] text-slate-500">
              <span>Onboarded: {client.createdAt}</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-semibold uppercase">
                Status: {client.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
