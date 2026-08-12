"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaAngleRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaWhatsapp,
  FaChevronUp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowButton(true);
      else setShowButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-container">
        {/* LOGO + SOCIAL */}
        <div className="footer-col">
          <h2 className="footer-logo">MaaJanki Web Tech</h2>
          <p>Follow us on</p>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/maajanki-web-tech-company/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577526895580"
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
              aria-label="Twitter / X"
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
            <a
              href="https://www.youtube.com/@Akwebmasterhub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>

          {/* Review Badges */}
          <div className="review-badges">
            <a
              href="https://g.page/r/CVvMyeoY0y0XEAE/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/google-review.webp"
                alt="Google Reviews - MaaJanki Web Tech"
                width={180}
                height={81}
              />
            </a>
            <a
              href="https://www.trustpilot.com/review/maajankiwebtech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/trustpilot.png"
                alt="Trustpilot Reviews - MaaJanki Web Tech"
                width={180}
                height={37}
              />
            </a>
          </div>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h3>COMPANY</h3>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/industries">Industries</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/locations">Locations</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <a
                href="https://blog.maajankiwebtech.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>
              <Link href="/services/web-development">Website Development</Link>
            </li>
            <li>
              <Link href="/services/seo">SEO</Link>
            </li>
            <li>
              <Link href="/services/smo">SMO</Link>
            </li>
            <li>
              <Link href="/services/branding">Branding</Link>
            </li>
            <li>
              <Link href="/services/graphic-design">Graphic Design</Link>
            </li>
            <li>
              <Link href="/services/ui-ux-design">UI/UX Design</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>
              <FaMapMarkerAlt className="footer-icon" />
              <span>Brajmala Complex, First Floor, Near Cinema House, Building of UCO Bank, Bagaha Bazar, West Champaran, Bihar - 845101</span>
            </li>
            <li>
              <FaEnvelope className="footer-icon" />
              <a href="mailto:info@maajankiwebtech.com">
                info@maajankiwebtech.com
              </a>
            </li>
            <li>
              <FaPhoneAlt className="footer-icon" />
              <a
                href="tel:+919006543913"
                onClick={() => {
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "click", {
                      event_category: "Contact",
                      event_label: "Footer Phone 1 CTA",
                    });
                  }
                }}
              >
                (+91) 9006543913
              </a>
            </li>
            <li>
              <FaPhoneAlt className="footer-icon" />
              <a
                href="tel:+919471273041"
                onClick={() => {
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "click", {
                      event_category: "Contact",
                      event_label: "Footer Phone 2 CTA",
                    });
                  }
                }}
              >
                (+91) 9471273041
              </a>
            </li>
            <li>
              <FaClock className="footer-icon" />
              <span>Mon–Sat: 10:00 AM – 6:00 PM IST</span>
            </li>
          </ul>
        </div>

        {/* VERIFIED BADGES */}
        <div className="footer-col footer-badges">
          <h3>Official Verified Badges</h3>
          <div className="badge-list">
            <div className="badge-item">
              <Image
                src="/images/msme-certificate.png"
                alt="MSME Registration Certificate - MaaJanki Web Tech"
                title="MSME Registered Company – MaaJanki Web Tech"
                width={55}
                height={20}
              />
              <span>MSME Registered</span>
            </div>
            <div className="badge-item">
              <Image
                src="/images/startup-india.webp"
                alt="Startup India DPIIT Certificate - MaaJanki Web Tech"
                title="Startup India Certified – MaaJanki Web Tech"
                width={55}
                height={41}
              />
              <span>Startup India Certified</span>
            </div>
            <div className="badge-item">
              <Image
                src="/images/udyam-certificate.png"
                alt="Udyam Registration Certificate - MaaJanki Web Tech"
                title="Udyam Registered MSME – MaaJanki Web Tech"
                width={55}
                height={43}
              />
              <span>Udyam Certificate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="footer-container-links">
        <ul className="footer-links">
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-conditions">Terms & Conditions</Link>
          </li>
        </ul>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {currentYear} <span>MaaJanki Web Tech</span> | All Rights Reserved
      </div>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <a
          href="https://wa.me/919006543913?text=Hi%20MaaJanki%20Web%20Tech,%20inquiring%20about%20your%20services.%20(Source:%20WhatsApp%20Floating%20CTA)"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn float-whatsapp"
          aria-label="WhatsApp"
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "click", {
                event_category: "Contact",
                event_label: "WhatsApp Floating CTA",
              });
            }
          }}
        >
          <FaWhatsapp />
        </a>
        <a
          href="tel:+919006543913"
          className="float-btn float-call"
          aria-label="Call us"
          onClick={() => {
            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "click", {
                event_category: "Contact",
                event_label: "Call Floating CTA",
              });
            }
          }}
        >
          <FaPhoneAlt />
        </a>
      </div>

      {/* Scroll to Top */}
      {showButton && (
        <button
          className="scroll-top scroll-to-target"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaChevronUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;