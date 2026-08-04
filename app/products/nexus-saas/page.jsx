import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/FooterWithPopup';

export const metadata = {
  title: "Nexus SaaS – AI Google Business Profile Reputation System | MaaJanki Web Tech",
  description: "Nexus SaaS is an AI-powered local reputation management system that integrates directly with official Google Business Profile APIs for real-time review retrieval, sentiment analysis, and multi-model AI auto-replies.",
  openGraph: {
    title: "Nexus SaaS – AI Google Business Profile Reputation System",
    description: "Official GBP API integration, Gemini/Claude/OpenAI multi-model auto-responses, and sentiment monitoring.",
    url: "https://maajankiwebtech.com/products/nexus-saas",
    images: [{ url: "https://maajankiwebtech.com/images/products/nexus-saas.webp" }],
  },
};

export default function NexusSaaSPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Nexus SaaS",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "description": "AI-powered local reputation management system integrating with official Google Business Profile API.",
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
            Reputation Management Platform
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", marginTop: "16px", marginBottom: "16px" }}>
            Nexus SaaS – AI Reputation & Review Automation
          </h1>
          <p style={{ maxWidth: "750px", margin: "0 auto 30px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.6" }}>
            Automate customer review management and boost your Google Maps local pack rankings. Official Google Business Profile API integration with multi-model AI auto-reply generation.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/contact?product=Nexus%20SaaS" className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "12px 30px", borderRadius: "30px", fontWeight: "600" }}>
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
                  src="/images/products/nexus-saas.webp"
                  alt="Nexus SaaS Dashboard Preview"
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
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Official Google Business Profile API:</strong> Direct real-time sync of reviews across multi-location business profiles.</li>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Multi-Model AI Response Drafts:</strong> Choose between Gemini 1.5, Claude 3.5, Grok, or OpenAI models.</li>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Automated Sentiment Analysis:</strong> Instant tagging of positive, neutral, and critical feedback.</li>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Smart Escalation Rules:</strong> Low-star rating alerts automatically route to internal management before publishing.</li>
              </ul>
              <div className="mt-4">
                <Link href="/contact?product=Nexus%20SaaS" className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "10px 24px", borderRadius: "24px" }}>
                  Schedule GBP Demo
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
