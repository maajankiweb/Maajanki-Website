import { NextResponse } from 'next/server';
import https from 'https';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const authHeader = request.headers.get('authorization');
    const secretParam = searchParams.get('secret');
    const adminSecret = process.env.ADMIN_SECRET_KEY || process.env.CRON_SECRET || 'maajanki_cron_24h_secret';

    // Verify cron authorization (supports Authorization header or ?secret= query)
    const isAuthorized =
      (authHeader && authHeader.replace('Bearer ', '').trim() === adminSecret) ||
      secretParam === adminSecret ||
      process.env.NODE_ENV === 'development';

    if (!isAuthorized) {
      return NextResponse.json({ success: false, error: 'Unauthorized cron request' }, { status: 401 });
    }

    const host = process.env.INDEXNOW_HOST || 'maajankiwebtech.com';
    const key = process.env.INDEXNOW_KEY || 'a57e3f890cf24f5aabf2c253cb47ff21';
    const baseUrl = `https://${host}`;

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

    // Submit to IndexNow Protocol (Bing, Yandex, Seznam, Naver)
    const indexNowPayload = JSON.stringify({
      host: host,
      key: key,
      keyLocation: `${baseUrl}/${key}.txt`,
      urlList: urlList
    });

    const indexNowStatus = await new Promise((resolve) => {
      const options = {
        hostname: 'api.indexnow.org',
        path: '/indexnow',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(indexNowPayload)
        }
      };

      const req = https.request(options, (res) => {
        resolve(res.statusCode);
      });
      req.on('error', () => resolve(500));
      req.setTimeout(5000, () => {
        req.destroy();
        resolve(504);
      });
      req.write(indexNowPayload);
      req.end();
    });

    return NextResponse.json({
      success: true,
      message: '24-Hour Sitemap & Search Engine Sync completed successfully',
      timestamp: new Date().toISOString(),
      sitemapUrl: `${baseUrl}/sitemap.xml`,
      totalUrlsSynced: urlList.length,
      indexNowResponse: indexNowStatus,
      nextScheduledUpdate: 'Automatically in 24 hours'
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
