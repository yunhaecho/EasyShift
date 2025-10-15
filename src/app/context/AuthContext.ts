import { User } from '@/api/endpoints/user/types';
import { createContext } from 'react';

export const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
  status: 'authenticated' | 'loading' | 'unauthenticated';
}>({
  user: null,
  setUser: () => {},
  status: 'unauthenticated',
});
