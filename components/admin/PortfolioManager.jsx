'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  FolderKanban,
  Plus,
  Trash2,
  Edit,
  ExternalLink,
  RefreshCw,
  Image as ImageIcon,
  CheckCircle2,
  X,
  Layers,
  Sparkles,
  Layout,
  Globe
} from 'lucide-react';

export default function PortfolioManager() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    category: 'Web Development',
    link: '',
    fullImage: '',
    heroImage: '',
    description: '',
    imgTitle: '',
    featured: true,
    order: 0,
  });

  const categoriesList = [
    'Web Development',
    'Web Design',
    'SaaS / Application',
    'Education',
    'Technology / AI',
    'eCommerce',
    'Branding',
  ];

  // Fetch Projects from API
  const fetchProjects = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/portfolio');
      const data = await res.json();
      if (data.success) {
        setProjects(data.projects || []);
      } else {
        setError(data.error || 'Failed to load projects');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch portfolio projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Helper to read local image file as DataURL string
  const handleFileUpload = (e, field) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        [field]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  // Open Modal for Create or Edit
  const openModal = (project = null) => {
    if (project) {
      setEditingId(project._id);
      setFormData({
        title: project.title || '',
        category: project.category || 'Web Development',
        link: project.link || '',
        fullImage: project.fullImage || '',
        heroImage: project.heroImage || '',
        description: project.description || '',
        imgTitle: project.imgTitle || '',
        featured: project.featured !== undefined ? project.featured : true,
        order: project.order || 0,
      });
    } else {
      setEditingId(null);
      setFormData({
        title: '',
        category: 'Web Development',
        link: '',
        fullImage: '',
        heroImage: '',
        description: '',
        imgTitle: '',
        featured: true,
        order: projects.length + 1,
      });
    }
    setShowModal(true);
  };

  // Save Project (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.link || !formData.fullImage || !formData.heroImage) {
      alert('Please fill in Title, Live Website Link, Full Page Image, and Hero Image.');
      return;
    }

    setSaving(true);
    setError('');
    setSuccessMsg('');

    try {
      const url = editingId ? `/api/admin/portfolio/${editingId}` : '/api/admin/portfolio';
      const method = editingId ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(editingId ? 'Project updated successfully!' : 'New project added successfully!');
        setShowModal(false);
        fetchProjects();
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        alert(data.error || 'Failed to save project');
      }
    } catch (err) {
      console.error(err);
      alert('Network error while saving project.');
    } finally {
      setSaving(false);
    }
  };

  // Delete Project
  const handleDelete = async (id, title) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/admin/portfolio/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg(`Project "${title}" deleted.`);
        fetchProjects();
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        alert(data.error || 'Failed to delete project');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting project');
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <FolderKanban className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                Portfolio Management
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30">
                  Dual Image Mode
                </span>
              </h1>
              <p className="text-sm text-slate-400">
                Manage live websites. Upload <strong className="text-slate-200">Full Page Screenshots</strong> for Homepage &amp; <strong className="text-slate-200">Hero Section Screenshots</strong> for /portfolio page.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchProjects}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700"
            title="Refresh List"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            Add New Project
          </button>
        </div>
      </div>

      {/* Success Alert */}
      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Projects Table List */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-950/60 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">Project</th>
                <th className="px-6 py-4">Homepage (Full Page Image)</th>
                <th className="px-6 py-4">/portfolio Page (Hero Image)</th>
                <th className="px-6 py-4">Live Link</th>
                <th className="px-6 py-4 text-center">Featured</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {loading ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-orange-400" />
                    Loading portfolio projects...
                  </td>
                </tr>
              ) : projects.length === 0 ? (
                <tr>
                  <td colSpan="6" className="px-6 py-12 text-center text-slate-500">
                    No projects found. Click "Add New Project" to add your first client website!
                  </td>
                </tr>
              ) : (
                projects.map((proj) => (
                  <tr key={proj._id} className="hover:bg-slate-800/40 transition-colors">
                    {/* Project Title & Category */}
                    <td className="px-6 py-4">
                      <div className="font-semibold text-white">{proj.title}</div>
                      <span className="inline-block mt-1 text-[11px] px-2.5 py-0.5 rounded-full bg-slate-800 text-orange-400 font-medium border border-slate-700">
                        {proj.category}
                      </span>
                    </td>

                    {/* Homepage Image */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Image
                          unoptimized
                          src={proj.fullImage}
                          alt={proj.title}
                          width={64}
                          height={48}
                          className="w-16 h-12 object-cover rounded-lg border border-slate-700 bg-slate-950"
                        />
                        <div>
                          <div className="text-xs font-medium text-slate-300">Full Screenshot</div>
                          <span className="text-[10px] text-slate-500">Homepage Grid</span>
                        </div>
                      </div>
                    </td>

                    {/* /portfolio Hero Image */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Image
                          unoptimized
                          src={proj.heroImage}
                          alt={proj.title}
                          width={64}
                          height={48}
                          className="w-16 h-12 object-cover rounded-lg border border-slate-700 bg-slate-950"
                        />
                        <div>
                          <div className="text-xs font-medium text-slate-300">Hero Section</div>
                          <span className="text-[10px] text-slate-500">/portfolio Grid</span>
                        </div>
                      </div>
                    </td>

                    {/* Live URL */}
                    <td className="px-6 py-4">
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-orange-400 hover:text-orange-300 transition-colors truncate max-w-[180px]"
                      >
                        <Globe className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{proj.link}</span>
                      </a>
                    </td>

                    {/* Featured Badge */}
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 text-xs rounded-full font-medium ${
                          proj.featured
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        {proj.featured ? 'Yes' : 'No'}
                      </span>
                    </td>

                    {/* Action Buttons */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openModal(proj)}
                          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                          title="Edit Project"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(proj._id, proj.title)}
                          className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE / EDIT PROJECT MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6 my-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-400" />
                {editingId ? 'Edit Project' : 'Add New Portfolio Website'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Apex Tutorial Bettiah"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                  >
                    {categoriesList.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Live Link */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Live Website URL (https://...) *
                </label>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="https://apex-tutorial-gray.vercel.app/"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* DUAL IMAGE UPLOAD SECTION */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-4">
                <div className="text-xs font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
                  <Layout className="w-4 h-4" />
                  Dual Image Settings (Homepage vs /portfolio)
                </div>

                {/* Full Page Image (Homepage) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    1. Homepage Full Page Image (Full Screenshot) *
                  </label>
                  <span className="block text-[11px] text-slate-400 mb-2">
                    Enter image path (e.g. <code className="text-orange-400">/images/project/Apex Tutorial Full Page.jpg</code>) or select an image file to upload.
                  </span>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      name="fullImage"
                      value={formData.fullImage}
                      onChange={handleChange}
                      placeholder="/images/project/Apex Tutorial Full Page.jpg"
                      required
                      className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                    />
                    <label className="cursor-pointer px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors">
                      Browse...
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'fullImage')}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {formData.fullImage && (
                    <Image
                      unoptimized
                      src={formData.fullImage}
                      alt="Full Page Preview"
                      width={120}
                      height={64}
                      className="mt-2 h-16 rounded-lg border border-slate-800 object-cover"
                    />
                  )}
                </div>

                {/* Hero Section Image (/portfolio) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    2. /portfolio Page Hero Image (Half Screenshot) *
                  </label>
                  <span className="block text-[11px] text-slate-400 mb-2">
                    Enter image path (e.g. <code className="text-orange-400">/images/project/apex-tutorial.jpg</code>) or select an image file to upload.
                  </span>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      name="heroImage"
                      value={formData.heroImage}
                      onChange={handleChange}
                      placeholder="/images/project/apex-tutorial.jpg"
                      required
                      className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                    />
                    <label className="cursor-pointer px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors">
                      Browse...
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'heroImage')}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {formData.heroImage && (
                    <Image
                      unoptimized
                      src={formData.heroImage}
                      alt="Hero Image Preview"
                      width={120}
                      height={64}
                      className="mt-2 h-16 rounded-lg border border-slate-800 object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Short description of the website features & design..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-orange-500 resize-none"
                ></textarea>
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-slate-800 bg-slate-950 text-orange-500 focus:ring-orange-500"
                />
                <label htmlFor="featured" className="text-xs font-semibold text-slate-200 cursor-pointer">
                  Feature on Website Grids
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-semibold shadow-lg shadow-orange-500/20 transition-all disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingId ? 'Update Project' : 'Add Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
