import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaSearch } from 'react-icons/fa';

export const metadata = {
  title: 'Tech & Digital Marketing Blog | MaaJanki Web Tech',
  description: 'Insights, tutorials, and growth strategies on Next.js web development, local SEO, Google Ads, and e-commerce scaling by MaaJanki Web Tech.',
  alternates: {
    canonical: 'https://maajankiwebtech.com/blog',
  },
  openGraph: {
    title: 'Tech & Digital Marketing Blog | MaaJanki Web Tech',
    description: 'Expert guides on Next.js, local SEO in Bihar, branding, and performance marketing.',
    url: 'https://maajankiwebtech.com/blog',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://maajankiwebtech.com/images/og-banner.webp',
        width: 1200,
        height: 630,
        alt: 'MaaJanki Web Tech Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech & Digital Marketing Blog | MaaJanki Web Tech',
    description: 'Expert guides on Next.js, local SEO in Bihar, branding, and performance marketing.',
    images: ['https://maajankiwebtech.com/images/og-banner.webp'],
  },
};

import { blogPosts } from './data';
export { blogPosts };

export default function BlogIndexPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MaaJanki Web Tech Blog",
    "description": "Expert engineering, technical SEO, and digital growth articles.",
    "url": "https://maajankiwebtech.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "MaaJanki Web Tech",
      "url": "https://maajankiwebtech.com/",
      "logo": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp"
    },
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://maajankiwebtech.com/blog/${post.slug}`,
      "datePublished": "2026-03-01",
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };

  return (
    <div style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <div className="container py-5">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <span
            className="badge px-3 py-2 text-uppercase mb-3"
            style={{ background: 'rgba(253, 106, 2, 0.15)', color: '#FD6A02', fontWeight: '600', letterSpacing: '1px', borderRadius: '30px' }}
          >
            Engineering & Growth Insights
          </span>
          <h1 className="display-4 fw-bold mt-2 mb-3" style={{ color: '#ffffff' }}>
            MaaJanki Web Tech <span style={{ color: '#FD6A02' }}>Blog</span>
          </h1>
          <p className="lead" style={{ color: '#94a3b8', fontSize: '1.15rem' }}>
            Authoritative tutorials, growth playbooks, and architectural breakdowns on Next.js web applications, Google search algorithms, and enterprise performance marketing.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(p => p.featured).map((post) => (
          <div
            key={post.slug}
            className="p-4 p-md-5 rounded-4 mb-5"
            style={{
              background: 'linear-gradient(135deg, rgba(4, 37, 68, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid rgba(253, 106, 2, 0.3)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="badge px-3 py-1 text-white" style={{ background: '#FD6A02', borderRadius: '15px' }}>
                Featured Story
              </span>
              <span style={{ color: '#94a3b8', fontSize: '14px' }}>
                <FaClock className="me-1" /> {post.readTime}
              </span>
            </div>

            <h2 className="h2 fw-bold mb-3">
              <Link href={`/blog/${post.slug}`} className="text-decoration-none text-white hover-text-orange" style={{ transition: 'color 0.2s ease' }}>
                {post.title}
              </Link>
            </h2>

            <p className="lead mb-4" style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '1.6' }}>
              {post.excerpt}
            </p>

            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 pt-3 border-top border-secondary">
              <div className="d-flex align-items-center gap-2">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{ width: '40px', height: '40px', background: '#042544', border: '1px solid #FD6A02' }}
                >
                  AK
                </div>
                <div>
                  <div className="fw-semibold text-white">{post.author}</div>
                  <small style={{ color: '#94a3b8' }}>{post.authorRole}</small>
                </div>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="btn text-white fw-bold px-4 py-2"
                style={{ background: '#FD6A02', borderRadius: '25px' }}
              >
                Read Article <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>
        ))}

        {/* Regular Posts Grid */}
        <div className="row g-4">
          {blogPosts.filter(p => !p.featured).map((post) => (
            <div key={post.slug} className="col-md-6 col-lg-4">
              <div
                className="card h-100 p-4 rounded-4"
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span
                    className="badge px-3 py-1"
                    style={{ background: 'rgba(253, 106, 2, 0.15)', color: '#FD6A02', borderRadius: '12px', fontSize: '12px' }}
                  >
                    {post.category}
                  </span>
                  <small style={{ color: '#94a3b8' }}>{post.readTime}</small>
                </div>

                <h3 className="h5 fw-bold mb-3" style={{ lineHeight: '1.4' }}>
                  <Link href={`/blog/${post.slug}`} className="text-decoration-none text-white">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-secondary mb-4 flex-grow-1" style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
                  {post.excerpt}
                </p>

                <div className="d-flex justify-content-between align-items-center pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <small style={{ color: '#64748b' }}>
                    <FaCalendarAlt className="me-1" /> {post.date}
                  </small>
                  <Link href={`/blog/${post.slug}`} className="text-decoration-none fw-semibold" style={{ color: '#FD6A02', fontSize: '14px' }}>
                    Read <FaArrowRight className="ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
