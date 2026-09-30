'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: '120px 20px', textAlign: 'center', fontFamily: 'var(--font-poppins, sans-serif)', background: '#042544', color: '#ffffff', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-outfit, sans-serif)', fontWeight: 700, margin: '0 0 16px 0', color: '#FD6A02' }}>Something went wrong!</h2>
      <p style={{ color: '#cbd5e1', maxWidth: '480px', margin: '0 0 24px 0', lineHeight: 1.6 }}>An unexpected error occurred while loading this page. Please try refreshing.</p>
      <button
        onClick={() => reset()}
        style={{
          padding: '12px 32px',
          cursor: 'pointer',
          borderRadius: '9999px',
          border: 'none',
          backgroundColor: '#FD6A02',
          color: '#ffffff',
          fontWeight: 600,
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(253, 106, 2, 0.4)'
        }}
      >
        Try Again
      </button>
    </div>
  );
}
