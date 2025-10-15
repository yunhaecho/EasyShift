'use client';

import { AuthContext } from '../context/AuthContext';
import { User } from '@/api/endpoints/user/types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Loader from '@/app/components/Loader';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, status } = useSession();
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    }
    return null;
  });

  useEffect(() => {
    if (status === 'authenticated' && data?.user) {
      const sessionUser: User = {
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
        needsSignup: data.needSignUp,
      };

      setUser(sessionUser);

      // localStorage에도 저장 (새로고침 시 유지용)
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(sessionUser));
      }
    } else if (status === 'unauthenticated') {
      // 로그아웃 시 user state와 localStorage 정리
      setUser(null);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
      }
    }
    // status가 'loading'일 때는 아무것도 하지 않음 (기존 상태 유지)
  }, [data, status]);

  if (status === 'loading') {
    return <Loader />;
  }

  // TOOD: useEffect 사용하여 userId로 유저 정보 get API 호출하여 유저 정보 업데이트

  return (
    <AuthContext.Provider value={{ user, setUser, status }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
