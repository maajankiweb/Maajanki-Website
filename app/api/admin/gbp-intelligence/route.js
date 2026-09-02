import { NextResponse } from 'next/server';
import { validateAdminRequest } from '@/lib/admin-auth';
import { getGBPAnalyticsData, generateAIReviewReply } from '@/lib/gbp-intelligence';

export async function GET(request) {
  const authValidation = await validateAdminRequest(request);
  if (!authValidation.valid) {
    return authValidation.response;
  }

  try {
    const data = getGBPAnalyticsData();
    return NextResponse.json({ success: true, gbp: data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  const authValidation = await validateAdminRequest(request);
  if (!authValidation.valid) {
    return authValidation.response;
  }

  try {
    const body = await request.json();
    const { action, author, rating, reviewText } = body;

    if (action === 'GENERATE_AI_REPLY') {
      const reply = generateAIReviewReply({ author, rating, reviewText });
      return NextResponse.json({ success: true, reply });
    }

    return NextResponse.json({ success: true, message: 'Action completed' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
