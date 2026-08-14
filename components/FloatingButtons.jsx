'use client';

import React, { useState, useEffect } from 'react';
import './FloatingButtons.css';

const PHONE_NUMBER = '+919006543913';
const WHATSAPP_NUMBER = '919006543913';
const WHATSAPP_MESSAGE = 'Hello! I found your website and would like to know more about your services.';

export default function FloatingButtons() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Delay appearance so it doesn't interfere with initial page load
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Return null on server — prevents the Suspense-boundary tree mismatch
  if (!mounted) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const callUrl = `tel:${PHONE_NUMBER}`;

  return (
    <div className={`floating-buttons-container ${visible ? 'floating-visible' : ''}`} aria-label="Quick Contact Buttons">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Chat with us on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="floating-btn-icon">
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
        </span>
        <span className="floating-btn-label">WhatsApp</span>
        <span className="floating-pulse floating-pulse-green"></span>
      </a>

      {/* Call Button */}
      <a
        href={callUrl}
        className="floating-btn floating-call"
        aria-label="Call us now"
        title="Call Us"
      >
        <span className="floating-btn-icon">
          <i className="fas fa-phone" aria-hidden="true"></i>
        </span>
        <span className="floating-btn-label">Call Now</span>
        <span className="floating-pulse floating-pulse-orange"></span>
      </a>
    </div>
  );
}
