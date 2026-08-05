export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Lead from '@/lib/models/Lead';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, source, url, company } = body;

    // Honeypot spam check (if honeypot field 'company' is filled, ignore silently)
    if (company) {
      return NextResponse.json({ success: true, message: 'Submission received' }, { status: 200 });
    }

    // Validate that at least contact info (email or phone) or query is provided
    if (!email && !phone && !name && !url) {
      return NextResponse.json({ success: false, error: 'At least one contact detail or URL is required' }, { status: 400 });
    }

    await connectDB();

    const newLead = await Lead.create({
      name: name || 'N/A',
      email: email || 'N/A',
      phone: phone || 'N/A',
      service: service || 'General Inquiry',
      message: message || '',
      source: source || 'other',
      url: url || '',
      status: 'new',
    });

    return NextResponse.json({ success: true, leadId: newLead._id }, { status: 201 });
  } catch (error) {
    console.error('Lead Save Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Server Error' }, { status: 500 });
  }
}
