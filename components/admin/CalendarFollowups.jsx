'use client';

import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  CheckCircle2,
  AlertCircle,
  User,
  PhoneCall,
  Video,
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Filter,
  CalendarDays,
  Mail,
  MapPin
} from 'lucide-react';

const INITIAL_EVENTS = [
  {
    id: 'ev-1',
    title: 'Discovery Call: Next.js SaaS Rebuild',
    client: 'Vikram Malhotra (Malhotra Infotech)',
    email: 'vikram@malhotratech.com',
    phone: '+91 98765 43210',
    type: 'Video',
    date: '2026-08-31',
    time: '11:30 AM',
    status: 'Scheduled',
    notes: 'Review project scope, microservice architecture, and Q3 deployment timeline.',
  },
  {
    id: 'ev-2',
    title: 'Consultation: Local SEO & Keyword Intent Strategy',
    client: 'Dr. Manish Jha (Patliputra Diagnostics)',
    email: 'drjha@patliputradiagnostics.in',
    phone: '+91 94312 88990',
    type: 'PhoneCall',
    date: '2026-08-31',
    time: '02:00 PM',
    status: 'Scheduled',
    notes: 'Evaluate Google Search Console rankings and local citation opportunities across Bihar.',
  },
  {
    id: 'ev-3',
    title: 'Product Demo: InvoBill GST Software Integration',
    client: 'Rajesh Verma (Patna Retail Hub)',
    email: 'rajesh@patnaretail.com',
    phone: '+91 98350 12345',
    type: 'Video',
    date: '2026-09-01',
    time: '04:30 PM',
    status: 'Upcoming',
    notes: 'Walkthrough multi-terminal billing, barcode scanning, and GST return export.',
  },
  {
    id: 'ev-4',
    title: 'Performance Marketing Audit Review',
    client: 'Ananya Sharma (Bihar E-Shoppe)',
    email: 'ananya@bihareshoppe.in',
    phone: '+91 91234 56789',
    type: 'PhoneCall',
    date: '2026-09-02',
    time: '10:00 AM',
    status: 'Upcoming',
    notes: 'Analyze Meta Ads ROAS and review custom e-commerce landing page conversion rates.',
  }
];

