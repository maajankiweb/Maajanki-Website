"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaArrowRight
} from "react-icons/fa";
import "./FooterWithPopup.css";

const FooterWithPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    company: "", // honeypot spam protection
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => !loading && setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "name") newValue = value.slice(0, 30);
    if (name === "message") newValue = value.slice(0, 200);
    if (name === "phone") newValue = value.replace(/[^0-9]/g, "").slice(0, 10);

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam protection
    if (formData.company) return;

    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          source: "footer-popup",
          url: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Thank you! We will contact you soon.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          company: "",
        });

        closeModal();
      } else {
        alert(result.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Lead submission error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <footer className="mj-footer">
        {/* Pre-Footer Banner */}
        <div className="mj-footer-wrapper">
          <div className="mj-footer-left">
            <h3 className="mj-footer-title">
              Build. Grow. Elevate Your Brand.
            </h3>
            <p className="mj-footer-desc">
              Let&apos;s collaborate! Share your project details for a quick custom quote.
            </p>
          </div>

          <div className="mj-footer-right">
            <button className="mj-btn-primary" onClick={openModal}>
              Start Your Project <FaArrowRight style={{ marginLeft: "8px" }} />
            </button>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="mj-footer-main">
          <div className="mj-footer-grid">
            {/* Col 1: Brand & Trust */}
            <div className="mj-footer-col brand-col">
              <div className="footer-logo">
                <Link href="/">
                  <Image
                    src="/images/MaaJanki-Web-Tech-Logo.webp"
                    alt="MaaJanki Web Tech Logo"
                    title="MaaJanki Web Tech | Digital Marketing & Web Development Agency"
                    width={210}
                    height={42}
                    style={{ height: "auto", width: "auto" }}
                  />
                </Link>
              </div>
              <p className="brand-bio">
                MaaJanki Web Tech is India&apos;s leading digital transformation agency specializing in web development, SEO, software development, AI automation & digital marketing.
              </p>

              <div className="trust-badges">
                <div className="badge-item">
                  <FaShieldAlt className="badge-icon" />
                  <span>Udyam MSME: <strong>UDYAM-BR-38-0014113</strong></span>
                </div>
                <div className="badge-item">
                  <FaRocket className="badge-icon" />
                  <span>Startup India DPIIT Recognized</span>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=61577526895580" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Follow on Facebook"><FaFacebookF /></a>
                <a href="https://www.instagram.com/maajankiwebtech/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Follow on Instagram"><FaInstagram /></a>
                <a href="https://www.linkedin.com/company/maajanki-web-tech-company/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="Follow on LinkedIn"><FaLinkedinIn /></a>
                <a href="https://x.com/MaaJankweb" target="_blank" rel="noopener noreferrer" aria-label="Twitter X" title="Follow on Twitter X"><FaTwitter /></a>
                <a href="https://in.pinterest.com/maajankiweb/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" title="Follow on Pinterest"><FaPinterestP /></a>
                <a href="https://g.page/r/CdM4-zj2uGnQEB0" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" title="Google Business Profile"><FaYoutube /></a>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="mj-footer-col">
              <h4 className="col-heading">Our Services</h4>
              <ul className="footer-links">
                <li><Link href="/services/web-development">Web Development</Link></li>
                <li><Link href="/services/seo">SEO & AEO Strategy</Link></li>
                <li><Link href="/services/performance-marketing">Performance Marketing</Link></li>
                <li><Link href="/services/smo">Social Media Marketing</Link></li>
                <li><Link href="/services/ui-ux-design">UI/UX & Graphic Design</Link></li>
                <li><Link href="/services/branding">Branding & Identity</Link></li>
                <li><Link href="/services/content-writing">Content & Copywriting</Link></li>
                <li><Link href="/services/products-listing">Product Listing & E-commerce</Link></li>
              </ul>
            </div>

            {/* Col 3: Products & Company */}
            <div className="mj-footer-col">
              <h4 className="col-heading">Products & Company</h4>
              <ul className="footer-links">
                <li><Link href="/products/invobill">InvoBill Billing Software</Link></li>
                <li><Link href="/products/wacrm">WaCRM WhatsApp Marketing</Link></li>
                <li><Link href="/products/dukandost-pro">DukanDost Pro POS</Link></li>
                <li><Link href="/products/nexus-saas">Nexus SaaS Framework</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/reviews">Client Reviews</Link></li>
                <li><Link href="/industries">Industries Served</Link></li>
                <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Col 4: Contact & Locations */}
            <div className="mj-footer-col contact-col">
              <h4 className="col-heading">Contact & Offices</h4>
              <div className="contact-info">
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <strong>Headquarters (Bagaha):</strong>
                    <p>First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar, Bagaha, West Champaran, Bihar - 845101</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <strong>Bettiah Branch:</strong>
                    <p>Station Road, Near Supriya Cinema, Bettiah, West Champaran, Bihar - 845438</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaPhoneAlt className="info-icon" />
                  <div>
                    <strong>Phone:</strong>
                    <p><a href="tel:+919006543913">+91 90065 43913</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <strong>Email:</strong>
                    <p><a href="mailto:info@maajankiwebtech.com">info@maajankiwebtech.com</a></p>
                    <p><a href="mailto:maajankiweb@gmail.com">maajankiweb@gmail.com</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <FaClock className="info-icon" />
                  <div>
                    <strong>Working Hours:</strong>
                    <p>Mon - Sat: 10:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mj-footer-bottom">
            <div className="bottom-wrapper">
              <p className="copyright">
                © {new Date().getFullYear()} <strong>MaaJanki Web Tech</strong>. All Rights Reserved. Govt Registered Udyam MSME & DPIIT Startup.
              </p>
              <div className="location-tags">
                <span>Serving Clients In:</span>
                <Link href="/locations/bagaha">Bagaha</Link> •
                <Link href="/locations/bettiah">Bettiah</Link> •
                <Link href="/locations/patna">Patna</Link> •
                <Link href="/locations/delhi">Delhi</Link> •
                <Link href="/locations/bengaluru">Bengaluru</Link> •
                <Link href="/locations/united-states">USA</Link> •
                <Link href="/locations/united-kingdom">UK</Link> •
                <Link href="/locations/united-arab-emirates">UAE</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Lead Popup Modal */}
      {showModal && (
        <div className="mj-modal-overlay" onClick={closeModal}>
          <div className="mj-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="mj-modal-header">
              <h4 className="mj-modal-title">Let&apos;s Work Together</h4>
              <button
                className="mj-modal-close"
                onClick={closeModal}
                disabled={loading}
              >
                ✕
              </button>
            </div>

            <form className="mj-form" onSubmit={handleSubmit}>
              {/* Honeypot field — hidden from real users */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="mj-form-row">
                <div className="mj-form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Your Name *"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mj-form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Your Email *"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mj-form-row">
                <div className="mj-form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    placeholder="Phone Number *"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mj-form-group">
                  <label>Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Service</option>
                    {[
                      "AI Automation",
                      "WhatsApp Marketing & CRM",
                      "Software Development",
                      "SaaS Development",
                      "Application Development",
                      "Website Development",
                      "Custom Web Development",
                      "WordPress Development",
                      "Shopify Development",
                      "E-commerce Development",
                      "Web Design",
                      "UI/UX Design",
                      "Branding",
                      "Logo Design",
                      "Graphic Design",
                      "Digital Marketing",
                      "SEO",
                      "Local SEO",
                      "Technical SEO",
                      "SMO",
                      "Social Media Marketing",
                      "Performance Marketing",
                      "Google Ads",
                      "Meta Ads",
                      "Lead Generation",
                      "Email Marketing",
                      "WhatsApp Marketing",
                      "Content Writing",
                      "Copywriting",
                      "Product Listing",
                      "Marketplace Management",
                      "Video Editing",
                      "Motion Graphics",
                      "Business Consultation",
                      "Domain Registration",
                      "Web Hosting",
                      "Business Email Setup",
                      "Website Maintenance",
                      "Website Redesign",
                      "Speed Optimization",
                      "Cyber Security",
                      "Cloud Services",
                      "API Integration",
                      "CRM Development",
                      "ERP Development",
                      "Chatbot Development",
                      "AI Chatbot",
                      "Automation Solutions",
                      "Other",
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mj-form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="Tell us about your project..."
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="mj-btn-submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Now"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterWithPopup;
