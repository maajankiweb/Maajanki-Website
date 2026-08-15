import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin')) {
    try {
      const { userId } = await auth();
      if (!userId) {
        const signInUrl = new URL('/sign-in', req.url);
        return NextResponse.redirect(signInUrl);
      }
    } catch {
      const signInUrl = new URL('/sign-in', req.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  if (pathname.startsWith('/api/admin')) {
    try {
      const { userId } = await auth();
      if (!userId) {
        const authHeader = req.headers.get('authorization');
        const secretKey = process.env.ADMIN_SECRET_KEY;
        if (authHeader && secretKey && authHeader.replace('Bearer ', '').trim() === secretKey) {
          return;
        }
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
      }
    } catch {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
