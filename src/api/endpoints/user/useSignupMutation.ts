import { API_CONFIG } from '@/api/config';
import axios from 'axios';
import { SignupRequest } from './types';
import { AuthContext } from '@/app/context/AuthContext';
import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const signupMutation = async (data: SignupRequest, token: string) => {
  const response = await axios.post(API_CONFIG.ENDPOINTS.USER.SIGNUP, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const useSignupMutation = (data: SignupRequest) => {
  const router = useRouter();
  const { user, setUser } = useContext(AuthContext);

  return useMutation({
    mutationFn: () => {
      const accessToken = Cookies.get('accessToken');
      if (!accessToken) {
        toast.error('Access token is required');
        throw new Error('Access token is required');
      }
      return signupMutation(data, accessToken);
    },
    onSuccess: () => {
      if (!user) {
        toast.error('User not found');
        throw new Error('User not found');
      }

      setUser({
        ...user,
        name: data.name,
        // phoneNumber: data.phoneNumber || null,
        role: data.role,
      });

      toast.success('SignUp Successful!');
      router.push(`/${ROUTES.STORES}`);
    },
    onError: () => {
      toast.error('SignUp Failed');
      router.push('/');
    },
  });
};

export default useSignupMutation;
