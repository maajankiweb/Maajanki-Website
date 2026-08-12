'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';
import ErrorBoundary from './ErrorBoundary';

// Dynamically load the heavy WebGL SplashCursor lazily to ensure lightning-fast initial page renders
const SplashCursor = dynamic(() => import('./SplashCursor/SplashCursor'), {
  ssr: false,
});

export default function ClientProvider({ children }) {
  const pathname = usePathname();
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // Only initialize SplashCursor on desktop devices after page is fully idle
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const scheduleIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 3000));
      const idleId = scheduleIdle(() => {
        setShowCursor(true);
      });
      return () => {
        if (window.cancelIdleCallback) {
          window.cancelIdleCallback(idleId);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const initAOS = () => {
      try {
        AOS.init({
          duration: 600,
          once: true,
          easing: 'ease-in-out',
          disable: 'mobile',
        });
      } catch (e) {
        console.warn("AOS initialization error:", e);
      }
    };

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(initAOS);
      return () => window.cancelIdleCallback(id);
    } else {
      const timer = setTimeout(initAOS, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      const timer = setTimeout(() => {
        try {
          AOS.refresh();
        } catch (e) {}
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const isAdminPath = pathname ? (pathname.startsWith('/admin') || pathname.startsWith('/admin-')) : false;

  return (
    <ErrorBoundary>
      {!isAdminPath && showCursor && <SplashCursor />}
      {children}
    </ErrorBoundary>
  );
}
