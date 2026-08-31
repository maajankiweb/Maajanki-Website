import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Portfolio from '@/lib/models/Portfolio';
import { validateAdminRequest, sanitizePayload, sanitizeString, recordSecurityEvent } from '@/lib/admin-auth';

export async function GET(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();
    const projects = await Portfolio.find({}).sort({ order: 1, createdAt: -1 }).lean();
    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error('API /api/admin/portfolio GET Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();
    const rawBody = await request.json();
    const body = sanitizePayload(rawBody);
    const { title, category, description, fullImage, heroImage, link, imgTitle, featured, order } = body;

    if (!title || !fullImage || !heroImage || !link) {
      return NextResponse.json(
        { success: false, error: 'Please provide Title, Full Page Image, Hero Image, and Live URL.' },
        { status: 400 }
      );
    }

    const newProject = await Portfolio.create({
      title: title.trim(),
      category: category ? category.trim() : 'Web Development',
      description: description ? description.trim() : '',
      fullImage: fullImage.trim(),
      heroImage: heroImage.trim(),
      link: link.trim(),
      imgTitle: imgTitle ? imgTitle.trim() : `${title} – MaaJanki Web Tech Project`,
      featured: featured !== undefined ? Boolean(featured) : true,
      order: order ? Number(order) : 0,
    });

    recordSecurityEvent({
      action: 'PORTFOLIO_CREATE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Created Portfolio project: ${title}`,
    });

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (error) {
    console.error('API /api/admin/portfolio POST Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
