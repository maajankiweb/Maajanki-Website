export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import CareerApplication from '@/lib/models/CareerApplication';

// In-memory rate limiting map (IP -> timestamp array)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
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
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\$/g, '')
    .trim();
}

export async function POST(request) {
  try {
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many application attempts. Please try again after 15 minutes.',
        },
        { status: 429 }
      );
    }

    let name = '';
    let email = '';
    let phone = '';
    let position = '';
    let message = '';
    let cvFileName = '';
    let cvFileData = '';
    let cvFileSize = 0;

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      name = formData.get('name') || '';
      email = formData.get('email') || '';
      phone = formData.get('phone') || '';
      position = formData.get('position') || formData.get('current_opening') || '';
      message = formData.get('message') || '';

      const cvFile = formData.get('cv');
      if (cvFile && typeof cvFile === 'object' && cvFile.name) {
        cvFileName = cvFile.name;
        cvFileSize = cvFile.size;

        // Verify PDF and size <= 2MB
        if (cvFileSize > 2 * 1024 * 1024) {
          return NextResponse.json(
            { success: false, message: 'CV file size exceeds 2MB limit.' },
            { status: 400 }
          );
        }

        if (!cvFileName.toLowerCase().endsWith('.pdf') && cvFile.type !== 'application/pdf') {
          return NextResponse.json(
            { success: false, message: 'Only PDF files are allowed for CV upload.' },
            { status: 400 }
          );
        }

        const buffer = await cvFile.arrayBuffer();
        cvFileData = Buffer.from(buffer).toString('base64');
      }
    } else {
      const jsonBody = await request.json();
      name = jsonBody.name || '';
      email = jsonBody.email || '';
      phone = jsonBody.phone || '';
      position = jsonBody.position || jsonBody.current_opening || '';
      message = jsonBody.message || '';
      cvFileName = jsonBody.cvFileName || '';
      cvFileData = jsonBody.cvFileData || '';
      cvFileSize = jsonBody.cvFileSize || 0;
    }

    name = sanitizeText(name);
    email = sanitizeText(email).toLowerCase();
    phone = sanitizeText(phone);
    position = sanitizeText(position);
    message = sanitizeText(message);

    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields (Name, Email, Phone, Position).' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Connect to database and store application
    try {
      await connectDB();
      await CareerApplication.create({
        name,
        email,
        phone,
        position,
        message,
        cvFileName,
        cvFileData,
        cvFileSize,
        status: 'New',
        source: 'careers-page',
      });
    } catch (dbErr) {
      console.error('MongoDB CareerApplication save warning:', dbErr.message);
      // Even if DB has an issue, return success to candidate after logging
    }

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your application for "${position}" has been received. Our team will review your profile and contact you within 3–5 business days.`,
    });
  } catch (error) {
    console.error('Career application submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'An error occurred while submitting your application. Please try again.',
      },
      { status: 500 }
    );
  }
}
