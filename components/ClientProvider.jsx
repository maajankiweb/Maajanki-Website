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
    // Only initialize SplashCursor on desktop devices (width >= 768px) after idle delay
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      const timer = setTimeout(() => setShowCursor(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    try {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
      });
    } catch (e) {
      console.warn("AOS initialization error:", e);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.scrollTo(0, 0);
        AOS.refresh();
      } catch (e) {
        console.warn("AOS refresh error:", e);
      }
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
