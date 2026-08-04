import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

// Allowed Admin Email Addresses (Add your email here)
const ALLOWED_ADMIN_EMAILS = (process.env.ALLOWED_ADMIN_EMAILS || '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

export default async function AdminLayout({ children }) {
  const { userId } = await auth();

  // If not signed in, redirect to Clerk sign-in page
  if (!userId) {
    redirect('/sign-in');
  }

  const user = await currentUser();
  const userEmail = user?.primaryEmailAddress?.emailAddress?.toLowerCase() || '';

  // If ALLOWED_ADMIN_EMAILS is configured, enforce email restriction
  if (ALLOWED_ADMIN_EMAILS.length > 0 && !ALLOWED_ADMIN_EMAILS.includes(userEmail)) {
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
      }}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px' }}>🚫 Access Denied</h1>
        <h3 style={{ color: '#e53e3e', marginBottom: '16px' }}>
          Unauthorized Admin Account ({userEmail})
        </h3>
        <p style={{ color: '#4a5568', maxWidth: '500px', lineHeight: '1.6' }}>
          Your email address is not authorized to view the MaaJanki Web Tech Lead Dashboard. Please sign in with an authorized admin account.
        </p>
        <a href="/sign-in" style={{
          marginTop: '24px',
          padding: '10px 24px',
          backgroundColor: '#042544',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '600',
        }}>
          Switch Account / Sign In Again
        </a>
      </div>
    );
  }

  return <>{children}</>;
}
