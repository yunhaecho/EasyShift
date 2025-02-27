'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import classNames from 'classnames';
import { hideNavigation } from '@/utils/hideNavigation';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import Link from 'next/link';
import { STORE_MENUS } from '@/constants/menus';

import Logo from '@/assets/logo.svg';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';

/* Home, Schedule, Settings 메뉴 탭 */
const MenuBar = () => {
  const pathname = usePathname();
  const params = useParams();
  const storeId = params.storeId;

  return (
    <nav aria-label="Main navigation">
      <ul className="flex h-full items-center gap-30">
        {STORE_MENUS.map(menu => (
          <li key={menu.label}>
            <Link
              href={`/${ROUTES.STORES}/${storeId}/${menu.path}`}
              className={classNames('body-14-500 px-14 py-21 text-gray-800', {
                'border-b-2 border-gray-800': pathname.includes(menu.path),
              })}
            >
              {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/* 유저가 소속된 매장 리스트 */
const StoresListDropdown = () => {
  return (
    <Menu>
      <MenuButton className="body-16-400 flex w-200 justify-between border border-gray-400 py-9 pl-12 text-gray-900">
        <span>Starbucks Reserve</span>
        <ChevronDownIcon className="mr-8 h-24 w-24" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="absolute mt-5 w-200 border border-gray-400 bg-white"
      >
        <MenuItem>
          <Link
            className="block px-12 py-9 data-[focus]:bg-gray-300"
            href="/settings"
          >
            Settings
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

/* 유저 아바타 */
const UserAvatar = () => {
  return <div className="h-32 w-32 rounded-full border border-gray-400" />;
};

/* 로그인, 회원가입 버튼 */
const AuthButtons = () => {
  return (
    <div className="flex gap-16">
      <Link
        className="body-16-500 rounded-4 text-gray-900"
        href={`/${ROUTES.SIGNIN}`}
      >
        Sign In
      </Link>
      <Link
        className="body-16-500 rounded-4 bg-gray-900 px-15 py-8 text-white"
        href={`/${ROUTES.SIGNUP}`}
      >
        Sign Up
      </Link>
    </div>
  );
};

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = true;

  const handleLogoClick = () => {
    router.push(isAuthenticated ? `/${ROUTES.STORES}` : `/${ROUTES.LANDING}`);
  };

  return (
    <header className="flex h-64 items-center border-b border-gray-300 bg-white px-30">
      <div className="flex h-full w-full items-center justify-between">
        <div className="flex h-full items-center gap-26">
          {/* Logo */}
          <h1 className="flex h-full items-center">
            <button onClick={handleLogoClick} aria-label="Go to homepage">
              <Logo aria-label="Easy Shift" />
            </button>
          </h1>

          {/* Navigation Menu */}
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
};

export default TopBar;
