"use client";

import React, { useState } from "react";
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
  });

  // Google Apps Script Web App URL
  const GOOGLE_SHEET_API =
    "https://script.google.com/macros/s/AKfycbyh3EGN-3ZQLOe1ECaGhlAAzhyPbJ0I_lmNKXMQIrGW-z0qsCuvd6WZc87-GsnfJ5ih/exec";

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
    setLoading(true);

    try {
      // Use x-www-form-urlencoded to avoid CORS preflight issues
      const formBody = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        source: "Footer Popup",
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      }).toString();

      const response = await fetch(GOOGLE_SHEET_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      const text = await response.text();
      let result = { success: false };

      try {
        result = JSON.parse(text);
      } catch (err) {
        console.warn("Could not parse JSON:", err);
      }

      if (!result.success) {
        alert(result.message || "Submission failed. Please try again.");
        return;
      }

      alert("Thank you! We will contact you soon.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      closeModal();
    } catch (error) {
      console.error("Google Sheet Error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <footer className="mj-footer">
        <div className="mj-footer-banner-card">
          <div className="mj-footer-wrapper">
            <div className="mj-footer-left">
              <h3 className="mj-footer-title">
                Build. Grow. Elevate Your Brand.
              </h3>
              <p className="mj-footer-desc">
                Let&apos;s collaborate! Share your project details for a quick quote.
              </p>
            </div>

            <div className="mj-footer-right">
              <button className="mj-btn-primary" onClick={openModal}>
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </footer>

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
                      "Graphics Design",
                      "Digital Marketing",
                      "SEO",
                      "Local SEO",
                      "SMO",
                      "Technical SEO",
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
