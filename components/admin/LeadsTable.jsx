'use client';

import React, { useState } from 'react';
import {
  Search,
  Download,
  Filter,
  Trash2,
  Edit2,
  CheckCircle,
  Clock,
  Archive,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Mail,
  Phone,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function LeadsTable({
  leads = [],
  loading = false,
  onUpdateStatus,
  onDeleteLead,
  onExportCSV,
  initialStatusFilter = 'all',
  initialSourceFilter = 'all',
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState(initialStatusFilter);
  const [sourceFilter, setSourceFilter] = useState(initialSourceFilter);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filter leads
  const filtered = leads.filter((lead) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      (lead.name && lead.name.toLowerCase().includes(term)) ||
      (lead.email && lead.email.toLowerCase().includes(term)) ||
      (lead.phone && lead.phone.toLowerCase().includes(term)) ||
      (lead.service && lead.service.toLowerCase().includes(term)) ||
      (lead.message && lead.message.toLowerCase().includes(term));

    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesSource = sourceFilter === 'all' || lead.source === sourceFilter;

    return matchesSearch && matchesStatus && matchesSource;
  });

  // Pagination math
  const totalPages = Math.ceil(filtered.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLeads = filtered.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'new':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'contacted':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'qualified':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'closed':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'spam':
        return 'bg-slate-700 text-slate-400 border-slate-600';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getPriorityBadge = (lead) => {
    // Determine priority based on message length or source
    if (lead.source === 'website-audit' || lead.service?.includes('SEO')) {
      return <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">HIGH</span>;
    }
    if (lead.source === 'contact-page') {
      return <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">MEDIUM</span>;
    }
    return <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-700 text-slate-300">NORMAL</span>;
  };

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
      {/* Table Toolbar Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            Advanced Lead Management
            <span className="px-2 py-0.5 text-xs rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
              {filtered.length} Leads
            </span>
          </h3>
          <p className="text-xs text-slate-400">Search, filter, update status, and export MongoDB Atlas leads</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 pr-4 py-1.5 text-xs bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Status Dropdown Filter */}
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-1.5 text-xs bg-slate-800 border border-slate-700 rounded-xl text-slate-200 focus:outline-none focus:border-orange-500"
          >
            <option value="all">All Statuses</option>
            <option value="new">🔴 New</option>
            <option value="contacted">🟡 Contacted</option>
            <option value="qualified">🔵 Qualified</option>
            <option value="closed">🟢 Closed</option>
            <option value="spam">⚪ Spam</option>
          </select>

          {/* Source Dropdown Filter */}
          <select
            value={sourceFilter}
            onChange={(e) => {
              setSourceFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-3 py-1.5 text-xs bg-slate-800 border border-slate-700 rounded-xl text-slate-200 focus:outline-none focus:border-orange-500"
          >
            <option value="all">All Sources</option>
            <option value="contact-page">Contact Form</option>
            <option value="website-audit">Audit Form</option>
            <option value="footer-popup">Footer Popup</option>
            <option value="homepage-promo-popup">Promo Popup</option>
            <option value="chatbot">AI Chatbot</option>
            <option value="brochure">Brochure Download</option>
          </select>

          {/* Export CSV Button */}
          <button
            onClick={onExportCSV}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl transition-colors"
          >
            <Download className="w-4 h-4 text-orange-400" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
            <tr>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Source</th>
              <th className="py-3 px-4">Contact</th>
              <th className="py-3 px-4">Service & URL</th>
              <th className="py-3 px-4">Message</th>
              <th className="py-3 px-4">Priority</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 bg-slate-900/50">
            {loading ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-slate-400">
                  <Sparkles className="w-6 h-6 animate-spin text-orange-400 mx-auto mb-2" />
                  Loading MongoDB leads...
                </td>
              </tr>
            ) : currentLeads.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-8 text-center text-slate-400">
                  No lead records found matching your query filters.
                </td>
              </tr>
            ) : (
              currentLeads.map((lead) => (
                <tr key={lead._id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 whitespace-nowrap">
                    <div className="font-semibold text-slate-200">
                      {new Date(lead.createdAt || Date.now()).toLocaleDateString()}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      {new Date(lead.createdAt || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </td>

                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-slate-800 text-orange-400 border border-slate-700">
                      {lead.source || 'website'}
                    </span>
                  </td>

                  <td className="py-3 px-4">
                    <div className="font-bold text-slate-100">{lead.name || 'Anonymous'}</div>
                    {lead.email && lead.email !== 'N/A' && (
                      <div className="text-slate-400 flex items-center gap-1 mt-0.5">
                        <Mail className="w-3 h-3 text-slate-500" /> {lead.email}
                      </div>
                    )}
                    {lead.phone && lead.phone !== 'N/A' && (
                      <div className="text-slate-400 flex items-center gap-1 mt-0.5">
                        <Phone className="w-3 h-3 text-slate-500" /> {lead.phone}
                      </div>
                    )}
                  </td>

                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-200">{lead.service || 'Web Development'}</div>
                    {lead.url && (
                      <a
                        href={lead.url.startsWith('http') ? lead.url : `https://${lead.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] text-orange-400 hover:underline flex items-center gap-1 mt-0.5"
                      >
                        <ExternalLink className="w-3 h-3" /> {lead.url}
                      </a>
                    )}
                  </td>

                  <td className="py-3 px-4 max-w-xs truncate text-slate-400" title={lead.message}>
                    {lead.message || <em className="text-slate-600">No message provided</em>}
                  </td>

                  <td className="py-3 px-4">{getPriorityBadge(lead)}</td>

                  <td className="py-3 px-4">
                    <select
                      value={lead.status || 'new'}
                      onChange={(e) => onUpdateStatus(lead._id, e.target.value)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold border focus:outline-none transition-colors ${getStatusBadge(
                        lead.status || 'new'
                      )}`}
                    >
                      <option value="new" className="bg-slate-900 text-rose-400">🔴 New</option>
                      <option value="contacted" className="bg-slate-900 text-amber-400">🟡 Contacted</option>
                      <option value="qualified" className="bg-slate-900 text-blue-400">🔵 Qualified</option>
                      <option value="closed" className="bg-slate-900 text-emerald-400">🟢 Closed</option>
                      <option value="spam" className="bg-slate-900 text-slate-400">⚪ Spam</option>
                    </select>
                  </td>

                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onDeleteLead(lead._id)}
                      className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                      title="Delete Lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 pt-2">
        <div>
          Showing <span className="font-bold text-slate-200">{filtered.length > 0 ? startIndex + 1 : 0}</span> to{' '}
          <span className="font-bold text-slate-200">{Math.min(startIndex + itemsPerPage, filtered.length)}</span> of{' '}
          <span className="font-bold text-slate-200">{filtered.length}</span> leads
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg border border-slate-700 bg-slate-800 disabled:opacity-40 hover:bg-slate-700"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg border border-slate-700 bg-slate-800 disabled:opacity-40 hover:bg-slate-700"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
