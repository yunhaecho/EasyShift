import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

import ChevronDownIcon from '@/assets/icons/chevron-down.svg';

const StoresListDropdown = () => {
  return (
    <Menu>
      <MenuButton className="body-16-400 flex w-200 justify-between border border-gray-400 py-9 pl-12 text-gray-900">
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
  );
};

export default StoresListDropdown;
