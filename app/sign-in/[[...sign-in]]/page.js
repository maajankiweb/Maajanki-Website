export const dynamic = 'force-dynamic';

import { SignIn } from '@clerk/nextjs';

export const metadata = {
  title: 'Admin Login | MaaJanki Web Tech',
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #042544 0%, #083b6b 100%)',
      padding: '20px',
    }}>
      <SignIn
        appearance={{
          elements: {
            rootBox: { width: '100%', maxWidth: '480px' },
            card: {
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              borderRadius: '16px',
            },
            headerTitle: { color: '#042544', fontWeight: '700' },
            formButtonPrimary: {
              backgroundColor: '#042544',
              '&:hover': { backgroundColor: '#083b6b' },
            },
          },
          variables: {
            colorPrimary: '#042544',
            borderRadius: '8px',
          },
        }}
        fallbackRedirectUrl="/admin"
        signUpUrl="/sign-up"
      />
    </div>
  );
}
