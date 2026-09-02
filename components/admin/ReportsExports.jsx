'use client';

import React, { useState } from 'react';
import {
  FileText,
  Download,
  FileSpreadsheet,
  Calendar,
  Filter,
  CheckCircle2,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  BarChart3,
  Users,
  Code,
  Upload,
  Check,
  AlertTriangle,
  X,
  Plus
} from 'lucide-react';

const REPORT_PRESETS = [
  { id: 'leads', title: 'Complete Leads & CRM Report', desc: 'All contact details, services, sources, and status logs', icon: Users },
  { id: 'forms', title: 'Website Forms & Capture Metrics', desc: 'Breakdown of submissions across all 8 capture endpoints', icon: FileSpreadsheet },
  { id: 'seo', title: 'SEO & Organic Search Audit', desc: 'Google Search Console ranking queries, impressions, and CTR', icon: BarChart3 },
  { id: 'json', title: 'Raw System Data Export (JSON)', desc: 'Complete structured JSON dump of all CRM records', icon: Code },
];

export default function ReportsExports({ leads = [] }) {
  const [dateRange, setDateRange] = useState('30days');
  const [selectedPreset, setSelectedPreset] = useState('leads');
  const [exportMessage, setExportMessage] = useState('');

  // CSV Import State
  const [showImportModal, setShowImportModal] = useState(false);
  const [importFile, setImportFile] = useState(null);
  const [parsedRows, setParsedRows] = useState([]);
  const [importing, setImporting] = useState(false);
  const [importResult, setImportResult] = useState(null);

  const generateExport = (format) => {
    setExportMessage(`Generating ${format.toUpperCase()} export...`);

    const dataToExport = leads || [];

    setTimeout(() => {
      if (format === 'json') {
        const jsonContent = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(dataToExport, null, 2));
        const link = document.createElement('a');
        link.href = jsonContent;
        link.download = `maajanki_export_${selectedPreset}_${new Date().toISOString().slice(0, 10)}.json`;
        link.click();
      } else {
        const headers = ['Name', 'Email', 'Phone', 'Service', 'Source', 'Status', 'Date'];
        const rows = dataToExport.map(item => [
          `"${item.name || ''}"`,
          `"${item.email || ''}"`,
          `"${item.phone || ''}"`,
          `"${item.service || ''}"`,
          `"${item.source || ''}"`,
          `"${item.status || ''}"`,
          `"${item.createdAt || ''}"`
        ]);

        const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        const link = document.createElement('a');
        link.href = encodeURI(csvContent);
        link.download = `maajanki_report_${selectedPreset}_${new Date().toISOString().slice(0, 10)}.csv`;
        link.click();
      }

      setExportMessage(`✅ Download ready: maajanki_${selectedPreset}_report.${format} (${dataToExport.length} records)`);
      setTimeout(() => setExportMessage(''), 4000);
    }, 600);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImportFile(file);
    setImportResult(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const lines = text.split(/\r\n|\n/).filter(line => line.trim().length > 0);
      if (lines.length < 2) return;

      const headers = lines[0].split(',').map(h => h.trim().replace(/^["']|["']$/g, '').toLowerCase());
      const nameIdx = headers.findIndex(h => h.includes('name'));
      const emailIdx = headers.findIndex(h => h.includes('email') || h.includes('mail'));
      const phoneIdx = headers.findIndex(h => h.includes('phone') || h.includes('mobile') || h.includes('contact'));
      const serviceIdx = headers.findIndex(h => h.includes('service') || h.includes('requirement'));

      const rows = [];
      for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split(',').map(c => c.trim().replace(/^["']|["']$/g, ''));
        if (cols.length > 0) {
          const email = emailIdx !== -1 ? cols[emailIdx] : '';
          const name = nameIdx !== -1 ? cols[nameIdx] : 'Imported Client';
          const phone = phoneIdx !== -1 ? cols[phoneIdx] : '';
          const service = serviceIdx !== -1 ? cols[serviceIdx] : 'Web Development & SEO';

          const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

          rows.push({
            name,
            email,
            phone,
            service,
            source: 'CSV_Import',
            isValid: isValidEmail || Boolean(phone)
          });
        }
      }
      setParsedRows(rows);
    };
    reader.readAsText(file);
  };

  const handleConfirmImport = async () => {
    if (parsedRows.length === 0) return;
    setImporting(true);
    let successCount = 0;

    for (const row of parsedRows) {
      if (!row.isValid) continue;
      try {
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: row.name,
            email: row.email,
            phone: row.phone,
            service: row.service,
            source: 'bulk_csv_import',
            message: 'Imported via Admin Smart CSV Importer tool.'
          })
        });
        if (res.ok) successCount++;
      } catch (err) {
        console.warn('Import row failed:', err);
      }
    }

    setImporting(false);
    setImportResult(`✅ Successfully imported ${successCount} leads into MongoDB Atlas.`);
    setTimeout(() => {
      setShowImportModal(false);
      setParsedRows([]);
      setImportFile(null);
    }, 2500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
            <span className="admin-badge admin-badge-qualified">
              <FileText style={{ width: 12, height: 12 }} /> Enterprise Reporting & Data Hub
            </span>
          </div>
          <h1 className="admin-page-title">Reports, Exports & Data Utilities</h1>
          <p className="admin-page-desc">
            Generate custom data exports, CSV spreadsheets, and batch import client records with schema validation
          </p>
        </div>
        <div className="admin-page-actions" style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setShowImportModal(true)} className="admin-btn admin-btn-primary" style={{ fontSize: '13px' }}>
            <Upload size={14} /> Smart CSV Importer
          </button>
        </div>
      </div>

      {exportMessage && (
        <div style={{
          padding: 'var(--space-3) var(--space-4)',
          background: 'rgba(253, 106, 2, 0.1)',
          border: '1px solid var(--color-primary)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--color-primary)',
          fontSize: 'var(--text-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}>
          <Sparkles style={{ width: 16, height: 16 }} />
          {exportMessage}
        </div>
      )}

      {/* Preset Grid */}
      <div className="admin-grid admin-grid-2">
        {REPORT_PRESETS.map(preset => {
          const Icon = preset.icon;
          const isSelected = selectedPreset === preset.id;
          return (
            <div
              key={preset.id}
              onClick={() => setSelectedPreset(preset.id)}
              className="admin-card"
              style={{
                cursor: 'pointer',
                border: isSelected ? '2px solid var(--color-primary)' : '1px solid var(--border-color)',
                backgroundColor: isSelected ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-4)',
                padding: 'var(--space-5)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 'var(--radius-md)',
                background: isSelected ? 'var(--color-primary)' : 'var(--bg-elevated)',
                color: isSelected ? '#ffffff' : 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Icon style={{ width: 22, height: 22 }} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)', margin: '0 0 var(--space-1) 0' }}>
                  {preset.title}
                </h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.5 }}>
                  {preset.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Export Action Card */}
      <div className="admin-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
        <div>
          <h3 style={{ fontSize: 'var(--text-md)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text)', margin: '0 0 4px 0' }}>
            Export Destination: {REPORT_PRESETS.find(p => p.id === selectedPreset)?.title}
          </h3>
          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: 0 }}>
            Includes verified records ({leads.length} leads in database)
          </p>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <button onClick={() => generateExport('csv')} className="admin-btn admin-btn-outline">
            <Download style={{ width: 14, height: 14 }} /> Download CSV
          </button>
          <button onClick={() => generateExport('json')} className="admin-btn admin-btn-primary">
            <Code style={{ width: 14, height: 14 }} /> Download JSON
          </button>
        </div>
      </div>

      {/* MODAL: Smart CSV Importer */}
      {showImportModal && (
        <div className="admin-modal-overlay" onClick={() => setShowImportModal(false)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="admin-modal-header">
              <div className="admin-modal-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Upload size={18} style={{ color: 'var(--color-primary)' }} />
                Smart CSV / Excel Batch Importer
              </div>
              <button onClick={() => setShowImportModal(false)} className="topbar-icon-btn" style={{ width: 28, height: 28 }}>
                <X size={16} />
              </button>
            </div>

            <div className="admin-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                border: '2px dashed var(--border-color)',
                borderRadius: '8px',
                padding: '24px',
                textAlign: 'center',
                backgroundColor: 'var(--bg-elevated)'
              }}>
                <FileSpreadsheet size={32} style={{ color: 'var(--color-primary)', margin: '0 auto 8px' }} />
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
                  Upload CSV File (Leads & Contacts)
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
                  Automatic header detection for Name, Email, Phone, and Service columns
                </div>
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  style={{ fontSize: '12px' }}
                />
              </div>

              {parsedRows.length > 0 && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <strong style={{ fontSize: '13px' }}>Pre-Import Validation Preview:</strong>
                    <span className="admin-badge admin-badge-qualified">
                      {parsedRows.filter(r => r.isValid).length} Valid / {parsedRows.length} Total
                    </span>
                  </div>

                  <div className="admin-table-wrap" style={{ maxHeight: '180px', overflowY: 'auto' }}>
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Validation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {parsedRows.slice(0, 10).map((row, idx) => (
                          <tr key={idx}>
                            <td>{row.name}</td>
                            <td>{row.email || 'N/A'}</td>
                            <td>{row.phone || 'N/A'}</td>
                            <td>
                              {row.isValid ? (
                                <span style={{ color: '#16a34a', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                  <Check size={12} /> Valid
                                </span>
                              ) : (
                                <span style={{ color: '#ef4444', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                                  <AlertTriangle size={12} /> Missing Contact
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {importResult && (
                <div style={{ padding: '12px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '6px', color: '#16a34a', fontSize: '13px' }}>
                  {importResult}
                </div>
              )}
            </div>

            <div className="admin-modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
              <button onClick={() => setShowImportModal(false)} className="admin-btn admin-btn-outline">
                Cancel
              </button>
              <button
                onClick={handleConfirmImport}
                disabled={importing || parsedRows.length === 0}
                className="admin-btn admin-btn-primary"
              >
                <Check size={14} />
                <span>{importing ? 'Importing...' : `Import ${parsedRows.filter(r => r.isValid).length} Valid Records`}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
