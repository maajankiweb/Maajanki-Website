'use client';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import DashboardOverview from '@/components/admin/DashboardOverview';

export default function AdminDashboardPage() {
  const { leads } = useAdminContext() || { leads: [] };
  return <DashboardOverview leads={leads} />;
}
