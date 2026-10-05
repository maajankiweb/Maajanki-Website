'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const pathname = usePathname();
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isAboutMenuOpen, setAboutMenuOpen] = useState(false); /* Issue #15: About Us dropdown */
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const isActive = (path) => {
    if (!pathname) return false;
    if (path === "/") return pathname === "/";
    if (path === "/services") return pathname === "/services" || pathname.startsWith("/services/");
    if (path === "/about") return pathname === "/about" || pathname === "/our-team" || pathname === "/careers";
    return pathname === path || pathname.startsWith(path + "/");
  };

  useEffect(() => {
    if (!navbarRef.current) return;

    let rafId;
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length) return;
      const entry = entries[0];
      const height = entry.borderBoxSize?.[0]?.blockSize || entry.contentRect?.height;
      if (height) {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          document.documentElement.style.setProperty(
            "--navbar-height",
            `${Math.round(height)}px`
          );
        });
      }
    });

    resizeObserver.observe(navbarRef.current);

    return () => {
      resizeObserver.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
    setMegaMenuOpen(false);
    setAboutMenuOpen(false);
  };

  return (
    <div className="sticky-navbar" ref={navbarRef}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <a
            href="tel:+919006543913"
            className="contact-link"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "click", {
                  event_category: "Contact",
                  event_label: "Navbar Top-bar Phone CTA",
                });
              }
            }}
          >
            <FaPhoneAlt style={{ marginRight: "6px" }} /> +91-9006543913
          </a>
          <span className="divider">|</span>
          <a href="mailto:info@maajankiwebtech.com" className="contact-link">
            <FaEnvelope style={{ marginRight: "6px" }} /> info@maajankiwebtech.com
          </a>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/company/maajanki-web-tech-company/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/maajankiwebtech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/maajankiwebtech/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/MaaJankiwebtech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://in.pinterest.com/maajankiweb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <FaPinterest />
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="main-nav">
        <div className="logo">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              priority
              src="/images/MaaJanki-Web-Tech-Logo.webp"
              alt="MaaJanki Web Tech logo – Digital Marketing and Website Development Agency in India"
              title="MaaJanki Web Tech | Digital Marketing & Web Development Agency"
              width={210}
              height={42}
              style={{ height: 'auto', width: 'auto' }}
            />
          </Link>
        </div>

        <div className="nav-right">
          {/* Quick CTA on Mobile Top Bar */}
          <Link href="/contact" className="mobile-top-cta" onClick={handleLinkClick}>
            Free Audit
          </Link>

          {/* Mobile Menu Toggle - Triggers Mobile App Drawer */}
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(new CustomEvent("toggle-mobile-drawer"));
              }
            }}
          >
            <FaBars />
          </button>

          <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            <li>
              <Link href="/" className={isActive("/") ? "active" : ""} aria-current={isActive("/") ? "page" : undefined} onClick={handleLinkClick}>
                HOME
              </Link>
            </li>

            {/* Mega Menu with Main Link */}
            <li
              className={`nav-item dropdown ${isMegaMenuOpen ? "open" : ""}`}
              onMouseEnter={() => {
                if (window.innerWidth > 991) setMegaMenuOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 991) setMegaMenuOpen(false);
              }}
            >
              <div className="services-link-wrapper">
                <Link
                  href="/services"
                  className={`nav-link ${isActive("/services") ? "active" : ""}`}
                  aria-current={isActive("/services") ? "page" : undefined}
                  onClick={(e) => {
                    if (window.innerWidth <= 991) {
                      e.preventDefault();
                      setMegaMenuOpen(!isMegaMenuOpen);
                    } else {
                      handleLinkClick();
                    }
                  }}
                  style={{ display: "inline-flex", alignItems: "center" }}
                >
                  OUR SERVICE{" "}
                  <FaChevronDown
                    style={{
                      fontSize: "10px",
                      marginLeft: "6px",
                      transition: "transform 0.2s ease",
                      transform: isMegaMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </Link>
              </div>

              {/* Dropdown */}
              <ul
                className={`dropdown-menu mega-dropdown p-4 ${isMegaMenuOpen ? "show" : ""}`}
              >
                <div className="row">
                  {/* Brand & Visual Identity */}
                  <div className="col-md-4">
                    <h6 className="fw-bold text-pink mb-2">
                      Brand & Visual Identity
                    </h6>
                    <Link
                      href="/services/branding"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Branding
                    </Link>
                    <Link
                      href="/services/graphic-design"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Graphic Design
                    </Link>
                    <Link
                      href="/services/ui-ux-design"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      UI/UX Design
                    </Link>
                  </div>

                  {/* Web & Content Solutions */}
                  <div className="col-md-4">
                    <h6 className="fw-bold text-pink mb-2">
                      Web & App Engineering
                    </h6>
                    <Link
                      href="/services/web-development"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/wordpress-development"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      WordPress Development
                    </Link>
                    <Link
                      href="/services/landing-page"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Landing Page Design
                    </Link>
                    <Link
                      href="/services/mobile-app-development"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      href="/services/content-writing"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Content Writing
                    </Link>
                    <Link
                      href="/services/products-listing"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      eCommerce Product Listing
                    </Link>
                  </div>

                  {/* Digital Marketing */}
                  <div className="col-md-4">
                    <h6 className="fw-bold text-pink mb-2">
                      Digital Marketing
                    </h6>
                    <Link
                      href="/services/seo"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      SEO
                    </Link>
                    <Link
                      href="/services/smo"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      SMO
                    </Link>
                    <Link
                      href="/services/performance-marketing"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Performance Marketing
                    </Link>
                  </div>
                </div>
              </ul>
            </li>

            <li>
              <Link href="/products" className={isActive("/products") ? "active" : ""} aria-current={isActive("/products") ? "page" : undefined} onClick={handleLinkClick}>
                PRODUCTS
              </Link>
            </li>

            <li>
              <Link href="/industries" className={isActive("/industries") ? "active" : ""} aria-current={isActive("/industries") ? "page" : undefined} onClick={handleLinkClick}>
                INDUSTRIES
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={isActive("/portfolio") ? "active" : ""} aria-current={isActive("/portfolio") ? "page" : undefined} onClick={handleLinkClick}>
                PORTFOLIO
              </Link>
            </li>
            {/* Issue #15: Consolidated About Us dropdown (was 3 separate items) */}
            <li
              className={`nav-item dropdown ${isAboutMenuOpen ? "open" : ""}`}
              onMouseEnter={() => {
                if (window.innerWidth > 991) setAboutMenuOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 991) setAboutMenuOpen(false);
              }}
            >
              <div className="services-link-wrapper">
                <Link
                  href="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                  aria-current={isActive("/about") ? "page" : undefined}
                  onClick={(e) => {
                    if (window.innerWidth <= 991) {
                      e.preventDefault();
                      setAboutMenuOpen(!isAboutMenuOpen);
                    } else {
                      handleLinkClick();
                    }
                  }}
                  style={{ display: "inline-flex", alignItems: "center" }}
                >
                  ABOUT US{" "}
                  <FaChevronDown
                    style={{
                      fontSize: "10px",
                      marginLeft: "6px",
                      transition: "transform 0.2s ease",
                      transform: isAboutMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </Link>
              </div>
              <ul className={`dropdown-menu about-dropdown p-2 ${isAboutMenuOpen ? "show" : ""}`}>
                <li>
                  <Link href="/about" className="dropdown-item" onClick={handleLinkClick}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/our-team" className="dropdown-item" onClick={handleLinkClick}>
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="dropdown-item" onClick={handleLinkClick}>
                    Careers
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" className={isActive("/contact") ? "active" : ""} aria-current={isActive("/contact") ? "page" : undefined} onClick={handleLinkClick}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
