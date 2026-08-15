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
          const res = NextResponse.next();
          res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0');
          res.headers.set('Pragma', 'no-cache');
          res.headers.set('Expires', '0');
          res.headers.set('Surrogate-Control', 'no-store');
          return res;
        }
        return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
      }
    } catch {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }
  }

  const response = NextResponse.next();
  // Enforce zero-cache anti-stale headers across browser and proxy CDN
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  response.headers.set('Surrogate-Control', 'no-store');
  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and static assets
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/__clerk/:path*',
    '/(api|trpc)(.*)',
  ],
};
