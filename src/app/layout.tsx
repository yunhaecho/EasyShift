import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import TopBar from '@/app/components/TopBar';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'EasyShift',
  description: 'EasyShift',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-gray-100 antialiased`}>
        <TopBar />
        <div className="flex h-[calc(100vh-4rem)] w-full">{children}</div>
      </body>
    </html>
  );
}
