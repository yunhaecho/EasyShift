"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import { useGetTokenMutation } from '@/api/endpoints/signin/useGetToken';
import { useContext, useEffect, useState } from 'react';
import { KakaoUserContext } from '@/app/context/kakaoUserContext';

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-100">
      <div className="w-20 h-20 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin mt-2"></div>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        로그인 처리 중입니다.
      </h2>
      <p className="mt-2 text-gray-600">잠시만 기다려 주세요.</p>
    </div>
  );
};

function CallbackPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    
    const authorizationCode = searchParams.get('code');

    const { mutate, isError  } = useGetTokenMutation();
    const kakaoUserInfo = useContext(KakaoUserContext);
    const [redirected, setRedirected] = useState(false);

    useEffect(() => {
      if (authorizationCode) {
        const encodedCode = encodeURIComponent(authorizationCode);
        mutate(encodedCode);
      }
    }, [authorizationCode, mutate]);

    useEffect(() => {
      if(redirected) return;

    if (kakaoUserInfo) {
      if(kakaoUserInfo.needSignUp) {
        console.log("dddd");
        
        router.push('/signup');
    } else {
      router.push('/stores');
    }
    setRedirected(true);
      }
  
    },[kakaoUserInfo, router, redirected])

  
    if (isError) {
      return <p>로그인 중 오류가 발생했습니다.</p>;
    }

  return (
    <div className="w-full h-full">
        <LoadingScreen />
    </div>
  )
  }

export default CallbackPage;