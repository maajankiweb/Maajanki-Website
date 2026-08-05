// Required for prerendering the sitemap during static export (output: 'export')
export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maajankiwebtech.com';

  const locations = [
    'bettiah',
    'bagaha',
    'narkatiaganj',
    'raxaul',
    'motihari',
    'patna',
    'noida',
    'jaipur',
    'lucknow',
    'muzaffarpur',
    'gaya',
    'delhi',
    'mumbai',
    'bengaluru',
    'hyderabad',
    'pune',
    'kolkata',
    'united-states',
    'united-kingdom',
    'canada',
    'australia',
    'united-arab-emirates',
    'nepal'
  ];

  const locationPages = locations.map((loc) => ({
    path: `/locations/${loc}`,
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  const staticPages = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/portfolio', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/industries', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/products', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/reviews', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/privacy-policy', changeFrequency: 'monthly', priority: 0.3 },
    { path: '/terms-conditions', changeFrequency: 'monthly', priority: 0.3 },
    ...locationPages,
    // Sub-services
    { path: '/services/branding', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/graphic-design', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/ui-ux-design', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/web-development', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/content-writing', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/products-listing', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/seo', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/smo', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/services/performance-marketing', changeFrequency: 'weekly', priority: 0.8 },
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
