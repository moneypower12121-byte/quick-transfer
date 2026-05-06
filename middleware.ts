import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');
  const xfp = request.headers.get('x-forwarded-proto');

  // 1. WWW to Non-WWW Redirect
  if (host?.startsWith('www.')) {
    const newHost = host.replace('www.', '');
    return NextResponse.redirect(`https://${newHost}${url.pathname}${url.search}`, 301);
  }

  // 2. HTTP to HTTPS Redirect
  // Only if x-forwarded-proto is explicitly 'http'
  if (xfp === 'http') {
    return NextResponse.redirect(`https://${host}${url.pathname}${url.search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * 1. api routes
     * 2. _next/static (static files)
     * 3. _next/image (image optimization files)
     * 4. favicon.ico, robots.txt, sitemap.xml, manifest.webmanifest
     * 5. common image extensions
     */
    '/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest\\.webmanifest|.*\\.(?:png|jpg|jpeg|gif|svg|ico)$).*)',
  ],
};
