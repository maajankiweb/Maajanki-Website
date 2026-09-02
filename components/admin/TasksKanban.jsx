'use client';

import React, { useState, useEffect } from 'react';
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
  ArrowLeft,
  Trash2,
  ListTodo
} from 'lucide-react';

const EMPTY_TASKS = {
  todo: [],
  inProgress: [],
  review: [],
  completed: [],
};

const COLUMNS_CONFIG = [
  { key: 'todo', name: 'Backlog & To Do', badge: 'admin-badge-new' },
  { key: 'inProgress', name: 'In Progress', badge: 'admin-badge-contacted' },
  { key: 'review', name: 'Under Review', badge: 'admin-badge-qualified' },
  { key: 'completed', name: 'Completed', badge: 'admin-badge-closed' },
];

export default function TasksKanban() {
  const [columns, setColumns] = useState(EMPTY_TASKS);
  const [mounted, setMounted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('Engineering');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');
  const [newTaskCol, setNewTaskCol] = useState('todo');

  // Load persistent user tasks from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('maajanki_kanban_tasks');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          setColumns({
            todo: parsed.todo || [],
            inProgress: parsed.inProgress || [],
            review: parsed.review || [],
            completed: parsed.completed || []
          });
        }
      }
    } catch (err) {
      console.warn('Kanban localStorage load notice:', err.message);
    }
  }, []);

  // Save to localStorage on change
  const saveTasks = (newCols) => {
    setColumns(newCols);
    try {
      localStorage.setItem('maajanki_kanban_tasks', JSON.stringify(newCols));
    } catch (err) {
      console.warn('Kanban localStorage save notice:', err.message);
    }
  };

  const moveTask = (taskId, fromCol, toCol) => {
    const task = columns[fromCol].find(t => t.id === taskId);
    if (!task) return;

    const newCols = {
      ...columns,
      [fromCol]: columns[fromCol].filter(t => t.id !== taskId),
      [toCol]: [task, ...columns[toCol]],
    };
    saveTasks(newCols);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle.trim(),
      category: newTaskCategory,
      priority: newTaskPriority,
      date: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }),
      members: ['AK'],
      comments: 0,
      attachments: 0,
    };

    const newCols = {
      ...columns,
      [newTaskCol]: [newTask, ...columns[newTaskCol]],
    };

    saveTasks(newCols);
    setNewTaskTitle('');
    setShowModal(false);
  };

  const deleteTask = (taskId, colKey) => {
    const newCols = {
      ...columns,
      [colKey]: columns[colKey].filter(t => t.id !== taskId),
    };
    saveTasks(newCols);
  };

  const clearAllTasks = () => {
    if (window.confirm('Are you sure you want to clear all tasks from the Kanban board?')) {
      saveTasks(EMPTY_TASKS);
    }
  };

  const totalTasksCount = Object.values(columns).reduce((acc, col) => acc + (col?.length || 0), 0);

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
        <div className="admin-page-actions" style={{ display: 'flex', gap: '8px' }}>
          {totalTasksCount > 0 && (
            <button onClick={clearAllTasks} className="admin-btn admin-btn-outline" style={{ fontSize: '13px' }}>
              <Trash2 size={14} /> Clear Board
            </button>
          )}
          <button
            onClick={() => {
              setNewTaskCol('todo');
              setShowModal(true);
            }}
            className="admin-btn admin-btn-primary"
            style={{ fontSize: '13px' }}
          >
            <Plus size={14} />
            <span>Create Task</span>
          </button>
        </div>
      </div>

      {/* Kanban Columns Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
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
                background: 'var(--bg-elevated, #f9fafb)',
                border: '1px solid var(--border-color, #e5e7eb)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
                padding: 'var(--space-4)',
                borderRadius: 'var(--radius-lg, 12px)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 'var(--space-2)',
                borderBottom: '1px solid var(--border-color, #e5e7eb)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {col.name}
                  </span>
                  <span className={`admin-badge ${col.badge}`} style={{ fontSize: '11px' }}>
                    {tasks.length}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setNewTaskCol(col.key);
                    setShowModal(true);
                  }}
                  className="topbar-icon-btn"
                  style={{ width: 24, height: 24, padding: 0 }}
                  title={`Add task to ${col.name}`}
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Tasks List in Column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', minHeight: '180px' }}>
                {tasks.length === 0 ? (
                  <div style={{
                    padding: '36px 16px',
                    textAlign: 'center',
                    color: 'var(--color-text-muted)',
                    fontSize: '12px',
                    border: '1px dashed var(--border-color)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}>
                    <ListTodo size={20} style={{ opacity: 0.5 }} />
                    <div>No tasks in this stage</div>
                    <button
                      onClick={() => {
                        setNewTaskCol(col.key);
                        setShowModal(true);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-primary)',
                        fontSize: '11px',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      + Add Task
                    </button>
                  </div>
                ) : (
                  tasks.map(task => (
                    <div
                      key={task.id}
                      className="admin-card"
                      style={{
                        padding: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        boxShadow: 'var(--shadow-sm)',
                        border: '1px solid var(--border-color)',
                        background: 'var(--bg-card, #ffffff)',
                        borderRadius: '8px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span className={`admin-badge admin-badge-priority-${task.priority.toLowerCase()}`} style={{ fontSize: '10px' }}>
                          {task.priority}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Clock size={11} /> {task.date}
                          </span>
                          <button
                            onClick={() => deleteTask(task.id, col.key)}
                            style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', padding: 2 }}
                            title="Delete task"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      </div>

                      <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-text)', lineHeight: '1.4' }}>
                        {task.title}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid var(--border-color)', fontSize: '11px', color: 'var(--color-text-muted)' }}>
                        <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
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
                              className="topbar-icon-btn"
                              style={{ width: 22, height: 22, padding: 0 }}
                              title="Move left"
                            >
                              <ArrowLeft size={12} />
                            </button>
                          )}
                          {col.key !== 'completed' && (
                            <button
                              onClick={() => {
                                const order = ['todo', 'inProgress', 'review', 'completed'];
                                const nextIdx = order.indexOf(col.key) + 1;
                                if (nextIdx < order.length) moveTask(task.id, col.key, order[nextIdx]);
                              }}
                              className="topbar-icon-btn"
                              style={{ width: 22, height: 22, padding: 0 }}
                              title="Move right"
                            >
                              <ArrowRight size={12} />
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
            <div className="admin-modal-header">
              <div className="admin-modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Plus size={18} style={{ color: 'var(--color-primary)' }} />
                Create New Task
              </div>
              <button onClick={() => setShowModal(false)} className="topbar-icon-btn" style={{ width: 28, height: 28 }}>
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleAddTask}>
              <div className="admin-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label className="admin-help-text">Task Title / Action Item *</label>
                  <input
                    type="text"
                    required
                    autoFocus
                    placeholder="e.g. Audit Google Search Console coverage for location pages"
                    value={newTaskTitle}
                    onChange={e => setNewTaskTitle(e.target.value)}
                    className="admin-input"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label className="admin-help-text">Category</label>
                    <select
                      value={newTaskCategory}
                      onChange={e => setNewTaskCategory(e.target.value)}
                      className="admin-select"
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="SEO & Indexing">SEO & Indexing</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Marketing">Marketing</option>
                      <option value="Client Success">Client Success</option>
                      <option value="Compliance">Compliance</option>
                    </select>
                  </div>

                  <div>
                    <label className="admin-help-text">Priority</label>
                    <select
                      value={newTaskPriority}
                      onChange={e => setNewTaskPriority(e.target.value)}
                      className="admin-select"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="admin-help-text">Initial Column Stage</label>
                  <select
                    value={newTaskCol}
                    onChange={e => setNewTaskCol(e.target.value)}
                    className="admin-select"
                  >
                    <option value="todo">Backlog & To Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="review">Under Review</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="admin-modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button type="button" onClick={() => setShowModal(false)} className="admin-btn admin-btn-outline">
                  Cancel
                </button>
                <button type="submit" className="admin-btn admin-btn-primary">
                  <Plus size={14} /> Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
