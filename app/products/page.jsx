import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/Products.css';

export const metadata = {
  title: "SaaS Products & Digital Assets | MaaJanki Web Tech",
  description: "Explore ready-to-use SaaS solutions, developer templates, and digital assets engineered by MaaJanki Web Tech.",
  openGraph: {
    title: "SaaS Products & Digital Assets | MaaJanki Web Tech",
    description: "Explore ready-to-use SaaS solutions, developer templates, and digital assets engineered by MaaJanki Web Tech.",
    url: "https://maajankiwebtech.com/products",
    images: [{ url: "https://maajankiwebtech.com/assets/og-image.jpg" }],
  },
};

export default function ProductsPage() {
  const productsList = [
    {
      title: "InvoBill",
      tag: "SaaS Platform",
      badgeColor: "#FD6A02",
      badgeText: "Popular GST Tool",
      description: "A hybrid billing & invoicing platform tailored for Indian enterprises & MSMEs. Generate 100% tax-compliant GST invoices in under 60 seconds with live real-time PDF generation or native desktop app.",
      image: "/images/products/invobill.webp",
      link: "https://invobill.in/",
      external: true,
      buttonText: "Launch InvoBill",
      features: [
        "Instant GST Compliance & e-Way Bill Ready",
        "Multi-currency & Custom Taxation Rules",
        "Cloud Sync + Offline Windows Desktop App",
        "WhatsApp & Email Invoice Sharing"
      ]
    },
    {
      title: "WaCRM",
      tag: "Enterprise SaaS",
      badgeColor: "#25D366",
      badgeText: "Self-Hostable",
      description: "Self-hostable WhatsApp® Business API CRM. Empower your sales & support teams with a multi-agent shared inbox, automated tag segmentation, sales Kanban pipelines, and no-code AI chatbot router.",
      image: "/images/products/wacrm.webp",
      link: "/products/wacrm",
      external: false,
      buttonText: "Explore WaCRM",
      features: [
        "Multi-Agent Shared Team Inbox with Collision Prevention",
        "Automated Lead Tagging & Sales Kanban Pipeline",
        "Gemini, Claude & OpenAI No-Code AI Chatbot Router",
        "100% Data Ownership with Supabase Backend"
      ]
    },
    {
      title: "DukanDost Pro",
      tag: "Retail Business OS",
      badgeColor: "#3b82f6",
      badgeText: "Retail Favorite",
      description: "A full-stack Business Operating System engineered for modern retail stores & distributors. Replace legacy paper credit ledgers with AI invoicing, Digital Khata, and instant online storefront builder.",
      image: "/images/products/dukandost-pro.webp",
      link: "/products/dukandost-pro",
      external: false,
      buttonText: "Explore DukanDost Pro",
      features: [
        "Automated WhatsApp Credit Reminders & Khata",
        "AI Inventory Deductions & Low Stock Alerts",
        "1-Click Digital Storefront Creation",
        "Barcode Scanning & Thermal Receipt Printing"
      ]
    },
    {
      title: "Nexus SaaS",
      tag: "Reputation Platform",
      badgeColor: "#8b5cf6",
      badgeText: "AI Powered",
      description: "AI-driven local reputation management system. Connect directly with official Google Business Profile APIs for automated review retrieval, sentiment analytics, and multi-model AI auto-responses.",
      image: "/images/products/nexus-saas.webp",
      link: "/products/nexus-saas",
      external: false,
      buttonText: "Explore Nexus SaaS",
      features: [
        "Official Google Business Profile API Integration",
        "Multi-Model AI Review Auto-Replier (Gemini/OpenAI)",
        "Local SEO & Map Pack Rank Tracking",
        "Automated Review Request SMS/Email Campaigns"
      ]
    },
    {
      title: "Tailwind Templates",
      tag: "Developer Bundle",
      badgeColor: "#06b6d4",
      badgeText: "50+ Landing Pages",
      description: "An ultimate bundle of 50+ modern, fully responsive landing page templates built with HTML5 & Tailwind CSS. Engineered for rapid startup deployment and high-converting marketing campaigns.",
      image: "/images/products/tailwind-templates.webp",
      link: "/products",
      external: false,
      buttonText: "Explore Templates",
      features: [
        "50+ Ready-to-Deploy Responsive Landing Templates",
        "Tailwind CSS v3 + HTML5 Semantic Codebase",
        "SEO Optimized Layouts with Core Web Vitals < 95+",
        "Clean Component Architecture & Zero Dependencies"
      ]
    },
    {
      title: "Elementor Pro",
      tag: "WordPress Builder",
      badgeColor: "#ec4899",
      badgeText: "WordPress Preferred",
      description: "The world's leading drag-and-drop WordPress website builder. Build premium WooCommerce storefronts, dynamic popups, and custom themes without writing code.",
      image: "/images/products/elementor-pro.webp",
      link: "/products",
      external: false,
      buttonText: "Explore Elementor Pro",
      features: [
        "Intuitive Drag-and-Drop Visual Page Builder",
        "WooCommerce Custom Builder & Product Page Layouts",
        "300+ Premium Pro Kits & Section Templates",
        "Dynamic Motion Effects & Theme Builder Integration"
      ]
    }
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-inner">
          <div className="products-label-badge">
            <i className="fas fa-rocket"></i> Proprietary SaaS &amp; Software Suite
          </div>
          <h1>Software Built to Scale Your Business</h1>
          <p className="products-hero-desc">
            From automated GST billing and WhatsApp CRMs to AI reputation management—explore production-ready platforms engineered by MaaJanki Web Tech.
          </p>
        </div>
      </section>

      {/* Grid Showcase */}
      <section className="products-grid-section">
        <div className="products-grid-inner">
          <div className="row g-4">
            {productsList.map((product, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-12">
                <div className="product-card">
                  <div>
                    {/* Header Badges */}
                    <div className="product-card-header">
                      <span className="product-tag-badge">{product.tag}</span>
                      <span
                        className="product-status-badge"
                        style={{
                          background: `${product.badgeColor}20`,
                          border: `1px solid ${product.badgeColor}50`,
                          color: product.badgeColor,
                        }}
                      >
                        {product.badgeText}
                      </span>
                    </div>

                    {/* Preview Image */}
                    <div className="product-image-wrap">
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={350}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>

                    {/* Title & Description */}
                    <h2>{product.title}</h2>
                    <p className="product-card-desc">{product.description}</p>

                    {/* Key Features List */}
                    <div className="product-features">
                      <p className="product-features-label">Key Capabilities:</p>
                      <ul>
                        {product.features.map((feat, fIdx) => (
                          <li key={fIdx}>
                            <i className="fas fa-check-circle" aria-hidden="true"></i>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="product-card-actions">
                    {product.external ? (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-cta-btn"
                        aria-label={`Launch ${product.title} (opens in new tab)`}
                      >
                        <span>{product.buttonText}</span>
                        <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                      </a>
                    ) : (
                      <Link
                        href={product.link}
                        className="product-cta-btn"
                        aria-label={`Learn more about ${product.title}`}
                      >
                        <span>{product.buttonText}</span>
                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          </div>
  );
}
