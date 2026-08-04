'use client';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import ReportsExports from '@/components/admin/ReportsExports';

export default function ReportsExportsPage() {
  const { leads } = useAdminContext() || { leads: [] };

  return <ReportsExports leads={leads} />;
}
