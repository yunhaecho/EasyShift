'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';
import { MswProvider } from './mocks/MswProvider';
import AuthProvider from './app/components/AuthProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClientRef = useRef<QueryClient | null>(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AuthProvider>
        <MswProvider>{children}</MswProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
