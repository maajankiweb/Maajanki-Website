import Link from 'next/link';
import { FaCode, FaFileInvoiceDollar, FaImage, FaTags, FaArrowRight, FaTools } from 'react-icons/fa';

export const metadata = {
  title: 'Free Web & Business Tools | MaaJanki Web Tech',
  description: 'Free developer and business utility tools by MaaJanki Web Tech: Meta Tag Generator, GST Invoice Helper, JSON Formatter, and WebP Converter.',
  keywords: [
    'Free Web Tools',
    'Meta Tag Generator',
    'GST Invoice Helper',
    'JSON Formatter',
    'WebP Converter online',
    'MaaJanki Web Tech tools'
  ],
  alternates: {
    canonical: 'https://maajankiwebtech.com/tools',
  },
  openGraph: {
    title: 'Free Web & Business Tools | MaaJanki Web Tech',
    description: 'Free developer and business tools: Meta Tag Generator, GST Invoice Helper, JSON Formatter, and WebP Image Converter.',
    url: 'https://maajankiwebtech.com/tools',
    siteName: 'MaaJanki Web Tech',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Web & Business Tools | MaaJanki Web Tech',
    description: 'Free developer and business utility tools by MaaJanki Web Tech.',
  },
};

const toolsList = [
  {
    title: 'Meta Tag Generator',
    slug: 'meta-tag-generator',
    desc: 'Generate complete, SEO-friendly HTML meta tags, Open Graph cards, and Twitter summary markup in real-time.',
    icon: <FaTags className="text-2xl" />,
    badge: 'SEO Tool',
  },
  {
    title: 'GST Invoice Helper',
    slug: 'gst-invoice-helper',
    desc: 'Calculate accurate CGST, SGST, IGST, and HSN tax splits for Indian invoices instantly before generating billing slips.',
    icon: <FaFileInvoiceDollar className="text-2xl" />,
    badge: 'Billing Tool',
  },
  {
    title: 'JSON Formatter & Validator',
    slug: 'json-formatter',
    desc: 'Format, beautify, and validate complex JSON schemas and payloads with instant error detection and 1-click copy.',
    icon: <FaCode className="text-2xl" />,
    badge: 'Developer Tool',
  },
  {
    title: 'WebP Image Converter',
    slug: 'webp-converter',
    desc: 'Convert heavy PNG and JPEG images to lightweight, next-gen WebP format directly in your browser with zero server uploads.',
    icon: <FaImage className="text-2xl" />,
    badge: 'Performance Tool',
  },
];

export default function ToolsHubPage() {
  return (
    <div style={{ background: '#020617', color: '#f8fafc', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container py-5">
        <div className="text-center max-w-3xl mx-auto mb-5">
          <span
            className="badge px-3 py-2 text-uppercase mb-3"
            style={{ background: 'rgba(253, 106, 2, 0.15)', color: '#FD6A02', fontWeight: '600', letterSpacing: '1px', borderRadius: '30px' }}
          >
            Free Online Utilities
          </span>
          <h1 className="display-4 fw-bold mt-2 mb-3" style={{ color: '#ffffff' }}>
            Free Developer &amp; Business <span style={{ color: '#FD6A02' }}>Tools</span>
          </h1>
          <p className="lead" style={{ color: '#94a3b8', fontSize: '1.15rem' }}>
            High-speed, browser-native tools built by MaaJanki Web Tech to streamline your digital workflows, technical SEO, and business compliance.
          </p>
        </div>

        <div className="row g-4">
          {toolsList.map((tool) => (
            <div key={tool.slug} className="col-md-6">
              <div
                className="card h-100 p-4 rounded-4"
                style={{
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center"
                    style={{ width: '54px', height: '54px', background: 'rgba(253, 106, 2, 0.15)', color: '#FD6A02' }}
                  >
                    {tool.icon}
                  </div>
                  <span
                    className="badge px-3 py-1"
                    style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#94a3b8', borderRadius: '15px' }}
                  >
                    {tool.badge}
                  </span>
                </div>

                <h3 className="h4 fw-bold mb-2">
                  <Link href={`/tools/${tool.slug}`} className="text-decoration-none text-white">
                    {tool.title}
                  </Link>
                </h3>

                <p className="text-secondary mb-4 flex-grow-1" style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                  {tool.desc}
                </p>

                <div className="pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="btn w-100 text-white fw-bold py-2"
                    style={{ background: '#FD6A02', borderRadius: '10px' }}
                  >
                    Launch Tool <FaArrowRight className="ms-2" />
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
