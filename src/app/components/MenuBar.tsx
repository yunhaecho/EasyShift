'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';

const menus = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'Schedules',
    href: '/schedule',
  },
  {
    label: 'Settings',
    href: '/settings',
  },
];

const MenuBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-full items-center gap-30">
      {menus.map(menu => (
        <Link
          key={menu.label}
          href={menu.href}
          className={classNames('body-14-500 px-14 py-21 text-gray-800', {
            'border-b-2 border-gray-800': pathname === menu.href,
          })}
        >
          {menu.label}
        </Link>
      ))}
    </div>
  );
};

export default MenuBar;
