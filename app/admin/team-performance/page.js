'use client';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import TeamPerformance from '@/components/admin/TeamPerformance';

export default function TeamPerformancePage() {
  const { leads } = useAdminContext() || { leads: [] };

  return <TeamPerformance leads={leads} />;
}
