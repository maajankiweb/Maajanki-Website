'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
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
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Rows,
} from 'lucide-react';

export default function AgencyAgentsPage() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [syncInfo, setSyncInfo] = useState({ source: '', time: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCategoryGridView, setIsCategoryGridView] = useState(false);
  const scrollRef = useRef(null);

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

  // Count agents per category
  const categoryCounts = useMemo(() => {
    const counts = { all: agents.length };
    agents.forEach((a) => {
      if (a.category) {
        counts[a.category] = (counts[a.category] || 0) + 1;
      }
    });
    return counts;
  }, [agents]);

  const getAgentSystemPrompt = (agent) => {
    if (agent.systemPrompt && agent.systemPrompt.trim().length > 10) return agent.systemPrompt;
    return `You are ${agent.name}, an expert ${agent.role || agent.categoryName} specialist at MaaJanki Web Tech.
Domain: ${agent.categoryName || agent.category}
Capabilities: ${(agent.capabilities || ['Industry Best Practices', 'Modular Architecture', 'Conversion Optimization']).join(', ')}

Provide comprehensive, high-quality, actionable solutions and strategic recommendations following the official MaaJanki Web Tech development standards.`;
  };

  // Formatted category label helper
  const getCategoryLabel = (cat) => {
    const count = categoryCounts[cat] || 0;
    if (cat === 'all') return `🌟 All Domains (${count})`;

    const map = {
      academic: '🎓 Academic',
      design: '🎨 Design & UX',
      engineering: '💻 Engineering',
      examples: '💡 Examples',
      finance: '💵 Finance',
      'game-development': '🎮 Game Dev',
      gis: '🗺️ GIS & Mapping',
      healthcare: '🩺 Healthcare',
      integrations: '⚡ Integrations',
      marketing: '📢 Marketing & SEO',
      'paid-media': '💰 Paid Media',
      product: '📊 Product',
      'project-management': '🎬 Project Mgmt',
      sales: '💼 Sales & Outreach',
      security: '🔒 Security & SecOps',
      'spatial-computing': '🥽 Spatial XR',
      specialized: '⚡ Specialized',
      strategy: '🎯 Strategy',
      support: '🛟 Support & Ops',
      testing: '🧪 Quality & QA',
    };

    const label = map[cat.toLowerCase()] || `${cat.charAt(0).toUpperCase() + cat.slice(1)}`;
    return `${label} (${count})`;
  };

  const scrollCategories = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Filtered agents
  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (agent.role || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (agent.description || '').toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat = activeCategory === 'all' || agent.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [agents, searchTerm, activeCategory]);

  const handleCopyPrompt = (agent) => {
    const textToCopy = getAgentSystemPrompt(agent);
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
          systemPrompt: getAgentSystemPrompt(selectedChatAgent),
          userPrompt: currentPrompt,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setChatHistory((prev) => [
          ...prev,
          {
            sender: 'agent',
            agentName: data.agentName || selectedChatAgent.name,
            text: data.response,
            provider: data.provider,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } else {
        setChatHistory((prev) => [
          ...prev,
          { sender: 'system', text: `⚠️ Agent execution: ${data.error || 'Request completed with fallback response.'}` },
        ]);
      }
    } catch (err) {
      setChatHistory((prev) => [
        ...prev,
        { sender: 'system', text: `⚠️ Network notice: ${err.message}` },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Top Banner & GitHub Auto-Sync Status Header */}
      <div className="admin-card" style={{ padding: '24px', background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(253, 106, 2, 0.1)',
              border: '1px solid rgba(253, 106, 2, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              🤖
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 className="admin-page-title" style={{ margin: 0, fontSize: '20px' }}>Agency AI Agents</h1>
                <span className="admin-badge admin-badge-new" style={{ fontSize: '11px' }}>
                  {agents.length} Personas Available
                </span>
              </div>
              <p className="admin-page-desc" style={{ margin: '4px 0 0 0', fontSize: '13px' }}>
                100+ Specialized Agent Workflows synced with{' '}
                <a
                  href="https://github.com/msitarzewski/agency-agents"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--color-primary)', fontWeight: '600', textDecoration: 'none' }}
                >
                  msitarzewski/agency-agents ↗
                </a>
              </p>
            </div>
          </div>

          {/* Sync Status Badge & Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ textAlign: 'right', fontSize: '12px' }}>
              <span style={{ color: 'var(--color-text-secondary)', display: 'block' }}>
                Source: <strong style={{ color: 'var(--color-text)' }}>{syncInfo.source || 'GitHub Live'}</strong>
              </span>
              <span style={{ color: '#16a34a', fontSize: '11px', fontFamily: 'monospace' }}>Synced at {syncInfo.time || 'Just now'}</span>
            </div>

            <button
              onClick={() => fetchAgents(true)}
              disabled={syncing}
              className="admin-btn admin-btn-outline"
              style={{ fontSize: '13px' }}
            >
              <RefreshCw size={14} style={{ animation: syncing ? 'spin 1s linear infinite' : 'none' }} />
              <span>{syncing ? 'Syncing...' : 'Sync Latest'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Toolbar: Search Bar & Responsive Category Controls */}
      <div className="admin-card" style={{ padding: '16px', background: 'var(--bg-card)' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            <input
              type="text"
              placeholder="Search agent name, skill or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="admin-input"
              style={{ width: '100%', paddingLeft: '36px', fontSize: '13px' }}
            />
          </div>

          {/* View Toggle & Agent Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', color: 'var(--color-text-secondary)' }}>
              Showing <strong style={{ color: 'var(--color-primary)' }}>{filteredAgents.length}</strong> of {agents.length} agents
            </span>

            <button
              onClick={() => setIsCategoryGridView(!isCategoryGridView)}
              className="admin-btn admin-btn-outline"
              style={{ fontSize: '12px', padding: '4px 10px', height: '30px' }}
            >
              {isCategoryGridView ? <Rows size={14} /> : <LayoutGrid size={14} />}
              <span>{isCategoryGridView ? 'Slider View' : 'Grid View'}</span>
            </button>
          </div>
        </div>

        {/* Category Tabs Section */}
        {isCategoryGridView ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const label = getCategoryLabel(cat);
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`admin-btn ${isActive ? 'admin-btn-primary' : 'admin-btn-outline'}`}
                  style={{ fontSize: '12px', padding: '4px 10px', height: '30px' }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid var(--border-color)', gap: '8px' }}>
            <button
              onClick={() => scrollCategories('left')}
              className="topbar-icon-btn"
              style={{ width: '32px', height: '32px', flexShrink: 0 }}
              title="Slide Left"
            >
              <ChevronLeft size={16} />
            </button>

            <div
              ref={scrollRef}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', scrollbarWidth: 'none', width: '100%', padding: '4px 0' }}
            >
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const label = getCategoryLabel(cat);
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`admin-btn ${isActive ? 'admin-btn-primary' : 'admin-btn-outline'}`}
                    style={{ fontSize: '12px', padding: '4px 12px', height: '30px', whiteSpace: 'nowrap', flexShrink: 0 }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scrollCategories('right')}
              className="topbar-icon-btn"
              style={{ width: '32px', height: '32px', flexShrink: 0 }}
              title="Slide Right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* Agents Cards Grid */}
      {loading ? (
        <div className="admin-grid admin-grid-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="admin-card" style={{ height: '180px', padding: '20px' }}>
              <div className="admin-skeleton" style={{ width: '40px', height: '40px', borderRadius: '8px', marginBottom: '12px' }} />
              <div className="admin-skeleton" style={{ width: '70%', height: '16px', marginBottom: '8px' }} />
              <div className="admin-skeleton" style={{ width: '100%', height: '12px', marginBottom: '6px' }} />
              <div className="admin-skeleton" style={{ width: '50%', height: '12px' }} />
            </div>
          ))}
        </div>
      ) : filteredAgents.length === 0 ? (
        <div className="admin-empty-state" style={{ padding: '60px 20px' }}>
          <Bot className="admin-empty-state-icon" style={{ width: 44, height: 44 }} />
          <div className="admin-empty-state-title">No AI Agents Found</div>
          <div className="admin-empty-state-desc">Try adjusting your search query or domain filter tab.</div>
        </div>
      ) : (
        <div className="admin-grid admin-grid-3">
          {filteredAgents.map((agent) => {
            const isCopied = copiedId === agent.id;

            return (
              <div
                key={agent.id}
                className="admin-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '20px',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '24px' }}>{agent.icon || '🤖'}</span>
                      <span className="admin-badge admin-badge-new" style={{ fontSize: '10px', textTransform: 'uppercase' }}>
                        {agent.categoryBadge || 'Agent'}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyPrompt(agent)}
                      className="topbar-icon-btn"
                      style={{ width: '28px', height: '28px' }}
                      title="Copy System Prompt"
                    >
                      {isCopied ? <Check size={14} style={{ color: '#16a34a' }} /> : <Copy size={14} />}
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 6px 0', color: 'var(--color-text)' }}>
                    {agent.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-secondary)', lineHeight: '1.5', margin: '0 0 12px 0' }}>
                    {agent.description}
                  </p>

                  {/* Capabilities tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                    {(agent.capabilities || []).slice(0, 3).map((cap, idx) => (
                      <span key={idx} style={{
                        fontSize: '10px',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--bg-elevated)',
                        color: 'var(--color-text-secondary)',
                        border: '1px solid var(--border-color)'
                      }}>
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action Buttons */}
                <div style={{ display: 'flex', gap: '8px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                  <button
                    onClick={() => {
                      setSelectedChatAgent(agent);
                      setChatHistory([
                        {
                          sender: 'agent',
                          agentName: agent.name,
                          text: `Hello Admin! I am the **${agent.name}** (${agent.categoryName || agent.category}). How can I assist you with your project or task today?`,
                          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                        },
                      ]);
                    }}
                    className="admin-btn admin-btn-primary"
                    style={{ flex: 1, fontSize: '12px', padding: '6px 12px', justifyContent: 'center' }}
                  >
                    <MessageSquare size={14} />
                    <span>Launch Chat</span>
                  </button>

                  <button
                    onClick={() => setSelectedPromptAgent(agent)}
                    className="admin-btn admin-btn-outline"
                    style={{ fontSize: '12px', padding: '6px 10px' }}
                    title="View Full System Prompt Persona"
                  >
                    <FileText size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL 1: View System Prompt Modal */}
      {selectedPromptAgent && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)'
        }}>
          <div className="admin-card" style={{ width: '100%', maxWidth: '640px', maxHeight: '85vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '24px' }}>{selectedPromptAgent.icon || '🤖'}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700' }}>{selectedPromptAgent.name}</h3>
                  <span style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: '600' }}>{selectedPromptAgent.categoryName}</span>
                </div>
              </div>
              <button onClick={() => setSelectedPromptAgent(null)} className="topbar-icon-btn" style={{ width: '28px', height: '28px' }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-color)', fontSize: '13px', color: 'var(--color-text)' }}>
                {selectedPromptAgent.description}
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '8px' }}>
                  System Prompt Persona:
                </label>
                <pre style={{
                  padding: '16px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-body)',
                  border: '1px solid var(--border-color)',
                  fontSize: '12px',
                  fontFamily: 'monospace',
                  color: 'var(--color-text)',
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.6',
                  overflowX: 'auto'
                }}>
                  {getAgentSystemPrompt(selectedPromptAgent)}
                </pre>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', padding: '16px 20px', borderTop: '1px solid var(--border-color)', background: 'var(--bg-card)' }}>
              <button onClick={() => setSelectedPromptAgent(null)} className="admin-btn admin-btn-outline" style={{ fontSize: '13px' }}>
                Close
              </button>
              <button onClick={() => handleCopyPrompt(selectedPromptAgent)} className="admin-btn admin-btn-primary" style={{ fontSize: '13px' }}>
                <Copy size={14} />
                <span>Copy Full Prompt</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Live AI Agent Chat Studio */}
      {selectedChatAgent && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)'
        }}>
          <div className="admin-card" style={{ width: '100%', maxWidth: '720px', height: '80vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px' }}>{selectedChatAgent.icon || '🤖'}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {selectedChatAgent.name}
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                  </h3>
                  <span style={{ fontSize: '11px', color: 'var(--color-primary)', fontWeight: '600' }}>{selectedChatAgent.categoryName}</span>
                </div>
              </div>
              <button onClick={() => setSelectedChatAgent(null)} className="topbar-icon-btn" style={{ width: '28px', height: '28px' }}>
                <X size={16} />
              </button>
            </div>

            {/* Chat Messages Body */}
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-body)' }}>
              {chatHistory.map((msg, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: '4px', padding: '0 4px' }}>
                    <span>{msg.sender === 'user' ? 'Admin' : msg.agentName || selectedChatAgent.name}</span> • <span>{msg.time}</span>
                  </div>
                  <div style={{
                    maxWidth: '85%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    backgroundColor: msg.sender === 'user' ? 'var(--color-primary)' : 'var(--bg-card)',
                    color: msg.sender === 'user' ? '#ffffff' : 'var(--color-text)',
                    border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {chatLoading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 16px', borderRadius: '12px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', color: 'var(--color-primary)', fontSize: '13px', width: 'fit-content' }}>
                  <Sparkles size={16} style={{ animation: 'spin 1.5s linear infinite' }} />
                  <span>{selectedChatAgent.name} is thinking & analyzing...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div style={{ padding: '16px 20px', borderTop: '1px solid var(--border-color)', background: 'var(--bg-card)', display: 'flex', gap: '8px' }}>
              <input
                type="text"
                placeholder={`Ask ${selectedChatAgent.name} for strategy, code, content or recommendations...`}
                value={chatPrompt}
                onChange={(e) => setChatPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendChatMessage()}
                className="admin-input"
                style={{ flex: 1, fontSize: '13px' }}
              />
              <button
                onClick={handleSendChatMessage}
                disabled={chatLoading || !chatPrompt.trim()}
                className="admin-btn admin-btn-primary"
                style={{ padding: '0 16px', height: '38px' }}
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
