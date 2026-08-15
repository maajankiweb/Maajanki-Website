export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { connectDB } from '@/lib/db';
import Lead from '@/lib/models/Lead';

const DEFAULT_ADMIN_EMAILS = [
  'info@maajankiwebtech.com',
  'maajankiwebtech@gmail.com',
  'maajankiweb@gmail.com',
  '@maajankiwebtech.com',
];
const ALLOWED_ADMIN_EMAILS = process.env.ALLOWED_ADMIN_EMAILS
  ? process.env.ALLOWED_ADMIN_EMAILS.split(',').map((e) => e.trim().toLowerCase()).filter(Boolean)
  : DEFAULT_ADMIN_EMAILS;

const ALLOWED_STATUSES = ['New', 'Contacted', 'Qualified', 'Closed', 'Spam'];

function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/\$/g, '').trim();
}

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

    // Check email restriction
    if (ALLOWED_ADMIN_EMAILS.length > 0) {
      const user = await currentUser();
      const userEmails = (user?.emailAddresses?.map((e) => e.emailAddress.toLowerCase()) || []).filter(Boolean);
      if (user?.primaryEmailAddress?.emailAddress) {
        const primary = user.primaryEmailAddress.emailAddress.toLowerCase();
        if (!userEmails.includes(primary)) userEmails.push(primary);
      }

      const isMatch = userEmails.some((userEmail) =>
        ALLOWED_ADMIN_EMAILS.some((pattern) => {
          if (pattern.startsWith('@')) {
            return userEmail.endsWith(pattern);
          }
          return userEmail === pattern;
        })
      );

      if (!isMatch) {
        console.warn(`[SECURITY ALERT] Unauthorized admin access attempt by: ${userEmails.join(', ')} (IP: ${request.headers.get('x-forwarded-for') || 'unknown'})`);
        return false;
      }
    }

    return true;
  } catch (err) {
    console.error('[SECURITY ERROR] Authorization check failed:', err);
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
    const rawSource = searchParams.get('source');
    const rawStatus = searchParams.get('status');

    const source = sanitizeString(rawSource);
    const status = sanitizeString(rawStatus);

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
    const body = await request.json();
    const id = sanitizeString(body?.id);
    const status = sanitizeString(body?.status);

    if (!id || !status) {
      return NextResponse.json({ success: false, error: 'ID and Status required' }, { status: 400 });
    }

    if (!ALLOWED_STATUSES.includes(status)) {
      return NextResponse.json({ success: false, error: 'Invalid lead status value' }, { status: 400 });
    }

    const updatedLead = await Lead.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedLead) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

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
    const rawId = searchParams.get('id');
    const id = sanitizeString(rawId);

    if (!id) {
      return NextResponse.json({ success: false, error: 'Lead ID required' }, { status: 400 });
    }

    const deleted = await Lead.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Lead not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Lead deleted' }, { status: 200 });
  } catch (error) {
    console.error('Admin Delete Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
