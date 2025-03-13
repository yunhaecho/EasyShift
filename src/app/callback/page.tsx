'use client';

import { useLoginMutation } from '@/api/endpoints/user/useLoginMutation';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Loader from '@/app/components/Loader';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function CallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const authorizationCode = searchParams.get('code');

  const { mutate, isError } = useLoginMutation();

  useEffect(() => {
    if (authorizationCode) {
      mutate(authorizationCode);
    } else {
      toast.error('Authorization code is required');
      router.push('/');
    }
  }, [authorizationCode, mutate, router]);

  if (isError) {
    toast.error('Login Failed');
    router.push('/');
  }

  return <Loader />;
}

export default CallbackPage;
