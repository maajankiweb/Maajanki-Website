'use client';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import CustomersCRM from '@/components/admin/CustomersCRM';

export default function CustomersCRMPage() {
  const { leads } = useAdminContext() || { leads: [] };

  return <CustomersCRM leads={leads} />;
}
