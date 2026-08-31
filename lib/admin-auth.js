import { auth, currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

/**
 * Default authorized email patterns if not overridden in environment variables
 */
const DEFAULT_ALLOWED_EMAILS = [
  'info@maajankiwebtech.com',
  'maajankiwebtech@gmail.com',
  'maajankiweb@gmail.com',
  '@maajankiwebtech.com',
];

/**
 * Parse allowed emails from process.env.ALLOWED_ADMIN_EMAILS
 */
export function getAllowedAdminEmails() {
  const envList = process.env.ALLOWED_ADMIN_EMAILS;
  if (!envList) return DEFAULT_ALLOWED_EMAILS;
  return envList
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

/**
 * Deep sanitization for strings against XSS and NoSQL injection
 */
export function sanitizeString(val) {
  if (typeof val !== 'string') return '';
  return val
    .replace(/\$/g, '') // Remove MongoDB operator $
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Strip script tags
    .replace(/<[^>]+>/g, '') // Strip HTML tags
    .trim();
}

/**
 * Deep sanitization for objects/arrays
 */
export function sanitizePayload(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(sanitizePayload);

  const sanitized = {};
  for (const [key, value] of Object.entries(obj)) {
    // Strip keys starting with $ (NoSQL operator injection)
    if (key.startsWith('$')) continue;

    if (typeof value === 'string') {
      sanitized[key] = sanitizeString(value);
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizePayload(value);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
}

/**
 * In-memory sliding window rate limiter
 */
const rateLimitMap = new Map();
const RATE_LIMIT_CLEANUP_INTERVAL = 60 * 1000; // 1 minute

// Periodic cleanup of stale rate-limit keys
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, timestamps] of rateLimitMap.entries()) {
      const valid = timestamps.filter((t) => now - t < 60000);
      if (valid.length === 0) rateLimitMap.delete(key);
      else rateLimitMap.set(key, valid);
    }
  }, RATE_LIMIT_CLEANUP_INTERVAL);
}

export function checkRateLimit(key, maxRequests = 60, windowMs = 60000) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(key) || [];
  const valid = timestamps.filter((t) => now - t < windowMs);

  if (valid.length >= maxRequests) {
    return false; // Rate limit exceeded
  }

  valid.push(now);
  rateLimitMap.set(key, valid);
  return true;
}

/**
 * In-memory security audit log queue
 */
const auditLogQueue = [];
const MAX_AUDIT_LOGS = 200;

export function recordSecurityEvent({ action, status, actor, ip, details }) {
  const event = {
    id: `sec-${Date.now()}-${Math.random().toString(36).substr(2, 6)}`,
    timestamp: new Date().toISOString(),
    action,
    status: status || 'SUCCESS',
    actor: actor || 'system',
    ip: ip || '127.0.0.1',
    details: details || '',
  };

  auditLogQueue.unshift(event);
  if (auditLogQueue.length > MAX_AUDIT_LOGS) {
    auditLogQueue.pop();
  }

  if (status === 'FAILURE' || status === 'ALERT') {
    console.warn(`[SECURITY ${status}] ${action} by ${actor} from IP ${ip}: ${details}`);
  }

  return event;
}

export function getSecurityAuditLogs(limit = 50) {
  return auditLogQueue.slice(0, limit);
}

/**
 * Centralized Enterprise Admin Request Validator
 * Validates:
 * 1. Clerk Authentication Session
 * 2. Email Address Whitelist Check
 * 3. Fallback ADMIN_SECRET_KEY Bearer Token Verification
 * 4. CSRF / Origin Header Integrity for Mutations
 * 5. Rate Limiting
 */
