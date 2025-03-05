import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserRole } from './app/stores/components/ManageStoreButton';

export function middleware(request: NextRequest) {
  // 임시
  const isAuthenticated = true;
  const userRole: UserRole = 'WORKER'; // 실제로는 토큰이나 세션에서 가져와야 함
  const path = request.nextUrl.pathname;

  if (request.nextUrl.pathname === '/') {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/stores', request.url));
    } else {
      return NextResponse.redirect(new URL('/landing', request.url));
    }
  }

  // settings 페이지 접근 제한
  if (path.includes('/settings') && userRole === ('WORKER' as UserRole)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 스케줄 디테일 페이지 접근 제한
  // /stores/:storeId/schedule/:scheduleId 패턴 매칭
  const scheduleDetailRegex = /\/stores\/\d+\/schedule\/\d+/;
  if (scheduleDetailRegex.test(path) && userRole === ('WORKER' as UserRole)) {
    return NextResponse.redirect(new URL('/stores', request.url));
  }
}

export const config = {
  matcher: ['/', '/stores/:path*'],
};
