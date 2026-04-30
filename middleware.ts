import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  // 1. Force HTTPS (usually handled by provider, but safe to have)
  const isHttp = request.headers.get('x-forwarded-proto') === 'http';
  
  // 2. Redirect WWW to Non-WWW
  const isWww = host?.startsWith('www.');

  if (isWww || isHttp) {
    const newHost = host?.replace('www.', '');
    const protocol = 'https';
    return NextResponse.redirect(`${protocol}://${newHost}${url.pathname}${url.search}`, 301);
  }

  return NextResponse.next();
}

// Only run on pages
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icons (PWA icons)
     * - blog (if you want to keep them static without middleware interference, but usually fine)
     */

  ],
};
