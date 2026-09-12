'use client';

import React, { useState } from 'react';
import { AlertTriangle, LogOut, X, Loader2 } from 'lucide-react';
import { useClerk } from '@clerk/nextjs';

export default function LogoutModal({ isOpen, onClose }) {
  const { signOut } = useClerk();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (!isOpen) return null;

  const handleConfirmLogout = async () => {
    setIsLoggingOut(true);
    try {
      // Clear all client-side cache, local storage, session storage
      if (typeof window !== 'undefined') {
        try {
          localStorage.clear();
          sessionStorage.clear();
          if ('caches' in window) {
            const names = await caches.keys();
            await Promise.all(names.map((name) => caches.delete(name)));
          }
        } catch (e) {
          console.error('Cache clear error:', e);
        }
      }
      await signOut({ redirectUrl: '/sign-in' });
      if (typeof window !== 'undefined') {
        window.location.href = '/sign-in';
      }
    } catch (err) {
      console.error('Logout error:', err);
      if (typeof window !== 'undefined') {
        window.location.href = '/sign-in';
      }
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(3, 7, 18, 0.8)',
        backdropFilter: 'blur(8px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget && !isLoggingOut) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          backgroundColor: '#0f172a',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          padding: '24px',
          position: 'relative',
          color: '#ffffff',
        }}
      >
        <button
          onClick={onClose}
          disabled={isLoggingOut}
          style={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: isLoggingOut ? 'not-allowed' : 'pointer',
            padding: '4px',
          }}
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
          <div
            style={{
              padding: '12px',
              borderRadius: '50%',
              backgroundColor: 'rgba(239, 68, 68, 0.15)',
              color: '#ef4444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AlertTriangle size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: 0 }}>
              Confirm Sign Out
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0' }}>
              End your administrative session
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: '13px',
            color: '#cbd5e1',
            backgroundColor: 'rgba(2, 6, 23, 0.6)',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            lineHeight: '1.6',
            margin: '0 0 20px',
          }}
        >
          Signing out will safely invalidate your active Clerk session and redirect you to the admin sign-in portal.
        </p>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button
            type="button"
            onClick={onClose}
            disabled={isLoggingOut}
            style={{
              padding: '9px 18px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#cbd5e1',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              cursor: isLoggingOut ? 'not-allowed' : 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirmLogout}
            disabled={isLoggingOut}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 20px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#ffffff',
              backgroundColor: '#e11d48',
              border: 'none',
              borderRadius: '10px',
              boxShadow: '0 4px 14px rgba(225, 29, 72, 0.4)',
              cursor: isLoggingOut ? 'not-allowed' : 'pointer',
              opacity: isLoggingOut ? 0.7 : 1,
            }}
          >
            {isLoggingOut ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Signing Out...
              </>
            ) : (
              <>
                <LogOut size={16} />
                Yes, Sign Out Now
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
