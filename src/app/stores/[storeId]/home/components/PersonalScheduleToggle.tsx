import { Fragment, useContext } from 'react';
import { Switch } from '@headlessui/react';
import InfoIcon from '@/assets/icons/info.svg';
import { HomePageContext } from '@/app/context/HomePageContext';

const PersonalScheduleToggle = () => {
  const { showMyScheduleOnly, setShowMyScheduleOnly } =
    useContext(HomePageContext);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-4">
        <InfoIcon className="h-20 w-20 pt-1 text-gray-600" />
        <span className="body-14-500 text-gray-600">Show My Schedule Only</span>
      </div>
      <Switch
        checked={showMyScheduleOnly}
        onChange={setShowMyScheduleOnly}
        as={Fragment}
      >
        {({ checked }) => (
          <button
            className={`${
              checked ? 'bg-primary-300' : 'bg-gray-300'
            } relative inline-flex h-35 w-50 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                checked ? 'translate-x-20' : 'translate-x-6'
              } inline-block h-24 w-24 transform rounded-full bg-white transition`}
            />
          </button>
        )}
      </Switch>
    </div>
  );
};

export default PersonalScheduleToggle;
