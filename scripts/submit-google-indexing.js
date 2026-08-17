const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

async function main() {
  console.log('🚀 Initializing Google Instant Indexing API script...');

  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GSC_PRIVATE_KEY
    ? process.env.GSC_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined;

  if (!clientEmail || !privateKey) {
    console.warn('⚠️ GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY environment variables not found.');
    console.warn('ℹ️ To run live Google Indexing API submissions, set GSC_CLIENT_EMAIL and GSC_PRIVATE_KEY in .env.local');
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
