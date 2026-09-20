import Link from 'next/link';
import { blogPosts } from '@/app/blog/data';

export const metadata = {
  title: "HTML Sitemap | MaaJanki Web Tech Directory",
  description: "Browse the complete site architecture and directory of MaaJanki Web Tech — including all web development services, SEO solutions, SaaS products, free tools, blog guides, and regional locations.",
  alternates: {
    canonical: "https://maajankiwebtech.com/sitemap",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const locations = [
  { name: "Bagaha, Bihar (HQ)", slug: "bagaha" },
  { name: "Bettiah, Bihar", slug: "bettiah" },
  { name: "Motihari, Bihar", slug: "motihari" },
  { name: "Patna, Bihar", slug: "patna" },
  { name: "Muzaffarpur, Bihar", slug: "muzaffarpur" },
  { name: "Bihar Sharif, Bihar", slug: "bihar-sharif" },
  { name: "Gaya, Bihar", slug: "gaya" },
  { name: "Narkatiaganj, Bihar", slug: "narkatiaganj" },
  { name: "Raxaul, Bihar", slug: "raxaul" },
  { name: "Delhi NCR", slug: "delhi" },
  { name: "Noida", slug: "noida" },
  { name: "Bengaluru", slug: "bengaluru" },
  { name: "Mumbai", slug: "mumbai" },
  { name: "Pune", slug: "pune" },
  { name: "Hyderabad", slug: "hyderabad" },
  { name: "Kolkata", slug: "kolkata" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Lucknow", slug: "lucknow" },
  { name: "India (Pan-India)", slug: "india" },
  { name: "United States", slug: "united-states" },
  { name: "United Kingdom", slug: "united-kingdom" },
  { name: "Canada", slug: "canada" },
  { name: "Australia", slug: "australia" },
  { name: "United Arab Emirates", slug: "united-arab-emirates" },
  { name: "Saudi Arabia", slug: "saudi-arabia" },
  { name: "Qatar", slug: "qatar" },
  { name: "Kuwait", slug: "kuwait" },
  { name: "Oman", slug: "oman" },
  { name: "Bahrain", slug: "bahrain" },
  { name: "Singapore", slug: "singapore" },
  { name: "Malaysia", slug: "malaysia" },
  { name: "Japan", slug: "japan" },
  { name: "South Korea", slug: "south-korea" },
  { name: "Germany", slug: "germany" },
  { name: "France", slug: "france" },
  { name: "Netherlands", slug: "netherlands" },
  { name: "Switzerland", slug: "switzerland" },
  { name: "Sweden", slug: "sweden" },
  { name: "Norway", slug: "norway" },
  { name: "Denmark", slug: "denmark" },
  { name: "Finland", slug: "finland" },
  { name: "Ireland", slug: "ireland" },
  { name: "Italy", slug: "italy" },
  { name: "Spain", slug: "spain" },
  { name: "Portugal", slug: "portugal" },
  { name: "Belgium", slug: "belgium" },
  { name: "Austria", slug: "austria" },
  { name: "Poland", slug: "poland" },
  { name: "New Zealand", slug: "new-zealand" },
  { name: "South Africa", slug: "south-africa" },
  { name: "Nigeria", slug: "nigeria" },
  { name: "Kenya", slug: "kenya" },
  { name: "Nepal", slug: "nepal" },
  { name: "Bangladesh", slug: "bangladesh" },
  { name: "Sri Lanka", slug: "sri-lanka" },
  { name: "Brazil", slug: "brazil" },
  { name: "Mexico", slug: "mexico" },
  { name: "Argentina", slug: "argentina" },
  { name: "Chile", slug: "chile" },
];

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "WordPress Development", href: "/services/wordpress-development" },
  { name: "Landing Page Design", href: "/services/landing-page" },
  { name: "SEO & AI Engine Optimization (AEO)", href: "/services/seo" },
  { name: "Social Media Optimization (SMO)", href: "/services/smo" },
  { name: "Performance Marketing (PPC)", href: "/services/performance-marketing" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "Content Writing", href: "/services/content-writing" },
  { name: "Graphic Design", href: "/services/graphic-design" },
  { name: "Logo & Branding", href: "/services/branding" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "eCommerce Product Listing", href: "/services/products-listing" },
];

const products = [
  { name: "DukanDost Pro (Retail POS)", href: "/products/dukandost-pro" },
  { name: "WACRM (WhatsApp CRM)", href: "/products/wacrm" },
  { name: "Nexus SaaS Platform", href: "/products/nexus-saas" },
  { name: "InvoBill (GST Invoicing)", href: "/products/invobill" },
  { name: "Tailwind UI Templates", href: "/products/tailwind-templates" },
];

const tools = [
  { name: "GST Invoice Generator Helper", href: "/tools/gst-invoice-helper" },
  { name: "JSON Formatter & Validator", href: "/tools/json-formatter" },
  { name: "Meta Tag & Schema Generator", href: "/tools/meta-tag-generator" },
  { name: "WebP Image Converter", href: "/tools/webp-converter" },
];

const corePages = [
  { name: "Homepage", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Leadership Team", href: "/our-team" },
  { name: "Careers & Openings", href: "/careers" },
  { name: "All Services Overview", href: "/services" },
  { name: "Portfolio & Case Studies", href: "/portfolio" },
  { name: "Industries Served", href: "/industries" },
  { name: "Product Suite", href: "/products" },
  { name: "Client Reviews & Testimonials", href: "/reviews" },
  { name: "Contact & Free Growth Audit", href: "/contact" },
  { name: "Frequently Asked Questions", href: "/faqs" },
  { name: "Global & Regional Locations Hub", href: "/locations" },
  { name: "Free Web Developer Tools", href: "/tools" },
  { name: "Blog & Knowledge Base", href: "/blog" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-conditions" },
];

export default function SitemapPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://maajankiwebtech.com/sitemap#webpage",
    "url": "https://maajankiwebtech.com/sitemap",
    "name": "MaaJanki Web Tech Complete HTML Sitemap & Directory",
    "description": "Full HTML sitemap index linking to all company pages, specialized digital marketing services, software products, free tools, and location landing pages.",
    "isPartOf": {
      "@id": "https://maajankiwebtech.com/#website"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main style={{ background: "linear-gradient(180deg, #020617 0%, #042544 50%, #020617 100%)", color: "#ffffff", padding: "120px 20px 80px", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          <header style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ display: "inline-block", background: "rgba(253, 106, 2, 0.15)", border: "1px solid #FD6A02", color: "#FD6A02", padding: "6px 20px", borderRadius: "30px", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
              Complete Website Index
            </span>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "800", fontFamily: '"Outfit", sans-serif', margin: "0 0 16px", color: "#ffffff" }}>
              MaaJanki Web Tech Sitemap
            </h1>
            <p style={{ color: "#cbd5e1", fontSize: "16px", maxWidth: "750px", margin: "0 auto", lineHeight: "1.7" }}>
              Explore the complete hierarchy of our digital ecosystem. Fast-track navigation across all services, enterprise products, developer tools, technical articles, and regional delivery hubs.
            </p>
          </header>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginBottom: "50px" }}>
            
            {/* Core Pages */}
            <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "32px", backdropFilter: "blur(12px)" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#FD6A02", fontFamily: '"Outfit", sans-serif', marginBottom: "20px", borderBottom: "1px solid rgba(253, 106, 2, 0.3)", paddingBottom: "10px" }}>
                🏛️ Company & Core Pages
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {corePages.map((page, i) => (
                  <li key={i}>
                    <Link href={page.href} style={{ color: "#e2e8f0", textDecoration: "none", fontSize: "14px", transition: "color 0.2s ease" }}>
                      → {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "32px", backdropFilter: "blur(12px)" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#FD6A02", fontFamily: '"Outfit", sans-serif', marginBottom: "20px", borderBottom: "1px solid rgba(253, 106, 2, 0.3)", paddingBottom: "10px" }}>
                🛠️ Specialized Services
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {services.map((service, i) => (
                  <li key={i}>
                    <Link href={service.href} style={{ color: "#e2e8f0", textDecoration: "none", fontSize: "14px", transition: "color 0.2s ease" }}>
                      → {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products & Tools */}
            <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "32px", backdropFilter: "blur(12px)" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#FD6A02", fontFamily: '"Outfit", sans-serif', marginBottom: "20px", borderBottom: "1px solid rgba(253, 106, 2, 0.3)", paddingBottom: "10px" }}>
                🚀 Products & Free Tools
              </h2>
              <h3 style={{ fontSize: "14px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>Digital Products</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {products.map((prod, i) => (
                  <li key={i}>
                    <Link href={prod.href} style={{ color: "#e2e8f0", textDecoration: "none", fontSize: "14px" }}>
                      → {prod.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: "14px", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>Online Tools</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {tools.map((tool, i) => (
                  <li key={i}>
                    <Link href={tool.href} style={{ color: "#e2e8f0", textDecoration: "none", fontSize: "14px" }}>
                      → {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Blog Section */}
          <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "32px", backdropFilter: "blur(12px)", marginBottom: "50px" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#FD6A02", fontFamily: '"Outfit", sans-serif', marginBottom: "20px", borderBottom: "1px solid rgba(253, 106, 2, 0.3)", paddingBottom: "10px" }}>
              📚 Technical Blog & Industry Research Guides
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
              {blogPosts.map((post, i) => (
                <div key={i} style={{ padding: "12px 16px", background: "rgba(255, 255, 255, 0.02)", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "#ffffff", fontWeight: "600", textDecoration: "none", fontSize: "14px", display: "block", marginBottom: "4px" }}>
                    {post.title}
                  </Link>
                  <span style={{ fontSize: "12px", color: "#94a3b8" }}>{post.category || "Article"} • {post.readTime || "5 min read"}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Locations Hub */}
          <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "32px", backdropFilter: "blur(12px)" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#FD6A02", fontFamily: '"Outfit", sans-serif', marginBottom: "20px", borderBottom: "1px solid rgba(253, 106, 2, 0.3)", paddingBottom: "10px" }}>
              📍 Regional & Global Service Locations (59 Destinations)
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px" }}>
              MaaJanki Web Tech serves clients locally across Bihar, nationwide across India, and globally:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
              {locations.map((loc, i) => (
                <Link
                  key={i}
                  href={`/locations/${loc.slug}`}
                  style={{
                    color: "#cbd5e1",
                    textDecoration: "none",
                    fontSize: "13.5px",
                    padding: "8px 12px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                  }}
                >
                  📍 {loc.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
