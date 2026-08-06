import { NextResponse } from 'next/server';

// Silently handle polling requests from browser extensions (e.g. /api/extension/config, /api/extension/jobs)
export async function GET() {
  return NextResponse.json({ success: true, message: 'Extension API stub' }, { status: 200 });
}

export async function POST() {
  return NextResponse.json({ success: true, message: 'Extension API stub' }, { status: 200 });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
