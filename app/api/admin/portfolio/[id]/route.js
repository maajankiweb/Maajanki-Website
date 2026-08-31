import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Portfolio from '@/lib/models/Portfolio';
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

    const updatedProject = await Portfolio.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updatedProject) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    recordSecurityEvent({
      action: 'PORTFOLIO_UPDATE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Updated Portfolio project #${id}`,
    });

    return NextResponse.json({ success: true, project: updatedProject });
  } catch (error) {
    console.error('API /api/admin/portfolio/[id] PATCH Error:', error);
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

    const deletedProject = await Portfolio.findByIdAndDelete(id);
    if (!deletedProject) {
      return NextResponse.json({ success: false, error: 'Project not found' }, { status: 404 });
    }

    recordSecurityEvent({
      action: 'PORTFOLIO_DELETE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Deleted Portfolio project #${id}`,
    });

    return NextResponse.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    console.error('API /api/admin/portfolio/[id] DELETE Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
