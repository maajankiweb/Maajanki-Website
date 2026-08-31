const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Auto-load environment variables
const rootDir = path.resolve(__dirname, '..');
function loadEnvFile(filePath) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    content.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx !== -1) {
        const key = trimmed.slice(0, eqIdx).trim();
        let value = trimmed.slice(eqIdx + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        if (!process.env[key]) {
          process.env[key] = value;
        }
      }
    });
  }
}
loadEnvFile(path.join(rootDir, '.env.local'));
loadEnvFile(path.join(rootDir, '.env'));

const DOMAIN = 'https://maajankiwebtech.com';
const SITE_TITLE = 'MaaJanki Web Tech - Next.js Web Development Agency & SEO Services';
const SITE_DESC = 'Premier Next.js web development agency, software company, and SEO firm in Bihar and India.';

/**
 * 1. Auto-generate RSS / Atom Syndication Feed for backlink aggregators
 */
function generateRssFeed() {
  console.log('📡 [1/4] Generating RSS & Atom Backlink Syndication Feed...');
  
  const pages = [
    { url: `${DOMAIN}/`, title: 'MaaJanki Web Tech | Next.js Web Development & SEO Agency India', desc: 'Premier Next.js web development, local SEO, and custom software company.' },
    { url: `${DOMAIN}/services`, title: 'All Digital Marketing & Web Development Services', desc: 'Full-cycle Next.js web development, SEO, performance marketing, and UI/UX design.' },
    { url: `${DOMAIN}/services/web-development`, title: 'Custom Next.js 15 Web Application Development', desc: 'Enterprise-grade, mobile-first web applications using React 19, Next.js 15, and Node.js.' },
    { url: `${DOMAIN}/services/seo`, title: 'Search & AI Engine Optimization (SEO & AEO/GEO)', desc: 'Rank #1 on Google, Bing, and AI search tools (ChatGPT, Perplexity, Claude, Gemini).' },
    { url: `${DOMAIN}/services/performance-marketing`, title: 'High-ROI Performance Marketing & PPC Ads', desc: 'Google Ads, Facebook/Instagram Meta Ads, and conversion rate optimization.' },
    { url: `${DOMAIN}/portfolio`, title: 'Live Client Portfolio & Case Studies', desc: 'Explore completed SaaS platforms, e-commerce stores, and corporate websites.' },
    { url: `${DOMAIN}/about`, title: 'About MaaJanki Web Tech & Founder Ashish Kumar', desc: 'DPIIT Startup India & Udyam MSME accredited software enterprise.' },
    { url: `${DOMAIN}/contact`, title: 'Contact MaaJanki Web Tech - Free Project Quote', desc: 'Reach out to our engineering team for free technical consultations and quotes.' },
    { url: `${DOMAIN}/locations/patna`, title: 'Best Web Development Agency in Patna, Bihar', desc: 'Top-rated website developers and digital marketing services in Patna.' },
    { url: `${DOMAIN}/locations/bagaha`, title: 'Best Web Development Company in Bagaha, West Champaran', desc: 'Premier custom web design, SEO, and billing software provider in Bagaha.' },
    { url: `${DOMAIN}/locations/bettiah`, title: 'Best Web Development Agency in Bettiah, Bihar', desc: 'High-performance Next.js web development and Google 3-pack SEO in Bettiah.' },
    { url: `${DOMAIN}/locations/delhi`, title: 'Next.js Web Development Agency in Delhi NCR', desc: 'Corporate web application development and growth marketing in Delhi.' },
    { url: `${DOMAIN}/locations/mumbai`, title: 'Web Design & Software Development Company in Mumbai', desc: 'Scalable cloud software, CRM platforms, and e-commerce stores.' },
    { url: `${DOMAIN}/locations/bengaluru`, title: 'Next.js Full-Stack Web Development in Bengaluru', desc: 'Modern tech stack engineering for tech startups and enterprises.' },
    { url: `${DOMAIN}/locations/united-states`, title: 'Offshore Web Development Agency for USA Clients', desc: 'Cost-effective, 24/7 time-zone aligned web engineering for US businesses.' },
    { url: `${DOMAIN}/locations/united-kingdom`, title: 'Offshore Web Development Agency for UK Clients', desc: 'Next.js web development and digital marketing for London & UK companies.' },
    { url: `${DOMAIN}/locations/united-arab-emirates`, title: 'Web Development & SEO Company Dubai UAE', desc: 'Enterprise websites, e-commerce, and multilingual branding in Dubai & UAE.' }
  ];

  const now = new Date().toUTCString();
  let rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${DOMAIN}</link>
    <description>${SITE_DESC}</description>
    <language>en-IN</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${DOMAIN}/feed.xml" rel="self" type="application/rss+xml" />
`;

  pages.forEach(p => {
    rssXml += `    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${p.url}</link>
      <guid isPermaLink="true">${p.url}</guid>
      <description><![CDATA[${p.desc} - Visit <a href="${p.url}">${p.title}</a>]]></description>
      <pubDate>${now}</pubDate>
    </item>\n`;
  });

  rssXml += `  </channel>
</rss>`;

  const feedPath = path.join(rootDir, 'public', 'feed.xml');
  fs.writeFileSync(feedPath, rssXml, 'utf8');
  console.log(`✅ RSS Feed generated at public/feed.xml (${pages.length} syndicated items)`);
}

/**
 * 2. Auto-Ping Search Engine & Weblog Aggregators (Ping-O-Matic, Google, Bing, etc.)
 */
async function pingAggregators() {
  console.log('🚀 [2/4] Pinging Search Engine & Backlink Crawler Endpoints...');

  const pingTargets = [
    {
      name: 'Google Sitemap Ping',
      url: `https://www.google.com/ping?sitemap=${encodeURIComponent(DOMAIN + '/sitemap.xml')}`
    },
    {
      name: 'Bing Sitemap Ping',
      url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(DOMAIN + '/sitemap.xml')}`
    },
    {
      name: 'FeedBurner / Google Ping',
      url: `https://feedburner.google.com/fb/a/pingSubmit?blogUrl=${encodeURIComponent(DOMAIN)}`
    }
  ];

  for (const target of pingTargets) {
    try {
      await new Promise((resolve) => {
        const client = target.url.startsWith('https') ? https : http;
        const req = client.get(target.url, (res) => {
          console.log(`✅ [Pinged] ${target.name} => HTTP Status ${res.statusCode}`);
          resolve();
        });
        req.on('error', (e) => {
          console.warn(`⚠️ [Ping Warning] ${target.name}: ${e.message}`);
          resolve();
        });
        req.setTimeout(5000, () => {
          req.destroy();
          resolve();
        });
      });
    } catch (e) {
      console.warn(`⚠️ [Ping Exception] ${target.name}: ${e.message}`);
    }
  }
}

