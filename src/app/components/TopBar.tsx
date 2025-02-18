'use client';

import { usePathname, useRouter } from 'next/navigation';
import MenuBar from './MenuBar';
import StoresListDropdown from './StoresListDropdown';
import { hideNavigation } from '@/utils/hideNavigation';

import Logo from '@/assets/logo.svg';
import { ROUTES } from '@/constants/routes';

function UserAvatar() {
  return <div className="h-32 w-32 rounded-full border border-gray-400" />;
}

function AuthButtons() {
  const router = useRouter();

  return (
    <div className="flex gap-16">
      <button
        className="body-16-500 rounded-4 text-gray-900"
        onClick={() => router.push(`/${ROUTES.SIGNIN}`)}
      >
        <p>Sign In</p>
      </button>
      <button
        className="body-16-500 rounded-4 bg-gray-900 px-15 py-8 text-white"
        onClick={() => router.push(`/${ROUTES.SIGNUP}`)}
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

  console.log(pathname);

  const routerLogo = () => {
    if (isAuthenticated) {
      router.push(`/${ROUTES.STORES}`);
    } else {
      router.push(`/${ROUTES.LANDING}`);
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