export default function CalendarFollowups({ leads = [] }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [typeFilter, setTypeFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    client: '',
    email: '',
    phone: '',
    type: 'Video',
    time: '11:00 AM',
    date: selectedDate,
    notes: '',
  });

  const filteredEvents = events.filter(ev => {
    const matchesType = typeFilter === 'all' || ev.type.toLowerCase() === typeFilter.toLowerCase();
    return matchesType;
  });

  const handleCreateFollowup = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.client) return;

    const item = {
      id: `ev-${Date.now()}`,
      ...newEvent,
      status: 'Scheduled',
    };

    setEvents(prev => [item, ...prev]);
    setShowModal(false);
    setNewEvent({
      title: '',
      client: '',
      email: '',
      phone: '',
      type: 'Video',
      time: '11:00 AM',
      date: selectedDate,
      notes: '',
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
            <span className="admin-badge admin-badge-qualified">
              <CalendarDays style={{ width: 12, height: 12 }} /> Client Operations
            </span>
          </div>
          <h1 className="admin-page-title">Calendar & Lead Follow-ups</h1>
          <p className="admin-page-desc">
            Schedule strategy discovery calls, client onboarding sessions, and follow-up reminders
          </p>
        </div>
        <div className="admin-page-actions">
          <button
            onClick={() => setShowModal(true)}
            className="admin-btn admin-btn-primary"
          >
            <Plus style={{ width: 16, height: 16 }} />
            Schedule Follow-up
          </button>
        </div>
      </div>

      {/* Grid: Left Date Picker & Summary / Right Events Agenda */}
      <div className="admin-grid admin-grid-1-2">
        {/* Left Column: Agenda Controller */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="admin-card" style={{ padding: 'var(--space-5)' }}>
            <div className="admin-card-title" style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <CalendarIcon style={{ color: 'var(--color-primary)', width: 18, height: 18 }} />
              Agenda Calendar
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={e => setSelectedDate(e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label className="admin-label">Filter Touchpoint Type</label>
              <select
                value={typeFilter}
                onChange={e => setTypeFilter(e.target.value)}
                className="admin-input admin-select"
              >
                <option value="all">All Touchpoints</option>
                <option value="video">Google Meet / Video</option>
                <option value="phonecall">Phone Consultation</option>
              </select>
            </div>
          </div>

          <div className="admin-card" style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>
              Touchpoint Metrics
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--text-sm)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Scheduled Events:</span>
              <strong style={{ color: 'var(--color-text)' }}>{events.length} Total</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--text-sm)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Video Consultations:</span>
              <strong style={{ color: 'var(--color-primary)' }}>{events.filter(e => e.type === 'Video').length}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 'var(--text-sm)' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>Phone Follow-ups:</span>
              <strong style={{ color: 'var(--color-info)' }}>{events.filter(e => e.type === 'PhoneCall').length}</strong>
            </div>
          </div>
        </div>

        {/* Right Column: Scheduled List */}
        <div className="admin-card">
          <div className="admin-card-header">
            <div>
              <div className="admin-card-title">Scheduled Touchpoints & Meetings</div>
              <div className="admin-card-subtitle">Active client consultations mapped for quick follow-up</div>
            </div>
            <span className="admin-badge admin-badge-qualified">{filteredEvents.length} Active</span>
          </div>

          <div className="admin-card-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {filteredEvents.length === 0 ? (
              <div className="admin-empty-state">
                <CalendarIcon className="admin-empty-state-icon" />
                <div className="admin-empty-state-title">No scheduled touchpoints</div>
                <div className="admin-empty-state-desc">Click "Schedule Follow-up" to record a new client meeting.</div>
              </div>
            ) : (
              filteredEvents.map(ev => (
                <div
                  key={ev.id}
                  className="admin-card"
                  style={{
                    padding: 'var(--space-4)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-4)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                      <div style={{
                        width: 36,
                        height: 36,
                        borderRadius: 'var(--radius-md)',
                        background: ev.type === 'Video' ? 'var(--color-info-light)' : 'var(--color-primary-light)',
                        color: ev.type === 'Video' ? 'var(--color-info)' : 'var(--color-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {ev.type === 'Video' ? <Video style={{ width: 18, height: 18 }} /> : <PhoneCall style={{ width: 18, height: 18 }} />}
                      </div>
                      <div>
                        <div style={{ fontWeight: 'var(--weight-bold)', color: 'var(--color-text)', fontSize: 'var(--text-sm)' }}>
                          {ev.title}
                        </div>
                        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 2 }}>
                          <User style={{ width: 12, height: 12 }} />
                          <strong>{ev.client}</strong>
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}>
                        <Clock style={{ width: 12, height: 12 }} /> {ev.time}
                      </div>
                      <span className="admin-badge admin-badge-new" style={{ marginTop: 4 }}>
                        {ev.date}
                      </span>
                    </div>
                  </div>

                  {ev.notes && (
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', background: 'var(--color-surface)', padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-sm)' }}>
                      {ev.notes}
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 'var(--space-2)', paddingTop: 'var(--space-2)', borderTop: '1px solid var(--color-border-light)' }}>
                    {ev.phone && (
                      <a href={`tel:${ev.phone}`} className="admin-btn admin-btn-outline admin-btn-sm">
                        <PhoneCall style={{ width: 12, height: 12 }} /> Call
                      </a>
                    )}
                    {ev.email && (
                      <a href={`mailto:${ev.email}`} className="admin-btn admin-btn-primary admin-btn-sm">
                        <Mail style={{ width: 12, height: 12 }} /> Email
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Schedule Modal */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '480px' }}>
            <form onSubmit={handleCreateFollowup}>
              <div className="admin-modal-header">
                <div className="admin-modal-title">Schedule Client Follow-up</div>
                <button type="button" onClick={() => setShowModal(false)} className="admin-btn admin-btn-ghost admin-btn-sm">✕</button>
              </div>

              <div className="admin-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div className="admin-form-group" style={{ marginBottom: 0 }}>
                  <label className="admin-label">Subject / Agenda <span className="required">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Discovery Call on Next.js Redesign"
                    value={newEvent.title}
                    onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
                    className="admin-input"
                  />
                </div>

                <div className="admin-form-group" style={{ marginBottom: 0 }}>
                  <label className="admin-label">Client Name <span className="required">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={newEvent.client}
                    onChange={e => setNewEvent({ ...newEvent, client: e.target.value })}
                    className="admin-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)' }}>
                  <div className="admin-form-group" style={{ marginBottom: 0 }}>
                    <label className="admin-label">Email</label>
                    <input
                      type="email"
                      placeholder="client@mail.com"
                      value={newEvent.email}
                      onChange={e => setNewEvent({ ...newEvent, email: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="admin-form-group" style={{ marginBottom: 0 }}>
                    <label className="admin-label">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91..."
                      value={newEvent.phone}
                      onChange={e => setNewEvent({ ...newEvent, phone: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2)' }}>
                  <div className="admin-form-group" style={{ marginBottom: 0 }}>
                    <label className="admin-label">Type</label>
                    <select
                      value={newEvent.type}
                      onChange={e => setNewEvent({ ...newEvent, type: e.target.value })}
                      className="admin-input admin-select"
                    >
                      <option value="Video">Video Call</option>
                      <option value="PhoneCall">Phone Call</option>
                    </select>
                  </div>
                  <div className="admin-form-group" style={{ marginBottom: 0 }}>
                    <label className="admin-label">Date</label>
                    <input
                      type="date"
                      value={newEvent.date}
                      onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                  <div className="admin-form-group" style={{ marginBottom: 0 }}>
                    <label className="admin-label">Time</label>
                    <input
                      type="text"
                      placeholder="11:30 AM"
                      value={newEvent.time}
                      onChange={e => setNewEvent({ ...newEvent, time: e.target.value })}
                      className="admin-input"
                    />
                  </div>
                </div>

                <div className="admin-form-group" style={{ marginBottom: 0 }}>
                  <label className="admin-label">Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Key discussion points or prerequisites..."
                    value={newEvent.notes}
                    onChange={e => setNewEvent({ ...newEvent, notes: e.target.value })}
                    className="admin-input admin-textarea"
                  />
                </div>
              </div>

              <div className="admin-modal-footer">
                <button type="button" onClick={() => setShowModal(false)} className="admin-btn admin-btn-outline">Cancel</button>
                <button type="submit" className="admin-btn admin-btn-primary">Save Touchpoint</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