export async function validateAdminRequest(request, options = {}) {
  const { maxRequests = 60, windowMs = 60000, allowSecretKeyFallback = true } = options;
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '127.0.0.1';

  // 1. Rate Limiting Check
  if (!checkRateLimit(`admin-${clientIp}`, maxRequests, windowMs)) {
    recordSecurityEvent({
      action: 'RATE_LIMIT_EXCEEDED',
      status: 'ALERT',
      actor: 'unknown',
      ip: clientIp,
      details: `Exceeded ${maxRequests} requests per ${windowMs / 1000}s on ${request.nextUrl?.pathname || request.url}`,
    });
    return {
      authorized: false,
      response: NextResponse.json(
        { success: false, error: 'Rate limit exceeded. Please wait a moment.' },
        { status: 429 }
      ),
    };
  }

  // 2. CSRF / Origin Verification for State-Modifying HTTP Methods
  const method = request.method?.toUpperCase();
  if (['POST', 'PATCH', 'PUT', 'DELETE'].includes(method)) {
    const origin = request.headers.get('origin');
    const referer = request.headers.get('referer');
    const host = request.headers.get('host');

    if (origin || referer) {
      const sourceUrl = origin || referer;
      const isAllowedOrigin =
        sourceUrl.includes('maajankiwebtech.com') ||
        sourceUrl.includes('localhost') ||
        sourceUrl.includes('127.0.0.1') ||
        (host && sourceUrl.includes(host));

      if (!isAllowedOrigin) {
        recordSecurityEvent({
          action: 'CSRF_BLOCKED',
          status: 'ALERT',
          actor: 'untrusted_origin',
          ip: clientIp,
          details: `Blocked ${method} from untrusted origin: ${sourceUrl}`,
        });
        return {
          authorized: false,
          response: NextResponse.json(
            { success: false, error: 'Cross-Site Request Forgery (CSRF) blocked.' },
            { status: 403 }
          ),
        };
      }
    }
  }

  // 3. Authenticate via Clerk Session
  try {
    const { userId } = await auth();

    if (userId) {
      const user = await currentUser();
      const userEmails = (user?.emailAddresses?.map((e) => e.emailAddress.toLowerCase()) || []).filter(Boolean);
      if (user?.primaryEmailAddress?.emailAddress) {
        const primary = user.primaryEmailAddress.emailAddress.toLowerCase();
        if (!userEmails.includes(primary)) userEmails.push(primary);
      }

      const allowedPatterns = getAllowedAdminEmails();
      const isMatch = userEmails.some((userEmail) =>
        allowedPatterns.some((pattern) => {
          if (pattern.startsWith('@')) return userEmail.endsWith(pattern);
          return userEmail === pattern;
        })
      );

      if (!isMatch) {
        recordSecurityEvent({
          action: 'UNAUTHORIZED_EMAIL_ACCESS',
          status: 'FAILURE',
          actor: userEmails.join(', '),
          ip: clientIp,
          details: `Attempted access to ${request.nextUrl?.pathname || request.url}`,
        });
        return {
          authorized: false,
          response: NextResponse.json(
            { success: false, error: 'Access Denied: Account not on administrative allowlist.' },
            { status: 403 }
          ),
        };
      }

      return {
        authorized: true,
        userEmail: userEmails[0] || 'admin@maajankiwebtech.com',
        userId,
        clientIp,
      };
    }
  } catch (err) {
    // Clerk session retrieval error, proceed to fallback check
  }

  // 4. Fallback: ADMIN_SECRET_KEY Bearer token (for automated cron scripts / microservices)
  if (allowSecretKeyFallback) {
    const authHeader = request.headers.get('authorization');
    const secretKey = process.env.ADMIN_SECRET_KEY;

    if (authHeader && secretKey) {
      const token = authHeader.replace('Bearer ', '').trim();
      if (token === secretKey) {
        return {
          authorized: true,
          userEmail: 'system-service-account',
          userId: 'system-cron',
          clientIp,
        };
      }
    }
  }

  recordSecurityEvent({
    action: 'UNAUTHENTICATED_ACCESS_BLOCKED',
    status: 'FAILURE',
    actor: 'anonymous',
    ip: clientIp,
    details: `Blocked request to ${request.nextUrl?.pathname || request.url}`,
  });

  return {
    authorized: false,
    response: NextResponse.json(
      { success: false, error: 'Unauthorized: Authentication required.' },
      { status: 401 }
    ),
  };
}
