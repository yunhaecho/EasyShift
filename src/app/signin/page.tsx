import Image from 'next/image'
import React from 'react'
import KakaoLoginButton from '@/assets/kakao_login_medium_narrow.png';

function Login() {
  return (
    <a href={`${process.env.NEXT_BE_KAKAO_LOGIN_URL}/kakao?redirect_uri=${process.env.NEXT_KAKAO_REDIRECT_URI}`}>
        <Image src={KakaoLoginButton} alt='KakaoLoginButton' aria-label='카카오 로그인 버튼'/>
    </a>
  )
}

export default Login