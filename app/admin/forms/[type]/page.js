'use client';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import WebsiteFormsAnalytics from '@/components/admin/WebsiteFormsAnalytics';

export default function WebsiteFormTypePage({ params }) {
  const unwrappedParams = React.use(params);
  const { leads } = useAdminContext() || { leads: [] };

  return (
    <div className="space-y-6">
      <WebsiteFormsAnalytics leads={leads} activeFormType={unwrappedParams?.type || 'all'} />
    </div>
  );
}
