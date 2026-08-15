'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Bot,
  RefreshCw,
  Search,
  Copy,
  Check,
  MessageSquare,
  FileText,
  Sparkles,
  ExternalLink,
  X,
  Send,
  Zap,
  ShieldAlert,
  Code,
  Globe,
  SlidersHorizontal,
} from 'lucide-react';

export default function AgencyAgentsPage() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncInfo, setSyncInfo] = useState({ source: '', time: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Modals state
  const [selectedPromptAgent, setSelectedPromptAgent] = useState(null);
  const [selectedChatAgent, setSelectedChatAgent] = useState(null);
  const [chatPrompt, setChatPrompt] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [copiedId, setCopiedId] = useState(null);

  // Fetch agents list
  const fetchAgents = async (forceSync = false) => {
    if (forceSync) setSyncing(true);
    else setLoading(true);

    try {
      const url = forceSync ? '/api/admin/agency-agents?sync=true' : '/api/admin/agency-agents';
      const res = await fetch(url);
      const data = await res.json();

      if (data.success && data.agents) {
        setAgents(data.agents);
        setSyncInfo({
          source: data.source || 'github',
          time: new Date(data.syncTime || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });
      }
    } catch (err) {
      console.error('Failed to load agency agents:', err);
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  // Filtered categories
  const categories = useMemo(() => {
    const set = new Set(agents.map((a) => a.category).filter(Boolean));
    return ['all', ...Array.from(set)];
  }, [agents]);

  // Filtered agents
  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat = activeCategory === 'all' || agent.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [agents, searchTerm, activeCategory]);

  const handleCopyPrompt = (agent) => {
    const textToCopy = agent.systemPrompt || `Role: ${agent.name}\n${agent.description}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(agent.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendChatMessage = async () => {
    if (!chatPrompt.trim() || !selectedChatAgent) return;

    const userMsg = { sender: 'user', text: chatPrompt, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setChatHistory((prev) => [...prev, userMsg]);
    const currentPrompt = chatPrompt;
    setChatPrompt('');
    setChatLoading(true);

    try {
      const res = await fetch('/api/admin/agency-agents/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentId: selectedChatAgent.id,
          agentName: selectedChatAgent.name,
          categoryName: selectedChatAgent.categoryName,
          systemPrompt: selectedChatAgent.systemPrompt,
          userPrompt: currentPrompt,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setChatHistory((prev) => [
          ...prev,
          {
            sender: 'agent',
            agentName: data.agentName,
            text: data.response,
            provider: data.provider,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } else {
        setChatHistory((prev) => [
          ...prev,
          { sender: 'system', text: `⚠️ Error executing agent: ${data.error || 'Unknown failure'}` },
        ]);
      }
    } catch (err) {
      setChatHistory((prev) => [
        ...prev,
        { sender: 'system', text: `⚠️ Network error: ${err.message}` },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & GitHub Auto-Sync Status Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-6 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xl">
              🎭
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-slate-100 tracking-tight flex items-center gap-2">
                Agency AI Agents
                <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  {agents.length} Agents Active
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                100+ Specialized AI Personas synced from{' '}
                <a
                  href="https://github.com/msitarzewski/agency-agents"
                  target="_blank"
                  rel="noreferrer"
                  className="text-orange-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  msitarzewski/agency-agents <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Sync Status Badge & Action Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-[11px] font-semibold text-slate-400">
              Source: <span className="text-slate-200 uppercase">{syncInfo.source || 'GitHub Live'}</span>
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">Synced at {syncInfo.time || 'Just now'}</span>
          </div>

          <button
            onClick={() => fetchAgents(true)}
            disabled={syncing}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-orange-500/50 rounded-xl transition-all shadow-md disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 text-orange-400 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? 'Syncing Repo...' : 'Sync Latest GitHub'}</span>
          </button>
        </div>
      </div>

      {/* Toolbar: Search Bar & Category Tabs */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search agent name, skill or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-800/80 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
            />
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Showing <span className="text-orange-400 font-bold">{filteredAgents.length}</span> of {agents.length} agents
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const label = cat === 'all' ? '🌟 All Domains' : cat.toUpperCase();
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 border-orange-500 text-white shadow-md shadow-orange-500/20'
                    : 'bg-slate-800/60 border-slate-700/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Agents Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-48 bg-slate-900/60 border border-slate-800 rounded-2xl animate-pulse p-5 space-y-3">
              <div className="w-10 h-10 bg-slate-800 rounded-xl" />
              <div className="h-4 w-3/4 bg-slate-800 rounded" />
              <div className="h-3 w-full bg-slate-800/60 rounded" />
              <div className="h-3 w-1/2 bg-slate-800/60 rounded" />
            </div>
          ))}
        </div>
      ) : filteredAgents.length === 0 ? (
        <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
          <Bot className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-200">No AI Agents Found</h3>
          <p className="text-xs text-slate-400">Try adjusting your search keywords or active domain filter tab.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAgents.map((agent) => {
            const isCopied = copiedId === agent.id;

            return (
              <div
                key={agent.id}
                className="group flex flex-col justify-between p-5 bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 rounded-2xl shadow-lg hover:shadow-orange-500/10 transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-3">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{agent.icon || '🤖'}</span>
                      <span className="px-2.5 py-0.5 text-[10px] font-black rounded-full bg-slate-800 text-orange-400 border border-slate-700 uppercase tracking-wider">
                        {agent.categoryBadge || 'Agent'}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyPrompt(agent)}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                      title="Copy System Prompt"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-orange-400 transition-colors">
                      {agent.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {agent.description}
                    </p>
                  </div>

                  {/* Capabilities tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(agent.capabilities || []).slice(0, 3).map((cap, idx) => (
                      <span key={idx} className="px-2 py-0.5 text-[10px] font-medium bg-slate-800/80 text-slate-300 rounded border border-slate-700/60">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action Buttons */}
                <div className="flex items-center gap-2 pt-5 border-t border-slate-800/80 mt-4">
                  <button
                    onClick={() => {
                      setSelectedChatAgent(agent);
                      setChatHistory([
                        {
                          sender: 'agent',
                          agentName: agent.name,
                          text: `Hello Admin! I am the **${agent.name}** (${agent.categoryName}). How can I assist you with your project or task today?`,
                          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        },
                      ]);
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 rounded-xl shadow-md shadow-orange-500/20 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Launch Chat</span>
                  </button>

                  <button
                    onClick={() => setSelectedPromptAgent(agent)}
                    className="flex items-center justify-center p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors"
                    title="View Full System Prompt Persona"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL 1: View System Prompt Modal */}
      {selectedPromptAgent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{selectedPromptAgent.icon || '🤖'}</span>
                <div>
                  <h3 className="text-base font-bold text-slate-100">{selectedPromptAgent.name}</h3>
                  <span className="text-[11px] text-orange-400 font-semibold">{selectedPromptAgent.categoryName}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPromptAgent(null)}
                className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
              <div className="p-3 bg-slate-800/60 border border-slate-700/60 rounded-xl text-xs text-slate-300 leading-relaxed">
                {selectedPromptAgent.description}
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-2 block">
                  System Prompt Persona:
                </label>
                <pre className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-emerald-400 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {selectedPromptAgent.systemPrompt || `Role: ${selectedPromptAgent.name}\n${selectedPromptAgent.description}`}
                </pre>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-800 bg-slate-950/50">
              <button
                onClick={() => setSelectedPromptAgent(null)}
                className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-slate-200 bg-slate-800 rounded-xl"
              >
                Close
              </button>
              <button
                onClick={() => handleCopyPrompt(selectedPromptAgent)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-all shadow-md shadow-orange-500/20"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Full Prompt</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Live AI Agent Chat Studio */}
      {selectedChatAgent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-3xl h-[80vh] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 text-2xl">
                  {selectedChatAgent.icon || '🤖'}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    {selectedChatAgent.name}
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </h3>
                  <span className="text-[11px] text-orange-400 font-semibold">{selectedChatAgent.categoryName}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedChatAgent(null)}
                className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-slate-950/40">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mb-1 px-1">
                    <span>{msg.sender === 'user' ? 'Admin' : msg.agentName || selectedChatAgent.name}</span>
                    <span>•</span>
                    <span>{msg.time}</span>
                  </div>

                  <div
                    className={`max-w-[85%] p-4 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-orange-600 text-white rounded-tr-none shadow-md'
                        : 'bg-slate-800/90 border border-slate-700 text-slate-200 rounded-tl-none shadow-md'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{msg.text}</div>
                  </div>
                </div>
              ))}

              {chatLoading && (
                <div className="flex items-center gap-2 p-4 bg-slate-800/60 border border-slate-700/60 rounded-2xl w-fit text-xs text-orange-400 animate-pulse">
                  <Sparkles className="w-4 h-4 animate-spin" />
                  <span>{selectedChatAgent.name} is thinking & analyzing...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-slate-800 bg-slate-900">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Ask ${selectedChatAgent.name} to generate strategy, code, content or analysis...`}
                  value={chatPrompt}
                  onChange={(e) => setChatPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendChatMessage()}
                  className="flex-1 px-4 py-2.5 text-xs bg-slate-800 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                />
                <button
                  onClick={handleSendChatMessage}
                  disabled={chatLoading || !chatPrompt.trim()}
                  className="flex items-center justify-center p-2.5 bg-orange-600 hover:bg-orange-500 text-white rounded-xl shadow-md transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
