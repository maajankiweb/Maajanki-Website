export const dynamic = 'force-dynamic';

import { SignUp } from '@clerk/nextjs';
import '../../styles/Auth3D.css';

export const metadata = {
  title: 'Admin Registration | MaaJanki Web Tech',
  description: 'Create an admin account for MaaJanki Web Tech',
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <main className="auth-3d-wrapper">
      {/* Dynamic 3D Ambient Orbs */}
      <div className="auth-3d-orb auth-3d-orb-1" />
      <div className="auth-3d-orb auth-3d-orb-2" />
      <div className="auth-3d-orb auth-3d-orb-3" />

      {/* 3D Perspective Grid */}
      <div className="auth-3d-grid" />

      {/* Auth Stage Container */}
      <div className="auth-3d-stage">
        {/* Floating 3D Micro-Badges */}
        <div className="auth-3d-badge badge-top-left">
          <span>✨ Quick Onboarding</span>
        </div>
        <div className="auth-3d-badge badge-bottom-right">
          <span>🔒 Encrypted Credentials</span>
        </div>

        {/* Header */}
        <div className="auth-3d-header">
          <div className="auth-3d-logo-badge">
            🚀 MaaJanki Web Tech
          </div>
          <h1 className="auth-3d-title">Create Admin Account</h1>
          <p className="auth-3d-subtitle">Join the team management console in seconds</p>
        </div>

        {/* 3D Glass Card Container */}
        <div className="auth-3d-card-frame">
          <SignUp
            appearance={{
              elements: {
                rootBox: { width: '100%' },
                card: {
                  background: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                  width: '100%',
                },
                headerTitle: { color: '#ffffff', fontWeight: '800', fontSize: '1.4rem' },
                headerSubtitle: { color: '#94a3b8' },
                socialButtonsBlockButton: {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    borderColor: '#FD6A02',
                  },
                },
                socialButtonsBlockButtonText: { color: '#ffffff', fontWeight: '600' },
                dividerLine: { backgroundColor: 'rgba(255, 255, 255, 0.15)' },
                dividerText: { color: '#94a3b8' },
                formFieldLabel: { color: '#cbd5e1', fontWeight: '500' },
                formFieldInput: {
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  '&:focus': {
                    borderColor: '#FD6A02',
                    boxShadow: '0 0 15px rgba(253, 106, 2, 0.4)',
                  },
                },
                formButtonPrimary: {
                  background: 'linear-gradient(135deg, #FD6A02 0%, #ff8533 100%)',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '0.98rem',
                  padding: '12px',
                  boxShadow: '0 10px 25px rgba(253, 106, 2, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #ff7a1a 0%, #FD6A02 100%)',
                    boxShadow: '0 14px 30px rgba(253, 106, 2, 0.6)',
                    transform: 'translateY(-2px)',
                  },
                },
                footerActionLink: {
                  color: '#FD6A02',
                  fontWeight: '600',
                  '&:hover': { textDecoration: 'underline' },
                },
                identityPreviewText: { color: '#ffffff' },
                identityPreviewEditButtonIcon: { color: '#FD6A02' },
                formResendCodeLink: { color: '#FD6A02' },
              },
              variables: {
                colorPrimary: '#FD6A02',
                colorBackground: 'transparent',
                colorText: '#ffffff',
                borderRadius: '12px',
              },
            }}
            fallbackRedirectUrl="/admin"
            signInUrl="/sign-in"
          />
        </div>
      </div>
    </main>
  );
}
