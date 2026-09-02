// Automatically revalidate & regenerate sitemap every 24 hours (86,400 seconds)
export const revalidate = 86400;

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maajankiwebtech.com';

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
    changeFrequency: 'daily',
    priority: 0.85
  }));

  // Core Pages + Products, Services Sub-pages & Policy Pages
  const staticPages = [
    // Core Pages
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/about', changeFrequency: 'daily', priority: 0.8 },
    { path: '/services', changeFrequency: 'daily', priority: 0.95 },
    { path: '/portfolio', changeFrequency: 'daily', priority: 0.85 },
    { path: '/industries', changeFrequency: 'daily', priority: 0.85 },
    { path: '/products', changeFrequency: 'daily', priority: 0.85 },
    { path: '/reviews', changeFrequency: 'daily', priority: 0.85 },
    { path: '/contact', changeFrequency: 'daily', priority: 0.85 },

    // Location Landing Index Page
    { path: '/locations', changeFrequency: 'daily', priority: 0.85 },

    // Policy & Legal Pages
    { path: '/privacy-policy', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/terms-conditions', changeFrequency: 'monthly', priority: 0.3 },

    // 6 Product Detail Pages
    { path: '/products/dukandost-pro', changeFrequency: 'daily', priority: 0.9 },
    { path: '/products/wacrm', changeFrequency: 'daily', priority: 0.9 },
    { path: '/products/nexus-saas', changeFrequency: 'daily', priority: 0.9 },
    { path: '/products/invobill', changeFrequency: 'daily', priority: 0.9 },
    { path: '/products/tailwind-templates', changeFrequency: 'daily', priority: 0.9 },
    { path: '/products/elementor-pro', changeFrequency: 'daily', priority: 0.9 },

    // 9 Specialized Services Sub-Pages
    { path: '/services/web-development', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/seo', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/smo', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/performance-marketing', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/graphic-design', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/content-writing', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/products-listing', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/ui-ux-design', changeFrequency: 'daily', priority: 0.95 },
    { path: '/services/branding', changeFrequency: 'daily', priority: 0.95 },

    // All 58 Location Sub-Pages
    ...locationPages,
  ];

  // AI Discovery & Meta files
  const aiDiscoveryFiles = [
    { path: '/llms.txt', changeFrequency: 'daily', priority: 0.6 },
    { path: '/llms-full.txt', changeFrequency: 'daily', priority: 0.6 },
    { path: '/mcp-actions.json', changeFrequency: 'monthly', priority: 0.4 },
    { path: '/robots.txt', changeFrequency: 'monthly', priority: 0.3 },
  ];

  return [...staticPages, ...aiDiscoveryFiles].map((page) => ({
    url: page.path === '' || page.path === '/' ? `${baseUrl}/` : `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
