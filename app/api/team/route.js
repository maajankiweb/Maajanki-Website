import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import TeamMember from '@/lib/models/TeamMember';
import { INITIAL_TEAM } from '@/lib/team-data';

export async function GET() {
  try {
    await connectDB();
    const count = await TeamMember.countDocuments();

    if (count < INITIAL_TEAM.length) {
      const ops = INITIAL_TEAM.map((member) => ({
        updateOne: {
          filter: { name: member.name },
          update: { $set: member },
          upsert: true,
        },
      }));
      await TeamMember.bulkWrite(ops);
    }

    const members = await TeamMember.find({ isActive: true }).sort({ order: 1, createdAt: 1 }).lean();
    const leaders = members.filter((m) => m.category === 'leadership');
    const squad = members.filter((m) => m.category === 'squad');

    let settings = null;
    try {
      const TeamSettings = (await import('@/lib/models/TeamSettings')).default;
      settings = await TeamSettings.findOne({ key: 'team_page_settings' }).lean();
    } catch {
      // ignore
    }

    return NextResponse.json({
      success: true,
      count: members.length,
      members,
      leaders,
      squad,
      settings: settings || {
        heroGroupImage: '/images/pages/main-services-pages/our-service-banner-image-Maajanki-Web-Tech.webp',
        middleBannerImage: '/images/pages/main-services-pages/About-Maajanki-Web-Tech.webp',
        heroBadgeText: 'Our Collective'
      }
    });
  } catch (error) {
    console.error('API /api/team GET Error (falling back to INITIAL_TEAM):', error.message || error);
    const leaders = INITIAL_TEAM.filter((m) => m.category === 'leadership');
    const squad = INITIAL_TEAM.filter((m) => m.category === 'squad');
    return NextResponse.json({
      success: true,
      fallback: true,
      count: INITIAL_TEAM.length,
      members: INITIAL_TEAM,
      leaders,
      squad,
      warning: 'Serving fallback team data due to database connection issue'
    });
  }
}
