'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import dynamic from 'next/dynamic';

// Dynamically load the heavy WebGL SplashCursor to improve initial page rendering and transition speeds
const SplashCursor = dynamic(() => import('./SplashCursor/SplashCursor'), {
  ssr: false,
});

export default function ClientProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      AOS.refresh();
    }
  }, [pathname]);

  const isAdminPath = pathname ? (pathname.startsWith('/admin') || pathname.startsWith('/admin-')) : false;

  return (
    <>
      {!isAdminPath && <SplashCursor />}
      {children}
    </>
  );
}
