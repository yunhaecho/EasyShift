"use client"

import { useGetTokenMutation } from '@/api/endpoints/signin/useEnrollUser';
import { useSearchParams } from 'next/navigation';
import {  useEffect } from 'react';
// import { KakaoUserContext } from '@/app/context/kakaoUserContext';
// import KakaoLoginApi from '@/api/endpoints/signin/useGetToken';

function CallbackPage() {
    const searchParams = useSearchParams();
    // const router = useRouter();
    
    const authorizationCode = searchParams.get('code');
  console.log(authorizationCode);
  
    const { mutate, isError } = useGetTokenMutation();
    // const kakaoUserInfo = useContext(KakaoUserContext);
    // const [redirected, setRedirected] = useState(false);

    useEffect(() => {
      if(authorizationCode) {
        console.log(authorizationCode);
        mutate(authorizationCode);
      }
      // KakaoLoginApi();
    }, []);

    // useEffect(() => {
    //   if(redirected) return;

    // if (kakaoUserInfo) {
    //   if(kakaoUserInfo.needSignUp) {
        
    //     router.push('/signup');
    // } else {
    //   router.push('/stores');
    // }
    // setRedirected(true);
    //   }
  
    // },[kakaoUserInfo, router, redirected])

  
    if (isError) {
      return <p>로그인 중 오류가 발생했습니다.</p>;
    }

    // console.log(status);


  return (
    <div className="w-full h-full">
      <p>loading...</p>
    </div>
  )
  }

export default CallbackPage;