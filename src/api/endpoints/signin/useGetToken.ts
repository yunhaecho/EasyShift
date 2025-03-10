import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

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

const getTokenMutation = async (code: string) => {
  try {
    const response = await axios.post<GetTokenResponse>('/api/user/login', {
      code: code,
    });

    return response.data;
  } catch (error) {
    console.error('getTokenMutation 에러:', error);
    throw error;
  }
};

export const useGetTokenMutation = () => {
  return useMutation({
    mutationFn: (code: string) => getTokenMutation(code),
    onSuccess: reponse => {
      console.log(reponse);
    },
    onError: error => {
      console.error('useGetTokenMutation 에러:', error);
    },
  });
};
