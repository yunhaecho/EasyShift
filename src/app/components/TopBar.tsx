import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import ChevronDownIcon from '../../assets/icons/chevron-down.svg';
import MenuBar from './MenuBar';
import Logo from '/public/logo.svg';

export default function TopBar() {
  return (
    <header className="flex h-64 items-center border-b border-gray-300 bg-white px-30">
      <div className="flex h-full w-full items-center justify-between">
        {/* Logo & Menu */}
        <div className="flex h-full items-center gap-26">
          <Logo />
          <Menu>
            <MenuButton className="body-16-400 flex min-w-250 justify-between border border-gray-400 py-9 pl-12 text-gray-900">
              <div>Starbucks Reserve</div>
              <ChevronDownIcon className="mr-8 h-24 w-24" />
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="mt-5 w-200 border border-gray-400 bg-white"
            >
              <MenuItem>
                <a
                  className="block px-12 py-9 data-[focus]:bg-gray-300"
                  href="/settings"
                >
                  Settings
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
          <MenuBar />
        </div>
        {/* User Avatar */}
        <div className="h-32 w-32 rounded-full border border-gray-400" />
      </div>
    </header>
  );
}
