'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from '@/app/components/Loader';
import { ROUTES } from '@/constants/routes';

function CallbackPage() {
  const searchParams = useSearchParams();
  const needSignUp = searchParams.get('needSignUp');
  const router = useRouter();

  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (redirected) return;

    if (needSignUp) {
      router.push(`/${ROUTES.SIGNUP}`);
    } else {
      router.push(`/${ROUTES.STORES}`);
    }
    setRedirected(true);
  }, [router, redirected, needSignUp]);

  return <Loader />;
}

export default CallbackPage;
