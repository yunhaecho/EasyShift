'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

export interface KakaoUserInfo {
  needSignUp: boolean;
  userId: number;
  email: string;
  avatarUrl: string;
}

export default function useGetKakaoUserInfoFromQueryParams(): KakaoUserInfo | null {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const needSignupStr = searchParams.get('needSignUp');
    const userIdStr = searchParams.get('userId');
    const email = searchParams.get('email');
    const avatarUrl = searchParams.get('avatarUrl');

    if (needSignupStr && userIdStr && email && avatarUrl) {
      return {
        needSignUp: false,
        userId: Number(userIdStr),
        email,
        avatarUrl,
      };
    }
    return null;
  }, [searchParams]);
}
