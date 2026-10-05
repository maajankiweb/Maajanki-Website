'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import './MobileBottomNav.css';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Active route detector
  const isActive = (path) => {
    if (!pathname) return false;
    if (path === '/') return pathname === '/';
    if (path === '/about') {
      return pathname === '/about' || pathname === '/our-team' || pathname === '/careers';
    }
    if (path === '/services') {
      return pathname === '/services' || pathname.startsWith('/services/');
    }
    if (path === '/contact') return pathname === '/contact';
    return pathname === path || pathname.startsWith(path + '/');
  };

  // Close drawer on pathname change or escape key
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  // Handle escape key & body scroll lock
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsDrawerOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isDrawerOpen]);

  // Listen for custom trigger from top navbar if clicked
  useEffect(() => {
    const handleCustomOpen = () => setIsDrawerOpen((prev) => !prev);
    window.addEventListener('toggle-mobile-drawer', handleCustomOpen);
    return () => window.removeEventListener('toggle-mobile-drawer', handleCustomOpen);
  }, []);

  const handleTabClick = (path, e) => {
    if (isDrawerOpen) setIsDrawerOpen(false);
    // If clicking home while already on home, scroll to top smoothly
    if (path === '/' && pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  // Close drawer helper
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      {/* ========================================================= */}
      {/* 1. FIXED BOTTOM APP BAR (MOBILE & TABLET ONLY)            */}
      {/* ========================================================= */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
        {/* TAB 1: HOME */}
        <Link
          href="/"
          onClick={(e) => handleTabClick('/', e)}
          className={`mobile-nav-tab ${isActive('/') && !isDrawerOpen ? 'active' : ''}`}
          aria-label="Home"
          aria-current={isActive('/') && !isDrawerOpen ? 'page' : undefined}
        >
          <div className="mobile-nav-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill={isActive('/') && !isDrawerOpen ? '#FD6A02' : 'none'}
              stroke="currentColor"
              strokeWidth={isActive('/') && !isDrawerOpen ? '2.2' : '1.8'}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 10.5L12 3l9 7.5V20a1 1 0 01-1 1h-5v-6h-4v6H4a1 1 0 01-1-1V10.5z" />
            </svg>
          </div>
          <span className="mobile-nav-label">Home</span>
        </Link>

        {/* TAB 2: ABOUT */}
        <Link
          href="/about"
          onClick={(e) => handleTabClick('/about', e)}
          className={`mobile-nav-tab ${isActive('/about') && !isDrawerOpen ? 'active' : ''}`}
          aria-label="About Us"
          aria-current={isActive('/about') && !isDrawerOpen ? 'page' : undefined}
        >
          <div className="mobile-nav-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={isActive('/about') && !isDrawerOpen ? '2.2' : '1.8'}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span className="mobile-nav-label">About</span>
        </Link>

        {/* TAB 3: SERVICES */}
        <Link
          href="/services"
          onClick={(e) => handleTabClick('/services', e)}
          className={`mobile-nav-tab ${isActive('/services') && !isDrawerOpen ? 'active' : ''}`}
          aria-label="Services"
          aria-current={isActive('/services') && !isDrawerOpen ? 'page' : undefined}
        >
          <div className="mobile-nav-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={isActive('/services') && !isDrawerOpen ? '2.2' : '1.8'}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <span className="mobile-nav-label">Services</span>
        </Link>

        {/* TAB 4: CONTACT */}
        <Link
          href="/contact"
          onClick={(e) => handleTabClick('/contact', e)}
          className={`mobile-nav-tab ${isActive('/contact') && !isDrawerOpen ? 'active' : ''}`}
          aria-label="Contact"
          aria-current={isActive('/contact') && !isDrawerOpen ? 'page' : undefined}
        >
          <div className="mobile-nav-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill={isActive('/contact') && !isDrawerOpen ? '#FD6A02' : 'none'}
              stroke="currentColor"
              strokeWidth={isActive('/contact') && !isDrawerOpen ? '2.2' : '1.8'}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <span className="mobile-nav-label">Contact</span>
        </Link>

        {/* TAB 5: MENU (HAMBURGER DRAWER TRIGGER) */}
        <button
          type="button"
          onClick={toggleDrawer}
          className={`mobile-nav-tab ${isDrawerOpen ? 'active menu-active' : ''}`}
          aria-label="Open Navigation Menu"
          aria-expanded={isDrawerOpen}
        >
          <div className="mobile-nav-icon">
            {isDrawerOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </div>
          <span className="mobile-nav-label">{isDrawerOpen ? 'Close' : 'Menu'}</span>
        </button>
      </nav>

      {/* ========================================================= */}
      {/* 2. SLIDE-UP APP DRAWER (ALL PAGES & ACTIONS)              */}
      {/* ========================================================= */}
      <div
        className={`mobile-drawer-overlay ${isDrawerOpen ? 'open' : ''}`}
        onClick={closeDrawer}
        aria-hidden={!isDrawerOpen}
      />

      <aside
        className={`mobile-drawer-sheet ${isDrawerOpen ? 'open' : ''}`}
        aria-label="All Pages Menu"
        aria-modal="true"
        role="dialog"
      >
        {/* Touch Handle Bar */}
        <div className="drawer-handle-bar" onClick={closeDrawer} />

        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-brand">
            <Image
              src="/images/MaaJanki-Web-Tech-Logo.webp"
              alt="MaaJanki Web Tech"
              width={160}
              height={32}
              style={{ height: 'auto', width: 'auto' }}
            />
            <span className="drawer-badge">Menu &amp; Quick Links</span>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={closeDrawer}
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        {/* Quick CTA Actions Row */}
        <div className="drawer-quick-ctas">
          <a href="tel:+919006543913" className="drawer-cta-btn cta-call">
            <i className="fas fa-phone-alt"></i>
            <span>Call Us</span>
          </a>
          <a
            href="https://wa.me/919006543913?text=Hello%20MaaJanki%20Web%20Tech!%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-cta-btn cta-whatsapp"
          >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <Link href="/contact" onClick={closeDrawer} className="drawer-cta-btn cta-quote">
            <i className="fas fa-rocket"></i>
            <span>Free Quote</span>
          </Link>
        </div>

        {/* Scrollable Categories List */}
        <div className="drawer-content-scroll">
          {/* Group 1: SaaS Products & Assets */}
          <div className="drawer-group">
            <div className="drawer-group-title">
              <span className="group-dot"></span>
              SaaS Products &amp; Assets
              <Link href="/products" onClick={closeDrawer} className="group-view-all">
                View All →
              </Link>
            </div>
            <div className="drawer-grid">
              <Link href="/products/wacrm" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25D366' }}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>WaCRM</strong>
                  <small>WhatsApp Business API CRM</small>
                </div>
              </Link>

              <Link href="/products/invobill" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
                  <i className="fas fa-file-invoice-dollar"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>InvoBill</strong>
                  <small>GST Invoicing Software</small>
                </div>
              </Link>

              <Link href="/products/dukandost-pro" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(253, 106, 2, 0.15)', color: '#FD6A02' }}>
                  <i className="fas fa-store"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>DukanDost Pro</strong>
                  <small>Retail Business OS</small>
                </div>
              </Link>

              <Link href="/products/nexus-saas" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' }}>
                  <i className="fas fa-map-marked-alt"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>Nexus SaaS</strong>
                  <small>Google Maps &amp; Local OS</small>
                </div>
              </Link>

              <Link href="/products/tailwind-templates" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(45, 212, 191, 0.15)', color: '#2dd4bf' }}>
                  <i className="fas fa-layer-group"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>Tailwind Templates</strong>
                  <small>50+ Responsive Designs</small>
                </div>
              </Link>
            </div>
          </div>

          {/* Group 2: All Services */}
          <div className="drawer-group">
            <div className="drawer-group-title">
              <span className="group-dot"></span>
              All Services
              <Link href="/services" onClick={closeDrawer} className="group-view-all">
                Overview →
              </Link>
            </div>
            <div className="drawer-links-list">
              <Link href="/services/web-development" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-code"></i>
                <span>Web Development</span>
              </Link>
              <Link href="/services/wordpress-development" onClick={closeDrawer} className="drawer-link-item">
                <i className="fab fa-wordpress"></i>
                <span>WordPress Development</span>
              </Link>
              <Link href="/services/landing-page" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-desktop"></i>
                <span>Landing Page Design</span>
              </Link>
              <Link href="/services/mobile-app-development" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-mobile-alt"></i>
                <span>Mobile App Development</span>
              </Link>
              <Link href="/services/seo" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-search"></i>
                <span>SEO Services</span>
              </Link>
              <Link href="/services/smo" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-share-alt"></i>
                <span>Social Media Optimization</span>
              </Link>
              <Link href="/services/performance-marketing" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-chart-line"></i>
                <span>Performance Marketing (Ads)</span>
              </Link>
              <Link href="/services/ui-ux-design" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-pencil-ruler"></i>
                <span>UI/UX Design</span>
              </Link>
              <Link href="/services/graphic-design" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-palette"></i>
                <span>Graphic Design</span>
              </Link>
              <Link href="/services/branding" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-bullhorn"></i>
                <span>Branding &amp; Identity</span>
              </Link>
              <Link href="/services/content-writing" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-pen-nib"></i>
                <span>Content Writing</span>
              </Link>
              <Link href="/services/products-listing" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-shopping-cart"></i>
                <span>eCommerce Product Listing</span>
              </Link>
            </div>
          </div>

          {/* Group 3: Company & Work */}
          <div className="drawer-group">
            <div className="drawer-group-title">
              <span className="group-dot"></span>
              Company &amp; Portfolio
            </div>
            <div className="drawer-grid">
              <Link href="/portfolio" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(253, 106, 2, 0.15)', color: '#FD6A02' }}>
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>Portfolio</strong>
                  <small>Featured Client Projects</small>
                </div>
              </Link>

              <Link href="/industries" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                  <i className="fas fa-industry"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>Industries</strong>
                  <small>Sectors We Specialize In</small>
                </div>
              </Link>

              <Link href="/our-team" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <i className="fas fa-users"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>Our Team</strong>
                  <small>Engineers &amp; Strategists</small>
                </div>
              </Link>

              <Link href="/careers" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}>
                  <i className="fas fa-user-plus"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>Careers</strong>
                  <small>Join MaaJanki Tech Team</small>
                </div>
              </Link>

              <Link href="/reviews" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#eab308' }}>
                  <i className="fas fa-star"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>Client Reviews</strong>
                  <small>5.0 ★ Verified Feedback</small>
                </div>
              </Link>

              <Link href="/about" onClick={closeDrawer} className="drawer-card">
                <div className="drawer-card-icon" style={{ background: 'rgba(147, 51, 234, 0.15)', color: '#9333ea' }}>
                  <i className="fas fa-info-circle"></i>
                </div>
                <div className="drawer-card-info">
                  <strong>About Company</strong>
                  <small>Our Vision &amp; Mission</small>
                </div>
              </Link>
            </div>
          </div>

          {/* Group 4: Free Tools */}
          <div className="drawer-group">
            <div className="drawer-group-title">
              <span className="group-dot"></span>
              Free Developer &amp; Business Tools
              <Link href="/tools" onClick={closeDrawer} className="group-view-all">
                All Tools →
              </Link>
            </div>
            <div className="drawer-links-list">
              <Link href="/tools/gst-invoice-helper" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-calculator"></i>
                <span>GST Invoice Helper</span>
              </Link>
              <Link href="/tools/webp-converter" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-file-image"></i>
                <span>WebP Image Converter</span>
              </Link>
              <Link href="/tools/meta-tag-generator" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-tags"></i>
                <span>Meta Tag &amp; OG Generator</span>
              </Link>
            </div>
          </div>

          {/* Group 5: Resources & Local Reach */}
          <div className="drawer-group">
            <div className="drawer-group-title">
              <span className="group-dot"></span>
              Resources &amp; Global Coverage
            </div>
            <div className="drawer-links-list">
              <Link href="/blog" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-newspaper"></i>
                <span>Blog &amp; Tech Articles</span>
              </Link>
              <Link href="/faqs" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-question-circle"></i>
                <span>Frequently Asked Questions</span>
              </Link>
              <Link href="/locations" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>59 Global &amp; India Locations</span>
              </Link>
              <Link href="/contact" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-envelope"></i>
                <span>Contact &amp; Offices</span>
              </Link>
              <Link href="/sitemap" onClick={closeDrawer} className="drawer-link-item">
                <i className="fas fa-sitemap"></i>
                <span>HTML Sitemap</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Drawer Bottom Bar */}
        <div className="drawer-footer">
          <div className="drawer-socials">
            <a href="https://www.linkedin.com/company/maajanki-web-tech-company/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.facebook.com/maajankiwebtech" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/maajankiwebtech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/MaaJankiwebtech" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://in.pinterest.com/maajankiweb/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
          <p className="drawer-copy">© 2026 MaaJanki Web Tech. Built for Growth.</p>
        </div>
      </aside>
    </>
  );
}
