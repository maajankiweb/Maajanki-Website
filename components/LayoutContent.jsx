'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PromoPopup from '@/components/PromoPopup';
import Breadcrumbs from '@/components/Breadcrumbs';
import ChatbotLoader from '@/components/Chatbot/ChatbotLoader';

export default function LayoutContent({ children }) {
  const pathname = usePathname();
  const isAdminOrAuth = pathname?.startsWith('/admin') || pathname?.startsWith('/sign-in') || pathname?.startsWith('/sign-up');

  if (isAdminOrAuth) {
    return (
      <main id="main-content" style={{ minHeight: '100vh', margin: 0, padding: 0 }}>
        {children}
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <PromoPopup />
      <ChatbotLoader />
      <main id="main-content" style={{ minHeight: '80vh' }}>
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
    </>
  );
}
