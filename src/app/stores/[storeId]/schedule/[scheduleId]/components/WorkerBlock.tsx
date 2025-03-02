import ExchangeGrayIcon from '@/assets/icons/exchange-gray.svg';
import CloseGrayIcon from '@/assets/icons/close-gray.svg';
import ShiftExchangeModal from './ShiftExchangeModal';
import useToggle from '@/app/hooks/useToggle';

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
          <button className="opacity-0 transition-opacity group-hover:opacity-100">
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
    </>
  );
};

export default WorkerBlock;
