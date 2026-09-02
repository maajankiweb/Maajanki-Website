import { NextResponse } from 'next/server';
import { validateAdminRequest } from '@/lib/admin-auth';
import { getSocialAnalyticsData } from '@/lib/social-analytics';

export async function GET(request) {
  const authValidation = await validateAdminRequest(request);
  if (!authValidation.valid) {
    return authValidation.response;
  }

  try {
    const data = getSocialAnalyticsData();
    return NextResponse.json({ success: true, social: data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
