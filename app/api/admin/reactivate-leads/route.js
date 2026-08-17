export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Lead from '@/lib/models/Lead';

export async function GET(request) {
  try {
    await connectDB();

    // Query leads that are not marked as 'Closed' or 'Spam'
    const dormantLeads = await Lead.find({
      status: { $in: ['New', 'Contacted', 'new', 'contacted'] },
    })
      .select('name email phone service createdAt source')
      .sort({ createdAt: -1 })
      .limit(100)
      .lean();

    const campaignScripts = {
      emailTemplate: {
        subject: "Exclusive 48-Hour Growth Audit & 15% Savings for {Name}",
        body: `Hi {Name},

We recently noticed your inquiry regarding {Service} with MaaJanki Web Tech.

As part of our Q3 Business Acceleration Drive, we are offering an exclusive 48-Hour Package:
1. Free 1-Minute AI & Website Performance Audit (Valued at ₹5,000)
2. 15% Pre-Payment Savings on all Growth & Enterprise Web Packages
3. 48-Hour Rapid Onboarding Guarantee

Would you be open for a brief 10-minute call this week to review your custom growth roadmap?

Best regards,
Ashish Kumar | Founder & CEO, MaaJanki Web Tech
Direct Call/WhatsApp: +91-9006543913`,
      },
      whatsAppTemplate: `Hi {Name}! 🚀 Quick update from MaaJanki Web Tech regarding your {Service} project. We are offering a limited 48-Hour Growth Audit + 15% discount on custom Next.js web applications & AI lead systems this week. Reply YES to claim your free strategy audit report!`,
    };

    return NextResponse.json({
      success: true,
      totalDormantLeads: dormantLeads.length,
      leads: dormantLeads,
      campaignScripts,
    });
  } catch (error) {
    console.error('Reactivation API Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Server Error' }, { status: 500 });
  }
}
