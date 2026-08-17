'use client';

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Phone, Mail, User, Send, CheckCircle2, X } from 'lucide-react';
import "./PromoPopup.css";

const PromoPopup = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
  });

  useEffect(() => {
    // Run on Homepage ('/')
    if (pathname !== '/') {
      setIsOpen(false);
      return;
    }

    // Trigger after 3 seconds delay for all screen sizes
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname !== '/' || !isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.contact) return;

    setLoading(true);

    const isEmail = formData.contact.includes('@');
    const payload = {
      name: formData.name || 'Website Visitor',
      phone: isEmail ? 'N/A' : formData.contact,
      email: isEmail ? formData.contact : 'N/A',
      service: 'Homepage Promo Callback',
      source: 'homepage-promo-popup',
      message: `Lead requested instant callback via Homepage Promo Popup (Contact: ${formData.contact})`,
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setFormData({ name: '', contact: '' });
        }, 2200);
      } else {
        alert(data.error || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Promo lead submission error:', err);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="promo-overlay" onClick={handleClose}>
      <div className="promo-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Floating Close Button */}
        <button
          className="promo-close-btn"
          onClick={handleClose}
          aria-label="Close promotion popup"
        >
          <X size={20} />
        </button>

        <div className="promo-content-grid">
          {/* Left Column: Premium Graphic */}
          <div className="promo-graphic-side">
            <Image
              src="/images/promo-popup-left.webp"
              alt="MaaJanki Web Tech Website Development & SEO"
              title="MaaJanki Web Tech – Website Development & SEO Consultation"
              className="promo-graphic-image"
              width="450"
              height="315"
              loading="lazy"
             />
            <div className="promo-graphic-badge">
              <span>🚀 100% Growth Focus</span>
            </div>
          </div>

          {/* Right Column: High-Converting Form */}
          <div className="promo-info-side">
            {submitted ? (
              <div className="promo-success-state">
                <CheckCircle2 size={56} className="text-success mb-3 animate-bounce" />
                <h3>Thank You!</h3>
                <p>We received your request. Our digital growth expert will contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="promo-header">
                  <span className="promo-badge">🔥 Free Growth Audit</span>
                  <h2 className="promo-title">Accelerate Your Business Growth</h2>
                  <p className="promo-description">
                    Claim your complimentary 1-minute Website & AI Growth Audit. Discover how to 2x your lead conversion rate today!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="promo-form">
                  <div className="promo-input-group">
                    <User className="promo-input-icon" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="promo-input"
                    />
                  </div>

                  <div className="promo-input-group">
                    <Phone className="promo-input-icon" size={18} />
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Phone Number or Email *"
                      required
                      className="promo-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="promo-submit-btn"
                  >
                    {loading ? (
                      'Submitting...'
                    ) : (
                      <>
                        Get Free Consultation <Send size={16} />
                      </>
                    )}
                  </button>
                </form>

                <div className="promo-footer-link">
                  <Link href="/services" onClick={handleClose}>
                    Or view our full service catalog →
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
