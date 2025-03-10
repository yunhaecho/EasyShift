import useToggle from '@/app/hooks/useToggle';
import { UserRole } from '@/app/stores/components/ManageStoreButton';
import WorkerInfoModal from '@/app/users/[userId]/components/WorkerInfoModal';
import UserPageContext from '@/app/context/UserPageContext';
import { useContext } from 'react';

const WorkerBlock = ({
  shift,
}: {
  shift: {
    shiftId: number;
    userId: number;
    userName: string;
  };
}) => {
  const userRole = 'ADMIN' as UserRole;
  const [isWorkerInfoModalOpen, toggleWorkerInfoModal] = useToggle();
  const { selectedUserId, setSelectedUserId } = useContext(UserPageContext);

  const handleWorkerBlockClick = () => {
    if (userRole === 'ADMIN') {
      if (shift.userId !== selectedUserId) {
        setSelectedUserId(shift.userId);
      }
      toggleWorkerInfoModal();
    }
  };

  return (
    <>
      <div
        className={`w-full rounded-4 border border-gray-400 bg-white p-8 ${
          userRole === 'ADMIN' && 'cursor-pointer hover:bg-gray-100'
        }`}
        onClick={handleWorkerBlockClick}
      >
        <p className="body-14-400 truncate text-left text-gray-900">
          {shift.userName}
        </p>
      </div>
      <WorkerInfoModal
        isOpen={isWorkerInfoModalOpen}
        onClose={toggleWorkerInfoModal}
        userId={shift.userId}
      />
    </>
  );
};

export default WorkerBlock;
