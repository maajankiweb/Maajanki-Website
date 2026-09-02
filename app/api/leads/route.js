export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Lead from '@/lib/models/Lead';
import { sendWhatsAppNotification } from '@/lib/notifications';
import { verifyEmailAddress } from '@/lib/email-verifier';
import { sendAIPersonalizedOutreachEmail } from '@/lib/ai-outreach-engine';

// In-memory rate limiting map (IP -> timestamp array)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter timestamps within the last 15 minutes
  const recentTimestamps = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return false;
}

function sanitizeText(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Strip script tags
    .replace(/<[^>]+>/g, '') // Strip all HTML tags
    .replace(/\$/g, '') // Strip NoSQL operator $
    .trim();
}

export async function POST(request) {
  try {
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '127.0.0.1';

    // Rate Limiting Check
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { success: false, error: 'Bohot saare requests prapt hue hain. Kripya 15 minute baad punah prayas karein.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, phone, service, message, source, url, company } = body || {};

    // Honeypot spam check (if honeypot field 'company' is filled, ignore silently)
    if (company) {
      return NextResponse.json({ success: true, message: 'Submission received' }, { status: 200 });
    }

    const cleanName = sanitizeText(name).slice(0, 100);
    const cleanEmail = sanitizeText(email).slice(0, 100);
    const cleanPhone = sanitizeText(phone).slice(0, 30);
    const cleanService = sanitizeText(service).slice(0, 100);
    const cleanMessage = sanitizeText(message).slice(0, 2000);
    const cleanSource = sanitizeText(source).slice(0, 50);
    const cleanUrl = sanitizeText(url).slice(0, 500);

    // Validate that at least contact info is provided
    if (!cleanEmail && !cleanPhone && !cleanName && !cleanUrl) {
      return NextResponse.json(
        { success: false, error: 'Kripya kam se kam ek contact detail (email ya phone) darj karein.' },
        { status: 400 }
      );
    }

    // 100% Free Real-Time Email Verification & Disposable Domain Blocker
    if (cleanEmail) {
      const emailCheck = await verifyEmailAddress(cleanEmail);
      if (!emailCheck.valid) {
        return NextResponse.json(
          { success: false, error: emailCheck.reason },
          { status: 400 }
        );
      }
    }

    await connectDB();

    const newLead = await Lead.create({
      name: cleanName || 'N/A',
      email: cleanEmail || 'N/A',
      phone: cleanPhone || 'N/A',
      service: cleanService || 'General Inquiry',
      message: cleanMessage || '',
      source: cleanSource || 'other',
      url: cleanUrl || '',
      status: 'New',
    });

    // 1. Server-side forwarding to Google Sheet Web App
    const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_WEB_APP_URL ||
      'https://script.google.com/macros/s/AKfycbyh3EGN-3ZQLOe1ECaGhlAAzhyPbJ0I_lmNKXMQIrGW-z0qsCuvd6WZc87-GsnfJ5ih/exec';

    try {
      const sheetBody = new URLSearchParams({
        name: cleanName || 'N/A',
        email: cleanEmail || 'N/A',
        phone: cleanPhone || 'N/A',
        service: cleanService || 'General Inquiry',
        message: cleanMessage || '',
        source: cleanSource || 'website',
        pageUrl: cleanUrl || '',
      }).toString();

      fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: sheetBody,
      }).catch((err) => console.warn('Google Sheet async sync notice:', err.message));
    } catch (sheetErr) {
      console.warn('Google Sheet forward warning:', sheetErr.message);
    }

    // 2. Trigger instant WhatsApp notification to admin (+91 9006543913)
    try {
      sendWhatsAppNotification({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        service: cleanService,
        message: cleanMessage,
        source: cleanSource,
        url: cleanUrl
      }).catch(err => console.warn('WhatsApp notification async error:', err.message));
    } catch (waErr) {
      console.warn('WhatsApp notification trigger warning:', waErr.message);
    }

    // 3. Trigger Free AI Personalized Outreach Email to the verified lead
    if (cleanEmail) {
      try {
        sendAIPersonalizedOutreachEmail({
          name: cleanName,
          email: cleanEmail,
          service: cleanService,
          message: cleanMessage,
          source: cleanSource
        }).catch(err => console.warn('AI Outreach auto-responder notice:', err.message));
      } catch (emailErr) {
        console.warn('AI Outreach trigger error:', emailErr.message);
      }
    }

    return NextResponse.json({ success: true, leadId: newLead._id }, { status: 201 });
  } catch (error) {
    console.error('Lead Save Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Server Error' }, { status: 500 });
  }
}
