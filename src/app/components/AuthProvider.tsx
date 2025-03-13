'use client';

import { AuthContext } from '../context/AuthContext';
import { User, UserRole } from '@/api/endpoints/user/types';
import { USER_ROLE } from '@/constants/userRole';
import { useState } from 'react';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('user');
      return savedUser ? JSON.parse(savedUser) : null;
    }
    return null;
  });

  const isAuthenticated = user?.role === (USER_ROLE.ADMIN || USER_ROLE.WORKER);
  const userRole = user?.role as UserRole;

  // TOOD: useEffect 사용하여 userId로 유저 정보 get API 호출하여 유저 정보 업데이트

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
