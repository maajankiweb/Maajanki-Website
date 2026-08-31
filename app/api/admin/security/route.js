import { NextResponse } from 'next/server';
import { validateAdminRequest, getSecurityAuditLogs, getAllowedAdminEmails } from '@/lib/admin-auth';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    const logs = getSecurityAuditLogs(50);
    const allowedEmails = getAllowedAdminEmails();

    const securityStats = {
      systemStatus: 'SECURE_ACTIVE',
      twoFactorEnforced: true,
      sessionTimeoutMins: 15,
      whitelistedEmailsCount: allowedEmails.length,
      whitelistedEmails: allowedEmails,
      recentAuditLogs: logs,
      firewallRules: {
        csrfProtection: 'STRICT_ENABLED',
        rateLimiting: 'ACTIVE_60_RPM',
        nosqlSanitization: 'DEEP_RECURSIVE',
        xssSanitization: 'ENABLED',
        noindexAdminGuards: 'ENFORCED',
      },
      lastSecurityCheck: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, security: securityStats }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
