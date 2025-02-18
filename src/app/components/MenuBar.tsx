'use client';

import { useParams, usePathname } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import classNames from 'classnames';

const MenuBar = () => {
  const pathname = usePathname();
  const params = useParams();
  const storeId = params.storeId;

  const menus = [
    {
      label: 'Home',
      href: `/${ROUTES.STORES}/${storeId}/${ROUTES.HOME}`,
    },
    {
      label: 'Schedules',
      href: `/${ROUTES.STORES}/${storeId}/${ROUTES.SCHEDULE}`,
    },
    {
      label: 'Settings',
      href: `/${ROUTES.STORES}/${storeId}/${ROUTES.SETTINGS}`,
    },
  ];

  return (
    <div className="flex h-full items-center gap-30">
      {menus.map(menu => (
        <Link
          key={menu.label}
          href={menu.href}
          className={classNames('body-14-500 px-14 py-21 text-gray-800', {
            'border-b-2 border-gray-800': pathname.includes(menu.href),
          })}
        >
          {menu.label}
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;
