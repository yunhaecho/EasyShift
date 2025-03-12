import { instance } from '@/api/instance';
import { SignUpInfoProps } from '@/app/context/SignUpContext';
import { useMutation } from '@tanstack/react-query';
// import { useRouter } from 'next/router';

const signUpDataMutation = async (signUpInfo: SignUpInfoProps) => {
  try {
    const response = await instance.post('/api/user/signup', {
      name: signUpInfo.name,
      phoneNumber: signUpInfo.phoneNumber,
      role: signUpInfo.role,
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const useSignUpDataMutation = () => {
  // const router = useRouter();
  return useMutation({
    mutationFn: signUpDataMutation,
    onSuccess: response => console.log(response),

    // onSuccess: () =>  router.push('/stores'),
    onError: error => console.log(error),
  });
};
