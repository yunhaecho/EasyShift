import { SignUpInfoProps } from '@/app/context/SignUpContext';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
// import { useRouter } from 'next/router';

const signUpDataMutation = async (signUpInfo: SignUpInfoProps) => {
  if (signUpInfo) {
    try {
      const response = await axios.post(
        'https://api.easyshift.tech:8443/api/user/signup',
        {
          name: signUpInfo.name,
          phoneNumber: signUpInfo.phoneNumber,
          role: signUpInfo.role,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        },
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
    }
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
