"use client"

import { ReactNode } from "react";
import { KakaoUserContext } from "../context/kakaoUserContext";
import { useGetTokenMutation } from "@/api/endpoints/signin/useEnrollUser";

export function KakaoUserProvider({ children }: { children: ReactNode }) {
    const { data } =  useGetTokenMutation();
  
    return (
      <KakaoUserContext.Provider value ={ data }>
        {children}
      </KakaoUserContext.Provider>
    );
  }