'use client';

import StoreInformation from './components/StoreInformation';
import ScheduleTemplateInformation from './components/ScheduleTemplateInformation';
import WorkersInformation from './components/WorkersInformation';
import SettingsPageProvider from './components/SettingsPageProvider';
import { Suspense } from 'react';

const SettingsPage = () => {
  return (
    <main className="flex w-full flex-col gap-29 overflow-y-auto p-32">
      <h1 id="settings-page-title" className="sr-only">
        Store Settings
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SettingsPageProvider>
          <StoreInformation />
          <ScheduleTemplateInformation />
          <WorkersInformation />
        </SettingsPageProvider>
      </Suspense>
    </main>
  );
};

export default SettingsPage;
