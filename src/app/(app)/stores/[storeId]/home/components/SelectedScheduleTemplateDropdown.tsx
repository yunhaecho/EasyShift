import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import ChevronDownIcon from '@/assets/icons/chevron-down.svg';
import { HomePageContext } from '@/app/context/HomePageContext';
import { useContext } from 'react';

const SelectedScheduleTemplateDropdown = () => {
  const {
    storeData,
    selectedScheduleTemplateId,
    handleSelectedScheduleTemplate,
  } = useContext(HomePageContext);
  const { scheduleTemplates } = storeData || {};

  return (
    <Menu>
      <MenuButton className="body-16-400 flex w-200 justify-between border border-gray-400 bg-white py-9 pl-12 text-gray-900">
        <div>
          {
            scheduleTemplates?.find(
              t => t.scheduleTemplateId === selectedScheduleTemplateId,
            )?.scheduleTemplateName
          }
        </div>
        <ChevronDownIcon className="mr-8 h-24 w-24" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="mt-5 w-200 border border-gray-400 bg-white"
      >
        {scheduleTemplates?.map(scheduleTemplate => (
          <MenuItem key={scheduleTemplate.scheduleTemplateId}>
            <button
              className="flex w-full justify-start px-12 py-9 data-[focus]:bg-gray-300"
              onClick={() => {
                handleSelectedScheduleTemplate(
                  scheduleTemplate.scheduleTemplateId,
                );
              }}
            >
              {scheduleTemplate.scheduleTemplateName}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};

export default SelectedScheduleTemplateDropdown;
