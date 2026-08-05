'use client';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import LeadMap from '@/components/admin/LeadMap';

export default function GlobalMapAnalyticsPage() {
  const { leads } = useAdminContext() || { leads: [] };

  return <LeadMap leads={leads} />;
}
