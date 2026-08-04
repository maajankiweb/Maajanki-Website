export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>404 - Page Not Found</h2>
      <p>Could not find the requested resource.</p>
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '10px', display: 'inline-block' }}>
        Return Home
      </Link>
    </div>
  );
}
