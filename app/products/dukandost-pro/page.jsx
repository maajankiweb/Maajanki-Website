import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/FooterWithPopup';
import '@/app/styles/Products.css';

export const metadata = {
  title: "DukanDost Pro – Retail Business Operating System | MaaJanki Web Tech",
  description: "DukanDost Pro is a modern full-stack business operating system for modern retail, kirana stores, and distributors featuring smart GST invoicing, inventory, digital credit ledger (Khata), and online e-commerce storefront builder.",
  openGraph: {
    title: "DukanDost Pro – Retail Business Operating System",
    description: "AI-powered inventory, GST invoicing, automated credit reminders, and online Digital Dukan storefront.",
    url: "https://maajankiwebtech.com/products/dukandost-pro",
    images: [{ url: "https://maajankiwebtech.com/images/products/dukandost-pro.webp" }],
  },
};

export default function DukanDostProPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DukanDost Pro",
    "operatingSystem": "Web, Mobile",
    "applicationCategory": "BusinessApplication",
    "description": "Full-stack Business Operating System for modern retail with AI invoicing and Digital Khata.",
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
            Retail OS Overview
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", marginTop: "16px", marginBottom: "16px" }}>
            DukanDost Pro – Business Operating System for Retail
          </h1>
          <p style={{ maxWidth: "750px", margin: "0 auto 30px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.6" }}>
            Replace legacy paper ledgers with an AI-powered retail management workspace. Smart GST invoicing, automated stock deductions, automated WhatsApp credit reminders, and custom online storefronts.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/contact?product=DukanDost%20Pro" className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "12px 30px", borderRadius: "30px", fontWeight: "600" }}>
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
                  src="/images/products/dukandost-pro.webp"
                  alt="DukanDost Pro Interface Preview"
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
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>AI Assistant Agent:</strong> Execute database lookups and stock queries via natural language text commands.</li>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Smart Invoicing & Inventory:</strong> Generate IRN/QR e-invoices with automatic stock sync.</li>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Digital Khata & WhatsApp Reminders:</strong> Track credit balances and dispatch automatic repayment links.</li>
                <li><i className="fas fa-check-circle text-warning me-2"></i> <strong>Razorpay Online Storefront:</strong> Launch your digital store in 5 minutes with integrated online payments.</li>
              </ul>
              <div className="mt-4">
                <Link href="/contact?product=DukanDost%20Pro" className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "10px 24px", borderRadius: "24px" }}>
                  Schedule Retail Consultation
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
