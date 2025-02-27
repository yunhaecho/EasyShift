import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 임시
  const isAuthenticated = true;

  if (request.nextUrl.pathname === '/') {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/stores', request.url));
    } else {
      return NextResponse.redirect(new URL('/landing', request.url));
    }
  }
}

export const config = {
  matcher: '/',
};
