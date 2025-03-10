import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import TopBar from '@/app/components/TopBar';
import { Toaster } from 'react-hot-toast';
import mockEnable from '@/utils/mockEnable';
import { Providers } from '@/providers';
import GlobalNavBarProvider from './components/GlobalNavBarProvider';
import { Suspense } from 'react';
import AuthSession from './components/SessionProvider';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'EasyShift',
  description: 'EasyShift',
};

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  mockEnable();
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-gray-100 antialiased`}>
      <AuthSession>
        <Providers>
            <Suspense fallback={<div>Loading...</div>}>
              <GlobalNavBarProvider>
                <TopBar />
                <div className="flex h-[calc(100vh-4rem)] w-full">{children}</div>
                <Toaster position="top-center" />
              </GlobalNavBarProvider>
            </Suspense>
          </Providers>
        </AuthSession>
      </body>
    </html>
  );
}
