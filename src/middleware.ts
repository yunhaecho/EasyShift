import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { UserRole } from '@/api/endpoints/user/types';
import { USER_ROLE } from './constants/userRole';
import { ROUTES } from './constants/routes';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const userStr = request.cookies.get('user')?.value;
  const user = userStr ? JSON.parse(userStr) : null;
  const isAuthenticated = !!accessToken && !!user;

  const userRole: UserRole = (user?.role as UserRole) || USER_ROLE.GUEST;
  const path = request.nextUrl.pathname;

  if (request.nextUrl.pathname === '/') {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL(`/${ROUTES.STORES}`, request.url));
    } else {
      return NextResponse.redirect(new URL(`/${ROUTES.LANDING}`, request.url));
    }
  }

  // settings 페이지 접근 제한
  if (path.includes(`/${ROUTES.STORES}`) && userRole === USER_ROLE.GUEST) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // settings 페이지 접근 제한
  if (path.includes(`/${ROUTES.SETTINGS}`) && userRole === USER_ROLE.WORKER) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 스케줄 디테일 페이지 접근 제한
  // /stores/:storeId/schedule/:scheduleId 패턴 매칭
  const scheduleDetailRegex = /\/stores\/\d+\/schedule\/\d+/;
  if (scheduleDetailRegex.test(path) && userRole === USER_ROLE.WORKER) {
    return NextResponse.redirect(new URL(`/${ROUTES.STORES}`, request.url));
  }
}

export const config = {
  matcher: ['/', '/stores/:path*'],
};
