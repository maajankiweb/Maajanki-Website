import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import TeamMember from '@/lib/models/TeamMember';
import { validateAdminRequest, sanitizePayload, sanitizeString, recordSecurityEvent } from '@/lib/admin-auth';

export async function PATCH(req, { params }) {
  const authCheck = await validateAdminRequest(req);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();
    const resolvedParams = await params;
    const id = sanitizeString(resolvedParams?.id);
    const rawBody = await req.json();
    const body = sanitizePayload(rawBody);

    if (body.coreExpertise && typeof body.coreExpertise === 'string') {
      body.coreExpertise = body.coreExpertise.split(',').map((s) => s.trim()).filter(Boolean);
    }
    if (body.tags && typeof body.tags === 'string') {
      body.tags = body.tags.split(',').map((s) => s.trim()).filter(Boolean);
    }

    const updatedMember = await TeamMember.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updatedMember) {
      return NextResponse.json({ success: false, error: 'Team member not found' }, { status: 404 });
    }

    recordSecurityEvent({
      action: 'TEAM_MEMBER_UPDATE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Updated Team Member #${id} (${updatedMember.name})`,
    });

    return NextResponse.json({ success: true, member: updatedMember });
  } catch (error) {
    console.error('API /api/admin/team/[id] PATCH Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const authCheck = await validateAdminRequest(req);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();
    const resolvedParams = await params;
    const id = sanitizeString(resolvedParams?.id);

    const deletedMember = await TeamMember.findByIdAndDelete(id);
    if (!deletedMember) {
      return NextResponse.json({ success: false, error: 'Team member not found' }, { status: 404 });
    }

    recordSecurityEvent({
      action: 'TEAM_MEMBER_DELETE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Deleted Team Member #${id} (${deletedMember.name})`,
    });

    return NextResponse.json({ success: true, message: 'Team member deleted successfully' });
  } catch (error) {
    console.error('API /api/admin/team/[id] DELETE Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
