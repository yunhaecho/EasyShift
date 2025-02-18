'use client';

import { usePathname, useRouter } from 'next/navigation';
import MenuBar from './MenuBar';
import StoresListDropdown from './StoresListDropdown';
import { hideNavigation } from '@/utils/hideNavigation';

import Logo from '/public/logo.svg';

function UserAvatar() {
  return <div className="h-32 w-32 rounded-full border border-gray-400" />;
}

function AuthButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-16">
      <button
        className="body-16-500 rounded-4 text-gray-900"
        onClick={() => router.push('/signin')}
      >
        <p>Sign In</p>
      </button>
      <button
        className="body-16-500 rounded-4 bg-gray-900 px-15 py-8 text-white"
        onClick={() => router.push('/signup')}
      >
        <p>Sign Up</p>
      </button>
    </div>
  );
}

function TopBar() {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = true;

  const routerLogo = () => {
    if (isAuthenticated) {
      router.push('/stores');
    } else {
      router.push('/landing');
    }
  };

  return (
    <header className="flex h-64 items-center border-b border-gray-300 bg-white px-30">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-full items-center gap-26">
          {/* Logo */}
          <button onClick={routerLogo}>
            <Logo />
          </button>

          {/* Menu */}
          {!hideNavigation(pathname, isAuthenticated) && (
            <>
              <StoresListDropdown />
              <MenuBar />
            </>
          )}
        </div>

        {isAuthenticated ? <UserAvatar /> : <AuthButtons />}
      </div>
    </header>
  );
}

export default TopBar;
