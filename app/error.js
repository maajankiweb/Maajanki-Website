'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#0070f3',
          color: '#fff',
        }}
      >
        Try again
      </button>
    </div>
  );
}
