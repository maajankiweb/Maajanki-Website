import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import CareerApplication from '@/lib/models/CareerApplication';
import { validateAdminRequest, sanitizePayload, recordSecurityEvent } from '@/lib/admin-auth';

export async function GET(request) {
  const authCheck = await validateAdminRequest(request);
  if (!authCheck.authorized) return authCheck.response;

  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    const position = searchParams.get('position');

    const filter = {};

    if (status && status !== 'All') {
      filter.status = status;
    }

    if (position && position !== 'All') {
      filter.position = position;
    }

    if (search) {
      const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const searchRegex = new RegExp(escaped, 'i');
      filter.$or = [
        { name: searchRegex },
        { email: searchRegex },
        { phone: searchRegex },
        { position: searchRegex },
      ];
    }

    // Exclude cvFileData for performance, only return metadata
    const applications = await CareerApplication.find(filter)
      .select('-cvFileData')
      .sort({ createdAt: -1 })
      .lean();

    // Summary statistics
    const allStats = await CareerApplication.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
        },
      },
    ]);

    const stats = {
      total: 0,
      new: 0,
      reviewing: 0,
      shortlisted: 0,
      interviewed: 0,
      rejected: 0,
      hired: 0,
    };

    allStats.forEach((item) => {
      stats.total += item.count;
      const key = (item._id || '').toLowerCase();
      if (key in stats) {
        stats[key] = item.count;
      }
    });

    // Unique positions for filtering dropdown
    const positions = await CareerApplication.distinct('position');

    return NextResponse.json({
      success: true,
      applications,
      stats,
      positions: positions.filter(Boolean),
    });
  } catch (error) {
    console.error('API /api/admin/career GET Error:', error);
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
    const { id, ids, status } = body;

    const validStatuses = ['New', 'Reviewing', 'Shortlisted', 'Interviewed', 'Rejected', 'Hired'];
    if (!status || !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` },
        { status: 400 }
      );
    }

    // Bulk status update
    if (Array.isArray(ids) && ids.length > 0) {
      const result = await CareerApplication.updateMany(
        { _id: { $in: ids } },
        { $set: { status } }
      );

      recordSecurityEvent({
        action: 'CAREER_APPLICATION_BULK_STATUS_UPDATE',
        status: 'SUCCESS',
        actor: authCheck.userEmail,
        ip: authCheck.clientIp,
        details: `Updated ${result.modifiedCount} applications to ${status}`,
      });

      return NextResponse.json({
        success: true,
        message: `Updated status of ${result.modifiedCount} candidate(s) to ${status}`,
        modifiedCount: result.modifiedCount,
      });
    }

    // Single status update
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Application ID is required' },
        { status: 400 }
      );
    }

    const updated = await CareerApplication.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true }
    ).select('-cvFileData');

    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      );
    }

    recordSecurityEvent({
      action: 'CAREER_APPLICATION_STATUS_UPDATE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Updated application ${id} (${updated.name}) to ${status}`,
    });

    return NextResponse.json({
      success: true,
      message: `Status of ${updated.name} updated to ${status}`,
      application: updated,
    });
  } catch (error) {
    console.error('API /api/admin/career PATCH Error:', error);
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
    const { id, ids } = body;

    // Bulk delete
    if (Array.isArray(ids) && ids.length > 0) {
      const result = await CareerApplication.deleteMany({ _id: { $in: ids } });

      recordSecurityEvent({
        action: 'CAREER_APPLICATION_BULK_DELETE',
        status: 'SUCCESS',
        actor: authCheck.userEmail,
        ip: authCheck.clientIp,
        details: `Deleted ${result.deletedCount} applications`,
      });

      return NextResponse.json({
        success: true,
        message: `Deleted ${result.deletedCount} application(s)`,
        deletedCount: result.deletedCount,
      });
    }

    // Single delete
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Application ID is required' },
        { status: 400 }
      );
    }

    const deleted = await CareerApplication.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Application not found' },
        { status: 404 }
      );
    }

    recordSecurityEvent({
      action: 'CAREER_APPLICATION_DELETE',
      status: 'SUCCESS',
      actor: authCheck.userEmail,
      ip: authCheck.clientIp,
      details: `Deleted application ${id} (${deleted.name})`,
    });

    return NextResponse.json({
      success: true,
      message: `Application for ${deleted.name} has been deleted`,
    });
  } catch (error) {
    console.error('API /api/admin/career DELETE Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
