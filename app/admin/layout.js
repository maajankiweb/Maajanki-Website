export const dynamic = 'force-dynamic';

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

const DEFAULT_ADMIN_PATTERNS = [
  'info@maajankiwebtech.com',
  'maajankiwebtech@gmail.com',
  'maajankiweb@gmail.com',
  '@maajankiwebtech.com',
];

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

  // Collect all email addresses attached to the Clerk account
  const userEmails = (user?.emailAddresses?.map((e) => e.emailAddress.toLowerCase()) || []).filter(Boolean);
  if (user?.primaryEmailAddress?.emailAddress) {
    const primary = user.primaryEmailAddress.emailAddress.toLowerCase();
    if (!userEmails.includes(primary)) userEmails.push(primary);
  }

  const primaryEmail = user?.primaryEmailAddress?.emailAddress?.toLowerCase() || userEmails[0] || 'Unknown User';

  const isAuthorized =
    ALLOWED_ADMIN_PATTERNS.length > 0 &&
    userEmails.some((userEmail) =>
      ALLOWED_ADMIN_PATTERNS.some((pattern) => {
        if (pattern.startsWith('@')) {
          return userEmail.endsWith(pattern);
        }
        return userEmail === pattern;
      })
    );

  // If email is not in ALLOWED_ADMIN_EMAILS, display Access Denied
  if (!isAuthorized) {
    return (
      <div style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '24px',
        textAlign: 'center',
        backgroundColor: '#0f172a',
        color: '#f8fafc',
      }}>
        <div style={{
          maxWdith: '550px',
          width: '100%',
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '16px',
          padding: '36px 24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}>
          <h1 style={{ fontSize: '42px', marginBottom: '12px' }}>🚫 Access Restricted</h1>
          <h3 style={{ color: '#f87171', fontSize: '18px', marginBottom: '16px', wordBreak: 'break-all' }}>
            Unauthorized Account: {primaryEmail}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
            Access to the MaaJanki Web Tech Admin Control Center is strictly restricted to verified administrative email accounts.
          </p>
          <Link href="/sign-in" style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: '#fd6a02',
            color: '#ffffff',
            borderRadius: '10px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '15px',
            boxShadow: '0 4px 14px rgba(253, 106, 2, 0.4)',
          }}>
            Switch Account / Sign In as Admin
          </Link>
        </div>
      </div>
    );
  }

  return <AdminShell>{children}</AdminShell>;
}

