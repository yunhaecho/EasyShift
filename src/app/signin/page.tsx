import Image from 'next/image'
import React from 'react'
import KakaoLoginButton from '@/assets/kakao_login_medium_narrow.png';

function Login() {

  return (
    <div>
      {/* <a href={`${process.env.NEXT_PUBLIC_KAKAO_LOGIN_URL}/oauth2/authorization/kakao?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`}> */}
            <a href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}
`}>

        <Image src={KakaoLoginButton} alt='KakaoLoginButton' aria-label='카카오 로그인 버튼'/>
      </a>
    </div>
  )
}

export default Login