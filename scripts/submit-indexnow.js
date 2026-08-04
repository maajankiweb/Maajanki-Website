const https = require('https');

// Target parameters (overridable via environment variables)
const host = process.env.INDEXNOW_HOST || 'maajankiwebtech.com';
const key = process.env.INDEXNOW_KEY || 'a57e3f890cf24f5aabf2c253cb47ff21';
const baseUrl = `https://${host}`;

const locations = [
  'bettiah', 'bagaha', 'narkatiaganj', 'raxaul', 'motihari',
  'patna', 'noida', 'jaipur', 'lucknow', 'muzaffarpur', 'gaya',
  'delhi', 'mumbai', 'bengaluru', 'hyderabad', 'pune', 'kolkata',
  'united-states', 'united-kingdom', 'canada', 'australia', 'united-arab-emirates', 'nepal'
];

const paths = [
  '',
  '/about',
  '/services',
  '/contact',
  '/portfolio',
  '/industries',
  '/products',
  '/reviews',
  '/privacy-policy',
  '/terms-conditions',
  '/services/branding',
  '/services/graphic-design',
  '/services/ui-ux-design',
  '/services/web-development',
  '/services/content-writing',
  '/services/products-listing',
  '/services/seo',
  '/services/smo',
  '/services/performance-marketing'
].concat(locations.map(loc => `/locations/${loc}`));

const urlList = paths.map(p => `${baseUrl}${p}`);

const data = JSON.stringify({
  host: host,
  key: key,
  keyLocation: `${baseUrl}/${key}.txt`,
  urlList: urlList
});

const options = {
  hostname: 'api.indexnow.org',
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data)
  }
};

console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

const req = https.request(options, (res) => {
  console.log(`IndexNow Response Status: ${res.statusCode}`);
  let responseBody = '';
  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log('URLs successfully submitted to IndexNow!');
    } else {
      console.warn('IndexNow submission notice: Status', res.statusCode);
      console.warn(`Note: IndexNow key submission requires key file at ${baseUrl}/${key}.txt on production server.`);
    }
  });
});

req.on('error', (e) => {
  console.error('IndexNow request error:', e.message);
});

req.write(data);
req.end();
