'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCode, FaCopy, FaCheck, FaCompress, FaExpand } from 'react-icons/fa';

export default function JSONFormatterPage() {
  const [input, setInput] = useState('{\n  "agency": "MaaJanki Web Tech",\n  "city": "Bagaha",\n  "state": "Bihar",\n  "services": ["Next.js", "SEO", "Google Ads"]\n}');
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed));
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container py-5">
        <div className="mb-4">
          <Link href="/tools" className="text-decoration-none fw-semibold d-inline-flex align-items-center" style={{ color: '#FD6A02' }}>
            <FaArrowLeft className="me-2" /> Back to Tools
          </Link>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-5">
          <div className="d-inline-flex p-3 rounded-circle mb-3" style={{ background: 'rgba(253, 106, 2, 0.15)', color: '#FD6A02' }}>
            <FaCode className="text-3xl" />
          </div>
          <h1 className="h2 fw-bold text-white mb-2">JSON Formatter &amp; Validator</h1>
          <p className="text-secondary" style={{ color: '#94a3b8' }}>
            Format, beautify, and validate JSON data payloads and Schema.org structured data with real-time error reporting.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-4 rounded-4" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center mb-3">
              <div className="d-flex gap-2">
                <button
                  onClick={formatJSON}
                  className="btn btn-sm text-white fw-bold d-inline-flex align-items-center gap-1"
                  style={{ background: '#FD6A02', borderRadius: '6px' }}
                >
                  <FaExpand /> Beautify (2 Spaces)
                </button>
                <button
                  onClick={minifyJSON}
                  className="btn btn-sm btn-outline-light fw-bold d-inline-flex align-items-center gap-1"
                  style={{ borderRadius: '6px' }}
                >
                  <FaCompress /> Minify
                </button>
              </div>

              <button
                onClick={copyToClipboard}
                className="btn btn-sm text-white fw-bold d-inline-flex align-items-center gap-1"
                style={{ background: copied ? '#10b981' : '#334155', borderRadius: '6px' }}
              >
                {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy JSON</>}
              </button>
            </div>

            {error && (
              <div className="alert alert-danger py-2 small" role="alert">
                <strong>Invalid JSON Syntax:</strong> {error}
              </div>
            )}

            <textarea
              className="form-control font-monospace"
              rows={14}
              style={{ background: '#020617', border: '1px solid #1e293b', color: '#38bdf8', fontSize: '13px' }}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (error) setError(null);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
