import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import JobOpening from '@/lib/models/JobOpening';
import CareerApplication from '@/lib/models/CareerApplication';
import { validateAdminRequest, sanitizePayload, recordSecurityEvent } from '@/lib/admin-auth';

export async function GET(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();

    const jobs = await JobOpening.find({}).sort({ order: 1, createdAt: -1 }).lean();

    // Calculate applicant counts per position title
    const appCounts = await CareerApplication.aggregate([
      {
        $group: {
          _id: '$position',
          count: { $sum: 1 },
        },
      },
    ]);

    const countMap = {};
    appCounts.forEach((c) => {
      if (c._id) countMap[c._id.toLowerCase().trim()] = c.count;
    });

    const enrichedJobs = jobs.map((job) => {
      const key = (job.title || '').toLowerCase().trim();
      return {
        ...job,
        applicantCount: countMap[key] || 0,
      };
    });

    return NextResponse.json({ success: true, jobs: enrichedJobs });
  } catch (error) {
    console.error('API /api/admin/jobs GET Error:', error);
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
      title,
      category,
      department,
      experience,
      location,
      salary,
      openings,
      deadline,
      skills,
      qualification,
      duration,
      description,
      requirements,
      badges,
      isActive,
      order,
    } = body;

    if (!title || !title.trim()) {
      return NextResponse.json({ success: false, error: 'Job title is required' }, { status: 400 });
    }

    const defaultBadges = [
      {
        text: category === 'intern' ? 'Internship' : category === 'parttime' ? 'Part-Time' : 'Full-Time',
        type: category || 'fulltime',
      },
      { text: experience || '0–1 Yrs', type: 'exp' },
    ];

    const newJob = await JobOpening.create({
      title: title.trim(),
      category: category || 'fulltime',
      department: department || 'General',
      experience: experience || '0–1 Years',
      location: location || 'Bagaha, Bihar (HQ) / Hybrid',
      salary: salary || 'Competitive',
      openings: openings ? Number(openings) : 1,
      deadline: deadline || '',
      skills: skills || '',
      qualification: qualification || '',
      duration: duration || (category === 'intern' ? '3 to 6 Months' : 'Full-Time position.'),
      description: description || '',
      requirements: Array.isArray(requirements)
        ? requirements
        : typeof requirements === 'string' && requirements.trim()
        ? requirements.split('\n').map((r) => r.trim()).filter(Boolean)
        : [],
      badges: Array.isArray(badges) && badges.length > 0 ? badges : defaultBadges,
      isActive: isActive !== undefined ? Boolean(isActive) : true,
      order: order !== undefined ? Number(order) : 0,
    });

    recordSecurityEvent({
      action: 'JOB_OPENING_CREATE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Created job opening: ${title} (${newJob._id})`,
    });

    return NextResponse.json({ success: true, job: newJob }, { status: 201 });
  } catch (error) {
    console.error('API /api/admin/jobs POST Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PATCH(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();
    const rawBody = await request.json();
    const body = sanitizePayload(rawBody);
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'Job ID is required' }, { status: 400 });
    }

    if (updates.requirements && typeof updates.requirements === 'string') {
      updates.requirements = updates.requirements
        .split('\n')
        .map((r) => r.trim())
        .filter(Boolean);
    }

    if (updates.category && (!updates.badges || updates.badges.length === 0)) {
      updates.badges = [
        {
          text: updates.category === 'intern' ? 'Internship' : updates.category === 'parttime' ? 'Part-Time' : 'Full-Time',
          type: updates.category,
        },
        { text: updates.experience || '0–1 Yrs', type: 'exp' },
      ];
    }

    const updated = await JobOpening.findByIdAndUpdate(id, { $set: updates }, { new: true });

    if (!updated) {
      return NextResponse.json({ success: false, error: 'Job opening not found' }, { status: 404 });
    }

    recordSecurityEvent({
      action: 'JOB_OPENING_UPDATE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Updated job opening: ${updated.title} (${id})`,
    });

    return NextResponse.json({ success: true, job: updated });
  } catch (error) {
    console.error('API /api/admin/jobs PATCH Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();
    const rawBody = await request.json();
    const body = sanitizePayload(rawBody);
    const { id } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: 'Job ID is required' }, { status: 400 });
    }

    const deleted = await JobOpening.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Job opening not found' }, { status: 404 });
    }

    recordSecurityEvent({
      action: 'JOB_OPENING_DELETE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Deleted job opening: ${deleted.title} (${id})`,
    });

    return NextResponse.json({
      success: true,
      message: `Job opening "${deleted.title}" has been deleted.`,
    });
  } catch (error) {
    console.error('API /api/admin/jobs DELETE Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
