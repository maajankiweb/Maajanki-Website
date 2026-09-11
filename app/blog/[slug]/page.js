import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaCalendarAlt, FaUser, FaClock, FaArrowLeft, FaShareAlt } from 'react-icons/fa';
import { blogPosts } from '../page';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Article Not Found | MaaJanki Web Tech',
    };
  }

  return {
    title: `${post.title} | MaaJanki Web Tech`,
    description: post.excerpt,
    alternates: {
      canonical: `https://maajankiwebtech.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://maajankiwebtech.com/blog/${slug}`,
      siteName: 'MaaJanki Web Tech',
      locale: 'en_IN',
      type: 'article',
      images: [
        {
          url: 'https://maajankiwebtech.com/images/og-banner.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['https://maajankiwebtech.com/images/og-banner.webp'],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://maajankiwebtech.com/images/og-banner.webp",
    "datePublished": "2026-03-01",
    "dateModified": "2026-03-10",
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://www.linkedin.com/in/ashishkumarji/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MaaJanki Web Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://maajankiwebtech.com/images/MaaJanki-Web-Tech-Logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://maajankiwebtech.com/blog/${slug}`
    }
  };

  return (
    <article style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="container py-5">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb / Back */}
          <div className="mb-4">
            <Link href="/blog" className="text-decoration-none fw-semibold d-inline-flex align-items-center" style={{ color: '#FD6A02' }}>
              <FaArrowLeft className="me-2" /> Back to All Articles
            </Link>
          </div>

          {/* Category & Read Time */}
          <div className="d-flex align-items-center gap-3 mb-3">
            <span
              className="badge px-3 py-1"
              style={{ background: 'rgba(253, 106, 2, 0.15)', color: '#FD6A02', borderRadius: '15px' }}
            >
              {post.category}
            </span>
            <span style={{ color: '#94a3b8', fontSize: '14px' }}>
              <FaClock className="me-1" /> {post.readTime}
            </span>
            <span style={{ color: '#94a3b8', fontSize: '14px' }}>
              <FaCalendarAlt className="me-1" /> {post.date}
            </span>
          </div>

          {/* Title */}
          <h1 className="display-5 fw-bold mb-4" style={{ color: '#ffffff', lineHeight: '1.25' }}>
            {post.title}
          </h1>

          {/* Author Card */}
          <div
            className="p-3 rounded-3 mb-5 d-flex align-items-center justify-content-between"
            style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <div className="d-flex align-items-center gap-3">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                style={{ width: '48px', height: '48px', background: '#042544', border: '2px solid #FD6A02' }}
              >
                AK
              </div>
              <div>
                <div className="fw-bold text-white">{post.author}</div>
                <small style={{ color: '#94a3b8' }}>{post.authorRole} — MaaJanki Web Tech</small>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div
            className="article-content"
            style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1' }}
          >
            <p className="lead fw-normal mb-4" style={{ color: '#e2e8f0' }}>
              {post.excerpt}
            </p>

            <h2 className="h3 fw-bold text-white mt-5 mb-3">
              1. The Modern Paradigm Shift in Digital Growth
            </h2>
            <p>
              In today's hyper-competitive digital landscape, relying on cookie-cutter templates or superficial marketing campaigns no longer delivers consistent results. Modern search engines like Google — powered by AI Overviews and Helpful Content systems — prioritize technical excellence, verified structured data, and authentic expertise (E-E-A-T).
            </p>
            <p>
              Whether you operate a local business in Bihar or an enterprise technology company competing globally, achieving dominance requires a coordinated architecture encompassing server-side rendering, sub-second Core Web Vitals, and intent-driven content clusters.
            </p>

            <h2 className="h3 fw-bold text-white mt-5 mb-3">
              2. Technical Execution & Core Web Vitals
            </h2>
            <p>
              Search performance begins with page speed. By adopting Next.js 15 App Router and React Server Components, our team at MaaJanki Web Tech achieves 95+ Google PageSpeed scores, reducing Largest Contentful Paint (LCP) to under 1.5 seconds and Interaction to Next Paint (INP) to below 50ms.
            </p>
            <div
              className="p-4 rounded-3 my-4"
              style={{ background: 'rgba(253, 106, 2, 0.08)', borderLeft: '4px solid #FD6A02' }}
            >
              <h4 className="h6 fw-bold mb-2" style={{ color: '#FD6A02' }}>Pro Tip from MaaJanki Web Tech:</h4>
              <p className="mb-0" style={{ fontSize: '15px' }}>
                Always inject complete Schema.org JSON-LD structured data (Organization, LocalBusiness, FAQPage, BreadcrumbList) directly into server-rendered markup so crawler bots can index entities instantly without executing expensive client-side JavaScript.
              </p>
            </div>

            <h2 className="h3 fw-bold text-white mt-5 mb-3">
              3. Taking Your Next Step
            </h2>
            <p>
              Ready to scale your business with custom web development, high-converting SEO, and data-backed performance marketing? Contact the MaaJanki Web Tech engineering team today for a comprehensive digital audit.
            </p>

            <div className="mt-5 p-4 rounded-4 text-center" style={{ background: '#042544', border: '1px solid #FD6A02' }}>
              <h3 className="h4 fw-bold text-white mb-2">Grow Your Business with MaaJanki Web Tech</h3>
              <p className="mb-4" style={{ color: '#94a3b8' }}>
                Talk to Ashish Kumar and our team of digital strategists today.
              </p>
              <Link
                href="/contact"
                className="btn text-white fw-bold px-4 py-2"
                style={{ background: '#FD6A02', borderRadius: '30px' }}
              >
                Schedule Free Growth Audit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
