import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/FooterWithPopup';
import '@/app/styles/Products.css';

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
      tag: "SaaS",
      description: "A hybrid billing platform for Indian businesses. Design tax-compliant GST invoices in 60 seconds online with live preview, or use the robust offline Windows desktop application.",
      image: "/images/products/invobill.webp",
      link: "https://invobill.in/",
      external: true,
      buttonText: "Visit InvoBill",
    },
    {
      title: "WaCRM",
      tag: "SaaS",
      description: "A premium, fully self-hostable WhatsApp® Business API CRM. Featuring a multi-agent shared inbox, automated tag segmentation, sales Kanban pipelines, and AI router integration.",
      image: "/images/products/wacrm.webp",
      link: "/products/wacrm",
      external: false,
      buttonText: "Explore WaCRM",
    },
    {
      title: "DukanDost Pro",
      tag: "SaaS",
      description: "A premium full-stack Business Operating System designed for modern retail. Replace legacy credit-ledger tools with unified AI invoicing, digital Khata, and online storefront builder.",
      image: "/images/products/dukandost-pro.webp",
      link: "/products/dukandost-pro",
      external: false,
      buttonText: "Explore DukanDost Pro",
    },
    {
      title: "Nexus SaaS",
      tag: "SaaS",
      description: "An AI-powered local reputation management system. Integrates with official Google Business Profile API for real-time review retrieval and multi-model AI responses.",
      image: "/images/products/nexus-saas.webp",
      link: "/products/nexus-saas",
      external: false,
      buttonText: "Explore Nexus SaaS",
    },
  ];

  return (
    <>
      <section className="products-hero-section" style={{ background: "linear-gradient(135deg, #042544 0%, #0f172a 100%)", color: "#fff", padding: "80px 0 60px" }}>
        <div className="container text-center">
          <span className="products-badge mb-3" style={{ background: "#FD6A02", color: "#fff", padding: "6px 16px", borderRadius: "20px", fontSize: "14px", fontWeight: "600" }}>
            Product Showcase
          </span>
          <h1 style={{ fontSize: "42px", fontWeight: "800", marginTop: "16px", marginBottom: "16px" }}>
            SaaS Products & Digital Assets
          </h1>
          <p style={{ maxWidth: "750px", margin: "0 auto 30px", fontSize: "18px", color: "#cbd5e1", lineHeight: "1.6" }}>
            Accelerate your engineering and business operations with our ready-to-use SaaS platforms and business software.
          </p>
        </div>
      </section>

      <section className="py-5" style={{ background: "#020617", color: "#fff" }}>
        <div className="container">
          <div className="row g-4">
            {productsList.map((product, idx) => (
              <div key={idx} className="col-lg-6">
                <div className="p-4 rounded h-100 d-flex flex-column" style={{ background: "#0f172a", border: "1px solid #1e293b" }}>
                  <div className="mb-3">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={600}
                      height={350}
                      style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                    />
                  </div>
                  <h3 style={{ color: "#FD6A02", fontWeight: "700" }}>{product.title}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "15px", flexGrow: 1 }}>{product.description}</p>
                  <div className="mt-3">
                    {product.external ? (
                      <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "8px 20px", borderRadius: "20px", display: "inline-block" }}>
                        {product.buttonText} <i className="fas fa-external-link-alt ms-1"></i>
                      </a>
                    ) : (
                      <Link href={product.link} className="btn-outline-mj" style={{ background: "#FD6A02", color: "#fff", padding: "8px 20px", borderRadius: "20px", display: "inline-block" }}>
                        {product.buttonText} <i className="fas fa-arrow-right ms-1"></i>
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
    </>
  );
}
