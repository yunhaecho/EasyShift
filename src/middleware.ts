import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req });

  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/landing';
    url.searchParams.set('reason', 'auth');
    return NextResponse.redirect(url);
  }

  if (req.nextUrl.pathname.startsWith('/stores') && token.role === 'WORKER') {
    const url = req.nextUrl.clone();

    url.pathname = '/landing';
    url.searchParams.set('reason', 'forbidden');
    return NextResponse.redirect(url);
  }
  console.log('[middleware] : ', token);
};
export const config = {
  matcher: ['/stores/:path*'],
};
