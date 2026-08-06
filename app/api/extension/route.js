import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
};

export async function GET() {
  return NextResponse.json(
    { success: true, status: 'ok', message: 'Extension API base ready' },
    { status: 200, headers: corsHeaders }
  );
}

export async function POST() {
  return NextResponse.json(
    { success: true, status: 'ok', message: 'Extension API base ready' },
    { status: 200, headers: corsHeaders }
  );
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}
