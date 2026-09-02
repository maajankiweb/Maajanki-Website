import { NextResponse } from 'next/server';
import { validateAdminRequest, sanitizePayload } from '@/lib/admin-auth';

export async function POST(request) {
  const authValidation = await validateAdminRequest(request);
  if (!authValidation.valid) {
    return authValidation.response;
  }

  try {
    const rawBody = await request.json();
    const data = sanitizePayload(rawBody);

    const clientName = data.recipientName || data.name || 'Valued Client';
    const clientEmail = data.recipientEmail || data.email || '';
    const company = data.company || '';
    const service = data.serviceRequested || data.service || 'Web Development & Growth';
    const message = data.inquiryMessage || data.notes || '';
    const status = data.status || 'New';

    let subject = `MaaJanki Web Tech — Proposal & Next Steps for ${service}`;
    let emailBody = '';

    // Check if NVIDIA or OpenAI API is configured
    const apiKey = process.env.NVIDIA_API_KEY || process.env.OPENAI_API_KEY;

    if (apiKey) {
      try {
        const prompt = `You are Ashish Kumar, Founder & Solutions Architect at MaaJanki Web Tech (India's premier digital agency, MSME: UDYAM-BR-38-0014113).
Write a professional, high-converting B2B outreach email draft to a prospective client.

Client Name: ${clientName}
Company: ${company || 'N/A'}
Email: ${clientEmail}
Service Requested: ${service}
Client Inquiry / Pain Point: ${message || 'Looking for top-tier digital transformation and growth.'}
Status: ${status}

Requirements:
1. Subject line should be compelling and concise.
2. Tone: Highly professional, consultative, and action-oriented.
3. Reference MaaJanki Web Tech's expertise in Next.js web development, technical SEO, and digital marketing.
4. Offer a quick 15-minute discovery consultation.
5. Sign off with:
Ashish Kumar
Founder & Solutions Architect | MaaJanki Web Tech
Bagaha & Patna, Bihar, India
Phone: +91 90065 43913 | Email: info@maajankiwebtech.com
Website: https://maajankiwebtech.com

Format your response as JSON with keys: "subject" and "body".`;

        const isNvidia = !!process.env.NVIDIA_API_KEY;
        const endpoint = isNvidia 
          ? 'https://integrate.api.nvidia.com/v1/chat/completions'
          : 'https://api.openai.com/v1/chat/completions';
        
        const model = isNvidia ? 'meta/llama-3.1-70b-instruct' : 'gpt-4o-mini';

        const aiRes = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model: model,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3,
            max_tokens: 600
          })
        });

        if (aiRes.ok) {
          const aiJson = await aiRes.json();
          const content = aiJson.choices?.[0]?.message?.content || '';
          
          // Parse JSON from response
          const jsonMatch = content.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            if (parsed.subject && parsed.body) {
              subject = parsed.subject;
              emailBody = parsed.body;
            }
          }
        }
      } catch (aiErr) {
        console.warn('AI Email Generation Warning (Using Contextual Engine):', aiErr.message);
      }
    }

    // Fallback Context-Aware Synthesis Engine
    if (!emailBody) {
      subject = `MaaJanki Web Tech — Strategic Overview for ${service}${company ? ` (${company})` : ''}`;
      emailBody = `Dear ${clientName},

Thank you for connecting with MaaJanki Web Tech regarding your interest in ${service}.

We reviewed your requirements${message ? ` and specific focus on "${message}"` : ''}. Our engineering and growth strategy team specializes in building high-performance Next.js web applications, full-stack digital architectures, and ROI-focused SEO & marketing funnels designed to drive measurable business revenue.

Here is what we propose as our immediate next steps:
1. Schedule a 15-minute discovery consultation to align on technical scope and milestones.
2. Prepare a tailored architecture blueprint and itemized commercial proposal.
3. Establish project roadmap and delivery timelines.

Please let us know your preferred date and time this week for a brief call, or feel free to reach me directly at +91 90065 43913.

Looking forward to partnering on your digital success.

Warm regards,

Ashish Kumar
Founder & Solutions Architect
MaaJanki Web Tech (MSME: UDYAM-BR-38-0014113)
📞 +91 90065 43913
📧 info@maajankiwebtech.com
🌐 https://maajankiwebtech.com`;
    }

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(clientEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    return NextResponse.json({
      success: true,
      subject,
      body: emailBody,
      gmailUrl,
      recipient: clientEmail
    });
  } catch (error) {
    console.error('AI Draft Email API Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
