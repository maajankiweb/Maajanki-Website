// Automatically revalidate & regenerate sitemap every 24 hours (86,400 seconds)
export const revalidate = 86400;

export default async function sitemap() {
  const rawBaseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maajankiwebtech.com/';
  const baseUrl = rawBaseUrl.replace(/\/+$/, '');

  // All 58 Target Location Pages (Bihar, India & Global Regions)
  const locations = [
    'argentina',
    'australia',
    'austria',
    'bagaha',
    'bahrain',
    'bangladesh',
    'belgium',
    'bengaluru',
    'bettiah',
    'bihar-sharif',
    'brazil',
    'canada',
    'chile',
    'delhi',
    'denmark',
    'finland',
    'france',
    'gaya',
    'germany',
    'hyderabad',
    'india',
    'ireland',
    'italy',
    'jaipur',
    'japan',
    'kenya',
    'kolkata',
    'kuwait',
    'lucknow',
    'malaysia',
    'mexico',
    'motihari',
    'mumbai',
    'muzaffarpur',
    'narkatiaganj',
    'nepal',
    'netherlands',
    'new-zealand',
    'nigeria',
    'noida',
    'norway',
    'oman',
    'patna',
    'poland',
    'portugal',
    'pune',
    'qatar',
    'raxaul',
    'saudi-arabia',
    'singapore',
    'south-africa',
    'south-korea',
    'spain',
    'sri-lanka',
    'sweden',
    'switzerland',
    'united-arab-emirates',
    'united-kingdom',
    'united-states'
  ];

  const locationPages = locations.map((loc) => ({
    path: `/locations/${loc}`,
    changeFrequency: 'weekly',
    priority: 0.80
  }));

  // Core Pages + Products, Services Sub-pages & Policy Pages
  const staticPages = [
    // Core Pages
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/about', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/our-team', changeFrequency: 'monthly', priority: 0.70 },
    { path: '/careers', changeFrequency: 'monthly', priority: 0.70 },
    { path: '/services', changeFrequency: 'daily', priority: 0.95 },
    { path: '/portfolio', changeFrequency: 'daily', priority: 0.85 },
    { path: '/industries', changeFrequency: 'daily', priority: 0.85 },
    { path: '/products', changeFrequency: 'daily', priority: 0.85 },
    { path: '/reviews', changeFrequency: 'weekly', priority: 0.75 },
    { path: '/contact', changeFrequency: 'daily', priority: 0.85 },
    { path: '/faqs', changeFrequency: 'weekly', priority: 0.85 },

    // Sitemap Index Hub
    { path: '/sitemap', changeFrequency: 'daily', priority: 0.85 },

    // Location Landing Index Page
    { path: '/locations', changeFrequency: 'daily', priority: 0.85 },

    // Blog & Articles
    { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
    { path: '/blog/nextjs-15-seo-guide-for-business-websites', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog/local-seo-strategies-for-bihar-businesses', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog/why-performance-marketing-beats-traditional-ads', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog/gst-invoicing-compliance-guide-indian-retailers', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog/aeo-geo-ai-search-optimization-guide-2026', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog/wordpress-development-guide-business-websites', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog/high-converting-landing-page-design-guide', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/blog/what-is-aeo', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/blog/seo-for-small-businesses-bihar', changeFrequency: 'weekly', priority: 0.85 },

    // Free Online Tools
    { path: '/tools', changeFrequency: 'daily', priority: 0.85 },
    { path: '/tools/meta-tag-generator', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/tools/gst-invoice-helper', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/tools/json-formatter', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/tools/webp-converter', changeFrequency: 'weekly', priority: 0.8 },

    // Policy & Legal Pages
    { path: '/privacy-policy', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/terms-conditions', changeFrequency: 'monthly', priority: 0.3 },

    // 6 Product Detail Pages
    { path: '/products/dukandost-pro', changeFrequency: 'daily', priority: 0.9 },
    { path: '/products/wacrm', changeFrequency: 'daily', priority: 0.9 },
    { path: '/products/nexus-saas', changeFrequency: 'daily', priority: 0.9 },
    { path: '/products/invobill', changeFrequency: 'daily', priority: 0.9 },
    { path: '/products/tailwind-templates', changeFrequency: 'daily', priority: 0.9 },

    // 12 Specialized Services Sub-Pages
    { path: '/services/web-development', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/wordpress-development', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/landing-page', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/mobile-app-development', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/seo', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/smo', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/performance-marketing', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/graphic-design', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/content-writing', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/products-listing', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/ui-ux-design', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/branding', changeFrequency: 'daily', priority: 0.95 },

    // All 59 Location Sub-Pages
    ...locationPages,
  ];

  // Note: robots.txt, llms.txt, etc. are machine discovery files and must NOT be in XML <urlset> sitemaps,
  // as Google Search Console flags non-HTML files as "Crawled - currently not indexed" or "Excluded by noindex".
  return staticPages.map((page) => ({
    url: page.path === '' || page.path === '/' ? `${baseUrl}` : `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
