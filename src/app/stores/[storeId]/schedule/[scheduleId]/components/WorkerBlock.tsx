import ExchangeGrayIcon from '@/assets/icons/exchange-gray.svg';
import CloseGrayIcon from '@/assets/icons/close-gray.svg';

const WorkerBlock = ({
  toggleWorkerInfoModal,
  shift,
}: {
  toggleWorkerInfoModal: () => void;
  shift: {
    assignedShiftId: number;
    userId: number;
    userName: string;
  };
}) => {
  return (
    <div
      className="group flex w-full cursor-pointer items-center justify-between rounded-4 border border-gray-400 bg-white p-8 text-left"
      onClick={toggleWorkerInfoModal}
    >
      <span className="body-14-400 truncate text-gray-900">
        {shift.userName}
      </span>
      <div className="flex flex-row gap-8">
        <button className="invisible group-hover:visible">
          <ExchangeGrayIcon />
        </button>
        <button className="invisible group-hover:visible">
          <CloseGrayIcon />
        </button>
      </div>
    </div>
  );
};

export default WorkerBlock;
