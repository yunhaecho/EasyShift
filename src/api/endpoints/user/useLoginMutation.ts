import { ROUTES } from '@/constants/routes';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { API_CONFIG } from '@/api/config';
import { setLocalStorage } from '@/utils/storageUtils';
import { AuthContext } from '@/app/context/AuthContext';
import { useContext } from 'react';

const loginMutation = async (code: string) => {
  const response = await axios.post(API_CONFIG.ENDPOINTS.USER.LOGIN, { code });
  const token = response.headers['authorization'];

  const userData = {
    userId: response.data.response.userId,
    email: response.data.response.email,
    name: response.data.response.name,
    avatarUrl: response.data.response.avatarUrl,
    phoneNumber: null,
    role: 'ADMIN',
  };
  setLocalStorage('accessToken', token.replace('Bearer ', ''));
  setLocalStorage('user', JSON.stringify(userData));

  document.cookie = `accessToken=${token}; path=/; secure`;
  document.cookie = `user=${JSON.stringify(userData)}; path=/; secure`;

  return response.data;
};

export const useLoginMutation = () => {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);

  return useMutation({
    mutationFn: loginMutation,
    onSuccess: data => {
      if (data.response.needsSignup) {
        router.push(`/${ROUTES.SIGNUP}`);
      } else {
        router.push(`/${ROUTES.STORES}`);
        toast.success('Login Successful');
      }

      setUser({
        userId: data.response.userId,
        email: data.response.email,
        name: data.response.name,
        needsSignup: data.response.needsSignup,
        // avatarUrl: data.response.avatarUrl,
        // phoneNumber: null,
        role: data.response.role,
      });
    },
    onError: error => {
      console.error('useLoginMutation Error:', error);
    },
  });
};
