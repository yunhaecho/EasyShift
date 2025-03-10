import { UserRole } from '@/app/stores/components/ManageStoreButton';

const WorkerBlock = ({
  shift,
  onClick,
}: {
  shift: {
    shiftId: number;
    userId: number;
    userName: string;
  };
  onClick: () => void;
}) => {
  const userRole = 'ADMIN' as UserRole;

  return (
    <div
      className={`w-full rounded-4 border border-gray-400 bg-white p-8 ${
        userRole === 'ADMIN' && 'cursor-pointer hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <p className="body-14-400 truncate text-left text-gray-900">
        {shift.userName}
      </p>
    </div>
  );
};

export default WorkerBlock;
