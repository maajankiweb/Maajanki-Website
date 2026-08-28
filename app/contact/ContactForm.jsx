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
      const currentUrl = typeof window !== "undefined" ? window.location.href : "";
      const isLocationPage = typeof window !== "undefined" && window.location.pathname.includes("/locations/");
      const pageLocation = isLocationPage ? window.location.pathname.split("/").filter(Boolean).pop() : "";

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: isLocationPage ? `location-${pageLocation}` : "contact-page",
          url: currentUrl,
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
              <option key={s} value={s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
                {s}
              </option>
            ))}
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
