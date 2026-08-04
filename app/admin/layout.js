import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function AdminLayout({ children }) {
  const { userId } = await auth();

  // If not signed in, redirect to Clerk sign-in
  if (!userId) {
    redirect('/sign-in');
  }

  return <>{children}</>;
}
