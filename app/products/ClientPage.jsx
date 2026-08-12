'use client';

import React, { useState } from "react";
import Image from 'next/image';

import Link from 'next/link';
import '@/app/styles/Products.css';

const Products = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", "SaaS Products", "Digital Assets", "Templates", "WordPress Plugins"];

  const productsList = [
    {
      id: 7,
      title: "InvoBill",
      category: "SaaS Products",
      tag: "SaaS",
      badgeClass: "saas-badge",
      description: "A hybrid billing platform for Indian businesses. Design tax-compliant GST invoices in 60 seconds online with live preview, or use the robust offline Windows desktop application to track inventory, customers, and generate unlimited invoices without internet connection.",
      image: "/images/products/invobill.webp",
      highlights: [
        "Create GST Invoices in 60 Seconds",
        "Online Maker with Live Preview & PDF Download",
        "Offline Windows Desktop Billing App",
        "Unlimited Invoices & Inventory Management"
      ],
      demoLink: "https://invobill.in/",
      downloadLink: "https://invobill.in/download",
      features: "Best for Retailers, Freelancers & SMBs"
    },
    {
      id: 8,
      title: "WaCRM",
      category: "SaaS Products",
      tag: "SaaS",
      badgeClass: "saas-badge",
      description: "A premium, fully self-hostable WhatsApp® Business API CRM. Featuring a multi-agent shared inbox, automated tag segmentation, sales Kanban pipelines, custom AI router integration, and custom website chat widgets with zero subscription fees.",
      image: "/images/products/wacrm.webp",
      highlights: [
        "Multi-Agent Shared Inbox (Real-time Collaborator)",
        "Self-Hostable with Supabase Postgres DB & Auth",
        "5 Widget Theme Presets (Glassmorphism & Gold)",
        "No-Code AI Chatbot Router Integration"
      ],
      demoLink: "https://github.com/Ashishkrji/WaCRM",
      features: "Self-Hostable • Unlimited Agents & Numbers"
    },
    {
      id: 9,
      title: "DukanDost Pro",
      category: "SaaS Products",
      tag: "SaaS",
      badgeClass: "saas-badge",
      description: "A premium full-stack Business Operating System designed for modern retail. Replace legacy credit-ledger tools with a unified, AI-powered workspace featuring automatic stock deduction, e-invoice generation, smart digital credit ledger (Khata) with automated reminders, and your own Razorpay-integrated Digital Dukan e-commerce storefront.",
      image: "/images/products/dukandost-pro.webp",
      highlights: [
        "AI Assistant Agent (Handles DB Operations via Text)",
        "Smart Invoicing & Inventory (GST, IRN/QR E-Invoice)",
        "Digital Khata & Automated WhatsApp Credit Reminders",
        "Razorpay-Integrated Online Digital Storefront Builder"
      ],
      demoLink: "https://github.com/Ashishkrji/DukanDost-Pro-Website-Mobile-App",
      features: "Best for Modern Retailers, Kirana Stores & Distributors"
    },
    {
      id: 10,
      title: "Nexus SaaS",
      category: "SaaS Products",
      tag: "SaaS",
      badgeClass: "saas-badge",
      description: "An AI-powered local reputation management system. Integrates with the official Google Business Profile API to automatically retrieve reviews in real-time, analyze sentiment, and draft customized, context-aware responses using multiple AI models (Gemini, Claude, Grok, and OpenAI). Includes smart moderation rules for low-rating escalation.",
      image: "/images/products/nexus-saas.webp",
      highlights: [
        "Official Google Business Profile API Integration",
        "Multi-Model AI Support (Gemini, Claude, Grok, OpenAI)",
        "Automated Sentiment Analysis & Contextual Replies",
        "Smart Escalation & Manual Moderation Rules"
      ],
      demoLink: "https://github.com/Ashishkrji/Nexus-SaaS",
      features: "Best for Local Businesses, Multi-Location Brands & Agencies"
    },
    {
      id: 11,
      title: "50+ Premium HTML5 & Tailwind CSS Landing Pages",
      category: "Templates",
      tag: "Template",
      badgeClass: "template-badge",
      description: "An ultimate bundle of 50+ modern, fully responsive landing page templates built with HTML5 & Tailwind CSS. Designed specifically for SaaS startups, mobile apps, personal portfolios, digital agencies, and local services. Coded in lightweight, SEO-friendly, and fully customizable semantics.",
      image: "/images/products/tailwind-templates.webp",
      highlights: [
        "50+ Clean HTML5 & Tailwind Layouts",
        "Fully Mobile-Responsive & Retina-Ready",
        "Optimized for High PageSpeed & Core Web Vitals",
        "Well-Commented & Clean Codebase"
      ],
      demoLink: "#",
      features: "Best for Startups, Developers & Web Agencies"
    },
    {
      id: 12,
      title: "Elementor Pro - WordPress Page Builder Plugin",
      category: "WordPress Plugins",
      tag: "Plugin",
      badgeClass: "plugin-badge",
      description: "The world's leading drag-and-drop WordPress website builder. Edit templates visually in real-time, customize headers & footers with the theme builder, access 100+ professional widgets, and build premium WooCommerce storefronts with ease.",
      image: "/images/products/elementor-pro.webp",
      highlights: [
        "Visual Drag-and-Drop Editor",
        "Theme Builder (Headers, Footers & Archives)",
        "100+ Pro Widgets & Templates",
        "Full WooCommerce Builder Integration"
      ],
      demoLink: "#",
      features: "Best for WordPress Designers & Web Agencies"
    }
  ];

  const filteredProducts = activeTab === "All"
    ? productsList
    : productsList.filter(p => p.category === activeTab);

  return (
    <>
      

      {/* Hero Section */}
      <section className="products-hero-section">
        <div className="container">
          <div className="products-hero-content text-center">
            <span className="products-badge">Product Showcase</span>
            <h1>SaaS Products & Digital Assets</h1>
            <p>
              Accelerate your engineering and marketing workflows with our premium ready-to-use SaaS solutions, developer templates, and visual design assets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="products-showcase-section">
        <div className="container">
          
          {/* Categories Tab Filter */}
          <div className="products-tabs">
            {categories.map((tab, idx) => (
              <button
                key={idx}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <span className={`product-tag ${product.badgeClass}`}>{product.tag}</span>
                <div className="product-image-container">
                  <Image
                    src={product.image || '/images/MaaJanki-Web-Tech-Logo.webp'}
                    alt={product.title}
                    title={`${product.title} - Developed by MaaJanki Web Tech`}
                    loading="lazy"
                   width={600} height={400} />
                  <div className="product-image-overlay">
                    <span className="use-case-tag">{product.features}</span>
                  </div>
                </div>

                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc">{product.description}</p>
                  
                  <div className="product-highlights-box">
                    <h5 className="highlights-title">Key Highlights:</h5>
                    <ul className="product-highlights">
                      {product.highlights.map((h, index) => (
                        <li key={index}>
                          <i className="fas fa-check"></i> {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="product-actions">
                    {product.demoLink && product.demoLink !== "#" ? (
                      <a
                        href={product.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo-btn"
                      >
                        Live Demo <i className="fas fa-external-link-alt"></i>
                      </a>
                    ) : (
                      <button
                        className="demo-btn"
                        disabled
                        style={{ opacity: 0.5, cursor: "not-allowed" }}
                      >
                        Coming Soon <i className="fas fa-clock"></i>
                      </button>
                    )}
                    {product.downloadLink ? (
                      <a
                        href={product.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                      >
                        Download App <i className="fas fa-download"></i>
                      </a>
                    ) : (
                      <Link href={`/contact?product=${encodeURIComponent(product.title)}`}
                        className="inquire-btn"
                      >
                        Inquire Now <i className="fas fa-paper-plane"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

          </>
  );
};

export default Products;
