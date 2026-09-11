'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import {
  Users,
  UserPlus,
  Trash2,
  Edit,
  ExternalLink,
  RefreshCw,
  CheckCircle2,
  X,
  Sparkles,
  Search,
  SlidersHorizontal,
  Crown,
  Briefcase,
  Linkedin,
  ShieldCheck,
  Check,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Upload
} from 'lucide-react';

export default function TeamManager() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Filter & Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL'); // 'ALL' | 'leadership' | 'squad'
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL' | 'active' | 'inactive'

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    category: 'squad',
    photo: '',
    linkedin: '',
    showSocial: true,
    bio: '',
    bio2: '',
    bio3: '',
    coreExpertise: '',
    tags: '',
    order: 0,
    isActive: true,
  });

  // Page Media & Banners State
  const [showMediaModal, setShowMediaModal] = useState(false);
  const [savingMedia, setSavingMedia] = useState(false);
  const [mediaSettings, setMediaSettings] = useState({
    heroGroupImage: '/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp',
    middleBannerImage: '/images/pages/main-services-pages/About-Maajanki-Web-Tech.webp',
    heroBadgeText: 'Our Collective',
  });

  // Fetch Team and Media Settings from API
  const fetchMembers = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/team');
      const data = await res.json();
      if (data.success) {
        setMembers(data.members || []);
      } else {
        setError(data.error || 'Failed to load team members');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch team members');
    } finally {
      setLoading(false);
    }
  };

  const fetchMediaSettings = async () => {
    try {
      const res = await fetch('/api/admin/team/settings');
      const data = await res.json();
      if (data.success && data.settings) {
        setMediaSettings(data.settings);
      }
    } catch (err) {
      console.error('Error fetching media settings:', err);
    }
  };

  useEffect(() => {
    fetchMembers();
    fetchMediaSettings();
  }, []);

  const handleSaveMediaSettings = async (e) => {
    e.preventDefault();
    setSavingMedia(true);
    try {
      const res = await fetch('/api/admin/team/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mediaSettings),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg('Page banners and media settings updated successfully!');
        setShowMediaModal(false);
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        alert(data.error || 'Failed to update media settings');
      }
    } catch (err) {
      console.error(err);
      alert('Error updating media settings');
    } finally {
      setSavingMedia(false);
    }
  };

  const handleMediaUpload = (field, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setMediaSettings((prev) => ({
        ...prev,
        [field]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Helper to read local image file as DataURL string
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        photo: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  // Open Modal for Create or Edit
  const openModal = (member = null) => {
    if (member) {
      setEditingId(member._id);
      setFormData({
        name: member.name || '',
        role: member.role || '',
        category: member.category || 'squad',
        photo: member.photo || '',
        linkedin: member.linkedin || '',
        showSocial: member.showSocial !== undefined ? member.showSocial : true,
        bio: member.bio || '',
        bio2: member.bio2 || '',
        bio3: member.bio3 || '',
        coreExpertise: Array.isArray(member.coreExpertise) ? member.coreExpertise.join(', ') : member.coreExpertise || '',
        tags: Array.isArray(member.tags) ? member.tags.join(', ') : member.tags || '',
        order: member.order || 0,
        isActive: member.isActive !== undefined ? member.isActive : true,
      });
    } else {
      setEditingId(null);
      setFormData({
        name: '',
        role: '',
        category: 'squad',
        photo: '',
        linkedin: '',
        showSocial: true,
        bio: '',
        bio2: '',
        bio3: '',
        coreExpertise: '',
        tags: '',
        order: members.length + 1,
        isActive: true,
      });
    }
    setShowModal(true);
  };

  // Save Team Member (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.photo || !formData.bio) {
      alert('Please fill in Name, Role, Photo URL/Image, and primary Bio.');
      return;
    }

    setSaving(true);
    setError('');
    setSuccessMsg('');

    try {
      const url = editingId ? `/api/admin/team/${editingId}` : '/api/admin/team';
      const method = editingId ? 'PATCH' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(editingId ? 'Team member updated successfully!' : 'New team member added successfully!');
        setShowModal(false);
        fetchMembers();
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        alert(data.error || 'Failed to save team member');
      }
    } catch (err) {
      console.error(err);
      alert('Network error while saving team member.');
    } finally {
      setSaving(false);
    }
  };

  // Toggle Active Status Quick Action
  const toggleActive = async (member) => {
    try {
      const res = await fetch(`/api/admin/team/${member._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive: !member.isActive }),
      });
      const data = await res.json();
      if (data.success) {
        setMembers((prev) =>
          prev.map((m) => (m._id === member._id ? { ...m, isActive: !member.isActive } : m))
        );
      } else {
        alert(data.error || 'Failed to update status');
      }
    } catch (err) {
      console.error(err);
      alert('Network error updating status');
    }
  };

  // Delete Team Member
  const handleDelete = async (id, name) => {
    if (!confirm(`Are you sure you want to delete team member "${name}"?`)) return;

    try {
      const res = await fetch(`/api/admin/team/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg(`Team member "${name}" deleted.`);
        fetchMembers();
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        alert(data.error || 'Failed to delete team member');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting team member');
    }
  };

  // Filtered members
  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (m.bio && m.bio.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = categoryFilter === 'ALL' || m.category === categoryFilter;
      const matchesStatus =
        statusFilter === 'ALL' ||
        (statusFilter === 'active' && m.isActive) ||
        (statusFilter === 'inactive' && !m.isActive);

      return matchesSearch && matchesCat && matchesStatus;
    });
  }, [members, searchQuery, categoryFilter, statusFilter]);

  // Statistics
  const totalCount = members.length;
  const leadersCount = members.filter((m) => m.category === 'leadership').length;
  const squadCount = members.filter((m) => m.category === 'squad').length;
  const activeCount = members.filter((m) => m.isActive).length;

  return (
    <div className="space-y-6">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                Team Management
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-semibold border border-orange-500/30">
                  Live Sync
                </span>
              </h1>
              <p className="text-sm text-slate-400">
                Manage agency leadership and specialist squad profiles displayed on the <span className="text-orange-400 font-medium">/our-team</span> page.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchMembers}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700 cursor-pointer"
            title="Refresh List"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={() => setShowMediaModal(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
            title="Edit Hero & Middle Banner Images"
          >
            <ImageIcon className="w-4 h-4 text-orange-400" />
            Page Banners & Media
          </button>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            Add Team Member
          </button>
        </div>
      </div>

      {/* Metrics Summary Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-slate-800 text-slate-300">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{totalCount}</div>
            <div className="text-xs text-slate-400">Total Members</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
            <Crown className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-400">{leadersCount}</div>
            <div className="text-xs text-slate-400">Leadership</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">{squadCount}</div>
            <div className="text-xs text-slate-400">Specialist Squad</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
          <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">{activeCount}</div>
            <div className="text-xs text-slate-400">Active on Website</div>
          </div>
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

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name, role or bio..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
          <div className="flex items-center gap-1 p-1 bg-slate-800/80 border border-slate-700 rounded-lg text-xs">
            <button
              onClick={() => setCategoryFilter('ALL')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                categoryFilter === 'ALL' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Roles
            </button>
            <button
              onClick={() => setCategoryFilter('leadership')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                categoryFilter === 'leadership' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Leadership
            </button>
            <button
              onClick={() => setCategoryFilter('squad')}
              className={`px-3 py-1.5 rounded-md font-medium transition-colors ${
                categoryFilter === 'squad' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Squad
            </button>
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-orange-500"
          >
            <option value="ALL">All Status</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>
      </div>

      {/* Team Members List */}
      {loading ? (
        <div className="p-12 text-center text-slate-400 flex flex-col items-center justify-center gap-3">
          <RefreshCw className="w-8 h-8 animate-spin text-orange-500" />
          <p>Loading team members from MongoDB Atlas...</p>
        </div>
      ) : filteredMembers.length === 0 ? (
        <div className="p-12 text-center text-slate-400 rounded-2xl bg-slate-900/40 border border-slate-800">
          <Users className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-base font-semibold text-slate-300">No team members match the filters.</p>
          <p className="text-sm text-slate-500 mt-1">Try resetting filters or click &quot;Add Team Member&quot; to create a new profile.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredMembers.map((member) => (
            <div
              key={member._id}
              className={`group relative rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                member.isActive
                  ? 'bg-slate-900/60 border-slate-800 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/5'
                  : 'bg-slate-950/40 border-slate-800/60 opacity-60'
              }`}
            >
              <div>
                {/* Header: Photo, Name, Role, Category Badge */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/40 bg-slate-800 flex-shrink-0 shadow-md">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        unoptimized={member.photo.startsWith('data:')}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500 text-xl font-bold">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-white truncate group-hover:text-orange-400 transition-colors">
                        {member.name}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                        #{member.order}
                      </span>
                    </div>

                    <p className="text-xs text-orange-400/90 font-medium tracking-wide uppercase truncate mt-0.5">
                      {member.role}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                          member.category === 'leadership'
                            ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}
                      >
                        {member.category}
                      </span>

                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-orange-400 text-xs flex items-center gap-1 transition-colors"
                          title="LinkedIn Profile"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bio Snippet */}
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Core Expertise Snippet */}
                {member.coreExpertise && member.coreExpertise.length > 0 && (
                  <div className="mb-3">
                    <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-orange-400" />
                      Core Expertise ({member.coreExpertise.length})
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.coreExpertise.slice(0, 3).map((exp, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                        >
                          {exp}
                        </span>
                      ))}
                      {member.coreExpertise.length > 3 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800/50 text-slate-400">
                          +{member.coreExpertise.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => toggleActive(member)}
                  className={`flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    member.isActive
                      ? 'bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                  title={member.isActive ? 'Click to hide from website' : 'Click to show on website'}
                >
                  {member.isActive ? (
                    <>
                      <Eye className="w-3.5 h-3.5" /> Active
                    </>
                  ) : (
                    <>
                      <EyeOff className="w-3.5 h-3.5" /> Inactive
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => openModal(member)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-orange-500 hover:text-white text-slate-300 transition-colors cursor-pointer"
                    title="Edit Member"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(member._id, member.name)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-500 hover:text-white text-slate-300 transition-colors cursor-pointer"
                    title="Delete Member"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ─── ADD / EDIT MEMBER MODAL ─── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  {editingId ? <Edit className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    {editingId ? 'Edit Team Member' : 'Add New Team Member'}
                  </h2>
                  <p className="text-xs text-slate-400">
                    Fill in profile details, role, core expertise checklist, and bio paragraphs.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ashish Kumar"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Role / Title <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g. Founder & CEO / Lead Full-Stack Engineer"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Category <span className="text-orange-400">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    <option value="leadership">Leadership (At The Helm)</option>
                    <option value="squad">Squad (The Collective)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Display Order (Priority)
                  </label>
                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Website Visibility
                  </label>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      id="isActive"
                      name="isActive"
                      checked={formData.isActive}
                      onChange={handleChange}
                      className="w-4 h-4 rounded text-orange-500 bg-slate-800 border-slate-700 focus:ring-orange-500"
                    />
                    <label htmlFor="isActive" className="text-sm text-slate-300 cursor-pointer">
                      Active (Visible on Our Team)
                    </label>
                  </div>
                </div>
              </div>

              {/* Photo & LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Photo URL or Local Upload <span className="text-orange-400">*</span>
                  </label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="photo"
                      required
                      value={formData.photo}
                      onChange={handleChange}
                      placeholder="/images/Ashish-Kumar.webp or URL"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                    />
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">Or upload image:</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="text-xs text-slate-400 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-orange-400 hover:file:bg-slate-700 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder="https://www.linkedin.com/in/..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Primary Bio */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Primary Bio (Paragraph 1) <span className="text-orange-400">*</span>
                </label>
                <textarea
                  name="bio"
                  required
                  rows={3}
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Primary professional introduction, qualifications, and achievements..."
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Secondary Bio 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Bio Paragraph 2 (Optional)
                  </label>
                  <textarea
                    name="bio2"
                    rows={2}
                    value={formData.bio2}
                    onChange={handleChange}
                    placeholder="Specific engineering / search / design accomplishments..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Bio Paragraph 3 (Optional)
                  </label>
                  <textarea
                    name="bio3"
                    rows={2}
                    value={formData.bio3}
                    onChange={handleChange}
                    placeholder="Vision, agency mission, or client collaboration focus..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Core Expertise Box (Adzynix 2-column checklist) */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Core Expertise Checklist (Comma-separated)
                </label>
                <input
                  type="text"
                  name="coreExpertise"
                  value={formData.coreExpertise}
                  onChange={handleChange}
                  placeholder="e.g. Next.js 15, Enterprise SEO, Schema Markup, CRO, Core Web Vitals"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  These items appear in the high-converting 2-column Core Expertise checklist inside the profile modal.
                </p>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Skill Tags (Comma-separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="e.g. React, Next.js, SEO, UI/UX, Google Ads"
                  className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Saving...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" /> {editingId ? 'Update Profile' : 'Create Member'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Page Banners & Media Settings Modal */}
      {showMediaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 my-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Page Banners & Media Settings</h2>
                  <p className="text-xs text-slate-400">Manage Hero Group photo, Award banner and badge text for /our-team</p>
                </div>
              </div>
              <button
                onClick={() => setShowMediaModal(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveMediaSettings} className="space-y-6 pt-5">
              {/* 1. Hero Group Image */}
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    1. Hero Section Group Photo
                  </label>
                  <span className="text-[11px] text-slate-400 font-mono">Recommended: 1200x675px</span>
                </div>
                <p className="text-xs text-slate-400">
                  This image is displayed directly inside the Hero glowing scan-line frame at the top of the Our Team page.
                </p>

                {mediaSettings.heroGroupImage && (
                  <div className="relative w-full h-44 rounded-lg overflow-hidden border border-slate-700 bg-slate-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mediaSettings.heroGroupImage}
                      alt="Hero Banner Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={mediaSettings.heroGroupImage || ''}
                      onChange={(e) => setMediaSettings((prev) => ({ ...prev, heroGroupImage: e.target.value }))}
                      placeholder="Enter Image URL or Path..."
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                    <label className="flex items-center gap-1.5 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap">
                      <Upload className="w-3.5 h-3.5" />
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleMediaUpload('heroGroupImage', e.target.files?.[0])}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* Hero Badge Text */}
                <div className="pt-2">
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Frame Badge Tag Text
                  </label>
                  <input
                    type="text"
                    value={mediaSettings.heroBadgeText || ''}
                    onChange={(e) => setMediaSettings((prev) => ({ ...prev, heroBadgeText: e.target.value }))}
                    placeholder="e.g. Our Collective"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              {/* 2. Middle Squad / Award Banner */}
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    2. Post-Squad Award / Event Banner
                  </label>
                  <span className="text-[11px] text-slate-400 font-mono">Recommended: 1200x520px</span>
                </div>
                <p className="text-xs text-slate-400">
                  This wide banner appears directly after &quot;The Full Squad&quot; section to highlight team awards, company celebrations, and achievements.
                </p>

                {mediaSettings.middleBannerImage && (
                  <div className="relative w-full h-44 rounded-lg overflow-hidden border border-slate-700 bg-slate-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={mediaSettings.middleBannerImage}
                      alt="Award Banner Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={mediaSettings.middleBannerImage || ''}
                      onChange={(e) => setMediaSettings((prev) => ({ ...prev, middleBannerImage: e.target.value }))}
                      placeholder="Enter Image URL or Path..."
                      className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                    <label className="flex items-center gap-1.5 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap">
                      <Upload className="w-3.5 h-3.5" />
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleMediaUpload('middleBannerImage', e.target.files?.[0])}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowMediaModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingMedia}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 transition-all cursor-pointer disabled:opacity-50"
                >
                  {savingMedia ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" /> Saving...
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" /> Save Banner Images
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
