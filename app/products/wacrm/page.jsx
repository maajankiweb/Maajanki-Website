import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/FooterWithPopup';
import '@/app/styles/Products.css';

export const metadata = {
  title: "WaCRM – Self-Hostable WhatsApp Business API CRM | MaaJanki Web Tech",
  description: "WaCRM is a self-hostable WhatsApp Business API CRM featuring multi-agent shared inbox, automated tag segmentation, sales Kanban pipelines, and no-code AI chatbot router integration.",
  openGraph: {
    title: "WaCRM – Self-Hostable WhatsApp Business API CRM",
    description: "Multi-agent shared inbox, Supabase Postgres backend, AI chatbot router, and zero recurring subscription fees.",
    url: "https://maajankiwebtech.com/products/wacrm",
    images: [{ url: "https://maajankiwebtech.com/images/products/wacrm.webp" }],
  },
};

export default function WaCRMPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "WaCRM",
    "operatingSystem": "Web, Self-Hosted",
    "applicationCategory": "BusinessApplication",
    "description": "Self-hostable WhatsApp Business API CRM with multi-agent inbox, sales Kanban, and AI chatbot integration.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      {/* Product Hero */}
      <section className="products-hero-section" style={{ background: "linear-gradient(135deg, #042544 0%, #0f172a 100%)", color: "#fff", padding: "80px 0 60px" }}>
        <div className="container text-center">
          <span className="products-badge mb-3" style={{ background: "#FD6A02", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "600" }}>
            SaaS Product Overview
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", marginTop: "16px", marginBottom: "16px" }}>
            WaCRM – Self-Hostable WhatsApp® Business API CRM
          </h1>
          <p style={{ maxWidth: "750px", margin: "0 auto 30px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.6" }}>
            Empower your sales and customer support teams with a multi-agent shared inbox, automated lead segmentation, sales Kanban pipelines, and zero monthly subscription fees.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/contact?product=WaCRM" className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "12px 30px", borderRadius: "30px", fontWeight: "600" }}>
              Request Live Demo <i className="fas fa-arrow-right ms-2"></i>
            </Link>
            <Link href="/products" className="btn-outline-mj" style={{ border: "1px solid #FD6A02", color: "#FD6A02", padding: "12px 30px", borderRadius: "30px", fontWeight: "600" }}>
              All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-5" style={{ background: "#020617", color: "#f8fafc" }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="p-3 rounded" style={{ background: "#0f172a", border: "1px solid #1e293b" }}>
                <Image
                  src="/images/products/wacrm.webp"
                  alt="WaCRM Dashboard Preview"
                  width={700}
                  height={450}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 style={{ color: "#FD6A02", fontWeight: "700", marginBottom: "20px" }}>
                Key Architecture & Capabilities
              </h2>
              <ul className="list-unstyled" style={{ fontSize: "16px", lineHeight: "2" }}>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Multi-Agent Shared Inbox:</strong> Assign conversations to sales reps with real-time collision detection.</li>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Self-Hostable:</strong> Full data privacy with Supabase Postgres DB & Auth integration.</li>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Visual Theme Engine:</strong> 5 built-in theme presets including Glassmorphism and Luxury Dark.</li>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>No-Code AI Chatbot Router:</strong> Connect Gemini, OpenAI, or Claude for 24/7 automated lead qualification.</li>
              </ul>
              <div className="mt-4">
                <Link href="/contact?product=WaCRM" className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "10px 24px", borderRadius: "24px" }}>
                  Schedule Agent Setup Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
