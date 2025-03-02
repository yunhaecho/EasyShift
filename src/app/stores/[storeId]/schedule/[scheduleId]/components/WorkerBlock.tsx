import ExchangeGrayIcon from '@/assets/icons/exchange-gray.svg';
import CloseGrayIcon from '@/assets/icons/close-gray.svg';
import ShiftExchangeModal from './ShiftExchangeModal';
import useToggle from '@/app/hooks/useToggle';
import ConfirmationModal from '@/app/components/modals/ConfirmationModal';
import { formatDateToText } from '@/utils/dateUtils';
import { useState } from 'react';
import useDeleteShiftMutation from '@/api/endpoints/shifts/useDeleteShiftMutation';

const WorkerBlock = ({
  assignedShift,
  targetDate,
}: {
  assignedShift: {
    shiftId: number;
    userId: number;
    userName: string;
  };
  targetDate: string;
}) => {
  const [isShiftExchangeModalOpen, toggleShiftExchangeModal] = useToggle();
  const [shiftToDelete, setShiftToDelete] = useState<{
    shiftId: number;
    userName: string;
  } | null>(null);
  const { mutate: deleteShift } = useDeleteShiftMutation();

  const handleDeleteShift = () => {
    setShiftToDelete({
      shiftId: assignedShift.shiftId,
      userName: assignedShift.userName,
    });
  };

  const handleConfirmDelete = () => {
    if (shiftToDelete) {
      deleteShift(shiftToDelete.shiftId);
    }
    setShiftToDelete(null);
  };

  return (
    <>
      <div className="group flex w-full cursor-pointer items-center justify-between rounded-4 border border-gray-400 bg-white p-8 text-left">
        <span className="body-14-400 truncate text-gray-900">
          {assignedShift.userName}
        </span>
        <div className="flex flex-row gap-8">
          <button
            className="opacity-0 transition-opacity group-hover:opacity-100"
            onClick={toggleShiftExchangeModal}
          >
            <ExchangeGrayIcon />
          </button>
          <button
            className="opacity-0 transition-opacity group-hover:opacity-100"
            onClick={handleDeleteShift}
          >
            <CloseGrayIcon />
          </button>
        </div>
      </div>

      <ShiftExchangeModal
        isOpen={isShiftExchangeModalOpen}
        onClose={toggleShiftExchangeModal}
        assignedShift={assignedShift}
        targetDate={targetDate}
      />
      <ConfirmationModal
        isOpen={shiftToDelete !== null}
        onClose={() => setShiftToDelete(null)}
        onConfirm={handleConfirmDelete}
        title={`Are you sure you want to delete ${shiftToDelete?.userName}'s shift on ${formatDateToText(targetDate)}?`}
        description="This action cannot be undone."
      />
    </>
  );
};

export default WorkerBlock;
