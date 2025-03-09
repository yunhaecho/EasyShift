"use client"

import { useSearchParams } from 'next/navigation';
import { useGetTokenMutation } from '@/api/endpoints/signup/useGetToken';
import { useEffect } from 'react';

function CallbackPage() {
    const searchParams = useSearchParams();
    const authorizationCode = searchParams.get('code');

    const { mutate } = useGetTokenMutation();

    useEffect(() => {
      if (authorizationCode) {
        const encodedCode = encodeURIComponent(authorizationCode);
        mutate(encodedCode);
      }
    }, [authorizationCode, mutate]);
  

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>

        <h1>카카오 로그인</h1>

  </div>
  )
  }

export default CallbackPage