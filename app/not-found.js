'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '120px 20px', textAlign: 'center', fontFamily: 'sans-serif', background: '#042544', color: '#fff', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '4rem', color: '#FD6A02', margin: '0 0 10px 0' }}>404</h1>
      <h2 style={{ fontSize: '1.8rem', margin: '0 0 15px 0' }}>Page Not Found</h2>
      <p style={{ color: '#cbd5e1', maxWidth: '500px', margin: '0 0 25px 0' }}>Could not find the requested resource on MaaJanki Web Tech.</p>
      <Link href="/" style={{ background: '#FD6A02', color: '#ffffff', padding: '12px 28px', borderRadius: '30px', textDecoration: 'none', fontWeight: 'bold' }}>
        Return Home
      </Link>
    </div>
  );
}
