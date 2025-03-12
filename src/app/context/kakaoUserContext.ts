'use client';

import { createContext } from 'react';
import { EnrollUserResponse } from '@/api/endpoints/signin/useEnrollUser';

export const KakaoUserContext = createContext<EnrollUserResponse | undefined>(
  undefined,
);
