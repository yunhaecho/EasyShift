'use client';

import StoreInformation from './components/StoreInformation';
import WorkersInformation from './components/WorkersInformation';
import CreateStoreModal from '@/app/components/CreateStoreModal';
import CreateScheduleModal from '@/app/components/CreateScheduleModal';
import { useState } from 'react';

const SettingsPage = () => {
  const [isCreateStoreModalOpen, setIsCreateStoreModalOpen] = useState(false);
  const [isCreateScheduleModalOpen, setIsCreateScheduleModalOpen] =
    useState(false);

  return (
    <div className="flex w-full flex-col gap-29 overflow-y-auto p-32">
      <StoreInformation
        setIsCreateStoreModalOpen={setIsCreateStoreModalOpen}
        setIsCreateScheduleModalOpen={setIsCreateScheduleModalOpen}
      />
      <WorkersInformation />

      {isCreateStoreModalOpen && (
        <CreateStoreModal
          isOpen={isCreateStoreModalOpen}
          onClose={() => setIsCreateStoreModalOpen(false)}
          dialogTitle="Edit Store"
        />
      )}
      {isCreateScheduleModalOpen && (
        <CreateScheduleModal
          isOpen={isCreateScheduleModalOpen}
          onClose={() => setIsCreateScheduleModalOpen(false)}
          dialogTitle="Edit Schedule"
        />
      )}
    </div>
  );
};

export default SettingsPage;
