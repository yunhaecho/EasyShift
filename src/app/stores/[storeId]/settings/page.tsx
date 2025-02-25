'use client';

import StoreInformation from './components/StoreInformation';
import ScheduleInformation from './components/ScheduleInformation';
import WorkersInformation from './components/WorkersInformation';

const SettingsPage = () => {
  return (
    <main className="flex w-full flex-col gap-29 overflow-y-auto p-32">
      <h1 id="settings-page-title" className="sr-only">
        Store Settings
      </h1>
      <StoreInformation />
      <ScheduleInformation />
      <WorkersInformation />
    </main>
  );
};

export default SettingsPage;
