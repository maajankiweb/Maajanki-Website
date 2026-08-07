import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ success: true, message: 'MaaJanki Web Tech API' }, { status: 200 });
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}

export async function POST() {
  return NextResponse.json({ success: true, message: 'MaaJanki Web Tech API' }, { status: 200 });
}
