'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    company: "", // honeypot spam protection
  });

  const searchParams = useSearchParams();
  const product = searchParams ? searchParams.get('product') : null;

  useEffect(() => {
    if (product) {
      setFormData(prev => ({
        ...prev,
        service: "software-saas-development",
        message: `I am interested in inquiring about your product: ${product}. Please provide more details.`
      }));
    }
  }, [product]);

  const [loading, setLoading] = useState(false);

  // Google Apps Script Web App URL
  const GOOGLE_SHEET_API =
    "https://script.google.com/macros/s/AKfycbw9GstFxV5fcwm3s8moNdPtDeOHSN_Wz0I6KAH0bipEiQyc6aDLZN1bBo278XR_q52XnA/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Spam protection
    if (formData.company) return;

    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "contact-page"
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          company: "",
        });
      } else {
        toast.error(result.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-us-form">
      <ToastContainer position="top-right" autoClose={3000} />
      <h4>Ready to get started?</h4>
      <form onSubmit={handleSubmit}>
        {/* Honeypot field (hidden from users, filled by bots) */}
        <div style={{ display: "none" }}>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="phone"
            className="form-control"
            placeholder="Your Phone Number *"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <select
            name="service"
            className="form-control"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Service --</option>
            <option value="ai-automation">AI Automation</option>
            <option value="whatsapp-marketing-crm">WhatsApp Marketing & CRM</option>
            <option value="software-saas-development">Software & SaaS Development</option>
            <option value="application-development">Application Development</option>
            <option value="website-development">Website Development</option>
            <option value="web-design">Web Design</option>
            <option value="branding">Branding</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="ui-ux-design">UI/UX Design</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="performance-marketing">Performance Marketing</option>
            <option value="seo">SEO</option>
            <option value="smo">SMO</option>
            <option value="social-media-marketing">Social Media Marketing</option>
            <option value="google-ads">Google Ads</option>
            <option value="meta-ads">Meta Ads</option>
            <option value="content-writing">Content Writing</option>
            <option value="product-listing">Product Listing</option>
            <option value="ecommerce-development">eCommerce Development</option>
            <option value="wordpress-development">WordPress Development</option>
            <option value="shopify-development">Shopify Development</option>
            <option value="custom-web-development">Custom Web Development</option>
            <option value="video-editing">Video Editing</option>
            <option value="website-maintenance">Website Maintenance</option>
            <option value="hosting-domain">Domain & Hosting Services</option>
            <option value="business-email">Business Email Setup</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Enter your message *"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
