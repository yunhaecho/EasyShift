'use client';

import { useEffect, useState } from 'react';

export const MswProvider = ({ children }: { children: React.ReactNode }) => {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
        const mockEnable = await import('../utils/mockEnable').then(
          res => res.default,
        );
        await mockEnable();
      }
      setMswReady(true);
    };

    init();
  }, []);

  if (!mswReady) {
    return null;
  }

  return <>{children}</>;
};
