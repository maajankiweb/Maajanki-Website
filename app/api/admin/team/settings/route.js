import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import TeamSettings from '@/lib/models/TeamSettings';
import { validateAdminRequest, sanitizePayload } from '@/lib/admin-auth';

const DEFAULT_SETTINGS = {
  key: 'team_page_settings',
  heroGroupImage: '/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp',
  middleBannerImage: '/images/pages/main-services-pages/About-Maajanki-Web-Tech.webp',
  heroBadgeText: 'Our Collective',
};

// GET team page media settings
export async function GET() {
  try {
    await connectDB();
    let settings = await TeamSettings.findOne({ key: 'team_page_settings' }).lean();
    if (!settings) {
      settings = await TeamSettings.create(DEFAULT_SETTINGS);
    }
    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error('API /api/admin/team/settings GET Error:', error);
    return NextResponse.json({ success: true, fallback: true, settings: DEFAULT_SETTINGS });
  }
}

// POST / PUT update team page media settings
export async function POST(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();
    const rawBody = await request.json();
    const body = sanitizePayload(rawBody);

    const updateData = {};
    if (body.heroGroupImage) updateData.heroGroupImage = body.heroGroupImage;
    if (body.middleBannerImage) updateData.middleBannerImage = body.middleBannerImage;
    if (body.heroBadgeText) updateData.heroBadgeText = body.heroBadgeText;

    const settings = await TeamSettings.findOneAndUpdate(
      { key: 'team_page_settings' },
      { $set: updateData },
      { new: true, upsert: true }
    );

    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error('API /api/admin/team/settings POST Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
