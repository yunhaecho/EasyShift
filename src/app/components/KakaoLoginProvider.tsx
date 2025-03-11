"use client"

import { ReactNode } from "react";
import { KakaoUserContext } from "../context/kakaoUserContext";
import { useGetKakaoUserInfoFromQueryParams } from "../signin/hooks/useKakaoUserInfoQueryParams";

export function KakaoUserProvider({ children }: { children: ReactNode }) {
    const kakaoUserInfo =  useGetKakaoUserInfoFromQueryParams();
  
    return (
      <KakaoUserContext.Provider value={kakaoUserInfo}>
        {children}
      </KakaoUserContext.Provider>
    );
  }