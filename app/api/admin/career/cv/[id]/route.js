import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import CareerApplication from '@/lib/models/CareerApplication';
import { validateAdminRequest } from '@/lib/admin-auth';

export async function GET(request, { params }) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json({ success: false, error: 'Application ID is required' }, { status: 400 });
    }

    await connectDB();
    const application = await CareerApplication.findById(id).select('name cvFileName cvFileData cvFileSize');

    if (!application || !application.cvFileData) {
      return NextResponse.json(
        { success: false, error: 'Resume / CV file not found for this candidate' },
        { status: 404 }
      );
    }

    // Clean base64 string if it contains data URI prefix
    let base64Data = application.cvFileData;
    if (base64Data.includes(';base64,')) {
      base64Data = base64Data.split(';base64,')[1];
    }

    const pdfBuffer = Buffer.from(base64Data, 'base64');
    const { searchParams } = new URL(request.url);
    const isDownload = searchParams.get('download') === '1';

    const safeCandidateName = (application.name || 'Candidate')
      .replace(/[^a-zA-Z0-9_-]/g, '_');
    const safeFileName = application.cvFileName || `${safeCandidateName}_Resume.pdf`;

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `${isDownload ? 'attachment' : 'inline'}; filename="${safeFileName}"`,
        'Content-Length': pdfBuffer.length.toString(),
        'Cache-Control': 'private, max-age=3600',
      },
    });
  } catch (error) {
    console.error('API /api/admin/career/cv/[id] GET Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
