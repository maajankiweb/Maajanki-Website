'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Breadcrumbs from '@/components/Breadcrumbs';
import FooterWithPopup from '@/components/FooterWithPopup';
import Footer from '@/components/Footer';

const PromoPopup = dynamic(() => import('@/components/PromoPopup'), { ssr: false });
const ChatbotLoader = dynamic(() => import('@/components/Chatbot/ChatbotLoader'), { ssr: false });

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
      <FooterWithPopup />
      <Footer />
    </>
  );
}
