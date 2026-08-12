'use client';

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Link from "next/link";
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
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    if (!navbarRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const height = entry.target.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`
        );
      }
    });

    resizeObserver.observe(navbarRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

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
          <Link href="/">
            <Image priority src="/images/MaaJanki-Web-Tech-Logo.webp" alt="MaaJanki Web Tech logo – Digital Marketing and Website Development Agency in India" title="MaaJanki Web Tech | Digital Marketing & Web Development Agency" width={200} height={80} style={{ height: 'auto', width: 'auto' }} />
          </Link>
        </div>

        <div className="nav-right">
          {/* Mobile Menu Toggle */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>

            {/* Mega Menu with Main Link */}
            <li
              className="nav-item dropdown"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              {/* Main “OUR SERVICE” link */}
              <Link
                href="/services"
                className="nav-link"
                onClick={() => {
                  setMenuOpen(false);
                  setMegaMenuOpen(false);
                }}
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                OUR SERVICE <FaChevronDown style={{ fontSize: "10px", marginLeft: "6px" }} />
              </Link>

              {/* Dropdown */}
              <ul
                className={`dropdown-menu mega-dropdown p-4 ${isMegaMenuOpen ? "show" : ""
                  }`}
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
                      onClick={() => setMenuOpen(false)}
                    >
                      Branding
                    </Link>
                    <Link
                      href="/services/graphic-design"
                      className="dropdown-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      Graphic Design
                    </Link>
                    <Link
                      href="/services/ui-ux-design"
                      className="dropdown-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      UI/UX Design
                    </Link>
                  </div>

                  {/* Web & Content Solutions */}
                  <div className="col-md-4">
                    <h6 className="fw-bold text-pink mb-2">
                      Web & Content Solutions
                    </h6>
                    <Link
                      href="/services/web-development"
                      className="dropdown-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      Web Development
                    </Link>
                    <Link
                      href="/services/content-writing"
                      className="dropdown-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      Content Writing
                    </Link>
                    <Link
                      href="/services/products-listing"
                      className="dropdown-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      Products Listing
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
                      onClick={() => setMenuOpen(false)}
                    >
                      SEO
                    </Link>
                    <Link
                      href="/services/smo"
                      className="dropdown-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      SMO
                    </Link>
                    <Link
                      href="/services/performance-marketing"
                      className="dropdown-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      Performance Marketing
                    </Link>
                  </div>
                </div>
              </ul>
            </li>

            <li>
              <Link href="/products" onClick={() => setMenuOpen(false)}>
                PRODUCTS
              </Link>
            </li>

            <li>
              <Link href="/industries" onClick={() => setMenuOpen(false)}>
                INDUSTRIES
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
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
