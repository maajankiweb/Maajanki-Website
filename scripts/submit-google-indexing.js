const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Auto-load environment variables from .env.local and .env if present
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

async function main() {
  console.log('🚀 Initializing Google Instant Indexing API script...');

  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GSC_PRIVATE_KEY
    ? process.env.GSC_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined;

  if (!clientEmail || !privateKey || clientEmail.includes('your-service-account')) {
    console.warn('⚠️ GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY environment variables not configured.');
    console.warn('ℹ️ Steps to set up Google Instant Indexing:');
    console.warn('  1. Create a Service Account in Google Cloud Console & enable Web Search Indexing API.');
    console.warn('  2. In Google Search Console, add the Service Account Email as an "Owner" under Settings > Users and permissions.');
    console.warn('  3. Add GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY to your .env.local file.');
    return;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ['https://www.googleapis.com/auth/indexing'],
  });

  const indexing = google.indexing({ version: 'v3', auth });

  const urlsToIndex = [
    'https://maajankiwebtech.com/',
    'https://maajankiwebtech.com/services',
    'https://maajankiwebtech.com/services/web-development',
    'https://maajankiwebtech.com/services/seo',
    'https://maajankiwebtech.com/services/performance-marketing',
    'https://maajankiwebtech.com/services/products-listing',
    'https://maajankiwebtech.com/services/content-writing',
    'https://maajankiwebtech.com/about',
    'https://maajankiwebtech.com/contact',
    'https://maajankiwebtech.com/portfolio',
    'https://maajankiwebtech.com/products/invobill',
  ];

  console.log(`📡 Submitting ${urlsToIndex.length} URLs to Google Instant Indexing API...`);

  for (const url of urlsToIndex) {
    try {
      const res = await indexing.urlNotifications.publish({
        requestBody: {
          url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`✅ [Indexed] ${url} => Status ${res.status}`);
    } catch (err) {
      console.error(`❌ [Error indexing] ${url}: ${err.message}`);
    }
  }

  console.log('🎉 Google Indexing API submission complete!');
}

main().catch(console.error);
