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
import { useContext } from 'react';
import { GlobalNavBarContext } from '../context/GlobalNavBarContext';
import { AuthContext } from '../context/AuthContext';
import { UserRole } from '@/api/endpoints/user/types';

/* Home, Schedule, Settings 메뉴 탭 */
const MenuBar = () => {
  const pathname = usePathname();
  const params = useParams();
  const storeId = params.storeId;
  const { userRole } = useContext(AuthContext);

  const filteredMenus = STORE_MENUS.filter(menu =>
    menu.requiredRoles.includes(userRole as UserRole),
  );

  return (
    <nav aria-label="Main navigation">
      <ul className="flex h-full items-center gap-30">
        {filteredMenus.map(menu => (
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
  const params = useParams();
  const storeId = params.storeId;

  const { data } = useContext(GlobalNavBarContext);

  return (
    <Menu>
      <MenuButton className="body-16-400 flex w-200 justify-between border border-gray-400 py-9 pl-12 text-gray-900">
        <span>
          {
            data?.stores.find(store => store.storeId === Number(storeId))
              ?.storeName
          }
        </span>
        <ChevronDownIcon className="mr-8 h-24 w-24" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="absolute mt-5 w-200 border border-gray-400 bg-white"
      >
        {data?.stores.map(store => (
          <MenuItem key={store.storeId}>
            <Link
              className="block px-12 py-9 data-[focus]:bg-gray-300"
              href={`/${ROUTES.STORES}/${store.storeId}/home`}
            >
              {store.storeName}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

/* 유저 아바타 */
const UserAvatar = () => {
  const userId = 401; // [TODO] 유저 아이디 받아오기
  return (
    <Link href={`/${ROUTES.USERS}/${userId}`}>
      <div className="h-32 w-32 rounded-full border border-gray-400" />
    </Link>
  );
};

/* 로그인, 회원가입 버튼 */
const AuthButtons = () => {
  return (
    <div className="flex items-center gap-16">
      <a
        className="body-16-500 rounded-4 text-gray-900"
        href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}`}
      >
        Sign In
      </a>
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
  const { isAuthenticated } = useContext(AuthContext);

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