/**
 * 3. Auto-generate GitHub Developer Profile Backlink Showcase
 */
function generateGitHubShowcase() {
  console.log('🐙 [3/4] Generating GitHub Profile Backlink & Entity Showcase...');
  
  const githubDir = path.join(rootDir, '.github');
  if (!fs.existsSync(githubDir)) {
    fs.mkdirSync(githubDir, { recursive: true });
  }

  const profileContent = `# 🚀 MaaJanki Web Tech

> **Premier Next.js Web Development Agency, Software Enterprise & SEO Company**  
> Accredited by **DPIIT Startup India** & Registered **MSME Udyam Enterprise** (\`UDYAM-BR-38-0014113\`).

[![Website](https://img.shields.io/badge/Website-maajankiwebtech.com-FF6B00?style=for-the-badge&logo=google-chrome&logoColor=white)](https://maajankiwebtech.com)
[![Google Reviews](https://img.shields.io/badge/Google%20Rating-5.0%20Stars%20%E2%98%85%E2%98%85%E2%98%85%E2%98%85%E2%98%85-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://g.page/r/CVvMyeoY0y0XEAE/review)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-MaaJanki%20Web%20Tech-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/maajanki-web-tech-company/)

---

## 🌐 Official Links & Resources
- **Official Portal:** [https://maajankiwebtech.com](https://maajankiwebtech.com)
- **Services Catalog:** [https://maajankiwebtech.com/services](https://maajankiwebtech.com/services)
- **Next.js Web Development:** [https://maajankiwebtech.com/services/web-development](https://maajankiwebtech.com/services/web-development)
- **SEO & AI Engine Optimization (AEO/GEO):** [https://maajankiwebtech.com/services/seo](https://maajankiwebtech.com/services/seo)
- **Performance Marketing & Ads:** [https://maajankiwebtech.com/services/performance-marketing](https://maajankiwebtech.com/services/performance-marketing)
- **Client Portfolio:** [https://maajankiwebtech.com/portfolio](https://maajankiwebtech.com/portfolio)
- **About Us & Founder Credentials:** [https://maajankiwebtech.com/about](https://maajankiwebtech.com/about)

## 🏢 Business Information
- **Founder & CEO:** Ashish Kumar ([Wikidata: Q115783355](https://www.wikidata.org/wiki/Q115783355))
- **Email:** [info@maajankiwebtech.com](mailto:info@maajankiwebtech.com)
- **Phone:** +91-9006543913 / +91-9110037380
- **Headquarters:** Brajmala Complex, First Floor, Near Cinema House, Front of UCO Bank, Bagaha Bazar, West Champaran, Bihar - 845101, India.
`;

  fs.writeFileSync(path.join(githubDir, 'README.md'), profileContent, 'utf8');
  console.log('✅ GitHub Entity Showcase created at .github/README.md');
}

