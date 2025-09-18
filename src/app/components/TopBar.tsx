'use client';

import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
// import classNames from 'classnames';
// import { hideNavigation } from '@/utils/hideNavigation';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import Link from 'next/link';
// import { STORE_MENUS } from '@/constants/menus';

import Logo from '@/assets/logo.svg';
// import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
// import { useContext } from 'react';
// import { GlobalNavBarContext } from '../context/GlobalNavBarContext';
// import { AuthContext } from '../context/AuthContext';
// import { UserRole } from '@/api/endpoints/user/types';
import AcccountIcon from '@/assets/icons/account-avatar-man-svgrepo-com.svg';
import { signIn, signOut, useSession } from 'next-auth/react';
/* Home, Schedule, Settings 메뉴 탭 */
// const MenuBar = () => {
//   const pathname = usePathname();
//   const params = useParams();
//   const storeId = params.storeId;
//   const { userRole } = useContext(AuthContext);

//   const filteredMenus = STORE_MENUS.filter(menu =>
//     menu.requiredRoles.includes(userRole as UserRole),
//   );

//   return (
//     <nav aria-label="Main navigation">
//       <ul className="flex h-full items-center gap-30">
//         {filteredMenus.map(menu => (
//           <li key={menu.label}>
//             <Link
//               href={`/${ROUTES.STORES}/${storeId}/${menu.path}`}
//               className={classNames('body-14-500 px-14 py-21 text-gray-800', {
//                 'border-b-2 border-gray-800': pathname.includes(menu.path),
//               })}
//             >
//               {menu.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// /* 유저가 소속된 매장 리스트 */
// const StoresListDropdown = () => {
//   const params = useParams();
//   const storeId = params.storeId;

//   const { data } = useContext(GlobalNavBarContext);

//   return (
//     <Menu>
//       <MenuButton className="body-16-400 flex w-200 justify-between border border-gray-400 py-9 pl-12 text-gray-900">
//         <span>
//           {
//             data?.stores.find(store => store.storeId === Number(storeId))
//               ?.storeName
//           }
//         </span>
//         <ChevronDownIcon className="mr-8 h-24 w-24" />
//       </MenuButton>
//       <MenuItems
//         anchor="bottom"
//         className="absolute mt-5 w-200 border border-gray-400 bg-white"
//       >
//         {data?.stores.map(store => (
//           <MenuItem key={store.storeId}>
//             <Link
//               className="block px-12 py-9 data-[focus]:bg-gray-300"
//               href={`/${ROUTES.STORES}/${store.storeId}/home`}
//             >
//               {store.storeName}
//             </Link>
//           </MenuItem>
//         ))}
//       </MenuItems>
//     </Menu>
//   );
// };

/* 유저 아바타 */
const UserAvatar = () => {
  const userId = 401; // [TODO] 유저 아이디 받아오기
  const router = useRouter();

  return (
    <Menu>
      <MenuButton>
        <div className="h-30 w-30">
          <AcccountIcon className="h-full w-full" />
        </div>
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="data-closed:scale-95 data-closed:opacity-0 h-auto w-150 origin-top-right rounded-xl border border-gray-200 bg-white p-7 text-base shadow-md transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none"
      >
        {/* 메뉴 항목 */}
        <MenuItem>
          <Link
            href={`/${ROUTES.USERS}/${userId}`}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            마이페이지
          </Link>
        </MenuItem>

        <div className="h-2 w-full bg-gray-200" />

        {/* 메뉴 항목 */}
        <MenuItem>
          <div
            className="flex items-center gap-2 px-4 py-2 text-sm text-red-200 hover:bg-gray-100"
            onClick={async () => {
              const data = await signOut({
                redirect: false,
                callbackUrl: '/landing',
              });
              router.push(data.url);
            }}
          >
            로그아웃
          </div>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

/* 로그인, 회원가입 버튼 */
const AuthButtons = () => {
  return (
    <div className="flex items-center gap-16">
      <p
        className="body-16-500 rounded-4 text-gray-900"
        onClick={() => signIn('kakao')}
      >
        Sign In
      </p>
      <Link
        className="body-16-500 rounded-4 bg-gray-900 px-15 py-8 text-white"
        href={`/${ROUTES.SIGNUP}`}
      >
        Sign Up
      </Link>
    </div>
  );
};

/* 사용자 정보 */
const UserInfo = () => {
  const { data } = useSession();
  return (
    <div className="flex flex-col">
      <span>{data?.user.name}</span>
      <span className="text-[10px]">{data?.user.role}</span>
    </div>
  );
};

const TopBar = () => {
  const router = useRouter();
  const { status } = useSession();

  const handleLogoClick = () => {
    router.push(
      status === 'authenticated' ? `/${ROUTES.STORES}` : `/${ROUTES.LANDING}`,
    );
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
        </div>

        {status === 'authenticated' ? (
          <section className="flex flex-row items-center gap-16">
            <UserAvatar />
            <UserInfo />
          </section>
        ) : (
          <AuthButtons />
        )}
      </div>
    </header>
  );
};

export default TopBar;
