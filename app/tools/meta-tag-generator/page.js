'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCopy, FaCheck, FaTags } from 'react-icons/fa';

export default function MetaTagGeneratorPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [siteUrl, setSiteUrl] = useState('https://');
  const [ogImage, setOgImage] = useState('https://');
  const [copied, setCopied] = useState(false);

  const generatedTags = `<!-- Primary Meta Tags -->
<title>${title || 'Your Page Title'}</title>
<meta name="title" content="${title || 'Your Page Title'}" />
<meta name="description" content="${description || 'Your page description goes here.'}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${siteUrl || 'https://yourwebsite.com/'}" />
<meta property="og:title" content="${title || 'Your Page Title'}" />
<meta property="og:description" content="${description || 'Your page description goes here.'}" />
<meta property="og:image" content="${ogImage || 'https://yourwebsite.com/og-image.jpg'}" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${siteUrl || 'https://yourwebsite.com/'}" />
<meta property="twitter:title" content="${title || 'Your Page Title'}" />
<meta property="twitter:description" content="${description || 'Your page description goes here.'}" />
<meta property="twitter:image" content="${ogImage || 'https://yourwebsite.com/og-image.jpg'}" />`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedTags);
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
            <FaTags className="text-3xl" />
          </div>
          <h1 className="h2 fw-bold text-white mb-2">Meta Tag &amp; Open Graph Generator</h1>
          <p className="text-secondary" style={{ color: '#94a3b8' }}>
            Generate high-CTR title, description, and social preview tags ready to paste into your Next.js or HTML website.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="p-4 rounded-4" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 className="h5 fw-bold text-white mb-3">Input Metadata</h3>

              <div className="mb-3">
                <label className="form-label text-light small fw-bold">Page Title (50–60 characters recommended)</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }}
                  placeholder="e.g. Best Web Development Agency in Bihar | MaaJanki Web Tech"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <small className="text-muted d-block mt-1">{title.length} / 60 characters</small>
              </div>

              <div className="mb-3">
                <label className="form-label text-light small fw-bold">Meta Description (150–160 characters)</label>
                <textarea
                  className="form-control"
                  rows={3}
                  style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }}
                  placeholder="e.g. Scale your business with high-performance Next.js websites, local SEO in Bihar, and Google Ads..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <small className="text-muted d-block mt-1">{description.length} / 160 characters</small>
              </div>

              <div className="mb-3">
                <label className="form-label text-light small fw-bold">Canonical Website URL</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }}
                  value={siteUrl}
                  onChange={(e) => setSiteUrl(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-light small fw-bold">Social Banner Image URL (1200×630px)</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ background: '#0f172a', border: '1px solid #334155', color: '#fff' }}
                  value={ogImage}
                  onChange={(e) => setOgImage(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 rounded-4 h-100 d-flex flex-column" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="h5 fw-bold text-white mb-0">Generated Meta Tags</h3>
                <button
                  onClick={copyToClipboard}
                  className="btn btn-sm text-white fw-bold d-inline-flex align-items-center gap-1"
                  style={{ background: copied ? '#10b981' : '#FD6A02', borderRadius: '6px' }}
                >
                  {copied ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy Code</>}
                </button>
              </div>

              <pre
                className="p-3 rounded-3 flex-grow-1 overflow-auto"
                style={{ background: '#020617', color: '#38bdf8', fontSize: '13px', lineHeight: '1.5', border: '1px solid #1e293b' }}
              >
                <code>{generatedTags}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
