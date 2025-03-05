'use client';

import { Fragment, useState } from 'react';
import { Switch } from '@headlessui/react';
import InfoIcon from '@/assets/icons/info.svg';
const PersonalScheduleToggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-4">
        <InfoIcon className="h-20 w-20 text-gray-600" />
        <span className="body-14-500 text-gray-600">Show My Schedule Only</span>
      </div>
      <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
        {({ checked }) => (
          <button
            className={`${
              checked ? 'bg-primary-300' : 'bg-gray-300'
            } relative inline-flex h-30 w-50 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                checked ? 'translate-x-25' : 'translate-x-5'
              } inline-block h-20 w-20 transform rounded-full bg-white transition`}
            />
          </button>
        )}
      </Switch>
    </div>
  );
};

export default PersonalScheduleToggle;
