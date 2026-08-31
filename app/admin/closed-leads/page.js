'use client';

import LeadsTable from '@/components/admin/LeadsTable';

export default function ClosedLeadsPage() {
  return <LeadsTable statusFilter="Closed" />;
}
