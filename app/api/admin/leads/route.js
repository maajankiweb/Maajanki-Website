export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { connectDB } from '@/lib/db';
import Lead from '@/lib/models/Lead';

const ALLOWED_ADMIN_EMAILS = (process.env.ALLOWED_ADMIN_EMAILS || '')
  .split(',')
  .map((e) => e.trim().toLowerCase())
  .filter(Boolean);

async function isAuthorized(request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      // Fallback: support legacy ADMIN_SECRET_KEY for programmatic calls
      const authHeader = request.headers.get('authorization');
      const secretKey = process.env.ADMIN_SECRET_KEY;
      if (authHeader && secretKey) {
        const token = authHeader.replace('Bearer ', '').trim();
        if (token === secretKey) return true;
      }
      return false;
    }

    // Check email restriction if ALLOWED_ADMIN_EMAILS is configured
    if (ALLOWED_ADMIN_EMAILS.length > 0) {
      const user = await currentUser();
      const userEmail = user?.primaryEmailAddress?.emailAddress?.toLowerCase() || '';
      if (!ALLOWED_ADMIN_EMAILS.includes(userEmail)) {
        return false;
      }
    }

    return true;
  } catch {
    return false;
  }
}

export async function GET(request) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ success: false, error: 'Unauthorized access' }, { status: 401 });
  }

  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const source = searchParams.get('source');
    const status = searchParams.get('status');

    let query = {};
    if (source && source !== 'all') {
      query.source = source;
    }
    if (status && status !== 'all') {
      query.status = status;
    }

    const leads = await Lead.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error) {
    console.error('Admin Fetch Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ success: false, error: 'Unauthorized access' }, { status: 401 });
  }

  try {
    await connectDB();
    const { id, status } = await request.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID and Status required' }, { status: 400 });
    }

    const updatedLead = await Lead.findByIdAndUpdate(id, { status }, { new: true });
    return NextResponse.json({ success: true, lead: updatedLead }, { status: 200 });
  } catch (error) {
    console.error('Admin Update Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  if (!(await isAuthorized(request))) {
    return NextResponse.json({ success: false, error: 'Unauthorized access' }, { status: 401 });
  }

  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID required' }, { status: 400 });
    }

    await Lead.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Lead deleted' }, { status: 200 });
  } catch (error) {
    console.error('Admin Delete Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
