'use client';

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  User, 
  Send, 
  CheckCircle2, 
  X, 
  ShieldCheck, 
  Briefcase, 
  MessageSquare, 
  Lock, 
  Star, 
  Users,
  AlertCircle 
} from 'lucide-react';
import "./PromoPopup.css";

const PromoPopup = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    agreed: false, // Default false: User must actively check/tick it
  });

  useEffect(() => {
    // Run on Homepage ('/')
    if (pathname !== '/') {
      setIsOpen(false);
      return;
    }

    // Trigger after 3 seconds delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (pathname !== '/' || !isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    setValidationError('');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValidationError('');
    setFormData((prev) => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  // Comprehensive Anti-Dummy and Validation Check
  const validateForm = () => {
    // 1. Name Check
    const cleanName = formData.name.trim();
    if (!cleanName || cleanName.length < 2) {
      return 'Kripya apna poora naam darj karein.';
    }
    const dummyNames = ['test', 'testing', 'asdf', 'qwerty', 'dummy', 'fake', 'abc', 'xyz', 'demo', 'user', 'none'];
    if (dummyNames.includes(cleanName.toLowerCase())) {
      return 'Kripya ek valid aur genuine naam darj karein.';
    }

    // 2. Email Validation
    const cleanEmail = formData.email.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleanEmail)) {
      return 'Kripya ek valid email address darj karein (e.g. name@gmail.com).';
    }
    const [username, domain] = cleanEmail.split('@');
    const dummyUsernames = [
      'test', 'testing', 'tester', 'admin', 'administrator', 'user', 'dummy', 'fake',
      'asdf', 'asdfgh', 'qwerty', 'xyz', 'abc', 'abcd', 'none', 'noemail', 'null', 'demo',
      'sample', 'example', '12345', '123456', 'temp'
    ];
    const dummyDomains = [
      'test.com', 'example.com', 'sample.com', 'domain.com', 'fake.com', 'email.com',
      'xyz.com', 'abc.com', 'asdf.com', 'none.com', 'test.in', 'tempmail.com', 'mailinator.com'
    ];
    if (dummyUsernames.includes(username) || dummyDomains.includes(domain) || /^(\w)\1{3,}$/.test(username)) {
      return 'Dummy ya fake email address swikaar nahi hai. Kripya genuine active email darj karein.';
    }

    // 3. Mobile Number Validation
    const digits = formData.phone.replace(/\D/g, '');
    const last10 = digits.slice(-10);
    const isAllSame = /^(\d)\1{9}$/.test(last10);
    const dummyPhones = [
      '1234567890', '0123456789', '9876543210', '8765432109', '0987654321',
      '1231231234', '1212121212', '9898989898', '9090909090', '9988776655',
      '1122334455', '9876598765', '1234512345', '9999988888', '0000011111',
      '1010101010', '9191919191', '1234567891', '9876543211', '1234567899'
    ];

    if (digits.length < 10 || isAllSame || dummyPhones.includes(last10) || (last10.length === 10 && !/^[6-9]/.test(last10))) {
      return 'Kripya ek valid 10-digit mobile number darj karein (dummy/fake number swikaar nahi hai).';
    }

    // 4. Service Selection
    if (!formData.service) {
      return 'Kripya zaroori service select karein.';
    }

    // 5. Terms Agreement
    if (!formData.agreed) {
      return 'Kripya aage badhne ke liye Terms & Conditions aur Privacy Policy ko tick karein.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError('');

    const errorMsg = validateForm();
    if (errorMsg) {
      setValidationError(errorMsg);
      return;
    }

    setLoading(true);

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      service: formData.service || 'Website Development',
      source: 'homepage-promo-popup',
      message: formData.message.trim() || 'Requested Consultation & Quote via Homepage Promo Popup',
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
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
            agreed: false,
          });
        }, 2500);
      } else {
        setValidationError(data.error || 'Submission failed. Kripya sahi jaankari darj karein.');
      }
    } catch (err) {
      console.error('Promo lead submission error:', err);
      setValidationError('Server connection error. Kripya punah prayas karein.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="promo-overlay" onClick={handleClose}>
      <div className="promo-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Brand Top Gradient Bar */}
        <div className="promo-top-bar"></div>

        {/* Floating Close Button */}
        <button
          className="promo-close-btn"
          onClick={handleClose}
          aria-label="Close promotion popup"
        >
          <X size={18} />
        </button>

        <div className="promo-content-grid">
          {/* Left Column: Brand Value Proposition & Offer Showcase */}
          <div className="promo-left-column">
            {/* Top Star Badge */}
            <div className="promo-star-badge">
              <Star size={12} className="star-icon" />
              <span>NEW WEBSITE</span>
            </div>

            {/* Deep Navy Mini Banner Card */}
            <div className="promo-preview-banner">
              <h4 className="promo-banner-title">Let&apos;s Build Your Online Presence!</h4>
              <div className="promo-banner-tags">
                <span className="banner-tag">Fast &amp; Secure</span>
                <span className="banner-tag">SEO Optimized</span>
                <span className="banner-tag">Mobile-Friendly</span>
              </div>
              <div className="promo-banner-media">
                <Image
                  src="/images/web-dev-promo-card.jpg"
                  alt="MaaJanki Web Tech Website Development Team"
                  width={420}
                  height={150}
                  className="promo-banner-img"
                  priority
                />
              </div>
            </div>

            {/* Main Value Title & Subtitle */}
            <h3 className="promo-main-title">
              Need a Website That Brings You Customers?
            </h3>
            <p className="promo-main-desc">
              We design and build professional websites for businesses that make a lasting impression and drive real revenue.
            </p>

            {/* Pricing Highlight Card in Brand Palette */}
            <div className="promo-pricing-card">
              <div className="promo-pricing-left">
                <span className="pricing-tag">STARTING FROM</span>
                <span className="pricing-features">Custom-built • Mobile-ready • Business-focused</span>
              </div>
              <div className="promo-pricing-value">
                ₹15,000
              </div>
            </div>

            {/* Checklist items */}
            <div className="promo-checklist-grid">
              <div className="checklist-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Professional design tailored to your business</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Fast, mobile-friendly website experience</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>Lead-focused pages &amp; enquiry sections</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 size={16} className="check-icon" />
                <span>SEO-ready structure for Google visibility</span>
              </div>
              <div className="checklist-item full-span">
                <CheckCircle2 size={16} className="check-icon" />
                <span>WhatsApp, call &amp; enquiry integration</span>
              </div>
            </div>

            {/* Dual Brand Action Buttons */}
            <div className="promo-left-actions">
              <button
                type="button"
                className="promo-audit-btn"
                onClick={() => {
                  const input = document.getElementById('promo-name-input');
                  if (input) input.focus();
                  setFormData(prev => ({
                    ...prev,
                    message: prev.message || 'Requesting Free Website & SEO Audit'
                  }));
                }}
              >
                Get My Free Audit
              </button>
              <a
                href="https://wa.me/919006543913?text=Hi%20MaaJanki%20Web%20Tech,%20I%20want%20to%20talk%20to%20an%20expert%20about%20building%20a%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="promo-expert-btn"
              >
                Talk to an Expert
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form (Saves directly to Admin Panel via /api/leads) */}
          <div className="promo-right-column">
            {submitted ? (
              <div className="promo-success-state">
                <CheckCircle2 size={56} className="text-success mb-3 animate-bounce" />
                <h3>Thank You!</h3>
                <p>We received your request. Our web growth expert will reach out to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="promo-form-header">
                  <h2 className="promo-form-heading">Claim Your Free Consultation</h2>
                  <p className="promo-form-subheading">Fill this in — our team will reach out shortly.</p>
                  <div className="promo-guarantee-badge">
                    <ShieldCheck size={16} className="shield-icon" />
                    <span>No spam. No obligation. Just a free consultation.</span>
                  </div>
                </div>

                {validationError && (
                  <div className="promo-error-alert" role="alert">
                    <AlertCircle size={15} className="error-alert-icon" />
                    <span>{validationError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="promo-form-body" noValidate>
                  {/* Row 1: Name & Email */}
                  <div className="promo-input-row">
                    <div className="promo-field-item">
                      <label htmlFor="promo-name-input">Full Name *</label>
                      <div className="promo-field-box">
                        <User size={16} className="field-icon" />
                        <input
                          id="promo-name-input"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          required
                        />
                      </div>
                    </div>

                    <div className="promo-field-item">
                      <label htmlFor="promo-email-input">Email *</label>
                      <div className="promo-field-box">
                        <Mail size={16} className="field-icon" />
                        <input
                          id="promo-email-input"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone & Service */}
                  <div className="promo-input-row">
                    <div className="promo-field-item">
                      <label htmlFor="promo-phone-input">Phone Number *</label>
                      <div className="promo-field-box">
                        <Phone size={16} className="field-icon" />
                        <input
                          id="promo-phone-input"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile"
                          required
                        />
                      </div>
                    </div>

                    <div className="promo-field-item">
                      <label htmlFor="promo-service-select">Service Needed *</label>
                      <div className="promo-field-box">
                        <Briefcase size={16} className="field-icon" />
                        <select
                          id="promo-service-select"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a service...</option>
                          <option value="Website Development">Website Development</option>
                          <option value="E-Commerce Store">E-Commerce Store</option>
                          <option value="SEO & Search Marketing">SEO &amp; Search Marketing</option>
                          <option value="Performance Marketing & Ads">Performance Marketing &amp; Ads</option>
                          <option value="Social Media (SMO)">Social Media Optimization (SMO)</option>
                          <option value="UI/UX & Graphic Design">UI/UX &amp; Graphic Design</option>
                          <option value="Custom Web Application">Custom Web Application</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="promo-field-item full-width">
                    <label htmlFor="promo-message-input">Message (optional)</label>
                    <div className="promo-field-box message-box">
                      <MessageSquare size={16} className="field-icon message-icon" />
                      <textarea
                        id="promo-message-input"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business or goal"
                        rows={2}
                      />
                    </div>
                  </div>

                  {/* Row 4: Agreement Checkbox (Unchecked by default, required to tick) */}
                  <div className="promo-agreement-row">
                    <label className="promo-checkbox-container">
                      <input
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                      />
                      <span className="checkbox-text">
                        I agree to MaaJanki&apos;s <Link href="/terms-conditions" target="_blank">Terms &amp; Conditions</Link> and <Link href="/privacy-policy" target="_blank">Privacy Policy</Link>.
                      </span>
                    </label>
                  </div>

                  {/* Brand Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="promo-submit-cta"
                  >
                    <Send size={16} className="submit-icon" />
                    <span>{loading ? 'SAVING TO ADMIN...' : 'REQUEST A QUOTE'}</span>
                  </button>

                  <div className="promo-secure-badge">
                    <Lock size={12} className="lock-icon" />
                    <span>Your information is safe and secure.</span>
                  </div>
                </form>

                {/* Trust Badges in Brand Palette */}
                <div className="promo-trust-group">
                  <div className="trust-pill">
                    <Users size={13} className="pill-icon" />
                    <span>100+ Brands Trust Us</span>
                  </div>
                  <div className="trust-pill">
                    <Star size={13} className="pill-icon" />
                    <span>4.9★ Rated Agency</span>
                  </div>
                  <div className="trust-pill">
                    <ShieldCheck size={13} className="pill-icon" />
                    <span>MSME &amp; Udyam Certified</span>
                  </div>
                </div>

                {/* What happens next */}
                <div className="promo-steps-card">
                  <h5 className="steps-header">WHAT HAPPENS NEXT?</h5>
                  <div className="steps-timeline">
                    <div className="step-row">
                      <span className="step-circle">1</span>
                      <span className="step-desc">We review your details</span>
                    </div>
                    <div className="step-row">
                      <span className="step-circle">2</span>
                      <span className="step-desc">We analyze your website &amp; goals</span>
                    </div>
                    <div className="step-row">
                      <span className="step-circle">3</span>
                      <span className="step-desc">We share personalized recommendations</span>
                    </div>
                  </div>
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
