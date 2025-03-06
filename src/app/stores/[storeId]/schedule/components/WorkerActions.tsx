import React from 'react';
import { Button } from '@headlessui/react';
import LeaveRequestModal from './LeaveRequestModal';
import useToggle from '@/app/hooks/useToggle';

function WorkerActions({ status }: { status: string }) {
  const [isLeaveRequestModalOpen, toggleLeaveRequestModal] = useToggle(false);

  return (
    <>
      <div className="flex h-28 w-full flex-row items-center justify-center gap-12">
        {status === 'pending' && (
          <Button
            className="body-14-500 h-full w-auto rounded-4 bg-gray-900 px-11 py-4 text-white"
            onClick={toggleLeaveRequestModal}
          >
            Submit Leave Request
          </Button>
        )}
      </div>
      <LeaveRequestModal
        isOpen={isLeaveRequestModalOpen}
        onClose={toggleLeaveRequestModal}
        scheduleDate={'2025-03'}
      />
    </>
  );
}

export default WorkerActions;