/**
 * 4. Automated Dev.to API Article Publisher (If DEVTO_API_KEY is supplied)
 */
async function publishToDevTo() {
  const apiKey = process.env.DEVTO_API_KEY;
  if (!apiKey) {
    console.log('ℹ️ [4/4] Dev.to automated API publication skipped (Set DEVTO_API_KEY in .env.local to enable 1-click auto-publishing).');
    return;
  }

  console.log('📝 [4/4] Publishing automated authority case study to Dev.to via REST API...');
  
  const articlePayload = JSON.stringify({
    article: {
      title: 'Building Enterprise Next.js 15 Applications with Full AEO & SEO Architecture',
      published: true,
      body_markdown: `# Building Enterprise Next.js 15 Applications with Full AEO & SEO Architecture

In modern web development, creating high-speed, server-rendered applications is only half the battle. To gain real business visibility, modern applications must be optimized for both traditional search engines and AI answer engines.

At [MaaJanki Web Tech](https://maajankiwebtech.com), we have engineered high-performance web systems using Next.js 15, App Router, and programmatic Schema.org markup.

## Core Pillars of Modern Web Architecture
1. **Next.js 15 Performance:** Sub-second First Contentful Paint with streaming SSR.
2. **AEO & GEO Optimization:** Structuring data for ChatGPT, Perplexity, and Google AI Overviews.
3. **Local & Global SEO:** Comprehensive service mapping and schema graphs.

Explore our full range of [custom web development services](https://maajankiwebtech.com/services/web-development) and [SEO solutions](https://maajankiwebtech.com/services/seo).

---
*Published by [MaaJanki Web Tech](https://maajankiwebtech.com) — MSME & DPIIT Recognized Enterprise.*`,
      tags: ['nextjs', 'react', 'webdev', 'seo']
    }
  });

  const options = {
    hostname: 'dev.to',
    path: '/api/articles',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
      'User-Agent': 'MaaJanki-AutoBacklink/1.0'
    }
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', chunk => { data += chunk; });
    res.on('end', () => {
      if (res.statusCode === 201) {
        const parsed = JSON.parse(data);
        console.log(`🎉 [Dev.to Published] Live Backlink Article URL: ${parsed.url}`);
      } else {
        console.warn(`⚠️ Dev.to publication status: ${res.statusCode} - ${data}`);
      }
    });
  });

  req.on('error', (e) => {
    console.error('Dev.to publication error:', e.message);
  });

  req.write(articlePayload);
  req.end();
}

async function run() {
  console.log('====================================================');
  console.log('⚡ STARTING AUTOMATED BACKLINK & SYNDICATION ENGINE');
  console.log('====================================================');
  generateRssFeed();
  await pingAggregators();
  generateGitHubShowcase();
  await publishToDevTo();
  console.log('====================================================');
  console.log('✅ AUTOMATED BACKLINK SYNDICATION COMPLETED');
  console.log('====================================================');
}

run().catch(console.error);
