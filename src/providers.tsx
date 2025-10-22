'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';
import { SessionProvider } from 'next-auth/react';
import AuthProvider from './app/components/AuthProvider';
import { MswProvider } from './mocks/MswProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClientRef = useRef<QueryClient | null>(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClientRef.current}>
        <AuthProvider>
          <MswProvider>{children}</MswProvider>
        </AuthProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
