// Required for prerendering the sitemap during static export (output: 'export')
export const dynamic = 'force-static';

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
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  // 8 Main Core Pages + Products, Services Sub-pages & Policy Pages
  const staticPages = [
    // 8 Main Core Pages
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/portfolio', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/industries', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/products', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/reviews', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },

    // Location Landing Index Page
    { path: '/locations', changeFrequency: 'weekly', priority: 0.8 },

    // Policy & Legal Pages
    { path: '/privacy-policy', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/terms-conditions', changeFrequency: 'monthly', priority: 0.3 },

    // 6 Product Detail Pages
    { path: '/products/dukandost-pro', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/products/wacrm', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/products/nexus-saas', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/products/invobill', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/products/tailwind-templates', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/products/elementor-pro', changeFrequency: 'weekly', priority: 0.85 },

    // 9 Specialized Services Sub-Pages
    { path: '/services/web-development', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/seo', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/smo', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/performance-marketing', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/graphic-design', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/content-writing', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/products-listing', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/ui-ux-design', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/services/branding', changeFrequency: 'weekly', priority: 0.85 },

    // All 58 Location Sub-Pages
    ...locationPages,
  ];

  // AI Discovery & Meta files
  const aiDiscoveryFiles = [
    { path: '/llms.txt', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/llms-full.txt', changeFrequency: 'monthly', priority: 0.5 },
    { path: '/mcp-actions.json', changeFrequency: 'monthly', priority: 0.4 },
    { path: '/robots.txt', changeFrequency: 'monthly', priority: 0.3 },
  ];

  return [...staticPages, ...aiDiscoveryFiles].map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
