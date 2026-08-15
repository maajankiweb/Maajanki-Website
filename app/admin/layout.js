export const dynamic = 'force-dynamic';

import { ClerkProvider } from '@clerk/nextjs';
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import AdminShell from '@/components/admin/AdminShell';

export const metadata = {
  title: 'Admin Control Center | MaaJanki Web Tech',
  robots: {
    index: false,
    follow: false,
    noimageindex: true,
    noarchive: true,
    nosnippet: true,
  },
};

const DEFAULT_ADMIN_PATTERNS = ['maajankiweb@gmail.com', 'info@maajankiwebtech.com'];
const ALLOWED_ADMIN_PATTERNS = process.env.ALLOWED_ADMIN_EMAILS
  ? process.env.ALLOWED_ADMIN_EMAILS.split(',').map((e) => e.trim().toLowerCase()).filter(Boolean)
  : DEFAULT_ADMIN_PATTERNS;

export default async function AdminLayout({ children }) {
  let userId = null;
  let user = null;

  try {
    const authObj = await auth();
    userId = authObj?.userId;
    if (userId) {
      user = await currentUser();
    }
  } catch (err) {
    console.error('Clerk Admin Auth Error:', err);
  }

  // If not signed in, redirect to Clerk sign-in page
  if (!userId) {
    redirect('/sign-in');
  }
  const userEmail = user?.primaryEmailAddress?.emailAddress?.toLowerCase() || '';

  const isAuthorized =
    ALLOWED_ADMIN_PATTERNS.length > 0 &&
    ALLOWED_ADMIN_PATTERNS.some((pattern) => {
      if (pattern.startsWith('@')) {
        return userEmail.endsWith(pattern);
      }
      return userEmail === pattern;
    });

  // If email is not in ALLOWED_ADMIN_EMAILS, display Access Denied
  if (!isAuthorized) {
    return (
      <div style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>🚫 Access Denied</h1>
        <h3 style={{ color: '#f87171', marginBottom: '16px' }}>
          Unauthorized Admin Account ({userEmail})
        </h3>
        <p style={{ color: '#94a3b8', maxWidth: '500px', lineHeight: '1.6' }}>
          Your email address is not authorized to access the MaaJanki Web Tech Admin Control Center. Access is strictly restricted to verified administrative email accounts.
        </p>
        <Link href="/sign-in" style={{
          marginTop: '24px',
          padding: '12px 28px',
          backgroundColor: '#fd6a02',
          color: '#ffffff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
        }}>
          Switch Account / Sign In
        </Link>
      </div>
    );
  }

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      telemetry={false}
    >
      <AdminShell>{children}</AdminShell>
    </ClerkProvider>
  );
}
