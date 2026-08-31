'use client';

import React, { useState } from 'react';
import {
  Plus,
  MoreHorizontal,
  User,
  Clock,
  Paperclip,
  MessageSquare,
  KanbanSquare,
  CheckCircle2,
  AlertCircle,
  Tag,
  Calendar,
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

const INITIAL_TASKS = {
  todo: [
    {
      id: 'task-1',
      title: 'Run Schema.org Audit on 58 Global Location Pages',
      category: 'SEO & Indexing',
      priority: 'High',
      date: 'Aug 31',
      members: ['AK', 'SEO'],
      comments: 3,
      attachments: 2,
    },
    {
      id: 'task-2',
      title: 'Configure Google Analytics 4 Custom Events for Audit Form',
      category: 'Analytics',
      priority: 'Medium',
      date: 'Sep 02',
      members: ['DEV'],
      comments: 1,
      attachments: 0,
    },
    {
      id: 'task-3',
      title: 'Onboard Bihar E-Shoppe into InvoBill GST Platform',
      category: 'Client Success',
      priority: 'High',
      date: 'Sep 03',
      members: ['AK'],
      comments: 4,
      attachments: 1,
    }
  ],
  inProgress: [
    {
      id: 'task-4',
      title: 'Deploy Next.js 15 App Router Production Optimization',
      category: 'Engineering',
      priority: 'High',
      date: 'Today',
      members: ['DEV', 'AK'],
      comments: 6,
      attachments: 3,
    },
    {
      id: 'task-5',
      title: 'IndexNow Push for New Case Studies & Service URLs',
      category: 'Automation',
      priority: 'Medium',
      date: 'Today',
      members: ['BOT'],
      comments: 2,
      attachments: 0,
    }
  ],
  review: [
    {
      id: 'task-6',
      title: 'Review Performance Marketing Funnel for Bagaha Clients',
      category: 'Marketing',
      priority: 'Low',
      date: 'Sep 01',
      members: ['MKT'],
      comments: 2,
      attachments: 1,
    }
  ],
  completed: [
    {
      id: 'task-7',
      title: 'Implement Dark Mode Tokens and Glassmorphism App Shell',
      category: 'UI/UX Design',
      priority: 'High',
      date: 'Aug 30',
      members: ['DES', 'DEV'],
      comments: 8,
      attachments: 5,
    },
    {
      id: 'task-8',
      title: 'DPIIT & MSME Trust Badge Verification in Footer',
      category: 'Compliance',
      priority: 'Medium',
      date: 'Aug 29',
      members: ['AK'],
      comments: 1,
      attachments: 2,
    }
  ],
};

const COLUMNS_CONFIG = [
  { key: 'todo', name: 'Backlog & To Do', badge: 'admin-badge-new' },
  { key: 'inProgress', name: 'In Progress', badge: 'admin-badge-contacted' },
  { key: 'review', name: 'Under Review', badge: 'admin-badge-qualified' },
  { key: 'completed', name: 'Completed', badge: 'admin-badge-closed' },
];

export default function TasksKanban() {
  const [columns, setColumns] = useState(INITIAL_TASKS);
  const [showModal, setShowModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('Engineering');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');
  const [newTaskCol, setNewTaskCol] = useState('todo');

  const moveTask = (taskId, fromCol, toCol) => {
    setColumns(prev => {
      const task = prev[fromCol].find(t => t.id === taskId);
      if (!task) return prev;
      return {
        ...prev,
        [fromCol]: prev[fromCol].filter(t => t.id !== taskId),
        [toCol]: [task, ...prev[toCol]],
      };
    });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle.trim(),
      category: newTaskCategory,
      priority: newTaskPriority,
      date: 'Today',
      members: ['AK'],
      comments: 0,
      attachments: 0,
    };

    setColumns(prev => ({
      ...prev,
      [newTaskCol]: [newTask, ...prev[newTaskCol]],
    }));

    setNewTaskTitle('');
    setShowModal(false);
  };

  const deleteTask = (taskId, colKey) => {
    setColumns(prev => ({
      ...prev,
      [colKey]: prev[colKey].filter(t => t.id !== taskId),
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
            <span className="admin-badge admin-badge-qualified">
              <KanbanSquare style={{ width: 12, height: 12 }} /> Project Management
            </span>
          </div>
          <h1 className="admin-page-title">Tasks & Kanban Board</h1>
          <p className="admin-page-desc">
            Track agency sprints, client deliverables, SEO optimization workflows, and development tasks
          </p>
        </div>
        <div className="admin-page-actions">
          <button
            onClick={() => setShowModal(true)}
            className="admin-btn admin-btn-primary"
          >
            <Plus style={{ width: 16, height: 16 }} />
            Create Task
          </button>
        </div>
      </div>

      {/* Kanban Columns Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-4)',
        alignItems: 'start'
      }}>
        {COLUMNS_CONFIG.map(col => {
          const tasks = columns[col.key] || [];
          return (
            <div
              key={col.key}
              className="admin-card"
              style={{
                background: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                padding: 'var(--space-4)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 'var(--space-2)',
                borderBottom: '1px solid var(--color-border-light)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-bold)', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {col.name}
                  </span>
                  <span className={`admin-badge ${col.badge}`}>
                    {tasks.length}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setNewTaskCol(col.key);
                    setShowModal(true);
                  }}
                  className="admin-btn admin-btn-ghost admin-btn-sm"
                  style={{ width: 24, height: 24, padding: 0 }}
                  title="Add task to this column"
                >
                  <Plus style={{ width: 14, height: 14 }} />
                </button>
              </div>

              {/* Tasks List in Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', minHeight: '200px' }}>
                {tasks.length === 0 ? (
                  <div style={{
                    padding: 'var(--space-8) var(--space-4)',
                    textAlign: 'center',
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-xs)',
                    border: '1px dashed var(--color-border)',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    No tasks in this stage
                  </div>
                ) : (
                  tasks.map(task => (
                    <div
                      key={task.id}
                      className="admin-card"
                      style={{
                        padding: 'var(--space-4)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-3)',
                        boxShadow: 'var(--shadow-xs)',
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-surface)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span className={`admin-badge admin-badge-priority-${task.priority.toLowerCase()}`}>
                          {task.priority}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Clock style={{ width: 10, height: 10 }} /> {task.date}
                          </span>
                          <button
                            onClick={() => deleteTask(task.id, col.key)}
                            style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: 2 }}
                            title="Delete task"
                          >
                            ✕
                          </button>
                        </div>
                      </div>

                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)', lineHeight: 'var(--leading-snug)' }}>
                        {task.title}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-2)', borderTop: '1px solid var(--color-border-light)', fontSize: '11px', color: 'var(--color-text-muted)' }}>
                        <span style={{ color: 'var(--color-primary)', fontWeight: 'var(--weight-medium)' }}>
                          {task.category}
                        </span>

                        {/* Move task arrows */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          {col.key !== 'todo' && (
                            <button
                              onClick={() => {
                                const order = ['todo', 'inProgress', 'review', 'completed'];
                                const prevIdx = order.indexOf(col.key) - 1;
                                if (prevIdx >= 0) moveTask(task.id, col.key, order[prevIdx]);
                              }}
                              className="admin-btn admin-btn-ghost admin-btn-sm"
                              style={{ width: 22, height: 22, padding: 0 }}
                              title="Move left"
                            >
                              <ArrowLeft style={{ width: 12, height: 12 }} />
                            </button>
                          )}
                          {col.key !== 'completed' && (
                            <button
                              onClick={() => {
                                const order = ['todo', 'inProgress', 'review', 'completed'];
                                const nextIdx = order.indexOf(col.key) + 1;
                                if (nextIdx < order.length) moveTask(task.id, col.key, order[nextIdx]);
                              }}
                              className="admin-btn admin-btn-ghost admin-btn-sm"
                              style={{ width: 22, height: 22, padding: 0 }}
                              title="Move right"
                            >
                              <ArrowRight style={{ width: 12, height: 12 }} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Task Modal */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '480px' }}>
            <form onSubmit={handleAddTask}>
              <div className="admin-modal-header">
                <div className="admin-modal-title">Create Agency Task</div>
                <button type="button" onClick={() => setShowModal(false)} className="admin-btn admin-btn-ghost admin-btn-sm">
                  ✕
                </button>
              </div>

              <div className="admin-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div className="admin-form-group" style={{ marginBottom: 0 }}>
                  <label className="admin-label">Task Title <span className="required">*</span></label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Audit Google Analytics 4 Tagging"
                    value={newTaskTitle}
                    onChange={e => setNewTaskTitle(e.target.value)}
                    className="admin-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-3)' }}>
                  <div className="admin-form-group" style={{ marginBottom: 0 }}>
                    <label className="admin-label">Category</label>
                    <select
                      value={newTaskCategory}
                      onChange={e => setNewTaskCategory(e.target.value)}
                      className="admin-input admin-select"
                    >
                      <option>Engineering</option>
                      <option>SEO & Indexing</option>
                      <option>Marketing</option>
                      <option>UI/UX Design</option>
                      <option>Client Success</option>
                      <option>Automation</option>
                    </select>
                  </div>

                  <div className="admin-form-group" style={{ marginBottom: 0 }}>
                    <label className="admin-label">Priority</label>
                    <select
                      value={newTaskPriority}
                      onChange={e => setNewTaskPriority(e.target.value)}
                      className="admin-input admin-select"
                    >
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                      <option>Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="admin-form-group" style={{ marginBottom: 0 }}>
                  <label className="admin-label">Starting Column</label>
                  <select
                    value={newTaskCol}
                    onChange={e => setNewTaskCol(e.target.value)}
                    className="admin-input admin-select"
                  >
                    <option value="todo">To Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="review">Under Review</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="admin-modal-footer">
                <button type="button" onClick={() => setShowModal(false)} className="admin-btn admin-btn-outline">
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  <Plus style={{ width: 14, height: 14 }} /> Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
