'use client';

import React, { useState } from 'react';
import { Plus, MoreHorizontal, User, Clock, Paperclip, MessageSquare } from 'lucide-react';

const initialColumns = {
  todo: [],
  inProgress: [],
  review: [],
  completed: [],
};

export default function TasksKanban() {
  const [columns, setColumns] = useState(initialColumns);

  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-100">Tasks & Project Kanban Board</h3>
          <p className="text-xs text-slate-400">Track client deliverables, follow-ups, and developer tasks</p>
        </div>

        <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-orange-600 hover:bg-orange-500 text-white rounded-xl shadow-sm transition-colors">
          <Plus className="w-4 h-4" /> Add Task
        </button>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {Object.entries({
          todo: { name: 'To Do', color: 'border-slate-700 bg-slate-950/40' },
          inProgress: { name: 'In Progress', color: 'border-blue-500/40 bg-blue-950/20' },
          review: { name: 'Under Review', color: 'border-amber-500/40 bg-amber-950/20' },
          completed: { name: 'Completed', color: 'border-emerald-500/40 bg-emerald-950/20' },
        }).map(([colKey, colMeta]) => (
          <div key={colKey} className={`p-4 rounded-xl border ${colMeta.color} space-y-3`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs text-slate-200 uppercase tracking-wider">
                {colMeta.name} ({columns[colKey].length})
              </span>
              <button className="text-slate-500 hover:text-slate-300">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {columns[colKey].length === 0 ? (
                <div className="p-4 text-center text-xs text-slate-500 rounded-xl bg-slate-900/40 border border-dashed border-slate-800">
                  No tasks
                </div>
              ) : (
                columns[colKey].map((task) => (
                  <div
                    key={task.id}
                    className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-sm space-y-2 cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-0.5 text-[9px] font-bold rounded ${
                          task.priority === 'High'
                            ? 'bg-rose-500/20 text-rose-300'
                            : task.priority === 'Medium'
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {task.priority}
                      </span>
                      <span className="text-[10px] text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {task.date}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-200">{task.title}</p>

                    <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-0.5"><Paperclip className="w-3 h-3" /> 2</span>
                        <span className="flex items-center gap-0.5"><MessageSquare className="w-3 h-3" /> 4</span>
                      </div>

                      <div className="flex -space-x-1">
                        {task.members.map((m, idx) => (
                          <div
                            key={idx}
                            className="w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-[9px] border border-slate-900"
                          >
                            {m}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
