'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaImage, FaDownload, FaUpload } from 'react-icons/fa';

export default function WebPConverterPage() {
  const [convertedImages, setConvertedImages] = useState([]);
  const [quality, setQuality] = useState(0.85);
  const fileInputRef = useRef(null);

  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    if (!files || files.length === 0) return;

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          const webpDataUrl = canvas.toDataURL('image/webp', quality);
          const originalSize = file.size;

          // Estimate converted size from data URL base64
          const base64Str = webpDataUrl.split(',')[1];
          const convertedSize = Math.round((base64Str.length * 3) / 4);

          setConvertedImages((prev) => [
            ...prev,
            {
              id: Math.random().toString(36).substring(7),
              name: file.name.replace(/\.[^/.]+$/, '') + '.webp',
              originalSize,
              convertedSize,
              url: webpDataUrl,
            },
          ]);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
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
            <FaImage className="text-3xl" />
          </div>
          <h1 className="h2 fw-bold text-white mb-2">WebP Image Converter</h1>
          <p className="text-secondary" style={{ color: '#94a3b8' }}>
            Convert PNG and JPEG images to Google-recommended, lightweight WebP format directly in your browser. 100% private, no server uploads.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Dropzone */}
          <div
            onClick={() => fileInputRef.current?.click()}
            className="p-5 rounded-4 text-center cursor-pointer mb-4"
            style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '2px dashed rgba(253, 106, 2, 0.4)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFiles}
              multiple
              accept="image/png, image/jpeg, image/jpg"
              className="d-none"
            />
            <FaUpload className="text-4xl mb-3" style={{ color: '#FD6A02' }} />
            <h3 className="h5 fw-bold text-white">Click or drag images here to convert</h3>
            <p className="text-muted small mb-0">Supports PNG, JPG, JPEG — instant WebP output</p>
          </div>

          {/* Converted Files List */}
          {convertedImages.length > 0 && (
            <div className="p-4 rounded-4" style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h4 className="h6 fw-bold text-white mb-3">Converted WebP Images ({convertedImages.length})</h4>

              <div className="d-flex flex-column gap-3">
                {convertedImages.map((img) => {
                  const savings = Math.max(0, Math.round(((img.originalSize - img.convertedSize) / img.originalSize) * 100));
                  return (
                    <div
                      key={img.id}
                      className="p-3 rounded-3 d-flex flex-wrap align-items-center justify-content-between gap-3"
                      style={{ background: '#020617', border: '1px solid #1e293b' }}
                    >
                      <div>
                        <div className="fw-semibold text-white">{img.name}</div>
                        <small className="text-muted">
                          {formatSize(img.originalSize)} &rarr;{' '}
                          <span style={{ color: '#38bdf8' }}>{formatSize(img.convertedSize)}</span>{' '}
                          <span className="badge ms-1" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981' }}>
                            -{savings}%
                          </span>
                        </small>
                      </div>

                      <a
                        href={img.url}
                        download={img.name}
                        className="btn btn-sm text-white fw-bold d-inline-flex align-items-center gap-1"
                        style={{ background: '#FD6A02', borderRadius: '6px' }}
                      >
                        <FaDownload /> Download
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
