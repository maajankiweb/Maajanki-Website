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
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/portfolio', changefreq: 'weekly', priority: '0.8' },
  { path: '/industries', changefreq: 'weekly', priority: '0.8' },
  { path: '/products', changefreq: 'weekly', priority: '0.8' },
  { path: '/reviews', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
  { path: '/locations', changefreq: 'weekly', priority: '0.8' },

  // Legal Pages
  { path: '/privacy-policy', changefreq: 'monthly', priority: '0.3' },
  { path: '/terms-conditions', changefreq: 'monthly', priority: '0.3' },

  // Product Detail Pages
  { path: '/products/dukandost-pro', changefreq: 'weekly', priority: '0.85' },
  { path: '/products/wacrm', changefreq: 'weekly', priority: '0.85' },
  { path: '/products/nexus-saas', changefreq: 'weekly', priority: '0.85' },
  { path: '/products/invobill', changefreq: 'weekly', priority: '0.85' },
  { path: '/products/tailwind-templates', changefreq: 'weekly', priority: '0.85' },
  { path: '/products/elementor-pro', changefreq: 'weekly', priority: '0.85' },

  // Service Detail Pages
  { path: '/services/web-development', changefreq: 'weekly', priority: '0.85' },
  { path: '/services/seo', changefreq: 'weekly', priority: '0.85' },
  { path: '/services/smo', changefreq: 'weekly', priority: '0.85' },
  { path: '/services/performance-marketing', changefreq: 'weekly', priority: '0.85' },
  { path: '/services/graphic-design', changefreq: 'weekly', priority: '0.85' },
  { path: '/services/content-writing', changefreq: 'weekly', priority: '0.85' },
  { path: '/services/products-listing', changefreq: 'weekly', priority: '0.85' },
  { path: '/services/ui-ux-design', changefreq: 'weekly', priority: '0.85' },
  { path: '/services/branding', changefreq: 'weekly', priority: '0.85' },

  // Location Pages
  ...locations.map(loc => ({
    path: `/locations/${loc}`,
    changefreq: 'weekly',
    priority: '0.8'
  })),

  // AI Discovery & Meta Files
  { path: '/llms.txt', changefreq: 'monthly', priority: '0.5' },
  { path: '/llms-full.txt', changefreq: 'monthly', priority: '0.5' },
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
