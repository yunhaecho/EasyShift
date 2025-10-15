'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useRef } from 'react';
import { MswProvider } from './mocks/MswProvider';
import AuthProvider from './app/components/AuthProvider';
import { SessionProvider } from 'next-auth/react';
import CalendarProvider from './app/users/[userId]/components/calendar/CalendarProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClientRef = useRef<QueryClient | null>(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClientRef.current}>
        <CalendarProvider>
          <AuthProvider>
            <MswProvider>{children}</MswProvider>
          </AuthProvider>
        </CalendarProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
