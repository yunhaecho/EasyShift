import { instance } from '@/api/instance';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export type EnrollUserResponse = {
  userId: number;
  email: string;
  name: string;
  avatarUrl: string;
  needsSignup: boolean;
};

const getTokenMutation = async (code: string) => {
  try {
    const response = await instance.post<EnrollUserResponse>(
      '/api/user/login',
      {
        code: code,
      },
    );
    const token = response.headers['authorization'];
    localStorage.setItem('access', token.replace('Bearer ', ''));
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('getTokenMutation 에러:', error);
    throw error;
  }
};

export const useGetTokenMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: getTokenMutation,
    onSuccess: response => {
      if (response.needsSignup === true) {
        router.push('/signup');
      } else {
        router.push('/stores');
      }
      return response;
    },
    onError: error => {
      console.error('useGetTokenMutation 에러:', error);
    },
  });
};
