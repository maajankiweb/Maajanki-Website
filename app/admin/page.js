'use client';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import DashboardOverview from '@/components/admin/DashboardOverview';
import AnalyticsCharts from '@/components/admin/AnalyticsCharts';
import LeadMap from '@/components/admin/LeadMap';
import ActivityFeed from '@/components/admin/ActivityFeed';
import AIInsights from '@/components/admin/AIInsights';

export default function AdminDashboardPage() {
  const { leads, loading } = useAdminContext() || { leads: [], loading: false };

  return (
    <div className="space-y-6">
      <DashboardOverview leads={leads} loading={loading} />
      <AnalyticsCharts leads={leads} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LeadMap leads={leads} />
        </div>
        <div>
          <ActivityFeed leads={leads} />
        </div>
      </div>
      <AIInsights leads={leads} />
    </div>
  );
}
