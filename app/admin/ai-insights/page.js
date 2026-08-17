'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import AIInsights from '@/components/admin/AIInsights';

export default function AIInsightsPage() {
  const { leads } = useAdminContext() || { leads: [] };

  return <AIInsights leads={leads} />;
}
