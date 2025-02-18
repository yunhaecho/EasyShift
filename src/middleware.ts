import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    const isAuthenticated = request.cookies.has('auth-token');

    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/home', request.url));
    } else {
      return NextResponse.redirect(new URL('/landing', request.url));
    }
  }
}

export const config = {
  matcher: '/',
};
