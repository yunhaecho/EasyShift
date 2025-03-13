import { AuthContext } from '@/app/context/AuthContext';
import { USER_ROLE } from '@/constants/userRole';
import { useContext } from 'react';

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
  const { userRole } = useContext(AuthContext);

  return (
    <div
      className={`w-full rounded-4 border border-gray-400 bg-white p-8 ${
        userRole === USER_ROLE.ADMIN && 'cursor-pointer hover:bg-gray-100'
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
