import { NextResponse } from 'next/server';
import { verifyEmailAddress } from '@/lib/email-verifier';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ valid: false, reason: 'Email parameter missing' }, { status: 400 });
    }

    const result = await verifyEmailAddress(email);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ valid: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body || {};

    if (!email) {
      return NextResponse.json({ valid: false, reason: 'Email address is required' }, { status: 400 });
    }

    const result = await verifyEmailAddress(email);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ valid: false, error: error.message }, { status: 500 });
  }
}
