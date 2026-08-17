const fs = require('fs');
const path = require('path');

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maajankiwebtech.com';
const currentDate = new Date().toISOString().split('T')[0];

const locations = [
  'argentina', 'australia', 'austria', 'bagaha', 'bahrain', 'bangladesh',
  'belgium', 'bengaluru', 'bettiah', 'brazil', 'canada', 'chile',
  'delhi', 'denmark', 'finland', 'france', 'gaya', 'germany',
  'hyderabad', 'india', 'ireland', 'italy', 'jaipur', 'japan',
  'kenya', 'kolkata', 'kuwait', 'lucknow', 'malaysia', 'mexico',
  'motihari', 'mumbai', 'muzaffarpur', 'narkatiaganj', 'nepal', 'netherlands',
  'new-zealand', 'nigeria', 'noida', 'norway', 'oman', 'patna',
  'poland', 'portugal', 'pune', 'qatar', 'raxaul', 'saudi-arabia',
  'singapore', 'south-africa', 'south-korea', 'spain', 'sri-lanka', 'sweden',
  'switzerland', 'united-arab-emirates', 'united-kingdom', 'united-states'
];

const pages = [
  // Homepage (with trailing slash)
  { path: '/', changefreq: 'daily', priority: '1.0' },

  // Core Pages
  { path: '/about', changefreq: 'daily', priority: '0.8' },
  { path: '/services', changefreq: 'daily', priority: '0.95' },
  { path: '/portfolio', changefreq: 'daily', priority: '0.85' },
  { path: '/industries', changefreq: 'daily', priority: '0.85' },
  { path: '/products', changefreq: 'daily', priority: '0.85' },
  { path: '/reviews', changefreq: 'daily', priority: '0.85' },
  { path: '/contact', changefreq: 'daily', priority: '0.85' },
  { path: '/locations', changefreq: 'daily', priority: '0.85' },

  // Legal Pages
  { path: '/privacy-policy', changefreq: 'monthly', priority: '0.3' },
  { path: '/terms-conditions', changefreq: 'monthly', priority: '0.3' },

  // Product Detail Pages
  { path: '/products/dukandost-pro', changefreq: 'daily', priority: '0.9' },
  { path: '/products/wacrm', changefreq: 'daily', priority: '0.9' },
  { path: '/products/nexus-saas', changefreq: 'daily', priority: '0.9' },
  { path: '/products/invobill', changefreq: 'daily', priority: '0.9' },
  { path: '/products/tailwind-templates', changefreq: 'daily', priority: '0.9' },
  { path: '/products/elementor-pro', changefreq: 'daily', priority: '0.9' },

  // Service Detail Pages
  { path: '/services/web-development', changefreq: 'daily', priority: '0.95' },
  { path: '/services/seo', changefreq: 'daily', priority: '0.95' },
  { path: '/services/smo', changefreq: 'daily', priority: '0.95' },
  { path: '/services/performance-marketing', changefreq: 'daily', priority: '0.95' },
  { path: '/services/graphic-design', changefreq: 'daily', priority: '0.95' },
  { path: '/services/content-writing', changefreq: 'daily', priority: '0.95' },
  { path: '/services/products-listing', changefreq: 'daily', priority: '0.95' },
  { path: '/services/ui-ux-design', changefreq: 'daily', priority: '0.95' },
  { path: '/services/branding', changefreq: 'daily', priority: '0.95' },

  // Location Pages
  ...locations.map(loc => ({
    path: `/locations/${loc}`,
    changefreq: 'daily',
    priority: '0.85'
  })),

  // AI Discovery & Meta Files
  { path: '/llms.txt', changefreq: 'daily', priority: '0.6' },
  { path: '/llms-full.txt', changefreq: 'daily', priority: '0.6' },
  { path: '/mcp-actions.json', changefreq: 'monthly', priority: '0.4' },
  { path: '/robots.txt', changefreq: 'monthly', priority: '0.3' }
];

function buildXmlSitemap() {
  const xmlEntries = pages.map((page) => {
    const url = page.path === '/' ? `${baseUrl}/` : `${baseUrl}${page.path}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}
</urlset>`;
}

const sitemapContent = buildXmlSitemap();
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemapContent, 'utf8');
console.log(`✅ XML Sitemap successfully generated at public/sitemap.xml (${pages.length} URLs)`);
