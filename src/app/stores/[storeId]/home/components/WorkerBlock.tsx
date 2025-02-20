import { AssignedShift } from '../types';

const WorkerBlock = ({ assignedShift }: { assignedShift: AssignedShift }) => {
  return (
    <div className="rounded-4 border border-gray-400 bg-white p-8">
      <p className="body-14-400 truncate text-gray-900">
        {assignedShift.userName}
      </p>
    </div>
  );
};

export default WorkerBlock;
