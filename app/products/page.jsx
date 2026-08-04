import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/FooterWithPopup';

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
  ];

  return (
    <div style={{ background: "#020617", minHeight: "100vh", color: "#f8fafc" }}>
      {/* Hero Section */}
      <section style={{ 
        background: "radial-gradient(circle at 50% 0%, rgba(253, 106, 2, 0.15) 0%, rgba(4, 37, 68, 0.8) 50%, #020617 100%)", 
        padding: "100px 20px 80px", 
        borderBottom: "1px solid #1e293b" 
      }}>
        <div className="container text-center" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(253, 106, 2, 0.1)",
            border: "1px solid rgba(253, 106, 2, 0.3)",
            padding: "8px 20px",
            borderRadius: "30px",
            color: "#FD6A02",
            fontWeight: "600",
            fontSize: "14px",
            marginBottom: "24px"
          }}>
            <i className="fas fa-rocket"></i> Proprietary SaaS & Software Suite
          </div>
          <h1 style={{ 
            fontSize: "clamp(36px, 5vw, 56px)", 
            fontWeight: "800", 
            letterSpacing: "-0.02em", 
            lineHeight: "1.15", 
            marginBottom: "20px",
            color: "#ffffff"
          }}>
            Software Built to Scale Your Business
          </h1>
          <p style={{ 
            fontSize: "clamp(16px, 2vw, 19px)", 
            color: "#94a3b8", 
            lineHeight: "1.6", 
            maxWidth: "750px", 
            margin: "0 auto 36px" 
          }}>
            From automated GST billing and WhatsApp CRMs to AI reputation management—explore production-ready platforms engineered by MaaJanki Web Tech.
          </p>
        </div>
      </section>

      {/* Grid Showcase */}
      <section style={{ padding: "80px 20px" }}>
        <div className="container" style={{ maxWidth: "1240px", margin: "0 auto" }}>
          <div className="row g-4">
            {productsList.map((product, idx) => (
              <div key={idx} className="col-lg-6">
                <div style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid #1e293b",
                  borderRadius: "20px",
                  padding: "32px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
                }}>
                  <div>
                    {/* Header Badges */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                      <span style={{
                        background: "rgba(30, 41, 59, 0.8)",
                        border: "1px solid #334155",
                        color: "#cbd5e1",
                        fontSize: "13px",
                        fontWeight: "600",
                        padding: "4px 14px",
                        borderRadius: "12px"
                      }}>
                        {product.tag}
                      </span>
                      <span style={{
                        background: `${product.badgeColor}20`,
                        border: `1px solid ${product.badgeColor}50`,
                        color: product.badgeColor,
                        fontSize: "12px",
                        fontWeight: "700",
                        padding: "4px 12px",
                        borderRadius: "20px"
                      }}>
                        {product.badgeText}
                      </span>
                    </div>

                    {/* Preview Image */}
                    <div style={{ 
                      borderRadius: "14px", 
                      overflow: "hidden", 
                      marginBottom: "24px", 
                      border: "1px solid #1e293b",
                      position: "relative",
                      background: "#020617"
                    }}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={600}
                        height={350}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>

                    {/* Title & Description */}
                    <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#ffffff", marginBottom: "12px" }}>
                      {product.title}
                    </h2>
                    <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
                      {product.description}
                    </p>

                    {/* Key Features List */}
                    <div style={{ marginBottom: "30px" }}>
                      <h3 style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.05em", color: "#FD6A02", fontWeight: "700", marginBottom: "12px" }}>
                        Key Capabilities:
                      </h3>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {product.features.map((feat, fIdx) => (
                          <li key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#cbd5e1", fontSize: "14px", marginBottom: "8px", lineHeight: "1.4" }}>
                            <i className="fas fa-check-circle" style={{ color: "#FD6A02", marginTop: "3px", flexShrink: 0 }}></i>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ paddingTop: "20px", borderTop: "1px solid #1e293b" }}>
                    {product.external ? (
                      <a 
                        href={product.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ 
                          background: "#FD6A02", 
                          color: "#ffffff", 
                          padding: "14px 28px", 
                          borderRadius: "14px", 
                          fontWeight: "600", 
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          width: "100%",
                          textDecoration: "none",
                          fontSize: "15px"
                        }}
                      >
                        <span>{product.buttonText}</span>
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    ) : (
                      <Link 
                        href={product.link} 
                        style={{ 
                          background: "#FD6A02", 
                          color: "#ffffff", 
                          padding: "14px 28px", 
                          borderRadius: "14px", 
                          fontWeight: "600", 
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          width: "100%",
                          textDecoration: "none",
                          fontSize: "15px"
                        }}
                      >
                        <span>{product.buttonText}</span>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
