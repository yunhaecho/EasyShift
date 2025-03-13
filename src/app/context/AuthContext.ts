import { User, UserRole } from '@/api/endpoints/user/types';
import { USER_ROLE } from '@/constants/userRole';
import { createContext } from 'react';

export const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  userRole: UserRole;
}>({
  user: null,
  setUser: () => {},
  isAuthenticated: false,
  userRole: USER_ROLE.GUEST,
});
