import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

type GetTokenResponse = {
  headers: {
    Authorization: string;
  };
  userId: number;
  email: string;
  role: string;
  avatarUrl: string;
  needsSignup: boolean;
};

export const getTokenMutation = async (code: string) => {
  try {
    const response = await axios.post<GetTokenResponse>('/api/user/login', {
      code: code,
    });

    console.log(response.data);
    return response;
  } catch (error) {
    console.error('getTokenMutation 에러:', error);
  }
};

export const useGetTokenMutation = () => {
  return useMutation({
    mutationFn: (code: string) => getTokenMutation(code),
    onSuccess: () => {
      toast.dismiss('login-toast');
      toast.success('로그인 성공');
    },
    onError: () => {
      console.log(Error);
    },
  });
};
