import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import TeamMember from '@/lib/models/TeamMember';
import { validateAdminRequest, sanitizePayload, recordSecurityEvent } from '@/lib/admin-auth';
import { INITIAL_TEAM } from '@/lib/team-data';

export async function GET(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();
    const count = await TeamMember.countDocuments();

    // Auto seed if collection empty
    if (count === 0) {
      const ops = INITIAL_TEAM.map((member) => ({
        updateOne: {
          filter: { name: member.name },
          update: { $setOnInsert: member },
          upsert: true,
        },
      }));
      await TeamMember.bulkWrite(ops);
    }

    const members = await TeamMember.find({}).sort({ order: 1, createdAt: 1 }).lean();
    return NextResponse.json({ success: true, count: members.length, members });
  } catch (error) {
    console.error('API /api/admin/team GET Error:', error);
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
    const {
      name,
      role,
      category,
      photo,
      linkedin,
      showSocial,
      bio,
      bio2,
      bio3,
      coreExpertise,
      tags,
      order,
      isActive,
    } = body;

    if (!name || !role || !photo || !bio) {
      return NextResponse.json(
        { success: false, error: 'Please provide Name, Role, Photo URL/Image, and Bio.' },
        { status: 400 }
      );
    }

    // Format arrays
    const formattedExpertise = Array.isArray(coreExpertise)
      ? coreExpertise.map((s) => String(s).trim()).filter(Boolean)
      : typeof coreExpertise === 'string'
      ? coreExpertise.split(',').map((s) => s.trim()).filter(Boolean)
      : [];

    const formattedTags = Array.isArray(tags)
      ? tags.map((s) => String(s).trim()).filter(Boolean)
      : typeof tags === 'string'
      ? tags.split(',').map((s) => s.trim()).filter(Boolean)
      : [];

    const newMember = await TeamMember.create({
      name: name.trim(),
      role: role.trim(),
      category: category === 'leadership' ? 'leadership' : 'squad',
      photo: photo.trim(),
      linkedin: linkedin ? linkedin.trim() : '',
      showSocial: showSocial !== undefined ? Boolean(showSocial) : true,
      bio: bio.trim(),
      bio2: bio2 ? bio2.trim() : '',
      bio3: bio3 ? bio3.trim() : '',
      coreExpertise: formattedExpertise,
      tags: formattedTags,
      order: order !== undefined ? Number(order) : 0,
      isActive: isActive !== undefined ? Boolean(isActive) : true,
    });

    recordSecurityEvent({
      action: 'TEAM_MEMBER_CREATE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Created Team Member: ${name} (${role})`,
    });

    return NextResponse.json({ success: true, member: newMember }, { status: 201 });
  } catch (error) {
    console.error('API /api/admin/team POST Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
