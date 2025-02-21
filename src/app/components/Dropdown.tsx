import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg';

const Dropdown = ({
  title,
  items,
  onSelect,
}: {
  title: string;
  items: string[];
  onSelect: (item: string) => void;
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
        {items.map(item => (
          <MenuItem key={item}>
            <button
              className="block flex w-full justify-start px-12 py-9 data-[focus]:bg-gray-300"
              onClick={() => onSelect(item)}
            >
              {item}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
