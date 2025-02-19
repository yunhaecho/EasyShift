'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';
import { MswProvider } from './mocks/MswProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClientRef = useRef<QueryClient | null>(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <MswProvider>{children}</MswProvider>
    </QueryClientProvider>
  );
}
