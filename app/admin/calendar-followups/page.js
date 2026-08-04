'use client';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import CalendarFollowups from '@/components/admin/CalendarFollowups';

export default function CalendarFollowupsPage() {
  const { leads } = useAdminContext() || { leads: [] };

  return <CalendarFollowups leads={leads} />;
}
