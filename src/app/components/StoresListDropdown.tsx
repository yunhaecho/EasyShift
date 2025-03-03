import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';

const StoresListDropdown = ({
  title,
  stores,
  onSelect,
}: {
  title: string;
  stores: {
    id: number;
    name: string;
  }[];
  onSelect: (storeId: number) => void;
}) => {
  return (
    <Menu>
      <MenuButton className="body-16-400 flex w-200 justify-between border border-gray-400 bg-white py-9 pl-12 text-gray-900">
        <div>{title}</div>
        <ChevronDownIcon className="mr-8 h-24 w-24" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="mt-5 w-200 border border-gray-400 bg-white"
      >
        {stores.map(store => (
          <MenuItem key={store.id}>
            <button
              className="flex w-full justify-start px-12 py-9 data-[focus]:bg-gray-300"
              onClick={() => onSelect(store.id)}
            >
              {store.name}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default StoresListDropdown;
