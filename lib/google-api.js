import { google } from 'googleapis';

/**
 * Returns an authenticated GoogleAuth client using Service Account credentials.
 * Credentials can be supplied via process.env.GSC_CLIENT_EMAIL and process.env.GSC_PRIVATE_KEY,
 * or via GOOGLE_APPLICATION_CREDENTIALS.
 */
export function getGoogleAuth(customScopes = []) {
  const clientEmail = process.env.GSC_CLIENT_EMAIL;
  const privateKey = process.env.GSC_PRIVATE_KEY
    ? process.env.GSC_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined;

  const defaultScopes = [
    'https://www.googleapis.com/auth/webmasters.readonly',
    'https://www.googleapis.com/auth/webmasters',
    'https://www.googleapis.com/auth/indexing',
  ];

  const scopes = customScopes.length > 0 ? customScopes : defaultScopes;

  if (clientEmail && privateKey) {
    return new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes,
    });
  }

  // Fallback to default application credentials if env vars not provided
  return new google.auth.GoogleAuth({
    scopes,
  });
}

/**
 * Fetches Search Analytics from Google Search Console API.
 * @param {Object} options
 * @param {string} options.siteUrl - Canonical site URL (e.g. 'https://maajankiwebtech.com/')
 * @param {string} [options.startDate] - YYYY-MM-DD
 * @param {string} [options.endDate] - YYYY-MM-DD
 * @param {Array<string>} [options.dimensions] - ['query', 'page', 'country', 'device']
 * @param {number} [options.rowLimit] - Default 100
 */
export async function fetchGscSearchAnalytics({
  siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maajankiwebtech.com/',
  startDate,
  endDate,
  dimensions = ['query'],
  rowLimit = 100,
} = {}) {
  try {
    const auth = getGoogleAuth(['https://www.googleapis.com/auth/webmasters.readonly']);
    const searchconsole = google.searchconsole({ version: 'v1', auth });

    const today = new Date();
    const defaultEnd = today.toISOString().split('T')[0];
    const past30 = new Date(today.setDate(today.getDate() - 30));
    const defaultStart = past30.toISOString().split('T')[0];

    const res = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate: startDate || defaultStart,
        endDate: endDate || defaultEnd,
        dimensions,
        rowLimit,
      },
    });

    return {
      success: true,
      rows: res.data.rows || [],
    };
  } catch (error) {
    console.warn('[GSC API Warning]:', error.message);
    return {
      success: false,
      error: error.message,
      rows: [],
    };
  }
}

/**
 * Submits a URL notification to Google Instant Indexing API.
 * @param {string} url - Target URL to index or remove
 * @param {'URL_UPDATED' | 'URL_DELETED'} type - Notification type
 */
export async function submitGoogleIndexingUrl(url, type = 'URL_UPDATED') {
  try {
    const auth = getGoogleAuth(['https://www.googleapis.com/auth/indexing']);
    const indexing = google.indexing({ version: 'v3', auth });

    const res = await indexing.urlNotifications.publish({
      requestBody: {
        url,
        type,
      },
    });

    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    console.warn('[Google Indexing API Warning]:', error.message);
    return {
      success: false,
      error: error.message,
    };
  }
}
