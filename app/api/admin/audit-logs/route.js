import { NextResponse } from 'next/server';
import { validateAdminRequest } from '@/lib/admin-auth';
import { getRecentAuditLogs, verifyAuditLedgerIntegrity, logAuditEvent } from '@/lib/audit-logger';

export async function GET(request) {
  const authValidation = await validateAdminRequest(request);
  if (!authValidation.valid) {
    return authValidation.response;
  }

  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || 'ALL';
    const limit = parseInt(searchParams.get('limit') || '50', 10);

    const logs = getRecentAuditLogs(limit, category);
    const integrity = verifyAuditLedgerIntegrity();

    return NextResponse.json({
      success: true,
      logs,
      integrity,
      totalCount: logs.length
    });
  } catch (error) {
    console.error('Audit Logs API Error:', error);
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
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || 'Admin UI';

    const entry = await logAuditEvent({
      actor: body.actor || 'Ashish Kumar (Admin)',
      actorId: body.actorId || 'admin-ashish',
      action: body.action || 'CUSTOM_ADMIN_ACTION',
      category: body.category || 'ADMIN_OPERATION',
      resource: body.resource || 'DASHBOARD',
      targetId: body.targetId || 'N/A',
      changes: body.changes || {},
      ip: clientIp,
      userAgent
    });

    return NextResponse.json({ success: true, entry }, { status: 201 });
  } catch (error) {
    console.error('Audit Log Create Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
