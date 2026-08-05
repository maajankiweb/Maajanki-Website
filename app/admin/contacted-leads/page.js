'use client';

import React from 'react';
import { useAdminContext } from '@/components/admin/AdminShell';
import LeadsTable from '@/components/admin/LeadsTable';

export default function ContactedLeadsPage() {
  const { leads, loading, handleUpdateStatus, handleDeleteLead, handleExportCSV } = useAdminContext() || {};

  return (
    <LeadsTable
      leads={leads}
      loading={loading}
      onUpdateStatus={handleUpdateStatus}
      onDeleteLead={handleDeleteLead}
      onExportCSV={handleExportCSV}
      initialStatusFilter="contacted"
    />
  );
}
