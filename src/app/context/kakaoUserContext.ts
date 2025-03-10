'use client';

import { createContext } from 'react';

export interface KakaoUserInfo {
  userId: number;
  email: string;
  avatarUrl: string;
  needSignUp: boolean;
}

export const KakaoUserContext = createContext<KakaoUserInfo | null>(null);
