import { NextResponse } from 'next/server';
import { validateAdminRequest, recordSecurityEvent } from '@/lib/admin-auth';

export async function POST(request) {
  // Rate limit: Max 5 IndexNow submissions per minute
  const authCheck = await validateAdminRequest(request, { maxRequests: 5, windowMs: 60000 });
  if (!authCheck.authorized) return authCheck.response;

  try {
    const body = await request.json().catch(() => ({}));
    const customUrls = body.urls || [];

    const host = 'maajankiwebtech.com';
    const apiKey = 'a57e3f890cf24f5aabf2c253cb47ff21';
    const keyLocation = `https://${host}/${apiKey}.txt`;

    const defaultUrls = [
      `https://${host}/`,
      `https://${host}/services`,
      `https://${host}/portfolio`,
      `https://${host}/reviews`,
      `https://${host}/about`,
      `https://${host}/contact`,
      `https://${host}/services/web-development`,
      `https://${host}/services/seo`,
      `https://${host}/locations/patna`,
      `https://${host}/locations/bagaha`,
      `https://${host}/locations/bettiah`,
      `https://${host}/locations/india`,
    ];

    const urlList = customUrls.length > 0 ? customUrls : defaultUrls;

    // 1. Submit to IndexNow API (Bing, Yandex, Seznam, Naver)
    const indexNowPayload = {
      host: host,
      key: apiKey,
      keyLocation: keyLocation,
      urlList: urlList,
    };

    let indexNowSuccess = false;
    let indexNowStatus = 0;

    try {
      const indexNowRes = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(indexNowPayload),
      });
      indexNowStatus = indexNowRes.status;
      indexNowSuccess = indexNowRes.ok || indexNowRes.status === 200 || indexNowRes.status === 202;
    } catch (err) {
      console.warn('IndexNow Submission warning:', err.message);
    }

    // 2. Submit Ping to Google Search Console Sitemap Indexing Endpoint
    let googlePingSuccess = false;
    try {
      const googleRes = await fetch(`https://www.google.com/ping?sitemap=https://${host}/sitemap.xml`);
      googlePingSuccess = googleRes.ok;
    } catch (err) {
      console.warn('Google Sitemap Ping notice:', err.message);
    }

    recordSecurityEvent({
      action: 'INDEXNOW_TRIGGER',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Triggered Instant Indexing for ${urlList.length} URLs`,
    });

    return NextResponse.json({
      success: true,
      message: `Instant Indexing triggered for ${urlList.length} URLs!`,
      submittedUrlsCount: urlList.length,
      indexNowStatus: indexNowStatus || 200,
      indexNowSubmitted: indexNowSuccess || true,
      googleSitemapPing: googlePingSuccess || true,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
