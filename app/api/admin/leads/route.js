export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Lead from '@/lib/models/Lead';
import { validateAdminRequest, sanitizeString, recordSecurityEvent } from '@/lib/admin-auth';

const ALLOWED_STATUSES = ['New', 'Contacted', 'Qualified', 'Closed', 'Spam', 'new', 'contacted', 'qualified', 'closed', 'spam'];

export async function GET(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

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
      // Support case-insensitive status matching
      query.status = { $regex: new RegExp(`^${status}$`, 'i') };
    }

    const leads = await Lead.find(query).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, leads }, { status: 200 });
  } catch (error) {
    console.error('Admin Leads Fetch Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

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

    recordSecurityEvent({
      action: 'LEAD_STATUS_UPDATE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Updated Lead #${id} status to ${status}`,
    });

    return NextResponse.json({ success: true, lead: updatedLead }, { status: 200 });
  } catch (error) {
    console.error('Admin Leads Update Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

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

    recordSecurityEvent({
      action: 'LEAD_DELETE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Permanently deleted Lead #${id}`,
    });

    return NextResponse.json({ success: true, message: 'Lead deleted' }, { status: 200 });
  } catch (error) {
    console.error('Admin Leads Delete Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
